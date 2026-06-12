/* ==========================================================================
   ABA 6 — Corpo Docente e Capacidade Operacional
   Redefine as funções desta aba carregando-as após painel.js.
   _SCATTER_IES_COLORS é const em painel.js (linha 11938) — acessada como global.
   ========================================================================== */

function facultyRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : c.all;
}

function realDocNumber(value) {
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function firstRealDocNumber(...values) {
  for (const value of values) {
    const n = realDocNumber(value);
    if (n != null) return n;
  }
  return null;
}

function facultyMetrics(u) {
  const baseFaculty = estimatedFaculty(u);
  const docOccupationRate = firstRealDocNumber(u.docTaxaOcup, u.facultyOcc);
  const totalCodes = firstRealDocNumber(
    u.docVagasTotais,
    docOccupationRate != null ? Math.round(baseFaculty / Math.max(docOccupationRate / 100, 0.56)) : null
  ) || 0;
  const occupied = firstRealDocNumber(
    u.docVagasOcupadas,
    docOccupationRate != null ? Math.round(totalCodes * docOccupationRate / 100) : null
  ) || 0;
  const conditionedShare = realDocNumber(u.docPctCond);
  const conditioned = firstRealDocNumber(
    u.docVagasCond,
    conditionedShare != null ? Math.round(totalCodes * conditionedShare / 100) : null
  ) || 0;
  const availableOpen = firstRealDocNumber(
    u.docVagasDisp,
    totalCodes ? Math.max(0, totalCodes - occupied - conditioned) : null
  ) || 0;
  const provisionable = Math.max(occupied + availableOpen, 1);
  const occupationRate = firstRealDocNumber(
    u.docTaxaOcup,
    totalCodes ? occupied / totalCodes * 100 : null,
    u.facultyOcc
  ) || 0;
  const availableUseRate = firstRealDocNumber(
    u.docTaxaUtil,
    provisionable ? occupied / provisionable * 100 : null
  ) || 0;
  const avgWorkload = firstRealDocNumber(u.docChMedia, clamp(36 + u.cres * 0.03 + occupationRate * 0.02, 34, 42)) || 0;
  const tideShare = firstRealDocNumber(u.docTidePartic, clamp(u.doctors * 0.55 + occupationRate * 0.23, 45, 92)) || 0;
  const tideAssigned = firstRealDocNumber(u.docTideAtrib, Math.round(provisionable * tideShare / 100)) || 0;
  const tideNotAssignedShare = firstRealDocNumber(u.docTidePctNaoAtrib, clamp(100 - tideShare, 3, 45)) || 0;
  const cresAuthorized = firstRealDocNumber(u.docCresAut, Math.round(occupied * 6.5 + availableOpen * 3.4 + conditioned * 1.1)) || 0;
  const cresUsed = firstRealDocNumber(u.docCresUtil, Math.round(cresAuthorized * u.cres / 100)) || 0;
  const cresUnused = firstRealDocNumber(u.docCresSaldo, cresAuthorized - cresUsed) || 0;
  const cresUseRate = firstRealDocNumber(u.docCresTaxa, u.cres, cresAuthorized ? cresUsed / cresAuthorized * 100 : null) || 0;
  const cresIdleRate = firstRealDocNumber(u.docCresOciosidade, cresAuthorized ? (cresAuthorized - cresUsed) / cresAuthorized * 100 : null) || 0;
  const cresParticipation = firstRealDocNumber(
    u.docCresPartic,
    clamp(cresUsed / Math.max(occupied * avgWorkload + cresUsed, 1) * 100, 4, 38)
  ) || 0;
  return { totalCodes, occupied, conditioned, availableOpen, provisionable, occupationRate, availableUseRate, avgWorkload, tideShare, tideAssigned, tideNotAssignedShare, cresAuthorized, cresUsed, cresUnused, cresUseRate, cresIdleRate, cresParticipation, conditionedShare };
}

function facultyAgg(rows) {
  const totalCodes = sum(rows, u => facultyMetrics(u).totalCodes);
  const occupied = sum(rows, u => facultyMetrics(u).occupied);
  const availableOpen = sum(rows, u => facultyMetrics(u).availableOpen);
  const conditioned = sum(rows, u => facultyMetrics(u).conditioned);
  const cresAuthorized = sum(rows, u => facultyMetrics(u).cresAuthorized);
  const cresUsed = sum(rows, u => facultyMetrics(u).cresUsed);
  return {
    totalCodes,
    occupied,
    availableOpen,
    conditioned,
    occupationRate: totalCodes ? occupied / totalCodes * 100 : 0,
    conditionedShare: totalCodes ? conditioned / totalCodes * 100 : 0,
    tideShare: mean(rows, u => facultyMetrics(u).tideShare),
    tideAssigned: sum(rows, u => facultyMetrics(u).tideAssigned),
    cresAuthorized,
    cresUsed,
    cresUseRate: cresAuthorized ? cresUsed / cresAuthorized * 100 : 0,
    cresIdleRate: cresAuthorized ? (cresAuthorized - cresUsed) / cresAuthorized * 100 : 0,
    cresParticipation: mean(rows, u => facultyMetrics(u).cresParticipation),
    avgWorkload: mean(rows, u => facultyMetrics(u).avgWorkload)
  };
}

function facultyBlock(title, c) {
  if (title.includes("Quadro legal")) return facultyLegalBlock(c);
  if (title.includes("Vagas disponíveis")) return facultyVacanciesBlock(c);
  if (title.includes("TIDE")) return facultyTideBlock(c);
  if (title.includes("CRES")) return facultyCresBlock(c);
  return facultyAlertsBlock(c);
}

function facultyLegalBlock(c) {
  const rows = facultyRows(c);
  const a = facultyAgg(rows);
  return `<div class="score-grid faculty-context-grid">
    ${score("IND-43 Códigos LGU", formatNumber(a.totalCodes), "total do cluster", 78)}
    ${score("IND-44 Vagas disponíveis", formatNumber(a.availableOpen), "para provimento efetivo", 64)}
    ${score("IND-45 Vagas ocupadas", formatNumber(a.occupied), "docentes efetivos", a.occupationRate)}
    ${score("IND-46 Ocupação", formatPercent(a.occupationRate), "referência 75-80%", a.occupationRate)}
  </div>
  <article class="visual-card mt-14"><h3>IND-46 · Taxa de ocupação do quadro docente</h3><p class="card-subtitle">Segmentos: ocupadas, disponíveis e condicionadas. Linha laranja = média do cluster V5/porte ativo.</p>${facultyOccupationProgress(c)}</article>
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span>`], ["IND-43 Códigos LGU", u => formatNumber(facultyMetrics(u).totalCodes)], ["IND-44 Disponíveis", u => formatNumber(facultyMetrics(u).availableOpen)], ["IND-45 Ocupadas", u => formatNumber(facultyMetrics(u).occupied)], ["IND-46 Ocupação", u => formatPercent(facultyMetrics(u).occupationRate)], ["IND-47 Utiliz. disponíveis", u => formatPercent(facultyMetrics(u).availableUseRate)], ["IND-53 CH média", u => `${facultyMetrics(u).avgWorkload.toFixed(1).replace('.', ',')}h`]], "Quadro legal e ocupação docente")}`;
}

function facultyOccupationProgress(c) {
  const rows = facultyRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const ref = mean(rows, u => facultyMetrics(u).occupationRate);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatPercent(ref)}</strong></span></div><div class="faculty-progress-list" style="--faculty-ref:${clamp(ref,0,100)}%">${chartRows.map(u => { const m = facultyMetrics(u); const occ = m.occupied / m.totalCodes * 100; const avail = m.availableOpen / m.totalCodes * 100; const cond = m.conditioned / m.totalCodes * 100; return `<div class="faculty-progress-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="faculty-name" title="${u.nome}">${u.sigla}</span><div class="faculty-stack" title="${u.sigla}: IND-43 ${formatNumber(m.totalCodes)}; IND-44 ${formatNumber(m.availableOpen)}; IND-45 ${formatNumber(m.occupied)}"><span class="faculty-seg occupied" style="width:${occ}%"></span><span class="faculty-seg available" style="width:${avail}%"></span><span class="faculty-seg conditioned" style="width:${cond}%"></span><i class="faculty-ref-line" aria-hidden="true"></i></div><span class="faculty-value">${formatPercent(m.occupationRate)}</span></div>`; }).join("")}</div><div class="stack-legend"><span><i class="faculty-dot occupied"></i>Ocupadas</span><span><i class="faculty-dot available"></i>Disponíveis</span><span><i class="faculty-dot conditioned"></i>Condicionadas</span></div>`;
}

