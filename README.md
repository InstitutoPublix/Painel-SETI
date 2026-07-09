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
│   ├── Estratificação_IES_Estaduais_BR.xlsx
│   ├── 5. Relação de Indicadores das Universidades.xlsx  # Catálogo de referência já embutido em painel.js
│   ├── Base de dados para clusterização.xlsx    # Legado: loader existe, mas o pipeline atual não usa
│   └── Base SELO - Paraná.xlsx                  # BI SELO-PR (SIAFIC/SEFA) — notas bimestrais de execução orçamentária (PR)
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
| **10. RAIS Municípios** | `Base RAIS - 2023 e 2024 - Paraná.xlsx` / `Base_RAIS_2023_2024` | `egressosMunicipios` | 7 PR |
| **12. Estratificação** | `Estratificação_IES_Estaduais_BR.xlsx` | `clusters`, `quartiRefs` | 40 IES |
| **16. SELO-PR** | `Base SELO - Paraná.xlsx` / abas `Resumo` + `Base_Bimestral` | `seloData` (notas B1–B6 e Nota Final por IES/ano), `seloIndicadores`, `seloPesosBimestre` | 7 PR |

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
- `completion = QT_CONC / QT_MAT × 100` — IND-27, Proporção anual de concluintes sobre matrículas; compara concluintes e matrículas do mesmo ano, sem acompanhamento de coorte.

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

**Seção 16 — SELO-PR (Qualidade da Execução Orçamentária):**
- Lê `Base SELO - Paraná.xlsx` / abas `Resumo` (nota por bimestre e nota final) e `Base_Bimestral` (nota por indicador)
- Exporta para o JSON apenas anos com exercício finalizado (`_SELO_COMPLETUDE[ano]["completo"] == True`)
- `seloData` = notas B1–B6 e Nota Final por IES/ano, com metadados de completude por exercício
- `seloIndicadores` = catálogo dos 11 indicadores (nome, eixo, nota máxima, polaridade)
- `seloPesosBimestre` = pesos bimestrais (B1=10%, B2=15%, B3=15%, B4=25%, B5=25%, B6=10%)
- Eixos avaliados: I = Eficiência na Execução Orçamentária (60 pts), II = Racionalidade na Gestão de Créditos Adicionais (20 pts), III = Passivos de Exercícios Anteriores (20 pts)
- Nota Final = 0,10×B1 + 0,15×B2 + 0,15×B3 + 0,25×B4 + 0,25×B5 + 0,10×B6
- Fonte: BI SELO-PR (SIAFIC/SELO-PR)

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

**Indicadores disponíveis:** `students`, `entrants`, `graduates`, `courses`, `vacancies`, `occupancy`, `dropout`, `completion`, `doctors`, `cnpq`, `capes`, `pg`, `pgTop`, `budget`, `execution`, `liquidation`, `personnel`, `supplementation`, `employment`, `salary`, `insertionRatePR`, `facultyOcc`, `cres`, `tide`, `egressosMunicipios`

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

> **Atenção:** `assemble_final.py` **não** grava `capesPrograms` no JSON. Sempre que o pipeline principal rodar, execute também:
>
> ```bash
> python pipeline/enrich_capes.py
> ```
>
> Sem esse passo, `window.SETI_CAPES_PROGRAMS` ficará indefinido e a "Tabela por programa de pós-graduação" na Aba 5 ficará vazia silenciosamente (a função retorna `""` quando o dado não está disponível).

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
  - **Reconciliação estrutural 2026-07-06:** a planilha oficial tem 108 indicadores (IND-1..IND-108). No painel, `ind70` existe no dropdown/getter, mas não foi incluído no `INDICATOR_CATALOG` porque o getter atual usa `egressosMunicipios ?? raisMunCount`, campo calculado como contagem de **municípios distintos** com egressos empregados. Isso não corresponde ao IND-70 oficial, cuja fórmula é `Contagem de registros da base RAIS por município de vínculo`; o valor atual mede alcance/dispersão territorial por IEES, conceito mais próximo de "municípios de destino/distintos" do que de volume absoluto de egressos/registros. Solução futura segura: criar um novo campo/getter para o IND-70 oficial a partir da coluna `Egressos inseridos no mercado formal por município de vínculo`, deduplicando no grão IEES + coorte + ano RAIS + município antes de consolidar/exibir; depois renomear a métrica atual para chave legada ou mantê-la fora do catálogo oficial. O bloco `ind80..ind94` permanece marcado como deslocamento estrutural: `ind80` ainda é legado de inserção/dispersão territorial, e `ind81..ind94` carregam conceitos orçamentários que correspondem ao bloco oficial deslocado. Não renomear esses indicadores apenas por label sem validar dado/getter. `ind95orc`, `ind96orc` e `ind97orc` são legados orçamentários preservados e aparecem no dropdown como `ORC-95`, `ORC-96` e `ORC-97`; os oficiais `ind95`, `ind96` e `ind97` permanecem reservados aos indicadores CAPES de pós-graduação.
  - **Diagnóstico IND-80..IND-94 (2026-07-06):** a planilha oficial atual inicia o bloco orçamentário em `IND-80` (`Taxa de Execução Orçamentária`), mas o painel ainda preserva `ind80` como indicador RAIS de dispersão territorial (`Base RAIS - 2023 e 2024 - Paraná.xlsx`, coluna 22, média por IEES). O deslocamento começa exatamente em `IND-80`: os conceitos atuais `ind81..ind87` correspondem aos oficiais `IND-80..IND-86`; `ind88` é razão corrente/capital legada e não corresponde ao `IND-87` oficial, que é participação de despesas de capital; `ind89` mede Grupo 50 e corresponde ao `IND-88` oficial, não ao `IND-89`; `ind90` mede Fonte 501 e corresponde ao `IND-90` oficial; `ind91` tem dado pré-computado compatível com Grupo 70, mas o getter de UI ainda usa fórmula derivada (`budgetMetrics().transfers`), então não foi alterado; `ind92..ind94` atuais medem obras, equipamentos e variação da dotação, enquanto os oficiais `IND-92..IND-94` são Fontes 700, 703 e 706. Correção segura aplicada apenas em metadados de `IND-90` (nome/fórmula/dropdown), sem alterar getter, dado, cálculo, ranking, filtro, cluster, média ou escopo. Demais itens exigem decisão metodológica para renumerar chaves, criar aliases oficiais ou preservar legados com nomenclatura própria.
  - **Pendência IND-18 / inclusão IND-19 e IND-22 (2026-07-06):** `IND-19` e `IND-22` foram incluídos no dropdown de métricas do Panorama porque há campos agregados compatíveis (`courses` e `students`) e getters seguros para `Cursos da IEES / cursos totais x 100` e `Estudantes da IEES / estudantes totais x 100`. `IND-18` permanece fora do dropdown: a fórmula oficial exige `Vagas do curso / vagas totais x 100`, mas o dataset consumido pelo ranking é agregado por IEES e não traz vagas por curso nem getter em granularidade de curso.
