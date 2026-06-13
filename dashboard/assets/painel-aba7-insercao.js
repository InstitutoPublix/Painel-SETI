/* ==========================================================================
   ABA 7 — Inserção Profissional
   Redefine as funções desta aba carregando-as após painel.js.
   ========================================================================== */

function employmentBlock(title, c) {
  if (title.includes("Inserção geral")) return employmentGeneralBlock(c);
  if (title.includes("Inserção PR")) return employmentRegionBlock(c);
  if (title.includes("CBO2")) return employmentCboSalaryBlock(c);
  if (title.includes("Destino")) return employmentDestinationBlock(c);
  if (title.includes("Por curso")) return employmentCourseBlock(c);
  return employmentOccupationBlock(c);
}

// Restringe um conjunto de linhas à seleção do filtro de IEES (c.display).
function employmentApplySelection(c, rows) {
  if (!c.display || !c.display.length || c.display.length === rows.length) return rows;
  const ids = new Set(c.display.map(u => u.id));
  const filtered = rows.filter(u => ids.has(u.id));
  return filtered.length ? filtered : rows;
}

function employmentRows(c) {
  const rows = c.base.length ? c.base : (c.ref.length ? c.ref : c.all);
  return employmentApplySelection(c, rows);
}

function employmentClusterRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : employmentRows(c);
}

function employmentChartRows(c) {
  return employmentApplySelection(c, c.base.length ? c.base : c.all);
}

function employmentMetrics(u) {
  let cohort = "all";
  try { cohort = typeof filters === "function" ? (filters().cohort || "all") : "all"; } catch (err) { cohort = "all"; }
  const real = typeof getRealIndicators === "function" ? getRealIndicators(u.sigla, cohort) : null;
  const hasRealEgress = real && Number(real.ind33) > 0;
  const totalEgress = hasRealEgress ? Math.max(1, Math.round(Number(real.ind33))) : Math.max(80, Math.round(u.graduates * 1.18 + u.entrants * 0.18));
  const prRate = hasRealEgress && real.ind37 != null ? clamp(Number(real.ind37) * 100, 0, 100) : clamp(u.employment, 24, 95);
  const southRate = hasRealEgress && real.ind35 != null ? clamp(Number(real.ind35) * 100, 0, 100) : (u.insertionRatePR!=null?u.insertionRatePR:clamp(prRate + 5 + (u.territory > 75 ? 1.8 : 0), 30, 98));
  const cbo2Rate = hasRealEgress && real.ind39 != null ? clamp(Number(real.ind39) * 100, 0, 100) : clamp(prRate - 5 + (u.doctors - 80) * 0.08, 34, 90);
  const prInserted = hasRealEgress && real.ind36 != null ? Math.round(Number(real.ind36)) : Math.round(totalEgress * prRate / 100);
  const southInserted = hasRealEgress && real.ind34 != null ? Math.round(Number(real.ind34)) : Math.round(totalEgress * southRate / 100);
  const cbo2Inserted = hasRealEgress && real.ind38 != null ? Math.round(Number(real.ind38)) : Math.round(prInserted * cbo2Rate / 100);
  const sedeBoost = String(u.groups.v3 || "").includes("Sede") ? 7 : 0;
  const localRate = hasRealEgress && real.ind42 != null ? clamp(Number(real.ind42) * 100, 0, 100) : clamp(prRate - 18 - u.territory * 0.055 + sedeBoost, 18, 64);
  const localInserted = hasRealEgress && real.ind41 != null ? Math.round(Number(real.ind41)) : Math.round(totalEgress * localRate / 100);
  const destinationMunicipalities = u.cbo2MunDestino!=null?u.cbo2MunDestino:(u.egressosMunicipios!=null?u.egressosMunicipios:Math.max(5, Math.round(5 + u.territory / 4 + u.courses / 34)));
  const territorialDispersion = clamp(16 + u.territory * 0.58, 16, 88);
  const courseDestinationMunicipalities = Math.max(3, Math.round(destinationMunicipalities / Math.max(u.courses / 95, 1.6)));
  // IND-76: ocupações CBO distintas reais (RAIS via pipeline); fórmula é fallback
  const occupationalDiversity = u.cbo2Diversity!=null?u.cbo2Diversity:Math.max(8, Math.round(8 + u.courses / 24 + u.doctors / 13));
  const salary = hasRealEgress && real.ind40 != null ? Number(real.ind40) : u.salary;
  return { totalEgress, southInserted, southRate, prInserted, prRate, cbo2Inserted, cbo2Rate, salary, localInserted, localRate, destinationMunicipalities, territorialDispersion, courseDestinationMunicipalities, occupationalDiversity };
}

