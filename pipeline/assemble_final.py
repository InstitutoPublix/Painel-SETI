"""
Extrai os 22 indicadores das 7 IEES paranaenses + 15 IES nacionais de comparação.

Uso:
    python pipeline/assemble_final.py

Saída:
    - stdout: JSON completo (indicadores + fontes)
    - data/seti_precomputed.json: JSON para o dashboard (atualizado automaticamente)
    - stderr: tabela de resumo das 7 IES PR
"""
import json
import sys
import datetime
import openpyxl
from pathlib import Path

DATA_DIR = Path(__file__).parent.parent / "data"

# IES paranaenses — têm dados de SELO, Suplementação, Clusterização, CBO2/RAIS
IEES_PR = ["UEL", "UEM", "UEPG", "UNIOESTE", "UNICENTRO", "UENP", "UNESPAR"]

# IES nacionais de comparação — têm dados de Cursos, IES, CAPES (bases Brasil)
IEES_BR = [
    "USP", "UNESP", "UNICAMP", "UERJ", "UDESC", "UERGS",
    "UECE", "UNEB", "UESB", "UEG", "UEMA", "UEPB", "UEPA", "UEA", "UERN",
]

IEES = IEES_PR + IEES_BR

CO_IES_MAP = {
    # Paraná
    9:     "UEL",
    57:    "UEM",
    730:   "UEPG",
    609:   "UNIOESTE",
    1126:  "UNICENTRO",
    15015: "UENP",
    18492: "UNESPAR",
    # Nacionais (mesmos codes usados no dashboard data-hub.js)
    18165: "USP",
    55:    "UNESP",
    54:    "UNICAMP",
    547:   "UERJ",
    43:    "UDESC",
    3336:  "UERGS",
    29:    "UECE",
    40:    "UNEB",
    688:   "UESB",
    47:    "UEG",
    568:   "UEMA",
    550:   "UEPB",
    38:    "UEPA",
    3172:  "UEA",
    71:    "UERN",
}

INDICATORS = [
    "students", "entrants", "graduates", "courses", "vacancies",
    "occupancy", "dropout", "completion", "doctors",
    "cnpq", "capes", "pg", "pgTop",
    "budget", "execution", "liquidation", "personnel", "supplementation",
    "employment", "salary", "facultyOcc", "cres",
]


# ── helpers ──────────────────────────────────────────────────────────────────

def safe_pct(v, already_pct=False):
    if v is None:
        return None
    try:
        f = float(v)
        if already_pct:
            return round(f, 2)
        return round(f * 100, 2) if f <= 1.0 else round(f, 2)
    except Exception:
        return None


def safe_float(v, d=2):
    if v is None:
        return None
    try:
        return round(float(v), d)
    except Exception:
        return None


def safe_int(v):
    if v is None:
        return None
    try:
        return int(float(v))
    except Exception:
        return None


def _blank():
    return {k: None for k in INDICATORS}


# ── inicialização ─────────────────────────────────────────────────────────────

results = {iees.lower(): _blank() for iees in IEES}
sources = {iees.lower(): {} for iees in IEES}


# ── 1. INEP — Proporção de docentes com doutorado ────────────────────────────
# Fonte: Base IES - Brasil.xlsx / Base_ IES_BRASIL
# Coluna: "Proporção de docentes com doutorado" × 100
# Ano: mais recente por IES (NU_ANO_CENSO)

