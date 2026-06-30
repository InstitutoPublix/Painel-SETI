/* ==========================================================================
   ABA 5 — Qualidade, Pesquisa e Pós-Graduação
   Redefine as funções desta aba carregando-as após painel.js.
   Constantes definidas em painel.js (brasil, brVal, etc.) são acessadas
   como globais — não redeclaradas aqui.
   ========================================================================== */

function qualityBlock(title, c) {
  // try/catch defensivo: uma exceção em um bloco (ex.: campo nulo no escopo
  // Brasil) não pode apagar a aba inteira.
  try {
    if (title.includes("Qualificação")) return qualityFacultyBlock(c);
    if (title.includes("Pós-grad")) return qualityCapesBlock(c);
    if (title.includes("Pesquisa")) return qualityResearchBlock(c);
    return qualityInternationalBlock(c);
  } catch (err) {
    console.error("Aba 5 — falha ao renderizar bloco \"" + title + "\":", err);
    return `<div class="empty-state"><span class="empty-icon">⚠</span><p class="empty-title">Bloco indisponível</p><p class="empty-desc">Não foi possível renderizar "${title}" para o recorte selecionado.</p></div>`;
  }
}

// ── Filtro de indicadores da aba (barra "Visualizando:") ────────────────────
function qualityIndFilter(blockCodes) {
  const act = (state.activeIndicator && state.activeIndicator.quality) || "all";
  return act !== "all" && blockCodes.includes(act) ? act : null;
}

function qualityRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : c.all;
}

// Helpers com null-guards (escopo Brasil tem campos ausentes em parte das IES)
function foreignFacultyRate(u) {
  if (u.docForeign != null) return u.docForeign;
  return clamp(0.9 + (u.capes || 0) * 0.55 + (u.pgTop || 0) * 0.18 + (u.cnpq || 0) * 0.05, 1.2, 8.8);
}

function mobilityRate(u) {
  if (u.mobility != null) return u.mobility;
  return clamp(0.35 + (u.capes || 0) * 0.22 + (u.territory || 0) * 0.012 + (u.pgTop || 0) * 0.04, 0.6, 6.8);
}

function capesPortalAccess(u) {
  if (u.capesPortal != null) return u.capesPortal ? 100 : 0;
  return (u.capes || 0) >= 3.5 || (u.pg || 0) >= 18 ? 100 : 0;
}

// Percentuais REAIS da Base CAPES (via pipeline/enrich_capes.py) quando
// disponíveis; fórmulas mantidas apenas como fallback.
function pgProductivityShare(u) {
  if (u.capesDocBolsa != null) return u.capesDocBolsa;
  return clamp((u.cnpq || 0) * 1.35 + (u.pgTop || 0) * 1.1, 3, 68);
}

function pgPermanentShare(u) {
  if (u.capesDocPermanentes != null) return u.capesDocPermanentes;
  return clamp(62 + (u.capes || 0) * 4.8 + (u.doctors || 0) * 0.11, 68, 96);
}

function pgForeignShare(u) {
  if (u.capesDocEstrangeiros != null) return u.capesDocEstrangeiros;
  return clamp(foreignFacultyRate(u) * 1.35 + (u.capes || 0) * 0.4, 1, 14);
}

function cnpqLinks(u) {
  return Math.round((u.cnpq || 0) * 18 + (u.pg || 0) * 2.4 + (u.pgTop || 0) * 3.2);
}

/* ACTIVE definition (line 8579 in painel.js overrides line 6203) */
function estimatedFaculty(u) {
  // Total real de docentes em exercício (Base IES INEP, via pipeline);
  // proxy alunos÷15 apenas como fallback.
  if (u.docExe) return u.docExe;
  if (u.docTotal) return u.docTotal;
  return Math.max(80, Math.round(u.students / 15));
}

