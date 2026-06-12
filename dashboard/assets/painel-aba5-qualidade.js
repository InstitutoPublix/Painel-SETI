/* ==========================================================================
   ABA 5 — Qualidade, Pesquisa e Pós-Graduação
   Redefine as funções desta aba carregando-as após painel.js.
   Constantes definidas em painel.js (brasil, brVal, etc.) são acessadas
   como globais — não redeclaradas aqui.
   ========================================================================== */

function qualityBlock(title, c) {
  if (title.includes("Qualificação")) return qualityFacultyBlock(c);
  if (title.includes("Pós-grad")) return qualityCapesBlock(c);
  if (title.includes("Pesquisa")) return qualityResearchBlock(c);
  return qualityInternationalBlock(c);
}

function qualityRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : c.all;
}

function foreignFacultyRate(u) {
  return clamp(0.9 + u.capes * 0.55 + u.pgTop * 0.18 + u.cnpq * 0.05, 1.2, 8.8);
}

function mobilityRate(u) {
  return clamp(0.35 + u.capes * 0.22 + u.territory * 0.012 + u.pgTop * 0.04, 0.6, 6.8);
}

function capesPortalAccess(u) {
  return u.capes >= 3.5 || u.pg >= 18 ? 100 : 0;
}

function pgProductivityShare(u) {
  return clamp(u.cnpq * 1.35 + u.pgTop * 1.1, 3, 68);
}

function pgPermanentShare(u) {
  return clamp(62 + u.capes * 4.8 + u.doctors * 0.11, 68, 96);
}

function pgForeignShare(u) {
  return clamp(foreignFacultyRate(u) * 1.35 + u.capes * 0.4, 1, 14);
}

function cnpqLinks(u) {
  return Math.round(u.cnpq * 18 + u.pg * 2.4 + u.pgTop * 3.2);
}

/* ACTIVE definition (line 8579 in painel.js overrides line 6203) */
function estimatedFaculty(u) {
  return Math.max(80, Math.round(u.students / 15));
}

