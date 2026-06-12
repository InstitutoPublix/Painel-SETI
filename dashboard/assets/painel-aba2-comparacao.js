/* ── ABA 2 — Comparação entre IEES ───────────────────────────────────────────
   Carregado APÓS painel.js. Todas as declarações function sobrescrevem
   as versões de painel.js em escopo global (last-definition-wins).
   As funções comparisonTable, comparisonRanking e comparisonRadar
   incorporam diretamente a lógica de escopo Brasil (originalmente em
   chain-overrides nas linhas 10374-10446 de painel.js), eliminando a
   necessidade de re-executar as correntes.
   Chain-overrides de painel.js NÃO são re-executados aqui.
   ──────────────────────────────────────────────────────────────────────────── */

/* ── helpers de slug/código ──────────────────────────────────────────────── */

function comparisonDimensionSlug(label) {
  return String(label || "Geral")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "geral";
}

function comparisonCatalogKeyForCode(code) {
  return String(code || "").toLowerCase().replace(/^ind-/, "ind");
}

function comparisonCodeNumber(code) {
  const match = String(code || "").match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function normalizeComparisonText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase();
}

function comparisonPolarityFromCatalog(indicator) {
  const text = normalizeComparisonText(indicator?.polaridade || "");
  if (text.includes("menor")) return "↓";
  if (text.includes("maior")) return "↑";
  return "~";
}

function comparisonDecimal(v, digits = 1) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(n);
}

function comparisonFormatterFromCatalog(indicator, code) {
  const text = normalizeComparisonText(`${indicator?.unidade || ""} ${indicator?.nome || ""}`);
  if (text.includes("percentual") || text.includes("taxa") || text.includes("proporcao") || text.includes("participacao")) return formatPercent;
  if (text.includes("reais") || text.includes("r$") || text.includes("salario") || text.includes("captacao")) {
    return code === "IND-60" ? formatCurrencyMillions : formatCurrency;
  }
  if (text.includes("hora")) return v => `${comparisonDecimal(v, 1)}h`;
  if (text.includes("razao") || text.includes("indice") || text.includes("conceito") || text.includes("media")) return v => comparisonDecimal(v, 1);
  return formatNumber;
}

/* ── construção dos conjuntos de indicadores por dimensão ────────────────── */

function buildComparisonIndicatorSets() {
  const sets = {};
  Object.entries(INDICATOR_CATALOG || {}).forEach(([key, indicator]) => {
    const code = `IND-${Number(indicator.codigo)}`;
    const getter = IND_FIELD_MAP[comparisonCatalogKeyForCode(code)] || IND_FIELD_MAP[key];
    if (!getter) return;
    const label = String(indicator.categoria || "Geral").trim() || "Geral";
    const dimKey = comparisonDimensionSlug(label);
    if (!sets[dimKey]) sets[dimKey] = { label, indicators: [], order: comparisonCodeNumber(code) };
    sets[dimKey].order = Math.min(sets[dimKey].order, comparisonCodeNumber(code));
    sets[dimKey].indicators.push({
      code,
      name: indicator.nome || code,
      polarity: comparisonPolarityFromCatalog(indicator),
      get: getter,
      fmt: comparisonFormatterFromCatalog(indicator, code)
    });
  });
  Object.values(sets).forEach(set => {
    const byCode = new Map();
    set.indicators.forEach(ind => {
      if (!byCode.has(ind.code)) byCode.set(ind.code, ind);
    });
    set.indicators = [...byCode.values()].sort((a, b) => comparisonCodeNumber(a.code) - comparisonCodeNumber(b.code));
  });
  return Object.fromEntries(Object.entries(sets).sort((a, b) => a[1].order - b[1].order || a[1].label.localeCompare(b[1].label, "pt-BR")));
}

var comparisonIndicatorSets = {};
comparisonIndicatorSets = buildComparisonIndicatorSets();

/* ── eixos do radar (referência fixa para escopo PR) ─────────────────────── */

