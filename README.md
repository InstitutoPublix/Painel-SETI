# Guia Completo do Projeto — Painel SETI

**Painel de Desempenho da Gestão Universitária**
Orçamento para Resultados · SETI Paraná

---

## Visão Geral

O projeto entrega um painel web interativo para monitoramento executivo das 7 universidades estaduais do Paraná (IEES-PR), com comparação a 15 universidades estaduais brasileiras de referência. Os dados são extraídos de bases XLSX oficiais por um pipeline Python e servidos via servidor HTTP local.

```
Bases XLSX (data/)  →  pipeline/assemble_final.py  →  data/seti_precomputed.json
                                                              ↓
                                              serve.py  →  dashboard/ (browser)
```

---

## Estrutura de Pastas

```
1. CODEX- Piloto SETI/
├── serve.py                          # Servidor HTTP + auto-geração do JSON
├── requirements.txt                  # Dependências Python (openpyxl)
├── data/                             # Bases XLSX e JSON pré-processado
│   ├── seti_precomputed.json         # Indicadores prontos para o dashboard
│   ├── Base Cursos - Brasil.xlsx     # INEP — matrículas, ingressos, concluintes
│   ├── Base IES - Brasil.xlsx        # INEP — proporção doutores por IES
│   ├── Base CAPES- Pós-Graduação - Brasil.xlsx  # Programas PG, conceitos
│   ├── Base CNPq - Brasil.xlsx       # Captação de recursos para pesquisa
│   ├── Relatório da Despesa 8050 (2024 - 2026).xlsx  # Orçamento liquidado, execução, liquidação e pessoal (PR)
│   ├── Base Docentes - Paraná.xlsx   # Ocupação docente, CRES e TIDE (PR)
│   ├── Base Egressos - Paraná.xlsx   # Egressos por coorte (PR)
│   ├── Base RAIS - 2023 e 2024 - Paraná.xlsx   # Empregos formais (PR)
│   ├── CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx   # Inserção profissional CBO2 (PR)
│   ├── Dados de Suplementação das Universidades - Paraná.xlsx
│   ├── Base Fundo Paraná - Paraná.xlsx
│   ├── Estratificação_IES_Estaduais_BR.xlsx
│   ├── 5. Relação de Indicadores das Universidades.xlsx  # Catálogo de referência já embutido em painel.js
│   └── Base de dados para clusterização.xlsx    # Legado: loader existe, mas o pipeline atual não usa
├── pipeline/
│   └── assemble_final.py             # Extração e pré-processamento dos indicadores
├── dashboard/
│   ├── v8_painel_seti_html.html      # Shell HTML (219 linhas)
│   └── assets/
│       ├── painel.css                # Estilos (6.700+ linhas)
│       ├── data-hub.js               # Camada de dados: loaders, DATA, SETIDataHub
│       ├── painel.js                 # UI: cache, populate, bind, render
│       └── xlsx.full.min.js          # SheetJS — leitura XLSX no browser
├── docs/                             # Documentação do projeto
├── exploratory/                      # Notebooks e análises exploratórias
└── 1. IES / 2. CURSOS                # Pastas de apoio (dados brutos)
```

---

## Como Executar

```bash
# Instalar dependência Python (apenas uma vez)
pip install openpyxl

# Iniciar painel
python serve.py

# Porta customizada
python serve.py 9000
```

O `serve.py` verifica se `data/seti_precomputed.json` existe. Se não existir, executa o pipeline automaticamente antes de abrir o browser.

---

## Arquivo: `serve.py`

Ponto de entrada do projeto. Responsabilidades:

1. **Auto-geração do JSON** — se `data/seti_precomputed.json` não existir, executa `pipeline/assemble_final.py` via `subprocess.run()` antes de servir.
2. **Exibe metadados** — se o JSON já existir, imprime a data de geração no terminal.
3. **Servidor HTTP multi-thread** — classe `ThreadedServer` (herda `ThreadingMixIn + TCPServer`) com `allow_reuse_address = True` e `daemon_threads = True`. Suporta requisições simultâneas; resolve `BrokenPipeError` que ocorre com `TCPServer` simples ao carregar múltiplos arquivos.
4. **Abre o browser** — via `threading.Thread` com delay de 0,8s para dar tempo ao servidor subir.
5. **Handler silencioso** — `QuietHandler` suprime logs HTTP do terminal.