// ── 1. Qualificação docente ─────────────────────────────────────────────────
function qualityFacultyBlock(c) {
  let rows = chartRowsByLocal(c, "qualityDoctorBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  // Cards respondem ao filtro de IEES: com seleção ativa, recalculam sobre
  // as IEES selecionadas (antes usavam sempre o universo completo).
  const selRows = c.display && c.display.length ? c.display : allRows;
  const selLabel = c.display && c.display.length && c.display.length < allRows.length
    ? (c.display.length === 1 ? c.display[0].sigla : `${c.display.length} IEES selecionadas`)
    : null;
  const scopeTxt = selLabel || (isBrasilContext(c) ? "média nacional" : "média PR");
  const clusterMean = mean(rows.length ? rows : qualityRows(c), u => u.doctors);
  const act = qualityIndFilter(["ind6", "ind7", "ind8", "ind9"]);

  const cards = `<div class="score-grid quality-context-grid">
    ${score(`Doutores — ${scopeTxt}`, formatPercent(mean(selRows, u => u.doctors)), "IND-6 · recorte do filtro de IEES", mean(selRows, u => u.doctors), brVal("doctorate"))}
    ${score("Média do cluster", formatPercent(clusterMean), `${c.f.groupBy.toUpperCase()} · ${explicitClusterActive(c) ? c.f.groupLevel : "todos"}`, clusterMean)}
    ${score(`Docentes estrangeiros — ${scopeTxt}`, formatPercent(mean(selRows, foreignFacultyRate)), "IND-8 · recorte do filtro de IEES", mean(selRows, foreignFacultyRate) * 10)}
    ${score(`Portal CAPES — ${scopeTxt}`, formatPercent(mean(selRows, capesPortalAccess)), "IND-9 · % das IEES do recorte com acesso", mean(selRows, capesPortalAccess))}
  </div>`;

  const barsCard = `<article class="visual-card mt-14"><h3>IND-6 · Proporção de docentes com doutorado</h3><p class="card-subtitle">V4 é a variável natural de agrupamento. Linhas tracejadas: laranja = média do cluster · azul = média ${isBrasilContext(c) ? "nacional" : "PR"} · roxa = referência nacional INEP.</p>${quartilChipStrip("qualityDoctorBars", c.f.groupBy, c.base, c)}${qualityDoctorBars(c)}</article>`;

  return `${cards}
  ${!act || act === "ind6" ? barsCard : ""}
  ${!act || act !== "ind6" ? qualityFacultyTable(rows.length ? rows : qualityRows(c), act) : ""}`;
}

function qualityDoctorBars(c) {
  let rows = chartRowsByLocal(c, "qualityDoctorBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const clusterMean = mean(rows, u => u.doctors);
  const prMean = mean(allRows, u => u.doctors);
  const inepRef = brazil.result.doctorate;
  const sorted = [...chartRows].sort((a, b) => b.doctors - a.doctors);
  const rankMap = new Map([...rows].sort((a,b)=>b.doctors-a.doctors).map((u,i)=>[u.id,i+1]));
  const doctorTone = v => v >= clusterMean ? "rate-high" : v >= clusterMean - 10 ? "rate-mid" : "rate-low";
  const deltaPP = (v, ref) => { const d = v - ref; return (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",") + " p.p."; };
  return `<div class="dual-reference-note"><span><i class="ref-dot ref-cluster"></i>Média cluster: <strong>${formatPercent(clusterMean)}</strong></span><span><i class="ref-dot ref-pr"></i>Média ${isBrasilContext(c) ? "nacional" : "PR"}: <strong>${formatPercent(prMean)}</strong></span><span><i class="ref-dot ref-inep"></i>Referência nacional INEP: <strong>${formatPercent(inepRef)}</strong></span></div>
  <div class="bars dual-ref-bars quality-doctor-bars" style="--cluster-ref:${clamp(clusterMean,0,100)}%;--pr-ref:${clamp(prMean,0,100)}%;--inep-ref:${clamp(inepRef,0,100)}%">${sorted.map(u => { const rank = rankMap.get(u.id) || "-"; const delta = deltaPP(u.doctors, clusterMean); return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${doctorTone(u.doctors)}" style="width:${clamp(u.doctors,4,100)}%" title="${formatPercent(u.doctors)} · ${rank}º no cluster · ${delta} vs. média cluster · INEP BR ${formatPercent(inepRef)}"></span><span class="cluster-ref-line" aria-hidden="true"></span><span class="pr-ref-line" aria-hidden="true"></span><span class="inep-ref-line" aria-hidden="true"></span></span><span class="bar-value" title="${formatPercent(u.doctors)} — ${rank}º no cluster">${formatPercent(u.doctors)} <span class="bar-delta ${u.doctors >= clusterMean ? "delta-pos" : "delta-neg"}">${delta}</span></span></div>`; }).join("")}</div>`;
}

// Tabela visual de qualificação docente: mini-barras coloridas + delta vs média
// (mesma linguagem da Tabela comparativa da ABA 2)
function qualityFacultyTable(rows, act) {
  if (!rows.length) return "";
  let cols = [
    { code: "ind6", h: "IND-6 Doutores",               get: u => u.doctors,            fmt: formatPercent, max: 100 },
    { code: "ind8", h: "IND-8 Docentes estrangeiros",  get: u => foreignFacultyRate(u), fmt: formatPercent, max: null },
    { code: "ind7", h: "IND-7 Mobilidade acadêmica",   get: u => mobilityRate(u),       fmt: formatPercent, max: null }
  ];
  if (act) cols = cols.filter(col => col.code === act);
  const showPortal = !act || act === "ind9";
  const means = cols.map(col => mean(rows, col.get));
  const maxes = cols.map((col, i) => col.max || Math.max(...rows.map(col.get), 0.001));
  const tone = (v, avg) => v >= avg * 1.1 ? "g" : v <= avg * 0.9 ? "r" : "y";
  const toneBg  = { g: "#f0faf5", y: "#fffbeb", r: "#fdf2f2" };
  const toneBar = { g: "#14804a", y: "#f59e0b", r: "#dc2626" };
  const trs = [...rows].sort((a, b) => b.doctors - a.doctors).map(u => {
    const tds = cols.map((col, i) => {
      const v = col.get(u);
      const t = tone(v, means[i]);
      const d = v - means[i];
      const deltaTxt = (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",");
      return `<td style="background:${toneBg[t]}"><span>${col.fmt(v)}</span> <span class="bar-delta ${d >= 0 ? "delta-pos" : "delta-neg"}">(${deltaTxt})</span><div style="height:5px;border-radius:3px;background:${toneBar[t]};width:${clamp(v / maxes[i] * 100, 2, 100).toFixed(1)}%;margin-top:4px;min-width:3px"></div></td>`;
    }).join("");
    const portalTd = showPortal ? `<td style="text-align:center">${capesPortalAccess(u) ? '<span class="status-pill status-high">Sim</span>' : '<span class="status-pill status-low">Não</span>'}</td>` : "";
    return `<tr><td><strong>${u.sigla}</strong></td>${tds}${portalTd}</tr>`;
  }).join("");
  const footer = `<tr><td><em>Média do cluster</em></td>${cols.map((col, i) => `<td><em>${col.fmt(means[i])}</em></td>`).join("")}${showPortal ? "<td></td>" : ""}</tr>`;
  return `<div class="table-wrap mt-14">
    <h3>Indicadores de qualificação docente</h3>
    <p class="card-subtitle">Verde: ≥ 10% acima da média do cluster · Amarelo: na faixa da média (±10%) · Vermelho: ≥ 10% abaixo. Entre parênteses, a diferença para a média.</p>
    <table class="data-table quality-visual-table"><thead><tr><th>IEES</th>${cols.map(col => `<th>${col.h}</th>`).join("")}${showPortal ? "<th>IND-9 Portal CAPES</th>" : ""}</tr></thead><tbody>${trs}</tbody><tfoot>${footer}</tfoot></table>
  </div>`;
}

// ── 2. Pós-graduação e CAPES ─────────────────────────────────────────────────
// A antiga tabela sintética por programa foi substituída: agora o pipeline
// (enrich_capes.py) extrai os programas REAIS da Base CAPES (Base_Docentes),
// exibidos em pgProgramRealTable. Os percentuais do scatter também são reais
// (capesDocBolsa/Permanentes/Estrangeiros) quando presentes no JSON.
function qualityCapesBlock(c) {
  const rows   = qualityRows(c).filter(u => u.capes != null);
  const rows5b = qualityRows(c);
  if (!rows.length) return `<div class="empty-state"><span class="empty-icon">📊</span><p class="empty-title">Sem dados CAPES</p><p class="empty-desc">Nenhuma IEES do recorte possui conceito CAPES na base de dados.</p></div>${pg5bBlocks(rows5b, c)}`;
  const allReal = rows.every(u => u.capesDocBolsa != null && u.capesDocPermanentes != null);
  const originNote = allReal
    ? "Percentuais reais da Base CAPES (docentes distintos por IES)."
    : `Parte dos percentuais é estimada${estBadge("IES sem cobertura na Base CAPES — % de bolsa/permanentes estimados por fórmula")}.`;
  return `<article class="visual-card">
    <h3>Conceito CAPES × docentes com bolsa de produtividade</h3>
    <p class="card-subtitle">Eixo X = conceito médio CAPES (IND-62); eixo Y = % de docentes da pós com bolsa de produtividade (IND-65); tamanho da bolha = % de docentes permanentes vinculados à pós-graduação (IND-63). ${originNote}</p>
    <div class="capes-layout">${capesScatter(c)}${capesHowTo(rows)}</div>
  </article>
  ${capesSynthesisTable(rows)}
  ${pgProgramRealTable(rows, c)}
  ${pg5bBlocks(rows5b, c)}`;
}

// ── Tabela por programa de pós-graduação (dados REAIS da Base CAPES) ─────────
function setPgProgramIes(sigla) {
  state.pgProgramIes = sigla;
  state.pgProgramGrau = "";
  render();
}
window.setPgProgramIes = setPgProgramIes;

function setPgProgramGrau(grau) {
  state.pgProgramGrau = grau;
  render();
}
window.setPgProgramGrau = setPgProgramGrau;

function pgProgramRealTable(rows, c) {
  const all = window.SETI_CAPES_PROGRAMS || null;
  if (!all) return "";
  const siglas = rows.map(u => u.sigla).filter(s => Array.isArray(all[s]) && all[s].length);
  if (!siglas.length) return "";
  const sel      = siglas.includes(state.pgProgramIes) ? state.pgProgramIes : siglas[0];
  const progsAll = all[sel] || [];
  const ano      = progsAll[0] ? progsAll[0].ano : "";

  // Seletor de IES
  const tabs = siglas.map(s =>
    `<button class="rank-metric-btn${s === sel ? " active" : ""}" type="button" onclick="setPgProgramIes('${s}')">${s}</button>`
  ).join("");

  // Seletor de grau — apenas graus presentes nesta IES
  const GRAU_LABELS = {
    "MESTRADO":                                    "Mestrado",
    "MESTRADO PROFISSIONAL":                       "Mestrado Profissional",
    "DOUTORADO":                                   "Doutorado",
    "MESTRADO/DOUTORADO":                          "Mestrado/Doutorado",
    "MESTRADO PROFISSIONAL/DOUTORADO PROFISSIONAL":"Mestrado Prof./Dout. Prof.",
  };
  const grausPresentes = [...new Set(progsAll.map(p => p.grau).filter(Boolean))].sort();
  const selGrau = (state.pgProgramGrau && grausPresentes.includes(state.pgProgramGrau))
    ? state.pgProgramGrau : "";
  const grauBtns = [
    `<button class="rank-metric-btn${!selGrau ? " active" : ""}" type="button" onclick="setPgProgramGrau('')">Todos</button>`,
    ...grausPresentes.map(g =>
      `<button class="rank-metric-btn${g === selGrau ? " active" : ""}" type="button" onclick="setPgProgramGrau('${g.replace(/'/g, "\\'")}')">${GRAU_LABELS[g] || g}</button>`
    ),
  ].join("");

  // Filtra programas pelo grau selecionado
  const progs    = selGrau ? progsAll.filter(p => p.grau === selGrau) : progsAll;
  const emptyMsg = (selGrau && !progs.length)
    ? `<p class="card-subtitle" style="padding:8px 0;color:#ef4444">Nenhum programa de "${GRAU_LABELS[selGrau] || selGrau}" nesta IES.</p>`
    : "";

  const trs = progs.map(p => `<tr>
    <td><strong>${p.nome}</strong><br><span>${p.area}</span></td>
    <td>${p.grau || "—"}</td>
    <td>${p.conceito != null ? p.conceito.toFixed(0) : "—"}</td>
    <td>${formatNumber(p.docentes)}</td>
    <td>${formatNumber(p.permanentes)}</td>
    <td>${formatNumber(p.estrangeiros)}</td>
    <td>${formatNumber(p.bolsistas)}</td>
    <td>${p.conceito != null && p.conceito >= 5 ? '<span class="status-pill status-high">Sim</span>' : '<span class="status-pill status-mid">Não</span>'}</td>
  </tr>`).join("");

  return `<div class="table-wrap mt-14 pg-program-table">
    <h3>Tabela por programa de pós-graduação — ${sel}</h3>
    <p class="card-subtitle">Dados reais da Base CAPES (Base_Docentes, AN_BASE=${ano}) · ${progsAll.length} programas · docentes distintos por programa (set de ID_PESSOA).</p>
    <div class="rank-metric-selector" style="margin-bottom:4px">${tabs}</div>
    <div class="rank-metric-selector" style="margin-bottom:10px;margin-top:4px">${grauBtns}</div>
    ${emptyMsg}
    <table class="data-table">
      <thead><tr>
        <th>Programa</th>
        <th>Grau</th>
        <th title="Nota de avaliação CAPES do programa (escala 3–7). Programas apenas de mestrado vão até 5; a nota 6 ou 7 exige oferta de doutorado com desempenho de excelência.">Conceito CAPES</th>
        <th title="Total de docentes vinculados ao programa, de qualquer categoria (PERMANENTE, COLABORADOR, VISITANTE), contados uma única vez por programa via set(ID_PESSOA) na Base_Docentes CAPES.">Docentes Vinculados</th>
        <th title="Docentes com DS_CATEGORIA_DOCENTE = 'PERMANENTE' na Base_Docentes CAPES, contados uma única vez por programa (set de ID_PESSOA).">Docentes Permanentes</th>
        <th title="Docentes com DS_TIPO_NACIONALIDADE_DOCENTE = 'ESTRANGEIRO' na Base_Docentes CAPES, contados uma única vez por programa (set de ID_PESSOA).">Docentes Estrangeiros</th>
        <th title="Docentes com qualquer categoria de bolsa de produtividade CNPq diferente de 'NA' no campo CD_CAT_BOLSA_PRODUTIVIDADE da Base_Docentes CAPES.">Docentes c/ Bolsa Produtividade</th>
        <th title="Indica se o conceito CAPES do programa é 5, 6 ou 7 — referência de excelência na avaliação quadrienal CAPES.">Conceito 5–7?</th>
      </tr></thead>
      <tbody>${trs}</tbody>
    </table>
  </div>`;
}

