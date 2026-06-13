#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Orquestrador do pipeline completo do Painel SETI.

Gera data/seti_precomputed.json a partir das bases XLSX, na ordem correta:
  1. assemble_final.py    — base (indicadores 2024 + 8050 2024-2026)
  2. enrich_precomputed.py— histórico real 2020-2024 (Cursos + IES) + turno,
                            escola pública, mobilidade, composição por grau
  3. enrich_capes.py      — % permanentes/estrangeiros/bolsa + programas (CAPES)
  4. enrich_cnpq.py       — captação e vínculos reais das 40 IES (CNPq)
  5. enrich_municipios.py — vagas reais por município (Cursos)
  6. enrich_cbo2_muni.py  — perfil CBO2 + ocupação municipal (depende do passo 5)
  7. normalize_json_keys.py — normaliza chaves case-variantes (UnDF) — por último

A ordem importa: todos leem/gravam o mesmo JSON sequencialmente; o passo 6
depende de vagasMunicipios (passo 5) e o passo 7 deve ser o último.

Uso:  python3 pipeline/build_all.py
"""
import subprocess
import sys
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
STEPS = [
    "assemble_final.py",
    "enrich_precomputed.py",
    "enrich_capes.py",
    "enrich_cnpq.py",
    "enrich_municipios.py",
    "enrich_cbo2_muni.py",
    "normalize_json_keys.py",
]

print("=" * 64)
print("Pipeline completo do Painel SETI — gerando seti_precomputed.json")
print("=" * 64)
t0 = time.time()
for i, script in enumerate(STEPS, 1):
    path = ROOT / "pipeline" / script
    print(f"\n[{i}/{len(STEPS)}] {script}")
    print("-" * 64)
    r = subprocess.run([sys.executable, str(path)], cwd=str(ROOT))
    if r.returncode != 0:
        print(f"\n[ERRO] Falha em {script} (código {r.returncode}). Pipeline interrompido.")
        sys.exit(r.returncode)
print("\n" + "=" * 64)
print(f"[OK] Pipeline completo em {time.time() - t0:.0f}s.")
print("Agora rode:  python3 serve.py")
print("=" * 64)