**Endereços padrão:**
- Servidor: `http://localhost:8080`
- Painel: `http://localhost:8080/dashboard/v8_painel_seti_html.html`

---

## Arquivo: `pipeline/assemble_final.py`

Pipeline de extração de dados. Lê os XLSX diretamente via `openpyxl` (modo `read_only=True, data_only=True`) e grava `data/seti_precomputed.json`.

### IES Cobertas

```python
IEES_PR = ["UEL", "UEM", "UEPG", "UNIOESTE", "UNICENTRO", "UENP", "UNESPAR"]
IEES_BR = ["USP", "UNESP", "UNICAMP", "UERJ", "UDESC", "UERGS",
           "UECE", "UNEB", "UESB", "UEG", "UEMA", "UEPB", "UEPA", "UEA", "UERN",
           "UESC", "UNCISAL", "UVA", "UNIMONTES", "UPE", "UEFS", "UNEMAT",
           "UESPI", "UNITINS", "UENF", "UEMS", "UEMG", "UERR", "UNEAL",
           "UEAP", "UEMASUL", "UnDF", "URCA"]
IEES = IEES_PR + IEES_BR  # 40 IES total (7 PR + 33 BR)
```

`CO_IES_MAP` — dicionário `{código_INEP: sigla}` para identificar IES por código numérico nas bases nacionais.

### Seções do Pipeline

| Seção | Base Fonte | Indicadores Gerados | Escopo |
|-------|-----------|---------------------|--------|
| **1. INEP/IES** | `Base IES - Brasil.xlsx` / `Base_ IES_BRASIL` | `doctors` | 40 IES |
| **2. INEP/Cursos** | `Base Cursos - Brasil.xlsx` / `_IES PÚBLICAS ESTADUAIS_CURSOS` | `students`, `entrants`, `graduates`, `vacancies`, `courses`, `occupancy`, `dropout`, `completion` | 40 IES |
| **3. Docentes PR** | `Base Docentes - Paraná.xlsx` / `Base_Docentes_PR` | `facultyOcc`, `cres`, `tide` | 7 PR |
| **4. CNPq** | `Base CNPq - Brasil.xlsx` / `Base_CNPq_BR` | `cnpq` | 7 PR (match por nome) |
| **5. CAPES** | `Base CAPES- Pós-Graduação - Brasil.xlsx` / `Base_Cursos` | `capes`, `pg`, `pgTop` | 40 IES |
| **6. Relatório 8050** | `Relatório da Despesa 8050 (2024 - 2026).xlsx` / `2024-2026` | `budget`, `execution`, `liquidation`, `personnel`, `ind81–95`, `composicaoFontes` | 7 PR |
| **7. Suplementação** | `Dados de Suplementação das Universidades - Paraná.xlsx` / `matriz_cluster` | `supplementation` | 7 PR |
| **8. CBO2/RAIS** | `CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx` / `Análise Quantitativa` | `employment`, `salary` | 7 PR |
| **9. Egressos** | `Base Egressos - Paraná.xlsx` / `Base_Egressos_PR` | `insertionRatePR` | 7 PR |
| **10. Fundo Paraná** | `Base Fundo Paraná - Paraná.xlsx` / `Fundo_Parana_IES_Ano` | `fundoParana`, `fundoExec` | 7 PR |
| **11. RAIS Municípios** | `Base RAIS - 2023 e 2024 - Paraná.xlsx` / `Base_RAIS_2023_2024` | `egressosMunicipios` | 7 PR |
| **12. Estratificação** | `Estratificação_IES_Estaduais_BR.xlsx` | `clusters`, `quartiRefs` | 40 IES |

### Lógica de cada Seção

**Seção 1 — Doutores (INEP/IES):**
- Busca a coluna cujo nome contém "doutorado" e "propor"
- Multiplica o valor por 100 (a coluna é decimal: 0.809 → 80.9%)
- Usa o ano mais recente disponível por IES

**Seção 2 — Cursos/Matrículas (INEP/Cursos):**
- Filtra por `CO_IES` presente em `CO_IES_MAP`
- Agrega todas as linhas do ano mais recente por IES
- `occupancy = QT_ING / QT_VG_TOTAL × 100`
- `dropout = QT_SIT_DESVINCULADO / QT_MAT × 100`
- `completion = QT_CONC / QT_MAT × 100`