var radarAxes = [
  { label: "Acesso",                 code: "IND-26", get: u => u.occupancy,                 br: () => brazil.result.occupancy  },
  { label: "Permanência (retenção)", code: "IND-5",  get: u => 100 - u.dropout,             br: () => brazil.result.permanence },
  { label: "Qualidade",              code: "IND-6",  get: u => u.doctors,                   br: () => brazil.result.doctorate  },
  { label: "Pesquisa",               code: "IND-60", get: u => resultIndicators.cnpq.get(u),br: () => brazil.result.cnpq       },
  { label: "Inserção",               code: "IND-37", get: u => u.employment,                br: () => brazil.result.employment },
  { label: "Orçamento",              code: "IND-81", get: u => u.execution,                 br: () => null, brUnavailable: true }
];

/* ── helpers de dimensão ─────────────────────────────────────────────────── */

function comparisonDimensionKey(c) {
  return comparisonIndicatorSets[c.f.dimension] ? c.f.dimension : "all";
}

function comparisonDimensionOptions() {
  return [
    ["all", "Todas as dimensões"],
    ...Object.entries(comparisonIndicatorSets).map(([key, dim]) => [key, dim.label])
  ];
}

function comparisonAllDimIndicators() {
  return Object.values(comparisonIndicatorSets)
    .map(dim => dim.indicators[0])
    .filter(Boolean);
}

function comparisonDimensionForKey(key) {
  return key === "all"
    ? { label: "Visão geral (indicador-síntese por dimensão)", indicators: comparisonAllDimIndicators() }
    : comparisonIndicatorSets[key] || { label: "Dimensão indisponível", indicators: [] };
}

function radarAxesForDimension(key) {
  if (!key || key === "all" || !comparisonIndicatorSets[key]) return comparisonAllDimIndicators()
    .slice(0, 6)
    .map(ind => ({ label: comparisonShortAxisLabel(ind.name), code: ind.code, get: ind.get, br: () => 50 }));
  const dim = comparisonIndicatorSets[key];
  const inds = dim.indicators.slice(0, 6);
  const axes = inds.map(ind => ({ label: comparisonShortAxisLabel(ind.name), code: ind.code, get: ind.get, br: () => 50 }));
  while (axes.length < 3) axes.push(radarAxes[axes.length % radarAxes.length]);
  return axes;
}

function comparisonShortAxisLabel(label) {
  const cleaned = String(label || "").replace(/\s*\([^)]*\)/g, "").trim();
  const words = cleaned.split(/\s+/);
  const stops = new Set(["de", "do", "da", "dos", "das", "no", "na", "nos", "nas", "por", "para", "e", "em"]);
  const meaningful = words.filter((w, i) => i === 0 || !stops.has(w.toLowerCase()));
  const short = meaningful.slice(0, 4).join(" ");
  return short.length > 36 ? short.slice(0, 34) + "…" : short;
}

/* ── barra de dimensão e setters de estado ───────────────────────────────── */

function renderComparisonDimensionBar() {
  const dim = state.comparisonDimension || "all";
  return `<div class="comparison-dim-bar" style="margin-bottom:12px">
    <label class="metric-selector">
      <span class="metric-selector-label">Dimensão de análise</span>
      <select onchange="setComparisonDimension(this.value)">
        ${comparisonDimensionOptions().map(([k,l]) => `<option value="${k}"${k===dim?" selected":""}>${l}</option>`).join("")}
      </select>
    </label>
  </div>`;
}

function setComparisonDimension(key) {
  state.comparisonDimension = key;
  state.rankingLocalDimension = key;
  render();
}
window.setComparisonDimension = setComparisonDimension;

function setRankingLocalDimension(key) {
  state.rankingLocalDimension = key;
  render();
}
window.setRankingLocalDimension = setRankingLocalDimension;

/* ── bloco dispatcher e wrapper da aba ──────────────────────────────────── */

function comparisonBlock(title, c) {
  if (title.includes("Tabela")) return comparisonTable(c);
  if (title.includes("Ranking")) return comparisonRanking(c);
  return comparisonRadar(c);
}

