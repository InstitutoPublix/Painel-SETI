// ═══════════════════════════════════════════════════════════════════════════
// ABA 4 — Permanência e Formação
// Carregado após painel.js; redefine todas as funções desta aba.
// Dependências do painel.js: state, render, clusterRowsFor, explicitClusterActive,
//   isUniSelected, mean, sum, clamp, formatNumber, formatPercent, formatCurrency,
//   metricTable, empty, overviewAgg, byYear, universities, universitiesBrasil,
//   chartRowsByLocal, quartilChipStrip, panelEmploymentRate, _SCATTER_IES_COLORS
// ═══════════════════════════════════════════════════════════════════════════

// ── Tooltip de fórmula (ⓘ) — mapa de alias label → indicador do catálogo ────
// Validado no diagnóstico e confirmado via Playwright contra o texto
// REALMENTE renderizado (não o texto do código-fonte) — expandIndicatorCodes()
// (painel.js ~5009) substitui qualquer "IND-N" no DOM pelo nome cheio do
// indicador a cada render(), então o h3 "IND-5 · Taxa anual de desvinculação"
// nunca aparece assim na tela (ver README, "Tooltips de Fórmula (ⓘ)", nota
// da Aba 3 sobre esse achado).
// NÃO incluídos de propósito: "Vagas não ocupadas" (ambíguo entre ind25/ind28,
// fórmulas não batem exatamente) e "Matrículas por ingressante" (sem
// indicador correspondente no catálogo).
const ABA4_LABEL_TO_IND = {
  "Taxa anual de desvinculação discente · Taxa anual de desvinculação": "ind5",  // visual-card — pós expansão (fonte: "IND-5 · Taxa anual de desvinculação")
  "Concluintes sobre matrículas": "ind27",                                       // visual-card E .ff-kpi-label — mesma chave, texto não tem "IND-N", não é afetado pela expansão
  "Ocupação das vagas": "ind26"                                                  // .ff-kpi-label — mesmo indicador do score-card homônimo da Aba 1 (fora do mapa validado lá)
};

// ── Dispatcher principal da aba ─────────────────────────────────────────────
function retentionBlock(title, c) {
  if (title.includes("Funil"))    return retentionFunnelBlock(c);
  if (title.includes("Taxas"))    return retentionRatesBlock(c);
  if (title.includes("Evolução")) return retentionYearRankingBlock(c);
  if (title.includes("Dispersão")) return retentionScatterBlock(c);
  if (title.includes("Ranking"))  return retentionCourseRankingBlock(c);
  return empty();
}

// ── Filtro de indicadores da aba (barra "Visualizando:") ────────────────────
// Retorna o código ativo quando ele pertence ao bloco; null = mostrar tudo.
function retentionIndFilter(blockCodes) {
  const act = (state.activeIndicator && state.activeIndicator.retention) || "all";
  return act !== "all" && blockCodes.includes(act) ? act : null;
}

// ── Utilitário: subject rows (seleção consolidada, cluster ou escopo) ───────
function retentionSubjectRows(c) {
  const clusterRows = clusterRowsFor(c);
  const refLen = (c.ref && c.ref.length) || clusterRows.length;
  if (c.display && c.display.length && c.display.length < refLen) {
    const label = c.display.length === 1
      ? c.display[0].sigla
      : `${c.display.length} IEES selecionadas`;
    return { label, rows: c.display };
  }
  if (typeof isBrasilContext === "function" && isBrasilContext(c)) {
    return { label: "Brasil — IEES estaduais", rows: clusterRows };
  }
  return { label: explicitClusterActive(c) ? c.f.groupLevel : "Sistema PR", rows: clusterRows };
}

// ── 1. Funil formativo (gráfico único + painel lateral) ─────────────────────
function retentionFunnelBlock(c) {
  const subject = retentionSubjectRows(c);
  return formationFunnel(subject.label, subject.rows, c);
}

