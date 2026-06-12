// ═══════════════════════════════════════════════════════════════════════════
// ABA 3 — Acesso e Oferta
// Carregado após painel.js; redefine todas as funções desta aba.
// Dependências do painel.js: state, render, clusterRowsFor, clusterRowsFor,
//   explicitClusterActive, isUniSelected, mean, sum, clamp, round,
//   formatNumber, formatPercent, formatCurrency, formatCurrencyMillions,
//   metricTable, empty, score, bars, byYear, scopeUniverse, previousYearRows,
//   quartilChipStrip, chartRowsByLocal, indicatorName, context,
//   isBrasilContext, brasilClusterUnavailableState, occupancyTimeline (redefinido abaixo)
// Constantes usadas do painel.js: PARANA_VIEWBOX, PARANA_BBOX, paranaOutlineGeo,
//   paranaIeesGeoCoords, paranaIeesLabelOffsets, PARANA_PATH, ieesMapCoords
// ═══════════════════════════════════════════════════════════════════════════

// ── Dispatcher principal da aba ─────────────────────────────────────────────
function accessBlock(title, c) {
  if (title.includes("Escala")) return accessScale(c);
  if (title.includes("Ocupação")) return accessOccupancy(c);
  return accessTerritory(c);
}

// ── Filtros de estado ───────────────────────────────────────────────────────
function setAccessCourseTypeFilter(type) {
  state.accessCourseTypeFilter = type;
  render();
}
window.setAccessCourseTypeFilter = setAccessCourseTypeFilter;

function setSemaphoreYear(year) {
  state.semaphoreYear = String(year);
  render();
}
window.setSemaphoreYear = setSemaphoreYear;

function setDistributionCourseType(type) {
  state.distributionCourseType = state.distributionCourseType === type ? "all" : type;
  render();
}
window.setDistributionCourseType = setDistributionCourseType;

function setDayNightFilter(turn) {
  state.dayNightFilter = state.dayNightFilter === turn ? "all" : turn;
  render();
}
window.setDayNightFilter = setDayNightFilter;

function setPrAccessTimelineFilter(id) {
  state.prAccessTimelineFilter = (state.prAccessTimelineFilter === id) ? "all" : id;
  render();
}
window.setPrAccessTimelineFilter = setPrAccessTimelineFilter;

// ── Componentes de Escala ───────────────────────────────────────────────────
function accessCard(code, title, value, subtitle) {
  return `<article class="score-card access-card"><div class="access-card-head"><span class="indicator-code">${code}</span></div><h3 class="access-card-title">${title}</h3><div class="score-value">${value}</div><p class="card-subtitle">${subtitle}</p></article>`;
}

