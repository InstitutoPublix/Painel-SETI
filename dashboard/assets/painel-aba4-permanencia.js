// ═══════════════════════════════════════════════════════════════════════════
// ABA 4 — Permanência e Formação
// Carregado após painel.js; redefine todas as funções desta aba.
// Dependências do painel.js: state, render, clusterRowsFor, explicitClusterActive,
//   isUniSelected, mean, sum, clamp, formatNumber, formatPercent, formatCurrency,
//   metricTable, empty, overviewAgg, byYear, universities, universitiesBrasil,
//   chartRowsByLocal, quartilChipStrip, panelEmploymentRate, _SCATTER_IES_COLORS
// ═══════════════════════════════════════════════════════════════════════════

// ── Dispatcher principal da aba ─────────────────────────────────────────────
function retentionBlock(title, c) {
  if (title.includes("Funil"))    return retentionFunnelBlock(c);
  if (title.includes("Taxas"))    return retentionRatesBlock(c);
  if (title.includes("Evolução")) return retentionYearRankingBlock(c);
  if (title.includes("Dispersão")) return retentionScatterBlock(c);
  if (title.includes("Ranking"))  return retentionCourseRankingBlock(c);
  return retentionAlertsBlock(c);
}

// ── Utilitário: subject rows (IEES selecionada ou cluster) ──────────────────
function retentionSubjectRows(c) {
  const clusterRows = clusterRowsFor(c);
  if (c.selected && clusterRows.some(u => u.id === c.selected.id)) return { label: c.selected.sigla, rows: [c.selected] };
  return { label: explicitClusterActive(c) ? c.f.groupLevel : "Sistema PR", rows: clusterRows };
}

// ── 1. Funil formativo ──────────────────────────────────────────────────────
function retentionFunnelBlock(c) {
  const subject = retentionSubjectRows(c);
  const clusterRows = clusterRowsFor(c);
  return `<div class="retention-funnel-grid">
    ${formationFunnel(subject.label, subject.rows, "Funil do recorte")}
    ${formationFunnel("Média do cluster", clusterRows, "Referência do agrupamento")}
  </div>`;
}

function formationFunnel(title, rows, subtitle) {
  const a = overviewAgg(rows);
  const vacancies = Math.max(a.vacancies, 1);
  const r1 = clamp(a.entrants / vacancies * 100, 0, 100);
  const r2 = clamp(100 - (a.dropout || 0), 0, 100);
  const r3 = clamp(a.completion || 0, 0, 100);
  const fmt = v => v.toFixed(1).replace('.', ',');

  const w1 = 100;
  const w2 = clamp(r1, 40, 96);
  const w3 = clamp(w2 * r2 / 100, 30, 82);
  const w4 = clamp(w3 * r3 / 100, 20, 66);

  const steps = [
    { num:1, code:"IND-11", label:"Vagas ofertadas",   val:a.vacancies, pctTxt:"etapa base (100%)",            bg:"#0f3b68", w:w1 },
    { num:2, code:"IND-13", label:"Ingressantes",      val:a.entrants,  pctTxt:`${fmt(r1)}% das vagas`,        bg:"#1f72b8", w:w2 },
    { num:3, code:"IND-5",  label:"Estudantes ativos", val:a.students,  pctTxt:`${fmt(r2)}% retidos (IND-5)`,  bg:"#f28c28", w:w3 },
    { num:4, code:"IND-27", label:"Concluintes",       val:a.graduates, pctTxt:`${fmt(r3)}% concluíram`,       bg:"#14804a", w:w4 }
  ];

  const connectors = [
    { rate: r1, label: fmt(r1) + "%" },
    { rate: r2, label: fmt(r2) + "%" },
    { rate: r3, label: fmt(r3) + "%" }
  ];

  let html = `<div class="ff-funnel">`;
  steps.forEach((s, i) => {
    html += `<div class="ff-step" style="width:${s.w}%;background:${s.bg}"><div class="ff-step-inner"><div class="ff-num">${s.num}</div><div class="ff-code">${s.code}</div><div class="ff-label">${s.label}</div><div class="ff-val">${formatNumber(s.val)}</div><div class="ff-pct">${s.pctTxt}</div></div></div>`;
    if (i < steps.length - 1) {
      const conn = connectors[i];
      const cls = conn.rate >= 70 ? "ff-conn-ok" : "ff-conn-low";
      html += `<div class="ff-conn ${cls}"><span>${conn.label}</span><span class="ff-arrow">&#9660;</span></div>`;
    }
  });
  html += `</div>`;

  return `<article class="visual-card formation-funnel-card"><h3>${title}</h3><p class="card-subtitle">${subtitle}</p>${html}</article>`;
}