function capesScatter(c) {
  const rows = qualityRows(c).filter(u => u.capes != null);
  const allRows = (c.base.length ? c.base : c.all).filter(u => u.capes != null);
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const avgX = mean(rows, u => u.capes);
  const avgY = mean(rows, pgProductivityShare);
  const xVals = chartRows.map(u => u.capes);
  const xMin = Math.max(1, Math.min(...xVals, avgX) - 0.4);
  const xMax = Math.min(7, Math.max(...xVals, avgX) + 0.4);
  const yMax = Math.max(...chartRows.map(pgProductivityShare), avgY) * 1.25;
  const toX = v => clamp((v - xMin) / Math.max(xMax - xMin, 0.1) * 100, 3, 97);
  const toY = v => clamp(v / Math.max(yMax, 0.1) * 100, 3, 97);
  const ax = toX(avgX).toFixed(1), ay = toY(avgY).toFixed(1);
  const fmt1 = v => v.toFixed(1).replace(".", ",");

  const quadBg =
    `<i class="capes-quad" style="left:0;bottom:${ay}%;width:${ax}%;top:0;background:rgba(234,179,8,0.07)"></i>` +
    `<i class="capes-quad" style="left:${ax}%;bottom:${ay}%;right:0;top:0;background:rgba(34,197,94,0.08)"></i>` +
    `<i class="capes-quad" style="left:0;bottom:0;width:${ax}%;height:${ay}%;background:rgba(220,38,38,0.06)"></i>` +
    `<i class="capes-quad" style="left:${ax}%;bottom:0;right:0;height:${ay}%;background:rgba(148,163,184,0.08)"></i>`;
  const quadLabels =
    `<span class="capes-quad-label" style="left:8px;top:6px;color:#b45309">Menor conceito<br>+ maior bolsa</span>` +
    `<span class="capes-quad-label" style="right:8px;top:6px;color:#15803d;text-align:right">Maior conceito<br>+ maior bolsa</span>` +
    `<span class="capes-quad-label" style="left:8px;bottom:6px;color:#b91c1c">Menor conceito<br>+ menor bolsa</span>` +
    `<span class="capes-quad-label" style="right:8px;bottom:6px;color:#64748b;text-align:right">Maior conceito<br>+ menor bolsa</span>`;
  const refLabels =
    `<span class="capes-ref-label" style="left:2px;bottom:calc(${ay}% + 3px);color:#e07b10">Média do cluster: ${fmt1(avgY)}%</span>` +
    `<span class="capes-ref-label" style="left:calc(${ax}% + 5px);bottom:2px;color:#e07b10">Média do cluster: ${fmt1(avgX)}</span>`;

  const dots = chartRows.map(u => {
    const x = toX(u.capes), y = toY(pgProductivityShare(u));
    const size = Math.round(20 + pgPermanentShare(u) / 100 * 26);
    const tooltip = `${u.sigla}: CAPES ${fmt1(u.capes)} · bolsas ${formatPercent(pgProductivityShare(u))} · permanentes ${formatPercent(pgPermanentShare(u))}`;
    return `<button class="scatter-point capes-dot ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%;width:${size}px;height:${size}px;font-size:${size >= 34 ? 8.5 : 0}px" type="button" title="${tooltip}" aria-label="${tooltip}">${size >= 34 ? u.sigla : ""}</button>` +
      (size < 34 ? `<span class="capes-dot-label" style="left:${x}%;bottom:calc(${y}% + ${Math.round(size/2) + 4}px)">${u.sigla}</span>` : "");
  }).join("");

  return `<div class="quality-scatter capes-scatter" style="--avg-x:${ax}%;--avg-y:${ay}%">${quadBg}<span class="scatter-ref-v"></span><span class="scatter-ref-h"></span>${quadLabels}${refLabels}${dots}<span class="axis-caption x">Conceito CAPES</span><span class="axis-caption y">% com bolsa de produtividade</span></div>`;
}