function employmentAgg(rows) {
  const safeRows = rows.length ? rows : universities;
  const totalEgress = sum(safeRows, u => employmentMetrics(u).totalEgress);
  const prInserted = sum(safeRows, u => employmentMetrics(u).prInserted);
  const southInserted = sum(safeRows, u => employmentMetrics(u).southInserted);
  const cbo2Inserted = sum(safeRows, u => employmentMetrics(u).cbo2Inserted);
  const localInserted = sum(safeRows, u => employmentMetrics(u).localInserted);
  return {
    totalEgress,
    prInserted,
    prRate: totalEgress ? prInserted / totalEgress * 100 : 0,
    southInserted,
    southRate: totalEgress ? southInserted / totalEgress * 100 : 0,
    cbo2Inserted,
    cbo2Rate: prInserted ? cbo2Inserted / prInserted * 100 : 0,
    salary: wavg(safeRows, u => employmentMetrics(u).salary, u => Math.max(employmentMetrics(u).cbo2Inserted, 1)),
    localInserted,
    localRate: totalEgress ? localInserted / totalEgress * 100 : 0,
    territorialDispersion: mean(safeRows, u => employmentMetrics(u).territorialDispersion),
    destinationMunicipalities: Math.round(mean(safeRows, u => employmentMetrics(u).destinationMunicipalities)),
    occupationalDiversity: Math.round(mean(safeRows, u => employmentMetrics(u).occupationalDiversity))
  };
}

function employmentTarget(c) {
  const rows = employmentRows(c);
  const clusterRows = employmentClusterRows(c);
  const targetRows = c.selected ? [c.selected] : clusterRows;
  return { rows, targetRows, target: employmentAgg(targetRows), cluster: employmentAgg(clusterRows), label: c.selected ? c.selected.sigla : (explicitClusterActive(c) ? c.group : "Sistema estadual") };
}

