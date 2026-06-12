/* ==========================================================================
   ABA 1 — Panorama Executivo
   Redefine as funções desta aba carregando-as após painel.js.
   Brasil scope (overviewWithoutBrasilGroups + renderKpisWithoutBrasilClusterViews)
   já está fundido diretamente nestas funções — sem re-execução de chains.
   ========================================================================== */

// ── Universo para métricas do painel de acesso ───────────────────────────────

function overviewMetricUniverseRows() {
  try {
    const f = typeof filters === "function" ? filters() : { year: "2024", scope: state.scope };
    const source = f.scope === "Brasil" ? [...universities, ...universitiesBrasil] : universities;
    return source.map(u => byYear(u, f.year || "2024"));
  } catch (err) {
    return scopeUniverse(state.scope);
  }
}

function overviewMetricUniverseTotal(getter) {
  return Math.max(sum(overviewMetricUniverseRows(), u => Number(getter(u)) || 0), 1);
}

function overviewMetricMunicipalityTotal(u, getter) {
  const rows = overviewMetricUniverseRows().filter(row => row.municipality === u.municipality);
  return sum(rows, row => Number(getter(row)) || 0);
}

// ── Sistema de métricas do seletor do panorama ───────────────────────────────
// overviewMetricPercentCodes e overviewMetricDecimalCodes são const em painel.js
// — usados como globals, não re-declarados aqui.

function overviewMetricValue(getter) {
  return u => {
    const value = Number(getter ? getter(u) : 0);
    return Number.isFinite(value) ? value : 0;
  };
}

function overviewMetricFormat(code) {
  if (code === "IND-40") return formatCurrency;
  if (code === "IND-60") return formatCurrencyMillions;
  if (overviewMetricPercentCodes.has(code)) return formatPercent;
  if (overviewMetricDecimalCodes.has(code)) return v => Number(v || 0).toFixed(1).replace(".", ",");
  return formatNumber;
}

function overviewMetricOption(key, code, label) {
  const getter = IND_FIELD_MAP[key];
  return { label, code, get: overviewMetricValue(getter), fmt: overviewMetricFormat(code) };
}