- **Agrupamentos V1–V8:** a fonte oficial é exclusivamente `Estratificação_IES_Estaduais_BR.xlsx`, exportada para `data/seti_precomputed.json` pelo pipeline. O `painel.js` apenas renderiza os grupos recebidos em `SETI_CLUSTERS` e os rótulos/limiares recebidos em `SETI_QUARTIREFS`.
- **Cluster Específico (C1–C8):** classificação fixa e curada (não calculada dinamicamente), definida pelo Instituto Publix combinando simultaneamente múltiplas variáveis (porte, oferta de cursos, oferta territorial, qualificação docente e estrutura acadêmica). Diferente do V1–V8 (uma variável por vez), atribui cada uma das 40 IES a um único grupo fixo entre 8 possíveis. Fonte editorial: `data/Clusterização_específica.xlsx`.
  - Dados embutidos estaticamente em `painel.js` como `CLUSTER_ESPECIFICO` (array de 8 clusters com `id`, `nome`, `perfil`, `variaveis`, `ies`) e `CLUSTER_ESPECIFICO_BY_IES` (índice reverso sigla → cluster), seguindo o mesmo padrão de constante estática já usado para `INDICATOR_CATALOG` — não é gerado pelo pipeline nem lido de `seti_precomputed.json`.
  - Funciona como mais um valor de `groupBy` (`"especifico"`), reaproveitando toda a infraestrutura genérica de `applyFilters()`, `context()`, `renderSide()`, `updateQuartilChips()` — nenhuma dessas funções precisou de branch dedicado, pois já eram parametrizadas por chave.
  - **Dependência silenciosa a observar:** `painel-aba9-desempenho.js` (carregado após `painel.js`) *substitui* (não estende) `updateFooter`, `renderTop` e `updateContextBar`. Qualquer alteração futura nessas três funções em `painel.js` não terá efeito em runtime a menos que também seja replicada em `painel-aba9-desempenho.js`. Este é o mesmo tipo de armadilha silenciosa já documentada para `byYear()` — vale conferir os dois arquivos sempre que uma dessas três funções for tocada.
  - **Guard de clique necessário para ícones `.ind-info` dentro de botões `.group-var-btn`:** o listener delegado de troca de cluster (`document.addEventListener("click", ...)`) precisa de `if (event.target.closest(".ind-info")) return;` no início — sem isso, clicar no ícone de tooltip ⓘ também dispara a troca de grupo (bubbling do clique até o botão pai). Qualquer novo `.ind-info` inserido dentro de área clicável delegada deve respeitar esse guard.
  - **Pendência conhecida (não bloqueante):** após clicar num chip de grupo (`#quartilChips`/`#sideGroupFilter`), o `<select id="groupLevelFilter">` oculto volta a exibir `"all"` mesmo com o card correto marcado como `is-active` no breakdown e a filtragem visual funcionando normalmente. Provável efeito colateral de algum wrapper no ciclo de `render()`. Não afeta o dado exibido; só dessincroniza o valor interno do `<select>` oculto do que está na tela. Investigar se algum componente futuro vier a ler esse `<select>` diretamente.
