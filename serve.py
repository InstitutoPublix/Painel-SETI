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

PORT = int(sys.argv[1]) if len(sys.argv) > 1 else 8000
ROOT = Path(__file__).parent.resolve()
JSON_PATH = ROOT / "data" / "seti_precomputed.json"
DASHBOARD = f"http://localhost:{PORT}/dashboard/v8_painel_seti_html.html"

os.chdir(ROOT)


# ── Gera JSON pré-processado se não existir ───────────────────────────────────

if not JSON_PATH.exists():
    print("Gerando indicadores pré-processados (primeira execução)...")
    print("Isso pode levar alguns minutos — processando os arquivos XLSX...\n")
    # Pipeline COMPLETO (base + enriquecimentos com dados reais 2020-2024 +
    # CAPES/CNPq/municípios/CBO2 + normalização). Rodar só o assemble_final
    # deixaria vários indicadores em valores estimados.
    result = subprocess.run(
        [sys.executable, "pipeline/build_all.py"],
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
        enr  = meta.get("enrichedCbo2Muni") or meta.get("enrichedCnpq") or meta.get("enriched")
        print(f"Dados pré-processados de: {gen}")
        if enr:
            print(f"Enriquecido (dados reais) em: {enr}")
        else:
            print("  [ATENÇÃO] JSON sem enriquecimento — rode: python pipeline/build_all.py")
        print("  (regenerar tudo: python pipeline/build_all.py)\n")
    except Exception:
        pass


# ── Servidor HTTP com suporte a requisições simultâneas ──────────────────────

class QuietHandler(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *args):
        pass

    def do_POST(self):
        if self.path != "/__dashboard_status":
            self.send_error(404)
            return
        try:
            length = int(self.headers.get("Content-Length", "0"))
        except ValueError:
            length = 0
        raw = self.rfile.read(length) if length else b"{}"
        try:
            payload = json.loads(raw.decode("utf-8"))
        except Exception:
            payload = {}

        status = payload.get("status") or "Status do dashboard"
        source_count = payload.get("sourceCount", 0)
        load_count = payload.get("loadCount", 0)
        failed_count = payload.get("failedCount", 0)
        generated = payload.get("generated") or "?"
        year = payload.get("year") or "?"
        sources = payload.get("sources") or []
        source_label = "fonte" if source_count == 1 else "fontes"
        load_label = "carregamento" if load_count == 1 else "carregamentos"
        print(
            f"Dashboard: {status} | {source_count} {source_label} | "
            f"{load_count} {load_label} | ano={year} | JSON={generated}"
        )
        if failed_count:
            print(f"  Falhas reportadas pelo browser: {failed_count}")
        if sources:
            print("  Fontes: " + ", ".join(sources))
        self.send_response(204)
        self.end_headers()


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
