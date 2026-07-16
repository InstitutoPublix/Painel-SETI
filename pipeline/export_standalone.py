#!/usr/bin/env python3
"""
Builds a single-file dashboard for sharing.

Output:
    dashboard/painel_seti_standalone.html

The generated file embeds:
    - dashboard HTML shell
    - painel.css
    - data-hub.js, painel.js and all painel-abaN-*.js tab scripts
    - data/seti_precomputed.json
    - header/logo images

Tolerant of the cache-busting "?v=..." query strings that get added to
assets/*.css|js src/href attributes over time, and of new tab scripts being
added to SOURCE_HTML -- add the filename to INLINE_SCRIPTS below and it will
be picked up automatically.

After updating data/seti_precomputed.json (or any dashboard asset), run:
    python pipeline/export_standalone.py
"""
from __future__ import annotations

import base64
import json
import mimetypes
import re
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DASHBOARD_DIR = ROOT / "dashboard"
ASSETS_DIR = DASHBOARD_DIR / "assets"

SOURCE_HTML = DASHBOARD_DIR / "v8_painel_seti_html.html"
SOURCE_CSS = ASSETS_DIR / "painel.css"
SOURCE_DATA_HUB = ASSETS_DIR / "data-hub.js"
SOURCE_JSON = ROOT / "data" / "seti_precomputed.json"
OUTPUT_HTML = DASHBOARD_DIR / "painel_seti_standalone.html"

# Ordem de carregamento importa: mesma sequencia dos <script> no HTML fonte.
INLINE_SCRIPTS = [
    "painel.js",
    "painel-aba1-panorama.js",
    "painel-aba2-comparacao.js",
    "painel-aba3-acesso.js",
    "painel-aba4-permanencia.js",
    "painel-aba5-qualidade.js",
    "painel-aba6-docentes.js",
    "painel-aba7-insercao.js",
    "painel-aba8-orcamentaria.js",
    "painel-aba9-desempenho.js",
]

IMAGES = [
    "img/logo_opr_transparent.png",
    "brasao_parana.svg",
]


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def script_safe(text: str) -> str:
    return (
        text.replace("</script", "<\\/script")
        .replace("<!--", "<\\!--")
        .replace(" ", "\\u2028")
        .replace(" ", "\\u2029")
    )


def data_uri(path: Path) -> str:
    mime = mimetypes.guess_type(path.name)[0] or "application/octet-stream"
    encoded = base64.b64encode(path.read_bytes()).decode("ascii")
    return f"data:{mime};base64,{encoded}"


def inline_style(css: str) -> str:
    return "<style>\n" + css + "\n</style>"


def inline_script(js: str) -> str:
    return "<script>\n" + script_safe(js) + "\n</script>"


def standalone_bootstrap() -> str:
    data = json.loads(SOURCE_JSON.read_text(encoding="utf-8"))
    payload = json.dumps(data, ensure_ascii=False, separators=(",", ":"))
    generated = data.get("generated", "unknown")
    year = data.get("year", "unknown")
    return inline_script(
        "window.SETI_STANDALONE = true;\n"
        f"window.SETI_STANDALONE_META = {{ generated: {json.dumps(generated)}, year: {json.dumps(str(year))} }};\n"
        "window.SETI_PRECOMPUTED_DATA = "
        + script_safe(payload)
        + ";\n"
    )


def replace_regex(html: str, pattern: str, replacement: str, label: str) -> str:
    compiled = re.compile(pattern)
    new_html, count = compiled.subn(lambda _m: replacement, html, count=1)
    if count == 0:
        raise RuntimeError(f"Expected tag not found: {label}")
    return new_html


def replace_css_link(html: str, filename: str, replacement: str) -> str:
    pattern = r'<link\s+rel="stylesheet"\s+href="assets/' + re.escape(filename) + r'(?:\?[^"]*)?"\s*/?>'
    return replace_regex(html, pattern, replacement, filename)


def replace_script_tag(html: str, filename: str, replacement: str) -> str:
    pattern = r'<script\s+src="assets/' + re.escape(filename) + r'(?:\?[^"]*)?"\s*></script>'
    return replace_regex(html, pattern, replacement, filename)


def replace_image_src(html: str, relative: str) -> str:
    pattern = r'src="assets/' + re.escape(relative) + r'"'
    replacement = f'src="{data_uri(ASSETS_DIR / relative)}"'
    return replace_regex(html, pattern, replacement, relative)


def build() -> None:
    html = read_text(SOURCE_HTML)

    html = replace_css_link(html, "painel.css", inline_style(read_text(SOURCE_CSS)))

    html = replace_script_tag(
        html,
        "xlsx.full.min.js",
        "<!-- SheetJS omitted: standalone mode uses the embedded precomputed JSON. -->",
    )

    html = replace_script_tag(
        html,
        "data-hub.js",
        standalone_bootstrap() + "\n\n" + inline_script(read_text(SOURCE_DATA_HUB)),
    )

    for filename in INLINE_SCRIPTS:
        html = replace_script_tag(html, filename, inline_script(read_text(ASSETS_DIR / filename)))

    for relative in IMAGES:
        html = replace_image_src(html, relative)

    OUTPUT_HTML.write_text(html, encoding="utf-8", newline="\n")

    size_mb = OUTPUT_HTML.stat().st_size / (1024 * 1024)
    print(f"Generated {OUTPUT_HTML} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    build()
