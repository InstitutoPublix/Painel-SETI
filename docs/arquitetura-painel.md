# Documentação do Projeto — Índice

## Documentos Atuais

| Documento                                   | Descrição                                                                                                     |
| ------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| [README.md](README.md)                         | Guia técnico completo: estrutura de pastas, pipeline, arquivos JS/HTML/CSS, fluxo de execução e manutenção |
| [catalogo-dashboard.md](catalogo-dashboard.md) | Catálogo das visualizações: cada aba, cada gráfico, qual dado é exibido, fórmulas e fontes                |

## Referência Rápida

**Executar o painel:**

```bash
python serve.py
```

**Regenerar dados:**

```bash
python pipeline/assemble_final.py
```

**Arquivos principais:**

- `serve.py` — servidor HTTP + auto-geração do JSON
- `pipeline/assemble_final.py` — extração dos indicadores das 22 IES
- `data/seti_precomputed.json` — JSON com dados reais (22 IES, 22 indicadores)
- `dashboard/v8_painel_seti_html.html` — HTML shell
- `dashboard/assets/data-hub.js` — camada de dados (loaders, DATA)
- `dashboard/assets/painel.js` — UI (render, filtros, gráficos)