**Seção 3 — Estrutura Docente (Base Docentes PR):**
- Sheet `Base_Docentes_PR` — apenas IEES_PR
- `facultyOcc` — coluna 20, taxa de ocupação do quadro docente
- `tide` — coluna 25, participação do TIDE no quadro disponível
- `cres` — coluna 30, taxa de utilização da CRES × 100 (pode ultrapassar 100%, como UNIOESTE=121.98%)

**Seção 4 — CNPq:**
- Match por substring no nome da instituição (`CNPQ_MATCH` dict com lambdas)
- Itera apenas sobre `CNPQ_MATCH.keys()` (7 PR) — IES nacionais sem match não causam erro
- `cnpq = soma / 1e6` (R$ milhões) no ano mais recente

**Seção 5 — CAPES:**
- Filtra por `CO_IES` ou fallback por sigla em `SG_ENTIDADE_ENSINO`
- `pg` = contagem de `NM_PROGRAMA_IES` distintos
- `pgTop` = programas com `CD_CONCEITO_CURSO >= 5`
- `capes` = média de `CD_CONCEITO_CURSO` (ou coluna pré-calculada "Conceito médio dos programas de pós-graduação")

**Seção 6 — Relatório 8050/Orçamento (PR):** Lê `Relatório da Despesa 8050 (2024 - 2026).xlsx`. Extrai `budget`, `execution`, `liquidation`, `personnel` (ind81–87), `composicaoFontes` (grupo50/grupo70 por fonte) e `ind88–95`. Série histórica disponível para 2024, 2025 e 2026 (2026 parcial).

**Seção 7 — Suplementação (PR):**
- Coluna `col[3]` da sheet `matriz_cluster`
- Convertida de decimal para percentual via `safe_pct()`

**Seção 8 — Inserção Profissional CBO2/RAIS (PR):**
- Lê `Análise Quantitativa (BI e Cons` até row 15
- `employment = enc_PR_2024 / egressos_2021 × 100` (fallback: coorte 2020/RAIS2023)
- `salary` = salário médio direto da coluna (valor já em reais)

### Funções Auxiliares

| Função | Descrição |
|--------|-----------|
| `safe_pct(v)` | Decimal → percentual. Se `v <= 1.0`: `v × 100`. Se `v > 1.0`: retorna `v` (já é %). **Não usar para CRES** (pode > 1.0 representando > 100%) |
| `safe_float(v, d=2)` | `float(v)` com arredondamento `d` casas |
| `safe_int(v)` | `int(float(v))` tolerante a None e string |
| `_blank()` | Retorna dict com todos os indicadores declarados em `INDICATORS` = `None` |

### Saída: `data/seti_precomputed.json`

```json
{
  "generated": "2026-05-28T15:20:56",
  "year": "2024",
  "indicators": {
    "UEL": { "students": 13523, "doctors": 80.9, "cres": 80.0, ... },
    "USP": { "students": 69717, "doctors": 100.0, "budget": null, ... }
  },
  "sources": {
    "UEL": { "students": "Base Cursos - Brasil.xlsx / ...", ... }
  }
}
```

**Indicadores disponíveis:** `students`, `entrants`, `graduates`, `courses`, `vacancies`, `occupancy`, `dropout`, `completion`, `doctors`, `cnpq`, `capes`, `pg`, `pgTop`, `budget`, `execution`, `liquidation`, `personnel`, `supplementation`, `employment`, `salary`, `insertionRatePR`, `facultyOcc`, `cres`, `tide`, `fundoParana`, `fundoExec`, `egressosMunicipios`

---

## Arquivo: `dashboard/v8_painel_seti_html.html`

Shell HTML (219 linhas). Define a estrutura visual estática e a ordem de carregamento:

```html
<link rel="stylesheet" href="assets/painel.css" />
<script src="assets/xlsx.full.min.js"></script>    <!-- SheetJS -->
<script src="assets/data-hub.js"></script>          <!-- dados, no <head> -->
...HTML do painel...
<script src="assets/painel.js"></script>            <!-- UI, no final do <body> -->
```

**Ordem importa:** `data-hub.js` carrega antes do DOM; `painel.js` carrega depois do `</body>` e aguarda `DOMContentLoaded`.