var overviewMetricOptions = Object.fromEntries([
  ["ind1", "IND-1", "Proporção de ocupação de vagas no Ensino Superior Público Estadual"],
  ["students", "IND-2", "Estudantes"],
  ["ind3", "IND-3", "Taxa de ocupação de vagas iniciais"],
  ["ind4", "IND-4", "Proporção de ingressantes oriundos da escola pública"],
  ["ind5", "IND-5", "Taxa anual de desvinculação discente"],
  ["ind6", "IND-6", "Proporção de docentes com doutorado"],
  ["ind7", "IND-7", "Proporção de alunos em mobilidade acadêmica no ano"],
  ["ind8", "IND-8", "Proporção de docentes estrangeiros"],
  ["ind9", "IND-9", "Acesso ao Portal CAPES pela biblioteca da universidade"],
  ["courses", "IND-10", "Cursos"],
  ["vacancies", "IND-11", "Vagas"],
  ["ind12", "IND-12", "Total de estudantes"],
  ["ind13", "IND-13", "Total de estudantes ingressantes"],
  ["graduates", "IND-14", "Concluintes"],
  ["ind15", "IND-15", "Média de vagas por curso"],
  ["ind16", "IND-16", "Participação da IEES no total de vagas"],
  ["ind17", "IND-17", "Participação do município no total de vagas"],
  ["ind20", "IND-20", "Participação do município no total de cursos"],
  ["ind21", "IND-21", "Média de estudantes por curso"],
  ["ind23", "IND-23", "Relação estudantes por vaga"],
  ["ind24", "IND-24", "Taxa de ocupação das vagas de ingresso"],
  ["ind25", "IND-25", "Vagas de ingresso não ocupadas"],
  ["ind26", "IND-26", "Taxa de ocupação das vagas"],
  ["ind27", "IND-27", "Taxa de concluintes"],
  ["ind28", "IND-28", "Vagas não ocupadas"],
  ["ind29", "IND-29", "Taxa de ocupação por grau"],
  ["ind30", "IND-30", "Taxa de ocupação - Diurno"],
  ["ind31", "IND-31", "Taxa de ocupação - Noturno"],
  ["ind32", "IND-32", "Taxa de ocupação por município"],
  ["ind33", "IND-33", "Egressos IEES"],
  ["ind34", "IND-34", "Egressos inseridos no mercado de trabalho formal (Região Sul)"],
  ["ind35", "IND-35", "Taxa de inserção de egressos (Região Sul)"],
  ["ind36", "IND-36", "Egressos inseridos no mercado de trabalho formal (Paraná)"],
  ["ind37", "IND-37", "Taxa de inserção de egressos no mercado de trabalho no Paraná"],
  ["ind38", "IND-38", "Egressos aderentes ao filtro CBO2 inseridos no mercado de trabalho (Paraná)"],
  ["ind39", "IND-39", "Percentual de egressos empregados no Paraná em ocupações aderentes ao CBO2"],
  ["ind40", "IND-40", "Média salarial dos egressos inseridos no mercado de trabalho do Paraná aderentes ao CBO2"],
  ["ind41", "IND-41", "Egressos inseridos no mercado formal na cidade-sede da IES"],
  ["ind42", "IND-42", "Taxa de egressos empregados formalmente na cidade-sede da IES"],
  ["ind43", "IND-43", "Total de códigos de vagas docentes"],
  ["ind44", "IND-44", "Vagas docentes disponíveis para ocupação"],
  ["ind45", "IND-45", "Vagas docentes efetivas ocupadas"],
  ["ind46", "IND-46", "Taxa de ocupação do quadro docente"],
  ["ind47", "IND-47", "Taxa de utilização das vagas docentes disponíveis"],
  ["ind48", "IND-48", "Vagas docentes condicionadas à autorização governamental"],
  ["ind49", "IND-49", "Percentual de vagas condicionadas à autorização governamental"],
  ["ind50", "IND-50", "Quantidade de TIDE atribuído ao corpo docente"],
  ["ind51", "IND-51", "Participação do TIDE no quadro docente disponível"],
  ["ind52", "IND-52", "Percentual de TIDE não atribuído"],
  ["ind53", "IND-53", "Carga horária média de docentes efetivos"],
  ["ind54", "IND-54", "Carga horária CRES autorizada"],
  ["ind55", "IND-55", "Carga horária CRES utilizada"],
  ["ind56", "IND-56", "Taxa de utilização da CRES"],
  ["ind57", "IND-57", "Saldo de carga horária CRES não utilizada"],
  ["ind58", "IND-58", "Taxa de ociosidade da CRES"],
  ["ind59", "IND-59", "Participação da CRES no esforço docente total"],
  ["ind60", "IND-60", "Captação de recursos do CNPq"],
  ["ind61", "IND-61", "Número de vínculos de fomento do CNPq"],
  ["ind62", "IND-62", "Conceito dos programas de pós-graduação no ano de referência"],
  ["ind63", "IND-63", "Proporção de docentes permanentes da pós-graduação"],
  ["ind64", "IND-64", "Proporção de docentes estrangeiros da pós-graduação"],
  ["ind65", "IND-65", "Proporção de docentes da pós-graduação com bolsa de produtividade"],
  ["ind66", "IND-66", "Proporção de programas de pós-graduação com conceito CAPES 5, 6 e 7 no ano de referência"],
  ["ind67", "IND-67", "Taxa de Ocupação de Vagas por Tipo de Curso"],
  ["ind68", "IND-68", "Índice de Especialização da Oferta Acadêmica"],
  ["ind69", "IND-69", "Proporção de Cursos de Licenciatura na Oferta"],
  ["ind70", "IND-70", "Indicador sem cadastro na relação oficial de indicadores"],
  ["ind71", "IND-71", "Egressos inseridos no mercado formal por município de vínculo"],
  ["ind72", "IND-72", "Participação do município na inserção formal dos egressos"],
  ["ind73", "IND-73", "Egressos inseridos no mercado formal por curso padronizado"],
  ["ind74", "IND-74", "Participação do curso na inserção formal dos egressos"],
  ["ind75", "IND-75", "Egressos inseridos no mercado formal por tipo de curso"],
  ["ind76", "IND-76", "Diversidade ocupacional dos egressos por curso"],
  ["ind77", "IND-77", "Distribuição dos egressos por grande grupo ocupacional CBO2"],
  ["ind78", "IND-78", "Participação dos grandes grupos ocupacionais CBO2 na inserção dos egressos"],
  ["ind79", "IND-79", "Municípios de destino profissional dos egressos por curso"],
  ["ind80", "IND-80", "Índice de dispersão territorial dos egressos por curso"],
  ["ind81", "IND-81", "Taxa de Execução Orçamentária (Empenho)"],
  ["ind82", "IND-82", "Taxa de Liquidação"],
  ["ind83", "IND-83", "Taxa de Pagamento sobre Liquidado"],
  ["ind84", "IND-84", "Grau de Contingenciamento Orçamentário"],
  ["ind85", "IND-85", "Variação da Dotação Orçamentária (Dotação Inicial vs. Atualizada)"],
  ["ind86", "IND-86", "Participação de Pessoal e Encargos no Total da Despesa"],
  ["ind87", "IND-87", "Participação de Outras Despesas Correntes no Total"],
  ["ind88", "IND-88", "Proporção Despesas Correntes vs. Despesas de Capital"],
  ["ind89", "IND-89", "Participação de Recursos Livres (Tesouro Estadual) no Orçamento Total"],
  ["ind90", "IND-90", "Participação de Recursos Próprios no Orçamento Total"],
  ["ind91", "IND-91", "Participação de Recursos de Transferências (Federal/Convênios)"],
  ["ind92", "IND-92", "Participação de Investimentos em Obras e Instalações no Orçamento Total"],
  ["ind93", "IND-93", "Participação de Investimentos em Equipamentos e Material Permanente no Orçamento Total"],
  ["ind94", "IND-94", "Percentual de variação da dotação orçamentária em relação à LOA inicial"],
  ["ind95", "IND-95", "Percentual de execução de liquidação do Orçamento Inicial"],
  ["ind96", "IND-96", "Percentual de execução de liquidação do Orçamento Disponível"],
  ["ind97", "IND-97", "Percentual de execução de liquidação do Orçamento Atualizado"]
].map(([key, code, label]) => [key, overviewMetricOption(key, code, label)]));

// ── KPI cards do panorama ────────────────────────────────────────────────────