- **Quadrantes:** se não houver critério oficial de quadrante na planilha/JSON, o painel exibe indisponibilidade metodológica em vez de calcular cortes por média, mediana ou fallback visual.
- **Desagregação por curso (`cursosDetalhado`):** estrutura no JSON com os indicadores de curso agregados por `(IES, Grande Área CINE, Grau Acadêmico, Modalidade de Ensino)`, gerada na Seção 2b do pipeline a partir da `Base Cursos - Brasil.xlsx`. Alimenta os cards de composição/distribuição nas Abas 3 e 4, e os indicadores IND-29/IND-67 (ocupação por grau). É uma fotografia do ano mais recente disponível por IES — **não varia com o filtro de Ano** do cabeçalho; essa limitação é sinalizada na própria UI.
- **Campo `grauMix` (removido):** existia referenciado em `painel.js`/`painel-aba3-acesso.js`/`painel-aba4-permanencia.js` com comentário afirmando origem real via pipeline, mas nunca foi populado em nenhuma camada do sistema — o loader client-side correspondente (`loadCursosBase()` em `data-hub.js`) existe mas está desabilitado (`enabled:false`) e nem calculava essa granularidade. Todos os pontos que dependiam de `grauMix` foram migrados para `cursosDetalhado`. Lição: campos "reais" documentados em comentário devem ser confirmados por `grep` na cadeia completa (pipeline → data-hub → painel) antes de confiar no comentário.
- **Contagem de cursos na granularidade desagregada:** `QT_CURSO` marca só a linha canônica de cada curso no Censo, então contar cursos por `(CINE, grau, modalidade)` pode subestimar/zerar grupos reais. Por isso o campo `courses` não é exposto nos cards desagregados — só no nível agregado da IES, onde a contagem já é confiável.
- **Benchmark por Grande Área CINE (`benchmarkCine`) — pendência de validação metodológica:** estrutura no JSON (`{area: {dropout: {pr, br, referencia, origem}, occupancyTipo: {...}}}`, pipeline Seção 2c) que calcula, por Grande Área CINE, a média ponderada de `dropout` (peso: `students`) e `occupancyTipo` (peso: `vacancies`) separadamente para o recorte PR (7 IEES) e Brasil (40 IEES), destacando como referência o melhor valor conforme a polaridade do indicador. Consumida na Aba 3 (`benchmarkCineBlock()` em `painel-aba3-acesso.js`), fora do dispatcher `accessBlock()` — roda em qualquer escopo. Duas pendências não validadas com Jéssica/Anderson: (1) a ponderação por indicador (denominador natural de cada taxa) foi decidida sem confirmação explícita; (2) `occupancyTipo` reaproveita o campo `occupancy` já existente em `cursosDetalhado`, que é **ingressantes ÷ vagas** (`QT_ING/QT_VG_TOTAL`) — a mesma base já usada pelos getters `ind26`/`ind67` em `painel.js` —, e **não** é a fórmula textual do IND-67 oficial (**matrículas ÷ vagas**, `QT_MAT/QT_VG_TOTAL`); não existe em `cursosDetalhado` nenhum campo com essa fórmula alternativa. O tooltip do card já explicita essa imprecisão ao usuário, mas ela precisa ser corrigida ou formalmente aceita antes de tratar `occupancyTipo` como equivalente ao IND-67 da planilha oficial.
- **Referência Geral (`referenciaGeral`) — pendência de design: acoplamento tom/quadrante/limiar:** a v1 (pipeline Seção 13, `calcular_referencia_geral()`) substituiu a "média do cluster" reativa por um valor fixo (melhor valor bruto de uma única IES, ver `getReferenciaGeral()` em `painel.js`) em 7 pontos de exibição pura. Mas o diagnóstico encontrado durante a implementação identificou ~15 ocorrências onde a mesma "média" também **calibra** uma classificação visual (cor de célula/barra via `tone()`, divisor de quadrante em scatter, ou limiar de disparo de alerta) — nesses pontos a substituição foi **deliberadamente não aplicada**, porque um valor fixo extremo (ex.: o melhor bruto entre 40 IES) quebraria a calibração (faixas de cor sempre no mesmo tom, quadrantes vazios, alertas disparando para quase todas as IES). Lista completa mantida em fallback (média do cluster, reage a filtro, sem mudança):
  - **Aba 1** (`painel-aba1-panorama.js`) — `overviewAgg()` (linhas ~269/272, campos `dropout`/`facultyOcc`): função **compartilhada** com Abas 4 e 9; usada em cálculo de delta ano-a-ano (`a.dropout` vs `p.dropout` em `painel-aba9-desempenho.js`) — um valor fixo zeraria esse delta.
  - **Aba 2** (`painel-aba2-comparacao.js`) — `comparisonRanking()` (~linha 479/484): o indicador exibido é predominantemente `dimensionScore()` (índice composto sintético, já fora da whitelist), não um campo bruto isolado.
  - **Aba 4** (`painel-aba4-permanencia.js`) — `retentionScatterBlock()` (~332-333): `avgDrop`/`avgComp` são **divisores de quadrante** do scatter IND-5×IND-27.
  - **Aba 4** (`painel-aba4-permanencia.js`) — `renderSystemAlertsWithRetention()` (~562-563): `avgDrop`/`avgComp` são **limiares de alerta** (`u.dropout > avgDrop + 2`).
  - **Aba 5** (`painel-aba5-qualidade.js`) — `qualityDoctorBars()` (~133): `clusterMean` calibra `doctorTone()`.
  - **Aba 5** (`painel-aba5-qualidade.js`) — `qualityFacultyTable()` (~155): `means[i]` calibra `tone()` célula a célula.
  - **Aba 5** (`painel-aba5-qualidade.js`) — `cnpqBars()` (~400): `ref` calibra `cnpqTone()`.
  - **Aba 5** (`painel-aba5-qualidade.js`) — `cnpqScatter()` (~413): `avgX`/`avgY` são divisores de quadrante.
  - **Aba 5** (`painel-aba5-qualidade.js`) — `pgExcelenciaBars()` (~599): `avg` calibra `tone()`.
  - **Aba 6** (`painel-aba6-docentes.js`) — `facultyOccupationProgress()` (~176/201/206): composição de 3 segmentos (ocupadas/disponíveis/condicionadas) que precisam somar 100% — trocar só um quebra a consistência da barra empilhada.
  - **Aba 6** (`painel-aba6-docentes.js`) — `facultyLegalVisualTable()` (~222): `means[i]` calibra `tone()` em múltiplas colunas simultaneamente.
  - **Aba 6** (`painel-aba6-docentes.js`) — `facultyTimeline()` (~310-338): série **sintética decorativa** (ruído senoidal somado ao valor real para simular 48 meses) — não é dado histórico real, referência fixa não se aplica ao conceito.
  - **Aba 7** (`painel-aba7-insercao.js`) — `employmentAdherenceCards()` (~271, campo `cbo2Rate`/IND-39): sem dado real precomputado em nenhuma camada do pipeline (ver item abaixo).
  - **Aba 8/9** (`painel-aba9-desempenho.js`) — score-cards de `budgetMovementBlock()` (~1751-1759, via `budgetAgg()`): mesma função também alimenta delta ano-a-ano em `deltaForRenderedKpi()` — mesmo risco do item Aba 1.
  - **Aba 8/9** (`painel-aba9-desempenho.js`) — `tx_liquidacao`/`tx_pagamento_liq`/`grau_contingenciamento`: apesar de confirmados na whitelist (pipeline já exporta os 3), não há site de exibição dedicado independente do `budgetAgg()` acima para plugar a referência sem o mesmo risco de delta.

  **Direção de solução recomendada (não implementada, decisão de design para rodada própria):** desacoplar — manter a média do cluster calibrando o tom/quadrante/limiar exatamente como hoje (nenhuma mudança de comportamento nessa parte), e sobrepor o valor de Referência Geral apenas como um rótulo/marcador visual adicional ao lado (ex.: um segundo marcador tracejado ou um selo "melhor: X (SIGLA)"), sem que ele participe do cálculo que decide a classificação. Isso é uma proposta de direção, não uma tarefa já especificada — precisa de validação de design (onde cabe visualmente o segundo marcador em cada um dos 15 pontos) antes de qualquer implementação.
  - **cbo2Rate (IND-39) — divergência separada:** `grep -r ind39` em todo o `pipeline/` não retorna nenhuma ocorrência, e nenhum `byYear` do JSON gerado tem essa chave — `employmentMetrics(u).cbo2Rate` no frontend sempre cai no fallback sintético (`prRate - 5 + ...`). Não incluído na whitelist da Referência Geral; precisaria de uma fonte real (ex. enriquecimento a partir da RAIS/CBO2 já usada para `cbo2Profile`/`cbo2Diversity`) antes de ser elegível.