wb = openpyxl.load_workbook(DATA_DIR / "Base IES - Brasil.xlsx", read_only=True, data_only=True)
ws = wb["Base_ IES_BRASIL"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx = {h: i for i, h in enumerate(headers) if h is not None}
co_col = col_idx.get("CO_IES")
yr_col = col_idx.get("NU_ANO_CENSO")

ies_raw = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    co = row[co_col]
    try:
        co = int(co)
    except Exception:
        continue
    if co not in CO_IES_MAP:
        continue
    y = row[yr_col]
    try:
        y = int(y)
    except Exception:
        y = 0
    iees = CO_IES_MAP[co]
    if iees not in ies_raw or y > ies_raw[iees]["_year"]:
        ies_raw[iees] = {"_year": y}
        for k, i in col_idx.items():
            ies_raw[iees][k] = row[i]
wb.close()

for iees in IEES:
    key = iees.lower()
    if iees not in ies_raw:
        continue
    for cn, v in ies_raw[iees].items():
        if cn and "doutorado" in str(cn).lower() and "propor" in str(cn).lower() and v is not None:
            results[key]["doctors"] = round(float(v) * 100, 2)
            sources[key]["doctors"] = (
                f"Base IES - Brasil.xlsx / Base_ IES_BRASIL"
                f" / '{cn}' × 100 / ano={ies_raw[iees]['_year']}"
            )
            break


# ── 2. INEP — Matrículas, ingressos, concluintes, cursos, vagas ──────────────
# Fonte: Base Cursos - Brasil.xlsx / _IES PÚBLICAS ESTADUAIS_CURSOS
# Colunas: QT_MAT, QT_ING, QT_CONC, QT_VG_TOTAL, QT_CURSO, QT_SIT_DESVINCULADO
# Transformação: soma por IES no ano mais recente;
#   occupancy = QT_ING / QT_VG_TOTAL × 100 (ingressantes / vagas ofertadas)
#   dropout   = QT_SIT_DESVINCULADO / QT_MAT × 100
#   completion = QT_CONC / QT_MAT × 100

wb = openpyxl.load_workbook(DATA_DIR / "Base Cursos - Brasil.xlsx", read_only=True, data_only=True)
ws = wb["_IES PÚBLICAS ESTADUAIS_CURSOS "]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx = {h: i for i, h in enumerate(headers) if h is not None}

yr_col  = col_idx.get("NU_ANO_CENSO")
co_col  = col_idx.get("CO_IES")
qt_mat  = col_idx.get("QT_MAT")
qt_ing  = col_idx.get("QT_ING")
qt_conc = col_idx.get("QT_CONC")
qt_vg   = col_idx.get("QT_VG_TOTAL")
qt_curs = col_idx.get("QT_CURSO")
qt_desv = col_idx.get("QT_SIT_DESVINCULADO")

cursos_data = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    co = row[co_col]
    try:
        co = int(co)
    except Exception:
        continue
    if co not in CO_IES_MAP:
        continue
    y = row[yr_col]
    try:
        y = int(y)
    except Exception:
        y = 0
    iees = CO_IES_MAP[co]
    if iees not in cursos_data:
        cursos_data[iees] = {"_year": 0, "_rows": []}
    if y >= cursos_data[iees]["_year"]:
        if y > cursos_data[iees]["_year"]:
            cursos_data[iees] = {"_year": y, "_rows": []}
        cursos_data[iees]["_rows"].append(row)
wb.close()

for iees in IEES:
    key = iees.lower()
    if iees not in cursos_data:
        continue
    rows = cursos_data[iees]["_rows"]
    year = cursos_data[iees]["_year"]

    students  = sum(safe_int(r[qt_mat])  or 0 for r in rows)
    entrants  = sum(safe_int(r[qt_ing])  or 0 for r in rows)
    graduates = sum(safe_int(r[qt_conc]) or 0 for r in rows)
    vacancies = sum(safe_int(r[qt_vg])   or 0 for r in rows)
    courses   = sum(safe_int(r[qt_curs]) or 0 for r in rows)
    desvinc   = sum(safe_int(r[qt_desv]) or 0 for r in rows)

    occupancy  = round(entrants  / vacancies * 100, 2) if vacancies > 0 else None
    completion = round(graduates / students  * 100, 2) if students  > 0 else None
    dropout    = round(desvinc   / students  * 100, 2) if students  > 0 else None

    results[key].update(
        students=students, entrants=entrants, graduates=graduates,
        vacancies=vacancies, courses=courses,
        occupancy=occupancy, completion=completion, dropout=dropout,
    )
    src = f"Base Cursos - Brasil.xlsx / _IES PÚBLICAS ESTADUAIS_CURSOS / ano={year} / soma por CO_IES"
    sources[key].update(
        students=src + " / QT_MAT",
        entrants=src + " / QT_ING",
        graduates=src + " / QT_CONC",
        vacancies=src + " / QT_VG_TOTAL",
        courses=src + " / QT_CURSO",
        occupancy=src + " / QT_ING ÷ QT_VG_TOTAL × 100",
        dropout=src + " / QT_SIT_DESVINCULADO ÷ QT_MAT × 100",
        completion=src + " / QT_CONC ÷ QT_MAT × 100",
    )


# ── 3. Clusterização — facultyOcc, cres ──────────────────────────────────────
# Fonte: Base de dados para clusterização.xlsx / Estrutura docente PR
# Colunas: "Taxa de ocupação do quadro docente", "Taxa de utilização da CRES"
# Ano: mais recente por IES (coluna ANO)

wb = openpyxl.load_workbook(DATA_DIR / "Base de dados para clusterização.xlsx", read_only=True, data_only=True)
ws = wb["Estrutura docente PR"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx = {h: i for i, h in enumerate(headers) if h is not None}

yr_col   = col_idx.get("ANO")
iees_col = col_idx.get("IEES")
occ_col  = next((i for h, i in col_idx.items() if h and "taxa de ocupa" in str(h).lower() and "quadro" in str(h).lower()), None)
cres_col = next((i for h, i in col_idx.items() if h and "taxa de utiliza" in str(h).lower() and "cres" in str(h).lower()), None)

doc_data = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    iees = row[iees_col] if iees_col is not None else None
    if iees not in IEES_PR:  # base Paraná
        continue
    y = row[yr_col]
    try:
        y = int(y)
    except Exception:
        y = 0
    if iees not in doc_data or y >= doc_data[iees]["_year"]:
        doc_data[iees] = {"_year": y, "_row": row}
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    if iees not in doc_data:
        continue
    row = doc_data[iees]["_row"]
    y   = doc_data[iees]["_year"]
    occ  = row[occ_col]  if occ_col  is not None else None
    cres = row[cres_col] if cres_col is not None else None
    results[key]["facultyOcc"] = safe_pct(occ)
    # cres: valor bruto é fração decimal (pode passar de 1.0 quando > 100%)
    # safe_pct quebra para valores > 1.0, então forçamos ×100 sempre
    try:
        results[key]["cres"] = round(float(cres) * 100, 2) if cres is not None else None
    except Exception:
        results[key]["cres"] = None
    src = f"Base de dados para clusterização.xlsx / Estrutura docente PR / ano={y}"
    sources[key]["facultyOcc"] = src + " / Taxa de ocupação do quadro docente"
    sources[key]["cres"]       = src + " / Taxa de utilização da CRES (×100)"


# ── 4. CNPq — captação de recursos para pesquisa ─────────────────────────────
# Fonte: Base CNPq - Brasil.xlsx / Base_CNPq_BR
# Colunas: "01_Instituição", "Ano", "Captação de recursos para pesquisa"
# Transformação: soma por IES no ano mais recente (R$ milhões)
# Match por nome da instituição (busca substring); UNICENTRO/UNESPAR podem não ter match.

wb = openpyxl.load_workbook(DATA_DIR / "Base CNPq - Brasil.xlsx", read_only=True, data_only=True)
ws = wb["Base_CNPq_BR"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx  = {h: i for i, h in enumerate(headers) if h is not None}
inst_col = col_idx.get("01_Instituição")
yr_col   = col_idx.get("Ano")
val_col  = col_idx.get("Captação de recursos para pesquisa")

CNPQ_MATCH = {
    "UEL":      lambda s: "LONDRINA" in s or "UEL" in s,
    "UEM":      lambda s: "MARINGÁ" in s or "MARINGA" in s,
    "UEPG":     lambda s: "PONTA GROSSA" in s,
    "UNIOESTE": lambda s: "OESTE DO PARANÁ" in s or "OESTE DO PARANA" in s or "UNIOESTE" in s,
    "UNICENTRO":lambda s: "CENTRO OESTE" in s,
    "UENP":     lambda s: "NORTE DO PARANÁ" in s or "NORTE DO PARANA" in s,
    "UNESPAR":  lambda s: "ESTADUAL DO PARANÁ" in s and "NORTE" not in s,
}

cnpq_data = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    inst = row[inst_col] if inst_col is not None else None
    y    = row[yr_col]   if yr_col   is not None else None
    val  = row[val_col]  if val_col  is not None else None
    if not inst or not isinstance(inst, str):
        continue
    inst_up = inst.upper()
    for iees in CNPQ_MATCH:
        if CNPQ_MATCH[iees](inst_up):
            try:
                y_int = int(y)
            except Exception:
                y_int = 0
            try:
                v = float(val) if val else 0
            except Exception:
                v = 0
            cnpq_data[(iees, y_int)] = cnpq_data.get((iees, y_int), 0) + v
            break
wb.close()

for iees in IEES:
    key = iees.lower()
    years = [y for (i, y) in cnpq_data if i == iees]
    if years:
        max_y = max(years)
        total = cnpq_data.get((iees, max_y), 0)
        results[key]["cnpq"] = round(total / 1e6, 3)
        sources[key]["cnpq"] = (
            f"Base CNPq - Brasil.xlsx / Base_CNPq_BR"
            f" / Captação de recursos para pesquisa / ano={max_y} (R$ milhões)"
        )


# ── 5. CAPES — programas de pós-graduação ────────────────────────────────────
# Fonte: Base CAPES- Pós-Graduação - Brasil.xlsx / Base_Cursos
# Colunas: CD_CONCEITO_CURSO, NM_PROGRAMA_IES, CO_IES, AN_BASE,
#          "Conceito médio dos programas de pós-graduação"
# Transformação: pg = programas distintos; pgTop = programas com conceito ≥ 5;
#   capes = conceito médio (coluna pré-calculada se disponível, senão média dos conceitos)

wb = openpyxl.load_workbook(DATA_DIR / "Base CAPES- Pós-Graduação - Brasil.xlsx", read_only=True, data_only=True)
ws = wb["Base_Cursos"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx    = {h: i for i, h in enumerate(headers) if h is not None}
yr_col     = col_idx.get("AN_BASE")
co_col     = col_idx.get("CO_IES")
sg_col     = col_idx.get("SG_ENTIDADE_ENSINO")
prog_col   = col_idx.get("NM_PROGRAMA_IES")
conc_col   = col_idx.get("CD_CONCEITO_CURSO")
media_col  = col_idx.get("Conceito médio dos programas de pós-graduação")

capes_raw = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    co = row[co_col] if co_col is not None else None
    try:
        co_int = int(co)
    except Exception:
        co_int = 0
    iees = CO_IES_MAP.get(co_int)
    if iees is None:
        sg = row[sg_col] if sg_col is not None else None
        if sg:
            sg_up = str(sg).upper()
            iees = next((i for i in IEES if i in sg_up), None)
    if iees not in IEES:
        continue

    y = row[yr_col]
    try:
        y_int = int(y)
    except Exception:
        y_int = 0
    prog  = row[prog_col]  if prog_col  is not None else None
    c     = row[conc_col]  if conc_col  is not None else None
    media = row[media_col] if media_col is not None else None
    try:
        c_int = int(c) if c is not None else 0
    except Exception:
        c_int = 0

    if iees not in capes_raw:
        capes_raw[iees] = {}
    if y_int not in capes_raw[iees]:
        capes_raw[iees][y_int] = {"progs": {}, "media": None}

    if media is not None and capes_raw[iees][y_int]["media"] is None:
        try:
            mv = float(media)
            if mv > 0:
                capes_raw[iees][y_int]["media"] = mv
        except Exception:
            pass

    if prog:
        cur = capes_raw[iees][y_int]["progs"].get(prog, 0)
        if c_int > cur:
            capes_raw[iees][y_int]["progs"][prog] = c_int
wb.close()

for iees in IEES:
    key = iees.lower()
    if iees not in capes_raw:
        continue
    years = sorted(capes_raw[iees].keys(), reverse=True)
    if not years:
        continue
    max_y = years[0]
    data  = capes_raw[iees][max_y]
    progs = data["progs"]
    media = data["media"]
    all_c = [v for v in progs.values() if v > 0]

    pg_total = len(progs)
    pg_top   = sum(1 for c in all_c if c >= 5)
    capes_mean = safe_float(media) if media is not None else (
        round(sum(all_c) / len(all_c), 2) if all_c else None
    )
    results[key].update(pg=pg_total, pgTop=pg_top, capes=capes_mean)
    src = f"Base CAPES- Pós-Graduação - Brasil.xlsx / Base_Cursos / AN_BASE={max_y}"
    sources[key].update(
        pg=src + " / NM_PROGRAMA_IES distintos",
        pgTop=src + " / CD_CONCEITO_CURSO ≥ 5",
        capes=src + " / Conceito médio dos programas",
    )


# ── 6. SELO — orçamento, execução, liquidação, pessoal ───────────────────────
# Fonte budget: Base SELO - Paraná.xlsx / Base
#   Coluna: Liquidado / UO-Sigla / Exercício
#   Transformação: soma Liquidado por IES/ano (R$ milhões)
#
# Fonte taxas: Base de dados para clusterização.xlsx / Dinâmica orçamentária PR
#   Colunas: "Taxa de Execução Orçamentária (Empenho)", "Taxa de Liquidação",
#            "Participação de Pessoal e Encargos no Total da Despesa"
#   Nota: personnel = valor global (70.34%) idêntico para todas as IES nesta sheet;
#         o loader JS do dashboard calcula per-IES via GND1/Total diretamente da SELO.

wb = openpyxl.load_workbook(DATA_DIR / "Base SELO - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Base"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx  = {h: i for i, h in enumerate(headers) if h is not None}
uo_col   = col_idx.get("UO - Sigla")
yr_col   = col_idx.get("Exercício")
liq_col  = col_idx.get("Liquidado")
pes_col  = col_idx.get("Participação de Pessoal e Encargos no Total da Despesa")

selo_liq = {}
selo_pes = {}  # {(uo, year): valor decimal (ex: 0.7034 = 70.34%)}
for row in ws.iter_rows(min_row=2, values_only=True):
    uo = row[uo_col] if uo_col is not None else None
    if uo not in IEES_PR:
        continue
    y = row[yr_col]
    try:
        y = int(y)
    except Exception:
        continue
    liq = row[liq_col] if liq_col is not None else 0
    try:
        liq = float(liq) if liq else 0
    except Exception:
        liq = 0
    selo_liq[(uo, y)] = selo_liq.get((uo, y), 0) + liq
    # personnel: coluna pré-calculada; mesmo valor repete para todas as linhas do IES/ano
    if pes_col is not None and (uo, y) not in selo_pes:
        pes = row[pes_col]
        if pes is not None:
            try:
                selo_pes[(uo, y)] = float(pes)
            except Exception:
                pass
wb.close()

wb = openpyxl.load_workbook(DATA_DIR / "Base de dados para clusterização.xlsx", read_only=True, data_only=True)
ws = wb["Dinâmica orçamentária PR"]
headers = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
col_idx_d = {h: i for i, h in enumerate(headers) if h is not None}
uo_col_d  = col_idx_d.get("UO - Sigla")
yr_col_d  = col_idx_d.get("Exercício")
exec_col  = next((i for h, i in col_idx_d.items() if h and "execu" in str(h).lower() and ("empenho" in str(h).lower() or "taxa" in str(h).lower())), None)
liq_rate  = next((i for h, i in col_idx_d.items() if h and "liquida" in str(h).lower() and "taxa" in str(h).lower()), None)
pes_col   = next((i for h, i in col_idx_d.items() if h and "pessoal" in str(h).lower() and "participa" in str(h).lower()), None)

din_data = {}
for row in ws.iter_rows(min_row=2, values_only=True):
    uo = row[uo_col_d] if uo_col_d is not None else None
    if uo not in IEES:
        continue
    y = row[yr_col_d]
    try:
        y = int(y)
    except Exception:
        continue
    key2 = (uo, y)
    din_data[key2] = {
        "exec": row[exec_col] if exec_col is not None else None,
        "liq":  row[liq_rate] if liq_rate is not None else None,
        "pes":  row[pes_col]  if pes_col  is not None else None,
    }
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    budget = exec_r = liq_r = pes_r = year_used = None
    for y_pref in [2024, 2023, 2025]:
        liq_total = selo_liq.get((iees, y_pref), 0)
        if liq_total > 0:
            budget    = round(liq_total / 1e6, 2)
            d_rates   = din_data.get((iees, y_pref), {})
            exec_r    = d_rates.get("exec")
            liq_r     = d_rates.get("liq")
            # personnel: primeiro tenta da SELO (per-IES); fallback na Clusterização (global)
            pes_r_selo = selo_pes.get((iees, y_pref))
            pes_r = pes_r_selo if pes_r_selo is not None else d_rates.get("pes")
            year_used = y_pref
            break
    results[key].update(
        budget=budget,
        execution=safe_pct(exec_r),
        liquidation=safe_pct(liq_r),
        personnel=round(pes_r * 100, 2) if pes_r is not None else None,
    )
    pes_src = (
        f"Base SELO - Paraná.xlsx / Base / Participação de Pessoal e Encargos / ano={year_used or 'N/D'} (per-IES)"
        if selo_pes.get((iees, year_used or 0))
        else f"Base de dados para clusterização.xlsx / Dinâmica orçamentária PR / Participação Pessoal / ano={year_used or 'N/D'} (fallback global)"
    )
    sources[key].update(
        budget=f"Base SELO - Paraná.xlsx / Base / sum(Liquidado) / UO-Sigla / ano={year_used or 'N/D'} (R$ milhões)",
        execution=f"Base de dados para clusterização.xlsx / Dinâmica orçamentária PR / Taxa de Execução / ano={year_used or 'N/D'}",
        liquidation=f"Base de dados para clusterização.xlsx / Dinâmica orçamentária PR / Taxa de Liquidação / ano={year_used or 'N/D'}",
        personnel=pes_src,
    )


# ── 7. Suplementação ─────────────────────────────────────────────────────────
# Fonte: Dados de Suplementação das Universidades - Paraná.xlsx / matriz_cluster
# Coluna: col[3] — "% Suplementação" (proporção histórica de suplementações)

wb = openpyxl.load_workbook(DATA_DIR / "Dados de Suplementação das Universidades - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["matriz_cluster"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header
for row in ws.iter_rows(min_row=2, values_only=True):
    iees = row[0] if row else None
    if iees not in IEES_PR:  # base Paraná
        continue
    supl = row[3] if len(row) > 3 else None
    key  = iees.lower()
    results[key]["supplementation"] = safe_pct(supl)
    sources[key]["supplementation"] = (
        "Dados de Suplementação das Universidades - Paraná.xlsx"
        " / matriz_cluster / col[3] % Suplementação (histórico)"
    )
wb.close()


# ── 8. CBO2/RAIS — taxa de inserção e salário médio ──────────────────────────
# Fonte: CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx / Análise Quantitativa (BI e Cons
# Colunas (0-based): 1=IES, 7=egressos2021, 9=enc_PR_2024, 11=sal_2024,
#                    2=egressos2020, 4=enc_PR_2023, 6=sal_2023
# Transformação: employment = enc_PR ÷ egressos × 100 (coorte 2021/RAIS2024, fallback 2020/2023)

wb = openpyxl.load_workbook(DATA_DIR / "CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Análise Quantitativa (BI e Cons"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header

for row in ws.iter_rows(min_row=2, max_row=15, values_only=True):
    if not row or row[1] is None:
        continue
    iees = str(row[1]).strip().upper()
    if iees not in IEES_PR:  # base Paraná
        continue
    key = iees.lower()

    eg_2021    = row[7]
    enc_pr_24  = row[9]
    sal_2024   = row[11]
    eg_2020    = row[2]
    enc_pr_23  = row[4]
    sal_2023   = row[6]

    emp_rate = None
    sal_src  = None
    try:
        if eg_2021 and enc_pr_24 and float(eg_2021) > 0:
            emp_rate = float(enc_pr_24) / float(eg_2021)
            sal_src  = "coorte 2021 / RAIS 2024"
        elif eg_2020 and enc_pr_23 and float(eg_2020) > 0:
            emp_rate = float(enc_pr_23) / float(eg_2020)
            sal_src  = "coorte 2020 / RAIS 2023"
    except Exception:
        pass

    salary = None
    try:
        s = sal_2024 if (sal_2024 and isinstance(sal_2024, (int, float))) else sal_2023
        if isinstance(s, (int, float)):
            salary = safe_float(s, 0)
    except Exception:
        pass

    results[key]["employment"] = safe_pct(emp_rate)
    results[key]["salary"]     = salary
    sources[key]["employment"] = (
        f"CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx"
        f" / Análise Quantitativa / enc_PR ÷ egressos × 100 / {sal_src or 'N/D'}"
    )
    sources[key]["salary"] = (
        f"CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx"
        f" / Análise Quantitativa / média salarial egressos PR+CBO2 / {sal_src or 'N/D'}"
    )
wb.close()


# ── Saída stdout (retrocompatível) ────────────────────────────────────────────

print(json.dumps({"results": results, "sources": sources}, indent=2, ensure_ascii=False))

# ── Salva seti_precomputed.json para o dashboard ──────────────────────────────
# Formato: {year, indicators: {SIGLA: {indicador: valor, ...}}, sources, generated}
# O dashboard carrega este JSON em vez dos XLSX pesados (CAPES 250MB, Cursos 72MB, etc.)

precomputed = {
    "generated": datetime.datetime.now().isoformat(timespec="seconds"),
    "year": "2024",
    "indicators": {iees: results[iees.lower()] for iees in IEES},
    "sources":    {iees: sources[iees.lower()] for iees in IEES},
}
json_path = DATA_DIR / "seti_precomputed.json"
with open(json_path, "w", encoding="utf-8") as _f:
    json.dump(precomputed, _f, indent=2, ensure_ascii=False)
print(f"[OK] {json_path}", file=sys.stderr)

# ── Tabela de resumo (stderr) ─────────────────────────────────────────────────

header = f"{'Indicador':<20}" + "".join(f"{i:<13}" for i in IEES)
print("", file=sys.stderr)
print("=" * (20 + 13 * len(IEES)), file=sys.stderr)
print(header, file=sys.stderr)
print("=" * (20 + 13 * len(IEES)), file=sys.stderr)
for ind in INDICATORS:
    row_str = f"{ind:<20}"
    for iees in IEES:
        v = results[iees.lower()].get(ind)
        row_str += f"{str(v):<13}"
    print(row_str, file=sys.stderr)
print("=" * (20 + 13 * len(IEES)), file=sys.stderr)