function renderComparisonTab(c, summary) {
  const dimBar = renderComparisonDimensionBar();
  const blocks = tabBlocks["comparison"] || [];
  return `<div class="tab-aba-wrapper" data-tab-id="comparison">${summary}${dimBar}${blocks.map((title, i) => renderBlock(i + 1, title, comparisonBlock(title, c))).join("")}</div>`;
}

/* ── Tópico 1: Tabela comparativa ────────────────────────────────────────── */

function comparisonTable(c) {
  if (isBrasilContext(c)) {
    /* escopo Brasil: sem cluster rows, sem coluna Média PR */
    const key = comparisonDimensionKey(c);
    const dimension = comparisonDimensionForKey(key);
    const rows = c.base.length ? c.base : c.all;
    const means = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(rows, ind)]));
    const ranking = dimensionRanking(rows, dimension.indicators);
    const sortedRows = [...rows].sort((a, b) => (ranking.get(a.id) || 999) - (ranking.get(b.id) || 999));
    return `<div class="comparison-toolbar"><div><strong>Dimensão ${renderDimensionHelp()}</strong><span class="card-subtitle"> · ${dimension.label} · ${nationalReferenceLabel()}</span></div></div>
  <div class="table-wrap comparison-table-wrap">
    <table class="data-table comparison-table">
      <thead><tr><th>Rank</th><th>IEES</th>${dimension.indicators.map(ind => { const shortName = comparisonShortAxisLabel(ind.name); return `<th title="${ind.name}" style="max-width:110px;word-break:break-word;white-space:normal;font-size:12px">${shortName}</th>`; }).join("")}</tr></thead>
      <tbody>${sortedRows.map(u => `<tr class="${isUniSelected(c.f, u.id) ? "selected-row" : ""}"><td><strong>${ranking.get(u.id) || "-"}º</strong></td><td><strong>${u.sigla}</strong><br><span>${u.region}</span></td>${dimension.indicators.map(ind => indicatorCell(ind, u, means[ind.code])).join("")}</tr>`).join("")}</tbody>
      <tfoot><tr><td colspan="2"><strong>${nationalMeanLabel()}</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, means[ind.code])}</td>`).join("")}</tr></tfoot>
    </table>
  </div>`;
  }
  /* escopo Paraná */
  const key = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(key);
  const clusterRows = clusterRowsFor(c);
  const rows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const means = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(clusterRows, ind)]));
  const prRows = c.base.length ? c.base : c.all;
  const prMeans = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(prRows, ind)]));
  const ranking = dimensionRanking(clusterRows, dimension.indicators);
  const sortedRows = [...rows].sort((a, b) => (ranking.get(a.id) || 999) - (ranking.get(b.id) || 999));
  return `<div class="comparison-toolbar">
    <div><strong>Dimensão ${renderDimensionHelp()}</strong><span class="card-subtitle"> · ${dimension.label}</span></div>
  </div>
  <div class="table-wrap comparison-table-wrap">
    <table class="data-table comparison-table">
      <thead><tr><th>Rank</th><th>IEES</th>${dimension.indicators.map(ind => { const shortName = comparisonShortAxisLabel(ind.name); return `<th title="${ind.name}" style="max-width:110px;word-break:break-word;white-space:normal;font-size:12px">${shortName}</th>`; }).join("")}</tr></thead>
      <tbody>${sortedRows.map(u => `<tr class="${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected-row" : ""}"><td><strong>${ranking.get(u.id) || "-"}º</strong></td><td><strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span></td>${dimension.indicators.map(ind => indicatorCell(ind, u, means[ind.code])).join("")}</tr>`).join("")}</tbody>
      <tfoot>
        <tr><td colspan="2"><strong>Média do cluster</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, means[ind.code])}</td>`).join("")}</tr>
        <tr class="pr-average-row"><td colspan="2"><strong>Média geral PR</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, prMeans[ind.code])}</td>`).join("")}</tr>
      </tfoot>
    </table>
  </div>`;
}

/* ── helpers de célula e classificação condicional ───────────────────────── */

function comparisonValue(ind, u) {
  const value = ind.get(u);
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function comparisonValues(rows, ind) {
  return rows.map(u => comparisonValue(ind, u)).filter(v => v != null);
}

function comparisonMean(rows, ind) {
  const values = comparisonValues(rows, ind);
  return values.length ? values.reduce((s, v) => s + v, 0) / values.length : null;
}

function comparisonFormat(ind, value) {
  return value == null || !Number.isFinite(Number(value)) ? "—" : ind.fmt(value);
}

function indicatorCell(ind, u, avg) {
  const value = comparisonValue(ind, u);
  if (value == null || avg == null) return `<td class="conditional-cell"><strong>—</strong><span>sem dado</span></td>`;
  const cls = conditionalClass(value, avg, ind.polarity);
  const delta = value - avg;
  const sign = delta > 0 ? "+" : "";
  return `<td class="conditional-cell ${cls}"><strong>${comparisonFormat(ind, value)}</strong><span>${sign}${delta.toFixed(1).replace(".", ",")} vs média</span></td>`;
}

function conditionalClass(value, avg, polarity) {
  if (polarity === "~") return Math.abs(value - avg) <= Math.abs(avg) * 0.1 ? "cell-good" : "cell-warn";
  if (polarity === "↓") {
    if (value <= avg) return "cell-good";
    if (value <= avg * 1.1) return "cell-warn";
    return "cell-bad";
  }
  if (value >= avg) return "cell-good";
  if (value >= avg * 0.9) return "cell-warn";
  return "cell-bad";
}

function dimensionRanking(rows, indicators) {
  const scores = rows.map(u => [u.id, dimensionScore(u, rows, indicators)]).sort((a, b) => b[1] - a[1]);
  return new Map(scores.map(([id], index) => [id, index + 1]));
}

function dimensionScore(u, rows, indicators) {
  const scores = indicators.map(ind => {
    const value = comparisonValue(ind, u);
    const values = comparisonValues(rows, ind);
    if (value == null || values.length < 2) return null;
    const min = Math.min(...values), max = Math.max(...values);
    const n = max === min ? 0.5 : (value - min) / (max - min);
    return ind.polarity === "↓" ? 1 - n : n;
  }).filter(v => v != null);
  return scores.length ? scores.reduce((s, v) => s + v, 0) / scores.length : 0;
}

/* ── Tópico 2: Ranking por dimensão ─────────────────────────────────────── */

function comparisonRanking(c) {
  const ieesColors = { UEL: "#1f72b8", UEM: "#e05c00", UEPG: "#14804a", UNIOESTE: "#8b2fc9", UNICENTRO: "#c43f3a", UENP: "#af7a00", UNESPAR: "#0f6e56" };

  if (isBrasilContext(c)) {
    /* escopo Brasil: usa c.base/c.all diretamente, sem cluster */
    const rows = c.base.length ? c.base : c.all;
    if (!state.rankingLocalDimension || state.rankingLocalDimension === "_synced_") {
      state.rankingLocalDimension = comparisonDimensionKey(c);
    }
    const dimKey = comparisonIndicatorSets[state.rankingLocalDimension] ? state.rankingLocalDimension : comparisonDimensionKey(c);
    const dimSet = comparisonDimensionForKey(dimKey);
    const dim = state.rankingLocalDimension || "all";
    const indicator = dimSet.indicators.length
      ? { label: dimSet.label, format: v => `${(v * 100).toFixed(0)} pts`, get: u => dimensionScore(u, rows, dimSet.indicators) }
      : (resultIndicators[c.f.result] || resultIndicators.composite);
    const rankingSorted = [...rows].sort((a, b) => indicator.get(b) - indicator.get(a));
    const rankMap = new Map(rankingSorted.map((u, i) => [u.id, i + 1]));
    const max = Math.max(...rows.map(u => Number(indicator.get(u)) || 0), 1);
    const ref = mean(rows, u => Number(indicator.get(u)) || 0);
    const refPos = clamp(ref / max * 100, 0, 100);
    const dimOptions = comparisonDimensionOptions().map(([k,l]) => `<option value="${k}"${k===dim?" selected":""}>${l}</option>`).join("");
    return `<article class="visual-card comparison-ranking-card">
      <div class="visual-card-header">
        <div>
          <h3>Ranking por Dimensão ${renderDimensionHelp()}</h3>
          <p class="card-subtitle">${indicator.label}. Barras preenchidas conforme o total, linha laranja indica a média.</p>
        </div>
        <label class="metric-selector">
          <span class="metric-selector-label">Dimensão</span>
          <select onchange="setRankingLocalDimension(this.value)">${dimOptions}</select>
        </label>
      </div>
      <p class="card-subtitle" style="margin-bottom:8px"><span style="background:var(--blue-50,#eff4fb);border:1px solid var(--blue-200,#c7d9f5);border-radius:6px;padding:4px 10px;font-size:12px">ⓘ A dimensão selecionada no Tópico 1 atualiza este gráfico automaticamente. O filtro acima altera apenas esta visualização.</span></p>
      <div class="bars-reference-note"><span>${nationalMeanLabel()}: <strong>${indicator.format(ref)}</strong></span></div>
      <div class="bars comparison-ranking-bars" style="--ref-pos:${refPos}%">
        ${[...rows].sort((a,b) => indicator.get(b) - indicator.get(a)).map(u => {
          const value = Number(indicator.get(u)) || 0, selected = isUniSelected(c.f, u.id);
          const rank = rankMap.get(u.id);
          return `<div class="bar-row in-cluster ${selected ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${rank ? rank + "º " : ""}${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${ieesColors[u.sigla] || "var(--blue-700)"}"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${indicator.format(value)}</span></div>`;
        }).join("")}
      </div>
    </article>`;
  }

  /* escopo Paraná */
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const showAll = explicitClusterActive(c) && !state.comparisonShowOnlyCluster;
  const rows = showAll ? (c.base.length ? c.base : c.all) : clusterRows;
  if (!state.rankingLocalDimension || state.rankingLocalDimension === "_synced_") {
    state.rankingLocalDimension = comparisonDimensionKey(c);
  }
  const dimKey = comparisonIndicatorSets[state.rankingLocalDimension] ? state.rankingLocalDimension : comparisonDimensionKey(c);
  const dimSet = comparisonDimensionForKey(dimKey);
  const dim = state.rankingLocalDimension || "all";
  const indicator = dimSet.indicators.length
    ? { label: dimSet.label, format: v => `${(v * 100).toFixed(0)} pts`, get: u => dimensionScore(u, clusterRows, dimSet.indicators) }
    : (resultIndicators[c.f.result] || resultIndicators.composite);
  const rankingSorted = [...clusterRows].sort((a, b) => indicator.get(b) - indicator.get(a));
  const rankMap = new Map(rankingSorted.map((u, i) => [u.id, i + 1]));
  const max = Math.max(...rows.map(u => Number(indicator.get(u)) || 0), 1);
  const ref = mean(clusterRows, u => Number(indicator.get(u)) || 0);
  const refPos = clamp(ref / max * 100, 0, 100);
  const dimOptions = comparisonDimensionOptions().map(([k,l]) => `<option value="${k}"${k===dim?" selected":""}>${l}</option>`).join("");
  return `<article class="visual-card comparison-ranking-card">
    <div class="visual-card-header">
      <div>
        <h3>Ranking por Dimensão ${renderDimensionHelp()}</h3>
        <p class="card-subtitle">${indicator.label}. Barras preenchidas conforme o total, linha laranja indica a média do cluster.</p>
      </div>
      <label class="metric-selector">
        <span class="metric-selector-label">Dimensão</span>
        <select onchange="setRankingLocalDimension(this.value)">${dimOptions}</select>
      </label>
    </div>
    <p class="card-subtitle" style="margin-bottom:8px"><span style="background:var(--blue-50,#eff4fb);border:1px solid var(--blue-200,#c7d9f5);border-radius:6px;padding:4px 10px;font-size:12px">ⓘ A dimensão selecionada no Tópico 1 atualiza este gráfico automaticamente. O filtro acima altera apenas esta visualização.</span></p>
    <div class="bars-reference-note"><span>Média do cluster: <strong>${indicator.format(ref)}</strong></span></div>
    <div class="bars comparison-ranking-bars" style="--ref-pos:${refPos}%">
      ${[...rows].sort((a,b) => indicator.get(b) - indicator.get(a)).map(u => {
        const value = indicator.get(u), inCluster = clusterIds.has(u.id), selected = isUniSelected(c.f, u.id);
        const rank = rankMap.get(u.id);
        return `<div class="bar-row ${inCluster ? "in-cluster" : "out-cluster"} ${selected ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${rank ? rank + "º " : ""}${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${ieesColors[u.sigla] || "var(--blue-700)"}"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${indicator.format(value)}</span></div>`;
      }).join("")}
    </div>
  </article>`;
}

/* ── Tópico 3: Radar IEES × referência ──────────────────────────────────── */

function radarRefUniverse(c) {
  return [...universities, ...universitiesBrasil].map(u => byYear(u, c.f.year));
}

function comparisonRadar(c) {
  if (isBrasilContext(c)) return "";

  const clusterRows = clusterRowsFor(c);
  const universe = explicitClusterActive(c) ? clusterRows : (c.base.length ? c.base : c.all);
  const selected = c.selected && universe.some(u => u.id === c.selected.id) ? c.selected : universe[0];
  if (!selected) return empty();
  const refKey = state.radarReference || "cluster";
  const dimKey = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(dimKey);
  const axes = radarAxesForDimension(dimKey);

  const allUnis = radarRefUniverse(c);
  const refIees = ["cluster","parana","brasil"].includes(refKey) ? null : allUnis.find(u => u.id === refKey);
  const isSameIees = refIees && refIees.id === selected.id;

  const isBRref = refKey === "brasil";
  const unavailableAxes = new Set(isBRref ? axes.map((ax, i) => ax.brUnavailable ? i : -1).filter(i => i >= 0) : []);

  const selectedValues = axes.map(axis => normalizeForRadar(axis.get(selected), universe.map(axis.get)));
  const referenceValues = isSameIees
    ? axes.map(() => 0)
    : axes.map((axis, i) => unavailableAxes.has(i)
        ? 0
        : normalizeForRadar(radarReferenceValue(axis, refKey, clusterRows, c, allUnis), universe.map(axis.get)));

  const unavailNote = unavailableAxes.size > 0
    ? `<p style="font-size:12px;color:var(--gray-500,#888);text-align:center;margin:4px 0 0">⚠ Orçamento: dado de execução orçamentária indisponível para comparação nacional.</p>`
    : "";

  const refLabel = refIees ? refIees.sigla
    : refKey === "brasil" ? "Média Brasil"
    : refKey === "parana" ? "Média do Paraná"
    : "Média do cluster";

  const prOpts = universities.map(u => byYear(u, c.f.year))
    .map(u => `<option value="${u.id}"${refKey === u.id ? " selected" : ""}>${u.sigla} – ${u.nome}</option>`).join("");
  const brOpts = universitiesBrasil.map(u => byYear(u, c.f.year))
    .map(u => `<option value="${u.id}"${refKey === u.id ? " selected" : ""}>${u.sigla} – ${u.nome}</option>`).join("");

  const warnHtml = isSameIees
    ? `<p style="text-align:center;color:var(--warn,#c07000);padding:8px 0;font-size:13px">⚠ Selecione uma IEES diferente da analisada (${selected.sigla})</p>`
    : "";

  return `<article class="visual-card radar-card">
    <div class="visual-card-header">
      <div><h3>Radar IEES × referência</h3><p class="card-subtitle">Dimensão: ${dimension.label} · IEES: ${selected.sigla}.</p></div>
      <label class="metric-selector">Comparar com
        <select id="radarReferenceSelect">
          <option value="cluster"${refKey === "cluster" ? " selected" : ""}>Média do cluster</option>
          <option value="parana"${refKey === "parana" ? " selected" : ""}>Média do Paraná</option>
          <option value="brasil"${refKey === "brasil" ? " selected" : ""}>Média Brasil</option>
          <optgroup label="Universidades do Paraná">${prOpts}</optgroup>
          <optgroup label="Outras estaduais - Brasil">${brOpts}</optgroup>
        </select>
      </label>
    </div>
    ${warnHtml}${radarSvg(selectedValues, referenceValues, axes, unavailableAxes)}${unavailNote}
    <div class="radar-analysis">
      <strong>Como interpretar este gráfico</strong>
      <p>Cada eixo representa um indicador da dimensão selecionada. Quanto maior a área do polígono, melhor o desempenho relativo da IEES. Os valores são normalizados entre 0 e 1 com base nas IEES do grupo de comparação ativo — ou seja, o valor 1 indica a melhor IEES do grupo naquele eixo, e 0 a pior. A linha de referência (pontilhada) representa a referência selecionada.</p>
    </div>
    <div class="radar-legend"><span class="radar-selected-dot"></span>${selected.sigla}<span class="radar-reference-dot"></span>${refLabel}</div>
  </article>`;
}

function radarReferenceValue(axis, refKey, clusterRows, c, allUnis) {
  if (refKey === "brasil") return axis.br();
  if (refKey === "parana") return mean(c.base.length ? c.base : c.all, axis.get);
  if (allUnis) {
    const refIees = allUnis.find(u => u.id === refKey);
    if (refIees) return axis.get(refIees);
  }
  return mean(clusterRows, axis.get);
}

function normalizeForRadar(value, values) {
  const numericValues = values.map(Number).filter(Number.isFinite);
  const n = Number(value);
  if (!Number.isFinite(n) || !numericValues.length) return 0;
  const min = Math.min(...numericValues), max = Math.max(...numericValues);
  if (max === min) return 0.5;
  return clamp((n - min) / (max - min), 0, 1);
}

function radarSvg(selectedValues, referenceValues, activeAxes, unavailableAxes) {
  const axDef = activeAxes || radarAxes;
  const unavail = unavailableAxes || new Set();
  const cx = 170, cy = 150, radius = 108, n = axDef.length;
  const axisPoints = axDef.map((axis, i) => radarPoint(cx, cy, radius, i, n));
  const selectedPoints = selectedValues.map((v, i) => radarPoint(cx, cy, radius * v, i, n)).map(p => `${p.x},${p.y}`).join(" ");
  const referencePoints = referenceValues.map((v, i) => radarPoint(cx, cy, radius * v, i, n)).map(p => `${p.x},${p.y}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1].map(r => `<polygon class="radar-ring" points="${axDef.map((_, i) => { const p = radarPoint(cx, cy, radius * r, i, n); return `${p.x},${p.y}`; }).join(" ")}" />`).join("");
  const axLines = axisPoints.map((p, i) => {
    const off = unavail.has(i);
    const lAttr = off ? ' stroke="#bbb" stroke-dasharray="4,3" opacity="0.45"' : '';
    const tAttr = off ? ' fill="#bbb" opacity="0.45"' : '';
    return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"${lAttr} /><text class="radar-label" x="${p.labelX}" y="${p.labelY}"${tAttr}>${axDef[i].label}</text>`;
  }).join("");
  return `<svg class="radar-svg" viewBox="0 0 340 300" role="img" aria-label="Radar comparativo IEES e referência">${rings}${axLines}<polygon class="radar-reference" points="${referencePoints}" /><polygon class="radar-selected" points="${selectedPoints}" /></svg>`;
}

function radarPoint(cx, cy, r, index, total) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index / total);
  const x = cx + Math.cos(angle) * r;
  const y = cy + Math.sin(angle) * r;
  return { x: round(x, 1), y: round(y, 1), labelX: round(cx + Math.cos(angle) * (r + 24), 1), labelY: round(cy + Math.sin(angle) * (r + 24), 1) };
}
