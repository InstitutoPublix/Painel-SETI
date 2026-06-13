#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Normaliza chaves de sigla case-variantes no seti_precomputed.json.

Contexto: assemble_final.py grava byYear/indicators usando o casing da lista
IEES (ex.: "UnDF"); os scripts de enriquecimento usavam CO_IES_MAP.upper()
(ex.: "UNDF"). Como o runtime faz toUpperCase() ao ler (getRealIndicators),
as duas chaves colidem em DATA e o merge por campo fica dependente da ordem de
carga — um valor real podia ser sobrescrito por null.

Este passo funde qualquer chave cujo UPPERCASE coincida com uma chave canônica
(a de `indicators`), preferindo valores não-nulos, e remove a variante. É
idempotente — pode rodar como última etapa do pipeline.

Uso:  python3 pipeline/normalize_json_keys.py
"""
import json
import shutil
from datetime import datetime
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
JSON_PATH = ROOT / "data" / "seti_precomputed.json"

data = json.loads(JSON_PATH.read_text(encoding="utf-8"))

# Casing canônico = chaves de `indicators` (autoridade do assemble_final).
canon = {k.upper(): k for k in (data.get("indicators") or {})}

def _merge_into(dst, src):
    """Funde src em dst preferindo valores não-nulos já existentes em dst."""
    if isinstance(dst, dict) and isinstance(src, dict):
        for k, v in src.items():
            if k not in dst or dst[k] is None:
                dst[k] = v
            elif isinstance(dst[k], dict) and isinstance(v, dict):
                _merge_into(dst[k], v)
        return dst
    return dst

changed = 0
# Seções com chave de 1º nível = sigla
for section in ("byYear", "sources", "clusters", "capesPrograms", "vagasMunicipios"):
    blk = data.get(section)
    if not isinstance(blk, dict):
        continue
    for key in list(blk.keys()):
        target = canon.get(key.upper())
        if target and target != key:
            if target in blk:
                _merge_into(blk[target], blk[key])
            else:
                blk[target] = blk[key]
            del blk[key]
            changed += 1
            print(f"  {section}: '{key}' → '{target}'")

if changed:
    data["normalizedKeys"] = datetime.now().isoformat(timespec="seconds")
    backup = JSON_PATH.with_suffix(f".backup-norm-{datetime.now():%Y%m%d-%H%M%S}.json")
    shutil.copy2(JSON_PATH, backup)
    JSON_PATH.write_text(json.dumps(data, ensure_ascii=False), encoding="utf-8")
    print(f"OK: {changed} chaves normalizadas. Backup: {backup.name}")
else:
    print("OK: nenhuma chave case-variante encontrada (já normalizado).")