var overviewKpiDefinitions = [
  { code: "IND-2",  title: "Matrículas de graduação",              source: "INEP",        formula: "Somatório QT_MAT",                             polarity: "↑", mode: "pct", get: a => a.students,           fmt: formatNumber },
  { code: "IND-13", title: "Estudantes ingressantes",              source: "INEP",        formula: "Somatório QT_ING",                             polarity: "↑", mode: "pct", get: a => a.entrants,            fmt: formatNumber },
  { code: "IND-14", title: "Estudantes concluintes",               source: "INEP",        formula: "Somatório QT_CONC",                            polarity: "↑", mode: "pct", get: a => a.graduates,           fmt: formatNumber },
  { code: "IND-10", title: "Total de cursos",                      source: "INEP",        formula: "Contagem de cursos",                           polarity: "↑", mode: "pct", get: a => a.courses,             fmt: formatNumber },
  { code: "IND-11", title: "Total de vagas",                       source: "INEP",        formula: "Somatório QT_VG_TOTAL",                        polarity: "↑", mode: "pct", get: a => a.vacancies,           fmt: formatNumber },
  { code: "IND-26", title: "Taxa de ocupação das vagas",           source: "INEP",        formula: "QT_MAT / QT_VG_TOTAL × 100",                  polarity: "↑", mode: "pp",  benchmark: () => formatPercent(brazil.result.occupancy),  get: a => a.occupancy,          fmt: formatPercent },
  { code: "IND-24", title: "Taxa de ocupação das vagas de ingresso", source: "INEP",      formula: "QT_ING / QT_VG_NOVA × 100",                   polarity: "↑", mode: "pp",  get: a => a.ingressOccupancy,    fmt: formatPercent },
  { code: "IND-5",  title: "Taxa anual de desvinculação discente", source: "INEP",        formula: "QT_DESVINCULADO / QT_MAT × 100",               polarity: "↓", mode: "pp",  benchmark: () => formatPercent(100 - brazil.result.permanence), get: a => a.dropout, fmt: formatPercent },
  { code: "IND-27", title: "Taxa de concluintes",                  source: "INEP",        formula: "QT_CONC / QT_VG_NOVA × 100",                  polarity: "↑", mode: "pp",  benchmark: () => formatPercent(brazil.result.completion),  get: a => a.completionByVacancy, fmt: formatPercent },
  { code: "IND-6",  title: "Docentes com doutorado",               source: "INEP",        formula: "QT_DOC_EX_DOUT / QT_DOC_EXE × 100",           polarity: "↑", mode: "pp",  benchmark: () => formatPercent(brazil.result.doctorate),   get: a => a.doctors,            fmt: formatPercent },
  { code: "IND-37", title: "Inserção de egressos no Paraná",       source: "SETI / RAIS", formula: "Egressos PR / Total egressos × 100",           polarity: "↑", mode: "pp",  benchmark: () => formatPercent(brazil.result.employment),  get: a => a.employment,         fmt: formatPercent },
  { code: "IND-40", title: "Média salarial dos egressos",          source: "SETI / RAIS", formula: "Média salarial PR + CBO2",                     polarity: "↑", mode: "pct", benchmark: () => formatCurrency(brazil.result.salary),     get: a => a.salary,             fmt: formatCurrency },
  { code: "IND-60", title: "Captação de recursos do CNPq",         source: "CNPq",        formula: "Bolsas, auxílios e projetos",                  polarity: "↑", mode: "pct", get: a => a.cnpq,               fmt: formatCurrencyMillions },
  { code: "IND-81", title: "Taxa de execução orçamentária",        source: "Relatório 8050", formula: "Empenhado / Orçamento atualizado × 100",    polarity: "↑", mode: "pp",  get: a => a.execution,           fmt: formatPercent }
];

// ── Dataset e agregação ──────────────────────────────────────────────────────

function hasClusterFilter(c) {
  return c.f.groupLevel && c.f.groupLevel !== "all";
}

function overviewActiveGroup(c) {
  if (state.activeTab === "overview") return getLocalFilter("overviewClusterBars");
  return hasClusterFilter(c) ? c.f.groupLevel : "all";
}

function overviewDataSet(c) {
  const activeGroup = overviewActiveGroup(c);
  let source = c.base.length ? c.base : c.all;
  if (Array.isArray(c.f.university) && c.f.university.length > 0) {
    const filtered = source.filter(u => c.f.university.includes(u.id));
    if (filtered.length) source = filtered;
  }
  let groupFilter = activeGroup;
  if (groupFilter === "all" && c.f.groupLevel && c.f.groupLevel !== "all") {
    groupFilter = c.f.groupLevel;
  }
  return groupFilter !== "all" ? source.filter(u => u.groups[c.f.groupBy] === groupFilter) : source;
}

function overviewPreviousData(ids, year) {
  const previousYear = String(Math.max(2020, Number(year) - 1));
  const wanted = new Set(ids);
  return [...universities, ...universitiesBrasil].map(u => byYear(u, previousYear)).filter(u => wanted.has(u.id));
}

function overviewAgg(d) {
  const base = agg(d);
  const vacancyBase = Math.max(1, base.vacancies);
  return {
    ...base,
    courses: sum(d, u => u.courses),
    dropout: wavg(d, u => u.dropout, u => u.students),
    ingressOccupancy: (() => { const vn = d.some(u => u.vacanciesNova != null) ? Math.max(1, sum(d, u => u.vacanciesNova != null ? u.vacanciesNova : 0)) : vacancyBase; return sum(d, u => u.entrants) / vn * 100; })(),
    completionByVacancy: sum(d, u => u.graduates) / vacancyBase * 100,
    salary: wavg(d, u => panelEmploymentSalary(u), u => u.graduates),
    facultyOcc: wavg(d, u => u.facultyOcc, u => u.students)
  };
}

function overviewDelta(current, previous, mode, polarity) {
  if (!previous) return { label: "sem base", cls: "neutral" };
  const raw = mode === "pp" ? current - previous : (current - previous) / Math.max(Math.abs(previous), 1) * 100;
  const good = polarity === "↓" ? raw < 0 : raw >= 0;
  const sign = raw > 0 ? "+" : "";
  const suffix = mode === "pp" ? " p.p." : "%";
  return { label: `${sign}${raw.toFixed(1).replace(".", ",")}${suffix}`, cls: good ? "positive" : "warning" };
}