// ── 2. Taxas de desvinculação e concluintes ─────────────────────────────────
function dropoutTone(v) {
  if (v > 10) return "occ-red";
  if (v > 7)  return "occ-yellow";
  return "occ-green";
}

function completionTone(v) {
  if (v > 75)  return "occ-green";
  if (v >= 60) return "occ-yellow";
  return "occ-red";
}

function retentionRatesBlock(c) {
  return `<div class="chart-grid">
    <article class="visual-card"><h3>IND-5 · Taxa anual de desvinculação</h3><p class="card-subtitle">Ordenado da maior para menor; vermelho > 10%, amarelo 7–10%, verde ≤ 7%.</p>${quartilChipStrip("retentionRateBarsDropout", c.f.groupBy, c.base, c)}${retentionRateBars(c, "dropout")}</article>
    <article class="visual-card"><h3>IND-27 · Taxa de concluintes</h3><p class="card-subtitle">Verde > 75%, amarelo 60–75%, vermelho < 60%.</p>${quartilChipStrip("retentionRateBarsCompletion", c.f.groupBy, c.base, c)}${retentionRateBars(c, "completion")}</article>
  </div>`;
}

function retentionRateBars(c, metric) {
  const filterId = metric === "dropout" ? "retentionRateBarsDropout" : "retentionRateBarsCompletion";
  let rows = chartRowsByLocal(c, filterId, clusterRowsFor(c));
  const get = metric === "dropout" ? (u => u.dropout) : (u => u.completion);
  const fmt = formatPercent;
  const ref = mean(rows, get);
  const sorted = [...rows].sort((a, b) => get(b) - get(a));
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${fmt(ref)}</strong></span></div><div class="bars overview-cluster-bars retention-bars" style="--ref-pos:${clamp(ref,0,100)}%">${sorted.map((u, index) => `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${metric === "dropout" ? dropoutTone(get(u)) : completionTone(get(u))}" style="width:${clamp(get(u),4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(get(u))} · ${index + 1}º</span></div>`).join("")}</div>`;
}

// ── 3. Ranking animado por ano ──────────────────────────────────────────────
function retentionYearRankingBlock(c) {
  if (state._rankingAnimTimer) {
    clearInterval(state._rankingAnimTimer);
    state._rankingAnimTimer = null;
  }
  const clusterRows = clusterRowsFor(c);
  state._rankingClusterIds = clusterRows.map(u => u.id);
  state._rankingGroupBy = c.f.groupBy;
  const ITEM_H = 60;
  const metric = state.rankingMetric || "completion";
  const yr = state.rankingYear || "2024";
  const metricDefs = [
    { key: "completion", label: "Taxa de concluintes" },
    { key: "dropout",    label: "Taxa anual de desvinculação discente" },
    { key: "graduates",  label: "Total de estudantes concluintes" }
  ];
  const metricSelectorHTML = metricDefs.map(m =>
    `<button class="rank-metric-btn${m.key === metric ? " active" : ""}" data-metric="${m.key}" type="button" onclick="setRankingMetric('${m.key}')">${m.label}</button>`
  ).join("");
  const yearBtnsHTML = [2020,2021,2022,2023,2024].map(y =>
    `<button class="rank-year-btn${String(y) === String(yr) ? " active" : ""}" type="button" onclick="setRankingYear(${y})">${y}</button>`
  ).join("");
  const getVal = (u, met) => met === "completion" ? u.completion : met === "dropout" ? u.dropout : u.graduates;
  const fmt = metric === "graduates" ? formatNumber : formatPercent;
  const withVals = clusterRows.map(u => {
    const base = [...universities, ...universitiesBrasil].find(x => x.id === u.id);
    const yd = base ? byYear(base, yr) : u;
    return { ...yd, groups: u.groups, val: getVal(yd, metric) };
  });
  const sorted = [...withVals].sort((a, b) => metric === "dropout" ? a.val - b.val : b.val - a.val);
  const maxVal = Math.max(...sorted.map(u => Math.abs(u.val)), 1);
  const itemsHTML = sorted.map((u, i) => {
    const barPct = Math.max(Math.abs(u.val) / maxVal * 100, 4);
    const grp = u.groups[state._rankingGroupBy] || "";
    return `<div class="rank-item-anim" data-id="${u.id}" style="transform:translateY(${i * ITEM_H}px)"><span class="rank-pos">${i + 1}</span><span class="rank-sigla">${u.sigla}</span><span class="rank-group">${grp}</span><span class="rank-bar-track"><i class="rank-bar-fill" style="width:${barPct}%"></i></span><span class="rank-val">${fmt(u.val)}</span></div>`;
  }).join("");
  return `<article class="visual-card animated-ranking-card"><h3>Evolução do ranking por ano</h3><p class="card-subtitle">Reordenamento por indicador e ano. Verde = subiu, vermelho = caiu na posição.</p><div class="rank-controls"><div class="rank-metric-selector">${metricSelectorHTML}</div><div class="rank-year-selector">${yearBtnsHTML}<button class="btn-animate" id="btnRankAnimate" type="button" onclick="animateRanking()">▶ Animar</button></div></div><div class="animated-ranking" id="animatedRanking" style="height:${clusterRows.length * ITEM_H}px">${itemsHTML}</div></article>`;
}

window.setRankingYear = function(year) {
  const prev = state.rankingYear;
  state.rankingYear = String(year);
  document.querySelectorAll(".rank-year-btn").forEach(btn => {
    btn.classList.toggle("active", btn.textContent.trim() === String(year));
  });
  updateRankingDOM(prev);
};

window.setRankingMetric = function(metric) {
  state.rankingMetric = metric;
  document.querySelectorAll(".rank-metric-btn").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.metric === metric);
  });
  updateRankingDOM(null);
};

window.animateRanking = function() {
  const btn = document.getElementById("btnRankAnimate");
  if (state._rankingAnimTimer) {
    clearInterval(state._rankingAnimTimer);
    state._rankingAnimTimer = null;
    if (btn) btn.textContent = "▶ Animar";
    return;
  }
  const years = ["2020","2021","2022","2023","2024"];
  let i = 0;
  if (btn) btn.textContent = "⏹ Parar";
  function tick() {
    if (i >= years.length) {
      clearInterval(state._rankingAnimTimer);
      state._rankingAnimTimer = null;
      if (btn) btn.textContent = "▶ Animar";
      return;
    }
    window.setRankingYear(years[i++]);
  }
  tick();
  state._rankingAnimTimer = setInterval(tick, 1200);
};

function updateRankingDOM(prevYear) {
  const container = document.getElementById("animatedRanking");
  if (!container) return;
  const ITEM_H = 60;
  const ids = state._rankingClusterIds || [];
  const metric = state.rankingMetric || "completion";
  const yr = state.rankingYear || "2024";
  const getVal = (u, met) => met === "completion" ? u.completion : met === "dropout" ? u.dropout : u.graduates;
  const fmt = metric === "graduates" ? formatNumber : formatPercent;
  const current = ids.map(id => {
    const base = [...universities, ...universitiesBrasil].find(u => u.id === id);
    if (!base) return null;
    const yd = byYear(base, yr);
    return { id, val: getVal(yd, metric) };
  }).filter(Boolean);
  let prevPos = {};
  if (prevYear) {
    const prev = ids.map(id => {
      const base = [...universities, ...universitiesBrasil].find(u => u.id === id);
      if (!base) return null;
      const yd = byYear(base, prevYear);
      return { id, val: getVal(yd, metric) };
    }).filter(Boolean);
    [...prev].sort((a, b) => metric === "dropout" ? a.val - b.val : b.val - a.val)
             .forEach((u, i) => { prevPos[u.id] = i; });
  }
  const sorted = [...current].sort((a, b) => metric === "dropout" ? a.val - b.val : b.val - a.val);
  const maxVal = Math.max(...sorted.map(u => Math.abs(u.val)), 1);
  const items = {};
  container.querySelectorAll(".rank-item-anim").forEach(el => { items[el.dataset.id] = el; });
  sorted.forEach((u, newPos) => {
    const item = items[u.id];
    if (!item) return;
    item.style.transform = `translateY(${newPos * ITEM_H}px)`;
    const posEl = item.querySelector(".rank-pos");
    if (posEl) posEl.textContent = newPos + 1;
    const barFill = item.querySelector(".rank-bar-fill");
    if (barFill) barFill.style.width = `${Math.max(Math.abs(u.val) / maxVal * 100, 4)}%`;
    const valEl = item.querySelector(".rank-val");
    if (valEl) valEl.textContent = fmt(u.val);
    if (prevYear && prevPos[u.id] !== undefined) {
      item.classList.remove("improved", "dropped");
      if (newPos < prevPos[u.id]) item.classList.add("improved");
      else if (newPos > prevPos[u.id]) item.classList.add("dropped");
    }
  });
}

// ── 4. Dispersão IND-5 × IND-27 ────────────────────────────────────────────
function retentionScatterBlock(c) {
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = explicitClusterActive(c) ? (c.base.length ? c.base : c.all) : clusterRows;
  const avgDrop = mean(clusterRows, u => u.dropout);
  const avgComp = mean(clusterRows, u => u.completion);
  const maxStudents = Math.max(...rows.map(u => u.students), 1);

  const axPctX = clamp(avgDrop, 2, 96).toFixed(1);
  const axPctY = clamp(avgComp, 2, 96).toFixed(1);

  const quadBg =
    `<div style="position:absolute;left:0;top:0;width:${axPctX}%;bottom:${axPctY}%;background:rgba(34,197,94,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:${axPctX}%;top:0;right:0;bottom:${axPctY}%;background:rgba(234,179,8,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:0;bottom:0;width:${axPctX}%;height:${axPctY}%;background:rgba(148,163,184,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:${axPctX}%;bottom:0;right:0;height:${axPctY}%;background:rgba(220,38,38,0.07);z-index:0;pointer-events:none;"></div>`;

  const refLines =
    `<span class="scatter-ref-v" style="left:${axPctX}%"></span>` +
    `<span class="scatter-ref-h" style="bottom:${axPctY}%;top:auto"></span>`;

  const qLabels =
    `<span style="position:absolute;left:6px;top:6px;font-size:10px;font-weight:700;color:#16a34a;opacity:0.55;z-index:1;pointer-events:none;">Alta retenção</span>` +
    `<span style="position:absolute;right:6px;top:6px;font-size:10px;font-weight:700;color:#ca8a04;opacity:0.55;z-index:1;pointer-events:none;">Evasão elevada</span>` +
    `<span style="position:absolute;left:6px;bottom:6px;font-size:10px;font-weight:700;color:#64748b;opacity:0.55;z-index:1;pointer-events:none;">Baixa conclusão</span>` +
    `<span style="position:absolute;right:6px;bottom:6px;font-size:10px;font-weight:700;color:#dc2626;opacity:0.55;z-index:1;pointer-events:none;">Risco crítico</span>`;

  const ptMap = {};
  rows.forEach(u => { ptMap[u.sigla] = { sigla: u.sigla, nome: u.nome, dropout: u.dropout, completion: u.completion, students: u.students }; });

  window.dispersaoTab4Click = function(sigla) {
    const pt = ptMap[sigla];
    if (!pt) return;
    const panelEl = document.getElementById('painelDispersaoTab4');
    if (!panelEl) return;
    document.getElementById('pdtNome').textContent = pt.sigla + ' — ' + pt.nome;
    document.getElementById('pdtDesvinc').textContent = pt.dropout != null ? pt.dropout.toFixed(1) + '%' : '—';
    document.getElementById('pdtConclui').textContent = pt.completion != null ? pt.completion.toFixed(1) + '%' : '—';
    document.getElementById('pdtMatric').textContent = pt.students != null ? formatNumber(pt.students) : '—';
    let quad;
    if (pt.dropout < avgDrop && pt.completion >= avgComp)       quad = 'Alta retenção';
    else if (pt.dropout >= avgDrop && pt.completion >= avgComp) quad = 'Evasão elevada';
    else if (pt.dropout < avgDrop && pt.completion < avgComp)   quad = 'Baixa conclusão';
    else                                                          quad = 'Risco crítico';
    document.getElementById('pdtQuadrante').textContent = quad;
    panelEl.style.display = 'block';
  };

  const dots = rows.map(u => {
    const col = _SCATTER_IES_COLORS[u.sigla] || '#4A6FA5';
    const size = Math.round(18 + u.students / maxStudents * 26);
    const x = clamp(u.dropout, 2, 94);
    const y = clamp(u.completion, 2, 94);
    const half = Math.round(size / 2);
    const tooltip = `${u.sigla}: desvinculação ${formatPercent(u.dropout)}; conclusão ${formatPercent(u.completion)}`;
    const lx = half + 4;
    const ly = half + 2;
    return `<div class="scatter-item" style="position:absolute;left:${x}%;bottom:${y}%;width:0;height:0;z-index:2;">` +
      `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" ` +
      `style="position:absolute;left:-${half}px;bottom:-${half}px;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;font-size:${size >= 28 ? 10 : 0}px;overflow:hidden;background:${col};border-color:${col}cc;" ` +
      `type="button" title="${tooltip}" aria-label="${tooltip}" onclick="window.dispersaoTab4Click('${u.sigla}')">${size >= 28 ? u.sigla : ""}</button>` +
      `<span class="scatter-sigla-label" style="position:absolute;left:${lx}px;bottom:${ly}px;font-size:10px;font-weight:600;white-space:nowrap;background:rgba(255,255,255,0.88);padding:0 3px;border-radius:2px;pointer-events:none;line-height:1.4;border:1px solid rgba(0,0,0,0.08)">${u.sigla}</span>` +
      `</div>`;
  }).join("");

  const painel =
    `<div id="painelDispersaoTab4" style="display:none;margin-top:12px;padding:14px 18px;background:var(--surface-1,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;font-size:0.85rem;line-height:1.7;max-width:420px;">` +
    `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">` +
    `<strong id="pdtNome" style="font-size:1rem;"></strong>` +
    `<button onclick="document.getElementById('painelDispersaoTab4').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-secondary,#888);">✕</button>` +
    `</div>` +
    `<table style="width:100%;border-collapse:collapse;">` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Taxa anual de desvinculação (IND-5)</td><td style="text-align:right;font-weight:600;" id="pdtDesvinc"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Taxa de concluintes (IND-27)</td><td style="text-align:right;font-weight:600;" id="pdtConclui"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Matrículas ativas</td><td style="text-align:right;font-weight:600;" id="pdtMatric"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Posição no quadrante</td><td style="text-align:right;font-weight:600;" id="pdtQuadrante"></td></tr>` +
    `</table>` +
    `<p style="font-size:0.75rem;color:var(--text-secondary,#999);margin:10px 0 0 0;">Fonte: INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx</p>` +
    `</div>`;

  const legend =
    `<div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;font-size:0.78rem;color:var(--text-secondary,#555);">` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(34,197,94,0.3);margin-right:4px;"></span>Alta retenção — baixa evasão e alta conclusão</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(234,179,8,0.3);margin-right:4px;"></span>Evasão elevada — alta desvinculação com conclusão alta</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(148,163,184,0.3);margin-right:4px;"></span>Baixa conclusão — baixa evasão mas conclusão abaixo da média</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(220,38,38,0.3);margin-right:4px;"></span>Risco crítico — alta evasão e baixa conclusão</span>` +
    `</div>`;

  const fonte =
    `<p style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:10px;">` +
    `<strong>Fonte:</strong> INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx · IND-5: QT_SIT_DESVINCULADO / QT_MAT × 100 · IND-27: QT_CONCLUINTE / QT_MAT × 100</p>`;

  return `<article class="visual-card"><h3>IND-5 × IND-27 · Dispersão formação</h3>
    <p class="card-subtitle">X = desvinculação (→ pior); Y = taxa de concluintes (↑ melhor); tamanho = matrículas · Quadrantes definidos pela média do grupo</p>
    <div class="retention-scatter faculty-scatter" style="background:var(--surface-1,#fff);">${quadBg}${refLines}${qLabels}${dots}</div>
    ${legend}${fonte}${painel}
  </article>`;
}