function accessClusterBars(c, get, fmt) {
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = explicitClusterActive(c) ? (c.base.length ? c.base : c.all) : clusterRows;
  const max = Math.max(...rows.map(get), 1);
  const ref = mean(clusterRows, get);
  const refPos = clamp(ref / max * 100, 0, 100);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${fmt(ref)}</strong></span></div><div class="bars overview-cluster-bars access-bars" style="--ref-pos:${refPos}%">${[...rows].sort((a,b)=>get(b)-get(a)).map(u => `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(get(u)/max*100,4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(get(u))}</span></div>`).join("")}</div>`;
}

// ── Semáforo de ocupação ────────────────────────────────────────────────────
function occupancyTone(v) {
  if (v >= 70) return "occ-green";
  if (v >= 55) return "occ-yellow";
  return "occ-red";
}

function gaugeCircle(value, tone) {
  const r = 21, cx = 28, cy = 28;
  const circ = +(2 * Math.PI * r).toFixed(2);
  const arc = +(Math.min(Math.max(value, 0), 100) / 100 * circ).toFixed(2);
  const color = tone === "occ-green" ? "#14804a" : tone === "occ-yellow" ? "#af7a00" : "#c24132";
  return `<svg class="semaphore-gauge" width="56" height="56" viewBox="0 0 56 56" aria-hidden="true"><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="#e8edf4" stroke-width="7"/><circle cx="${cx}" cy="${cy}" r="${r}" fill="none" stroke="${color}" stroke-width="7" stroke-dasharray="${arc} ${circ}" stroke-linecap="round" transform="rotate(-90 ${cx} ${cy})"/><text x="${cx}" y="${cy}" text-anchor="middle" dominant-baseline="middle" font-size="11" font-weight="800" fill="${color}">${Math.round(value)}%</text></svg>`;
}

function signalCard(u) {
  const tone = occupancyTone(u.occupancy);
  return `<div class="signal-card ${tone}">${gaugeCircle(u.occupancy, tone)}<strong>${u.sigla}</strong><span>${formatPercent(u.occupancy)}</span></div>`;
}

// ── Barras de ocupação (versão ativa com chartRowsByLocal e rank) ────────────
function occupancyBars(c) {
  let clusterRows = chartRowsByLocal(c, "occupancyBars", clusterRowsFor(c));
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = explicitClusterActive(c) ? (c.base.length ? c.base : c.all) : clusterRows;
  const ref = mean(clusterRows.length ? clusterRows : clusterRowsFor(c), u => u.occupancy);
  const rankedCluster = [...clusterRows].sort((a, b) => b.occupancy - a.occupancy);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatPercent(ref)}</strong></span></div><div class="bars overview-cluster-bars occupancy-bars" style="--ref-pos:${clamp(ref,0,100)}%">${[...rows].sort((a,b)=>b.occupancy-a.occupancy).map(u => {
    const diff = u.occupancy - ref;
    const rank = rankedCluster.findIndex(x => x.id === u.id) + 1;
    const rankLabel = rank > 0 ? `${rank}º no cluster` : "fora do cluster";
    return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${occupancyTone(u.occupancy)}" style="width:${clamp(u.occupancy,4,100)}%" title="${formatPercent(u.occupancy)} · ${rankLabel} · ${diff >= 0 ? '+' : ''}${diff.toFixed(1).replace('.', ',')} p.p."></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${formatPercent(u.occupancy)} · ${rank > 0 ? `${rank}º` : '-'}</span></div>`;
  }).join("")}</div>`;
}

// ── Timeline de ocupação ────────────────────────────────────────────────────
var _TIMELINE_COLORS = ["#185fa5","#0f6e56","#b86b00","#534ab7","#1a6b5c","#7a3010"];

function occupancyTimeline(c) {
  const yr = state.comparisonYear || Number(c.f.year) || 2024;
  const rows = clusterRowsFor(c);
  const years = [2020, 2021, 2022, 2023, 2024];
  const selIdx = years.indexOf(yr);
  const width = 420, height = 200, left = 40, top = 16, plotW = 355, plotH = 148;
  const allUniversities = scopeUniverse(c.f.scope);
  const series = rows.map(u => ({ sigla: u.sigla, points: years.map(y => byYear(allUniversities.find(x => x.id === u.id), String(y)).occupancy) }));
  const avg = years.map((y, i) => mean(series, s => s.points[i]));
  const allValues = series.flatMap(s => s.points).concat(avg);
  const minV = Math.max(40, Math.floor(Math.min(...allValues) / 5) * 5 - 5);
  const maxV = Math.min(100, Math.ceil(Math.max(...allValues) / 5) * 5 + 5);
  const toX = i => left + i * (plotW / (years.length - 1));
  const toY = v => top + (maxV - v) / Math.max(maxV - minV, 1) * plotH;
  const poly = values => values.map((v, i) => `${toX(i)},${toY(v)}`).join(" ");
  const selX = selIdx >= 0 ? toX(selIdx) : -1;

  const yTicks = [minV, Math.round((minV + maxV) / 2), maxV].map(v =>
    `<text class="timeline-label" x="${left - 4}" y="${toY(v) + 4}" text-anchor="end" font-size="10">${v}%</text>`
  ).join("");

  const btnHtml = years.map(y =>
    `<button class="year-toggle-btn${y === yr ? " active" : ""}" type="button" data-year="${y}">${y}</button>`
  ).join("");

  const selLine = selIdx >= 0 ? `<line class="timeline-select-line" x1="${selX}" y1="${top}" x2="${selX}" y2="${top + plotH}" />` : "";

  const selDots = selIdx >= 0 ? series.map((s, i) => {
    return `<circle class="timeline-select-dot line-${i % 6}" cx="${selX}" cy="${toY(s.points[selIdx])}" r="4"><title>${s.sigla}: ${formatPercent(s.points[selIdx])}</title></circle>`;
  }).join("") : "";

  const avgDots = years.map((y, i) =>
    `<circle cx="${toX(i)}" cy="${toY(avg[i])}" r="3" fill="#f28c28" opacity="0.9"><title>Média do cluster ${y}: ${formatPercent(avg[i])}</title></circle>`
  ).join("");

  const colW = plotW / (years.length - 1);
  const hitAreas = years.map((y, i) => {
    const cx = toX(i);
    const x0 = Math.max(left - 4, cx - colW / 2);
    const x1 = Math.min(left + plotW + 4, cx + colW / 2);
    const vals = series.map(s => `${s.sigla}: ${formatPercent(s.points[i])}`).join("\n");
    return `<rect class="tl-hit" x="${x0.toFixed(1)}" y="${top}" width="${(x1 - x0).toFixed(1)}" height="${plotH}" fill="transparent" data-year="${y}" data-avg="${formatPercent(avg[i])}" data-vals="${encodeURIComponent(vals)}" />`;
  }).join("");

  const svgContent = `<div class="tl-wrap"><svg class="timeline-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução da taxa de ocupação 2020 a 2024">
    <line class="timeline-axis" x1="${left}" y1="${top + plotH}" x2="${left + plotW}" y2="${top + plotH}" />
    ${yTicks}
    ${years.map((y, i) => `<text class="timeline-label${i === selIdx ? " timeline-label-active" : ""}" x="${toX(i)}" y="${top + plotH + 16}">${y}</text>`).join("")}
    ${selLine}
    ${series.map((s, i) => `<polyline class="timeline-line line-${i % 6}" points="${poly(s.points)}"><title>${s.sigla}: ${s.points.map(formatPercent).join(' · ')}</title></polyline>`).join("")}
    <polyline class="timeline-average" points="${poly(avg)}" />
    ${avgDots}${selDots}
    ${hitAreas}
  </svg><div class="tl-tooltip" hidden></div></div>`;

  const legendItems = series.map((s, i) =>
    `<span class="tl-legend-item"><i style="background:${_TIMELINE_COLORS[i % 6]}"></i>${s.sigla}</span>`
  ).join("");
  const legend = `<div class="tl-legend"><span class="tl-legend-item tl-avg"><i></i>Média do cluster</span>${legendItems}</div>`;

  return `<div class="year-toggle-group">${btnHtml}</div>${svgContent}${legend}`;
}

// ── Indicadores de ocupação (matriz) ────────────────────────────────────────
var accessOccupancyIndicators = [
  { code: "IND-26", name: "Ocupação vagas", get: u => u.occupancy, fmt: formatPercent },
  { code: "IND-1",  name: "Ocupação ES estadual", get: u => u.occupancy, fmt: formatPercent },
  { code: "IND-3",  name: "Ocupação vagas iniciais", get: u => u.ingressOccupancy != null ? u.ingressOccupancy : round(u.entrants / Math.max(u.vacanciesNova != null ? u.vacanciesNova : u.vacancies * 0.82, 1) * 100, 1), fmt: formatPercent },
  { code: "IND-24", name: "Ocupação ingresso", get: u => u.occupancy, fmt: formatPercent },
  { code: "IND-25", name: "Vagas ingresso não ocupadas", get: u => u.vacanciesNovaUnfilled != null ? u.vacanciesNovaUnfilled : Math.max(0, Math.round((u.vacanciesNova != null ? u.vacanciesNova : u.vacancies * 0.82) - u.entrants)), fmt: formatNumber },
  { code: "IND-28", name: "Vagas não ocupadas", get: u => u.vacanciesUnfilled != null ? u.vacanciesUnfilled : Math.max(0, Math.round(u.vacancies * (1 - u.occupancy / 100))), fmt: formatNumber },
  { code: "IND-29", name: "Ocupação por grau", get: u => clamp(u.occupancy + (u.type === "Bacharelado" ? 2.4 : -1.6), 0, 100), fmt: formatPercent },
  { code: "IND-30", name: "Ocupação diurno", get: u => dayOccupancy(u), fmt: formatPercent },
  { code: "IND-31", name: "Ocupação noturno", get: u => nightOccupancy(u), fmt: formatPercent },
  { code: "IND-67", name: "Ocupação por tipo", get: u => clamp(u.occupancy + (u.type === "Licenciatura" ? -3.5 : 1.8), 0, 100), fmt: formatPercent },
  { code: "IND-23", name: "Estudantes por vaga", get: u => u.students / Math.max(u.vacancies, 1), fmt: v => v.toFixed(2).replace(".", ",") }
];

// ── Bloco Ocupação (versão ativa com filtro de IES e semáforo por ano) ───────
function accessOccupancy(c) {
  const clusterRows = clusterRowsFor(c);
  const semYear = state.semaphoreYear ?? c.f.year;

  const tlSelId = state.prAccessTimelineFilter || "all";
  const tlRows = tlSelId !== "all" ? clusterRows.filter(u => u.id === tlSelId) : clusterRows;
  const tlCtx = tlRows.length < clusterRows.length ? { ...c, base: tlRows, ref: tlRows } : c;

  const semRows = previousYearRows(tlRows, semYear);
  const yearBtns = [2020, 2021, 2022, 2023, 2024].map(y =>
    `<button class="rank-year-btn${String(y) === String(semYear) ? " active" : ""}" type="button" onclick="setSemaphoreYear(${y})">${y}</button>`
  ).join("");

  const dropOpts = clusterRows.map(u => `<option value="${u.id}"${u.id === tlSelId ? " selected" : ""}>${u.sigla}</option>`).join("");
  const tlDropdown = `<div style="margin-bottom:10px;display:flex;align-items:center;gap:8px">
    <label style="font-size:12px;font-weight:600;color:var(--gray-600)">Filtrar IEES:</label>
    <select style="font-size:12px;padding:4px 8px;border-radius:6px;border:1px solid #d9e1ec" onchange="setPrAccessTimelineFilter(this.value)">
      <option value="all">Todas as IEES</option>${dropOpts}
    </select>
    ${tlSelId !== "all" ? `<button type="button" style="font-size:11px;color:var(--gray-500);background:none;border:none;cursor:pointer;padding:0" onclick="setPrAccessTimelineFilter('all')">× Limpar</button>` : ""}
  </div>`;

  return `<article class="visual-card"><h3>IND-26 · Taxa de ocupação por IEES</h3><p class="card-subtitle">Semáforo: verde ≥ 70%, amarelo 55–69%, vermelho &lt; 55%.</p>${quartilChipStrip("occupancyBars", c.f.groupBy, c.base, c)}${occupancyBars(c)}</article>
  <div class="chart-grid mt-14">
    <article class="visual-card"><h3>Evolução de IND-26 · 2020–2024</h3><p class="card-subtitle">Linha tracejada = média do cluster por ano.</p>${tlDropdown}${occupancyTimeline(tlCtx)}</article>
    <article class="visual-card">
      <h3>Semáforo de ocupação de vagas por IEES</h3>
      <p class="card-subtitle">Verde ≥ 70% · Amarelo 55–69% · Vermelho &lt; 55% | IND-26</p>
      <div class="rank-year-selector" style="margin-bottom:10px">${yearBtns}</div>
      <div class="signal-year-note">Ano base: <strong>${semYear}</strong></div>
      <div class="signal-grid">${semRows.map(u => signalCard(u)).join("")}</div>
    </article>
  </div>
  <div class="table-wrap mt-14 access-occupancy-table">
    <h3>Matriz de ocupação e ociosidade</h3>
    <p class="card-subtitle">Indicadores calculados por IEES dentro do recorte/cluster ativo.</p>
    <table class="data-table"><thead><tr><th>IEES</th>${accessOccupancyIndicators.map(ind => `<th><span class="indicator-code">${ind.code}</span>${indicatorName(ind.code)}</th>`).join("")}</tr></thead><tbody>${clusterRows.map(u => `<tr><td><strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span></td>${accessOccupancyIndicators.map(ind => `<td>${ind.fmt(ind.get(u))}</td>`).join("")}</tr>`).join("")}</tbody></table>
  </div>`;
}

// ── Composição de oferta por tipo de curso ──────────────────────────────────
function courseMix(u) {
  const licBase = u.type === "Licenciatura" ? 0.44 : 0.22;
  const techBase = clamp(0.08 + u.territory / 900, 0.09, 0.20);
  const lic = clamp(licBase + (100 - u.occupancy) / 900, 0.16, 0.52);
  const tech = techBase;
  const bach = Math.max(0.18, 1 - lic - tech);
  const total = bach + lic + tech;
  return { bach: bach / total, lic: lic / total, tech: tech / total };
}

function courseMixLabel(key) {
  return key === "bach" ? "Bacharelado" : key === "lic" ? "Licenciatura" : "Tecnólogo";
}

function courseMixColor(key) {
  return key === "bach" ? "#185fa5" : key === "lic" ? "#0f6e56" : "#f28c28";
}

function averageMix(rows) {
  const total = Math.max(sum(rows, u => u.vacancies), 1);
  return {
    bach: sum(rows, u => u.vacancies * courseMix(u).bach) / total,
    lic: sum(rows, u => u.vacancies * courseMix(u).lic) / total,
    tech: sum(rows, u => u.vacancies * courseMix(u).tech) / total
  };
}

function offerSpecialization(u) {
  const mix = courseMix(u);
  return Math.max(mix.bach, mix.lic, mix.tech) * 100;
}

function publicSchoolShare(u) {
  return u.publicSchool != null ? u.publicSchool : clamp(54 + (100 - u.occupancy) * 0.12 + u.territory * 0.08, 48, 76);
}

function municipalityOccupancy(u) {
  return clamp(u.occupancy + (u.territory - 72) * 0.08, 45, 100);
}

// ── stackedCourseBars (versão ativa — com filtro por tipo e opacidade) ───────
function stackedCourseBars(c) {
  const rows = clusterRowsFor(c);
  const avg = averageMix(rows);
  const avgOcc = mean(rows, u => u.occupancy);
  const activeType = state.distributionCourseType || "all";
  const highlight = key => activeType === "all" || activeType === key;
  const MIN_PCT = 13;
  const mixBar = mix => {
    const bW = (mix.bach * 100).toFixed(1), lW = (mix.lic * 100).toFixed(1), tW = (mix.tech * 100).toFixed(1);
    const bOp = highlight("bach") ? 1 : 0.15, lOp = highlight("lic") ? 1 : 0.15, tOp = highlight("tech") ? 1 : 0.15;
    const bL = mix.bach * 100 >= MIN_PCT && highlight("bach") ? Math.round(mix.bach * 100) + "%" : "";
    const lL = mix.lic  * 100 >= MIN_PCT && highlight("lic")  ? Math.round(mix.lic  * 100) + "%" : "";
    const tL = mix.tech * 100 >= MIN_PCT && highlight("tech") ? Math.round(mix.tech * 100) + "%" : "";
    return `<div class="cmix-bar"><span class="cmix-seg cmix-bach" style="width:${bW}%;opacity:${bOp}">${bL}</span><span class="cmix-seg cmix-lic" style="width:${lW}%;opacity:${lOp}">${lL}</span><span class="cmix-seg cmix-tech" style="width:${tW}%;opacity:${tOp}">${tL}</span></div>`;
  };
  const occBadge = v => `<span class="occ-badge ${occupancyTone(v)}">${formatPercent(v)}</span>`;
  const sorted = [...rows].sort((a, b) => b.occupancy - a.occupancy);
  const clusterRow = `<tr class="cmix-cluster-row"><td><strong>Média do cluster</strong></td><td>${mixBar(avg)}</td><td>${occBadge(avgOcc)}</td></tr>`;
  const rowsHtml = sorted.map(u => `<tr class="${isUniSelected(c.f, u.id) ? "selected" : ""}"><td><strong>${u.sigla}</strong></td><td title="${u.sigla}: Bach. ${formatPercent(courseMix(u).bach*100)} · Lic. ${formatPercent(courseMix(u).lic*100)} · Tecn. ${formatPercent(courseMix(u).tech*100)}">${mixBar(courseMix(u))}</td><td>${occBadge(u.occupancy)}</td></tr>`).join("");
  const typeBtns = `<div class="stack-legend" style="margin-bottom:10px"><button class="stack-type-btn${activeType === "bach" ? " active" : ""}" type="button" onclick="setDistributionCourseType('bach')"><i class="cmix-bach-dot"></i>Bacharelado</button><button class="stack-type-btn${activeType === "lic" ? " active" : ""}" type="button" onclick="setDistributionCourseType('lic')"><i class="cmix-lic-dot"></i>Licenciatura</button><button class="stack-type-btn${activeType === "tech" ? " active" : ""}" type="button" onclick="setDistributionCourseType('tech')"><i class="cmix-tech-dot"></i>Tecnólogo</button></div>`;
  return `${typeBtns}<table class="cmix-table"><thead><tr><th>IEES</th><th>Composição</th><th>Ocupação</th></tr></thead><tbody>${clusterRow}${rowsHtml}</tbody></table>`;
}

// ── Diurno/Noturno (versão ativa — com filtro e label dinâmico) ─────────────
function dayOccupancy(u) {
  return u.occDay != null ? u.occDay : clamp(u.occupancy + 3.2, 0, 100);
}

function nightOccupancy(u) {
  return u.occNight != null ? u.occNight : clamp(u.occupancy - 4.6, 0, 100);
}

function dayNightBars(c) {
  const rows = clusterRowsFor(c);
  const dayRef = mean(rows, u => dayOccupancy(u));
  const nightRef = mean(rows, u => nightOccupancy(u));
  const filter = state.dayNightFilter || "all";
  const showDay   = filter !== "night";
  const showNight = filter !== "day";
  const sorted = [...rows].sort((a, b) => (dayOccupancy(b) + nightOccupancy(b)) - (dayOccupancy(a) + nightOccupancy(a)));
  const dayRefPct = clamp(dayRef, 0, 100).toFixed(1);
  const nightRefPct = clamp(nightRef, 0, 100).toFixed(1);
  const cards = `<div class="daynight-ref-cards">
    ${showDay   ? `<div class="daynight-card daynight-day"><span>Diurno — média cluster</span><strong>${formatPercent(dayRef)}</strong></div>` : ""}
    ${showNight ? `<div class="daynight-card daynight-night"><span>Noturno — média cluster</span><strong>${formatPercent(nightRef)}</strong></div>` : ""}
  </div>`;
  const rowsHtml = sorted.map(u => {
    const dv = dayOccupancy(u), nv = nightOccupancy(u);
    const dW = clamp(dv, 4, 100).toFixed(1), nW = clamp(nv, 4, 100).toFixed(1);
    const dL = parseFloat(dW) >= 16 ? Math.round(dv) + "%" : "";
    const nL = parseFloat(nW) >= 16 ? Math.round(nv) + "%" : "";
    const dayBar   = showDay   ? `<div class="daynight-track" style="--day-ref:${dayRefPct}%"><div class="daynight-bar day-bar" style="width:${dW}%"><span>${dL}</span></div></div>` : "";
    const nightBar = showNight ? `<div class="daynight-track night" style="--night-ref:${nightRefPct}%"><div class="daynight-bar night-bar" style="width:${nW}%"><span>${nL}</span></div></div>` : "";
    const valStr = (showDay && showNight)
      ? `<span class="daynight-val day">${formatPercent(dv)}</span><span class="daynight-val night">${formatPercent(nv)}</span>`
      : showDay ? `<span class="daynight-val day">${formatPercent(dv)}</span>` : `<span class="daynight-val night">${formatPercent(nv)}</span>`;
    return `<tr class="${isUniSelected(c.f, u.id) ? "selected" : ""}"><td><strong>${u.sigla}</strong></td><td class="daynight-bars-cell">${dayBar}${nightBar}</td><td class="daynight-vals">${valStr}</td></tr>`;
  }).join("");
  const thLabel = showDay && showNight
    ? `<span class="th-day">● Diurno</span> · <span class="th-night">● Noturno</span> — escala 0–100%`
    : showDay ? `<span class="th-day">● Diurno</span> — escala 0–100%` : `<span class="th-night">● Noturno</span> — escala 0–100%`;
  const filterBtns = `<div class="stack-legend" style="margin-bottom:12px"><button class="stack-type-btn${filter === "day" ? " active" : ""}" type="button" onclick="setDayNightFilter('day')"><i class="turn-day-dot"></i>Diurno</button><button class="stack-type-btn${filter === "night" ? " active" : ""}" type="button" onclick="setDayNightFilter('night')"><i class="turn-night-dot"></i>Noturno</button></div>`;
  return `${filterBtns}${cards}<table class="daynight-table"><thead><tr><th>IEES</th><th>${thLabel}</th><th>Valores</th></tr></thead><tbody>${rowsHtml}</tbody></table>`;
}

// ── Escala de oferta (versão ativa — com filtro de tipo e mapa de calor) ─────
function accessScale(c) {
  const clusterRows = clusterRowsFor(c);
  const selected = c.selected && clusterRows.some(u => u.id === c.selected.id) ? c.selected : null;

  const typeFilter = state.accessCourseTypeFilter || "all";
  const mixKey = typeFilter === "Bacharelado" ? "bach" : typeFilter === "Licenciatura" ? "lic" : typeFilter === "Tecnólogo" ? "tech" : null;
  const getVac = mixKey ? u => u.vacancies * courseMix(u)[mixKey] : u => u.vacancies;
  const getCrs = mixKey ? u => u.courses  * courseMix(u)[mixKey] : u => u.courses;
  const typeLabel = mixKey ? ` · ${typeFilter}` : "";

  const data = c.display && c.display.length ? c.display : (selected ? [selected] : clusterRows);
  const vacDisp    = sum(data,        getVac);
  const crsDisp    = sum(data,        getCrs);
  const clVacTotal = Math.max(sum(clusterRows, getVac), 1);
  const clVacAvg   = mean(clusterRows, getVac);
  const clCrsAvg   = mean(clusterRows, getCrs);
  const participation = (c.display && c.display.length)
    ? sum(c.display, getVac) / Math.max(sum(c.all || clusterRows, getVac), 1) * 100
    : selected
      ? getVac(selected) / clVacTotal * 100
      : sum(clusterRows, getVac) / Math.max(sum(c.all, getVac), 1) * 100;
  const avgVacCrs     = vacDisp / Math.max(crsDisp, 1);
  const clAvgVacCrs   = sum(clusterRows, getVac) / Math.max(sum(clusterRows, getCrs), 1);

  const typeBtns = ["all","Bacharelado","Licenciatura","Tecnólogo"].map(t =>
    `<button class="rank-metric-btn${typeFilter === t ? " active" : ""}" type="button" onclick="setAccessCourseTypeFilter('${t}')">${t === "all" ? "Todos" : t}</button>`
  ).join("");

  return `<div class="rank-metric-selector" style="margin-bottom:14px">
    <span style="font-size:12px;font-weight:600;color:var(--gray-600);margin-right:4px">Tipo de curso:</span>${typeBtns}
  </div>
  <div class="access-context-grid">
    ${accessCard("IND-11", "Total de vagas" + typeLabel, formatNumber(vacDisp), `Média do cluster: ${formatNumber(clVacAvg)}`)}
    ${accessCard("IND-10", "Cursos ativos" + typeLabel, formatNumber(crsDisp), `Média do cluster: ${formatNumber(clCrsAvg)}`)}
    ${accessCard("IND-17", "Municípios com oferta", formatNumber(new Set(data.map(u => u.municipality)).size), `Cluster: ${formatNumber(new Set(clusterRows.map(u => u.municipality)).size)} municípios`)}
    ${accessCard("IND-16", "Participação nas vagas", formatPercent(participation), selected ? "sobre vagas do cluster" : "sobre Sistema PR completo")}
    ${accessCard("IND-15", "Vagas por curso" + typeLabel, formatNumber(avgVacCrs), `Média do cluster: ${formatNumber(clAvgVacCrs)}`)}
  </div>
  <article class="visual-card access-vacancy-map-card mt-14">
    <div class="visual-card-header">
      <div><h3>Mapa de calor de vagas por município</h3><p class="card-subtitle">IND-11 · concentração de vagas ofertadas nas IEES estaduais. Bolhas maiores indicam maior total de vagas; municípios fora do cluster ficam em cinza.</p></div>
      <span class="indicator-code">IND-11</span>
    </div>
    ${vacancyHeatMap(c)}
  </article>
  <div class="chart-grid mt-14">
    <article class="visual-card"><h3>IND-11 · Total de vagas por IEES${typeLabel}</h3><p class="card-subtitle">Barras do cluster destacadas; demais IEES em cinza.</p>${accessClusterBars(c, getVac, formatNumber)}</article>
    <article class="visual-card"><h3>IND-10 · Total de cursos por IEES${typeLabel}</h3><p class="card-subtitle">Linha laranja indica média do cluster.</p>${accessClusterBars(c, getCrs, formatNumber)}</article>
  </div>`;
}

// ── Mapa de calor de vagas ──────────────────────────────────────────────────
function vacancyHeatMap(c) {
  const allRows = c.base.length ? c.base : c.all;
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const totalVacancies = Math.max(sum(clusterRows, u => u.vacancies), 1);
  const maxVacancies = Math.max(...allRows.map(u => u.vacancies), 1);
  const activeRows = explicitClusterActive(c) ? allRows : clusterRows;
  const topRows = [...clusterRows].sort((a, b) => b.vacancies - a.vacancies).slice(0, 5);
  return `<div class="vacancy-map-layout">
    <div class="vacancy-map-frame">
      <svg class="pr-heatmap-svg" viewBox="0 0 760 430" role="img" aria-label="Mapa de calor do Paraná por total de vagas">
        <defs>
          <linearGradient id="prHeatFill" x1="0" x2="1" y1="0" y2="1">
            <stop offset="0" stop-color="#e6f1fb" />
            <stop offset="1" stop-color="#d0e7f8" />
          </linearGradient>
          <filter id="heatShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="10" stdDeviation="10" flood-color="#18395b" flood-opacity="0.14" /></filter>
        </defs>
        <path class="pr-state-shape" d="M95 232 L142 146 L248 92 L385 83 L515 116 L636 172 L687 248 L625 326 L466 355 L292 339 L156 304 Z" />
        <path class="pr-state-inner" d="M142 146 L292 339 M248 92 L466 355 M385 83 L625 326 M515 116 L156 304" />
        <text class="pr-region-label" x="142" y="145">Noroeste</text>
        <text class="pr-region-label" x="555" y="150">Norte</text>
        <text class="pr-region-label" x="230" y="286">Oeste</text>
        <text class="pr-region-label" x="412" y="300">Centro-Sul</text>
        <text class="pr-region-label" x="570" y="283">Campos Gerais</text>
        ${activeRows.map(u => heatMapBubble(u, clusterIds.has(u.id), isUniSelected(c.f, u.id), maxVacancies)).join("")}
      </svg>
      <div class="map-legend-card">
        <strong>Intensidade IND-11</strong>
        <div class="heat-gradient"><span></span></div>
        <div class="heat-scale"><span>menor oferta</span><span>maior oferta</span></div>
      </div>
    </div>
    <div class="vacancy-map-side">
      <div class="map-side-kpi"><span>Total de vagas no cluster</span><strong>${formatNumber(totalVacancies)}</strong></div>
      <div class="map-side-kpi"><span>Média por município</span><strong>${formatNumber(mean(clusterRows, u => u.vacancies))}</strong></div>
      <div class="map-side-list"><strong>Municípios com maior oferta</strong>${topRows.map((u, index) => `<div><span>${index + 1}. ${u.municipality}</span><strong>${formatNumber(u.vacancies)}</strong></div>`).join("")}</div>
    </div>
  </div>`;
}

function heatMapBubble(u, inCluster, selected, maxVacancies) {
  const p = prMunicipalityPositions[u.municipality] || { x: 50, y: 50, anchor: u.region };
  const intensity = clamp(u.vacancies / maxVacancies, 0.12, 1);
  const radius = 15 + intensity * 32;
  const cx = p.x * 7.6;
  const cy = p.y * 4.3;
  const fill = inCluster ? `rgba(24, 95, 165, ${0.32 + intensity * 0.58})` : "rgba(153, 164, 179, 0.42)";
  const stroke = selected ? "#f28c28" : inCluster ? "#ffffff" : "#c8d1dd";
  const strokeWidth = selected ? 5 : 2;
  return `<g class="heat-node ${inCluster ? "in-cluster" : "out-cluster"} ${selected ? "selected" : ""}">
    <circle cx="${cx}" cy="${cy}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="${strokeWidth}" filter="url(#heatShadow)"><title>${u.municipality} · ${u.sigla}\nIND-11 Total de vagas: ${formatNumber(u.vacancies)}\nParticipação no cluster: ${formatPercent(u.vacancies / Math.max(sum(clusterRowsFor(context()), x => x.vacancies), 1) * 100)}</title></circle>
    <text x="${cx}" y="${cy + 4}" class="heat-node-label">${u.sigla}</text>
    <text x="${cx}" y="${cy + radius + 16}" class="heat-node-value">${formatNumber(u.vacancies)}</text>
  </g>`;
}

function municipalityMapPlaceholder(c) {
  return vacancyHeatMap(c);
}

// ── Mapa geográfico das IEES (Paraná) ───────────────────────────────────────
function paranaIeesMap(c) {
  const rows = clusterRowsFor(c).filter(u => paranaIeesGeoCoords[u.sigla]);
  if (!rows.length) return empty();
  const vacancies = rows.map(u => u.vacancies);
  const minVacancies = Math.min(...vacancies);
  const maxVacancies = Math.max(...vacancies);
  const vacancyRange = Math.max(maxVacancies - minVacancies, 1);
  const radiusForVacancies = value => maxVacancies === minVacancies ? 18 : 10 + ((value - minVacancies) / vacancyRange) * 18;
  const toneColor = t => t === "occ-green" ? "#14804a" : t === "occ-yellow" ? "#af7a00" : "#c24132";
  const toneLabel = t => t === "occ-green" ? "verde" : t === "occ-yellow" ? "amarelo" : "vermelho";
  const circles = rows.map(u => {
    const coords = ieesMapCoords[u.sigla];
    if (!coords) return "";
    const [cx, cy] = coords;
    const tone = occupancyTone(u.occupancy);
    const color = toneColor(tone);
    const r = round(radiusForVacancies(u.vacancies), 1);
    const labelOffset = paranaIeesLabelOffsets[u.sigla] || { dx: 0, dy: -26 };
    const lx = round(clamp(cx + labelOffset.dx, 22, PARANA_VIEWBOX.width - 22), 1);
    const ly = round(clamp(cy + labelOffset.dy, 18, PARANA_VIEWBOX.height - 18), 1);
    const selected = isUniSelected(c.f, u.id);
    const geo = paranaIeesGeoCoords[u.sigla];
    const municipality = geo?.municipality || u.municipality;
    const leader = Math.abs(labelOffset.dx) + Math.abs(labelOffset.dy) > 10 ? `<line class="parana-iees-leader" x1="${round(cx, 1)}" y1="${round(cy, 1)}" x2="${lx}" y2="${ly}" />` : "";
    return `<g class="parana-iees-node ${selected ? "selected" : ""}">${leader}<title>${u.sigla} · ${municipality}\nTaxa de ocupação: ${formatPercent(u.occupancy)} (${toneLabel(tone)})\nTotal de vagas: ${formatNumber(u.vacancies)}</title><circle class="parana-iees-circle" cx="${round(cx, 1)}" cy="${round(cy, 1)}" r="${r}" fill="${color}" fill-opacity="0.86" stroke="${selected ? "#f28c28" : "#ffffff"}" stroke-width="${selected ? 4 : 2}" filter="url(#paranaIeesShadow)" /><text class="parana-iees-label" x="${lx}" y="${ly}">${u.sigla}</text></g>`;
  }).join("");
  const legendItems = [["#14804a", ">= 70% (verde)"], ["#af7a00", "55-69% (amarelo)"], ["#c24132", "&lt; 55% (vermelho)"]];
  const sizeLegend = `<span class="heatmap-legend-item"><span class="heatmap-size-scale" aria-hidden="true"><svg viewBox="0 0 110 34"><line x1="14" y1="29" x2="88" y2="29" stroke="#9fb0c5" stroke-width="1"/><circle cx="14" cy="23" r="6" fill="#d7e2ee" stroke="#8ea6bf"/><circle cx="48" cy="19" r="10" fill="#d7e2ee" stroke="#8ea6bf"/><circle cx="88" cy="15" r="14" fill="#d7e2ee" stroke="#8ea6bf"/></svg></span>Tamanho: ${formatNumber(minVacancies)}-${formatNumber(maxVacancies)} vagas</span>`;
  const legend = `<div class="heatmap-parana-legend">${legendItems.map(([color, label]) => `<span class="heatmap-legend-item"><span class="heatmap-legend-dot" style="background:${color}"></span>${label}</span>`).join("")}${sizeLegend}</div>`;
  return `<svg class="heatmap-parana-svg" viewBox="0 0 500 350" role="img" aria-label="Mapa das IEES estaduais do Paraná - IND-26 Ocupação de vagas">
    <defs>
      <linearGradient id="paranaIeesFill" x1="0" x2="1" y1="0" y2="1">
        <stop offset="0" stop-color="#f7fbff" />
        <stop offset="1" stop-color="#e1edf7" />
      </linearGradient>
      <filter id="paranaIeesShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="7" flood-color="#18395b" flood-opacity="0.16" /></filter>
    </defs>
    <path class="parana-iees-state" d="${PARANA_PATH}" />
    <path class="parana-iees-border" d="M 88 204 L 238 241 M 162 48 L 336 216 M 260 67 L 351 55" />
    ${circles}
  </svg>${legend}`;
}

