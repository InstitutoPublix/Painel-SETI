# Catálogo do Dashboard — Painel SETI

**Painel de Desempenho da Gestão Universitária**
Versão v8 · Orçamento para Resultados · SETI Paraná

---

## Estrutura Geral

O painel é composto por:
- **Cabeçalho institucional** com chips de status de carregamento
- **Barra de abas** com 8 dimensões de análise
- **Grid de KPI cards** (8 cards no topo, variam por aba)
- **Barra de filtros** (Ano, IEES, Agrupamento, Escopo)
- **Painel lateral** (critérios do agrupamento, alertas)
- **Área de conteúdo da aba** (gráficos, scores, tabelas)

### Filtros Globais

| Filtro | Tipo | Valores | Efeito |
|--------|------|---------|--------|
| **Ano** | Select | 2020–2024 | Ajusta todos os indicadores via `yearAdj` |
| **IEES** | Multi-checkbox | 7 IEES (PR) + todas no escopo Brasil | Filtra as IES exibidas |
| **Agrupamento** | Select | V1–V8 | Define o critério de comparação entre pares |
| **Nível do grupo** | Chips | Depende do agrupamento | Isola um subconjunto de IES |
| **Escopo** | Toggle | Paraná / Brasil | Inclui/exclui as 15 IES nacionais |

**Ajuste temporal (`yearAdj`):** para anos anteriores a 2024, o painel aplica fatores de escala sobre os dados base. O ano 2024 usa os dados reais sem ajuste. Dados de 2020–2021 exibem aviso sobre impacto da pandemia.

---

## KPI Cards (Topo do Painel)

8 cards sempre visíveis. O conteúdo varia conforme a aba ativa.

### Abas 1–7 (todos exceto Eficiência)

| Card | Dado Exibido | Fonte | Formato |
|------|-------------|-------|---------|
| Total de estudantes | Soma de `students` do recorte | INEP/Base Cursos | Número inteiro |
| Taxa de ocupação das vagas | Média ponderada de `occupancy` (peso: `vacancies`) | INEP calculado | % com 1 decimal |
| Taxa de concluintes | Média ponderada de `completion` (peso: `entrants`) | INEP calculado | % com 1 decimal |
| Docentes com doutorado | Média ponderada de `doctors` (peso: `students`) | INEP/Base IES | % com 1 decimal |
| Captação CNPq | Soma de `cnpq` | Base CNPq | R$ X,X mi |
| Inserção no Paraná | Média ponderada de `employment` (peso: `graduates`) | CBO2/RAIS | % com 1 decimal |
| Orçamento liquidado | Soma de `budget` | Base SELO | R$ X,X mi |
| Execução orçamentária | Média ponderada de `execution` (peso: `budget`) | Clusterização | % com 1 decimal |

Cada card exibe variação vs. ano anterior (▲/▼ em p.p. ou %) quando disponível.

### Aba 8 — Eficiência

| Card | Dado Exibido |
|------|-------------|
| Orçamento liquidado do grupo | Soma de `budget` |
| Execução orçamentária média | Média de `execution` |
| Taxa de liquidação | Média de `liquidation` |
| Indicador de esforço selecionado | Calculado pelo `effortIndicator` ativo |
| Resultado médio do grupo | Calculado pelo `resultIndicator` ativo |
| Resultado relativo | `result / média_grupo × 100` |
| Esforço relativo | `effort / média_grupo × 100` |
| Classificação relativa | Quadrante na matriz de eficiência |

---

## Aba 1 — Panorama Executivo

**Pergunta orientadora:** O sistema está crescendo ou retraindo?

### Visualizações

#### 1.1 Gráfico de barras: Resultado institucional por IEES
- **O que mostra:** barras horizontais ordenadas pelo indicador de resultado selecionado
- **Indicador padrão:** `composite` — score composto ponderado
- **Fórmula composite:** `occupancy×0.15 + completion×0.15 + (100−dropout)×0.12 + doctors×0.14 + norm(cnpq_per_student)×0.12 + norm(capes)×0.10 + employment×0.12 + norm(salary)×0.10`
- **Escala:** máximo relativo ao conjunto filtrado