- **Referência Geral — correção da Aba 2 e reauditoria completa (2026-07-09):** a rodada anterior (item acima) implementou a Referência Geral em 7 pontos de exibição, mas fechou **sem validação Playwright da Aba 2** — a rodada de screenshots daquela vez não cobriu nenhuma ocorrência de `painel-aba2-comparacao.js`. Revisão manual do código encontrou 2 problemas reais que só existiam ali:
  1. **`comparisonTable()` (tabela comparativa, ~linha 202-246):** o valor de cada célula do rodapé já vinha corrigido via `comparisonMean()` (chama `overviewMetricReferenceGeral(ind)`), mas o **rótulo da linha** ("Média do cluster" / "Média geral PR" / `nationalMeanLabel()`) era fixo e não indicava quando aquela célula específica vinha da Referência Geral em vez da média real — uma única linha de rodapé cobre várias colunas/indicadores simultaneamente, então não dá para trocar o rótulo da linha inteira sem ambiguidade. Corrigido com marcação **por célula**: `comparisonFooterCell()` adiciona um `★` (classe `.ref-geral-mark`, com `title`/`aria-label` "Referência: {SIGLA}") só nas células cujo indicador está na whitelist, mantendo o rótulo genérico da linha; `comparisonRefGeralFootnote()` adiciona uma nota de rodapé da tabela explicando a marca, só quando pelo menos um indicador da dimensão ativa usa Referência Geral. Aplicado nas 3 linhas de rodapé existentes (Brasil/`nationalMeanLabel()`, PR/"Média do cluster", PR/"Média geral PR").
  2. **`comparisonRadar()` (radar, ~linha 411+):** com `refKey === "cluster"` (opção padrão do seletor "Comparar com"), eixos mapeados em `RADAR_AXIS_REFCAMPO` usavam Referência Geral fixa enquanto eixos sem mapeamento usavam a média real do cluster — tudo sob uma única legenda "Média do cluster", sem forma de distinguir por eixo (radar de até 6 eixos simultâneos, redesenhar a legenda por vértice é fora de escopo). **Decisão: revertido para 100% média real do cluster** em `radarReferenceValue()` — removida a chamada a `radarAxisReferenceGeral()` e deletadas essa função e a constante `RADAR_AXIS_REFCAMPO` (ficariam mortas). Esta é uma **exclusão intencional da v1** documentada no código (não uma pendência a resolver depois): diferente da tabela, o radar não tem onde marcar por célula/eixo. As demais opções do seletor (Brasil, Paraná, IES específica) nunca usaram Referência Geral e não foram afetadas.
  - **Reauditoria das outras 6 ocorrências** (Aba 1 `overviewClusterBars`/`overviewMetricReferenceGeral`, Aba 4 `retentionRateBars`, Aba 5 `qualityFacultyBlock`, Aba 6 `facultyTideBlock`, Aba 7 `employmentRateBars`, Aba 9 `budgetExecutionBars`): confirmado por leitura de código que rótulo e valor sempre trocam juntos (mesma variável `refGeral`/`refLabel` alimenta os dois, sem caminho onde um mude sem o outro) — nenhuma alteração necessária nelas. Confirmado também que as ~15 ocorrências em fallback (tom/quadrante/limiar, listadas no item acima) permanecem intocadas, sem nenhuma menção a Referência Geral.
  - **Validação Playwright desta vez cobriu as 8 abas/ocorrências** (screenshots + leitura de estado via `page.evaluate`), incluindo Aba 2: célula `★` confirmada ao lado de célula sem marca na mesma linha (`comparisonFooterCell`); ao trocar o filtro de cluster (chip lateral V1), a célula marcada (`97,0% ★`) permaneceu idêntica enquanto as demais células da mesma linha mudaram de valor; o polígono de referência do radar mudou de forma (`radarReferenceValue` agora 100% reativo ao filtro) mantendo a legenda "Média do cluster" consistente antes/depois.
  - **Lição de processo:** checklist de validação Playwright deve cobrir **todas** as abas afetadas por uma mudança, não uma amostra — a Aba 2 ficar de fora na rodada anterior é o que permitiu os 2 problemas acima passarem despercebidos.
- **Reativar 2026 no SELO:** quando o exercício 2026 for concluído, altere `_SELO_COMPLETUDE[2026]["completo"]` de `False` para `True` em `pipeline/assemble_final.py` e regenere o JSON. O seletor de ano no painel e todos os visuais do bloco SELO-PR se atualizam automaticamente.
- **Atualizar Base SELO:** solicitar nova extração do BI SELO-PR à SETI/SEFA, substituir `data/Base SELO - Paraná.xlsx` e regenerar com `python pipeline/assemble_final.py`.
- **`applyEfficiencyDefaults()` duplicada:** existe em `painel.js` (~5858) e em `painel-aba9-desempenho.js` (~298); a segunda sobrescreve a primeira em runtime (carrega depois). Ambas mantidas com guard `isBrasilScope` desde 2026-07-02 — editar sempre a versão de `painel-aba9-desempenho.js`.
- **`getRealIndicators()` vs. `getRealIndicatorsExact()` em `byYear()` (2026-07-06):** `byYear()` (`painel.js` ~2977) chamava `getRealIndicators(u.sigla, year)`, que faz *fallback* para o último ano disponível em `row.byYear` quando o ano pedido não existe — misturando dado real de um ano com o rótulo de outro (ex.: pedir 2020 podia devolver o `byYear["2024"]` inteiro). Trocado para `getRealIndicatorsExact(u.sigla, year)` (já existia em `data-hub.js` ~265, sem uso), que devolve `null` quando o ano não bate exatamente, deixando `byYear()` cair no valor estimado por delta em vez de reaproveitar ano errado. As outras 3 chamadas de `getRealIndicators()` em `painel.js` (~2654, ~3286-3288, ~3574) usam anos fixos que sempre existem no pipeline (não afetadas, não tocadas).
  - Evidência do bug corrigido (Aba 3, gráfico de ocupação, escopo Brasil): **UEPA** tinha 2020 idêntico a 2024 (`64,3%` nos dois) antes da correção — agora 2020 mostra um valor estimado distinto (`66,4%`). **UnDF** tinha 2020/2021 "roubando" o valor de 2024 (`74,7%`) enquanto 2022/2023 já mostravam `0,0%` (mistura inconsistente) — agora os 4 anos sem cobertura são consistentemente `0,0%` (depois corrigido de novo pelo fix de null abaixo).
- **Zero vs. "sem dado" em cascata — 3 camadas corrigidas (2026-07-06):** o `0,0%` acima (UnDF e outras 17 IES fora do PR sem indicador de ocupação anterior a 2024) não era um dado real — era `null` sendo tratado como zero em 3 pontos que se alimentam em cadeia:
  1. **`byYear()` (`painel.js` ~2977):** o loop `["occupancy","completion","doctors","employment","facultyOcc","cres","execution","liquidation"].forEach(k=>c[k]=clamp(round(c[k]+delta,1),0,100))` fazia `c[k]+delta` mesmo quando `c[k]` era `null` — em JS, `null + delta` coage `null` para `0`, produzindo um número pequeno perto de zero (não `NaN`, por isso passava despercebido). Agora pula a IES/indicador (`if(c[k]==null)return;`) e preserva o `null`.
  2. **`sum()`/`mean()` (`painel.js` ~3583):** agregavam `null` como `0` no cálculo de médias de cluster/nacional, achatando artificialmente a média quando várias IES não tinham dado no ano. Agora filtram `null` antes de somar/dividir — **impacto amplo, ~172 pontos de chamada** de `mean(`/`sum(` no painel inteiro (todas as abas, não só Aba 3), qualquer um que hoje receba `null` passa a excluí-lo do cálculo em vez de tratá-lo como zero.
  3. **`occupancyTimeline()` (`painel-aba3-acesso.js` ~166-220):** com as duas camadas acima já preservando `null`, a função precisava aprender a desenhar um "buraco" na linha em vez de gerar coordenada `NaN`. `minV`/`maxV` agora filtram `null` de `allValues` antes de `Math.min`/`Math.max`; a `<polyline>` única virou `<path>` com `buildLinePath()` (gera `M`/`L` com `moveTo` a cada `null`, cortando a linha em vez de interpolar sobre o buraco); o `title` mostra `"Sem dado"` em vez de `formatPercent(null)`; `selDots` não desenha o círculo de destaque quando o ano selecionado não tem valor.
  - CSS: `.timeline-line`/`.timeline-line.line-N` (`painel.css` ~3080, ~7670) já eram seletores por classe (sem qualificador de tag `polyline.`), aplicam ao novo `<path>` sem nenhuma alteração.
  - Validado via Playwright (Brasil): as 18 IES sem baseline anterior a 2024 (UESC, UNCISAL, UVA, UNIMONTES, UPE, UEFS, UNEMAT, UESPI, UNITINS, UENF, UEMS, UEMG, UERR, UNEAL, UEAP, UEMASUL, UnDF, URCA) mostram `"Sem dado"` para 2020-2023 e só o valor real de 2024; nenhum `selDot` desenhado para essas IES ao clicar em 2020-2023 (22 pontos, vs. 40 em 2024, confirmado por contagem). Média nacional deixou de ser arrastada para baixo pelos zeros artificiais (2020 recalculada para `68,3%`, consistente com a média apenas das 22 IES com dado real/estimado — antes da correção o mesmo cálculo, com os 18 zeros somados ao total de 40, resultava em `~37,6%`). Aba 3 Paraná (7 IES, todas com baseline real) idêntica ao estado pós-fix de cor/eixo, sem regressão. Sem erros de console em nenhuma aba testada.