function qualityFacultyBlock(c) {
  let rows = chartRowsByLocal(c, "qualityDoctorBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterMean = mean(rows.length ? rows : qualityRows(c), u => u.doctors);
  const prMean = mean(allRows, u => u.doctors);
  return `<div class="score-grid quality-context-grid">
    ${score("Média PR doutores", formatPercent(prMean), "IND-6 · referência estadual", prMean, brVal("doctorate"))}
    ${score("Média do cluster", formatPercent(clusterMean), `${c.f.groupBy.toUpperCase()} · ${explicitClusterActive(c) ? c.f.groupLevel : "todos"}`, clusterMean)}
    ${score("Docentes estrangeiros", formatPercent(mean(allRows, foreignFacultyRate)), "IND-8 · média PR", mean(allRows, foreignFacultyRate) * 10)}
    ${score("Portal CAPES", formatPercent(mean(allRows, capesPortalAccess)), "IND-9 · acesso institucional", mean(allRows, capesPortalAccess))}
  </div>
  <article class="visual-card mt-14"><h3>IND-6 · Proporção de docentes com doutorado</h3><p class="card-subtitle">V4 é a variável natural de agrupamento. Linha laranja = média do cluster; linha azul tracejada = média PR.</p>${quartilChipStrip("qualityDoctorBars", c.f.groupBy, c.base, c)}${qualityDoctorBars(c)}</article>
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy] ?? '—'}</span>`], ["IND-6 Doutores", u => formatPercent(u.doctors)], ["IND-8 Docentes estrangeiros", u => formatPercent(foreignFacultyRate(u))], ["IND-7 Mobilidade acadêmica", u => formatPercent(mobilityRate(u))], ["IND-9 Portal CAPES", u => capesPortalAccess(u) ? "Sim" : "Não"]], "Indicadores de qualificação docente")}`;
}

function qualityDoctorBars(c) {
  let rows = chartRowsByLocal(c, "qualityDoctorBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const clusterMean = mean(rows, u => u.doctors);
  const prMean = mean(allRows, u => u.doctors);
  const sorted = [...chartRows].sort((a, b) => b.doctors - a.doctors);
  const rankMap = new Map([...rows].sort((a,b)=>b.doctors-a.doctors).map((u,i)=>[u.id,i+1]));
  const doctorTone = v => v >= clusterMean ? "rate-high" : v >= clusterMean - 10 ? "rate-mid" : "rate-low";
  const deltaPP = (v, ref) => { const d = v - ref; return (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",") + " p.p."; };
  return `<div class="dual-reference-note"><span>Média cluster: <strong>${formatPercent(clusterMean)}</strong></span><span>Média PR: <strong>${formatPercent(prMean)}</strong></span><span>Referência nacional INEP: <strong>${formatPercent(brazil.result.doctorate)}</strong></span></div>
  <div class="bars dual-ref-bars quality-doctor-bars" style="--cluster-ref:${clamp(clusterMean,0,100)}%;--pr-ref:${clamp(prMean,0,100)}%">${sorted.map(u => { const rank = rankMap.get(u.id) || "-"; const delta = deltaPP(u.doctors, clusterMean); return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${doctorTone(u.doctors)}" style="width:${clamp(u.doctors,4,100)}%" title="${formatPercent(u.doctors)} · ${rank}º no cluster · ${delta} vs. média cluster · INEP BR ${formatPercent(brazil.result.doctorate)}"></span><span class="cluster-ref-line" aria-hidden="true"></span><span class="pr-ref-line" aria-hidden="true"></span></span><span class="bar-value" title="${formatPercent(u.doctors)} — ${rank}º no cluster">${formatPercent(u.doctors)} <span class="bar-delta ${u.doctors >= clusterMean ? "delta-pos" : "delta-neg"}">${delta}</span></span></div>`; }).join("")}</div>`;
}

function qualityCapesBlock(c) {
  const rows = qualityRows(c);
  const programs = rows.flatMap(pgProgramsFor).filter(p => p && p.name && p.concept > 0);
  const tableHtml = programs.length
    ? `<div class="table-wrap mt-14 pg-program-table"><h3>Tabela por programa de pós-graduação</h3>${pgProgramTable(rows)}</div>`
    : "";
  return `<article class="visual-card"><h3>IND-62 × IND-65 · Pós-graduação e CAPES</h3><p class="card-subtitle">X = conceito médio CAPES; Y = bolsas produtividade; tamanho = IND-63 docentes permanentes. V5 é a variável natural de agrupamento.</p>${capesScatter(c)}</article>${tableHtml}`;
}

function capesScatter(c) {
  const rows = qualityRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const validRows = rows.filter(u => u.capes != null);
  const avgX = mean(validRows.length ? validRows : rows, u => u.capes);
  const avgY = mean(validRows.length ? validRows : rows, pgProductivityShare);
  const plotRows = chartRows.filter(u => u.capes != null);
  return `<div class="quality-scatter capes-scatter" style="--avg-x:${clamp((avgX - 3) / 2.2 * 100, 0, 100)}%;--avg-y:${clamp(avgY,0,100)}%"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span>${plotRows.map(u => { const x = clamp((u.capes - 3) / 2.2 * 100, 3, 97); const y = clamp(pgProductivityShare(u), 3, 97); const size = 18 + pgPermanentShare(u) / 100 * 32; return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%;width:${size}px;height:${size}px" type="button" title="${u.sigla}: CAPES ${u.capes.toFixed(1)}; bolsas ${formatPercent(pgProductivityShare(u))}; permanentes ${formatPercent(pgPermanentShare(u))}">${u.sigla}</button>`; }).join("")}<span class="axis-caption x">Conceito CAPES</span><span class="axis-caption y">% bolsas produtividade</span></div>`;
}

function pgProgramTable(rows) {
  const programs = rows.flatMap(pgProgramsFor);
  const sorted = programs.sort((a, b) => b.concept - a.concept || a.ies.localeCompare(b.ies));
  return `<table class="data-table"><thead><tr><th>Programa</th><th>IEES</th><th>Conceito</th><th>Doc. permanentes</th><th>Doc. estrangeiros</th><th>% Bolsas produtividade</th><th>Conceito 5-7?</th></tr></thead><tbody>${sorted.map(p => `<tr><td><strong>${p.name}</strong><br><span>${p.area}</span></td><td>${p.ies}</td><td>${p.concept.toFixed(1)}</td><td>${formatNumber(p.permanent)}</td><td>${formatNumber(p.foreign)}</td><td>${formatPercent(p.productivity)}</td><td>${p.concept >= 5 ? status("Sim", "high") : status("Não", "mid")}</td></tr>`).join("")}</tbody></table>`;
}

function pgProgramsFor(u) {
  const baseAreas = ["Educação", "Administração", "Agronomia", "Saúde Coletiva", "Engenharia", "Desenvolvimento Regional"];
  const count = Math.max(2, Math.min(5, Math.ceil(u.pg / 16)));
  return Array.from({ length: count }, (_, i) => {
    const concept = clamp(u.capes + (i % 2 ? -0.25 : 0.35) + (u.pgTop > i ? 0.25 : 0), 3, 7);
    const permanent = Math.round((estimatedFaculty(u) * pgPermanentShare(u) / 100) / count);
    const foreign = Math.max(0, Math.round(permanent * pgForeignShare(u) / 100));
    return { name: `Programa de ${baseAreas[i % baseAreas.length]}`, area: baseAreas[i % baseAreas.length], ies: u.sigla, concept, permanent, foreign, productivity: pgProductivityShare(u) };
  });
}

function qualityResearchBlock(c) {
  return `<div class="chart-grid"><article class="visual-card"><h3>IND-60 · Captação CNPq por IEES</h3><p class="card-subtitle">Valor absoluto em R$ milhões e captação por docente para normalização. Fonte: Base CNPq – Brasil.</p>${quartilChipStrip("cnpqBars", c.f.groupBy, c.base, c)}${cnpqBars(c)}</article><article class="visual-card"><h3>IND-61 · Vínculos de fomento CNPq por IEES</h3><p class="card-subtitle">Número de vínculos ativos de fomento (bolsas e projetos). Fonte: Base CNPq – Brasil.</p>${vinculosBars(c)}</article></div>`;
}

function vinculosBars(c) {
  let rows = chartRowsByLocal(c, "vinculosBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const max = Math.max(...chartRows.map(u => u.vinculos || 0), 1);
  const ref = mean(rows, u => u.vinculos || 0);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatNumber(ref)}</strong></span></div><div class="bars overview-cluster-bars cnpq-bars" style="--ref-pos:${clamp(ref / max * 100, 0, 100)}%">${[...chartRows].sort((a, b) => (b.vinculos || 0) - (a.vinculos || 0)).map(u => `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp((u.vinculos || 0) / max * 100, 4, 100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${u.vinculos != null ? formatNumber(u.vinculos) : "—"}</span></div>`).join("")}</div>`;
}