function formationFunnel(title, rows, c) {
  const a = overviewAgg(rows);
  const hasVagaMetric = c.f.vagaRecorte && c.f.vagaRecorte !== "all";
  const vagaLabel = hasVagaMetric ? (VAGA_RECORTE_FIELDS[c.f.vagaRecorte]?.label || c.f.vagaRecorte) : null;
  const vagaVacTotal = hasVagaMetric ? sum(rows, u => u.vagaMetricVacancies ?? 0) : null;
  const vagaEntrantsRows = hasVagaMetric ? rows.filter(u => u.vagaMetricEntrants != null) : [];
  const vagaEntrantsTotal = hasVagaMetric && vagaEntrantsRows.length ? sum(vagaEntrantsRows, u => u.vagaMetricEntrants) : null;
  const vagaOccRows = hasVagaMetric ? rows.filter(u => u.vagaMetricOccupancy != null) : [];
  const vagaOccAvg = hasVagaMetric && vagaOccRows.length ? mean(vagaOccRows, u => u.vagaMetricOccupancy) : null;
  const vagaEntrantsUnavailable = hasVagaMetric && vagaEntrantsTotal == null;
  const vagaOccUnavailable = hasVagaMetric && vagaOccAvg == null;

  const vacanciesRaw = hasVagaMetric ? (vagaVacTotal ?? 0) : a.vacancies;
  const entrantsRaw = hasVagaMetric ? (vagaEntrantsTotal ?? 0) : a.entrants;
  const vacancies = Math.max(vacanciesRaw, 1);
  const entrants = Math.max(entrantsRaw, 1);
  const students = Math.max(a.students, 1);
  const fmt1 = v => v.toFixed(1).replace(".", ",");

  // Conversões coerentes com os quantitativos exibidos:
  // ocupação = ingressantes/vagas; concluintes = concluintes/matrículas.
  // Matrículas ativas são estoque (todas as coortes), por isso a etapa é
  // descrita pela relação matrículas/ingressante e não por um percentual.
  // Recorte de Vagas ativo: occRate usa vagaMetricOccupancy (média por IES,
  // mesmo método de accessScale()/tabMiniKpis()) em vez de recalcular
  // entrants/vacancies — evita um 3º método de cálculo do mesmo número.
  const occRate = hasVagaMetric ? (vagaOccAvg ?? 0) : clamp(a.entrants / vacancies * 100, 0, 100);
  const gradRate = clamp(a.graduates / students * 100, 0, 100);
  const stockRatio = a.students / entrants;
  const idleVacancies = hasVagaMetric
    ? (vagaEntrantsUnavailable ? null : Math.max(vacanciesRaw - entrantsRaw, 0))
    : Math.max(a.vacancies - a.entrants, 0);

  const act = retentionIndFilter(["ind11", "ind12", "ind13", "ind14"]);
  const maxVal = Math.max(vacanciesRaw, entrantsRaw, a.students, a.graduates, 1);

  const steps = [
    { num:1, code:"IND-11", ind:"ind11", label:"Vagas ofertadas",  val:vacanciesRaw, pctTxt:"oferta do ano de referência", bg:"#0f3b68" },
    { num:2, code:"IND-13", ind:"ind13", label:"Ingressantes",     val:entrantsRaw,
      valDisplay: vagaEntrantsUnavailable ? "—" : undefined,
      pctTxt: vagaEntrantsUnavailable ? `sem ingressantes desagregados para "${vagaLabel}"` : `${fmt1(occRate)}% das vagas ocupadas`,
      bg:"#1f72b8" },
    { num:3, code:"IND-12", ind:"ind12", label:"Matrículas ativas",val:a.students,  pctTxt:"estoque de todas as coortes",            bg:"#e07b10" },
    { num:4, code:"IND-14", ind:"ind14", label:"Concluintes",      val:a.graduates, pctTxt:`${fmt1(gradRate)}% das matrículas`,      bg:"#14804a" }
  ];

  const chevron = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"/></svg>`;
  const stockRatioUnavailable = entrantsRaw === 0;
  const connectors = [
    { label: `Taxa de ocupação das vagas`, value: vagaOccUnavailable ? "Não aplicável" : `${fmt1(occRate)}%`, low: !vagaOccUnavailable && occRate < 70 },
    { label: `Matrículas por ingressante`, value: stockRatioUnavailable ? "—" : stockRatio.toFixed(1).replace(".", ","), low: false },
    { label: `Concluintes sobre matrículas`, value: `${fmt1(gradRate)}%`, low: gradRate < 15 }
  ];

  // Blocos com largura uniforme; a proporção entre etapas é mostrada pela
  // régua inferior de cada bloco (ff-meter) e pelos chips de conversão.
  let funnel = `<div class="ff-funnel">`;
  steps.forEach((s, i) => {
    const dim = act && act !== s.ind ? " ff-dim" : "";
    const meterW = clamp(s.val / maxVal * 100, 3, 100).toFixed(1);
    funnel += `<div class="ff-step${dim}" style="background:${s.bg}">
      <div class="ff-step-top"><span class="ff-num">${s.num}</span><span class="ff-code">${s.code}</span><span class="ff-label">${s.label}</span></div>
      <div class="ff-val">${s.valDisplay ?? formatNumber(s.val)}</div>
      <div class="ff-pct">${s.pctTxt}</div>
      <div class="ff-meter" title="Proporção sobre a maior etapa: ${meterW}%"><span style="width:${meterW}%"></span></div>
    </div>`;
    if (i < steps.length - 1) {
      const conn = connectors[i];
      funnel += `<div class="ff-conn ${conn.low ? "ff-conn-low" : "ff-conn-ok"}"><span class="ff-conn-chip">${chevron}${conn.label}: <strong>${conn.value}</strong></span></div>`;
    }
  });
  funnel += `</div>`;

  const ffIcons = {
    idle: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1.5"/><rect x="14" y="3" width="7" height="7" rx="1.5"/><rect x="3" y="14" width="7" height="7" rx="1.5"/><rect x="14" y="14" width="7" height="7" rx="1.5" stroke-dasharray="2.5 2.5"/></svg>`,
    gauge: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 3a9 9 0 1 0 9 9 9 9 0 0 0-9-9zm0 2a7 7 0 1 1-7 7 7 7 0 0 1 7-7z" fill="currentColor" opacity=".3"/><path d="M12 5a7 7 0 0 1 7 7h-7z" fill="currentColor"/></svg>`,
    grad: `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 4 2 9l10 5 8-4v5.5h2V9z" fill="currentColor"/><path d="M6.5 12.8V16c0 1.66 2.46 3 5.5 3s5.5-1.34 5.5-3v-3.2L12 15.5z" fill="currentColor" opacity=".65"/></svg>`,
    ratio: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 8h10M13 4l4 4-4 4"/><path d="M17 16H7M11 12l-4 4 4 4"/></svg>`
  };
  const kpi = (label, value, icon) =>
    `<div class="ff-kpi"><span class="ff-kpi-icon" aria-hidden="true">${icon}</span><div><span class="ff-kpi-label">${label}</span><strong class="ff-kpi-value">${value}</strong></div></div>`;

  const side = `<div class="ff-side">
    <div class="ff-kpi-grid">
      ${kpi("Vagas não ocupadas", idleVacancies == null ? "—" : formatNumber(idleVacancies), ffIcons.idle)}
      ${kpi("Ocupação das vagas", vagaOccUnavailable ? "Não aplicável" : fmt1(occRate) + "%", ffIcons.gauge)}
      ${kpi("Concluintes sobre matrículas", fmt1(gradRate) + "%", ffIcons.grad)}
      ${kpi("Matrículas por ingressante", stockRatioUnavailable ? "—" : stockRatio.toFixed(1).replace(".", ","), ffIcons.ratio)}
    </div>
    <div class="ff-howto">
      <strong>Como ler</strong>
      <p>O funil apresenta a jornada no sistema: da oferta de vagas ao ingresso, à permanência (matrículas ativas de todas as coortes) e à conclusão dos cursos. A régua na base de cada bloco indica a proporção da etapa sobre a maior delas.</p>
      <div class="ff-flow-legend">
        <span><i style="background:#0f3b68"></i>Oferta</span><b class="ff-flow-arrow">→</b>
        <span><i style="background:#1f72b8"></i>Ingresso</span><b class="ff-flow-arrow">→</b>
        <span><i style="background:#e07b10"></i>Permanência</span><b class="ff-flow-arrow">→</b>
        <span><i style="background:#14804a"></i>Conclusão</span>
      </div>
    </div>
  </div>`;

  return `<article class="visual-card formation-funnel-card">
    <h3>Funil formativo — ${title}</h3>
    <p class="card-subtitle">Oferta, ingresso, permanência e conclusão no recorte selecionado. Os valores refletem o filtro de IEES aplicado.</p>
    <div class="ff-layout">${funnel}${side}</div>
  </article>`;
}