- **Tooltips de Fórmula (ⓘ):** sistema separado do `.ind-info`/`_injectAnnotations` (descrição manual). Mostra só o campo `formula` do `INDICATOR_CATALOG`, via ícone `.ind-formula-info` / `.ind-formula-tooltip` (regras CSS copiadas de `.ind-info`/`.ind-tooltip`, cor do ícone levemente diferente — roxo — só para diferenciar os dois sistemas ao depurar).
  - `injectFormulaTooltip(labelEl, indKey)` (`painel.js`, logo após `INDICATOR_CATALOG`, exposta em `window`) é a utilitária genérica: recebe um elemento de label já casado e um `ind_key`, injeta o ícone se a fórmula existir. Não decide qual indicador — isso é responsabilidade de cada aba.
  - `ABA1_LABEL_TO_IND` (`painel-aba1-panorama.js`, topo do arquivo) é o mapa "label exibido → ind_key" da Aba 1 (17 entradas: 14 KPIs globais de `overviewKpiDefinitions` + 3 score-cards do corpo — "Desvinculação", "Inserção PR", "Execução orçamentária"). Validado manualmente contra a planilha "5. Relação de Indicadores das Universidades.xlsx" antes de implementar (ver histórico do card/chat que gerou esta seção). `_injectAba1FormulaTooltips()` consome esse mapa e usa `data-formula-done` para não duplicar ícone.
  - **Por que não é acionado via patch de `render()`** (padrão usado por `_injectAnnotations`): `render()` foi envolvido por camadas assíncronas — `renderWithVisualStates()` (`painel.js` ~5755) mostra skeleton e adia o render real via `requestAnimationFrame`; `renderWithBrasilScopeDomCleanup()` (`painel.js` ~6732) adia limpeza via `requestAnimationFrame` + `setTimeout`. `render()` retorna **antes** do conteúdo real existir no DOM — qualquer código encadeado sincronamente logo após a chamada (inclusive o `_injectAnnotations()` já existente) roda sobre o skeleton, não sobre o conteúdo final. Confirmado via Playwright: em produção, `.ind-info` nunca aparece após um load normal, mesmo com os cards já pintados na tela — bug pré-existente, não introduzido nesta rodada, e fora do escopo corrigir no sistema antigo agora. Para os tooltips de fórmula da Aba 1, o hook usa um `MutationObserver` direto em `#kpiGrid`/`#tabContent` (não no objeto `el`, que só é populado por `cache()` no listener de `DOMContentLoaded` — os `<script>` rodam antes disso), reagindo ao DOM real independente de quantas camadas de adiamento existam.
  - **Guard de aba obrigatório:** `.score-card` é reaproveitada por outras abas (ex.: Aba 3 usa `"score-card access-card"` com `<h3>Total de vagas</h3>` — mesmo texto do KPI global de Aba 1; colisão real, confirmada via Playwright, corrigida com `if (state.activeTab !== "overview") return;` no início de `_injectAba1FormulaTooltips()`). Qualquer extensão futura desse padrão para outras abas precisa do mesmo tipo de guard, ou escopar a query a um container específico da aba, para não vazar ícone entre abas.
  - **Itens em aberto (não implementados nesta rodada):**
    - `"Ranking de IEES por ${metric.label}"` (Aba 1, `overview()`) — título dinâmico conforme o indicador escolhido no seletor `overviewMetricSelector` (~90 opções). Não dá para casar por texto estático; precisa ler `metric.code` do estado no momento da renderização.
    - `"Síntese dos indicadores estruturais por IEES"` (Aba 1, `table-wrap`) — tabela composta (Estudantes, Vagas, Cursos, Concluintes simultaneamente), sem fórmula única correspondente.
    - Score-card **"Ocupação das vagas"** (mesmo indicador do KPI "Taxa de ocupação das vagas", `ind26`) não está em `ABA1_LABEL_TO_IND` — ficou de fora da lista de 17 entradas validada nesta rodada (os outros 3 score-cards do mesmo bloco foram incluídos). Confirmar se foi omissão ou intencional antes de adicionar.
    - Aba 8 (`painel-aba8-orcamentaria.js`) — ainda sem tooltip de fórmula própria; a aba "efficiency" que ela deveria controlar é sombreada pela Aba 9 (ver abaixo), então não há cards vivos de `painel-aba8-orcamentaria.js` no momento. Abas 3, 4, 5, 6, 7 e 9 já implementadas, ver abaixo; `injectFormulaTooltip()` já está pronta para reutilização.
  - **`ABA3_LABEL_TO_IND` (Aba 3 — Acesso e Oferta, implementada):** 9 entradas (`painel-aba3-acesso.js`, topo do arquivo) — 4 score-cards gerados por `accessCard()` ("Total de vagas", "Cursos ativos", "Participação nas vagas", "Vagas por curso") + 5 `<h3>` de `.visual-card`. `_injectAba3FormulaTooltips()` usa o mesmo padrão de `MutationObserver` em `#kpiGrid`/`#tabContent` e o mesmo guard (`if (state.activeTab !== "access") return;`), validado nas duas telas (Paraná e Brasil) com filtro de tipo de curso no padrão.
    - **Achado durante a implementação (não previsto no diagnóstico só-leitura):** `expandIndicatorCodes()` (`painel.js` ~5009), acionada a cada `render()`, varre `document.body` inteiro e substitui qualquer trecho `"IND-N"` no texto (inclusive dentro de `<h3>`) pelo nome cheio do indicador via `indicatorName()`. Ou seja, um h3 escrito no código-fonte como `"IND-26 · Taxa de ocupação por IEES"` **nunca aparece assim na tela** — renderiza como `"Taxa de ocupação das vagas · Taxa de ocupação por IEES"`. Confirmado via Playwright que essa expansão sempre roda **antes** do callback do `MutationObserver` disparar (é síncrona, dentro do mesmo ciclo de `render()` que escreve o DOM; o `MutationObserver` só roda depois, como microtask) — comportamento determinístico, não é uma corrida. As chaves de `ABA3_LABEL_TO_IND` para esses 5 casos usam o texto **pós-expansão**, não o `"IND-N"` literal do código-fonte.
    - **⚠️ Isso invalida as entradas `"IND-N · ..."` levantadas no diagnóstico das Abas 4, 5 e 6** (ex.: `"IND-5 · Taxa anual de desvinculação"`, `"IND-6 · Proporção de docentes com doutorado"`, `"IND-46 · Taxa de ocupação do quadro docente"` etc.) — todas precisam da mesma correção (mapear pelo texto pós-`expandIndicatorCodes()`, não pelo texto do código-fonte) antes de serem implementadas. Confirmar o texto renderizado real via Playwright em cada rodada futura, não assumir que o texto do `<h3>` no `.js` é o que aparece na tela.
    - **Limitação conhecida, não corrigida:** os 4 títulos de `accessCard()` e 2 dos 5 `<h3>` de `.visual-card` ("... por IEES") têm um sufixo dinâmico `typeLabel` (ex.: `" · Presencial"`) quando o filtro de tipo de curso está ativo. O match por texto exato só funciona com o filtro no estado padrão (`typeLabel` vazio); quando o filtro muda, o texto sai do mapa e o ícone simplesmente some — sem erro, sem dado errado, só sem tooltip.
    - **Excluído de propósito:** score-card "Municípios com oferta" — o código `"IND-17"` usado no fonte (`accessCard("IND-17", "Municípios com oferta", ...)`) não bate com o indicador `ind17` real do catálogo (`"Participação do município no total de vagas"`, um percentual; o card calcula uma contagem de municípios distintos). Reportar separadamente a quem mantém a planilha/código — pode ser código errado no fonte, não limitação de mapeamento.
  - **`ABA4_LABEL_TO_IND` (Aba 4 — Permanência e Formação, implementada):** 3 entradas (`painel-aba4-permanencia.js`, topo do arquivo) — 2 `<h3>` de `.visual-card` + 2 `.ff-kpi-label` (a chave `"Concluintes sobre matrículas"` cobre os dois lugares onde esse texto aparece, `h3` **e** `.ff-kpi-label`, cada um marcado e verificado independentemente via `data-formula-done` no próprio card, sem duplicar ícone no mesmo local). `_injectAba4FormulaTooltips()` introduz um **terceiro seletor/loop** além dos já usados nas Abas 1 e 3 — cobre `.ff-kpi` (mini-KPI do funil formativo), que não é nem `.kpi-card` nem `.score-card`. Guard: `if (state.activeTab !== "retention") return;`.
    - **Confirmado via Playwright antes de fechar o mapa** (lição da Aba 3 aplicada aqui): o h3 escrito no código-fonte como `"IND-5 · Taxa anual de desvinculação"` renderiza, após `expandIndicatorCodes()`, como `"Taxa anual de desvinculação discente · Taxa anual de desvinculação"` — é essa a chave usada no mapa, não o texto do `.js`.
    - **CSS:** `.ff-kpi .ind-formula-info` (painel.css, logo após o bloco base de `.ind-formula-info`/`.ind-formula-tooltip`) reduz o ícone para 10px dentro do `.ff-kpi`, já que o label ali usa fonte de 11px e o ícone padrão (13px) ficava desproporcional — só ajuste de tamanho/margem, não reescreve nem herda o resto do estilo base.
    - **Excluídos de propósito:** `"Vagas ociosas"` (`.ff-kpi-label`) — ambíguo entre `ind25` e `ind28`, nenhuma fórmula bate exatamente com o cálculo usado (`vacancies - entrants`); `"Matrículas por ingressante"` (`.ff-kpi-label`) — sem indicador correspondente no catálogo.
    - Verificado nos dois escopos (Paraná e Brasil), sem duplicação após re-render, sem vazamento para as Abas 1, 3 ou 5 (Qualidade).
  - **`ABA5_LABEL_TO_IND` (Aba 5 — Qualidade, Pesquisa e Pós-Graduação, implementada):** 7 entradas (`painel-aba5-qualidade.js`, topo do arquivo), todas `<h3>` de `.visual-card`. Nesta aba o código de confirmação às vezes vem do próprio h3 (`"IND-6 · ..."`) e às vezes só do `card-subtitle` (`"IND-98 · ..."`, `"IND-106 · ..."`, `"IND-107 · ..."`, `"IND-108 · ..."`) — a chave do mapa é sempre o **h3 renderizado**, único elemento estável pra ancorar o ícone, mesmo quando a confirmação do indicador veio do subtítulo.
    - **Confirmado via Playwright antes de fechar o mapa** (mesma disciplina da Aba 4): quando o h3 no código-fonte já é `"IND-N · <nome idêntico ao do catálogo>"`, `expandIndicatorCodes()` **duplica o nome** em vez de só substituir o código — ex.: `"IND-6 · Proporção de docentes com doutorado"` renderiza como `"Proporção de docentes com doutorado · Proporção de docentes com doutorado"`. Isso é diferente do padrão visto nas Abas 3/4, onde o texto após o "·" era um sufixo distinto do nome puro (ex.: `"... por IEES"`) — a duplicação só acontece quando o autor do card já usou o nome oficial como sufixo. As 3 entradas com código embutido no h3 desta aba (`ind6`, `ind60`, `ind61`) seguem esse padrão de nome duplicado.
    - **Match sempre por igualdade exata (`===`), nunca `includes()`:** `"Captação de recursos do CNPq · Captação de recursos do CNPq"` (Aba 5, pós-expansão) não é a mesma string que `"Captação de recursos do CNPq"` (Aba 1) — apontam pro mesmo `ind60`, mas são strings diferentes; um matching por substring colidiria à toa.
    - Verificado nos dois escopos, sem duplicação após re-render, sem vazamento para as Abas 1, 3, 4 ou 6 (Corpo Docente).
  - **`ABA6_LABEL_TO_IND` (Aba 6 — Corpo Docente e Capacidade Operacional, implementada):** 2 entradas (`painel-aba6-docentes.js`, topo do arquivo) — a rodada mais simples até agora, ambas `<h3>` de `.visual-card` com código único embutido no próprio h3. Guard: `if (state.activeTab !== "faculty") return;` (`data-tab="faculty"` confirmado no HTML antes de usar).
    - **Confirmado via Playwright antes de fechar o mapa:** mesmo padrão de nome duplicado da Aba 5 — `"IND-46 · Taxa de ocupação do quadro docente"` renderiza como `"Taxa de ocupação do quadro docente · Taxa de ocupação do quadro docente"`; `"IND-51 · Participação do TIDE no quadro docente disponível"` idem.
    - **Excluídos de propósito:** todos os h3 com múltiplos códigos (`"IND-45, IND-44 e IND-48 · ..."`, `"IND-56, IND-58 e IND-46 · ..."`, `"IND-59 × IND-46 · ..."` — todos compostos, confirmado que renderizam com múltiplos nomes concatenados) e `.tide-card` (estatísticas derivadas — média/líder/mínimo do cluster, não o valor bruto do indicador; card ainda fora do alcance de qualquer seletor usado até agora, igual ao `.intl-kpi` da Aba 5).
    - Verificado nos dois escopos, sem duplicação após re-render, sem vazamento para as Abas 1, 3, 4, 5 ou 7 (Inserção Profissional).
  - **`ABA7_LABEL_TO_IND` (Aba 7 — Inserção Profissional, implementada):** 6 entradas (`painel-aba7-insercao.js`, topo do arquivo), todas `<h3>` de `.score-card.employment-kpi-card` gerado por `employmentKpiCard(indicatorName(N), ...)`. Título é `indicatorName(N)` **puro** (sem sufixo) — texto renderizado idêntico ao `nome` do catálogo, sem necessidade de confirmar expansão via Playwright (diferente do padrão "nome duplicado" das Abas 5/6).
    - **⚠️ Comentário desatualizado encontrado e não seguido:** o código-fonte tem `/* ACTIVE definition (line 7415 in painel.js overrides line 7051) */` logo acima de `employmentGeneralBlock` (`painel-aba7-insercao.js` ~linha 92), sugerindo que a versão ativa estaria em `painel.js`. **Confirmado via grep no arquivo inteiro que `employmentGeneralBlock` não existe em `painel.js`** — só existe em `painel-aba7-insercao.js`, e é essa a única definição, logo a que roda. O comentário é resíduo de uma refatoração anterior (a função pode ter sido movida de `painel.js` para este arquivo em algum momento e o comentário nunca foi atualizado). Editei `painel-aba7-insercao.js`, não `painel.js`. Vale limpar esse comentário morto numa faxina futura para não confundir a próxima pessoa.
    - **Pendência registrada (fora do padrão atual, candidata a rodada futura):** os h3 `"${indicatorName(37)} por IEES"` / `"${indicatorName(35)} por IEES"` (sufixo dinâmico quebra match exato) e, principalmente, `"Retenção local de talentos"` (→ `ind42`) / `"Aderência formação-trabalho"` (→ `ind39`) ficaram de fora — nesses dois últimos, o código do indicador só existe no código-fonte (`${indicatorName(42)}`/`${indicatorName(39)}` embutido no `card-subtitle`, que expande para o nome completo em texto corrido, não um "IND-N" isolado e regex-extraível). Não dá pra confirmar por regex no DOM renderizado como fizemos com os subtítulos "IND-98 ·" da Aba 5. Um mecanismo mais robusto exigiria expor o `ind_key` via `data-attribute` no HTML gerado (ex.: `<h3 data-ind-key="ind42">`) em vez de casar por texto — mudaria como os cards são construídos nas abas, não só o injetor de tooltip.
    - Verificado nos dois escopos, sem duplicação após re-render, sem vazamento para as Abas 1, 3, 4, 5, 6 ou 9 (Desempenho e Eficiência Relativa).
  - **`ABA9_LABEL_TO_IND` (Aba 9 — Desempenho e Eficiência Relativa, implementada):** 9 entradas (`painel-aba9-desempenho.js`, topo do arquivo) — a maioria aparece em **dois tipos de card**: `.kpi-card.kpi-budget` (KPIs globais, 3 dos 9 indicadores) e `.score-card.budget-score-card` (bloco "Perfil da movimentação", os 9). `_injectAba9FormulaTooltips()` tem **guard duplo**, porque esta aba redefine `renderKpis()` para as duas abas da UI cujo conteúdo ela controla: `state.activeTab === "efficiency"` (rótulo na UI: "8. Execução Orçamentária") e `state.activeTab === "performance"` ("9. Desempenho e Eficiência Relativa") — confirmado via `data-tab` no HTML. É por isso que a Aba 8 (`painel-aba8-orcamentaria.js`) não teve nenhum card vivo no diagnóstico original: esta aba sombreia o que seria dela para a aba "efficiency".
    - **`ind95/96/97` (CAPES) vs. `ind95orc/96orc/97orc` (orçamentário) são entradas distintas no catálogo** — a Aba 9 usa exclusivamente as `_orc` para os 3 indicadores de execução sobre orçamento inicial/disponível/atualizado (`legacyBudgetIndicatorName("ind95orc"/"ind96orc"/"ind97orc")`). Confirmado via grep em `painel.js` antes de reativar: as fórmulas de `ind95orc`/`ind96orc`/`ind97orc` contêm "Liquidado / ..." (nunca "NM_PROGRAMA_IES"/"CAPES"), e essas mesmas chaves já eram usadas em outro ponto do arquivo (`SCATTER_INDICATOR_OPTIONS` ~3765-3767, grupos de cruzamento ~3975-3977) — a ambiguidade já estava resolvida no catálogo, uma rodada anterior só não tinha usado a chave certa (chegou a excluir os 3 por engano, presumindo colisão de numeração sem checar se já existia solução). Confirmado via Playwright: os 3 mostram ícone com a fórmula orçamentária correta, sem contaminação de CAPES, nos dois escopos.
    - **Duplicata de função no próprio arquivo:** `budgetMovementBlock` é declarada 2× (~linha 1361, morta; ~linha 1686, viva) — confirmado via grep que só a segunda é alcançável (a primeira não tem nenhum caminho de chamada). Todas as 9 entradas do mapa foram confirmadas contra a declaração viva antes de editar.
    - Testado nas duas abas cobertas pelo guard (Execução Orçamentária/"efficiency" e Desempenho e Eficiência Relativa/"performance"): 12 ícones em "efficiency" (3 KPI + 9 score-card), 0 em "performance" (nenhum dos cards dessa aba está no mapa — a aba mostra estatísticas derivadas como "Correlação orçamento × desempenho", fora de escopo desde o diagnóstico). Verificado nos dois escopos, sem duplicação após re-render, sem vazamento para nenhuma das Abas 1, 3, 4, 5, 6 ou 7.
