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

# Garante UTF-8 no stdout (Windows usa cp1252 por padrão)
sys.stdout.reconfigure(encoding="utf-8")

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
    "employment", "salary", "insertionRatePR",
    "facultyOcc", "cres", "tide",
    "fundoParana", "fundoExec",
    "egressosMunicipios",
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


# ── 3. Docentes — facultyOcc, cres, tide ─────────────────────────────────────
# Fonte: Base Docentes - Paraná.xlsx / Base_Docentes_PR
# Colunas (0-based):
#   [0]  ANO        [2]  IEES
#   [20] Taxa de ocupação do quadro docente         → facultyOcc
#   [25] Participação do TIDE no quadro disponível  → tide  (novo)
#   [30] Taxa de utilização da CRES                 → cres
# Ano: mais recente por IES; dentro do ano, último registro do arquivo

wb = openpyxl.load_workbook(DATA_DIR / "Base Docentes - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Base_Docentes_PR"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header

doc_latest = {}  # iees → {"_year": int, "_row": tuple}
for row in ws.iter_rows(min_row=2, values_only=True):
    iees = row[2] if len(row) > 2 else None
    if iees not in IEES_PR:
        continue
    try:
        y = int(row[0])
    except (TypeError, ValueError):
        continue
    if iees not in doc_latest or y >= doc_latest[iees]["_year"]:
        doc_latest[iees] = {"_year": y, "_row": row}
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    if iees not in doc_latest:
        continue
    row = doc_latest[iees]["_row"]
    y   = doc_latest[iees]["_year"]
    occ  = row[20] if len(row) > 20 else None
    tide = row[25] if len(row) > 25 else None
    cres = row[30] if len(row) > 30 else None
    results[key]["facultyOcc"] = safe_pct(occ)
    # cres: fração decimal — pode ultrapassar 1.0 (>100%), forçamos ×100
    try:
        results[key]["cres"] = round(float(cres) * 100, 2) if cres is not None else None
    except Exception:
        results[key]["cres"] = None
    results[key]["tide"] = safe_pct(tide)
    src = f"Base Docentes - Paraná.xlsx / Base_Docentes_PR / ano={y}"
    sources[key]["facultyOcc"] = src + " / Taxa de ocupação do quadro docente (col 20)"
    sources[key]["cres"]       = src + " / Taxa de utilização da CRES ×100 (col 30)"
    sources[key]["tide"]       = src + " / Participação do TIDE no quadro disponível (col 25)"


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
    # UNICENTRO não tem registros na base CNPq — null esperado
    "UNICENTRO":lambda s: ("CENTRO-OESTE" in s or "CENTRO OESTE" in s) and "PARAN" in s,
    "UENP":     lambda s: "NORTE DO PARANÁ" in s or "NORTE DO PARANA" in s,
    # Arquivo CNPq usa "Universidade Estadual do Parana" (sem acento)
    "UNESPAR":  lambda s: (
        "ESTADUAL DO PARANÁ" in s or "ESTADUAL DO PARANA" in s
    ) and "NORTE" not in s and "OESTE" not in s,
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


# ── 6. Orçamento — budget, execution, liquidation, personnel ─────────────────
# Fonte: Relatório da Despesa 8050 (2024 - 2026).xlsx / 2024-2026
#
# Colunas usadas (índices verificados em 2025-06):
#   [0]  Exercício       → ano
#   [47] Liquidado       → valor liquidado por linha de despesa (R$)
#   [49] Co_IES          → código inteiro da IES (mapeado via CO_IES_MAP)
#   [50] Taxa de Execução Orçamentária (Empenho)  → decimal (ex: 0.947)
#   [51] Taxa de Liquidação                        → decimal
#   [55] Participação de Pessoal e Encargos no Total da Despesa → decimal
#
# Regras:
#   budget      = soma(Liquidado) por IES/ano ÷ 1_000_000   (R$ milhões)
#   execution   = primeiro valor não-nulo da taxa por (IES, ano) selecionado
#   liquidation = idem
#   personnel   = idem; fallback 0.7034 (70,34%) se ausente
#   Ano preferido: 2024. Se não houver, usa o mais recente disponível.

_DESPESA_FILE = "Relatório da Despesa 8050 (2024 - 2026).xlsx"
_DESPESA_SHEET = "2024-2026"
_PERSONNEL_FALLBACK = 0.7034  # 70,34% — usado quando a IES não tem dado na coluna

wb = openpyxl.load_workbook(DATA_DIR / _DESPESA_FILE, read_only=True, data_only=True)
ws = wb[_DESPESA_SHEET]
_hdr = list(next(ws.iter_rows(min_row=1, max_row=1, values_only=True)))
_col = {h: i for i, h in enumerate(_hdr) if h is not None}

# Localiza cada coluna: índice fixo (verificado) com fallback por substring do nome,
# para sobreviver a eventuais realinhamentos do arquivo.
def _fcol(mapping, *keywords, default=None):
    """Retorna o índice da primeira coluna cujo nome contém todos os keywords."""
    for h, i in mapping.items():
        if h and all(k.lower() in str(h).lower() for k in keywords):
            return i
    return default

_co_col   = _fcol(_col, "Co_IES",    default=49)
_yr_col   = _fcol(_col, "Exerc",     default=0)
_liq_col  = _fcol(_col, "Liquidado", default=47)  # "Liquidado" ≠ "Liquidação"
_exec_col = _fcol(_col, "Execu", "Or",    default=50)
_liqr_col = _fcol(_col, "Taxa de Liquid", default=51)
_pes_col  = _fcol(_col, "Pessoal", "Particip", default=55)

# despesa_liq[(sigla, ano)]   = soma acumulada de Liquidado (R$)
# despesa_rates[(sigla, ano)] = {"exec", "liq", "pes"} — primeiro não-nulo encontrado
despesa_liq   = {}
despesa_rates = {}

for row in ws.iter_rows(min_row=2, values_only=True):
    # Identifica a IES pelo código inteiro em Co_IES
    try:
        co_int = int(row[_co_col])
    except (TypeError, ValueError):
        continue
    sigla = CO_IES_MAP.get(co_int)
    if sigla not in IEES_PR:
        continue  # processa apenas as 7 IES paranaenses

    try:
        ano = int(row[_yr_col])
    except (TypeError, ValueError):
        continue

    k = (sigla, ano)

    # Acumula Liquidado (pode haver múltiplas linhas de despesa por IES/ano)
    try:
        despesa_liq[k] = despesa_liq.get(k, 0.0) + float(row[_liq_col])
    except (TypeError, ValueError):
        pass

    # Para as taxas, guarda o primeiro valor não-nulo por (IES, ano)
    if k not in despesa_rates:
        despesa_rates[k] = {"exec": None, "liq": None, "pes": None}
    r = despesa_rates[k]
    if r["exec"] is None:
        try:
            r["exec"] = float(row[_exec_col])
        except (TypeError, ValueError):
            pass
    if r["liq"] is None:
        try:
            r["liq"] = float(row[_liqr_col])
        except (TypeError, ValueError):
            pass
    if r["pes"] is None:
        try:
            r["pes"] = float(row[_pes_col])
        except (TypeError, ValueError):
            pass

wb.close()

_DESPESA_SRC = f"{_DESPESA_FILE} / {_DESPESA_SHEET}"

for iees in IEES_PR:
    key = iees.lower()
    budget = exec_r = liq_r = pes_r = year_used = None

    # Ordena os anos disponíveis: 2024 tem prioridade, depois decrescente
    anos_ies = sorted({ano for (s, ano) in despesa_liq if s == iees}, reverse=True)
    if 2024 in anos_ies:
        anos_ies = [2024] + [a for a in anos_ies if a != 2024]

    for ano in anos_ies:
        liq_total = despesa_liq.get((iees, ano), 0.0)
        if liq_total > 0:
            budget    = round(liq_total / 1_000_000, 2)
            d         = despesa_rates.get((iees, ano), {})
            exec_r    = d.get("exec")
            liq_r     = d.get("liq")
            pes_r     = d.get("pes")
            year_used = ano
            break  # ano preferido encontrado

    # personnel: usa valor da coluna (per-IES) ou fallback global 70,34%
    pes_final = pes_r if pes_r is not None else _PERSONNEL_FALLBACK

    results[key].update(
        budget=budget,
        execution=safe_pct(exec_r),
        liquidation=safe_pct(liq_r),
        personnel=round(pes_final * 100, 2),
    )

    _pes_src = (
        f"{_DESPESA_SRC} / Participação de Pessoal e Encargos / ano={year_used or 'N/D'} (per-IES)"
        if pes_r is not None
        else f"{_DESPESA_SRC} / fallback global {_PERSONNEL_FALLBACK * 100:.2f}%"
    )
    sources[key].update(
        budget=f"{_DESPESA_SRC} / sum(Liquidado) / Co_IES={iees} / ano={year_used or 'N/D'} (R$ milhões)",
        execution=f"{_DESPESA_SRC} / Taxa de Execução Orçamentária (Empenho) / ano={year_used or 'N/D'}",
        liquidation=f"{_DESPESA_SRC} / Taxa de Liquidação / ano={year_used or 'N/D'}",
        personnel=_pes_src,
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


# ── 9. Egressos — insertionRatePR ─────────────────────────────────────────────
# Fonte: Base Egressos - Paraná.xlsx / Base_Egressos_PR
# Colunas (0-based): 0=CO_IES, 1=IES, 2=Coorte, 3=Ano_RAIS,
#   [13] Taxa de inserção de egressos (Sul/BR, inclui SC+RS)  → insertionRatePR
# Difere de `employment` (col[15] PR-only + filtro CBO2); insertionRatePR é a
# taxa de reinserção formal mais ampla — egressos encontrados em qualquer estado do Sul.
# Prefere coorte 2021/RAIS 2024; fallback coorte 2020/RAIS 2023.
# Exclui coorte 2022 (RAIS 2025 ainda com erros #VALUE! no arquivo).

wb = openpyxl.load_workbook(DATA_DIR / "Base Egressos - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Base_Egressos_PR"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header

egr_data = {}  # {iees: {(coorte, ano_rais): taxa_pr}}
for row in ws.iter_rows(min_row=2, values_only=True):
    co = row[0]
    try:
        co_int = int(co)
    except (TypeError, ValueError):
        continue
    iees = CO_IES_MAP.get(co_int)
    if iees not in IEES_PR:
        continue
    try:
        coorte   = int(row[2])
        ano_rais = int(row[3])
    except (TypeError, ValueError):
        continue
    if coorte == 2022:  # dados incompletos no arquivo
        continue
    taxa_sul = row[13]
    if not isinstance(taxa_sul, (int, float)):
        continue
    if iees not in egr_data:
        egr_data[iees] = {}
    egr_data[iees][(coorte, ano_rais)] = float(taxa_sul)
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    if iees not in egr_data:
        continue
    pares = sorted(egr_data[iees].keys(), reverse=True)
    if not pares:
        continue
    best = pares[0]
    taxa = egr_data[iees][best]
    results[key]["insertionRatePR"] = round(taxa * 100, 2)
    sources[key]["insertionRatePR"] = (
        f"Base Egressos - Paraná.xlsx / Base_Egressos_PR"
        f" / Taxa de inserção de egressos (Sul — SC+PR+RS)"
        f" / coorte={best[0]} RAIS={best[1]}"
    )


# ── 10. Fundo Paraná — fundoParana, fundoExec ─────────────────────────────────
# Fonte: Base Fundo Paraná - Paraná.xlsx / Fundo_Parana_IES_Ano
# Colunas: [1] CO_IES, [0] NU_ANO_REF, [5] PCT_EXECUCAO_CONTRATOS,
#          [8] VL_TOTAL_REPASSADO
# fundoParana = VL_TOTAL_REPASSADO ÷ 1_000_000 (R$ milhões)
# fundoExec   = PCT_EXECUCAO_CONTRATOS × 100 (%)
# Ano preferido: mais recente com VL_TOTAL_REPASSADO > 0.

wb = openpyxl.load_workbook(DATA_DIR / "Base Fundo Paraná - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Fundo_Parana_IES_Ano"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header

fundo_data = {}  # {(iees, ano): {"repassado": float, "exec": float}}
for row in ws.iter_rows(min_row=2, values_only=True):
    co = row[1]
    try:
        co_int = int(co)
    except (TypeError, ValueError):
        continue
    iees = CO_IES_MAP.get(co_int)
    if iees not in IEES_PR:
        continue
    try:
        ano = int(row[0])
    except (TypeError, ValueError):
        continue
    try:
        repassado = float(row[8]) if row[8] not in (None, "") else 0.0
    except (TypeError, ValueError):
        repassado = 0.0
    try:
        exec_pct = float(row[5]) if row[5] not in (None, "") else None
    except (TypeError, ValueError):
        exec_pct = None
    fundo_data[(iees, ano)] = {"repassado": repassado, "exec": exec_pct}
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    anos = sorted({a for (i, a) in fundo_data if i == iees}, reverse=True)
    for ano in anos:
        d = fundo_data.get((iees, ano), {})
        if d.get("repassado", 0) > 0:
            results[key]["fundoParana"] = round(d["repassado"] / 1_000_000, 3)
            results[key]["fundoExec"]   = (
                round(d["exec"] * 100, 2) if d["exec"] is not None else None
            )
            src = f"Base Fundo Paraná - Paraná.xlsx / Fundo_Parana_IES_Ano / ano={ano}"
            sources[key]["fundoParana"] = src + " / VL_TOTAL_REPASSADO (R$ milhões)"
            sources[key]["fundoExec"]   = src + " / PCT_EXECUCAO_CONTRATOS ×100"
            break


# ── 11. Base RAIS — egressosMunicipios ────────────────────────────────────────
# Fonte: Base RAIS - 2023 e 2024 - Paraná.xlsx / Base_RAIS_2023_2024
# Colunas: [1] ANO_EGRESSO, [2] ANO_RAIS, [3] IEES, [12] MUNICIPIO_NOME
# egressosMunicipios = nº de municípios distintos onde egressos estão empregados
# Prefere o par (coorte, ano_rais) mais recente disponível.

wb = openpyxl.load_workbook(DATA_DIR / "Base RAIS - 2023 e 2024 - Paraná.xlsx", read_only=True, data_only=True)
ws = wb["Base_RAIS_2023_2024"]
next(ws.iter_rows(min_row=1, max_row=1))  # skip header

rais_mun = {}  # {iees: {(coorte, ano_rais): set(municipios)}}
for row in ws.iter_rows(min_row=2, values_only=True):
    iees = str(row[3]).strip().upper() if row[3] else None
    if iees not in IEES_PR:
        continue
    try:
        ano_eg   = int(row[1])
        ano_rais = int(row[2])
    except (TypeError, ValueError):
        continue
    municipio = row[12]
    if not municipio or str(municipio).strip() == "":
        continue
    if iees not in rais_mun:
        rais_mun[iees] = {}
    pair = (ano_eg, ano_rais)
    if pair not in rais_mun[iees]:
        rais_mun[iees][pair] = set()
    rais_mun[iees][pair].add(str(municipio).strip())
wb.close()

for iees in IEES_PR:
    key = iees.lower()
    if iees not in rais_mun:
        continue
    pares = sorted(rais_mun[iees].keys(), reverse=True)
    if not pares:
        continue
    best = pares[0]
    results[key]["egressosMunicipios"] = len(rais_mun[iees][best])
    sources[key]["egressosMunicipios"] = (
        f"Base RAIS - 2023 e 2024 - Paraná.xlsx / Base_RAIS_2023_2024"
        f" / MUNICIPIO_NOME distintos / coorte={best[0]} RAIS={best[1]}"
    )


# ── 12. Estratificação — clusters V1-V8 e referência de quartis ───────────────
# Fonte: Estratificação_IES_Estaduais_BR.xlsx
# Sheet 1_Matriz de Estratificação: V1-V8 labels por IES (linha de dados a partir da linha 6)
# Sheet 0_Referência de Quartis: limiares e rótulos dos 4 quartis por variável
#
# Layout 0-indexed (linha de dados, sheet 1):
#   [2]=Sigla  [8]=V1  [11]=V2  [14]=V3  [17]=V4  [20]=V5  [22]=V6  [24]=V7  [26]=V8
#
# "Não disponível" → None  (V6-V8 só existem para IES-PR)

def _strat_label(v):
    if v is None:
        return None
    s = str(v).strip()
    if s.lower() in ("não disponível", "nao disponivel", "n/a", ""):
        return None
    return s

wb = openpyxl.load_workbook(
    DATA_DIR / "Estratificação_IES_Estaduais_BR.xlsx", read_only=True, data_only=True
)

# 12a. Grupos por IES
ws_mat = wb["1_Matriz de Estratificação"]
clusters_raw = {}
for row in ws_mat.iter_rows(min_row=6, values_only=True):
    sigla = row[2] if len(row) > 2 else None
    if sigla not in IEES:
        continue
    clusters_raw[sigla] = {
        "v1": _strat_label(row[8]  if len(row) > 8  else None),
        "v2": _strat_label(row[11] if len(row) > 11 else None),
        "v3": _strat_label(row[14] if len(row) > 14 else None),
        "v4": _strat_label(row[17] if len(row) > 17 else None),
        "v5": _strat_label(row[20] if len(row) > 20 else None),
        "v6": _strat_label(row[22] if len(row) > 22 else None),
        "v7": _strat_label(row[24] if len(row) > 24 else None),
        "v8": _strat_label(row[26] if len(row) > 26 else None),
    }

# 12b. Referência de quartis (linha 6 em diante, até linha sem dados)
ws_ref = wb["0_Referência de Quartis"]
quartis_ref = []
for row in ws_ref.iter_rows(min_row=6, values_only=True):
    if not row[0]:
        continue
    # Ignora linhas de notas metodológicas (não são variáveis de quartil)
    if str(row[0]).startswith("NOTA") or row[5] is None:
        continue
    quartis_ref.append({
        "variable":   str(row[0]).strip(),
        "indicator":  str(row[1]).strip() if row[1] else None,
        "q1_limiar":  str(row[2]).strip() if row[2] else None,
        "q2_limiar":  str(row[3]).strip() if row[3] else None,
        "q3_limiar":  str(row[4]).strip() if row[4] else None,
        "label_q1":   str(row[5]).strip() if row[5] else None,
        "label_q2":   str(row[6]).strip() if row[6] else None,
        "label_q3":   str(row[7]).strip() if row[7] else None,
        "label_q4":   str(row[8]).strip() if row[8] else None,
    })

wb.close()


# ── Saída stdout (retrocompatível) ────────────────────────────────────────────

print(json.dumps({"results": results, "sources": sources}, indent=2, ensure_ascii=False))

# ── Salva seti_precomputed.json para o dashboard ──────────────────────────────
# Formato: {year, indicators, sources, clusters, quartiRefs, generated}
# clusters: {SIGLA: {v1..v8: label_str}} — lido da Estratificação, nunca estático
# quartiRefs: lista com limiares e rótulos de cada variável de agrupamento

precomputed = {
    "generated": datetime.datetime.now().isoformat(timespec="seconds"),
    "year": "2024",
    "indicators": {iees: results[iees.lower()] for iees in IEES},
    "sources":    {iees: sources[iees.lower()] for iees in IEES},
    "clusters":   {iees: clusters_raw.get(iees, {}) for iees in IEES},
    "quartiRefs": quartis_ref,
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