function previousYearRows(rows, previousYear) {
  const sourceById = new Map([...universities, ...universitiesBrasil].map(u => [u.id, u]));
  return rows.map(u => sourceById.get(u.id)).filter(Boolean).map(u => byYear(u, String(previousYear)));
}

function normalizeKpiPolarity(polarity, label = "") {
  const text = `${polarity || ""} ${label || ""}`.toLowerCase();
  if (text.includes("↓") || text.includes("menor") || text.includes("custo") || text.includes("desvincula") || text.includes("evas") || text.includes("contingenc") || text.includes("ocios")) return "lower";
  if (text.includes("perfil") || text.includes("classifica")) return "neutral";
  return "higher";
}

function kpiDeltaForValue(current, previous, polarity, mode, previousYear, label = "") {
  const normalized = normalizeKpiPolarity(polarity, label);
  const currentValue = Number(current);
  const previousValue = previous == null ? null : Number(previous);
  if (!Number.isFinite(currentValue) || (previousValue != null && !Number.isFinite(previousValue))) return kpiDeltaHtml(null, null, "neutral", "pp", previousYear);
  return kpiDeltaHtml(currentValue, previousValue, normalized, "pp", previousYear);
}

// ── KPI grid rendering — MERGED: PR + efficiency-Brasil (8985-8996) ──────────

function renderKpis(c) {
  if (isBrasilContext(c) && state.activeTab === "efficiency") {
    el.kpiGrid.classList.remove("overview-kpi-grid", "efficiency-kpi-grid");
    el.kpiGrid.style.display = "";
    el.kpiGrid.innerHTML = `
      <article class="kpi-card"><div class="kpi-head"><div class="kpi-label">${nationalReferenceLabel()}</div><div class="kpi-icon" aria-hidden="true">BR</div></div><div class="kpi-value">Comparativo nacional</div></article>
      <article class="kpi-card"><div class="kpi-head"><div class="kpi-label">Regra da aba</div><div class="kpi-icon" aria-hidden="true">PR</div></div><div class="kpi-value">Paraná</div></article>`;
    return;
  }
  if (state.activeTab !== "overview") {
    el.kpiGrid.innerHTML = "";
    el.kpiGrid.classList.remove("overview-kpi-grid");
    el.kpiGrid.style.display = "none";
    return;
  }
  el.kpiGrid.classList.add("overview-kpi-grid");
  const data = overviewDataSet(c);
  const current = overviewAgg(data);
  el.kpiGrid.style.display = "";
  el.kpiGrid.innerHTML = overviewKpiDefinitions.map(def => {
    const value = def.get(current);
    const brTag = "";
    return `<article class="kpi-card overview-kpi">
      <div class="kpi-head">
        <div class="kpi-label">${def.title}</div>
        <div class="kpi-icon" aria-hidden="true">${kpiIcon(def.title)}</div>
      </div>
      <div class="kpi-value">${def.fmt(value)}</div>
      ${brTag}
    </article>`;
  }).join("");
}
window.renderKpis = renderKpis;