/* ACTIVE definition (line 7415 in painel.js overrides line 7051) */
function employmentGeneralBlock(c) {
  const baseRows = employmentRows(c);
  const rows = chartRowsByLocal(c, "employmentGeneralBlock", baseRows);
  const targetRows = c.selected ? [c.selected] : rows;
  const target = employmentAgg(targetRows);
  const cluster = employmentAgg(rows);
  const activeLocal = getLocalFilter("employmentGeneralBlock");
  const label = c.selected ? c.selected.sigla : (activeLocal !== "all" ? activeLocal : (explicitClusterActive(c) ? c.group : "Sistema estadual"));
  return `${quartilChipStrip("employmentGeneralBlock", c.f.groupBy, c.base, c)}
  <div class="score-grid employment-kpi-grid">
    ${employmentKpiCard(indicatorName(33), formatNumber(target.totalEgress), label, `Média do cluster: ${formatNumber(cluster.totalEgress / Math.max(rows.length, 1))}`)}
    ${employmentKpiCard(indicatorName(36), formatNumber(target.prInserted), label, `Média do cluster: ${formatNumber(cluster.prInserted / Math.max(rows.length, 1))}`)}
    ${employmentKpiCard(indicatorName(37), formatPercent(target.prRate), label, `Média do cluster: ${formatPercent(cluster.prRate)}`)}
    ${employmentKpiCard(indicatorName(35), formatPercent(target.southRate), label, `Média do cluster: ${formatPercent(cluster.southRate)}`)}
    ${employmentKpiCard(indicatorName(39), formatPercent(target.cbo2Rate), label, `Média do cluster: ${formatPercent(cluster.cbo2Rate)}`)}
    ${employmentKpiCard(indicatorName(40), formatCurrency(target.salary), label, `Média do cluster: ${formatCurrency(cluster.salary)}`)}
  </div>
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`], [indicatorName(33), u => formatNumber(employmentMetrics(u).totalEgress)], [indicatorName(34), u => formatNumber(employmentMetrics(u).southInserted)], [indicatorName(35), u => formatPercent(employmentMetrics(u).southRate)], [indicatorName(36), u => formatNumber(employmentMetrics(u).prInserted)], [indicatorName(37), u => formatPercent(employmentMetrics(u).prRate)], [indicatorName(38), u => formatNumber(employmentMetrics(u).cbo2Inserted)], [indicatorName(39), u => formatPercent(employmentMetrics(u).cbo2Rate)], [indicatorName(40), u => formatCurrency(employmentMetrics(u).salary)], [indicatorName(41), u => formatNumber(employmentMetrics(u).localInserted)], [indicatorName(42), u => formatPercent(employmentMetrics(u).localRate)], [indicatorName(80) + estBadge("Índice institucional de dispersão (semente legada) — sem fonte rastreável nas bases atuais; a dispersão real de egressos (RAIS) é o card \"Índice de dispersão territorial\"") , u => formatPercent(employmentMetrics(u).territorialDispersion)]], "Inserção geral dos egressos")}`;
}

function employmentKpiCard(title, value, contextLabel, sub) {
  return `<article class="score-card employment-kpi-card"><h3>${title}</h3><p class="card-subtitle">${contextLabel}</p><div class="score-value">${value}</div><div class="employment-card-sub">${sub}</div></article>`;
}

function employmentRegionBlock(c) {
  const grau = state.insercaoGrauFilter || '';

  var filterFn = null;
  if (grau === 'Bacharelado') filterFn = function(u) { return u.type === 'Bacharelado'; };
  else if (grau === 'Licenciatura') filterFn = function(u) { return u.type === 'Licenciatura'; };
  else if (grau === 'Tecnólogo') filterFn = function(u) { return false; };

  window.setInsercaoGrauFilter = function(g) {
    state.insercaoGrauFilter = g;
    render();
  };

  var _mkGrauBtn = function(val, label) {
    var isActive = val === '' ? grau === '' : grau === val;
    return '<button onclick="window.setInsercaoGrauFilter(\'' + val + '\')" ' +
      'style="padding:3px 10px;border-radius:16px;border:1px solid ' +
      (isActive ? 'var(--accent,#4A6FA5)' : '#cbd5e1') + ';background:' +
      (isActive ? 'var(--accent,#4A6FA5)' : 'transparent') + ';color:' +
      (isActive ? '#fff' : 'var(--text-primary,#222)') + ';font-size:0.78rem;cursor:pointer;">' + label + '</button>';
  };

  var filterBtns =
    '<div style="display:flex;gap:6px;flex-wrap:wrap;align-items:center;margin-bottom:10px;">' +
    '<span style="font-size:0.78rem;color:var(--text-secondary,#666);margin-right:2px;">Grau acadêmico:</span>' +
    _mkGrauBtn('', 'Todos') +
    _mkGrauBtn('Bacharelado', 'Bacharelado') +
    _mkGrauBtn('Licenciatura', 'Licenciatura') +
    _mkGrauBtn('Tecnólogo', 'Tecnólogo') +
    '<button id="btnLimparGrauInsercao" onclick="window.setInsercaoGrauFilter(\'\')" ' +
      'style="margin-left:6px;padding:3px 10px;border-radius:16px;border:1px solid #e2e8f0;' +
      'background:transparent;color:var(--text-secondary,#94a3b8);font-size:0.78rem;cursor:pointer;" ' +
      'title="Remover filtro de grau — exibir todos os egressos">Limpar filtro</button>' +
    '</div>';

  var noteHtml = grau
    ? '<p style="font-size:0.82rem;color:var(--text-secondary,#777);margin-bottom:10px;padding:8px 12px;' +
      'background:var(--surface-2,#f8f9fa);border-radius:6px;border-left:3px solid var(--accent,#4A6FA5);">' +
      (grau === 'Tecnólogo'
        ? 'Nenhuma IEES no dataset tem <strong>Tecnólogo</strong> como grau predominante. Dados de inserção por curso tecnólogo disponíveis na seção <em>Por curso</em>.'
        : 'Exibindo apenas IEES com grau acadêmico predominante: <strong>' + grau + '</strong>. ' +
          'A taxa exibida é a geral de cada IEES — dados desagregados por grau requerem pré-processamento da Base RAIS com separação por GRAU_CURSO.') +
      '</p>'
    : '';

  var sub1 = grau && grau !== 'Tecnólogo'
    ? 'Apenas IEES com perfil predominante ' + grau + ' · Média do cluster recalculada para o subgrupo.'
    : 'Verde acima de 55%; amarelo entre 45% e 55%; vermelho abaixo de 45%. Linha laranja = média do cluster.';
  var sub2 = grau && grau !== 'Tecnólogo'
    ? 'Apenas IEES com perfil predominante ' + grau + ' · Mesma escala de cores.'
    : 'Mesma regra de cor, comparada aos pares do cluster ativo.';

  return filterBtns + noteHtml + `<div class="chart-grid">
    <article class="visual-card"><h3>${indicatorName(37)} por IEES</h3><p class="card-subtitle">${sub1}</p>${employmentRateBars(c, u => employmentMetrics(u).prRate, formatPercent, filterFn)}</article>
    <article class="visual-card"><h3>${indicatorName(35)} por IEES</h3><p class="card-subtitle">${sub2}</p>${employmentRateBars(c, u => employmentMetrics(u).southRate, formatPercent, filterFn)}</article>
  </div>
  <article class="visual-card mt-14"><h3>Retenção local de talentos</h3><p class="card-subtitle">${indicatorName(42)}. IEES com alta dispersão territorial tendem a distribuir egressos em mais municípios; use comparação com os dados da dimensão 'Oferta de Cursos' para análise completa.</p>${localTalentCards(c)}</article>`;
}

function employmentRateBars(c, getter, fmt, filterFn) {
  const clusterBase = employmentClusterRows(c);
  const clusterRows = filterFn ? clusterBase.filter(filterFn) : clusterBase;
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const allRows = employmentRows(c);
  const rows = filterFn ? allRows.filter(filterFn) : allRows;
  if (!rows.length) return '<div class="empty-state" style="padding:28px 0;text-align:center;color:var(--text-secondary,#777);font-size:0.88rem;">Nenhuma IEES encontrada para o grau selecionado.</div>';
  const ref = clusterRows.length ? mean(clusterRows, getter) : 0;
  const sorted = [...rows].sort((a, b) => getter(b) - getter(a));
  return `<div class="bars employment-rate-bars" style="--ref-pos:${clamp(ref, 0, 100)}%">${sorted.map(u => {
    const value = getter(u);
    const tone = value > 55 ? "rate-high" : value >= 45 ? "rate-mid" : "rate-low";
    return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone}" style="width:${clamp(value, 4, 100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(value)}</span></div>`;
  }).join("")}</div><div class="bars-reference-note"><span>Média do cluster: <strong>${fmt(ref)}</strong></span></div>`;
}

function localTalentCards(c) {
  const rows = employmentRows(c);
  const clusterRows = employmentClusterRows(c);
  const avg = mean(clusterRows, u => employmentMetrics(u).localRate);
  return `<div class="local-talent-grid">${rows.map(u => {
    const m = employmentMetrics(u);
    const tone = m.localRate >= avg ? "alert-ok" : m.localRate >= avg - 7 ? "alert-warn" : "alert-info";
    return `<article class="local-talent-card ${tone}"><strong>${u.sigla}</strong><span>${formatPercent(m.localRate)} na cidade-sede</span><em>${m.localRate >= avg ? "acima" : "abaixo"} da média do cluster (${formatPercent(avg)})</em></article>`;
  }).join("")}</div>`;
}

function employmentCboSalaryBlock(c) {
  return `<article class="visual-card"><h3>${indicatorName(37)} × ${indicatorName(40)}</h3><p class="card-subtitle">Tamanho da bolha = ${indicatorName(33)}.</p>${employmentScatter(c, u => employmentMetrics(u).prRate, u => employmentMetrics(u).salary, u => employmentMetrics(u).totalEgress, "Inserção PR", "Salário")}</article>
  <article class="visual-card mt-14"><h3>Aderência formação-trabalho</h3><p class="card-subtitle">${indicatorName(39)} por IEES versus média do cluster.</p>${employmentAdherenceCards(c)}</article>`;
}

var _EMP_COLORS = {
  uel:'#1e40af', uem:'#0891b2', uepg:'#065f46',
  unioeste:'#7c3aed', unicentro:'#b45309',
  uenp:'#be123c', unespar:'#0f766e'
};
function _empColor(sigla) { return _EMP_COLORS[sigla.toLowerCase()] || '#185fa5'; }

function employmentScatter(c, xGet, yGet, sizeGet, xLabel, yLabel) {
  const rows = employmentRows(c);
  const clusterRows = employmentClusterRows(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const minY = Math.min(...rows.map(yGet));
  const maxY = Math.max(...rows.map(yGet));
  const maxSize = Math.max(...rows.map(sizeGet), 1);
  const points = rows.map(u => {
    const x = clamp(xGet(u), 3, 97);
    const y = clamp((yGet(u) - minY) / Math.max(maxY - minY, 1) * 92 + 4, 4, 96);
    const size = clamp(24 + sizeGet(u) / maxSize * 28, 24, 52);
    const m = employmentMetrics(u);
    const inCluster = clusterIds.has(u.id);
    const color = inCluster ? _empColor(u.sigla) : '#94a3b8';
    const tipData = `${u.sigla}|${xLabel}: ${formatPercent(xGet(u))}|${yLabel}: ${formatCurrency(yGet(u))}|Egressos: ${formatNumber(m.totalEgress)}`;
    return `<button class="scatter-point ${inCluster ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%;width:${size}px;height:${size}px;background:${color}" type="button" onclick="showScatterTip(event,'${tipData}')">${u.sigla}</button>`;
  }).join('');
  const legend = clusterRows.map(u =>
    `<span class="scatter-leg-item"><i style="background:${_empColor(u.sigla)}"></i>${u.sigla}</span>`
  ).join('');
  return `<div class="employment-scatter no-quadrants">${points}<span class="axis-caption x">${xLabel}</span><span class="axis-caption y">${yLabel}</span></div><div class="scatter-legend">${legend}</div>`;
}

window.showScatterTip = function(evt, data) {
  evt.stopPropagation();
  var parts = data.split('|');
  var name = parts[0];
  var lines = parts.slice(1);
  var tip = document.getElementById('_scatterTip');
  if (!tip) {
    tip = document.createElement('div');
    tip.id = '_scatterTip';
    tip.className = 'scatter-tooltip';
    tip.style.position = 'fixed';
    document.body.appendChild(tip);
    document.addEventListener('click', function() { var t = document.getElementById('_scatterTip'); if (t) t.style.display = 'none'; });
  }
  tip.innerHTML = '<strong>' + name + '</strong>' + lines.map(function(l) { return '<div>' + l + '</div>'; }).join('');
  tip.style.display = 'block';
  var rect = evt.currentTarget.getBoundingClientRect();
  tip.style.left = (rect.left + rect.width / 2) + 'px';
  tip.style.top  = (rect.top - 10) + 'px';
  tip.style.transform = 'translateX(-50%) translateY(-100%)';
};

/* ACTIVE definition (line 7435 in painel.js overrides line 7219) */
function employmentAdherenceCards(c) {
  const rows = employmentRows(c);
  const avg = mean(rows, u => employmentMetrics(u).cbo2Rate);
  return `<div class="adherence-grid">${rows.map(u => {
    const m = employmentMetrics(u);
    const diff = m.cbo2Rate - avg;
    const cls = diff >= 4 ? "alert-ok" : diff >= -4 ? "alert-warn" : "alert-danger";
    return `<article class="adherence-card ${cls}"><strong>${u.sigla}</strong><span>${formatPercent(m.cbo2Rate)}</span><em>${indicatorName(38)}: ${formatNumber(m.cbo2Inserted)} · ${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p. frente ao cluster</em></article>`;
  }).join("")}</div>`;
}

function employmentDestinationBlock(c) {
  const rows = employmentRows(c);
  const target = c.selected || rows[0];
  const sigla = target ? target.sigla : null;

  const munCount    = target ? (target.egressosMunicipios ?? null) : null;
  const dispIdx     = target ? panelEgressosField(target, "raisDispersao", null) : null;
  const validCluster = rows.filter(u => u.egressosMunicipios != null);
  const clusterMunAvg = validCluster.length
    ? Math.round(mean(validCluster, u => u.egressosMunicipios)) : null;

  const cs = "padding:14px 18px;background:var(--surface-2,#f5f5f5);border-radius:10px;";
  const cardsHtml = [
    `<div style="${cs}">
      <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--text-secondary,#777);">Municípios alcançados</div>
      <div style="font-size:2rem;font-weight:700;margin:4px 0;">${munCount ?? "—"}</div>
      <div style="font-size:0.75rem;color:var(--text-secondary,#888);">municípios paranaenses com egressos empregados formalmente</div>
      <div style="font-size:0.72rem;color:var(--text-secondary,#999);margin-top:4px;">Fonte: SETI/RAIS — Base RAIS 2023 e 2024</div>
    </div>`,
    `<div style="${cs}">
      <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--text-secondary,#777);">Índice de dispersão territorial</div>
      <div style="font-size:2rem;font-weight:700;margin:4px 0;">${dispIdx != null ? dispIdx.toFixed(3).replace(".", ",") : "—"}</div>
      <div style="font-size:0.75rem;color:var(--text-secondary,#888);">média do índice por curso: municípios distintos / egressos encontrados por curso</div>
      <div style="font-size:0.72rem;color:var(--text-secondary,#999);margin-top:4px;">Fonte: SETI/RAIS — Base RAIS 2023 e 2024 / col. 22</div>
    </div>`,
    `<div style="${cs}">
      <div style="font-size:0.72rem;text-transform:uppercase;letter-spacing:.04em;color:var(--text-secondary,#777);">Média do cluster (municípios)</div>
      <div style="font-size:2rem;font-weight:700;margin:4px 0;">${clusterMunAvg ?? "—"}</div>
      <div style="font-size:0.75rem;color:var(--text-secondary,#888);">média de municípios alcançados pelas IEES do cluster ativo</div>
    </div>`,
  ].join("");

  const munRanking = (sigla && window.RAIS_MUN_DATA && window.RAIS_MUN_DATA[sigla])
    ? window.RAIS_MUN_DATA[sigla].slice(0, 10) : [];
  const maxPart = munRanking.length ? munRanking[0].part : 1;
  const munBarsHtml = munRanking.length
    ? munRanking.map(m => {
        const bw = maxPart > 0 ? Math.round(m.part / maxPart * 100) : 0;
        return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;font-size:0.82rem;">
          <span style="min-width:130px;color:var(--text-primary,#222);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;" title="${m.nome.replace(/"/g,"&quot;")}">${m.nome}</span>
          <div style="flex:1;background:#e2e8f0;border-radius:4px;height:8px;"><div style="width:${bw}%;background:var(--accent,#4A6FA5);border-radius:4px;height:8px;"></div></div>
          <span style="min-width:42px;text-align:right;color:var(--text-secondary,#666);">${m.part.toFixed(1).replace(".", ",")}%</span>
        </div>`;
      }).join("")
    : `<div style="font-size:0.82rem;color:var(--text-secondary,#999);padding:8px 0;">Dados de municípios não disponíveis — carregue a Base RAIS para visualizar o ranking.</div>`;

  const rankingCol = `<div>
    <div style="font-size:0.90rem;font-weight:600;margin-bottom:8px;">Top 10 municípios de destino</div>
    <div style="font-size:0.78rem;color:var(--text-secondary,#777);margin-bottom:10px;">Participação de cada município no total de egressos empregados formalmente</div>
    ${munBarsHtml}
    <div style="font-size:0.72rem;color:var(--text-secondary,#999);margin-top:8px;">Fonte: SETI/RAIS — Base RAIS - 2023 e 2024 - Paraná.xlsx / col. 12 e 14</div>
  </div>`;

  const cursosData = sigla && window.RAIS_CURSO_DATA && window.RAIS_CURSO_DATA[sigla]
    ? window.RAIS_CURSO_DATA[sigla] : null;
  let tableSection;
  if (cursosData && cursosData.length) {
    const tbody = cursosData.map(cd =>
      `<tr>
        <td>${cd.curso}</td>
        <td>${cd.grau || "—"}</td>
        <td>${cd.campus || "—"}</td>
        <td style="text-align:right">${cd.munDestino != null ? Math.round(cd.munDestino) : "—"}</td>
        <td style="text-align:right">${cd.dispersao != null ? cd.dispersao.toFixed(3).replace(".", ",") : "—"}</td>
        <td style="text-align:right">${cd.divOcup != null ? cd.divOcup.toFixed(2).replace(".", ",") : "—"}</td>
      </tr>`
    ).join("");
    tableSection = `<div class="metric-table-wrap">
      <button class="metric-table-toggle" type="button" aria-expanded="false" onclick="toggleMetricTable(this)"><span class="toggle-icon">▶</span> Ver tabela completa — Destino territorial dos egressos</button>
      <div class="metric-table-body" hidden><div style="overflow-x:auto"><table class="data-table"><thead><tr>
        <th style="text-align:left">Curso</th><th style="text-align:left">Grau</th><th style="text-align:left">Campus</th>
        <th style="text-align:right" title="Municípios de destino profissional por curso">Nº Municípios</th>
        <th style="text-align:right" title="Índice de dispersão territorial dos egressos por curso">Índice Dispersão</th>
        <th style="text-align:right" title="Diversidade ocupacional dos egressos por curso">Diversidade Ocup.</th>
      </tr></thead><tbody>${tbody}</tbody></table></div></div>
    </div>`;
  } else {
    tableSection = metricTable(rows, [
      ["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups.v3}</span>`],
      [indicatorName(71), u => formatNumber(employmentMetrics(u).prInserted)],
      [indicatorName(72), u => formatPercent(employmentMetrics(u).prInserted / Math.max(sum(rows, x => employmentMetrics(x).prInserted), 1) * 100)],
      [indicatorName(79), u => formatNumber(employmentMetrics(u).courseDestinationMunicipalities)],
      [indicatorName(80) + estBadge("Índice institucional de dispersão (semente legada) — sem fonte rastreável nas bases atuais; a dispersão real de egressos (RAIS) é o card \"Índice de dispersão territorial\"") , u => formatPercent(employmentMetrics(u).territorialDispersion)]
    ], "Destino territorial dos egressos");
  }

  return `<div class="chart-grid">
    <article class="visual-card"><div style="display:flex;flex-direction:column;gap:12px;">${cardsHtml}</div></article>
    <article class="visual-card">${rankingCol}</article>
  </div>
  ${tableSection}`;
}