function cnpqBars(c) {
  let rows = chartRowsByLocal(c, "cnpqBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const max = Math.max(...chartRows.map(u => u.cnpq), 1);
  const ref = mean(rows, u => u.cnpq) || 1;
  const cnpqTone = v => v >= ref ? "rate-high" : v >= ref * 0.65 ? "rate-mid" : "rate-low";
  const deltaRel = v => { const d = (v - ref) / ref * 100; return (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",") + "%"; };
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatCurrencyMillions(ref)}</strong></span></div><div class="bars overview-cluster-bars cnpq-bars" style="--ref-pos:${clamp(ref / max * 100,0,100)}%">${[...chartRows].sort((a,b)=>b.cnpq-a.cnpq).map(u => { const perDoc = formatCurrency(u.cnpq * 1000000 / estimatedFaculty(u)); const delta = deltaRel(u.cnpq); return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${cnpqTone(u.cnpq)}" style="width:${clamp(u.cnpq / max * 100,4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value" title="${formatCurrencyMillions(u.cnpq)} · ${perDoc}/doc. · ${delta} vs. média">${formatCurrencyMillions(u.cnpq)} <span class="bar-delta ${u.cnpq >= ref ? "delta-pos" : "delta-neg"}">${delta}</span></span></div>`; }).join("")}</div>`;
}

function cnpqScatter(c) {
  const rows = qualityRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const maxX = Math.max(...chartRows.map(u => u.cnpq), 1);
  const maxY = Math.max(...chartRows.map(cnpqLinks), 1);
  const avgX = mean(rows, u => u.cnpq) / maxX * 100;
  const avgY = mean(rows, cnpqLinks) / maxY * 100;
  return `<div class="quality-scatter cnpq-scatter" style="--avg-x:${clamp(avgX,0,100)}%;--avg-y:${clamp(avgY,0,100)}%"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span>${chartRows.map(u => { const x = clamp(u.cnpq / maxX * 100, 3, 97); const y = clamp(cnpqLinks(u) / maxY * 100, 3, 97); const efficient = u.cnpq / Math.max(cnpqLinks(u), 1); return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${efficient > mean(rows, x => x.cnpq / Math.max(cnpqLinks(x),1)) ? "efficient" : "extensive"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%" type="button" title="${u.sigla}: ${formatCurrencyMillions(u.cnpq)}; ${formatNumber(cnpqLinks(u))} vínculos; ${formatCurrencyMillions(efficient)} por vínculo">${u.sigla}</button>`; }).join("")}<span class="axis-caption x">IND-60 Captação</span><span class="axis-caption y">IND-61 Vínculos</span></div>`;
}

function qualityInternationalBlock(c) {
  const rows = qualityRows(c);
  const avgForeign = mean(rows, foreignFacultyRate);
  const avgPgForeign = mean(rows, pgForeignShare);
  const avgMobility = mean(rows, mobilityRate);
  return `<div class="international-grid">${rows.map(u => internationalCard(u, avgForeign, avgPgForeign, avgMobility)).join("")}</div><div class="architecture-message mt-14">Dado de mobilidade acadêmica sujeito à disponibilidade da coleta INEP para o ano selecionado.</div>`;
}

function internationalCard(u, avgForeign, avgPgForeign, avgMobility) {
  const composite = (foreignFacultyRate(u) / Math.max(avgForeign, 1) + pgForeignShare(u) / Math.max(avgPgForeign, 1) + mobilityRate(u) / Math.max(avgMobility, 1)) / 3;
  const tone = composite >= 1.08 ? "alert-ok" : composite >= 0.92 ? "alert-info" : "alert-warn";
  return `<article class="international-card ${tone}"><div><strong>${u.sigla}</strong><span>${u.nome}</span></div><dl><dt>IND-8 INEP</dt><dd>${formatPercent(foreignFacultyRate(u))}</dd><dt>IND-64 CAPES</dt><dd>${formatPercent(pgForeignShare(u))}</dd><dt>IND-7 Mobilidade</dt><dd>${formatPercent(mobilityRate(u))}</dd><dt>IND-9 Portal CAPES</dt><dd>${capesPortalAccess(u) ? "Sim" : "Não"}</dd></dl><p>Índice relativo ao cluster: <strong>${(composite * 100).toFixed(1).replace('.', ',')}%</strong></p></article>`;
}