function renderDefaultKpis(c) {
  el.kpiGrid.classList.remove("overview-kpi-grid");
  const data = c.display.length ? c.display : c.ref;
  const ref = c.ref.length ? c.ref : c.all;
  const a = agg(data), ar = agg(ref), res = resultIndicators[c.f.result], eff = effortIndicators[c.f.effort], rows = matrixRows(ref, c.f), selectedRow = c.selected && rows.find(r => r.id === c.selected.id);
  const previousYear = Number(c.f.year) - 1;
  const hasPreviousYear = !!yearAdj[previousYear];
  const dataPrev = hasPreviousYear ? previousYearRows(data, previousYear) : [];
  const refPrev = hasPreviousYear ? previousYearRows(ref, previousYear) : [];
  const aPrev = dataPrev.length ? agg(dataPrev) : null;
  const arPrev = refPrev.length ? agg(refPrev) : null;
  const rowsPrev = refPrev.length ? matrixRows(refPrev, {...c.f, year:String(previousYear)}) : [];
  const selectedRowPrev = c.selected && rowsPrev.find(r => r.id === c.selected.id);
  const d = (curr, prev, polarity, mode, label) => kpiDeltaForValue(curr, prev, polarity, mode, previousYear, label);
  const cards = state.activeTab === "efficiency" ? [
    ["Orçamento liquidado do grupo", formatCurrencyMillions(ar.budget), `${ref.length} IEES no grupo`, "+6,8%"],
    ["Execução orçamentária média", formatPercent(ar.execution), "empenho sobre disponível", badge(ar.execution, 93, 90)],
    ["Taxa de liquidação", formatPercent(ar.liquidation), "liquidado sobre empenhado", badge(ar.liquidation, 91, 88)],
    [eff.label, eff.format(mean(ref, eff.get)), "média do grupo", "ref."],
    ["Resultado médio do grupo", res.format(mean(ref, res.get)), res.label, "grupo"],
    ["Resultado relativo", selectedRow ? `${selectedRow.resultRel.toFixed(1)}%` : `${mean(rows, r => r.resultRel).toFixed(1)}%`, "base grupo = 100", selectedRow ? selectedRow.resultLabel : "média"],
    ["Esforço relativo", selectedRow ? `${selectedRow.effortRel.toFixed(1)}%` : `${mean(rows, r => r.effortRel).toFixed(1)}%`, "base grupo = 100", selectedRow ? selectedRow.effortLabel : "média"],
    ["Quadrante oficial", selectedRow ? selectedRow.quadrant : summarize(rows), "planilha de estratificação", `${rows.length} pontos`]
  ] : [
    ["Total de estudantes", formatNumber(a.students), `${formatNumber(a.entrants)} ingressantes`, "+2,1%"],
    ["Taxa de ocupação das vagas", formatPercent(a.occupancy), `${formatNumber(a.vacancies)} vagas`, badge(a.occupancy, 88, 80)],
    ["Taxa de concluintes", formatPercent(a.completion), `${formatNumber(a.graduates)} concluintes`, badge(a.completion, 62, 56)],
    ["Docentes com doutorado", formatPercent(a.doctors), "proporção no corpo docente", badge(a.doctors, 86, 80)],
    ["Captação CNPq", formatCurrencyMillions(a.cnpq), "recursos captados", "+4,4%"],
    ["Inserção no Paraná", formatPercent(a.employment), "egressos no mercado formal", badge(a.employment, 72, 67)],
    ["Orçamento liquidado", formatCurrencyMillions(a.budget), "grupo selecionado", "+6,8%"],
    ["Execução orçamentária", formatPercent(a.execution), "média ponderada", badge(a.execution, 93, 90)]
  ];
  const deltaForCard = label => {
    const text = String(label).toLowerCase();
    if (text.includes("total de estudantes")) return d(a.students, aPrev?.students, "higher", "pct", label);
    if (text.includes("ocupa")) return d(a.occupancy, aPrev?.occupancy, "higher", "pp", label);
    if (text.includes("concluintes")) return d(a.completion, aPrev?.completion, "higher", "pp", label);
    if (text.includes("doutorado")) return d(a.doctors, aPrev?.doctors, "higher", "pp", label);
    if (text.includes("cnpq") || text.includes("capta")) return d(a.cnpq, aPrev?.cnpq, "higher", "pct", label);
    if (text.includes("inser")) return d(a.employment, aPrev?.employment, "higher", "pp", label);
    if (text.includes("execu")) return d(ar.execution, arPrev?.execution, "higher", "pp", label);
    if (text.includes("taxa") && text.includes("liquida")) return d(ar.liquidation, arPrev?.liquidation, "higher", "pp", label);
    if (text.includes("liquida")) return d(ar.budget, arPrev?.budget, "higher", "pct", label);
    if (text === String(eff.label).toLowerCase()) return d(mean(ref, eff.get), refPrev.length ? mean(refPrev, eff.get) : null, eff.label, text.includes("custo") ? "pct" : "pp", label);
    if (text.includes("resultado relativo")) return d(selectedRow ? selectedRow.resultRel : mean(rows, r => r.resultRel), selectedRowPrev ? selectedRowPrev.resultRel : rowsPrev.length ? mean(rowsPrev, r => r.resultRel) : null, "higher", "pp", label);
    if (text.includes("resultado")) return d(mean(ref, res.get), refPrev.length ? mean(refPrev, res.get) : null, "higher", "pp", label);
    if (text.includes("esfor")) return d(selectedRow ? selectedRow.effortRel : mean(rows, r => r.effortRel), selectedRowPrev ? selectedRowPrev.effortRel : rowsPrev.length ? mean(rowsPrev, r => r.effortRel) : null, "lower", "pp", label);
    return d(null, null, "neutral", "pp", label);
  };
  el.kpiGrid.innerHTML = cards.map(([label, value, meta, trend]) => {
    const cls = kpiClass(label, trend);
    const delta = deltaForCard(label);
    return `<article class="kpi-card ${cls}"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`;
  }).join("");
}

// ── Helpers tabela estrutural ────────────────────────────────────────────────

function renderMetricCell(value, maxValue) {
  const pct = maxValue > 0 ? Math.round(Math.min(value / maxValue * 100, 100)) : 0;
  return `<div class="metric-cell">
    <span class="metric-value">${formatNumber(value)}</span>
    <div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div>
  </div>`;
}

function renderGroupBadge(groupName, groupsList) {
  const idx = Array.isArray(groupsList) ? groupsList.indexOf(groupName) : -1;
  const cls = idx >= 0 && idx <= 4 ? `group-badge-${idx}` : "group-badge-4";
  return `<span class="group-badge ${cls}">${groupName || "—"}</span>`;
}

function renderStructuralInsight(allData, filteredData, groupLabel) {
  if (!filteredData.length) return "";
  const totalStudents = sum(allData, u => u.students) || 1;
  const totalGrad     = sum(allData, u => u.graduates) || 1;
  const fStudents     = sum(filteredData, u => u.students);
  const fGrad         = sum(filteredData, u => u.graduates);
  const maxVacU = filteredData.reduce((m, u) => u.vacancies > (m ? m.vacancies : 0) ? u : m, null);
  const maxStuU = filteredData.reduce((m, u) => u.students  > (m ? m.students  : 0) ? u : m, null);
  let text = "";
  if (groupLabel !== "all" && allData.length > filteredData.length) {
    const pctS = (fStudents / totalStudents * 100).toFixed(0);
    const pctG = (fGrad     / totalGrad     * 100).toFixed(0);
    text = `As instituições do grupo <strong>${groupLabel}</strong> concentram ${pctS}% dos estudantes e ${pctG}% dos concluintes do sistema.`;
    if (maxVacU && maxStuU && maxVacU.id !== maxStuU.id) {
      text += ` A maior oferta de vagas está em <strong>${maxVacU.sigla}</strong>, enquanto <strong>${maxStuU.sigla}</strong> apresenta o maior número de estudantes.`;
    } else if (maxStuU) {
      text += ` <strong>${maxStuU.sigla}</strong> concentra o maior número de estudantes no grupo.`;
    }
  } else {
    if (maxVacU && maxStuU && maxVacU.id !== maxStuU.id) {
      text = `<strong>${maxStuU.sigla}</strong> possui o maior número de estudantes no conjunto exibido, enquanto <strong>${maxVacU.sigla}</strong> concentra a maior oferta de vagas.`;
    } else if (maxStuU) {
      text = `<strong>${maxStuU.sigla}</strong> concentra o maior número de estudantes no conjunto exibido.`;
    } else {
      text = "Dados insuficientes para gerar leitura automática.";
    }
  }
  return `<div class="synth-insight-card">
    <p class="synth-insight-label">Leitura rápida</p>
    <p class="synth-insight-text">${text}</p>
  </div>`;
}