function employmentCourseBlock(c) {
  return `<article class="visual-card"><h3>Inserção por curso e tipo de curso</h3><div class="empty-state">Dados oficiais por curso não encontrados na planilha/JSON consolidado.</div></article>`;
}

// Sem dados oficiais por curso na base consolidada: o bloco "Por curso" fica
// oculto até que a fonte exista (employmentCourseBlock permanece para reuso).
tabBlocks.employment = (tabBlocks.employment || []).filter(t => t !== "Por curso");

window.applyCourseFilters = function() {
  const tbl = document.querySelector('.employment-course-table .data-table');
  if (!tbl) return;
  const cursor = (document.getElementById('filterCurso')?.value || '').toLowerCase();
  const iees   = document.getElementById('filterIees')?.value || '';
  const tipo   = document.getElementById('filterTipoCurso')?.value || '';
  let count = 0;
  Array.from(tbl.querySelectorAll('tbody tr')).forEach(tr => {
    const cells = tr.querySelectorAll('td');
    const matchCurso = !cursor || (cells[0]?.textContent.toLowerCase().includes(cursor));
    const matchIees  = !iees   || cells[1]?.textContent.trim() === iees;
    const matchTipo  = !tipo   || cells[2]?.textContent.trim() === tipo;
    const show = matchCurso && matchIees && matchTipo;
    tr.style.display = show ? '' : 'none';
    if (show) count++;
  });
  const counter = document.getElementById('courseRowCount');
  if (counter) counter.textContent = count;
};