function facultyVacanciesBlock(c) {
  const rows = facultyRows(c);
  const avg = facultyAgg(rows);
  return `<article class="visual-card"><h3>IND-45, IND-44 e IND-48 · Composição das vagas docentes</h3><p class="card-subtitle">Composição média do cluster exibida no topo. IND-49 mede restrição por vagas condicionadas.</p>${facultyVacancyStack(c, avg)}</article>`;
}

function facultyVacancyStack(c, avg) {
  const rows = facultyRows(c);
  const totalAvg = Math.max(avg.occupied + avg.availableOpen + avg.conditioned, 1);
  const segLbl = (v, min) => v >= min ? `<i class="faculty-seg-lbl">${Math.round(v)}%</i>` : "";
  const segRow = (m) => {
    const total = Math.max(m.totalCodes, 1);
    const occ = m.occupied / total * 100, avail = m.availableOpen / total * 100, cond = m.conditioned / total * 100;
    return `<span class="faculty-seg occupied" style="width:${occ}%" title="Ocupadas: ${Math.round(occ)}%">${segLbl(occ, 12)}</span><span class="faculty-seg available" style="width:${avail}%" title="Disponíveis: ${Math.round(avail)}%">${segLbl(avail, 12)}</span><span class="faculty-seg conditioned" style="width:${cond}%" title="Condicionadas: ${Math.round(cond)}%">${segLbl(cond, 10)}</span>`;
  };
  const avgOcc = avg.occupied / totalAvg * 100, avgAvail = avg.availableOpen / totalAvg * 100, avgCond = avg.conditioned / totalAvg * 100;
  return `<div class="stack-reference"><div><strong>Composição média do cluster</strong><span>Ocupadas ${formatPercent(avgOcc)} · Disponíveis ${formatPercent(avgAvail)} · Condicionadas ${formatPercent(avgCond)}</span></div><div class="stack-reference-track"><span class="faculty-seg occupied" style="width:${avgOcc}%">${segLbl(avgOcc, 12)}</span><span class="faculty-seg available" style="width:${avgAvail}%">${segLbl(avgAvail, 12)}</span><span class="faculty-seg conditioned" style="width:${avgCond}%">${segLbl(avgCond, 10)}</span></div></div><div class="faculty-progress-list">${rows.map(u => { const m = facultyMetrics(u); return `<div class="faculty-progress-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="faculty-name">${u.sigla}</span><div class="faculty-stack">${segRow(m)}</div><span class="faculty-value">IND-49 ${formatPercent(m.conditionedShare)}</span></div>`; }).join("")}</div>`;
}

