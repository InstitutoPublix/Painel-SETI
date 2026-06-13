#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Extrai da Base CAPES (Base_Docentes) os percentuais REAIS por IES/ano que a
aba 5 do painel estimava por fórmula, e o detalhamento por programa que
permite restaurar a "Tabela por programa de pós-graduação" com dados reais:

  - capesDocPermanentes : % docentes permanentes da pós (IND-63)
  - capesDocEstrangeiros: % docentes estrangeiros da pós (IND-64)
  - capesDocBolsa       : % docentes com bolsa de produtividade (IND-65)
  - capesPrograms       : por IES → [{nome, grau, conceito, área, contagens}]

Docentes deduplicados por ID_PESSOA dentro de cada IES/ano.
Uso:  python3 pipeline/enrich_capes.py
"""
import json
import re
import shutil
from datetime import datetime
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
JSON_PATH = DATA_DIR / "seti_precomputed.json"

_src = (ROOT / "pipeline" / "assemble_final.py").read_text(encoding="utf-8")
_m = re.search(r"CO_IES_MAP = \{(.*?)\n\}", _src, re.S)
CO_IES_MAP = {int(co): s for co, s in re.findall(r"(\d+)\s*:\s*\"([A-Za-z]+)\"", _m.group(1))}

# Índices 0-based: 0 AN_BASE, 2 NM_AREA_AVALIACAO, 5 CD_PROGRAMA_IES,
# 6 NM_PROGRAMA_IES, 7 NM_GRAU_PROGRAMA, 9 CD_CONCEITO_PROGRAMA, 11 CO_IES,
# 19 ID_PESSOA, 25 DS_TIPO_NACIONALIDADE, 27 DS_CATEGORIA_DOCENTE,
# 30 CD_CAT_BOLSA_PRODUTIVIDADE
print("Lendo Base CAPES (Base_Docentes) — pode demorar alguns minutos...", flush=True)
wb = openpyxl.load_workbook(DATA_DIR / "Base CAPES- Pós-Graduação - Brasil.xlsx",
                            read_only=True, data_only=True)
ws = wb["Base_Docentes"]

ies_year = {}   # (sigla, ano) -> {all:set, perm:set, est:set, bolsa:set}
programs = {}   # (sigla, ano, cd_prog) -> {nome, grau, conceito, area, ids...}
empty_streak = 0
nrows = 0
for i, row in enumerate(ws.iter_rows(min_row=2, max_col=31, values_only=True)):
    if i and i % 500000 == 0:
        print(f"  ... {i} linhas varridas, {nrows} válidas", flush=True)
    co = row[11]
    ano = row[0]
    if co is None and ano is None:
        empty_streak += 1
        if empty_streak > 400000:
            break
        continue
    empty_streak = 0
    try:
        co = int(co)
        ano = int(ano)
    except (TypeError, ValueError):
        continue
    if co not in CO_IES_MAP:
        continue
    sigla = CO_IES_MAP[co]
    nrows += 1
    pid = row[19] if row[19] is not None else f"r{i}"

    rec = ies_year.setdefault((sigla, ano), {"all": set(), "perm": set(), "est": set(), "bolsa": set()})
    rec["all"].add(pid)
    if str(row[27]).strip().upper() == "PERMANENTE":
        rec["perm"].add(pid)
    if str(row[25]).strip().upper() == "ESTRANGEIRO":
        rec["est"].add(pid)
    bolsa = str(row[30]).strip().upper() if row[30] is not None else "NA"
    if bolsa not in ("NA", "NONE", ""):
        rec["bolsa"].add(pid)

    cd_prog = row[5]
    if cd_prog is not None:
        p = programs.setdefault((sigla, ano, str(cd_prog)), {
            "nome": str(row[6] or "").strip(), "grau": str(row[7] or "").strip(),
            "conceito": row[9], "area": str(row[2] or "").strip(),
            "all": set(), "perm": set(), "est": set(), "bolsa": set()})
        p["all"].add(pid)
        if str(row[27]).strip().upper() == "PERMANENTE":
            p["perm"].add(pid)
        if str(row[25]).strip().upper() == "ESTRANGEIRO":
            p["est"].add(pid)
        if bolsa not in ("NA", "NONE", ""):
            p["bolsa"].add(pid)
wb.close()
print(f"Base CAPES: {nrows} linhas válidas, {len(ies_year)} pares IES×ano, {len(programs)} programas", flush=True)


def pct(a, b):
    return round(len(a) / len(b) * 100, 1) if b else None


data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
by_year = data.setdefault("byYear", {})
sources = data.setdefault("sources", {})
SRC = "Base CAPES- Pós-Graduação - Brasil.xlsx / Base_Docentes / docentes distintos (ID_PESSOA) por IES e AN_BASE"

added = 0
anos_vistos = sorted({a for (_, a) in ies_year})
for (sigla, ano), rec in ies_year.items():
    out = {
        "capesDocPermanentes": pct(rec["perm"], rec["all"]),
        "capesDocEstrangeiros": pct(rec["est"], rec["all"]),
        "capesDocBolsa": pct(rec["bolsa"], rec["all"]),
        "capesDocentesTotal": len(rec["all"]),
    }
    slot = by_year.setdefault(sigla, {}).setdefault(str(ano), {})
    for k, v in out.items():
        if v is not None and (k not in slot or slot[k] is None):
            slot[k] = v
            added += 1
    src = sources.setdefault(sigla, {})
    src.setdefault("capesDocPermanentes", SRC + " / DS_CATEGORIA_DOCENTE=PERMANENTE ÷ total × 100")
    src.setdefault("capesDocEstrangeiros", SRC + " / DS_TIPO_NACIONALIDADE=ESTRANGEIRO ÷ total × 100")
    src.setdefault("capesDocBolsa", SRC + " / CD_CAT_BOLSA_PRODUTIVIDADE ≠ NA ÷ total × 100")

# Programas: ano mais recente de cada IES
capes_programs = {}
latest = {}
for (sigla, ano, cd) in programs:
    latest[sigla] = max(latest.get(sigla, 0), ano)
for (sigla, ano, cd), p in programs.items():
    if ano != latest[sigla]:
        continue
    try:
        conceito = float(p["conceito"])
    except (TypeError, ValueError):
        conceito = None
    capes_programs.setdefault(sigla, []).append({
        "nome": p["nome"], "grau": p["grau"], "area": p["area"],
        "conceito": conceito, "ano": ano,
        "docentes": len(p["all"]), "permanentes": len(p["perm"]),
        "estrangeiros": len(p["est"]), "bolsistas": len(p["bolsa"]),
    })
for sigla in capes_programs:
    capes_programs[sigla].sort(key=lambda x: (-(x["conceito"] or 0), x["nome"]))
data["capesPrograms"] = capes_programs

data["enrichedCapes"] = datetime.now().isoformat(timespec="seconds")
backup = JSON_PATH.with_suffix(f".backup-capes-{datetime.now():%Y%m%d-%H%M%S}.json")
shutil.copy2(JSON_PATH, backup)
JSON_PATH.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
print(f"OK: {added} campos por IES×ano; programas de {len(capes_programs)} IES; anos: {anos_vistos}")
print(f"Backup: {backup.name} | JSON: {JSON_PATH.stat().st_size / 1e6:.1f} MB")