window.clearCourseFilters = function() {
  ['filterCurso','filterIees','filterTipoCurso'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });
  window.applyCourseFilters();
};

/* ACTIVE definition (line 7446 in painel.js overrides line 7359) — adds indicatorName(75) and typeTotals */
function employmentCourseTable(c, rows) {
  const clusterRows = employmentClusterRows(c);
  const courseTypes = { "Licenciaturas": "Licenciatura", "Medicina": "Bacharelado", "Administração": "Bacharelado", "Agronomia": "Bacharelado", "Direito": "Bacharelado", "Enfermagem": "Bacharelado", "Engenharia": "Bacharelado" };
  const courseAdjust = { "Medicina": 12, "Engenharia": 6, "Enfermagem": 8, "Direito": 3, "Administração": 1, "Agronomia": 5, "Licenciaturas": -7 };
  const clusterTypeAverage = type => mean(clusterRows.flatMap(u => u.coursesFocus.filter(course => (courseTypes[course] || "Bacharelado") === type).map(course => clamp(employmentMetrics(u).prRate + (courseAdjust[course] || 0), 20, 98))), v => v);
  const bodyRows = rows.flatMap(u => u.coursesFocus.map(course => {
    const type = courseTypes[course] || "Bacharelado";
    const rate = clamp(employmentMetrics(u).prRate + (courseAdjust[course] || 0), 20, 98);
    const avg = clusterTypeAverage(type);
    const egress = Math.max(18, Math.round(employmentMetrics(u).totalEgress / u.coursesFocus.length * (0.82 + Math.abs(courseAdjust[course] || 1) / 28)));
    const inserted = Math.round(egress * rate / 100);
    return { u, course, type, rate, avg, egress, inserted };
  })).sort((a, b) => b.rate - a.rate);
  const typeTotals = bodyRows.reduce((acc, row) => {
    acc[row.type] = (acc[row.type] || 0) + row.inserted;
    return acc;
  }, {});
  return `<div class="table-wrap employment-course-table"><table class="data-table"><thead><tr><th>Curso</th><th>IEES</th><th>Tipo de curso</th><th>${indicatorName(73)}</th><th>${indicatorName(74)}</th><th>${indicatorName(75)}</th><th>Taxa de inserção</th><th>Comparação com cluster</th></tr></thead><tbody>${bodyRows.map(r => {
    const diff = r.rate - r.avg;
    const cls = diff >= 4 ? "cell-good" : diff >= -4 ? "cell-mid" : "cell-risk";
    return `<tr class="${cls}" title="Média do cluster para ${r.type}: ${formatPercent(r.avg)}"><td><strong>${r.course}</strong></td><td>${r.u.sigla}</td><td>${r.type}</td><td>${formatNumber(r.inserted)}</td><td>${formatPercent(r.inserted / Math.max(sum(bodyRows.filter(x => x.u.id === r.u.id), x => x.inserted), 1) * 100)}</td><td>${formatNumber(typeTotals[r.type] || 0)}</td><td>${formatPercent(r.rate)}</td><td>${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p.</td></tr>`;
  }).join("")}</tbody></table>${noteHtml}</div>`;
}

function employmentOccupationBlock(c) {
  const rows = employmentRows(c);
  const sel = c.selected || rows[0];
  const cboEst = sel && !hasRealCbo(sel) ? estBadge("Distribuição ocupacional estimada — sem microdado de egressos RAIS para esta IES") : "";
  const divEst = sel && sel.cbo2Diversity == null ? estBadge("Diversidade ocupacional estimada — sem microdado de egressos RAIS para esta IES") : "";
  return `<div class="chart-grid"><article class="visual-card"><h3>Perfil ocupacional CBO2${cboEst}</h3><p class="card-subtitle">${indicatorName(77)} e ${indicatorName(78)}: comparação entre IEES selecionada e média do cluster.</p>${cboDistributionBars(c)}</article><article class="visual-card"><h3>${indicatorName(76)}${divEst}</h3><p class="card-subtitle">Diversidade ocupacional por curso, maior valor indica maior variedade de destinos profissionais.</p>${occupationalDiversityCards(c)}</article></div>`;
}

function cboDistribution(u) {
  // Real: distribuição de egressos por grande grupo CBO2 (RAIS via pipeline),
  // já em % e alinhada aos 7 rótulos do gráfico. Fórmula é só fallback (ex.:
  // IES sem microdado de egressos).
  if (Array.isArray(u.cbo2Profile) && u.cbo2Profile.length === 7) return u.cbo2Profile;
  const base = [18, 34, 15, 10, 9, 5, 9];
  const tech = u.type === "Bacharelado" ? 4 : -2;
  const publicSector = String(u.groups.v3 || "").includes("Dispersão") ? 4 : 0;
  const values = [base[0] + publicSector, base[1] + tech + (u.doctors - 80) * 0.04, base[2] + (100 - u.doctors) * 0.03, base[3], base[4] + (100 - u.employment) * 0.04, base[5], base[6] + u.territory * 0.015];
  const total = values.reduce((a, b) => a + Math.max(b, 1), 0);
  return values.map(v => Math.max(v, 1) / total * 100);
}
function hasRealCbo(u) {
  return Array.isArray(u.cbo2Profile) && u.cbo2Profile.length === 7;
}

function cboDistributionBars(c) {
  const labels = ["Diretores e gerentes", "Profissionais das ciências e intelectuais", "Técnicos de nível médio", "Trabalhadores administrativos", "Serviços e comércio", "Agropecuária e produção florestal", "Produção industrial"];
  const rows = employmentRows(c);
  const selected = c.selected || rows[0];
  const selectedDist = selected ? cboDistribution(selected) : labels.map(() => 0);
  const clusterDist = labels.map((_, i) => mean(rows, u => cboDistribution(u)[i]));
  return `<div class="cbo-distribution">${labels.map((label, i) => {
    const diff = selectedDist[i] - clusterDist[i];
    return `<div class="cbo-row"><span class="cbo-label">${label}</span><div class="cbo-track"><span class="cbo-fill selected" style="width:${selectedDist[i]}%"></span><span class="cbo-cluster-marker" style="left:${clamp(clusterDist[i], 0, 100)}%" title="Média do cluster: ${formatPercent(clusterDist[i])}"></span></div><span class="cbo-value">${formatPercent(selectedDist[i])} · ${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p.</span></div>`;
  }).join("")}<div class="stack-legend"><span><i class="turn-day-dot"></i>${selected ? selected.sigla : "IEES"}</span><span><i class="cbo-cluster-marker-legend"></i>Média do cluster</span></div></div>`;
}

function occupationalDiversityCards(c) {
  const rows = employmentRows(c);
  const avg = mean(rows, u => employmentMetrics(u).occupationalDiversity);
  return `<div class="occupational-grid">${rows.map(u => {
    const v = employmentMetrics(u).occupationalDiversity;
    const cls = v >= avg ? "alert-ok" : v >= avg - 4 ? "alert-warn" : "alert-info";
    return `<article class="occupational-card ${cls}"><strong>${u.sigla}</strong><span>${formatNumber(v)} ocupações distintas</span><em>${indicatorName(76)} · média do cluster ${formatNumber(avg)}</em></article>`;
  }).join("")}</div>`;
}