- **Filtros globais de Recorte — Grande Área, Tipo de Curso, Modalidade, Vagas (2026-07-09):** adicionados ao cabeçalho, ao lado de Ano/IEES/Agrupamento. São 3 mecanismos diferentes, não um só:
  - **Grande Área** (`cineAreaGlobalFilter`) é filtro de **universo de IES**: usa `u.areaCineGrande`, a classificação V9 da `Estratificação_IES_Estaduais_BR.xlsx` (um valor fixo por IES, não por curso — ver comentário em `populateCursoFilters()`). Não recalcula nenhum indicador, só restringe quais IES entram em `context().ref`/`display`.
  - **Tipo de Curso** (`grauAcademicoGlobalFilter`) e **Modalidade** (`modalidadeEnsinoGlobalFilter`) são filtros de **recálculo agregado**: `applyCourseFiltersOverride()` soma os grupos de `cursosDetalhado`/`cursosDetalhadoByYear` que batem com o critério e recalcula `students`/`entrants`/`graduates`/`vacancies`/`courses`/`occupancy`/`completion`/`dropout` a partir da soma — não é um simples `.filter()` de linhas prontas. Respeitam o filtro de Ano porque `byYear()` já troca `c.cursosDetalhado` para `cursosDetalhadoByYear[sigla][ano]` antes desse recálculo rodar.
  - **Vagas** (`vagaRecorteGlobalFilter`, select único com `<optgroup>` Tipo/Turno) é um **seletor de métrica**, não um filtro de subconjunto — cada curso tem `QT_VG_NOVA` **e** `QT_VG_REMANESC` **e** as demais colunas simultaneamente, nunca uma categoria excludente. `applyVagaMetricOverride()` troca só qual campo de vaga/ingresso alimenta o recorte, **sem sobrescrever `u.vacancies`/`u.occupancy` globais** (que alimentam `groupMeta.v2`, `composite()` e `costOccupiedVacancy` — sobrescrevê-los mudaria Cluster V2/score/custo por vaga toda vez que o filtro estivesse ativo, violando o isolamento de `groupBy`/Cluster). Os valores recortados (`vagaMetricVacancies`/`vagaMetricOccupancy`) só são lidos em 2 lugares: os cards "Total de vagas"/"Taxa de ocupação" de `accessScale()`/`brasilAccessEscalaBlock()` (`painel-aba3-acesso.js`, Aba 3 · Acesso e Oferta). Nenhuma outra aba, ranking, alerta ou score reflete esse recorte — decisão de escopo, não limitação técnica.