function facultyTideBlock(c) {
  const rows = facultyRows(c);
  const metrics = rows.map(u => ({ u, m: facultyMetrics(u) }));
  const ref = mean(rows, u => facultyMetrics(u).tideShare);
  const maxShare = Math.max(...metrics.map(x => x.m.tideShare), 0);
  const minShare = Math.min(...metrics.map(x => x.m.tideShare), 100);
  const tideTone = v => v >= ref ? "rate-high" : v >= ref * 0.6 ? "rate-mid" : "rate-low";
  const deltaPP = v => { const d = v - ref; return (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",") + " p.p."; };
  const cards = `<div class="tide-summary-cards">
    <div class="tide-card"><span>Média cluster</span><strong>${formatPercent(ref)}</strong><small>IND-51</small></div>
    <div class="tide-card tide-card-max"><span>Maior participação</span><strong>${formatPercent(maxShare)}</strong><small>${(metrics.find(x => x.m.tideShare === maxShare) || {u:{sigla:"—"}}).u.sigla}</small></div>
    <div class="tide-card tide-card-min"><span>Menor participação</span><strong>${formatPercent(minShare)}</strong><small>${(metrics.find(x => x.m.tideShare === minShare) || {u:{sigla:"—"}}).u.sigla}</small></div>
  </div>`;
  return `<article class="visual-card">${cards}<h3>IND-51 · Participação do TIDE no quadro docente disponível</h3><p class="card-subtitle">Linha laranja = média do cluster · verde = acima da média · tooltip inclui IND-50 absoluto e IND-52 não atribuído.</p><div class="bars overview-cluster-bars tide-bars" style="--ref-pos:${clamp(ref,0,100)}%">${[...rows].sort((a,b)=>facultyMetrics(b).tideShare-facultyMetrics(a).tideShare).map(u => { const m = facultyMetrics(u); const delta = deltaPP(m.tideShare); return `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tideTone(m.tideShare)}" style="width:${clamp(m.tideShare,4,100)}%" title="IND-50 ${formatNumber(m.tideAssigned)} TIDE atribuídos; IND-51 ${formatPercent(m.tideShare)}; IND-52 ${formatPercent(m.tideNotAssignedShare)}; ${delta} vs. média"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${formatPercent(m.tideShare)} <span class="bar-delta ${m.tideShare >= ref ? "delta-pos" : "delta-neg"}">${delta}</span> · <span class="tide-count" title="IND-50: docentes TIDE atribuídos">${formatNumber(m.tideAssigned)} TIDE</span></span></div>`; }).join("")}</div></article>`;
}