#### 1.2 Ranking executivo do recorte
- **O que mostra:** top 5 IEES por resultado relativo ao grupo
- **Dado:** `resultRel = result / média_grupo × 100`
- **Rótulo:** "acima da média" ou "abaixo da média"

#### 1.3 Cards de Score
- **Selo de abrangência:** escopo ativo (Paraná ou Brasil) + barra de cobertura
- **Orçamento para Resultados:** média de `(execution + completion) / 2`

#### 1.4 Tabela Síntese por IEES (colapsável)
Colunas: IEES | Estudantes | Cursos | Ocupação | Concluintes | Orçamento | Grupo

---

## Aba 2 — Comparação entre IEES

**Pergunta orientadora:** Quais IEES estão acima ou abaixo da média do grupo?

### Visualizações

#### 2.1 Gráfico de barras: IEES × média do grupo
- **O que mostra:** barras horizontais do indicador de resultado selecionado
- **Referências adicionadas:** linha de média do grupo, média Paraná, média Brasil

#### 2.2 Posição relativa (Ranking)
- **O que mostra:** ranking por resultado relativo com classificação descritiva por quadrante
- **Quadrantes:** "alto resultado, baixo esforço" / "alto resultado, alto esforço" / "baixo resultado, baixo esforço" / "baixo resultado, alto esforço"

#### 2.3 Tabela comparativa das IEES

Colunas:

| Coluna | Dado | Fonte |
|--------|------|-------|
| IEES | Sigla + região | Estático |
| Resultado | Indicador de resultado selecionado | Calculado |
| Média grupo | Média do agrupamento ativo | Calculado |
| Média Paraná | Média das 7 IEES-PR | Calculado |
| Média Brasil | Valor de benchmark nacional (`brazil.result[...]`) | Estimado (referência INEP) |
| Esforço relativo | `effort / média_grupo × 100` | Calculado |
| Classificação | Chip colorido com rótulo do quadrante | Calculado |

**Nota sobre dados Brasil:** A "Média Brasil" usa valores de referência do objeto `brazil` definido no `painel.js`. Estes são benchmarks estáticos derivados de publicações INEP/CNPq/CAPES — não são extraídos de bases XLSX. Os dados das 15 IES nacionais individuais (exibidos quando escopo = "Brasil") são carregados do JSON pré-processado (INEP real para students/doctors/capes) ou estimados para indicadores PR-only (budget, employment, etc.).

---

## Aba 3 — Acesso e Oferta

**Pergunta orientadora:** A oferta está sendo ocupada de forma eficiente?

### Indicadores

| Código | Nome | Fórmula/Fonte |
|--------|------|---------------|
| ind1 | Proporção de ocupação de vagas | `QT_ING / QT_VG_TOTAL × 100` |
| ind11 | Total de vagas | `sum(QT_VG_TOTAL)` |
| ind10 | Total de cursos | `sum(QT_CURSO)` |
| ind24 | Taxa de ocupação das vagas de ingresso | `occupancy` |
| ind26 | Taxa de ocupação das vagas | `occupancy` |

### Visualizações

#### 3.1 Score cards (3 cards)

| Card | Dado | Cálculo |
|------|------|---------|
| Escala da oferta | Total de vagas | Soma de `vacancies` |
| Ocupação e ociosidade | Taxa de ocupação | Média ponderada de `occupancy` + vagas não ocupadas |
| Eficiência da oferta | Custo por vaga ocupada | `budget × 1M / (vacancies × occupancy/100)` |

#### 3.2 Gráfico de barras: Taxa de ocupação por IEES
- **O que mostra:** `occupancy` de cada IES, ordenado descendente
- **Dado:** `QT_ING / QT_VG_TOTAL × 100` (ano mais recente, Base Cursos INEP)

#### 3.3 Gráfico de barras: Participação na oferta
- **O que mostra:** `vacancies` (total de vagas por IES)
- **Dado:** `sum(QT_VG_TOTAL)` por CO_IES no ano mais recente

#### 3.4 Tabela: Escala, ocupação e custo da oferta (colapsável)

Colunas: IEES | Cursos | Vagas | Ocupação | Vagas não ocupadas | Custo por estudante

