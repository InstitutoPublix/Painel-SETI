import json
from pathlib import Path

import openpyxl


DATA_DIR = Path(__file__).resolve().parents[1] / "data"
JSON_PATH = DATA_DIR / "seti_precomputed.json"
DOCENTES_PATH = DATA_DIR / "Base Docentes - Paraná.xlsx"
SHEET_NAME = "Base_Docentes_PR"

IEES_PR = ["UEL", "UEM", "UEPG", "UNIOESTE", "UNICENTRO", "UENP", "UNESPAR"]


def safe_pct(value):
    if value is None:
        return None
    try:
        number = float(value)
    except Exception:
        return None
    return round(number * 100, 2) if abs(number) <= 1 else round(number, 2)


def safe_int(value):
    if value is None:
        return None
    try:
        return int(round(float(value)))
    except Exception:
        return None


def safe_float(value, digits=2):
    if value is None:
        return None
    try:
        return round(float(value), digits)
    except Exception:
        return None


FIELDS = [
    ("docVagasTotais", 17, safe_int, "Total de códigos de vagas docentes"),
    ("docVagasDisp", 18, safe_int, "Vagas docentes disponíveis para ocupação"),
    ("docVagasOcupadas", 19, safe_int, "Vagas docentes efetivas ocupadas"),
    ("facultyOcc", 20, safe_pct, "Taxa de ocupação do quadro docente"),
    ("docTaxaUtil", 21, safe_pct, "Taxa de utilização das vagas docentes disponíveis"),
    ("docVagasCond", 22, safe_int, "Vagas docentes condicionadas à autorização governamental"),
    ("docPctCond", 23, safe_pct, "Percentual de vagas condicionadas à autorização governamental (Excel X / IND-49)"),
    ("docTideAtrib", 24, safe_int, "Quantidade de TIDE atribuído ao corpo docente"),
    ("tide", 25, safe_pct, "Participação do TIDE no quadro disponível"),
    ("docTidePartic", 25, safe_pct, "Participação do TIDE no quadro disponível"),
    ("docTidePctNaoAtrib", 26, safe_pct, "Percentual de TIDE não atribuído"),
    ("docChMedia", 27, safe_float, "Carga horária média de docentes efetivos"),
    ("docCresAut", 28, safe_int, "Carga horária CRES autorizada"),
    ("docCresUtil", 29, safe_int, "Carga horária CRES utilizada"),
    ("cres", 30, safe_pct, "Taxa de utilização da CRES"),
    ("docCresSaldo", 31, safe_int, "Saldo de carga horária CRES não utilizada"),
    ("docCresOciosidade", 32, safe_pct, "Taxa de ociosidade da CRES"),
    ("docCresPartic", 33, safe_pct, "Participação da CRES no esforço docente total"),
]


def latest_docente_rows():
    wb = openpyxl.load_workbook(DOCENTES_PATH, read_only=True, data_only=True)
    ws = wb[SHEET_NAME]
    latest = {}
    for row in ws.iter_rows(min_row=2, values_only=True):
        iees = row[2] if len(row) > 2 else None
        if iees not in IEES_PR:
            continue
        try:
            year = int(row[0])
        except (TypeError, ValueError):
            continue
        if iees not in latest or year >= latest[iees]["year"]:
            latest[iees] = {"year": year, "row": row}
    wb.close()
    return latest


def main():
    data = json.loads(JSON_PATH.read_text(encoding="utf-8"))
    indicators = data.setdefault("indicators", {})
    sources = data.setdefault("sources", {})
    latest = latest_docente_rows()

    for iees in IEES_PR:
        if iees not in latest:
            continue
        row = latest[iees]["row"]
        year = latest[iees]["year"]
        indicator_row = indicators.setdefault(iees, {})
        source_row = sources.setdefault(iees, {})
        source_prefix = f"Base Docentes - Paraná.xlsx / {SHEET_NAME} / ano={year}"
        for field, col, converter, label in FIELDS:
            raw = row[col] if len(row) > col else None
            indicator_row[field] = converter(raw)
            source_row[field] = f"{source_prefix} / {label} (col {col})"

    JSON_PATH.write_text(json.dumps(data, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    for iees in IEES_PR:
        value = indicators.get(iees, {}).get("docPctCond")
        print(f"{iees}: IND-49 docPctCond={value}")


if __name__ == "__main__":
    main()