function facultyCresBlock(c) {
  const details =
    '<details open style="margin-bottom:10px;font-size:0.82rem;color:var(--text-secondary,#666);line-height:1.6;">' +
    '<summary style="cursor:pointer;font-weight:600;color:var(--text-primary,#333);margin-bottom:4px;">O que cada linha representa?</summary>' +
    '<ul style="margin:6px 0 0 0;padding-left:18px;">' +
    '<li><strong>Taxa de utilização da CRES:</strong> percentual da carga horária de regime especial (CRES) efetivamente utilizada em relação à autorizada. Valores acima de 100% indicam utilização além do autorizado.</li>' +
    '<li><strong>Taxa de ociosidade da CRES:</strong> percentual da carga horária CRES autorizada que não foi utilizada. Complementar à taxa de utilização.</li>' +
    '<li><strong>Taxa de ocupação do quadro docente:</strong> percentual de vagas docentes efetivamente ocupadas em relação às vagas disponíveis.</li>' +
    '<li><strong>Banda sombreada:</strong> intervalo entre a IES com menor e maior utilização de CRES dentro do cluster selecionado — permite ver onde cada IES se posiciona em relação ao grupo.</li>' +
    '</ul></details>';
  return `<div class="chart-grid"><article class="visual-card"><h3>IND-56, IND-58 e IND-46 · Série mensal operacional</h3><p class="card-subtitle">Evolução anual por IES · Banda sombreada = intervalo min/máx entre as IEES do cluster ativo · Fonte: SETI — Base Docentes - Paraná.xlsx</p>${details}${facultyTimeline(c)}</article><article class="visual-card"><h3>IND-59 × IND-46 · Esforço docente total</h3><p class="card-subtitle">X = Participação CRES, Y = Ocupação do quadro · Quadrantes definidos pela média do grupo</p>${facultyCresScatter(c)}</article></div>`;
}