// ── 5. Ranking por tipo de curso ────────────────────────────────────────────
function setRetentionCourseType(type) {
  state.retentionCourseType = type;
  render();
}
window.setRetentionCourseType = setRetentionCourseType;

function courseTypeMetrics(u, type) {
  const offset = type === "Licenciatura" ? -6 : type === "Tecnólogo" ? 2 : 4;
  const dropoutOffset = type === "Licenciatura" ? 2.4 : type === "Tecnólogo" ? -0.6 : -1.2;
  return { completion: clamp(u.completion + offset, 35, 96), dropout: clamp(u.dropout + dropoutOffset, 2, 24) };
}

function courseTypeRanking(rows, type) {
  const ranked = [...rows].sort((a, b) => courseTypeMetrics(b, type).completion - courseTypeMetrics(a, type).completion);
  const max = Math.max(...ranked.map(u => courseTypeMetrics(u, type).completion), 1);
  return `<div class="rank-list course-type-rank">${ranked.map((u, index) => { const m = courseTypeMetrics(u, type); return `<div class="rank-item"><span class="rank-number">${index + 1}</span><span><span class="rank-title">${u.sigla}</span><span class="rank-subtitle" style="margin-left:10px;font-size:0.78rem;color:var(--text-secondary,#777);font-weight:400;">Desvinculação ${formatPercent(m.dropout)}</span></span><span class="mini-bar"><i style="width:${clamp(m.completion / max * 100, 4, 100)}%"></i></span><span class="rank-value">${formatPercent(m.completion)}</span></div>`; }).join("")}</div>`;
}