Elementos estáticos presentes:
- `#dataStatusChip` — chip de status de carregamento
- `.tab-button[data-tab]` — 8 botões de aba
- `#kpiGrid` — grid de KPI cards (preenchido por JS)
- `#yearFilter` — seletor de ano (2020–2024)
- `#universityFilter` / `#universityCheckboxList` — seletor multi-IEES
- `#groupBy` — seletor da variável de agrupamento (V1–V8)
- `#tabContent` — área principal de conteúdo (preenchida por JS)
- Botões `#scopeBtnPR` / `#scopeBtnBR` — alternância Paraná / Brasil

---

## Arquivo: `dashboard/assets/data-hub.js`

Camada de dados do painel. Carregado no `<head>` para estar disponível quando `painel.js` executa.

### Estrutura Global

```javascript
const DATA = {};           // { sigla: { byYear: { "2024": { ind: val } } } }
const DATA_STATUS = {
  loadedBases: [],         // carregamentos concluídos com sucesso e bases-fonte associadas
  failedBases: [],         // bases que falharam
  workbooks: [],           // metadados dos XLSX lidos
  lastUpdated: null,
};
```

### `SETI_DATASETS`

Catálogo de todas as bases disponíveis. Cada entrada define:
- `key`, `name`, `file` — identificação e caminho relativo
- `enabled` — se `true`, o browser tenta carregar via SheetJS; se `false`, a base veio pré-processada no JSON
- `sheetAliases` / `columns` — mapeamento de colunas (para bases leves)

**Bases habilitadas no browser (enabled: true):**
- `egressos` — Base Egressos PR (~5MB)
- `ies` — Base IES Brasil (~3MB)
- `docentes` — Base Docentes PR
- `rais` — Base RAIS 2023-2024 PR
- `cbo2` — CBO2/RAIS PR
- `fundoParana` — Base Fundo Paraná PR

**Bases desabilitadas (enabled: false):**
- `cursos`, `cnpq`, `capes`, `despesa8050` e `suplementacao` entram pelo `seti_precomputed.json`
- `clusterizacao` é legado: o loader existe no JS, mas o pipeline atual não usa `Base de dados para clusterização.xlsx`

### Funções Principais

| Função | Descrição |
|--------|-----------|
| `loadPrecomputedJson()` | Faz `fetch("../data/seti_precomputed.json")` e chama `upsertYearIndicators()` para cada IES |
| `upsertYearIndicators(sigla, year, indicators)` | Armazena dados no `DATA[sigla].byYear[year]` |
| `loadAllData()` | Executa `Promise.all([loadPrecomputedJson(), ...bases_ativas])` e no bloco `finally` chama `refreshPanelFromData()` e reporta o resumo ao terminal via `POST /__dashboard_status` |
| `registerBase(name, type, rows)` | Registra carregamento em `DATA_STATUS.loadedBases`, incluindo as bases-fonte inferidas quando vêm do JSON |
| `registerFailedBase(name, reason)` | Registra falha em `DATA_STATUS.failedBases` |
| `friendlyError(err)` | Converte erros HTTP/rede em mensagens legíveis |
| `normalizeColumnName(value)` | Remove acentos, lowercase, substitui não-alfanuméricos por `_` |
| `parseLocaleNumber(value)` | Parseia números brasileiros (`1.234,56` → `1234.56`) |
| `parsePercentValue(value)` | Detecta se valor já tem `%` ou está em decimal (< 1.0) |
| `safeDivide(n, d)` | Divisão segura com fallback `null` se denominador = 0 |
| `formatPanelNumber(value, digits)` | Formata com `Intl.NumberFormat("pt-BR")` |

### Fluxo de Carregamento

```
DOMContentLoaded
    → cache() — referencia todos os elementos DOM
    → populate() — preenche selects e checkboxes
    → bind() — registra event listeners
    → render() — primeira renderização
    ↕  (async, paralelo)
loadAllData()
    → loadPrecomputedJson()      — JSON com 40 IES e 12 bases-fonte representadas
    → loadEgressosBase()         — XLSX leve
    → loadIesBase()              — XLSX leve
    → loadDocentesBase()         — XLSX leve
    → loadRaisBase()             — XLSX leve
    → loadCbo2Base()             — XLSX leve
    → loadFundoParanaBase()      — XLSX leve
    → (finally) refreshPanelFromData() — atualiza painel com dados reais
    → reportDashboardStatus() — terminal exibe status, fontes inferidas e carregamentos
```

---

## Arquivo: `dashboard/assets/painel.js`

UI principal do painel. Todas as funções de renderização, filtros e visualizações.

### Dados Estáticos