function facultyTimeline(c) {
  const rows = facultyRows(c);
  const months = Array.from({ length: 48 }, (_, i) => i);
  const width = 460, height = 250, left = 38, top = 18, plotW = 370, plotH = 170;
  const pointFor = (value, i) => left + i * (plotW / (months.length - 1)) + ',' + (top + (100 - value) / 100 * plotH);

  const clusterMean    = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100)));
  const clusterMin     = months.map((_, i) => Math.min(...rows.map(u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100))));
  const clusterMax     = months.map((_, i) => Math.max(...rows.map(u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100))));
  const idleMean       = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).cresIdleRate - Math.sin((i + u.students / 1000) / 4) * 3, 0, 100)));
  const occupationMean = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).occupationRate + Math.cos((i + u.students / 900) / 5) * 2, 0, 100)));
  const band = clusterMax.map(pointFor).join(' ') + ' ' + [...clusterMin].reverse().map(function(v, idx) { return pointFor(v, months.length - 1 - idx); }).join(' ');

  const iesLines = rows.map(function(u) {
    const col = (_SCATTER_IES_COLORS[u.sigla] || '#4A6FA5');
    const pts = months.map(function(_, i) { return clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100); }).map(pointFor).join(' ');
    return '<polyline id="ftl-line-' + u.sigla + '" class="ftl-ies-line" points="' + pts + '" fill="none" stroke="' + col + '" stroke-width="1.2" opacity="0.5" stroke-linejoin="round"/>';
  }).join('');

  const fmt = function(v) { return (v != null && isFinite(v)) ? v.toFixed(1) + '%' : '—'; };
  const initUtil = fmt(mean(rows, function(u) { return facultyMetrics(u).cresUseRate; }));
  const initOcio = fmt(mean(rows, function(u) { return facultyMetrics(u).cresIdleRate; }));
  const initOcup = fmt(mean(rows, function(u) { return facultyMetrics(u).occupationRate; }));

  function _ftlUpdateCards(targetRow) {
    var val = function(fn) { return targetRow ? fn(targetRow) : mean(rows, fn); };
    var cu = document.getElementById('cardCresUtil');
    var co = document.getElementById('cardCresOcio');
    var cp = document.getElementById('cardCresOcup');
    if (cu) cu.textContent = fmt(val(function(u) { return facultyMetrics(u).cresUseRate; }));
    if (co) co.textContent = fmt(val(function(u) { return facultyMetrics(u).cresIdleRate; }));
    if (cp) cp.textContent = fmt(val(function(u) { return facultyMetrics(u).occupationRate; }));
  }

  window.ftlFilter = function(sigla) {
    document.querySelectorAll('.ftl-btn').forEach(function(b) {
      var isActive = b.dataset.ies === sigla;
      b.style.background  = isActive ? 'var(--accent,#4A6FA5)' : 'transparent';
      b.style.color       = isActive ? '#fff' : 'var(--text-primary,#222)';
      b.style.borderColor = isActive ? 'var(--accent,#4A6FA5)' : '#cbd5e1';
    });
    document.querySelectorAll('.ftl-ies-line').forEach(function(line) {
      if (sigla === 'todas') {
        line.setAttribute('opacity', '0.5');
        line.setAttribute('stroke-width', '1.2');
      } else {
        var sel = line.id === 'ftl-line-' + sigla;
        line.setAttribute('opacity', sel ? '1' : '0.12');
        line.setAttribute('stroke-width', sel ? '2.5' : '1');
      }
    });
    _ftlUpdateCards(sigla === 'todas' ? null : rows.find(function(u) { return u.sigla === sigla; }) || null);
  };

  var _FTL_MONTHS = ['Jan','Fev','Mar','Abr','Mai','Jun','Jul','Ago','Set','Out','Nov','Dez'];

  window.ftlHover = function(svgEl, e) {
    var rect = svgEl.getBoundingClientRect();
    var svgX  = (e.clientX - rect.left) * (width / rect.width);
    var i = Math.round(clamp((svgX - left) / (plotW / (months.length - 1)), 0, months.length - 1));
    var tip = document.getElementById('tooltipCres');
    if (!tip) return;
    var yr = 2022 + Math.floor(i / 12);
    var moIdx = i % 12;
    var dateLabel = _FTL_MONTHS[moIdx] + '/' + yr;
    var u = clusterMean[i], d = idleMean[i], o = occupationMean[i];
    document.getElementById('tooltipCresLabel').textContent = dateLabel;
    document.getElementById('tooltipCresLinhas').innerHTML =
      '<div style="color:#4A6FA5;">&#9632; Utilização CRES: ' + (u != null ? u.toFixed(1) + '%' : '—') + '</div>' +
      '<div style="color:#e07b39;">&#9632; Ociosidade CRES: ' + (d != null ? d.toFixed(1) + '%' : '—') + '</div>' +
      '<div style="color:#16875d;">&#9632; Ocupação quadro: ' + (o != null ? o.toFixed(1) + '%' : '—') + '</div>';
    tip.style.display = 'block';
    tip.style.left    = (e.clientX + 14) + 'px';
    tip.style.top     = (e.clientY - 24) + 'px';
    var guideLine = document.getElementById('ftlGuideLine');
    if (guideLine) {
      var gx = left + i * (plotW / (months.length - 1));
      guideLine.setAttribute('x1', gx);
      guideLine.setAttribute('x2', gx);
      guideLine.setAttribute('display', 'block');
    }
  };
  window.ftlHoverOff = function() {
    var tip = document.getElementById('tooltipCres');
    if (tip) tip.style.display = 'none';
    var guideLine = document.getElementById('ftlGuideLine');
    if (guideLine) guideLine.setAttribute('display', 'none');
  };

  var _IES_PR = ['UEL','UEM','UEPG','UNIOESTE','UNICENTRO','UENP','UNESPAR'];

  var filterBtns =
    '<div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:10px;align-items:center;">' +
    '<span style="font-size:0.78rem;color:var(--text-secondary,#666);margin-right:2px;">Destaque:</span>' +
    '<button class="ftl-btn" data-ies="todas" onclick="window.ftlFilter(\'todas\')" style="padding:3px 10px;border-radius:16px;border:1px solid var(--accent,#4A6FA5);background:var(--accent,#4A6FA5);color:#fff;font-size:0.78rem;cursor:pointer;">Todas</button>' +
    _IES_PR.map(function(sig) {
      return '<button class="ftl-btn" data-ies="' + sig + '" onclick="window.ftlFilter(\'' + sig + '\')" style="padding:3px 10px;border-radius:16px;border:1px solid #cbd5e1;background:transparent;color:var(--text-primary,#222);font-size:0.78rem;cursor:pointer;">' + sig + '</button>';
    }).join('') +
    '</div>';

  var cards =
    '<div style="display:flex;gap:10px;margin-bottom:12px;flex-wrap:wrap;">' +
    '<div style="flex:1;min-width:120px;padding:10px 14px;background:var(--surface-2,#f5f5f5);border-radius:8px;">' +
      '<div style="font-size:0.72rem;color:var(--text-secondary,#777);text-transform:uppercase;letter-spacing:.04em;">Utilização CRES</div>' +
      '<div id="cardCresUtil" style="font-size:1.3rem;font-weight:700;margin-top:2px;color:#4A6FA5;">' + initUtil + '</div>' +
      '<div style="font-size:0.70rem;color:var(--text-secondary,#999);">IND-56 · média do cluster</div>' +
    '</div>' +
    '<div style="flex:1;min-width:120px;padding:10px 14px;background:var(--surface-2,#f5f5f5);border-radius:8px;">' +
      '<div style="font-size:0.72rem;color:var(--text-secondary,#777);text-transform:uppercase;letter-spacing:.04em;">Ociosidade CRES</div>' +
      '<div id="cardCresOcio" style="font-size:1.3rem;font-weight:700;margin-top:2px;color:#e07b39;">' + initOcio + '</div>' +
      '<div style="font-size:0.70rem;color:var(--text-secondary,#999);">IND-58 · média do cluster</div>' +
    '</div>' +
    '<div style="flex:1;min-width:120px;padding:10px 14px;background:var(--surface-2,#f5f5f5);border-radius:8px;">' +
      '<div style="font-size:0.72rem;color:var(--text-secondary,#777);text-transform:uppercase;letter-spacing:.04em;">Ocupação do quadro</div>' +
      '<div id="cardCresOcup" style="font-size:1.3rem;font-weight:700;margin-top:2px;color:#16875d;">' + initOcup + '</div>' +
      '<div style="font-size:0.70rem;color:var(--text-secondary,#999);">IND-46 · média do cluster</div>' +
    '</div>' +
    '</div>';

  var axisLabels = [2022,2023,2024,2025,2026].map(function(y,i) {
    return '<text class="timeline-label" x="' + (left + i * (plotW / 4)) + '" y="' + (height - 20) + '">Jan/' + y + '</text>';
  }).join('');

  var svgHtml =
    '<svg id="facultyTimelineSvg" class="faculty-timeline-svg" viewBox="0 0 ' + width + ' ' + height + '" role="img" aria-label="Linha temporal mensal CRES e ocupação docente" onmousemove="window.ftlHover(this,event)" onmouseleave="window.ftlHoverOff()">' +
    '<polygon class="faculty-band" points="' + band + '" />' +
    iesLines +
    '<line id="ftlGuideLine" x1="' + left + '" y1="' + top + '" x2="' + left + '" y2="' + (top + plotH) + '" stroke="var(--text-secondary,#94a3b8)" stroke-width="1" stroke-dasharray="4 3" display="none" pointer-events="none"/>' +
    '<polyline class="timeline-line line-0" points="' + clusterMean.map(pointFor).join(' ') + '" />' +
    '<polyline class="timeline-line line-1" points="' + idleMean.map(pointFor).join(' ') + '" />' +
    '<polyline class="timeline-line line-2" points="' + occupationMean.map(pointFor).join(' ') + '" />' +
    '<line class="timeline-axis" x1="' + left + '" y1="' + (top + plotH) + '" x2="' + (left + plotW) + '" y2="' + (top + plotH) + '" />' +
    axisLabels +
    '<text class="timeline-note" x="' + left + '" y="' + (top + plotH + 28) + '">IND-56 utilização CRES · IND-58 ociosidade · IND-46 ocupação</text>' +
    '</svg>';

  var tooltipDiv =
    '<div id="tooltipCres" style="display:none;position:fixed;z-index:9999;background:var(--surface-1,#fff);border:1px solid var(--border,#e2e8f0);border-radius:8px;padding:10px 14px;font-size:0.80rem;line-height:1.8;box-shadow:0 4px 16px rgba(0,0,0,0.14);pointer-events:none;min-width:210px;">' +
    '<div style="font-weight:700;margin-bottom:4px;font-size:0.82rem;" id="tooltipCresLabel"></div>' +
    '<div id="tooltipCresLinhas"></div>' +
    '</div>';

  var legendDiv = '<div class="stack-legend"><span><i class="turn-day-dot"></i>IND-56</span><span><i class="turn-night-dot"></i>IND-58</span><span><i class="seg-tech"></i>IND-46</span></div>';

  return filterBtns + cards + svgHtml + legendDiv + tooltipDiv;
}