// ── Tabela de indicadores territoriais ─────────────────────────────────────
function accessTerritoryTable(rows) {
  if (!rows.length) return "";
  const totalVac = Math.max(sum(rows, x => x.vacancies), 1);
  const totalCrs = Math.max(sum(rows, x => x.courses), 1);
  const cols = [
    { h: "IND-11 Vagas ↑",             pol: 1, fn: u => u.vacancies,                    fmt: formatNumber },
    { h: "IND-32 Ocupação município ↑", pol: 1, fn: u => municipalityOccupancy(u),       fmt: formatPercent },
    { h: "IND-17 Part. vagas ↑",        pol: 1, fn: u => u.vacancies / totalVac * 100,   fmt: formatPercent },
    { h: "IND-20 Part. cursos ↑",       pol: 1, fn: u => u.courses / totalCrs * 100,     fmt: formatPercent },
    { h: "IND-68 Especialização ↑",     pol: 1, fn: u => offerSpecialization(u),         fmt: formatPercent },
    { h: "IND-69 Licenciaturas ↑",      pol: 1, fn: u => courseMix(u).lic * 100,        fmt: formatPercent },
    { h: "IND-4 Escola pública ↑",      pol: 1, fn: u => publicSchoolShare(u),          fmt: formatPercent }
  ];
  const vals = rows.map(u => cols.map(col => col.fn(u)));
  const colMaxes = cols.map((_, ci) => Math.max(...vals.map(r => r[ci]), 0.0001));
  const colMeans = cols.map((_, ci) => {
    const vs = vals.map(r => r[ci]);
    return vs.reduce((a, b) => a + b, 0) / Math.max(vs.length, 1);
  });
  const toneBg  = { g: "#f0faf5", y: "#fffbeb", r: "#fdf2f2" };
  const toneBar = { g: "#14804a", y: "#f59e0b", r: "var(--color-danger,#dc2626)" };
  function cellTone(v, avg, pol) {
    if (pol > 0) return v >= avg * 1.1 ? "g" : v <= avg * 0.9 ? "r" : "y";
    return v <= avg * 0.9 ? "g" : v >= avg * 1.1 ? "r" : "y";
  }
  const thead = `<tr><th>IEES</th>${cols.map(col => `<th>${col.h}</th>`).join("")}</tr>`;
  const tbody = rows.map((u, ri) =>
    `<tr><td><strong>${u.sigla}</strong><br><span style="font-size:11px;color:#6b7a99">${u.municipality}</span></td>${
      cols.map((col, ci) => {
        const v = vals[ri][ci];
        const t = cellTone(v, colMeans[ci], col.pol);
        const bw = clamp(v / colMaxes[ci] * 100, 0, 100).toFixed(1);
        return `<td style="background:${toneBg[t]}"><span>${col.fmt(v)}</span><div style="height:4px;border-radius:2px;background:${toneBar[t]};width:${bw}%;margin-top:3px;min-width:2px"></div></td>`;
      }).join("")
    }</tr>`
  ).join("");
  const tfoot = `<tr><td><em>Média do cluster</em></td>${cols.map((col, ci) => `<td><em>${col.fmt(colMeans[ci])}</em></td>`).join("")}</tr>`;
  return `<div class="table-wrap mt-14">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px">
      <h3>Indicadores territoriais e por tipo de curso</h3>
      <button class="rank-metric-btn" onclick="exportAccessTerritoryCSV()" type="button">⬇ Exportar CSV</button>
    </div>
    <p class="card-subtitle">Verde: acima da média · Amarelo: próximo (±10%) · Vermelho: abaixo. ↑ = maior é melhor.</p>
    <table class="data-table territory-table" id="accessTerritoryDataTable">
      <thead>${thead}</thead><tbody>${tbody}</tbody><tfoot>${tfoot}</tfoot>
    </table>
  </div>`;
}

