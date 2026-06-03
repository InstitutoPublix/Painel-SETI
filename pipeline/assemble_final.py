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
    # 15 originais
    "USP", "UNESP", "UNICAMP", "UERJ", "UDESC", "UERGS",
    "UECE", "UNEB", "UESB", "UEG", "UEMA", "UEPB", "UEPA", "UEA", "UERN",
    # 17 novas
    "UESC", "UNCISAL", "UVA", "UNIMONTES", "UPE", "UEFS", "UNEMAT",
    "UESPI", "UNITINS", "UENF", "UEMS", "UEMG", "UERR", "UNEAL",
    "UEAP", "UEMASUL", "UnDF",
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
    # Nacionais — 15 originais (CO confirmados via Base IES - Brasil.xlsx)
    55:    "USP",      # CO=55 confirmado
    56:    "UNESP",    # CO=56 confirmado (era 55 incorretamente)
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
    # Novas 17 IES estaduais
    24:    "UESC",
    32:    "UNCISAL",
    95:    "UVA",
    367:   "UNIMONTES",
    409:   "UPE",
    666:   "UEFS",
    719:   "UNEMAT",
    756:   "UESPI",
    829:   "UNITINS",
    1027:  "UENF",
    1028:  "UEMS",
    1036:  "UEMG",
    5077:  "UERR",
    5242:  "UNEAL",
    5701:  "UEAP",
    23410: "UEMASUL",
    27103: "UnDF",
}