function capesHowTo(rows) {
  return `<div class="capes-howto">
    <div class="ff-howto">
      <strong>Como ler este gráfico</strong>
      <p>· Cada bolha representa uma IEES.<br>· Quanto mais à direita, maior o conceito CAPES.<br>· Quanto mais acima, maior a proporção de docentes com bolsa de produtividade.<br>· Quanto maior a bolha, maior a proporção de docentes permanentes na pós-graduação.</p>
    </div>
    <div class="capes-size-legend">
      <strong>Legenda — tamanho da bolha</strong>
      <span class="capes-size-note">(% docentes permanentes na pós)</span>
      <div><i style="width:14px;height:14px"></i>Pequeno: até 75%</div>
      <div><i style="width:22px;height:22px"></i>Médio: 75% a 85%</div>
      <div><i style="width:30px;height:30px"></i>Grande: acima de 85%</div>
    </div>
  </div>`;
}

// Síntese comparativa por IEES (substitui a tabela sintética por programa)
function capesSynthesisTable(rows) {
  const sorted = [...rows].sort((a, b) => b.capes - a.capes);
  const avgCapes = mean(rows, u => u.capes);
  const maxBolsa = Math.max(...rows.map(pgProductivityShare), 1);
  const fmt1 = v => v.toFixed(1).replace(".", ",");
  const readBadge = (u, index) => {
    if (index === 0) return `<span class="capes-read capes-read-top">★ Maior destaque</span>`;
    if (u.capes >= avgCapes) return `<span class="capes-read capes-read-up">▲ Acima da média</span>`;
    return `<span class="capes-read capes-read-warn">⚠ Atenção</span>`;
  };
  const barCell = (v, max, cls, label) =>
    `<td><div class="capes-cell-bar"><span class="${cls}" style="width:${clamp(v / max * 100, 3, 100).toFixed(1)}%"></span></div><em class="capes-cell-val">${label}</em></td>`;
  const trs = sorted.map((u, i) => `<tr>
    <td><strong>${u.sigla}</strong></td>
    ${barCell(u.capes, 7, "capes-bar-blue", fmt1(u.capes))}
    ${barCell(pgProductivityShare(u), maxBolsa, "capes-bar-green", formatPercent(pgProductivityShare(u)))}
    ${barCell(pgPermanentShare(u), 100, "capes-bar-orange", formatPercent(pgPermanentShare(u)))}
    <td class="capes-read-cell">${readBadge(u, i)}</td>
  </tr>`).join("");
  return `<div class="table-wrap mt-14">
    <h3>Síntese comparativa por IEES</h3>
    <p class="card-subtitle">Detalhamento institucional para apoiar a leitura do gráfico principal. Base CAPES agregada por IES — não há detalhamento por programa na base de dados.</p>
    <table class="data-table capes-synth-table">
      <thead><tr><th>IEES</th><th>Conceito CAPES (médio)</th><th>% bolsistas produtividade</th><th>% docentes permanentes na pós</th><th>Leitura</th></tr></thead>
      <tbody>${trs}</tbody>
    </table>
  </div>`;
}