---

## Aba 4 — Permanência e Formação

**Pergunta orientadora:** Os estudantes estão chegando ao final do curso?

### Indicadores

| Código | Nome | Fórmula/Fonte |
|--------|------|---------------|
| ind5 | Taxa de desvinculação | `QT_SIT_DESVINCULADO / QT_MAT × 100` |
| ind12 | Total de estudantes | `sum(QT_MAT)` |
| ind13 | Total de ingressantes | `sum(QT_ING)` |
| ind14 | Total de concluintes | `sum(QT_CONC)` |
| ind27 | Taxa de concluintes | `QT_CONC / QT_MAT × 100` |

### Visualizações

#### 4.1 Funil formativo (SVG interativo)
- **O que mostra:** fluxo Ingressantes → Estudantes → Concluintes como triângulos empilhados
- **Dados:**
  - Ingressantes: `sum(QT_ING)` — Base Cursos INEP
  - Estudantes: `sum(QT_MAT)` — Base Cursos INEP
  - Concluintes: `sum(QT_CONC)` — Base Cursos INEP
- **Taxas exibidas:** % permanência (estudantes/ingressantes) e % conclusão (`completion`)
- A largura de cada triângulo é proporcional ao volume relativo

#### 4.2 Gráfico de barras: Desvinculação discente
- **O que mostra:** `dropout` por IEES (taxa de desvinculação)
- **Dado:** `QT_SIT_DESVINCULADO / QT_MAT × 100`
- Valores mais altos indicam maior evasão

#### 4.3 Gráfico de barras: Taxa de concluintes
- **O que mostra:** `completion` por IEES
- **Dado:** `QT_CONC / QT_MAT × 100`

#### 4.4 Gráfico de barras: Custo por concluinte
- **O que mostra:** eficiência orçamentária por formado
- **Cálculo:** `budget × 1.000.000 / graduates`
- **Fonte orçamento:** Base SELO (liquidado)

---

## Aba 5 — Qualidade, Pesquisa e Pós-Graduação

**Pergunta orientadora:** A pesquisa e a pós-graduação estão avançando?

### Indicadores

| Código | Nome | Fórmula/Fonte |
|--------|------|---------------|
| ind6 | Proporção de docentes com doutorado | `Proporção de docentes com doutorado × 100` (Base IES INEP) |
| ind60 | Captação de recursos CNPq | Soma por IES/ano (Base CNPq Brasil, R$ mi) |
| ind61 | Vínculos de fomento CNPq | `CNPQ_DATA[sigla][year].vinculos` |
| ind62 | Conceito médio CAPES | Média de `CD_CONCEITO_CURSO` (Base CAPES) |
| ind66 | Programas CAPES 5-7 | Contagem de programas com conceito ≥ 5 |

### Visualizações

#### 5.1 Score cards (3 cards)

| Card | Dado | Cálculo |
|------|------|---------|
| Qualificação docente | % doutores | Média ponderada de `doctors` |
| Pesquisa e CNPq | R$ mi captados | Soma de `cnpq` no recorte |
| Pós-graduação CAPES | Conceito médio | Média de `capes` |

#### 5.2 Gráfico de barras: Docentes com doutorado
- **Dado:** `doctors` = `Proporção de docentes com doutorado × 100`
- **Fonte:** Base IES - Brasil.xlsx / coluna "Proporção de docentes com doutorado"
- **Escopo:** 22 IES (dado real de Base INEP)

#### 5.3 Gráfico de barras: Captação CNPq por estudante
- **Cálculo:** `cnpq × 1.000.000 / students` (R$ por estudante)
- **Fonte CNPq:** Base CNPq - Brasil.xlsx para os 7 PR (match por nome)
- **Nota:** UNICENTRO e UNESPAR podem ter `cnpq = null` (sem correspondência no arquivo)
- IES nacionais: `cnpq = null` no JSON pré-processado

#### 5.4 Tabela: Qualidade acadêmica, pós-graduação e pesquisa (colapsável)

Colunas: IEES | Programas PG | CAPES médio | CAPES 5-6-7 | Doutores | CNPq