- **Vagas — ocupação por recorte (2026-07-09):** só `Nova`/`Diurno`/`Noturno` têm % de ocupação calculado em `VAGA_RECORTE_FIELDS` (`painel.js`) — numerador de ingressantes (`QT_ING_VG_NOVA`/`QT_ING_DIURNO`/`QT_ING_NOTURNO`) confirmado na base. `Remanescente` e `ProgEspecial` **têm** coluna de ingressantes real (`QT_ING_VG_REMANESC`/`QT_ING_VG_PROG_ESPECIAL`) mas foram deixados com `ing:null` (occupancy sempre "Não aplicável") por decisão explícita de escopo desta rodada — não por falta de dado; reverter é só trocar o `ing:null` correspondente no mapa. `ProcSeletivo` fica sem % porque a coluna é zero em 100% das linhas da base 2020-2024.
- **Vagas — opção "EaD" removida do seletor (2026-07-09):** o `<optgroup label="Turno">` de `vagaRecorteGlobalFilter` tinha Diurno/Noturno/EaD; `EaD` foi removido por redundância com o filtro Modalidade (que já distingue Presencial/EaD). A coluna `QT_VG_TOTAL_EAD`/`vgEad` **continua sendo extraída** no pipeline (`cursosDetalhado`/`cursosDetalhadoByYear`) — só deixou de ser selecionável na UI. `VAGA_RECORTE_FIELDS` (`painel.js`) não tem mais a entrada `EaD`; reativar é só devolver a entrada (`ing:null`, sem numerador — não existe `QT_ING_EAD` na base) e o `<option>` correspondente no HTML.
- **`cursosDetalhado` vs. `cursosDetalhadoByYear`:** o campo antigo (`cursosDetalhado`, só o ano mais recente por IES) continua existindo no JSON por compatibilidade retroativa. O consumo real do frontend (`byYear()`, `painel.js`) usa `cursosDetalhadoByYear[sigla][ano]`, com fallback para `cursosDetalhado` quando a IES não tem dado para o ano selecionado.
- **`bindAuditedButtons()` × `bind()`:** `bindAuditedButtons()` **sobrescreve** `bind()` (reatribuição de variável, não herança/extensão) e mantém seu próprio array de IDs para o listener de `change` — a versão que roda em produção é sempre `bindAuditedButtons()`, carregada por último. Qualquer novo filtro/controle de UI precisa ser adicionado nos **dois** lugares (`cache()`, `bind()` **e** `bindAuditedButtons()`), ou fica com `.value` lido corretamente mas sem reatividade nenhuma — causa raiz confirmada de uma regressão no Round 2a. **Nota (2026-07-09):** ao investigar Grande Área/Vagas aparentando "não alterar dados exibidos", essa hipótese foi checada de novo via grep e **descartada** (ambos os IDs já estavam presentes nos 2 lugares) — a causa daquela vez foi outra (ver item de cache abaixo). Vale continuar checando essa hipótese primeiro em sintomas parecidos, mas não assumir que é sempre ela.
- **Cache-busting ausente em `painel.js`/`painel-aba3-acesso.js` (2026-07-09):** ao contrário de `painel.css` e `painel-aba8-orcamentaria.js` (que já usam `?v=YYYYMMDD-slug` na tag `<script>`/`<link>`), `painel.js` e `painel-aba3-acesso.js` não tinham versionamento — uma sessão de navegador com esses 2 arquivos em cache continua rodando código antigo mesmo com o servidor já servindo o arquivo atualizado, sem nenhum erro visível (o `.value` do `<select>` muda na tela, mas o JS que deveria ler esse valor é o antigo). Foi a causa real de Grande Área e Vagas parecendo "não fazer nada" numa sessão de validação, apesar do código em disco estar correto (confirmado via Playwright em contexto limpo). Corrigido adicionando `?v=20260709-vagas-cinearea-cache` nas duas tags. **Lição:** ao editar `painel.js` ou `painel-aba3-acesso.js`, faça bump na query string do `<script>` — ou considere estender o padrão `?v=` para todas as tags de `<script>` do dashboard, não só as duas que já têm.