// ── 2. Desvinculação e proporção anual de concluintes ───────────────────────
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
  const act = retentionIndFilter(["ind5", "ind27"]);
  const dropLegend = rateLegendChips([["occ-red", "> 10%"], ["occ-yellow", "7–10%"], ["occ-green", "≤ 7%"]]);
  const compLegend = rateLegendChips([["occ-green", "> 75%"], ["occ-yellow", "60–75%"], ["occ-red", "< 60%"]]);
  return `<div class="chart-grid">
    ${!act || act === "ind5" ? `<article class="visual-card"><h3>IND-5 · Taxa anual de desvinculação</h3><p class="card-subtitle">Ordenado do maior para o menor percentual.</p>${dropLegend}${quartilChipStrip("retentionRateBarsDropout", c.f.groupBy, c.base, c)}${retentionRateBars(c, "dropout")}</article>` : ""}
    ${!act || act === "ind27" ? `<article class="visual-card"><h3>Concluintes sobre matrículas</h3><p class="card-subtitle">Ordenado da maior para a menor proporção.</p>${compLegend}${quartilChipStrip("retentionRateBarsCompletion", c.f.groupBy, c.base, c)}${retentionRateBars(c, "completion")}</article>` : ""}
  </div>`;
}

function rateLegendChips(items) {
  return `<div class="rate-legend">${items.map(([tone, label]) =>
    `<span class="rate-legend-chip"><i class="${tone}"></i>${label}</span>`
  ).join("")}</div>`;
}