**Dados CAPES:**
- `pg` = número de programas de pós-graduação distintos (`NM_PROGRAMA_IES` distintos)
- `pgTop` = programas com `CD_CONCEITO_CURSO ≥ 5`
- `capes` = média dos conceitos, ou coluna pré-calculada "Conceito médio dos programas de pós-graduação"
- Fonte: Base CAPES- Pós-Graduação - Brasil.xlsx / sheet `Base_Cursos`

---

## Aba 6 — Corpo Docente e Capacidade Operacional

**Pergunta orientadora:** O quadro docente está sendo utilizado plenamente?

### Indicadores

| Código | Nome | Fonte |
|--------|------|-------|
| ind71 | Taxa de ocupação do quadro docente | `facultyOcc` (Clusterização / Estrutura docente PR) |
| ind72 | TIDE estimado | `(facultyOcc + doctors) / 2` (proxy) |
| ind73 | Taxa de utilização da CRES | `cres` (Clusterização, ×100) |
| – | Despesa pessoal | `personnel` (SELO ou Clusterização global) |

### Visualizações

#### 6.1 Gráfico de barras: Taxa de ocupação do quadro docente
- **Dado:** `facultyOcc`
- **Fonte:** Base de dados para clusterização.xlsx / sheet `Estrutura docente PR`
- **Coluna:** "Taxa de ocupação do quadro docente" (decimal → ×100)
- **Escopo:** apenas 7 IEES-PR. No escopo Brasil, alerta informativo é exibido.

#### 6.2 Gráfico de barras: Utilização da CRES
- **Dado:** `cres`
- **Fonte:** Base de dados para clusterização.xlsx / "Taxa de utilização da CRES"
- **Transformação:** `round(float(valor) × 100, 2)` — pode ultrapassar 100% (ex: UNIOESTE = 121.98%)
- **Interpretação:** acima de 100% indica utilização além da capacidade autorizada

#### 6.3 Tabela: Quadro docente, TIDE e capacidade operacional (colapsável)

Colunas: IEES | Ocupação docente | TIDE estimado | CRES | Despesa pessoal | Estudantes/docente

**Nota sobre TIDE:** O TIDE (Taxa de Incremento de Dedicação Exclusiva) é estimado como proxy `(facultyOcc + doctors) / 2`. O dado real requer a Base Docentes PR que ainda não está integrada ao cálculo desta tabela.

**Nota sobre `personnel`:** Atualmente o pipeline extrai o valor global 70.34% da Clusterização (Dinâmica orçamentária PR). O valor per-IES (diferenciado por IES) dependeria da coluna "Participação de Pessoal e Encargos no Total da Despesa" da Base SELO com o nome exato correspondente.

---

## Aba 7 — Inserção Profissional

**Pergunta orientadora:** Os egressos estão sendo absorvidos pelo mercado?

### Indicadores

| Código | Nome | Fonte |
|--------|------|-------|
| ind37 | Taxa de inserção no PR | `employment` (CBO2/RAIS) |
| ind38 | Aderência CBO2 | `employment − 5` (estimativa proxy) |
| ind40 | Salário médio egressos | `salary` (CBO2/RAIS) |

### Dados: CBO2/RAIS

- **Fonte:** CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx / sheet `Análise Quantitativa (BI e Cons`
- **Coorte principal:** egressos 2021 encontrados na RAIS 2024
- **Coorte fallback:** egressos 2020 encontrados na RAIS 2023
- **`employment`:** `enc_PR_2024 / egressos_2021 × 100`
- **`salary`:** salário médio direto da coluna (R$)
- **Escopo:** apenas 7 IEES-PR. IES nacionais têm `employment = null` no JSON.

### Visualizações

#### 7.1 Score cards (3 cards)

| Card | Dado | Cálculo |
|------|------|---------|
| Inserção no Paraná | % egressos empregados | Média ponderada de `employment` |
| Aderência CBO2 | % aderentes à área de formação | `employment − 5` (proxy) |
| Média salarial | R$ | Média de `salary` |

#### 7.2 Gráfico de barras: Inserção profissional no Paraná
- Barras de `employment` por IEES, ordenadas descendente

