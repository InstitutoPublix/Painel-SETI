#!/usr/bin/env python3
"""
Inicia o servidor HTTP local e abre o painel no browser.

Uso:
    python serve.py          # porta padrão 8080
    python serve.py 9000     # porta customizada

Na primeira execução (ou quando data/seti_precomputed.json não existir),
gera automaticamente o JSON pré-processado com os indicadores das IES.
"""
import os
import sys
import json
import threading
import webbrowser
import http.server
import socketserver
import subprocess
from pathlib import Path

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8080
ROOT = Path(__file__).parent.resolve()
JSON_PATH = ROOT / "data" / "seti_precomputed.json"
DASHBOARD = f"http://localhost:{PORT}/dashboard/v8_painel_seti_html.html"

os.chdir(ROOT)


# ── Gera JSON pré-processado se não existir ───────────────────────────────────

if not JSON_PATH.exists():
    print("Gerando indicadores pré-processados (primeira execução)...")
    print("Isso pode levar alguns minutos — processando os arquivos XLSX...\n")
    result = subprocess.run(
        [sys.executable, "pipeline/assemble_final.py"],
        stderr=sys.stderr,
    )
    if result.returncode != 0:
        print("\n[AVISO] Pipeline retornou erro. Verifique se openpyxl está instalado:")
        print("        pip install -r requirements.txt")
    else:
        print(f"\n[OK] {JSON_PATH} gerado.\n")
else:
    try:
        meta = json.loads(JSON_PATH.read_text(encoding="utf-8"))
        gen  = meta.get("generated", "?")
        print(f"Dados pré-processados de: {gen}")
        print("  (regenerar: python pipeline/assemble_final.py)\n")
    except Exception:
        pass


# ── Servidor HTTP com suporte a requisições simultâneas ──────────────────────

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass


class ThreadedServer(socketserver.ThreadingMixIn, socketserver.TCPServer):
    allow_reuse_address = True
    daemon_threads = True


def _open_browser():
    import time
    time.sleep(0.8)
    webbrowser.open(DASHBOARD)


print(f"Servidor: http://localhost:{PORT}")
print(f"Painel:   {DASHBOARD}")
print("Pressione Ctrl+C para encerrar.\n")

threading.Thread(target=_open_browser, daemon=True).start()

with ThreadedServer(("", PORT), QuietHandler) as httpd:
    try:
        httpd.serve_forever()
    except KeyboardInterrupt:
        print("\nServidor encerrado.")