**`const raw`** — array com os 7 PR IES. Cada entrada tem 31 campos incluindo os indicadores pré-calculados (linha de base 2024). **Estes valores são substituídos pelo JSON** via `refreshPanelFromData()` quando os dados reais carregam.

**`const rawBrasil`** — array com 33 IES estaduais de referência nacional. Dados base do rawBrasil (students, doctors, capes, pg, pgTop, cnpq) são sobrescritos via aliases do JSON pré-processado quando o painel carrega. Indicadores PR-only (budget, employment, etc.) permanecem null para IES-BR.

**`const CNPQ_DATA`** — série histórica CNPq 2020–2025 para os 7 PR IES (uso interno em fórmulas de score composto; não exibido diretamente).

### Objetos de Estado

```javascript
const state = {
  activeTab: "overview",   // aba ativa
  scope: "Paraná",         // "Paraná" ou "Brasil"
  localFilters: {},        // filtros por gráfico { chartId: groupLabel }
  // ...outros campos de estado de filtros
};
```

### Ciclo de Renderização

```
render()
  → filters()                    // lê todos os selects/checkboxes
  → scopeUniverse(scope)         // retorna [universities] ou [...universities, ...universitiesBrasil]
  → applyFilters(f)              // filtra por ano, IEES, região, grupo, etc.
  → byYear(u, year)              // mescla dados base com dados reais do DATA[]
  → renderTab(tabId, c)          // renderiza aba ativa
  → updateHeader(c)              // atualiza KPIs no topo
  → updateActiveClusterLabel(c)  // atualiza label do cluster ativo
```

**`byYear(u, year)`** — função crítica. Pega o objeto base `u` e sobrepõe os indicadores reais de `DATA[u.sigla.toLowerCase()]?.byYear[year]` se disponíveis.

### Variáveis de Agrupamento (V1–V8)

| Código | Nome | Getter | Grupos |
|--------|------|--------|--------|
| V1 | Porte institucional | `u.students` | Grande / Médio-Grande / Médio-Pequeno / Pequeno |
| V2 | Oferta de cursos | `u.courses×100 + u.vacancies/100` | Extensa / Ampla / Moderada / Reduzida |
| V3 | Oferta territorial | `u.territory` (dispersão) | Muito Alta / Alta / Moderada / Sede Única / Baixa |
| V4 | Qualificação docente | `u.doctors` | Consolidada / Avançada / Em Desenvolvimento / Inicial |
| V5 | Estrutura acadêmica | `u.pg × u.capes` | Madura / Consolidada / Em Consolidação / Incipiente |
| V6 | Dinâmica orçamentária (PR) | Planilha `Estratificação_IES_Estaduais_BR.xlsx` / aba `9_Dinâmica Orçamentária PR` | Perfil Expansivo / Autônomo / Perfil Moderado-Expansivo / Perfil Moderado-Restritivo / Perfil Restritivo |
| V7 | Renda do território (PR) | Planilha / aba `10_Renda Território PR` (`u.territoryIncome`) | Território de Alta Renda / Território de Renda Média-Alta / Território de Renda Moderada / Território de Baixa Renda |
| V8 | IDHM (PR) | Planilha / aba `11_IDH Território PR` (`u.idhmRegional`) | Contexto Socioecon. Alto / Contexto Socioecon. Elevado / Contexto Socioecon. Moderado / Contexto Socioecon. Baixo |

V6, V7 e V8 disponíveis apenas no escopo Paraná.

### Indicadores de Resultado e Esforço

**Resultado:**
- `composite` — score composto (média ponderada de múltiplos indicadores)
- `occupancy`, `completion`, `permanence`, `doctorate`, `cnpq`, `capes`, `employment`, `salary`

**Esforço:**
- `budgetPerStudent` — `budget×1M / students`
- `costGraduate` — `budget×1M / graduates`
- `costOccupiedVacancy` — `budget×1M / (vacancies × occupancy/100)`
- `costEmployed` — `budget×1M / (graduates × employment/100)`
- `budget`, `personnelShare`, `supplementation`

---

## Arquivo: `dashboard/assets/painel.css`

6.700+ linhas de CSS. Principais classes:

| Classe | Elemento |
|--------|---------|
| `.dashboard-body` | `<body>` — fundo e tipografia base |
| `.institutional-header` | Cabeçalho com logotipo e status |
| `.tabs` / `.tab-button` | Barra de navegação por abas |
| `.filter-bar-compact` | Barra de filtros (ano, IEES, agrupamento) |
| `.kpi-grid` | Grid de cards KPI no topo |
| `.dashboard-layout` | Flex container: `.content-panel` + `.side-panel` |
| `.tab-content` | Área principal renderizada por JS |
| `.data-source-banner` | Banner de aviso/erro de carregamento |
| `.qchip-strip` / `.qchip` | Chips de filtro por grupo |
| `.chart-block` | Container de cada gráfico/tabela |

---

## Fluxo Completo de Execução

```
1. Usuário executa: python serve.py
   └── JSON existe? Não → executa pipeline/assemble_final.py (~2-5 min)
                    Sim → exibe data de geração no terminal

2. serve.py abre http://localhost:8080/dashboard/v8_painel_seti_html.html

3. Browser carrega:
   ├── assets/painel.css (estilos)
   ├── assets/xlsx.full.min.js (SheetJS)
   ├── assets/data-hub.js (DATA, loaders — executa imediatamente no <head>)
   └── assets/painel.js (UI — executa após DOMContentLoaded)

4. DOMContentLoaded:
   ├── cache() — mapeia IDs DOM → variável el
   ├── populate() — preenche selects e checkboxes
   ├── bind() — registra todos os event listeners
   └── render() — primeira renderização; grupos V1–V8 ficam vazios até o JSON oficial carregar

5. Paralelo (async):
   └── loadAllData()
       ├── loadPrecomputedJson() → fetch data/seti_precomputed.json (40 IES; 12 bases-fonte representadas)
       ├── loadEgressosBase(), loadIesBase(), loadDocentesBase()...
       └── (finally) refreshPanelFromData() + reportDashboardStatus() → re-renderiza e registra status no terminal

6. Usuário interage:
   ├── Clica aba → state.activeTab muda → render()
   ├── Muda filtro → filters() recalcula → render()
   └── Muda escopo PR/BR → scopeUniverse() retorna conjunto diferente → render()
```

---

## Regenerar o JSON Manualmente

```bash
python pipeline/assemble_final.py
```

A tabela resumo aparece no `stderr`. O JSON é gravado em `data/seti_precomputed.json`.

---

## Dependências

**Python:**
```
openpyxl>=3.1          # Leitura de .xlsx
```

**JavaScript (bundlados localmente em `dashboard/assets/`):**
- `xlsx.full.min.js` — SheetJS para leitura de XLSX no browser
- Google Fonts `DM Sans` + `DM Mono` (requer internet; graceful degradation sem)

---

## Notas de Manutenção

- **Atualizar dados anuais:** substitua os XLSX em `data/` e apague `seti_precomputed.json`; na próxima execução do `serve.py` o pipeline regenera.
- **Adicionar nova IES:** adicione sigla em `IEES_PR` ou `IEES_BR`, mapeie o CO_IES em `CO_IES_MAP` e adicione a entrada em `const raw` ou `const rawBrasil` no `painel.js`.
- **Adicionar novo indicador:** declare em `INDICATORS` no pipeline, exporte no JSON e consuma em `byYear()` / `refreshPanelFromData()` no `data-hub.js`.
- **CRES > 100%:** usar sempre `round(float(v) * 100, 2)` diretamente, nunca `safe_pct()` — UNIOESTE tem CRES=121.98%.
- **Personnel:** atualmente extraído por IES do `Relatório da Despesa 8050 (2024 - 2026).xlsx`; o fallback global só é usado se a coluna correspondente vier ausente.
- **Catálogo de indicadores:** `5. Relação de Indicadores das Universidades.xlsx` não é carregado em runtime. O conteúdo relevante está embutido em `dashboard/assets/painel.js` como `INDICATOR_CATALOG`; mantenha a planilha como fonte editorial ou crie uma etapa de geração se quiser que alterações nela sejam refletidas automaticamente.
- **Agrupamentos V1–V8:** a fonte oficial é exclusivamente `Estratificação_IES_Estaduais_BR.xlsx`, exportada para `data/seti_precomputed.json` pelo pipeline. O `painel.js` apenas renderiza os grupos recebidos em `SETI_CLUSTERS` e os rótulos/limiares recebidos em `SETI_QUARTIREFS`.
- **Quadrantes:** se não houver critério oficial de quadrante na planilha/JSON, o painel exibe indisponibilidade metodológica em vez de calcular cortes por média, mediana ou fallback visual.