#### 7.3 Gráfico de barras: Média salarial dos egressos
- Barras de `salary` por IEES (R$)

#### 7.4 Tabela: Inserção profissional, território e aderência (colapsável)

Colunas: IEES | Paraná | Região Sul | Cidade-sede | Aderência CBO2 | Dispersão territorial

**Nota:** "Região Sul" = `employment + 5` e "Cidade-sede" = `max(25, employment − 34)` são aproximações; não derivam de dados reais desagregados por região. Representam estimativas de distribuição relativa.

---

## Aba 8 — Orçamento, Desempenho e Eficiência Relativa

**Pergunta orientadora:** Orçamento maior está associado a melhor desempenho acadêmico?

### Indicadores

| Nome | Dado | Fonte |
|------|------|-------|
| Orçamento liquidado | `budget` (R$ mi) | Base SELO PR |
| Execução orçamentária | `execution` (%) | Clusterização / Dinâmica orçamentária PR |
| Taxa de liquidação | `liquidation` (%) | Clusterização / Dinâmica orçamentária PR |
| Participação pessoal | `personnel` (%) | Base SELO PR (ou global 70.34%) |
| Suplementação | `supplementation` (%) | Dados de Suplementação das Universidades PR |
| Custo por estudante | `budget×1M / students` | Calculado |
| Custo por concluinte | `budget×1M / graduates` | Calculado |
| Custo por vaga ocupada | `budget×1M / (vacancies×occupancy/100)` | Calculado |
| Custo por egresso inserido | `budget×1M / (graduates×employment/100)` | Calculado |

### Visualizações

#### 8.1 Matriz de Eficiência Relativa (gráfico principal)
- **O que mostra:** gráfico de dispersão com IEES plotadas por resultado (eixo Y) e esforço (eixo X), ambos relativizados à média do grupo (= 100)
- **Tamanho do ponto:** proporcional ao `budget` (orçamento liquidado)
- **Cores:**
  - Verde (`high`): alto resultado + baixo esforço (ótimo)
  - Amarelo (`mid`): um dos dois acima da média
  - Vermelho (`low`): baixo resultado + alto esforço (atenção)
- **Tooltip:** ao passar o mouse, exibe nome, resultado relativo e esforço relativo
- **Seleção de IEES:** pontos da IES selecionada no filtro são destacados

#### 8.2 Legenda da classificação
- Contagem de IES por quadrante no recorte ativo

#### 8.3 Insights automáticos
Quatro sinalizações calculadas em tempo real:
1. **Resultado acima e esforço abaixo:** IES eficientes — candidatas a boas práticas
2. **Alto esforço e resultado abaixo:** IES que merecem investigação sobre uso de recursos
3. **Baixa execução e ociosidade de CRES:** `execution < 91% AND cres < 75%`
4. **Alta qualificação e menor captação CNPq:** `doctors > 84% AND cnpq_per_student < média`

#### 8.4 Tabela: Estrutura de gastos e execução orçamentária (colapsável)

Colunas: IEES | Orçamento | Execução | Liquidação | Pessoal | Suplementação

---

## Painel Lateral (sempre visível)

### Agrupamento dinâmico
- Título e critérios do agrupamento ativo (V1–V8)
- Lista de IES por grupo com o valor do indicador de referência

### Grupos do agrupamento ativo
- Cards para cada grupo com IES-membro e valor no indicador da variável

### Leitura institucional
- Se uma IES estiver selecionada: exibe resultado relativo, esforço relativo e classificação descritiva
- Se nenhuma selecionada: nota analítica contextual da aba ativa

### Alertas do sistema
Alertas automáticos contextuais por aba:

| Aba | Condições de alerta |
|-----|---------------------|
| Todas | Nenhuma IES no recorte (erro) |
| Todas | Ano 2020 ou 2021 selecionado (aviso pandemia) |
| Corpo Docente | Escopo Brasil ativo (dados LGU indisponíveis) |

---

## Originação dos Dados por Indicador