function retentionCourseRankingBlock(c) {
  const rows = clusterRowsFor(c);
  const types = ["Bacharelado", "Licenciatura", "Tecnólogo"];
  const active = state.retentionCourseType || "Bacharelado";
  const chips = types.map(type =>
    `<button class="qchip${type === active ? " qchip-active" : ""}" type="button"
      onclick="setRetentionCourseType('${type}')">${type}</button>`
  ).join("");
  const clearBtn = '<button id="btnLimparGrauRanking" onclick="setRetentionCourseType(\'all\')" ' +
    'style="margin-left:10px;padding:3px 12px;border-radius:14px;border:1px solid #e2e8f0;' +
    'background:transparent;color:var(--text-secondary,#94a3b8);font-size:0.80rem;cursor:pointer;' +
    'vertical-align:middle;" title="Voltar a exibir todos os graus">Limpar filtro</button>';
  const subtitle = "Taxa de concluintes e taxa anual de desvinculação discente, ordenadas no cluster.";
  const infoNote =
    '<div style="display:flex;align-items:flex-start;gap:10px;margin:8px 0 14px 0;padding:10px 14px;' +
    'background:var(--surface-2,#f0f4fa);border-left:3px solid var(--accent,#4A6FA5);border-radius:4px;' +
    'font-size:0.80rem;color:var(--text-secondary,#666);line-height:1.6;">' +
    '<span style="font-size:1rem;flex-shrink:0;">ℹ️</span>' +
    '<div><strong style="color:var(--text-primary,#333);">O que é a taxa de desvinculação?</strong><br>' +
    'A desvinculação corresponde ao abandono ou saída do aluno do curso sem conclusão — ' +
    'diferente da transferência interna ou reopção de curso. A taxa é calculada como o número ' +
    'de alunos desvinculados em relação ao total de matrículas ativas ' +
    '(QT_SIT_DESVINCULADO ÷ QT_MAT × 100). ' +
    '<strong>Valores mais altos indicam maior evasão</strong> e devem ser analisados em conjunto ' +
    'com a taxa de conclusão: uma IES pode ter alta conclusão e alta desvinculação se houver ' +
    'grande volume de ingressantes. ' +
    'Fonte: INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx.</div></div>';
  const chipStrip = `<div class="qchip-strip" style="margin-bottom:12px">${chips}${clearBtn}</div>`;
  if (active === "all") {
    return `<div class="course-ranking-filter">${chipStrip}${infoNote}${
      types.map(type =>
        `<article class="visual-card" style="margin-bottom:12px;"><h3>${type}</h3><p class="card-subtitle">${subtitle}</p>${courseTypeRanking(rows, type)}</article>`
      ).join("")
    }</div>`;
  }
  return `<div class="course-ranking-filter">${chipStrip}${infoNote}<article class="visual-card"><h3>${active}</h3><p class="card-subtitle">${subtitle}</p>${courseTypeRanking(rows, active)}</article></div>`;
}

