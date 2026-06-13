#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Dois fechamentos de dados reais:

1. Perfil ocupacional CBO2 (IND-76/77/78) — microdados reais da planilha
   Rais-Sul-2023e2024 (CBO2 _ RAIS): distribuição dos egressos por grande
   grupo ocupacional (1º dígito do CBO2), diversidade ocupacional (ocupações
   distintas) e municípios de destino distintos, por IEES. Substitui o array
   fixo [18,34,15,10,9,5,9] do painel.

2. Ocupação real por município (IND-32) — média das ocupações municipais
   (ingressantes ÷ vagas) por IEES, derivada de vagasMunicipios (já no JSON).
   Substitui a fórmula clamp(ocupação + (territory-72)×0,08).

Grava em byYear[SIGLA]["2024"]:
  cbo2Profile (7 %), cbo2Diversity (int), cbo2MunDestino (int), muniOccupancy (%)

Uso:  python3 pipeline/enrich_cbo2_muni.py
"""
import json
import shutil
from collections import defaultdict
from datetime import datetime
from pathlib import Path

import openpyxl

ROOT = Path(__file__).resolve().parent.parent
DATA_DIR = ROOT / "data"
JSON_PATH = DATA_DIR / "seti_precomputed.json"

# 7 grandes grupos do painel (rótulos) ↔ 1º dígito do CBO2
#   1→Diretores/gerentes, 2→Profissionais ciências, 3→Técnicos,
#   4→Administrativos, 5→Serviços/comércio, 6→Agropecuária, 7/8/9→Produção ind.
#   0 (forças armadas, ~0,6%) é desprezado para fechar 100% nos 7 grupos.
def cbo_bucket(cbo2):
    d = str(cbo2).strip().zfill(2)[0]
    return {"1": 0, "2": 1, "3": 2, "4": 3, "5": 4, "6": 5,
            "7": 6, "8": 6, "9": 6}.get(d)

SIGLA_FIX = {"UNICENTRO": "UNICENTRO", "UNIOESTE": "UNIOESTE"}  # uppercase já resolve

print("Lendo CBO2 _ RAIS (Rais-Sul)...", flush=True)
wb = openpyxl.load_workbook(DATA_DIR / "CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx",
                            read_only=True, data_only=True)
ws = wb["Rais-Sul-2023e2024"]
# 1 ANO_EGRESSO, 2 ANO_RAIS, 3 IEES, 8 CODIGO_CBO, 10 CBO2, 11 OCUPACAO_CBO, 12 MUNICIPIO
rows = list(ws.iter_rows(min_row=2, values_only=True))
wb.close()
# coorte mais recente disponível
coortes = sorted({(r[1], r[2]) for r in rows if r[1] and r[2]})
alvo = coortes[-1] if coortes else None
print(f"Coortes: {coortes} → usando {alvo}")

prof = defaultdict(lambda: [0] * 7)      # sigla -> contagem por bucket
ocup = defaultdict(set)                   # sigla -> ocupações distintas
muni = defaultdict(set)                   # sigla -> municípios distintos
for r in rows:
    if (r[1], r[2]) != alvo:
        continue
    sig = str(r[3] or "").strip().upper()
    if not sig:
        continue
    b = cbo_bucket(r[10])
    if b is not None:
        prof[sig][b] += 1
    if r[11]:
        ocup[sig].add(str(r[11]).strip())
    if r[12]:
        muni[sig].add(str(r[12]).strip())

cbo2_fields = {}
for sig, counts in prof.items():
    total = sum(counts)
    if total <= 0:
        continue
    cbo2_fields[sig] = {
        "cbo2Profile": [round(c / total * 100, 1) for c in counts],
        "cbo2Diversity": len(ocup[sig]),
        "cbo2MunDestino": len(muni[sig]),
    }
print(f"CBO2: {len(cbo2_fields)} IEES — ex. UEL: {cbo2_fields.get('UEL')}")

# ── Ocupação municipal real a partir de vagasMunicipios (já no JSON) ─────────
data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
by_year = data.setdefault("byYear", {})
sources = data.setdefault("sources", {})
vm = data.get("vagasMunicipios", {})

muni_occ = {}
for sig, entry in vm.items():
    occs = []
    for it in entry.get("itens", []):
        if it.get("vagas", 0) > 0 and it.get("ing") is not None:
            occs.append(min(it["ing"] / it["vagas"] * 100, 100))
    if occs:
        muni_occ[sig] = round(sum(occs) / len(occs), 1)

added = 0
SRC_CBO = "CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx / Rais-Sul-2023e2024 / coorte " + str(alvo)
SRC_MUNI = "Base Cursos - Brasil.xlsx / vagasMunicipios / média de (QT_ING÷QT_VG) por município"
for sig, f in cbo2_fields.items():
    slot = by_year.setdefault(sig, {}).setdefault("2024", {})
    for k, v in f.items():
        if k not in slot or slot[k] is None:
            slot[k] = v
            added += 1
    s = sources.setdefault(sig, {})
    s.setdefault("cbo2Profile", SRC_CBO + " / distribuição por 1º dígito CBO2")
    s.setdefault("cbo2Diversity", SRC_CBO + " / OCUPACAO_CBO distintas")
    s.setdefault("cbo2MunDestino", SRC_CBO + " / MUNICIPIO_NOME distintos")
for sig, v in muni_occ.items():
    slot = by_year.setdefault(sig, {}).setdefault("2024", {})
    if slot.get("muniOccupancy") is None:
        slot["muniOccupancy"] = v
        added += 1
    sources.setdefault(sig, {}).setdefault("muniOccupancy", SRC_MUNI)

data["enrichedCbo2Muni"] = datetime.now().isoformat(timespec="seconds")
backup = JSON_PATH.with_suffix(f".backup-cbo2-{datetime.now():%Y%m%d-%H%M%S}.json")
shutil.copy2(JSON_PATH, backup)
JSON_PATH.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
print(f"OK: {added} campos. muniOccupancy p/ {len(muni_occ)} IES. Backup: {backup.name}")