// ── 3. Pesquisa e CNPq ───────────────────────────────────────────────────────
function qualityResearchBlock(c) {
  const act = qualityIndFilter(["ind60", "ind61"]);
  return `<div class="chart-grid">
    ${!act || act === "ind60" ? `<article class="visual-card"><h3>IND-60 · Captação de recursos do CNPq</h3><p class="card-subtitle">Valor absoluto em R$ milhões e captação por docente para normalização. Fonte: Base CNPq – Brasil.</p>${quartilChipStrip("cnpqBars", c.f.groupBy, c.base, c)}${cnpqBars(c)}</article>` : ""}
    ${!act || act === "ind61" ? `<article class="visual-card"><h3>IND-61 · Número de vínculos de fomento do CNPq</h3><p class="card-subtitle">Número de vínculos ativos de fomento (bolsas e projetos). Fonte: Base CNPq – Brasil.</p>${vinculosBars(c)}</article>` : ""}
  </div>`;
}

function vinculosBars(c) {
  let rows = chartRowsByLocal(c, "vinculosBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const max = Math.max(...chartRows.map(u => u.vinculos || 0), 1);
  const ref = mean(rows, u => u.vinculos || 0);
  const tone = v => v >= ref ? "rate-high" : v >= ref * 0.65 ? "rate-mid" : "rate-low";
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatNumber(ref)}</strong></span></div><div class="bars overview-cluster-bars cnpq-bars" style="--ref-pos:${clamp(ref / max * 100, 0, 100)}%">${[...chartRows].sort((a, b) => (b.vinculos || 0) - (a.vinculos || 0)).map(u => `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone(u.vinculos || 0)}" style="width:${clamp((u.vinculos || 0) / max * 100, 4, 100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${u.vinculos != null ? formatNumber(u.vinculos) : "—"}</span></div>`).join("")}</div>`;
}

function cnpqBars(c) {
  let rows = chartRowsByLocal(c, "cnpqBars", qualityRows(c));
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const max = Math.max(...chartRows.map(u => u.cnpq || 0), 1);
  const ref = mean(rows, u => u.cnpq || 0) || 1;
  const cnpqTone = v => v >= ref ? "rate-high" : v >= ref * 0.65 ? "rate-mid" : "rate-low";
  const deltaRel = v => { const d = (v - ref) / ref * 100; return (d >= 0 ? "+" : "") + d.toFixed(1).replace(".", ",") + "%"; };
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatCurrencyMillions(ref)}</strong></span></div><div class="bars overview-cluster-bars cnpq-bars" style="--ref-pos:${clamp(ref / max * 100,0,100)}%">${[...chartRows].sort((a,b)=>(b.cnpq||0)-(a.cnpq||0)).map(u => { const perDoc = formatCurrency((u.cnpq || 0) * 1000000 / estimatedFaculty(u)); const delta = deltaRel(u.cnpq || 0); return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${cnpqTone(u.cnpq || 0)}" style="width:${clamp((u.cnpq || 0) / max * 100,4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value" title="${formatCurrencyMillions(u.cnpq || 0)} · ${perDoc}/doc. · ${delta} vs. média">${formatCurrencyMillions(u.cnpq || 0)} <span class="bar-delta ${(u.cnpq || 0) >= ref ? "delta-pos" : "delta-neg"}">${delta}</span></span></div>`; }).join("")}</div>`;
}

function cnpqScatter(c) {
  const rows = qualityRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const maxX = Math.max(...chartRows.map(u => u.cnpq || 0), 1);
  const maxY = Math.max(...chartRows.map(cnpqLinks), 1);
  const avgX = mean(rows, u => u.cnpq || 0) / maxX * 100;
  const avgY = mean(rows, cnpqLinks) / maxY * 100;
  return `<div class="quality-scatter cnpq-scatter" style="--avg-x:${clamp(avgX,0,100)}%;--avg-y:${clamp(avgY,0,100)}%"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span>${chartRows.map(u => { const x = clamp((u.cnpq || 0) / maxX * 100, 3, 97); const y = clamp(cnpqLinks(u) / maxY * 100, 3, 97); const efficient = (u.cnpq || 0) / Math.max(cnpqLinks(u), 1); return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${efficient > mean(rows, x => (x.cnpq || 0) / Math.max(cnpqLinks(x),1)) ? "efficient" : "extensive"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%" type="button" title="${u.sigla}: ${formatCurrencyMillions(u.cnpq || 0)}; ${formatNumber(cnpqLinks(u))} vínculos; ${formatCurrencyMillions(efficient)} por vínculo">${u.sigla}</button>`; }).join("")}<span class="axis-caption x">IND-60 Captação</span><span class="axis-caption y">IND-61 Vínculos</span></div>`;
}

// ── 4. Internacionalização (dashboard visual) ────────────────────────────────
function qualityInternationalBlock(c) {
  const rows = qualityRows(c);
  if (!rows.length) return empty();
  const act = qualityIndFilter(["ind7", "ind8", "ind9"]);
  const avgForeign = mean(rows, foreignFacultyRate);
  const avgPgForeign = mean(rows, pgForeignShare);
  const avgMobility = mean(rows, mobilityRate);
  const composite = u => (foreignFacultyRate(u) / Math.max(avgForeign, 0.01) + pgForeignShare(u) / Math.max(avgPgForeign, 0.01) + mobilityRate(u) / Math.max(avgMobility, 0.01)) / 3 * 100;
  const ranked = [...rows].sort((a, b) => composite(b) - composite(a));
  const fmt1 = v => v.toFixed(1).replace(".", ",");
  const top = ranked[0];
  const portalRows = rows.filter(u => capesPortalAccess(u));
  const mobTop = [...rows].sort((a, b) => mobilityRate(b) - mobilityRate(a));
  const mobMax = mobilityRate(mobTop[0]);
  const mobLeaders = mobTop.filter(u => Math.abs(mobilityRate(u) - mobMax) < 0.05).map(u => u.sigla).join(" e ");

  const icons = {
    trophy: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0z"/><path d="M7 6H4v2a3 3 0 0 0 3 3M17 6h3v2a3 3 0 0 1-3 3"/></svg>`,
    globe: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" aria-hidden="true"><circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/></svg>`,
    people: `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><circle cx="9" cy="8" r="3.5"/><path d="M3 20a6 6 0 0 1 12 0"/><circle cx="17" cy="9" r="2.5"/><path d="M15.5 14.5a5 5 0 0 1 5.5 5"/></svg>`
  };
  const kpiCard = (icon, label, value) =>
    `<div class="intl-kpi"><span class="ff-kpi-icon">${icon}</span><div><span class="ff-kpi-label">${label}</span><strong class="ff-kpi-value">${value}</strong></div></div>`;
  const kpis = `<div class="intl-kpi-row">
    ${kpiCard(icons.trophy, "Maior índice relativo ao cluster", `${top.sigla} — ${fmt1(composite(top))}%`)}
    ${kpiCard(icons.globe, "IEES com acesso ao Portal CAPES", `${portalRows.length} de ${rows.length}`)}
    ${kpiCard(icons.people, "Maior mobilidade acadêmica", `${mobLeaders} — ${fmt1(mobMax)}%`)}
  </div>`;

  // Ranking do índice relativo (100% = média do cluster)
  const maxComposite = Math.max(...ranked.map(composite), 110);
  const refPos = clamp(100 / maxComposite * 100, 0, 100).toFixed(1);
  const rankBars = ranked.map(u => {
    const v = composite(u);
    return `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill intl-rank-fill" style="width:${clamp(v / maxComposite * 100, 4, 100).toFixed(1)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt1(v)}%</span></div>`;
  }).join("");
  const rankCard = `<article class="visual-card">
    <h3>Índice relativo ao cluster</h3>
    <p class="card-subtitle">Ranking das IEES com base no índice relativo à média do cluster.</p>
    <div class="bars-reference-note"><span>Linha tracejada: <strong>100% = média do cluster</strong></span></div>
    <div class="bars overview-cluster-bars intl-rank-bars" style="--ref-pos:${refPos}%">${rankBars}</div>
  </article>`;

  // Indicadores por IES (barras agrupadas), filtráveis pelo seletor da aba
  const metrics = [
    { code: "ind8", label: "Docentes estrangeiros INEP",        cls: "intl-m-blue",   get: foreignFacultyRate },
    { code: "ind8b",label: "Docentes estrangeiros da pós CAPES",cls: "intl-m-green",  get: pgForeignShare },
    { code: "ind7", label: "Alunos em mobilidade acadêmica",    cls: "intl-m-orange", get: mobilityRate }
  ].filter(m => !act || act === "ind9" || m.code.startsWith(act));
  const maxMetric = Math.max(...rows.flatMap(u => metrics.map(m => m.get(u))), 1) * 1.15;
  const groupRows = ranked.map(u => `<div class="intl-group-row ${isUniSelected(c.f, u.id) ? "selected" : ""}">
      <span class="intl-group-name" title="${u.nome}">${u.sigla}</span>
      <div class="intl-group-bars">${metrics.map(m => `<div class="intl-metric-track"><span class="intl-metric-bar ${m.cls}" style="width:${clamp(m.get(u) / maxMetric * 100, 2, 100).toFixed(1)}%"></span><em>${formatPercent(m.get(u))}</em></div>`).join("")}</div>
    </div>`).join("");
  const groupLegend = `<div class="intl-legend">${metrics.map(m => `<span><i class="${m.cls}"></i>${m.label}</span>`).join("")}</div>`;
  const groupCard = `<article class="visual-card">
    <h3>Indicadores por IES</h3>
    <p class="card-subtitle">Comparativo dos principais indicadores de internacionalização.</p>
    ${groupLegend}
    <div class="intl-group-chart">${groupRows}</div>
  </article>`;

  // Acesso ao Portal CAPES (chips Sim/Não) + Como ler
  const portalChips = `<article class="visual-card intl-portal-card">
    <h3>Acesso ao Portal CAPES e leitura rápida</h3>
    <div class="intl-portal-grid">${rows.map(u => `<div class="intl-portal-item"><span>${u.sigla}</span>${capesPortalAccess(u) ? '<span class="status-pill status-high">Sim</span>' : '<span class="status-pill status-low">Não</span>'}</div>`).join("")}</div>
  </article>`;
  const howTo = `<div class="ff-howto intl-howto">
    <strong>Como ler</strong>
    <p>· Índice relativo ao cluster acima de 100% indica desempenho acima da média do grupo.<br>· As barras comparam a presença internacional do corpo docente e a mobilidade acadêmica.<br>· O acesso ao Portal CAPES complementa a leitura da infraestrutura de apoio à internacionalização.</p>
  </div>`;

  return `${kpis}
  <div class="chart-grid mt-14">${rankCard}${groupCard}</div>
  <div class="intl-bottom-grid mt-14">${portalChips}${howTo}</div>
  <div class="architecture-message mt-14">Dado de mobilidade acadêmica sujeito à disponibilidade da coleta INEP para o ano selecionado.</div>`;
}

// ── 5b. Novos indicadores CAPES — Base_Discentes + Base_Docentes + Base_Cursos ──

function setPgAreaIes(sigla) {
  state.pgAreaIes = sigla;
  render();
}
window.setPgAreaIes = setPgAreaIes;

// Orquestrador: 8 novos blocos injetados após o conteúdo existente de qualityCapesBlock
function pg5bBlocks(rows5b, c) {
  if (!rows5b.length) return "";
  return `
  <article class="visual-card mt-14">
    <h3>Programas por nível</h3>
    <p class="card-subtitle">Programas stricto sensu distintos por grau (NM_GRAU_CURSO, Base_Cursos CAPES, AN_BASE mais recente). Programas com dois graus são contados em cada categoria correspondente.</p>
    ${pgNivelBars(rows5b)}
  </article>
  <article class="visual-card mt-14">
    <h3>Distribuição por grande área do conhecimento</h3>
    <p class="card-subtitle">Programas distintos por NM_GRANDE_AREA_CONHECIMENTO (Base_Cursos CAPES, AN_BASE mais recente). Selecione a IES abaixo.</p>
    ${pgGrandeAreaChart(rows5b, c)}
  </article>
  <article class="visual-card mt-14">
    <h3>Conceitos CAPES — destaque de excelência</h3>
    <p class="card-subtitle">% de programas com CD_CONCEITO_PROGRAMA ≥ 6 sobre o total de programas distintos da IES (Base_Discentes CAPES, AN_BASE=2024).</p>
    ${pgExcelenciaBars(rows5b)}
    <p style="margin-top:8px;font-size:11px;color:#64748b;font-style:italic">⚠ Excelência = programas com CD_CONCEITO_PROGRAMA ≥ 6 (Base_Discentes). Métrica distinta do conceito por curso (CD_CONCEITO_CURSO) usado em pgTop/capes acima — não comparar diretamente.</p>
  </article>
  <article class="visual-card mt-14">
    <h3>Discentes matriculados em pós-graduação</h3>
    <p class="card-subtitle">set(ID_PESSOA) com NM_SITUACAO_DISCENTE = "MATRICULADO" por grau (Base_Discentes CAPES, AN_BASE=2024). Cada discente conta uma vez por grau.</p>
    ${discMatriculadosBars(rows5b)}
  </article>
  <article class="visual-card mt-14">
    <h3>Titulados por ano-base</h3>
    <p class="card-subtitle">set(ID_PESSOA) com NM_SITUACAO_DISCENTE = "TITULADO" por grau (Base_Discentes CAPES, AN_BASE=2024).</p>
    ${tituladosBars(rows5b)}
    <p style="margin-top:8px;font-size:11px;color:#64748b;font-style:italic">Ano de referência = AN_BASE (ano-base CAPES), não necessariamente o ano civil de defesa.</p>
  </article>
  <article class="visual-card mt-14">
    <h3>Corpo docente da pós-graduação</h3>
    <p class="card-subtitle">set(ID_PESSOA) por DS_CATEGORIA_DOCENTE (Base_Docentes CAPES, AN_BASE=2024). Docentes em múltiplos programas da mesma IES são contados uma única vez.</p>
    ${docCorpoPosBars(rows5b)}
  </article>
  <article class="visual-card mt-14">
    <h3>Razão discente / docente permanente</h3>
    <p class="card-subtitle">Fórmula: (discMestrado + discDoutorado) ÷ docPermanentes. Valores menores indicam maior capacidade de orientação por docente.</p>
    ${razaoBars(rows5b)}
    <p style="margin-top:8px;font-size:11px;color:#64748b;font-style:italic">Fórmula: (discentes mestrado matriculados + discentes doutorado matriculados) ÷ docentes permanentes. Fonte: Base_Discentes + Base_Docentes, AN_BASE=2024.</p>
  </article>
  <article class="visual-card mt-14">
    <h3>Capilaridade dos programas</h3>
    <p class="card-subtitle">Municípios distintos com programas de pós-graduação da IES (NM_MUNICIPIO_PROGRAMA_IES, Base_Cursos CAPES, AN_BASE mais recente).</p>
    ${pgCapilaridadeCards(rows5b)}
  </article>`;
}

// a) Programas por nível — pgMestrado, pgMestradoProf, pgDoutorado
function pgNivelBars(rows) {
  const valid = rows.filter(u => u.pgMestrado != null || u.pgDoutorado != null);
  if (!valid.length) return `<p class="card-subtitle">Dados de grau não disponíveis para este recorte.</p>`;
  const metrics = [
    { label: "Mestrado Acadêmico",   cls: "intl-m-blue",   get: u => u.pgMestrado     || 0 },
    { label: "Mestrado Profissional", cls: "intl-m-orange", get: u => u.pgMestradoProf || 0 },
    { label: "Doutorado",            cls: "intl-m-green",  get: u => u.pgDoutorado    || 0 },
  ];
  const maxVal = Math.max(...valid.flatMap(u => metrics.map(m => m.get(u))), 1);
  const sorted = [...valid].sort((a, b) =>
    ((b.pgMestrado||0)+(b.pgDoutorado||0)) - ((a.pgMestrado||0)+(a.pgDoutorado||0))
  );
  const legend = `<div class="intl-legend">${metrics.map(m => `<span><i class="${m.cls}"></i>${m.label}</span>`).join("")}</div>`;
  const groupRows = sorted.map(u =>
    `<div class="intl-group-row"><span class="intl-group-name" title="${u.nome}">${u.sigla}</span><div class="intl-group-bars">${
      metrics.map(m => { const v = m.get(u); return `<div class="intl-metric-track"><span class="intl-metric-bar ${m.cls}" style="width:${v > 0 ? clamp(v/maxVal*100,3,100).toFixed(1) : 0}%"></span><em>${v}</em></div>`; }).join("")
    }</div></div>`
  ).join("");
  return `${legend}<div class="intl-group-chart">${groupRows}</div>`;
}

// b) Grande área do conhecimento — pgPorGrandeArea (dict por IES, com seletor)
function pgGrandeAreaChart(rows, c) {
  const valid = rows.filter(u => u.pgPorGrandeArea && typeof u.pgPorGrandeArea === "object" && Object.keys(u.pgPorGrandeArea).length > 0);
  if (!valid.length) return `<p class="card-subtitle">Dados de grande área não disponíveis para este recorte.</p>`;
  const siglas = valid.map(u => u.sigla);
  const sel    = (state.pgAreaIes && siglas.includes(state.pgAreaIes)) ? state.pgAreaIes : siglas[0];
  const selRow = valid.find(r => r.sigla === sel);
  const areaData = (selRow && selRow.pgPorGrandeArea) ? selRow.pgPorGrandeArea : {};
  const entries  = Object.entries(areaData).sort((a, b) => b[1] - a[1]);
  const maxV     = entries.length ? entries[0][1] : 1;
  const tabs = siglas.map(s =>
    `<button class="rank-metric-btn${s === sel ? " active" : ""}" type="button" onclick="setPgAreaIes('${s}')">${s}</button>`
  ).join("");
  const bars = entries.map(([area, cnt]) =>
    `<div class="bar-row"><span class="bar-name" title="${area}" style="min-width:170px;max-width:210px;font-size:11.5px;white-space:normal;line-height:1.3">${area}</span><span class="bar-track"><span class="bar-fill rate-high" style="width:${clamp(cnt/maxV*100,4,100).toFixed(1)}%"></span></span><span class="bar-value">${cnt} prog.</span></div>`
  ).join("");
  return `<div class="rank-metric-selector" style="margin-bottom:10px">${tabs}</div><div class="bars">${bars}</div>`;
}

// c) pctExcelencia — CD_CONCEITO_PROGRAMA >= 6 / total (Base_Discentes)
function pgExcelenciaBars(rows) {
  const valid = rows.filter(u => u.pctExcelencia != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de excelência para este recorte.</p>`;
  const max    = Math.max(...valid.map(u => u.pctExcelencia), 0.1);
  const avg    = mean(valid, u => u.pctExcelencia);
  const sorted = [...valid].sort((a, b) => b.pctExcelencia - a.pctExcelencia);
  const tone   = v => v >= avg * 1.1 ? "rate-high" : v >= avg * 0.5 ? "rate-mid" : "rate-low";
  return `<div class="bars-reference-note"><span>Média do recorte: <strong>${avg.toFixed(1).replace(".",",")}%</strong></span></div>
  <div class="bars" style="--ref-pos:${clamp(avg/Math.max(max,0.1)*100,0,100).toFixed(1)}%">
    ${sorted.map(u => `<div class="bar-row"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone(u.pctExcelencia)}" style="width:${u.pctExcelencia > 0 ? clamp(u.pctExcelencia/max*100,2,100).toFixed(1) : 0}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${u.pctExcelencia.toFixed(1).replace(".",",")}%</span></div>`).join("")}
  </div>`;
}

// d) Discentes matriculados — discMestrado + discDoutorado
function discMatriculadosBars(rows) {
  const valid = rows.filter(u => u.discMestrado != null || u.discDoutorado != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de discentes para este recorte.</p>`;
  const metrics = [
    { label: "Mestrado",  cls: "intl-m-blue",  get: u => u.discMestrado  || 0 },
    { label: "Doutorado", cls: "intl-m-green",  get: u => u.discDoutorado || 0 },
  ];
  const maxVal  = Math.max(...valid.flatMap(u => metrics.map(m => m.get(u))), 1);
  const sorted  = [...valid].sort((a, b) => ((b.discMestrado||0)+(b.discDoutorado||0)) - ((a.discMestrado||0)+(a.discDoutorado||0)));
  const legend  = `<div class="intl-legend">${metrics.map(m => `<span><i class="${m.cls}"></i>${m.label}</span>`).join("")}</div>`;
  const groupRows = sorted.map(u =>
    `<div class="intl-group-row"><span class="intl-group-name" title="${u.nome}">${u.sigla}</span><div class="intl-group-bars">${
      metrics.map(m => { const v = m.get(u); return `<div class="intl-metric-track"><span class="intl-metric-bar ${m.cls}" style="width:${v > 0 ? clamp(v/maxVal*100,2,100).toFixed(1) : 0}%"></span><em>${formatNumber(v)}</em></div>`; }).join("")
    }</div></div>`
  ).join("");
  return `${legend}<div class="intl-group-chart">${groupRows}</div>`;
}

// e) Titulados — tituladosMestrado + tituladosDoutorado
function tituladosBars(rows) {
  const valid = rows.filter(u => u.tituladosMestrado != null || u.tituladosDoutorado != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de titulados para este recorte.</p>`;
  const metrics = [
    { label: "Mestrado titulado",  cls: "intl-m-blue",   get: u => u.tituladosMestrado  || 0 },
    { label: "Doutorado titulado", cls: "intl-m-orange",  get: u => u.tituladosDoutorado || 0 },
  ];
  const maxVal  = Math.max(...valid.flatMap(u => metrics.map(m => m.get(u))), 1);
  const sorted  = [...valid].sort((a, b) => ((b.tituladosMestrado||0)+(b.tituladosDoutorado||0)) - ((a.tituladosMestrado||0)+(a.tituladosDoutorado||0)));
  const legend  = `<div class="intl-legend">${metrics.map(m => `<span><i class="${m.cls}"></i>${m.label}</span>`).join("")}</div>`;
  const groupRows = sorted.map(u =>
    `<div class="intl-group-row"><span class="intl-group-name" title="${u.nome}">${u.sigla}</span><div class="intl-group-bars">${
      metrics.map(m => { const v = m.get(u); return `<div class="intl-metric-track"><span class="intl-metric-bar ${m.cls}" style="width:${v > 0 ? clamp(v/maxVal*100,2,100).toFixed(1) : 0}%"></span><em>${formatNumber(v)}</em></div>`; }).join("")
    }</div></div>`
  ).join("");
  return `${legend}<div class="intl-group-chart">${groupRows}</div>`;
}

// f) Corpo docente — docPermanentes + docColaboradores + docVisitantes
function docCorpoPosBars(rows) {
  const valid = rows.filter(u => u.docPermanentes != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de docentes da pós para este recorte.</p>`;
  const metrics = [
    { label: "Permanentes",   cls: "intl-m-blue",   get: u => u.docPermanentes   || 0 },
    { label: "Colaboradores", cls: "intl-m-orange",  get: u => u.docColaboradores || 0 },
    { label: "Visitantes",    cls: "intl-m-green",   get: u => u.docVisitantes    || 0 },
  ];
  const maxVal  = Math.max(...valid.flatMap(u => metrics.map(m => m.get(u))), 1);
  const sorted  = [...valid].sort((a, b) => (b.docPermanentes||0) - (a.docPermanentes||0));
  const legend  = `<div class="intl-legend">${metrics.map(m => `<span><i class="${m.cls}"></i>${m.label}</span>`).join("")}</div>`;
  const groupRows = sorted.map(u =>
    `<div class="intl-group-row"><span class="intl-group-name" title="${u.nome}">${u.sigla}</span><div class="intl-group-bars">${
      metrics.map(m => { const v = m.get(u); return `<div class="intl-metric-track"><span class="intl-metric-bar ${m.cls}" style="width:${v > 0 ? clamp(v/maxVal*100,2,100).toFixed(1) : 0}%"></span><em>${formatNumber(v)}</em></div>`; }).join("")
    }</div></div>`
  ).join("");
  return `${legend}<div class="intl-group-chart">${groupRows}</div>`;
}

// g) Razão discente / docente permanente — razaoDocenteDiscente
function razaoBars(rows) {
  const valid = rows.filter(u => u.razaoDocenteDiscente != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de razão para este recorte.</p>`;
  const max    = Math.max(...valid.map(u => u.razaoDocenteDiscente), 0.1);
  const avg    = mean(valid, u => u.razaoDocenteDiscente);
  const sorted = [...valid].sort((a, b) => a.razaoDocenteDiscente - b.razaoDocenteDiscente);
  const tone   = v => v <= avg * 0.9 ? "rate-high" : v <= avg * 1.1 ? "rate-mid" : "rate-low";
  return `<div class="bars-reference-note"><span>Média do recorte: <strong>${avg.toFixed(1).replace(".",",")} disc./doc.</strong></span></div>
  <div class="bars">
    ${sorted.map(u => `<div class="bar-row"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone(u.razaoDocenteDiscente)}" style="width:${clamp(u.razaoDocenteDiscente/max*100,4,100).toFixed(1)}%"></span></span><span class="bar-value">${u.razaoDocenteDiscente.toFixed(1).replace(".",",")}</span></div>`).join("")}
  </div>`;
}

// h) Capilaridade — pgMunicipiosDistintos
function pgCapilaridadeCards(rows) {
  const valid  = rows.filter(u => u.pgMunicipiosDistintos != null);
  if (!valid.length) return `<p class="card-subtitle">Sem dados de município para este recorte.</p>`;
  const max    = Math.max(...valid.map(u => u.pgMunicipiosDistintos), 1);
  const sorted = [...valid].sort((a, b) => b.pgMunicipiosDistintos - a.pgMunicipiosDistintos);
  const tone   = v => v >= 3 ? "rate-high" : v >= 2 ? "rate-mid" : "rate-low";
  return `<div class="bars">
    ${sorted.map(u => `<div class="bar-row"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone(u.pgMunicipiosDistintos)}" style="width:${clamp(u.pgMunicipiosDistintos/max*100,4,100).toFixed(1)}%"></span></span><span class="bar-value">${u.pgMunicipiosDistintos} munic.</span></div>`).join("")}
  </div>`;
}