INDICATORS = [
    "students", "entrants", "graduates", "courses", "vacancies",
    "occupancy", "dropout", "completion", "doctors",
    "cnpq", "capes", "pg", "pgTop",
    "budget", "execution", "liquidation", "personnel", "supplementation",
    "employment", "salary", "insertionRatePR",
    "facultyOcc", "cres", "tide",
    "docVagasTotais", "docVagasDisp", "docVagasOcupadas", "docTaxaUtil",
    "docVagasCond", "docPctCond", "docTideAtrib", "docTidePartic",
    "docTidePctNaoAtrib", "docChMedia", "docCresAut", "docCresUtil",
    "docCresSaldo", "docCresOciosidade", "docCresPartic",
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
    total_codes = row[17] if len(row) > 17 else None
    vagas_disp  = row[18] if len(row) > 18 else None
    vagas_ocup  = row[19] if len(row) > 19 else None
    occ         = row[20] if len(row) > 20 else None
    taxa_util   = row[21] if len(row) > 21 else None
    vagas_cond  = row[22] if len(row) > 22 else None
    pct_cond    = row[23] if len(row) > 23 else None  # Excel column X / IND-49
    tide_atrib  = row[24] if len(row) > 24 else None
    tide        = row[25] if len(row) > 25 else None
    tide_nao    = row[26] if len(row) > 26 else None
    ch_media    = row[27] if len(row) > 27 else None
    cres_aut    = row[28] if len(row) > 28 else None
    cres_util   = row[29] if len(row) > 29 else None
    cres        = row[30] if len(row) > 30 else None
    cres_saldo  = row[31] if len(row) > 31 else None
    cres_ocios  = row[32] if len(row) > 32 else None
    cres_partic = row[33] if len(row) > 33 else None

    results[key]["docVagasTotais"] = safe_int(total_codes)
    results[key]["docVagasDisp"] = safe_int(vagas_disp)
    results[key]["docVagasOcupadas"] = safe_int(vagas_ocup)
    results[key]["facultyOcc"] = safe_pct(occ)
    results[key]["docTaxaUtil"] = safe_pct(taxa_util)
    results[key]["docVagasCond"] = safe_int(vagas_cond)
    results[key]["docPctCond"] = safe_pct(pct_cond)
    results[key]["docTideAtrib"] = safe_int(tide_atrib)
    results[key]["tide"] = safe_pct(tide)
    results[key]["docTidePartic"] = safe_pct(tide)
    results[key]["docTidePctNaoAtrib"] = safe_pct(tide_nao)
    results[key]["docChMedia"] = safe_float(ch_media, 2)
    results[key]["docCresAut"] = safe_int(cres_aut)
    results[key]["docCresUtil"] = safe_int(cres_util)
    results[key]["cres"] = safe_pct(cres)
    results[key]["docCresSaldo"] = safe_int(cres_saldo)
    results[key]["docCresOciosidade"] = safe_pct(cres_ocios)
    results[key]["docCresPartic"] = safe_pct(cres_partic)
    src = f"Base Docentes - Paraná.xlsx / Base_Docentes_PR / ano={y}"
    sources[key]["facultyOcc"] = src + " / Taxa de ocupação do quadro docente (col 20)"
    sources[key]["cres"]       = src + " / Taxa de utilização da CRES (col 30)"
    sources[key]["tide"]       = src + " / Participação do TIDE no quadro disponível (col 25)"
    sources[key]["docVagasTotais"] = src + " / Total de códigos de vagas docentes (col 17)"
    sources[key]["docVagasDisp"] = src + " / Vagas docentes disponíveis para ocupação (col 18)"
    sources[key]["docVagasOcupadas"] = src + " / Vagas docentes efetivas ocupadas (col 19)"
    sources[key]["docTaxaUtil"] = src + " / Taxa de utilização das vagas docentes disponíveis (col 21)"
    sources[key]["docVagasCond"] = src + " / Vagas docentes condicionadas à autorização governamental (col 22)"
    sources[key]["docPctCond"] = src + " / Percentual de vagas condicionadas à autorização governamental (col 23 / Excel X)"
    sources[key]["docTideAtrib"] = src + " / Quantidade de TIDE atribuído ao corpo docente (col 24)"
    sources[key]["docTidePartic"] = src + " / Participação do TIDE no quadro disponível (col 25)"
    sources[key]["docTidePctNaoAtrib"] = src + " / Percentual de TIDE não atribuído (col 26)"
    sources[key]["docChMedia"] = src + " / Carga horária média de docentes efetivos (col 27)"
    sources[key]["docCresAut"] = src + " / Carga horária CRES autorizada (col 28)"
    sources[key]["docCresUtil"] = src + " / Carga horária CRES utilizada (col 29)"
    sources[key]["docCresSaldo"] = src + " / Saldo de carga horária CRES não utilizada (col 31)"
    sources[key]["docCresOciosidade"] = src + " / Taxa de ociosidade da CRES (col 32)"
    sources[key]["docCresPartic"] = src + " / Participação da CRES no esforço docente total (col 33)"


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
    # ── IES-PR ──────────────────────────────────────────────────────────────
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
    # ── IES-BR — 15 originais ────────────────────────────────────────────────
    # ⚠ Validar valores no stderr após rodar — ordem de grandeza esperada:
    #   USP ~R$100-200M; UNICAMP/UNESP ~R$50-100M; demais ~R$2-30M
    "USP":      lambda s: ("UNIVERSIDADE DE SÃO PAULO" in s or "UNIVERSIDADE DE SAO PAULO" in s or " USP" in s) and "ESTADUAL" not in s,
    "UNESP":    lambda s: "PAULISTA" in s and "ESTADUAL" in s,
    "UNICAMP":  lambda s: "CAMPINAS" in s and "ESTADUAL" in s,
    "UERJ":     lambda s: "RIO DE JANEIRO" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UDESC":    lambda s: "SANTA CATARINA" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UERGS":    lambda s: "RIO GRANDE DO SUL" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UECE":     lambda s: "CEARÁ" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UNEB":     lambda s: "BAHIA" in s and "ESTADO" in s and "FEDERAL" not in s and "SUDOESTE" not in s and "FEIRA" not in s,
    "UESB":     lambda s: "SUDOESTE" in s and "BAHIA" in s,
    "UEG":      lambda s: "GOIÁS" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UEMA":     lambda s: "MARANHÃO" in s and "ESTADO" in s and "FEDERAL" not in s and "TOCANT" not in s,
    "UEPB":     lambda s: "PARAÍBA" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UEPA":     lambda s: "PARÁ" in s and "ESTADO" in s and "FEDERAL" not in s and "OESTE" not in s,
    "UEA":      lambda s: "AMAZONAS" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UERN":     lambda s: "RIO GRANDE DO NORTE" in s and "ESTADO" in s and "FEDERAL" not in s,
    # ── IES-BR — 17 novas ───────────────────────────────────────────────────
    "UESC":     lambda s: "SANTA CRUZ" in s and "BAHIA" in s,
    "UNCISAL":  lambda s: "CIÊNCIAS DA SAÚDE" in s and "ALAGOAS" in s,
    "UVA":      lambda s: "VALE DO ACARAÚ" in s or ("UVA" in s and "CEARÁ" in s),
    "UNIMONTES":lambda s: "MONTES CLAROS" in s,
    "UPE":      lambda s: "PERNAMBUCO" in s and "UNIVERSIDADE DE" in s and "FEDERAL" not in s,
    "UEFS":     lambda s: "FEIRA DE SANTANA" in s,
    "UNEMAT":   lambda s: "MATO GROSSO" in s and "ESTADO" in s and "SUL" not in s and "FEDERAL" not in s,
    "UESPI":    lambda s: ("PIAUÍ" in s or "PIAUI" in s) and "ESTADO" in s,
    "UNITINS":  lambda s: "TOCANTINS" in s and "ESTADUAL" in s,
    "UENF":     lambda s: "NORTE FLUMINENSE" in s,
    "UEMS":     lambda s: "MATO GROSSO DO SUL" in s and "ESTADO" in s and "FEDERAL" not in s,
    "UEMG":     lambda s: "MINAS GERAIS" in s and "ESTADO" in s and "FEDERAL" not in s and "MONTES" not in s,
    "UERR":     lambda s: "RORAIMA" in s and "ESTADO" in s,
    "UNEAL":    lambda s: "ALAGOAS" in s and "ESTADUAL" in s and "SAÚDE" not in s and "SAUDE" not in s,
    "UEAP":     lambda s: ("AMAPÁ" in s or "AMAPA" in s) and "ESTADO" in s,
    "UEMASUL":  lambda s: "TOCANTINA" in s or "UEMASUL" in s,
    "UnDF":     lambda s: "DISTRITO FEDERAL" in s and "ESTADO" in s,
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


# ── Seção 9 — Relatório Despesa 8050 ─────────────────────────────────────────
# Extrai campos financeiros (soma por IES/ano) e indicadores pré-calculados
# (primeira linha de cada IES/ano) da aba "2024-2026".
#
# Identificação: col[6] = Unidade Orçamentária (UO) — distinto de col[49]=Co_IES.
# Cobre anos 2024, 2025 e 2026.
#
# Campos financeiros (cols 33,37,45,47,48): somados e convertidos para R$ milhões.
# Taxas/participações (cols 50-64): captadas da primeira linha de cada (IES, ano)
#   e convertidas de decimal (0-1) para % (× 100).
#
# Saída:
#   - results[key] ← campos 2024 mesclados (flat, para o dashboard)
#   - d8050_by_year ← {sigla: {str(ano): {fields}}} para 2024/2025/2026

# UO → sigla (aba De-para do arquivo)
_UO_IES_MAP = {
    4530: "UEL",
    4531: "UEPG",
    4532: "UEM",
    4533: "UNICENTRO",
    4534: "UNIOESTE",
    4546: "UNESPAR",
    4548: "UENP",
}

# Colunas financeiras: acumular soma por (sigla, ano)
_D8050_FIN_COLS = {
    "dotacao_inicial":      33,
    "orcamento_atualizado": 37,
    "empenhado":            45,
    "liquidado":            47,
    "pago":                 48,
}

# Colunas de taxas/participações: guardar primeira linha por (sigla, ano)
# Valor original: decimal 0-1 → gravar como % (× 100)
_D8050_RATE_COLS = {
    "tx_execucao_empenho":    50,
    "tx_liquidacao":          51,
    "tx_pagamento_liq":       52,
    "grau_contingenciamento": 53,
    "var_dotacao_loa":        54,
    "part_pessoal":           55,
    "part_outras_correntes":  56,
    "part_capital":           57,
    "part_recursos_livres":   58,
    "part_fonte_500":         59,
    "part_fonte_501":         60,
    "part_demais_vincul":     61,
    "part_convenios_uniao":   62,
    "part_convenios_privados":63,
    "part_emendas_federais":  64,
}

_D8050_ANOS = {2024, 2025, 2026}

d8050_fin   = {}   # {(sigla, ano): {field: float_acumulado}}
d8050_rates = {}   # {(sigla, ano): {field: float|None}}  — primeira linha

wb9 = openpyxl.load_workbook(DATA_DIR / _DESPESA_FILE, read_only=True, data_only=True)
ws9 = wb9[_DESPESA_SHEET]
next(ws9.iter_rows(min_row=1, max_row=1))  # pula cabeçalho

for row in ws9.iter_rows(min_row=2, values_only=True):
    # Identificar IES pela Unidade Orçamentária (col 6)
    try:
        uo = int(row[6])
    except (TypeError, ValueError):
        continue
    sigla = _UO_IES_MAP.get(uo)
    if sigla is None:
        continue

    try:
        ano = int(row[0])
    except (TypeError, ValueError):
        continue
    if ano not in _D8050_ANOS:
        continue

    k = (sigla, ano)

    # Acumula campos financeiros
    if k not in d8050_fin:
        d8050_fin[k] = {f: 0.0 for f in _D8050_FIN_COLS}
    for field, col in _D8050_FIN_COLS.items():
        try:
            v = float(row[col]) if row[col] is not None else 0.0
            d8050_fin[k][field] += v
        except (TypeError, ValueError):
            pass

    # Taxas — apenas a primeira linha encontrada por (sigla, ano)
    if k not in d8050_rates:
        d8050_rates[k] = {f: None for f in _D8050_RATE_COLS}
    for field, col in _D8050_RATE_COLS.items():
        if d8050_rates[k][field] is None:
            try:
                v = float(row[col])
                d8050_rates[k][field] = v
            except (TypeError, ValueError):
                pass

wb9.close()

# Montar estrutura multi-year: {sigla: {str(ano): {fields}}}
d8050_by_year = {}
_D8050_SRC = f"{_DESPESA_FILE} / {_DESPESA_SHEET} / col[6]=UO"

for sigla in IEES_PR:
    d8050_by_year[sigla] = {}
    for ano in sorted(_D8050_ANOS):
        k = (sigla, ano)
        if k not in d8050_fin and k not in d8050_rates:
            continue
        yr_data = {}

        # Campos financeiros → R$ milhões (2 casas)
        if k in d8050_fin:
            for field in _D8050_FIN_COLS:
                raw = d8050_fin[k].get(field, 0.0)
                yr_data[field] = round(raw / 1_000_000, 2) if raw else None

        # Taxas → % (2 casas)
        if k in d8050_rates:
            for field in _D8050_RATE_COLS:
                raw = d8050_rates[k].get(field)
                yr_data[field] = round(raw * 100, 2) if raw is not None else None

        d8050_by_year[sigla][str(ano)] = yr_data

# Mesclar campos de 2024 no results flat (para o dashboard)
for sigla in IEES_PR:
    key = sigla.lower()
    fields_2024 = d8050_by_year.get(sigla, {}).get("2024", {})
    if fields_2024:
        results[key].update(fields_2024)
        src = f"{_D8050_SRC} / ano=2024"
        for field in fields_2024:
            sources[key][field] = src


# ── Seção 10 — Estratificação V6 (Dinâmica Orçamentária PR) ──────────────────
# Lê a aba '9_Dinâmica Orçamentária PR' do arquivo de estratificação e extrai
# o índice composto e a faixa de perfil orçamentário por IES-PR.
# Substitui clusters_raw[sigla]["v6"] com o rótulo oficial.
#
# Estrutura da aba (cabeçalho na linha 4, dados a partir da 5):
#   col 2  (idx 1)  = Sigla
#   col 13 (idx 12) = Índice Composto
#   col 14 (idx 13) = Faixa de Perfil Orçamentário

_wb_v6 = openpyxl.load_workbook(
    DATA_DIR / "Estratificação_IES_Estaduais_BR.xlsx", read_only=True, data_only=True
)
_ws_v6 = _wb_v6["9_Dinâmica Orçamentária PR"]

for _row in _ws_v6.iter_rows(min_row=6, values_only=True):
    _sigla = str(_row[2]).strip() if len(_row) > 2 and _row[2] else None
    if _sigla not in IEES_PR:
        continue
    try:
        _v6_indice = round(float(_row[13]), 4) if len(_row) > 13 and _row[13] is not None else None
    except (TypeError, ValueError):
        _v6_indice = None
    _v6_perfil = str(_row[14]).strip() if len(_row) > 14 and _row[14] else None

    _key = _sigla.lower()
    if _v6_indice is not None:
        results[_key]["v6_indice"] = _v6_indice
        sources[_key]["v6_indice"] = "Estratificação_IES_Estaduais_BR.xlsx / 9_Dinâmica Orçamentária PR"
    if _v6_perfil:
        results[_key]["v6_perfil"] = _v6_perfil
        sources[_key]["v6_perfil"] = "Estratificação_IES_Estaduais_BR.xlsx / 9_Dinâmica Orçamentária PR"
        if _sigla in clusters_raw:
            clusters_raw[_sigla]["v6"] = _v6_perfil

_wb_v6.close()

_SEP10 = "─" * 60
print("", file=sys.stderr)
print(_SEP10, file=sys.stderr)
print("Seção 10 — V6 Dinâmica Orçamentária PR | Validação", file=sys.stderr)
print(_SEP10, file=sys.stderr)
print(f"{'IES':<12} {'v6_indice':>12}  v6_perfil", file=sys.stderr)
print(_SEP10, file=sys.stderr)
for _s in IEES_PR:
    _k   = _s.lower()
    _idx  = results[_k].get("v6_indice")
    _perf = results[_k].get("v6_perfil", "N/D")
    _idx_str = f"{_idx:.4f}" if _idx is not None else "N/D"
    print(f"{_s:<12} {_idx_str:>12}  {_perf}", file=sys.stderr)
print(_SEP10, file=sys.stderr)


# ── Saída stdout (retrocompatível) ────────────────────────────────────────────

print(json.dumps({"results": results, "sources": sources}, indent=2, ensure_ascii=False))

# ── Salva seti_precomputed.json para o dashboard ──────────────────────────────
# Formato: {year, indicators, sources, clusters, quartiRefs, byYear, generated}
# clusters:   {SIGLA: {v1..v8: label_str}} — lido da Estratificação, nunca estático
# quartiRefs: lista com limiares e rótulos de cada variável de agrupamento
# byYear:     {SIGLA: {str(ano): {despesa8050_fields}}} para 2024/2025/2026

precomputed = {
    "generated": datetime.datetime.now().isoformat(timespec="seconds"),
    "year": "2024",
    "indicators": {iees: results[iees.lower()] for iees in IEES},
    "sources":    {iees: sources[iees.lower()] for iees in IEES},
    "clusters":   {iees: clusters_raw.get(iees, {}) for iees in IEES},
    "quartiRefs": quartis_ref,
    # byYear: 2024 = todos os indicadores para as 22 IES;
    # 2025/2026 = apenas campos D8050 para as 7 IES-PR
    "byYear": {
        iees: {
            "2024": results[iees.lower()],
            **{
                yr: d8050_by_year.get(iees, {}).get(yr, {})
                for yr in ["2025", "2026"]
                if d8050_by_year.get(iees, {}).get(yr)
            },
        }
        for iees in IEES
    },
}
json_path = DATA_DIR / "seti_precomputed.json"
with open(json_path, "w", encoding="utf-8") as _f:
    json.dump(precomputed, _f, indent=2, ensure_ascii=False)
print(f"[OK] {json_path}", file=sys.stderr)

# ── Validação Seção 9 — comparação com valores de referência 2024 ─────────────

_REF_2024 = {
    "UEL":      {"dotacao_inicial": 641.6, "orcamento_atualizado": 753.7, "liquidado": 694.6, "part_pessoal": 82.6, "tx_execucao_empenho": 94.7},
    "UEM":      {"dotacao_inicial": 708.8, "orcamento_atualizado": 871.6, "liquidado": 762.1, "part_pessoal": 77.6, "tx_execucao_empenho": 91.4},
    "UEPG":     {"dotacao_inicial": 348.2, "orcamento_atualizado": 423.7, "liquidado": 399.4, "part_pessoal": 83.0, "tx_execucao_empenho": 94.8},
    "UNIOESTE": {"dotacao_inicial": 468.0, "orcamento_atualizado": 561.3, "liquidado": 520.4, "part_pessoal": 81.5, "tx_execucao_empenho": 94.8},
    "UNICENTRO":{"dotacao_inicial": 311.7, "orcamento_atualizado": 380.6, "liquidado": 341.0, "part_pessoal": 79.6, "tx_execucao_empenho": 92.5},
    "UENP":     {"dotacao_inicial": 130.8, "orcamento_atualizado": 164.9, "liquidado": 155.9, "part_pessoal": 80.8, "tx_execucao_empenho": 95.8},
    "UNESPAR":  {"dotacao_inicial": 258.6, "orcamento_atualizado": 319.8, "liquidado": 302.8, "part_pessoal": 85.0, "tx_execucao_empenho": 97.0},
}

_VAL_COLS = [
    ("dotacao_inicial",      "Dot.Ini(R$M)"),
    ("orcamento_atualizado", "Orç.Atu(R$M)"),
    ("liquidado",            "Liquid.(R$M)"),
    ("part_pessoal",         "%Pessoal"),
    ("tx_execucao_empenho",  "%Execução"),
]

_W_IES = 10
_W_COL = 15
_SEP = "─" * (_W_IES + _W_COL * len(_VAL_COLS))

print("", file=sys.stderr)
print(_SEP, file=sys.stderr)
print("Seção 9 — Despesa 8050 | Validação ano 2024 (extraído vs referência)", file=sys.stderr)
print(_SEP, file=sys.stderr)
hdr_line = f"{'IES':<{_W_IES}}" + "".join(f"{lbl:>{_W_COL}}" for _, lbl in _VAL_COLS)
print(hdr_line, file=sys.stderr)
print(_SEP, file=sys.stderr)

all_ok = True
for sigla in IEES_PR:
    yr_data = d8050_by_year.get(sigla, {}).get("2024", {})
    ref     = _REF_2024.get(sigla, {})
    row_out = f"{sigla:<{_W_IES}}"
    for field, _ in _VAL_COLS:
        got = yr_data.get(field)
        exp = ref.get(field)
        if got is None:
            cell = "N/D"
        elif exp is None:
            cell = f"{got:.1f}"
        else:
            diff = abs(got - exp)
            ok_mark = "OK" if diff <= 1.0 else "!!"
            if ok_mark == "!!":
                all_ok = False
            cell = f"{got:.1f}({ok_mark})"
        row_out += f"{cell:>{_W_COL}}"
    print(row_out, file=sys.stderr)

print(_SEP, file=sys.stderr)
ref_hdr = f"{'(ref)':<{_W_IES}}" + "".join(f"{lbl:>{_W_COL}}" for _, lbl in _VAL_COLS)
print(ref_hdr, file=sys.stderr)
for sigla in IEES_PR:
    ref = _REF_2024.get(sigla, {})
    row_out = f"{sigla:<{_W_IES}}"
    for field, _ in _VAL_COLS:
        exp = ref.get(field)
        row_out += f"{exp:>{_W_COL}.1f}" if exp is not None else f"{'?':>{_W_COL}}"
    print(row_out, file=sys.stderr)

print(_SEP, file=sys.stderr)
status = "PASS — todos dentro da tolerância (±1)" if all_ok else "ATENÇÃO — diferenças acima de ±1 detectadas"
print(f"Status: {status}", file=sys.stderr)
print(_SEP, file=sys.stderr)

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