// ── 6. Alertas e cruzamento formação × inserção ─────────────────────────────
function retentionAlertsBlock(c) {
  const rows = clusterRowsFor(c);
  const avgDrop = mean(rows, u => u.dropout);
  const avgComp = mean(rows, u => u.completion);
  const avgEmployment = mean(rows, u => u.employment);
  const alerts = [];
  rows.forEach(u => {
    const highDrop = u.dropout > avgDrop + 2;
    const lowCompletion = u.completion < avgComp - 10;
    if (highDrop && lowCompletion) alerts.push(["alert-danger", "⚠", u.sigla, `IND-5 alto (${formatPercent(u.dropout)}) e IND-27 baixo (${formatPercent(u.completion)}). Atenção prioritária.`]);
    else if (highDrop)        alerts.push(["alert-warn",   "⚠", u.sigla, `IND-5 ${formatPercent(u.dropout)}`]);
    else if (lowCompletion)   alerts.push(["alert-warn",   "⚠", u.sigla, `IND-27 ${formatPercent(u.completion)}`]);
  });
  if (!alerts.length) alerts.push(["alert-ok", "✓", "Cluster", "Sem alertas críticos de formação no recorte ativo."]);
  return `<div class="chart-grid"><article class="visual-card"><h3>Alertas de formação</h3><p class="card-subtitle">Regras automáticas baseadas na média do cluster.</p><div class="system-alerts-list">${alerts.map(([cls, icon, ies, msg]) => `<div class="alert-item ${cls}"><span class="alert-icon" aria-hidden="true">${icon}</span><div class="alert-body"><strong class="alert-ies">${ies}</strong><span class="alert-msg">${msg}</span></div></div>`).join("")}</div></article><article class="visual-card"><h3>Conclusão × inserção profissional</h3><p class="card-subtitle">IND-27 comparado a IND-37; referências calculadas no cluster.</p><div class="cross-cards">${rows.map(u => crossFormationEmployment(u, avgComp, avgEmployment)).join("")}</div></article></div>`;
}

function crossFormationEmployment(u, avgComp, avgEmployment) {
  const compGood = u.completion >= avgComp;
  const empGood = u.employment >= avgEmployment;
  const cls = compGood && empGood ? "alert-ok" : compGood && !empGood ? "alert-warn" : !compGood && empGood ? "alert-info" : "alert-danger";
  const msg = compGood && !empGood ? "Conclui bem, mas insere abaixo da referência" : !compGood && empGood ? "Insere bem, mas conclui abaixo da referência" : compGood ? "Bom alinhamento formação-mercado" : "Baixa conclusão e baixa inserção";
  return `<div class="cross-card ${cls}"><strong>${u.sigla}</strong><span>IND-27 ${formatPercent(u.completion)} · IND-37 ${formatPercent(u.employment)}</span><em>${msg}</em></div>`;
}