// ── overview(c) — MERGED: PR (4279-4432) + Brasil scope (8724-8758) ──────────

function overview(c) {
  if (isBrasilContext(c)) {
    const data = c.display.length ? c.display : c.ref;
    if (!data.length) return empty();
    const metricKey = overviewMetricOptions[state.overviewMetric] ? state.overviewMetric : "students";
    state.overviewMetric = metricKey;
    const metric = overviewMetricOptions[metricKey];
    const a = overviewAgg(data);
    return `<div class="overview-chart-shell">
    <article class="visual-card overview-bars-card">
      <div class="visual-card-header">
        <div>
          <h3>Gráfico por IEES</h3>
          <p class="card-subtitle">${metric.code} · ${nationalReferenceLabel()} como comparativo nacional.</p>
        </div>
        <label class="metric-selector">Métrica
          <select id="overviewMetricSelector">
            ${Object.entries(overviewMetricOptions).map(([key, opt]) => `<option value="${key}" ${key === metricKey ? "selected" : ""}>${opt.label}</option>`).join("")}
          </select>
        </label>
      </div>
      ${overviewClusterBars(c, metric)}
    </article>
  </div>
  <div class="score-grid mt-14">
    ${score("Ocupação das vagas", formatPercent(a.occupancy), "Média nacional", a.occupancy)}
    ${score("Desvinculação", formatPercent(a.dropout), "Média nacional", a.dropout)}
    ${score("Inserção PR", formatPercent(a.employment), "Comparativo nacional", a.employment)}
    ${score("Execução orçamentária", formatPercent(a.execution), "Comparativo nacional", a.execution)}
  </div>
  <div class="table-wrap mt-14">
    <h3>Síntese dos indicadores estruturais por IEES</h3>
    <p class="card-subtitle">Exibindo ${data.length} IEES no comparativo nacional</p>
    <table class="data-table"><thead><tr><th>IEES</th><th>Estudantes</th><th>Vagas</th><th>Cursos</th><th>Concluintes</th></tr></thead><tbody>${data.map(u => `<tr><td><strong>${u.sigla}</strong><br><span>${u.nome}</span></td><td>${formatNumber(u.students)}</td><td>${formatNumber(u.vacancies)}</td><td>${formatNumber(u.courses)}</td><td>${formatNumber(u.graduates)}</td></tr>`).join("")}</tbody></table>
  </div>`;
  }

  // ── Escopo PR ────────────────────────────────────────────────────────────────
  const data = overviewDataSet(c);
  if (!data.length) return empty();
  const metricKey = overviewMetricOptions[state.overviewMetric] ? state.overviewMetric : "students";
  state.overviewMetric = metricKey;
  const metric = overviewMetricOptions[metricKey];
  const a = overviewAgg(data);
  const activeOverviewGroup = overviewActiveGroup(c);
  const clusterActive = activeOverviewGroup !== "all";
  const synthGroup = activeOverviewGroup;
  const synthGroups = groupOptions[c.f.groupBy] || [];
  let synthData = synthGroup !== "all" ? data.filter(u => u.groups[c.f.groupBy] === synthGroup) : data;
  return `<div class="overview-chart-shell">
    <article class="visual-card overview-bars-card">
      <div class="visual-card-header">
        <div>
          <h3>Ranking de IEES por ${metric.label}</h3>
          <p class="card-subtitle">Comparação das IEES segundo ${metric.label.toLowerCase()} (${metric.code}). As barras mostram o valor de cada instituição e a linha laranja indica a média de referência do sistema${clusterActive ? " — cluster ativo: " + c.f.groupBy.toUpperCase() + " · " + activeOverviewGroup : ""}.</p>
        </div>
        <label class="metric-selector">
          <span class="metric-selector-label">Métrica analisada</span>
          <select id="overviewMetricSelector">
            ${Object.entries(overviewMetricOptions).map(([key, opt]) => `<option value="${key}" ${key === metricKey ? "selected" : ""}>${opt.label}</option>`).join("")}
          </select>
        </label>
      </div>
      ${(() => {
        const localGroup = getLocalFilter("overviewClusterBars");
        const groupLabel = activeOverviewGroup !== "all" ? activeOverviewGroup : "Todos os grupos";
        const groupByLabel = (groupMeta[c.f.groupBy]?.label || c.f.groupBy.toUpperCase()).replace(/^V\d+\s*[–-]\s*/, "");
        const chartData = data;
        const refVal = mean(chartData.length ? chartData : c.base, metric.get);
        const refLabel = clusterActive || localGroup !== "all" ? "Média do grupo" : "Média do sistema";
        const groupOptions_ = groupOptions[c.f.groupBy] || [];
        const chipsHtml = [
          `<button class="qchip${localGroup === "all" ? " qchip-active" : ""}" type="button" data-group="all">Todos (${c.base.length})</button>`,
          ...groupOptions_.map(g => {
            const cnt = c.base.filter(u => u.groups[c.f.groupBy] === g).length;
            if (!cnt) return "";
            return `<button class="qchip${localGroup === g ? " qchip-active" : ""}" type="button" data-group="${g.replace(/"/g,'&quot;')}">${g} (${cnt})</button>`;
          }).filter(Boolean),
          localGroup !== "all" ? `<button class="qchip qchip-clear" type="button" onclick="setLocalFilter('overviewClusterBars','all')" title="Remover filtro local">× Limpar</button>` : ""
        ].filter(Boolean).join("");
        const displayCount = chartData.length;
        const totalCount = c.base.length;
        const statusText = activeOverviewGroup !== "all"
          ? `Exibindo <strong>${displayCount}</strong> de ${totalCount} IEES · Grupo: <strong>${activeOverviewGroup}</strong>`
          : `Exibindo <strong>${displayCount}</strong> de ${totalCount} IEES`;
        const sorted4insight = [...chartData].sort((a, b) => metric.get(b) - metric.get(a));
        const top = sorted4insight[0], bot = sorted4insight[sorted4insight.length - 1];
        let insightText = "";
        if (top && bot && top.id !== bot.id) {
          insightText = `<strong>${top.sigla}</strong> lidera o ranking de ${metric.label.toLowerCase()}, com ${metric.fmt(metric.get(top))}, ficando acima da ${refLabel.toLowerCase()} de ${metric.fmt(refVal)}. <strong>${bot.sigla}</strong> apresenta o menor valor no conjunto exibido (${metric.fmt(metric.get(bot))}).`;
        } else if (top) {
          insightText = `<strong>${top.sigla}</strong> lidera o ranking de ${metric.label.toLowerCase()} com ${metric.fmt(metric.get(top))}, ${refLabel.toLowerCase()}: ${metric.fmt(refVal)}.`;
        }
        return `${insightText ? `<div class="chart-insight-card"><p class="chart-insight-label">Leitura rápida</p><p class="chart-insight-text">${insightText}</p></div>` : ""}<div class="chart-context-strip">
          <span class="chart-context-pill"><span class="chart-context-label">Métrica</span><span class="chart-context-value">${metric.label} (${metric.code})</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Escopo</span><span class="chart-context-value">${c.f.scope}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Agrupar por</span><span class="chart-context-value">${groupByLabel}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Grupo</span><span class="chart-context-value">${groupLabel}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">${refLabel}</span><span class="chart-context-reference">${metric.fmt(refVal)}</span></span>
        </div>
        <p class="chart-chips-label">Filtro por grupo</p>
        <div class="qchip-strip" data-chart-id="overviewClusterBars" aria-label="Filtrar por grupo" style="margin-bottom:6px">${chipsHtml}</div>
        <p class="chart-status-line">${statusText}</p>`;
      })()}
      ${overviewClusterBars(c, metric)}
    </article>
  </div>
  <div class="score-grid mt-14">
    ${score("Ocupação das vagas", formatPercent(a.occupancy), "IND-26", a.occupancy)}
    ${score("Desvinculação", formatPercent(a.dropout), "IND-5", a.dropout)}
    ${score("Inserção PR", formatPercent(a.employment), "IND-37", a.employment)}
    ${score("Execução orçamentária", formatPercent(a.execution), "IND-81", a.execution)}
  </div>
  ${(() => {
    const maxStudents  = Math.max(...data.map(u => u.students),  1);
    const maxVacancies = Math.max(...data.map(u => u.vacancies), 1);
    const maxCourses   = Math.max(...data.map(u => u.courses),   1);
    const maxGraduates = Math.max(...data.map(u => u.graduates), 1);
    const sortKey = state.synthSortKey || "students";
    const getVal  = u => ({ students: u.students, vacancies: u.vacancies, courses: u.courses, graduates: u.graduates, sigla: u.sigla, grupo: u.groups[c.f.groupBy] || "" })[sortKey] ?? u.students;
    const isNum   = ["students","vacancies","courses","graduates"].includes(sortKey);
    const sorted  = [...synthData].sort((a, b) => {
      const va = getVal(a), vb = getVal(b);
      return isNum ? vb - va : String(va).localeCompare(String(vb), "pt-BR");
    });
    const totStudents  = sum(synthData, u => u.students);
    const totVacancies = sum(synthData, u => u.vacancies);
    const totCourses   = sum(synthData, u => u.courses);
    const totGraduates = sum(synthData, u => u.graduates);
    const groupList = groupOptions[c.f.groupBy] || [];
    const tableCountSource = c.base.length ? c.base : c.all;
    const chipsHtml = [
      `<button class="rank-metric-btn${synthGroup === "all" ? " active" : ""}" type="button" onclick="setSynthTableGroup('all')">Todos (${tableCountSource.length})</button>`,
      ...groupList.map(g => {
        const cnt = tableCountSource.filter(u => u.groups[c.f.groupBy] === g).length;
        if (!cnt) return "";
        return `<button class="rank-metric-btn${synthGroup === g ? " active" : ""}" type="button" onclick="setSynthTableGroup('${g.replace(/'/g, "\\'")}')">${g} (${cnt})</button>`;
      }).filter(Boolean),
      synthGroup !== "all" ? `<button class="rank-metric-btn qchip-clear" type="button" onclick="setSynthTableGroup('all')" title="Remover filtro da tabela">× Limpar</button>` : ""
    ].filter(Boolean).join("");
    const totalCount = tableCountSource.length;
    const statusLabel = synthGroup !== "all"
      ? `Exibindo <strong>${synthData.length}</strong> de ${totalCount} IEES · Grupo: <strong>${synthGroup}</strong>`
      : `Exibindo <strong>${synthData.length}</strong> de ${totalCount} IEES`;
    const sortOptions = [
      ["students","Estudantes"],["vacancies","Vagas"],["courses","Cursos"],
      ["graduates","Concluintes"],["sigla","IEES"],["grupo","Grupo"]
    ].map(([k,l]) => `<option value="${k}"${sortKey === k ? " selected" : ""}>${l}</option>`).join("");
    const rowsHtml = sorted.map(u => `<tr>
      <td><strong>${u.sigla}</strong><br><span>${u.nome}</span></td>
      <td>${renderMetricCell(u.students,  maxStudents)}</td>
      <td>${renderMetricCell(u.vacancies, maxVacancies)}</td>
      <td>${renderMetricCell(u.courses,   maxCourses)}</td>
      <td>${renderMetricCell(u.graduates, maxGraduates)}</td>
      <td>${renderGroupBadge(u.groups[c.f.groupBy] || "—", groupList)}</td>
    </tr>`).join("");
    return `<div class="table-wrap mt-14">
      <div class="synth-table-header">
        <div class="synth-table-titles">
          <p class="synth-table-title">Síntese dos indicadores estruturais por IEES</p>
          <p class="synth-table-sub">Comparativo das instituições estaduais segundo estudantes, vagas, cursos, concluintes e grupo estrutural.</p>
        </div>
        <div class="synth-sort-wrap">
          <span class="synth-sort-label">Ordenar por</span>
          <select class="synth-sort-select" onchange="setSynthSort(this.value)">${sortOptions}</select>
        </div>
      </div>
      ${renderStructuralInsight(tableCountSource, synthData, synthGroup)}
      <div class="rank-metric-selector" style="margin-bottom:6px">${chipsHtml}</div>
      <p class="synth-status-line">${statusLabel}</p>
      <table class="data-table">
        <thead><tr><th>IEES</th><th>Estudantes</th><th>Vagas</th><th>Cursos</th><th>Concluintes</th><th>Grupo</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
        <tfoot><tr class="synth-total-row">
          <td><strong>Total do sistema</strong></td>
          <td><strong>${formatNumber(totStudents)}</strong></td>
          <td><strong>${formatNumber(totVacancies)}</strong></td>
          <td><strong>${formatNumber(totCourses)}</strong></td>
          <td><strong>${formatNumber(totGraduates)}</strong></td>
          <td>${synthData.length} IEES</td>
        </tr></tfoot>
      </table>
    </div>`;
  })()}`;
}
window.overview = overview;

// ── Barras de cluster do panorama ────────────────────────────────────────────

function overviewClusterBars(c, metric) {
  const isBR = isBrasilContext(c);
  const clusterActive = !isBR && overviewActiveGroup(c) !== "all";
  const clusterData = isBR ? (c.display.length ? c.display : c.ref) : overviewDataSet(c);
  const clusterIds = new Set(clusterData.map(u => u.id));
  const chartData = clusterData;
  const sorted = [...chartData].sort((a, b) => metric.get(b) - metric.get(a));
  const max = Math.max(...sorted.map(metric.get), 1);
  const ref = mean(clusterData, metric.get);
  const refPos = clamp(ref / max * 100, 0, 100);
  const refLabel = isBR ? "Média nacional" : (clusterActive ? "Média do cluster" : "Média do sistema");
  const ieesColors = { UEL: "#1f72b8", UEM: "#e05c00", UEPG: "#14804a", UNIOESTE: "#8b2fc9", UNICENTRO: "#c43f3a", UENP: "#af7a00", UNESPAR: "#0f6e56" };
  const palette = ["#1f72b8", "#e05c00", "#14804a", "#8b2fc9", "#c43f3a", "#af7a00", "#0f6e56", "#2563eb", "#0f766e", "#9333ea", "#ca8a04", "#dc2626"];
  return `<div class="bars-reference-note"><span>${refLabel}: <strong>${metric.fmt(ref)}</strong></span></div>
  <div class="bars overview-cluster-bars" style="--ref-pos:${refPos}%; position:relative;">
    <div aria-hidden="true" style="position:absolute;top:0;bottom:0;left:${refPos}%;width:2px;background:#f28c28;box-shadow:0 0 0 3px rgba(242,140,40,0.18);border-radius:999px;pointer-events:none;z-index:2;"></div>
    ${sorted.map((u, i) => {
      const value = metric.get(u);
      const inCluster = clusterIds.has(u.id);
      const selected = isUniSelected(c.f, u.id);
      const barColor = ieesColors[u.sigla] || palette[i % palette.length] || "var(--blue-700)";
      const isTop = i === 0;
      return `<div class="bar-row ${inCluster ? "in-cluster" : "out-cluster"} ${selected ? "selected" : ""} ${isTop ? "top-value" : ""}">
        <span class="bar-name" title="${u.nome}">${u.sigla}${isTop ? '<span class="top-value-badge">↑ maior</span>' : ""}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${barColor}"></span></span>
        <span class="bar-value">${metric.fmt(value)}</span>
      </div>`;
    }).join("")}
  </div>`;
}

// ── Bind e controles ─────────────────────────────────────────────────────────

function bindOverviewControls() {
  const selector = document.getElementById("overviewMetricSelector");
  if (!selector) return;
  selector.addEventListener("change", event => {
    state.overviewMetric = event.target.value;
    render();
  });
}

function setSynthTableGroup(group) {
  if (state.activeTab === "overview") {
    setLocalFilter("overviewClusterBars", group);
    return;
  }
  state.synthTableGroup = state.synthTableGroup === group ? "all" : group;
  render();
}
window.setSynthTableGroup = setSynthTableGroup;

function setSynthSort(key) {
  state.synthSortKey = key;
  render();
}
window.setSynthSort = setSynthSort;

// ── Catálogo interativo ───────────────────────────────────────────────────────

function overviewInteractiveCatalog() {
  return renderCustomCatalog("overview", "Panorama Executivo");
}

function bindOverviewCatalogSelect() {
  bindCustomCatalog("overview");
}