function facultyCresScatter(c) {
  const rows = facultyRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const avgX = mean(rows, u => facultyMetrics(u).cresParticipation);
  const avgY = mean(rows, u => facultyMetrics(u).occupationRate);
  const axPct = clamp(avgX, 2, 96).toFixed(1);
  const ayPct = clamp(avgY, 2, 96).toFixed(1);

  const quadBg =
    `<div style="position:absolute;left:0;top:0;width:${axPct}%;bottom:${ayPct}%;background:rgba(34,197,94,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:${axPct}%;top:0;right:0;bottom:${ayPct}%;background:rgba(59,130,246,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:0;bottom:0;width:${axPct}%;height:${ayPct}%;background:rgba(148,163,184,0.07);z-index:0;pointer-events:none;"></div>` +
    `<div style="position:absolute;left:${axPct}%;bottom:0;right:0;height:${ayPct}%;background:rgba(234,179,8,0.07);z-index:0;pointer-events:none;"></div>`;

  const refLines =
    `<span class="scatter-ref-v" style="left:${axPct}%"></span>` +
    `<span class="scatter-ref-h" style="bottom:${ayPct}%;top:auto"></span>`;

  const qLabels =
    `<span style="position:absolute;left:6px;top:6px;font-size:10px;font-weight:700;color:#16a34a;opacity:0.55;z-index:1;pointer-events:none;">Quadro consolidado</span>` +
    `<span style="position:absolute;right:6px;top:6px;font-size:10px;font-weight:700;color:#2563eb;opacity:0.55;z-index:1;pointer-events:none;">Alta utilização</span>` +
    `<span style="position:absolute;left:6px;bottom:6px;font-size:10px;font-weight:700;color:#64748b;opacity:0.55;z-index:1;pointer-events:none;">Capacidade subutilizada</span>` +
    `<span style="position:absolute;right:6px;bottom:6px;font-size:10px;font-weight:700;color:#ca8a04;opacity:0.55;z-index:1;pointer-events:none;">Dep. de CRES</span>`;

  const points = chartRows.map(u => {
    const m = facultyMetrics(u);
    const col = _SCATTER_IES_COLORS[u.sigla] || '#4A6FA5';
    return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${clamp(m.cresParticipation,2,96)}%;bottom:${clamp(m.occupationRate,2,96)}%;background:${col};border-color:${col}cc;" title="${u.sigla}: IND-59 ${formatPercent(m.cresParticipation)}; IND-46 ${formatPercent(m.occupationRate)}" type="button" onclick="window.cresOcupClick('${u.sigla}')">${u.sigla}</button>`;
  }).join('');

  const ptMap = {};
  chartRows.forEach(u => {
    const m = facultyMetrics(u);
    ptMap[u.sigla] = { sigla: u.sigla, nome: u.nome, x: m.cresParticipation, y: m.occupationRate };
  });
  window.cresOcupClick = function(sigla) {
    const pt = ptMap[sigla];
    if (!pt) return;
    const panelEl = document.getElementById('painelCresOcup');
    if (!panelEl) return;
    document.getElementById('painelCresNome').textContent = pt.sigla + ' — ' + pt.nome;
    document.getElementById('painelCresValX').textContent = pt.x != null ? pt.x.toFixed(1) + '%' : '—';
    document.getElementById('painelCresValY').textContent = pt.y != null ? pt.y.toFixed(1) + '%' : '—';
    let quad;
    if (pt.x >= avgX && pt.y >= avgY)      quad = 'Alta utilização';
    else if (pt.x < avgX && pt.y >= avgY)  quad = 'Quadro consolidado';
    else if (pt.x >= avgX && pt.y < avgY)  quad = 'Dependência de CRES';
    else                                    quad = 'Capacidade subutilizada';
    document.getElementById('painelCresQuadrante').textContent = quad;
    panelEl.style.display = 'block';
  };

  const painel =
    `<div id="painelCresOcup" style="display:none;margin-top:12px;padding:14px 18px;background:var(--surface-1,#fff);border:1px solid var(--border,#e2e8f0);border-radius:10px;font-size:0.85rem;line-height:1.7;max-width:420px;">` +
    `<div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:10px;">` +
    `<strong id="painelCresNome" style="font-size:1rem;"></strong>` +
    `<button onclick="document.getElementById('painelCresOcup').style.display='none'" style="background:none;border:none;cursor:pointer;font-size:1rem;color:var(--text-secondary,#888);">✕</button>` +
    `</div>` +
    `<table style="width:100%;border-collapse:collapse;">` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Participação da CRES no esforço docente total</td><td style="text-align:right;font-weight:600;" id="painelCresValX"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Taxa de ocupação do quadro docente</td><td style="text-align:right;font-weight:600;" id="painelCresValY"></td></tr>` +
    `<tr><td style="padding:3px 0;color:var(--text-secondary,#666);">Posição no quadrante</td><td style="text-align:right;font-weight:600;" id="painelCresQuadrante"></td></tr>` +
    `</table>` +
    `<p style="font-size:0.75rem;color:var(--text-secondary,#999);margin:10px 0 0 0;">Fonte: SETI — Base Docentes - Paraná.xlsx / Base_Docentes_PR</p>` +
    `</div>`;

  const legend =
    `<div style="display:flex;gap:14px;flex-wrap:wrap;margin-top:10px;font-size:0.78rem;color:var(--text-secondary,#555);">` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(34,197,94,0.3);margin-right:4px;"></span>Quadro consolidado — baixa CRES, alta ocupação</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(59,130,246,0.3);margin-right:4px;"></span>Alta utilização — CRES ativa e quadro pleno</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(148,163,184,0.3);margin-right:4px;"></span>Capacidade subutilizada — baixa CRES e ocupação</span>` +
    `<span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(234,179,8,0.3);margin-right:4px;"></span>Dependência de CRES — vagas ociosas, CRES elevada</span>` +
    `</div>`;

  const fonte =
    `<p style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:10px;">` +
    `<strong>Fonte:</strong> Eixo X (Participação da CRES): SETI — Base Docentes - Paraná.xlsx / Base_Docentes_PR / col. 33 — Participação da CRES no esforço docente total. · ` +
    `Eixo Y (Ocupação do quadro): SETI — Base Docentes - Paraná.xlsx / Base_Docentes_PR / col. 20 — Taxa de ocupação do quadro docente.</p>`;

  return `<div class="retention-scatter faculty-scatter" style="background:var(--surface-1,#fff);">${quadBg}${refLines}${qLabels}${points}</div>${legend}${fonte}${painel}`;
}