| Indicador | Campo no JS | Fonte primária | Escopo |
|-----------|-------------|----------------|--------|
| Matrículas | `students` | Base Cursos - Brasil.xlsx / `QT_MAT` | 22 IES |
| Ingressantes | `entrants` | Base Cursos - Brasil.xlsx / `QT_ING` | 22 IES |
| Concluintes | `graduates` | Base Cursos - Brasil.xlsx / `QT_CONC` | 22 IES |
| Vagas | `vacancies` | Base Cursos - Brasil.xlsx / `QT_VG_TOTAL` | 22 IES |
| Cursos | `courses` | Base Cursos - Brasil.xlsx / `QT_CURSO` | 22 IES |
| Ocupação | `occupancy` | Calculado: `QT_ING / QT_VG_TOTAL × 100` | 22 IES |
| Evasão | `dropout` | Calculado: `QT_SIT_DESVINCULADO / QT_MAT × 100` | 22 IES |
| Conclusão | `completion` | Calculado: `QT_CONC / QT_MAT × 100` | 22 IES |
| Doutores | `doctors` | Base IES - Brasil.xlsx / "Proporção de docentes com doutorado" × 100 | 22 IES |
| CNPq | `cnpq` | Base CNPq - Brasil.xlsx / soma por IES (R$ mi) | 7 PR (match por nome) |
| CAPES | `capes` | Base CAPES / conceito médio por IES | 22 IES |
| Programas PG | `pg` | Base CAPES / `NM_PROGRAMA_IES` distintos | 22 IES |
| Programas top | `pgTop` | Base CAPES / `CD_CONCEITO_CURSO ≥ 5` | 22 IES |
| Orçamento | `budget` | Base SELO PR / `sum(Liquidado)` (R$ mi) | 7 PR |
| Execução | `execution` | Clusterização / "Taxa de Execução Orçamentária" | 7 PR |
| Liquidação | `liquidation` | Clusterização / "Taxa de Liquidação" | 7 PR |
| Pessoal | `personnel` | Clusterização / "Participação de Pessoal" (global 70.34%) | 7 PR |
| Suplementação | `supplementation` | Dados de Suplementação / `col[3]` × 100 | 7 PR |
| Inserção | `employment` | CBO2/RAIS / `enc_PR / egressos × 100` | 7 PR |
| Salário | `salary` | CBO2/RAIS / média salarial egressos | 7 PR |
| Ocupação docente | `facultyOcc` | Clusterização / "Taxa de ocupação do quadro docente" × 100 | 7 PR |
| CRES | `cres` | Clusterização / "Taxa de utilização da CRES" × 100 | 7 PR |
| Território | `territory` | Estático no `const raw` (dispersão estimada) | 7 PR |

---

## Dados Estimados vs. Dados Reais

| Dado | Status | Observação |
|------|--------|------------|
| students, entrants, graduates, courses, vacancies, occupancy, dropout, completion (7 PR) | **Real** (INEP 2024) | Base Cursos Brasil |
| students, entrants, graduates, courses, vacancies, occupancy, dropout, completion (15 BR) | **Real** (INEP 2024) | Base Cursos Brasil |
| doctors (22 IES) | **Real** (INEP) | Base IES Brasil |
| cnpq (5 das 7 PR) | **Real** | Base CNPq Brasil (match por nome) |
| cnpq (UNICENTRO, UNESPAR) | **Null** | Sem correspondência no arquivo |
| cnpq (15 IES nacionais) | **Null** | Não processado |
| capes, pg, pgTop (22 IES) | **Real** | Base CAPES Brasil |
| budget, execution, liquidation (7 PR) | **Real** | Base SELO + Clusterização |
| personnel (7 PR) | **Parcialmente real** | Valor global 70.34% (Clusterização) — não diferenciado por IES |
| supplementation (7 PR) | **Real** | Dados de Suplementação PR |
| employment, salary (7 PR) | **Real** | CBO2/RAIS 2024 |
| facultyOcc, cres (7 PR) | **Real** | Clusterização / Estrutura docente PR |
| budget, execution, employment... (15 BR) | **Estimado** | Benchmarks estáticos em `const rawBrasil` |
| territory (7 PR) | **Estimado** | Índice estático no `const raw` |
| Média Brasil nos cards de comparação | **Referência** | Benchmarks INEP/CAPES 2024, objeto `brazil` em painel.js |