function retentionRateBars(c, metric) {
  const filterId = metric === "dropout" ? "retentionRateBarsDropout" : "retentionRateBarsCompletion";
  let rows = chartRowsByLocal(c, filterId, clusterRowsFor(c));
  const get = metric === "dropout" ? (u => u.dropout) : (u => u.completion);
  const fmt = formatPercent;
  // Referência Geral (whitelist v1): metric já é o nome do campo bruto
  // ("dropout"/"completion"), igual à chave em window.SETI_REFERENCIA_GERAL.
  const refGeral = getReferenciaGeral(metric);
  const ref = refGeral ? refGeral.valor : mean(rows, get);
  const refFlagLabel = refGeral ? `Referência (${refGeral.sigla})` : "Média do cluster";
  const sorted = [...rows].sort((a, b) => get(b) - get(a));
  const refFlag = `<div class="bars-ref-flag"><span>▾ ${refFlagLabel}: <strong>${fmt(ref)}</strong></span></div>`;
  return `${refFlag}<div class="bars overview-cluster-bars retention-bars" style="--ref-pos:${clamp(ref,0,100)}%">${sorted.map((u, index) => `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${metric === "dropout" ? dropoutTone(get(u)) : completionTone(get(u))}" style="width:${clamp(get(u),4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(get(u))} · ${index + 1}º</span></div>`).join("")}</div>`;
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
  // Filtro de indicadores da aba: ind5/ind14/ind27 selecionam a métrica do ranking
  const actEvo = retentionIndFilter(["ind5", "ind14", "ind27"]);
  const metricByInd = { ind5: "dropout", ind14: "graduates", ind27: "completion" };
  const metric = actEvo ? metricByInd[actEvo] : (state.rankingMetric || "completion");
  if (actEvo) state.rankingMetric = metric;
  const yr = state.rankingYear || "2024";
  const metricDefs = [
    { key: "completion", label: "Concluintes sobre matrículas" },
    { key: "dropout",    label: "Taxa anual de desvinculação discente" },
    { key: "graduates",  label: "Total de estudantes concluintes" }
  ];
  const metricSelectorHTML = metricDefs
    .filter(m => !actEvo || m.key === metric)
    .map(m =>
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
  // Referência Geral (whitelist v1) — dropout/completion (40 IES). Site NÃO
  // seguro para substituir avgDrop/avgComp: são divisores de quadrante e
  // também alimentam a classificação do painel de clique
  // (window.dispersaoTab4Click) — trocar por um valor fixo desequilibraria
  // a distribuição de pontos entre os 4 quadrantes já validados. Aqui a
  // referência só entra como nota textual no subtítulo.
  const refGeralDrop = getReferenciaGeral("dropout");
  const refGeralComp = getReferenciaGeral("completion");
  const maxStudents = Math.max(...rows.map(u => u.students), 1);

  // Eixos escalados ao intervalo real dos dados (com folga) em vez de 0–100%:
  // os valores ocupavam uma faixa estreita e os pontos ficavam sobrepostos,
  // principalmente no escopo Brasil.
  const xVals = rows.map(u => u.dropout).concat(avgDrop);
  const yVals = rows.map(u => u.completion).concat(avgComp);
  const xMin = Math.max(0, Math.min(...xVals) - 1.5);
  const xMax = Math.max(...xVals) + 1.5;
  const yMin = Math.max(0, Math.min(...yVals) - 3);
  const yMax = Math.min(100, Math.max(...yVals) + 3);
  const toX = v => clamp((v - xMin) / Math.max(xMax - xMin, 0.1) * 100, 2, 97);
  const toY = v => clamp((v - yMin) / Math.max(yMax - yMin, 0.1) * 100, 2, 97);

  const axPctX = toX(avgDrop).toFixed(1);
  const axPctY = toY(avgComp).toFixed(1);

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
    `<span style="position:absolute;left:6px;bottom:6px;font-size:10px;font-weight:700;color:#64748b;opacity:0.55;z-index:1;pointer-events:none;">IND-27 baixo</span>` +
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
    else if (pt.dropout < avgDrop && pt.completion < avgComp)   quad = 'IND-27 baixo';
    else                                                          quad = 'Risco crítico';
    document.getElementById('pdtQuadrante').textContent = quad;
    panelEl.style.display = 'block';
  };

  // Pontos: a sigla fica SEMPRE dentro da bolha — a bolha é dimensionada para
  // o texto caber (sem rótulos externos, que ficavam soltos/duplicados).
  // A variação de tamanho por matrículas é mantida por cima do mínimo textual.
  const dots = rows.map(u => {
    const col = _SCATTER_IES_COLORS[u.sigla] || '#4A6FA5';
    const len = Math.max(u.sigla.length, 3);
    const base = rows.length > 12 ? 34 : 42;
    const sizeVar = rows.length > 12 ? 10 : 14;
    let size = Math.round(base + u.students / maxStudents * sizeVar);
    // fonte que cabe no diâmetro; se ficar pequena demais, alarga a bolha
    let fontSize = (size - 8) / (0.60 * len);
    if (fontSize < 7.5) { fontSize = 7.5; size = Math.ceil(0.60 * len * 7.5) + 8; }
    fontSize = Math.min(fontSize, 11);
    const x = toX(u.dropout);
    const y = toY(u.completion);
    const half = Math.round(size / 2);
    const tooltip = `${u.sigla}: desvinculação ${formatPercent(u.dropout)}; concluintes/matrículas ${formatPercent(u.completion)}`;
    return `<div class="scatter-item" style="position:absolute;left:${x}%;bottom:${y}%;width:0;height:0;z-index:2;">` +
      `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" ` +
      `style="position:absolute;left:-${half}px;bottom:-${half}px;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;font-size:${fontSize.toFixed(1)}px;font-weight:700;white-space:nowrap;background:${col};border-color:${col}cc;color:#fff;text-shadow:0 1px 2px rgba(0,0,0,0.4);letter-spacing:0;" ` +
      `type="button" title="${tooltip}" aria-label="${tooltip}" onclick="window.dispersaoTab4Click('${u.sigla}')">${u.sigla}</button>` +
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
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Concluintes sobre matrículas (IND-27)</td><td style="text-align:right;font-weight:600;" id="pdtConclui"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Matrículas ativas</td><td style="text-align:right;font-weight:600;" id="pdtMatric"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Posição no quadrante</td><td style="text-align:right;font-weight:600;" id="pdtQuadrante"></td></tr>` +
    `</table>` +
    `<p style="font-size:0.75rem;color:var(--text-secondary,#999);margin:10px 0 0 0;">Fonte: INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx</p>` +
    `</div>`;

  const legend =
    `<div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;font-size:0.78rem;color:var(--text-secondary,#555);">` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(34,197,94,0.3);margin-right:4px;"></span>Alta retenção — baixa evasão e alta proporção anual</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(234,179,8,0.3);margin-right:4px;"></span>Evasão elevada — alta desvinculação com proporção anual alta</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(148,163,184,0.3);margin-right:4px;"></span>Baixa proporção anual — baixa evasão mas IND-27 abaixo da média</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(220,38,38,0.3);margin-right:4px;"></span>Risco crítico — alta evasão e baixa proporção anual</span>` +
    `</div>`;

  const fonte =
    `<p style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:10px;">` +
    `<strong>Fonte:</strong> INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx · IND-5: QT_SIT_DESVINCULADO / QT_MAT × 100 · IND-27: QT_CONC / QT_MAT × 100</p>`;

  const fmtAxis = v => v.toFixed(1).replace(".", ",") + "%";
  const axisLabels =
    `<span class="scatter-axis-tick" style="left:4px;bottom:-18px;">${fmtAxis(xMin)}</span>` +
    `<span class="scatter-axis-tick" style="right:4px;bottom:-18px;">${fmtAxis(xMax)}</span>` +
    `<span class="scatter-axis-tick" style="left:-6px;bottom:2px;transform:translateX(-100%);">${fmtAxis(yMin)}</span>` +
    `<span class="scatter-axis-tick" style="left:-6px;top:2px;transform:translateX(-100%);">${fmtAxis(yMax)}</span>`;

  return `<article class="visual-card"><h3>IND-5 × IND-27 · Dispersão formação</h3>
    <p class="card-subtitle">X = desvinculação (→ pior); Y = concluintes sobre matrículas (↑ melhor); tamanho = matrículas · Quadrantes definidos pela média do grupo${refGeralDrop || refGeralComp ? ` · Referência PR/BR: desvinculação ${refGeralDrop ? refGeralDrop.sigla + " " + formatPercent(refGeralDrop.valor) : "—"} · concluintes ${refGeralComp ? refGeralComp.sigla + " " + formatPercent(refGeralComp.valor) : "—"}` : ""} · Eixos ajustados ao intervalo dos dados · Clique em uma bolha para detalhar</p>
    <div class="retention-scatter faculty-scatter" style="background:var(--surface-1,#fff);overflow:visible;margin-left:42px;margin-bottom:20px;">${quadBg}${refLines}${qLabels}${axisLabels}${dots}</div>
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
  // Dados REAIS por grau acadêmico, agregados de u.cursosDetalhado (Base
  // Cursos - Brasil.xlsx, pipeline Seção 2b/Fase 6). Substitui o campo
  // "grauMix" (nunca populado em produção — ver diagnóstico das Fases 1-3).
  // Agregação: média de completion/dropout de cada subgrupo (cineArea ×
  // modalidade) dentro do grau, ponderada por matrículas — equivale
  // matematicamente a recalcular graduados/desvinculados ÷ matrículas no
  // agregado do grau inteiro, a partir dos percentuais já calculados por
  // subgrupo no pipeline.
  // Round 3b: cursosDetalhado passou a refletir o ano selecionado no filtro
  // de Ano (mesma mudança já documentada na Aba 3), com fallback para o ano
  // mais recente disponível por IES quando não há dado para o ano selecionado.
  if (u.cursosDetalhado && u.cursosDetalhado.length) {
    const groups = u.cursosDetalhado.filter(g => g.grauAcademico === type && g.students > 0);
    const totalStudents = sum(groups, g => g.students);
    if (totalStudents > 0) {
      const completion = sum(groups, g => (g.completion || 0) * g.students) / totalStudents;
      const dropout = sum(groups, g => (g.dropout || 0) * g.students) / totalStudents;
      return { completion: round(completion, 1), dropout: round(dropout, 1), real: true };
    }
  }
  const offset = type === "Licenciatura" ? -6 : type === "Tecnólogo" ? 2 : 4;
  const dropoutOffset = type === "Licenciatura" ? 2.4 : type === "Tecnólogo" ? -0.6 : -1.2;
  return { completion: clamp(u.completion + offset, 35, 96), dropout: clamp(u.dropout + dropoutOffset, 2, 24), real: false };
}

// Gráfico único: ranking com barra de composição (desvinculação × concluintes)
function courseTypeRanking(rows, type, c) {
  const getM = u => type === "all"
    ? { completion: u.completion, dropout: u.dropout }
    : courseTypeMetrics(u, type);
  const ranked = [...rows].sort((a, b) => getM(b).completion - getM(a).completion);
  const groupBy = c && c.f ? c.f.groupBy : "v1";
  const trs = ranked.map((u, index) => {
    const m = getM(u);
    const total = Math.max(m.dropout + m.completion, 0.1);
    const dropW = (m.dropout / total * 100).toFixed(1);
    const compW = (m.completion / total * 100).toFixed(1);
    const grp = (u.groups && u.groups[groupBy]) || "—";
    return `<tr>
      <td class="crk-pos">${index + 1}º</td>
      <td class="crk-ies"><strong>${u.sigla}</strong><span class="crk-cluster-badge" title="Cluster (${groupBy.toUpperCase()})">${grp}</span></td>
      <td><div class="crk-bar">
        <span class="crk-seg crk-drop" style="width:${dropW}%"><em>${formatPercent(m.dropout)}</em></span>
        <span class="crk-seg crk-comp" style="width:${compW}%"><em>${formatPercent(m.completion)}</em></span>
      </div></td>
      <td class="crk-result">${formatPercent(m.completion)}</td>
    </tr>`;
  }).join("");
  return `<table class="crk-table">
    <thead><tr><th>Rank</th><th>IEES · Cluster</th><th>Composição dos indicadores</th><th>Resultado</th></tr></thead>
    <tbody>${trs}</tbody>
  </table>`;
}

function retentionCourseRankingBlock(c) {
  const rows = clusterRowsFor(c);
  const types = [["all", "Todos"], ["Bacharelado", "Bacharelado"], ["Licenciatura", "Licenciatura"], ["Tecnólogo", "Tecnólogo"]];
  const active = state.retentionCourseType || "all";
  const chips = types.map(([key, label]) =>
    `<button class="qchip${key === active ? " qchip-active" : ""}" type="button"
      onclick="setRetentionCourseType('${key}')">${label}</button>`
  ).join("");
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
    'com o IND-27, que mede concluintes sobre matrículas no mesmo ano e não acompanha coortes de ingresso. ' +
    'Fonte: INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx.</div></div>';
  const chipStrip = `<div class="qchip-strip" style="margin-bottom:12px">${chips}</div>`;
  const legend = `<div class="crk-legend">
    <span><i class="crk-drop"></i>Taxa de desvinculação</span>
    <span><i class="crk-comp"></i>Concluintes sobre matrículas</span>
  </div>`;
  const heading = active === "all" ? "Todos os graus" : active;
  const hasRealGrau = active !== "all" && rows.some(u => courseTypeMetrics(u, active).real);
  const subtitle = active === "all"
    ? "Indicadores calculados sobre a totalidade dos cursos · ordenado por concluintes sobre matrículas dentro do cluster ativo."
    : hasRealGrau
      ? `Cursos de ${active} — dados reais por grau acadêmico (INEP, Base Cursos), referentes ao ano selecionado no filtro (quando disponível para a IES; caso contrário, o ano mais recente disponível) · ordenado por concluintes sobre matrículas dentro do cluster ativo.`
      : `Estimativa para cursos de ${active} · ordenado por concluintes sobre matrículas dentro do cluster ativo.`;
  return `<div class="course-ranking-filter">${chipStrip}${infoNote}
    <article class="visual-card"><h3>Ranking por curso — ${heading}</h3><p class="card-subtitle">${subtitle}</p>${legend}${courseTypeRanking(rows, active, c)}</article>
  </div>`;
}

// ── Alertas de formação — consolidados na barra lateral ─────────────────────
// Mantém a separação por aba: na aba 4 a sidebar mostra os alertas de
// formação; nas demais abas o comportamento original é preservado.
var _prevRenderSystemAlertsRetention = renderSystemAlerts;
renderSystemAlerts = function renderSystemAlertsWithRetention(c) {
  if (state.activeTab !== "retention") return _prevRenderSystemAlertsRetention(c);
  const box = document.getElementById("systemAlerts");
  if (!box) return;
  const rows = clusterRowsFor(c);
  if (!rows.length) { _prevRenderSystemAlertsRetention(c); return; }
  const avgDrop = mean(rows, u => u.dropout);
  const avgComp = mean(rows, u => u.completion);
  // Referência Geral (whitelist v1) — dropout/completion (40 IES). Site NÃO
  // seguro para virar o threshold: avgDrop+2/avgComp-10 são margens de
  // tolerância em torno da média do RECORTE (PR, 7 IES), não do melhor valor
  // nacional — usar refGeral aqui inflaria os alertas para quase todo mundo.
  // Só entra como informação adicional no texto, sem mudar quando dispara.
  const refGeralDropout = getReferenciaGeral("dropout");
  const refGeralCompletion = getReferenciaGeral("completion");
  const refDropTxt = refGeralDropout ? ` (referência nacional: ${refGeralDropout.sigla} ${formatPercent(refGeralDropout.valor)})` : "";
  const refCompTxt = refGeralCompletion ? ` (referência nacional: ${refGeralCompletion.sigla} ${formatPercent(refGeralCompletion.valor)})` : "";
  const alerts = [];
  rows.forEach(u => {
    const highDrop = u.dropout > avgDrop + 2;
    const lowCompletion = u.completion < avgComp - 10;
    if (highDrop && lowCompletion) alerts.push(["alert-danger", "⚠", u.sigla, `IND-5 alto (${formatPercent(u.dropout)}) e IND-27 baixo (${formatPercent(u.completion)}). Atenção prioritária.`]);
    else if (highDrop)        alerts.push(["alert-warn", "⚠", u.sigla, `IND-5 Desvinculação ${formatPercent(u.dropout)} — acima da média do cluster${refDropTxt}`]);
    else if (lowCompletion)   alerts.push(["alert-warn", "⚠", u.sigla, `IND-27 Concluintes ${formatPercent(u.completion)} — abaixo da média do cluster${refCompTxt}`]);
  });
  if (!alerts.length) alerts.push(["alert-ok", "✓", "Formação", "Sem alertas críticos de formação no recorte ativo."]);
  box.innerHTML = alerts.slice(0, 6).map(([cls, icon, ies, msg]) => `<div class="alert-item ${cls}"><span class="alert-icon" aria-hidden="true">${icon}</span><div class="alert-body"><strong class="alert-ies">${ies}</strong><span class="alert-msg">${msg}</span></div></div>`).join("");
};
window.renderSystemAlerts = renderSystemAlerts;

// ── Tooltip de fórmula (ⓘ) — h3 de .visual-card + .ff-kpi-label do funil ────
// Terceiro tipo de card coberto (além de .kpi-card e .score-card já usados
// nas Abas 1 e 3): .ff-kpi, o mini-KPI dentro do funil formativo. Precisa de
// um loop dedicado porque não é nem .kpi-card nem .score-card.
// Guard obrigatório: mesmas classes são reaproveitadas por outras abas.
function _injectAba4FormulaTooltips() {
  if (state.activeTab !== "retention") return;
  document.querySelectorAll(".visual-card:not([data-formula-done])").forEach(card => {
    const h3 = card.querySelector("h3");
    if (!h3) return;
    const key = ABA4_LABEL_TO_IND[h3.textContent.trim()];
    if (!key) return;
    card.setAttribute("data-formula-done", "1");
    injectFormulaTooltip(h3, key);
    injectLagTooltip(h3, key);
  });
  document.querySelectorAll(".ff-kpi:not([data-formula-done])").forEach(card => {
    const labelEl = card.querySelector(".ff-kpi-label");
    if (!labelEl) return;
    const key = ABA4_LABEL_TO_IND[labelEl.textContent.trim()];
    if (!key) return;
    card.setAttribute("data-formula-done", "1");
    injectFormulaTooltip(labelEl, key);
    injectLagTooltip(labelEl, key);
  });
}

// Mesmo padrão validado nas Abas 1 e 3: NÃO usar patch de render() (retorna
// antes do conteúdo real existir no DOM). MutationObserver direto nos
// containers reais, via document.getElementById (não via "el", que só é
// populado por cache() no listener de DOMContentLoaded — este script roda
// antes disso).
(function () {
  function start() {
    const kpiGrid = document.getElementById("kpiGrid");
    const tabContent = document.getElementById("tabContent");
    if (!kpiGrid && !tabContent) return;
    const observer = new MutationObserver(function () { _injectAba4FormulaTooltips(); });
    if (kpiGrid) observer.observe(kpiGrid, { childList: true });
    if (tabContent) observer.observe(tabContent, { childList: true });
  }
  start();
  _injectAba4FormulaTooltips();
}());
