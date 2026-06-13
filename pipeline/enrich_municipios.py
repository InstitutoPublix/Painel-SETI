#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Agrega vagas REAIS por município (ano mais recente) a partir da planilha
principal da Base Cursos (NO_MUNICIPIO × QT_VG_TOTAL, somado por IES), para o
mapa de calor da aba 3 usar distribuição municipal real em vez de atribuir
todas as vagas à cidade-sede.

Grava em data/seti_precomputed.json:
  vagasMunicipios: { SIGLA: { ano, itens: [{municipio, vagas, ing, cursos}] } }

Uso:  python3 pipeline/enrich_municipios.py
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

print("Lendo Base Cursos (municípios)...", flush=True)
wb = openpyxl.load_workbook(DATA_DIR / "Base Cursos - Brasil.xlsx", read_only=True, data_only=True)
ws = wb["_IES PÚBLICAS ESTADUAIS_CURSOS "]
# 0 ANO, 6 NO_MUNICIPIO, 15 CO_IES, 30 QT_CURSO, 31 QT_VG_TOTAL, 47 QT_ING
agg = {}     # (sigla, ano, municipio) -> [vagas, ing, cursos]
latest = {}  # sigla -> ano
empty = 0
for row in ws.iter_rows(min_row=2, max_col=48, values_only=True):
    co, ano = row[15], row[0]
    if co is None and ano is None:
        empty += 1
        if empty > 3000:
            break
        continue
    empty = 0
    try:
        co = int(co)
        ano = int(ano)
    except (TypeError, ValueError):
        continue
    if co not in CO_IES_MAP:
        continue
    sigla = CO_IES_MAP[co]
    latest[sigla] = max(latest.get(sigla, 0), ano)
    mun = str(row[6] or "").strip()
    if not mun:
        continue
    a = agg.setdefault((sigla, ano, mun), [0, 0, 0])
    a[0] += int(row[31] or 0)
    a[1] += int(row[47] or 0)
    a[2] += int(row[30] or 0)
wb.close()

out = {}
for (sigla, ano, mun), (vg, ing, cur) in agg.items():
    if ano != latest.get(sigla):
        continue
    out.setdefault(sigla, {"ano": ano, "itens": []})
    out[sigla]["itens"].append({"municipio": mun, "vagas": vg, "ing": ing, "cursos": cur})
for sigla in out:
    out[sigla]["itens"].sort(key=lambda x: -x["vagas"])

data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
data["vagasMunicipios"] = out
src_note = "Base Cursos - Brasil.xlsx / _IES PÚBLICAS ESTADUAIS_CURSOS / Σ QT_VG_TOTAL por NO_MUNICIPIO (ano mais recente)"
for sigla in out:
    data.setdefault("sources", {}).setdefault(sigla, {}).setdefault("vagasMunicipios", src_note)
data["enrichedMunicipios"] = datetime.now().isoformat(timespec="seconds")

backup = JSON_PATH.with_suffix(f".backup-mun-{datetime.now():%Y%m%d-%H%M%S}.json")
shutil.copy2(JSON_PATH, backup)
JSON_PATH.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
tot = sum(len(v["itens"]) for v in out.values())
print(f"OK: {len(out)} IES, {tot} pares IES×município. Backup: {backup.name}")
