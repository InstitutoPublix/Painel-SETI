#!/usr/bin/env python3
"""
Builds a single-file dashboard for sharing.

Output:
    dashboard.html

The generated file embeds:
    - dashboard HTML shell
    - painel.css
    - data-hub.js and painel.js
    - data/seti_precomputed.json
    - header/logo images

After updating data/seti_precomputed.json, run:
    python pipeline/export_standalone.py
"""
from __future__ import annotations

import base64
import json
import mimetypes
from pathlib import Path


ROOT = Path(__file__).resolve().parents[1]
DASHBOARD_DIR = ROOT / "dashboard"
ASSETS_DIR = DASHBOARD_DIR / "assets"

SOURCE_HTML = DASHBOARD_DIR / "v8_painel_seti_html.html"
SOURCE_CSS = ASSETS_DIR / "painel.css"
SOURCE_DATA_HUB = ASSETS_DIR / "data-hub.js"
SOURCE_PAINEL = ASSETS_DIR / "painel.js"
SOURCE_JSON = ROOT / "data" / "seti_precomputed.json"
OUTPUT_HTML = ROOT / "dashboard.html"


def read_text(path: Path) -> str:
    return path.read_text(encoding="utf-8")


def script_safe(text: str) -> str:
    return (
        text.replace("</script", "<\\/script")
        .replace("<!--", "<\\!--")
        .replace("\u2028", "\\u2028")
        .replace("\u2029", "\\u2029")
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


def replace_once(html: str, old: str, new: str) -> str:
    if old not in html:
        raise RuntimeError(f"Expected snippet not found: {old}")
    return html.replace(old, new, 1)


def build() -> None:
    html = read_text(SOURCE_HTML)

    html = replace_once(
        html,
        '<link rel="stylesheet" href="assets/painel.css" />',
        inline_style(read_text(SOURCE_CSS)),
    )

    html = replace_once(
        html,
        '<script src="assets/xlsx.full.min.js"></script>',
        "<!-- SheetJS omitted: standalone mode uses the embedded precomputed JSON. -->",
    )

    html = replace_once(
        html,
        '<script src="assets/data-hub.js"></script>',
        standalone_bootstrap() + "\n\n" + inline_script(read_text(SOURCE_DATA_HUB)),
    )

    html = replace_once(
        html,
        '<script src="assets/painel.js"></script>',
        inline_script(read_text(SOURCE_PAINEL)),
    )

    for relative in (
        "assets/logo OpR.jpeg",
        "assets/logo Governo do Paraná.jpg",
        "assets/logo SETI.png",
    ):
        html = html.replace(f'src="{relative}"', f'src="{data_uri(DASHBOARD_DIR / relative)}"')

    OUTPUT_HTML.write_text(html, encoding="utf-8", newline="\n")

    size_mb = OUTPUT_HTML.stat().st_size / (1024 * 1024)
    print(f"Generated {OUTPUT_HTML} ({size_mb:.2f} MB)")


if __name__ == "__main__":
    build()