window.exportAccessTerritoryCSV = function() {
  const table = document.getElementById("accessTerritoryDataTable");
  if (!table) return;
  const csvRows = Array.from(table.querySelectorAll("thead tr, tbody tr, tfoot tr")).map(tr =>
    Array.from(tr.querySelectorAll("th, td")).map(cell =>
      '"' + cell.textContent.trim().replace(/\s+/g, " ").replace(/"/g, '""') + '"'
    ).join(";")
  );
  const blob = new Blob(["﻿" + csvRows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url; a.download = "indicadores_territoriais.csv"; a.click();
  URL.revokeObjectURL(url);
};

// ── Bloco Distribuição Territorial (versão ativa — com mapa geográfico) ──────
function accessTerritory(c) {
  const rows = clusterRowsFor(c);
  if (!rows.length) return empty();
  return `<div class="chart-grid">
    <article class="visual-card"><h3>Composição da oferta por tipo de curso</h3><p class="card-subtitle">IND-67, IND-68 e IND-69 · Barras 100% por IEES no cluster ativo.</p>${stackedCourseBars(c)}</article>
    <article class="visual-card"><h3>Mapa das IEES estaduais — Ocupação de vagas</h3><p class="card-subtitle">IND-26 · Tamanho e cor dos círculos representam a taxa de ocupação de vagas por IEES no cluster ativo.</p>${paranaIeesMap(c)}</article>
  </div>
  <article class="visual-card mt-14"><h3>IND-30 e IND-31 · Ocupação diurno/noturno</h3><p class="card-subtitle">Barras agrupadas por IEES; linhas de referência calculadas no cluster.</p>${dayNightBars(c)}</article>
  ${accessTerritoryTable(rows)}`;
}

// ── Catálogo de indicadores ─────────────────────────────────────────────────
function accessInteractiveCatalog() {
  return renderCustomCatalog("access", "Acesso e Oferta");
}

function bindAccessCatalogSelect() {
  bindCustomCatalog("access");
}

// ── Brasil: Escala da oferta ────────────────────────────────────────────────
function brasilAccessEscalaBlock(c) {
  const rows = (c.display && c.display.length ? c.display : c.ref);
  const allRows = c.all && c.all.length ? c.all : rows;
  const avgVac = mean(allRows, u => u.vacancies) || 1;
  const avgCrs = mean(allRows, u => u.courses) || 1;
  const fmt = formatNumber;
  const rankingBars = (getter, avgVal, label, colorClass) => {
    const sorted = [...rows].sort((a, b) => getter(b) - getter(a));
    const max = Math.max(...sorted.map(getter), avgVal, 1);
    const refPct = clamp(avgVal / max * 100, 2, 98);
    const items = sorted.map((u, i) => {
      const v = getter(u), pct = clamp(v / max * 100, 4, 100);
      const diff = v - avgVal;
      const sign = diff >= 0 ? "+" : "";
      const diffCls = diff >= 0 ? "delta-pos" : "delta-neg";
      return `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}">
        <span class="bar-name" title="${u.nome}"><strong>${i+1}º</strong> ${u.sigla}</span>
        <span class="bar-track" style="position:relative">
          <span class="bar-fill ${colorClass}" style="width:${pct.toFixed(1)}%"></span>
          <span class="br-ref-marker" style="left:${refPct.toFixed(1)}%" title="Média nacional: ${fmt(Math.round(avgVal))}"></span>
        </span>
        <span class="bar-value">${fmt(v)} <span class="bar-delta ${diffCls}">(${sign}${fmt(Math.round(diff))})</span></span>
      </div>`;
    }).join("");
    return `<div class="brasil-avg-card"><span>Média nacional (${label})</span><strong>${fmt(Math.round(avgVal))}</strong></div>
      <div class="br-escala-legend"><span class="br-escala-leg-line"></span>Linha laranja indica a média nacional</div>
      <div class="bars">${items}</div>`;
  };
  return `<div class="chart-grid">
    <article class="visual-card"><h3>IND-11 · Total de vagas — Ranking Brasil</h3><p class="card-subtitle">Número médio de vagas ofertadas por instituição.</p>${rankingBars(u => u.vacancies, avgVac, "vagas", "br-vagas-bar")}</article>
    <article class="visual-card"><h3>IND-1 · Total de cursos — Ranking Brasil</h3><p class="card-subtitle">Número médio de cursos de graduação ofertados por instituição.</p>${rankingBars(u => u.courses, avgCrs, "cursos", "br-cursos-bar")}</article>
  </div>`;
}

// ── Brasil: Filtro de IEES para Ocupação ────────────────────────────────────
function setBrasilAccessIesFilter(id) {
  state.brasilAccessIesFilter = (state.brasilAccessIesFilter === id) ? "all" : id;
  render();
}
window.setBrasilAccessIesFilter = setBrasilAccessIesFilter;

// ── Brasil: Ocupação e Evolução ─────────────────────────────────────────────
function brasilAccessOccupancyBlock(c) {
  const allRows = c.ref && c.ref.length ? c.ref : (c.base.length ? c.base : c.all);
  const selId = state.brasilAccessIesFilter || "all";
  const filtRows = selId !== "all" ? allRows.filter(u => u.id === selId) : allRows;

  const dropOpts = allRows.map(u => `<option value="${u.id}"${u.id === selId ? " selected" : ""}>${u.sigla}</option>`).join("");
  const filterWidget = (mb) => `<div style="margin-bottom:${mb}px;display:flex;align-items:center;gap:8px;flex-wrap:wrap">
    <label style="font-size:12px;font-weight:600;color:var(--gray-600)">Filtrar IEES:</label>
    <select style="font-size:12px;padding:4px 8px;border-radius:6px;border:1px solid #d9e1ec" onchange="setBrasilAccessIesFilter(this.value)">
      <option value="all">Todas as IEES</option>${dropOpts}
    </select>
    ${selId !== "all" ? `<button type="button" style="font-size:11px;color:var(--gray-500);background:none;border:none;cursor:pointer;padding:0" onclick="setBrasilAccessIesFilter('all')">× Limpar</button>` : ""}
  </div>`;

  const avgOcc = mean(allRows, u => u.occupancy);
  const avgPct = clamp(avgOcc, 4, 100).toFixed(1);
  const sorted = [...allRows].sort((a, b) => b.occupancy - a.occupancy);

  const classOf  = diff => diff >= 0.5 ? "Acima da média" : (diff <= -0.5 ? "Abaixo da média" : "Na média");
  const classCss = diff => diff >= 0.5 ? "br-cls-above" : (diff <= -0.5 ? "br-cls-below" : "br-cls-ref");

  const avgTr = `<tr class="br-occ-avg-tr">
    <td class="br-occ-pos">—</td>
    <td class="br-occ-name"><em>Média nac.</em></td>
    <td><div class="br-occ-bar-wrap">
      <div class="br-occ-bar-fill occ-ref" style="width:${avgPct}%"></div>
      <span class="br-occ-bar-label">${formatPercent(avgOcc)}</span>
    </div></td>
    <td class="br-occ-diff">—</td>
    <td class="br-occ-cls"><span class="br-cls br-cls-ref">Referência</span></td>
  </tr>`;

  let avgInserted = false;
  const trs = sorted.map((u, i) => {
    const pct = clamp(u.occupancy, 4, 100).toFixed(1);
    const diff = u.occupancy - avgOcc;
    const sign = diff >= 0 ? "+" : "";
    const diffCls = diff >= 0 ? "delta-pos" : "delta-neg";
    const tone = occupancyTone(u.occupancy);
    const isFiltered = selId !== "all" && u.id !== selId;
    let prefix = "";
    if (!avgInserted && u.occupancy < avgOcc) { prefix = avgTr; avgInserted = true; }
    return prefix + `<tr class="${isFiltered ? "out-cluster" : ""} ${isUniSelected(c.f, u.id) ? "selected-row" : ""}">
      <td class="br-occ-pos">${i+1}º</td>
      <td class="br-occ-name" title="${u.nome}">${u.sigla}</td>
      <td><div class="br-occ-bar-wrap">
        <div class="br-occ-bar-fill ${tone}" style="width:${pct}%"></div>
        <span class="br-occ-bar-label">${formatPercent(u.occupancy)}</span>
        <span class="br-occ-avg-marker" style="left:${avgPct}%"></span>
      </div></td>
      <td class="br-occ-diff"><span class="${diffCls}">${sign}${diff.toFixed(1).replace(".",",")} p.p.</span></td>
      <td class="br-occ-cls"><span class="br-cls ${classCss(diff)}">${classOf(diff)}</span></td>
    </tr>`;
  }).join("");

  const rankingCard = `<article class="visual-card">
    <h3>Taxa de ocupação das vagas por IEES — Ranking Brasil</h3>
    <p class="card-subtitle">Verde ≥ 70%, amarelo 55–69%, vermelho &lt; 55% · delta vs. média nacional.</p>
    <div class="brasil-avg-card"><span>Média nacional (taxa de ocupação)</span><strong>${formatPercent(avgOcc)}</strong></div>
    <table class="br-occ-table">
      <thead><tr>
        <th class="br-occ-pos">Posição</th>
        <th>IEES</th>
        <th>Taxa de ocupação (%)</th>
        <th>Diferença da média</th>
        <th>Classificação</th>
      </tr></thead>
      <tbody>${trs}${!avgInserted ? avgTr : ""}</tbody>
    </table>
  </article>`;

  const tlCtx = { ...c, base: filtRows, ref: filtRows };

  return `${rankingCard}
  <div class="chart-grid mt-14">
    <article class="visual-card">
      <h3>Evolução de IND-26 · 2020–2024</h3>
      <p class="card-subtitle">Linha tracejada = média nacional por ano. Selecione uma IEES para filtrar.</p>
      ${filterWidget(10)}${occupancyTimeline(tlCtx)}
    </article>
    <article class="visual-card">
      <h3>Semáforo de ocupação por IEES</h3>
      <p class="card-subtitle">Verde ≥ 70% · Amarelo 55–69% · Vermelho &lt; 55%</p>
      <div class="signal-grid">${filtRows.map(u => signalCard(u)).join("")}</div>
    </article>
  </div>`;
}