function facultyAlertsBlock(c) {
  const rows = facultyRows(c);
  const cluster = explicitClusterActive(c) ? `${c.f.groupBy.toUpperCase()} ${c.f.groupLevel}` : `${c.f.groupBy.toUpperCase()} todos os grupos`;
  return `<div class="faculty-alert-grid">${rows.map(u => facultyAlertCard(u, rows)).join('')}</div><div class="architecture-message mt-14">Comparado às IEES do cluster V5/${cluster}. Dados exclusivos das 7 IEES do Paraná · Fonte SETI/LGU e Sistema de códigos de vagas.</div>`;
}

/* ACTIVE definition (line 6816 in painel.js overrides line 6751) */
function facultyAlertCard(u, rows) {
  const m = facultyMetrics(u);
  const avgOcc = mean(rows, x => facultyMetrics(x).occupationRate);
  const avgCres = mean(rows, x => facultyMetrics(x).cresParticipation);
  const avgIdle = mean(rows, x => facultyMetrics(x).cresIdleRate);
  const avgCond = mean(rows, x => facultyMetrics(x).conditionedShare);
  let stateLabel = "Quadro estável", cls = "alert-ok", icon = "●", trigger = `IND-46 ${formatPercent(m.occupationRate)}`;
  if (m.conditionedShare > 20) { stateLabel = "Restrição de provimento"; cls = "alert-danger"; icon = "●"; trigger = `IND-49 ${formatPercent(m.conditionedShare)}`; }
  else if (m.cresIdleRate > 15) { stateLabel = "Capacidade CRES autorizada não utilizada"; cls = "alert-orange"; icon = "●"; trigger = `IND-58 ${formatPercent(m.cresIdleRate)}`; }
  else if (m.occupationRate < 70 && m.cresParticipation > 20) { stateLabel = "Dependência de pessoal temporário"; cls = "alert-warn"; icon = "●"; trigger = `IND-46 ${formatPercent(m.occupationRate)} / IND-59 ${formatPercent(m.cresParticipation)}`; }
  return `<article class="faculty-alert-card ${cls}"><span class="faculty-alert-icon">${icon}</span><div><strong>${u.sigla}</strong><span>${stateLabel}</span><em>${trigger}</em></div></article>`;
}
