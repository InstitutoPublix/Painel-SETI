/* ==========================================================================
   ABA 9 — Desempenho e Eficiência Relativa
   Redefine as funções desta aba carregando-as após painel.js.
   ========================================================================== */

/* Aba 9 - Desempenho e Eficiência Relativa (Relatório Despesa 8050) */
state.efficiencyMode = state.efficiencyMode || "eficiencia";
state.efficiencyResult = state.efficiencyResult || "completion";
state.efficiencyDefaultApplied = state.efficiencyDefaultApplied || false;
state.seloAno = state.seloAno || "2025";

// ── SELO-PR: painel de qualidade da execução orçamentária ────────────────────
// Fonte: Base SELO - Paraná.xlsx | Nota final pré-calculada pela DOE/SEFA-PR
// Avalia 3 eixos, 11 indicadores, nota 0–100, apuração anual
function renderSeloBlock(c) {
  const IES_ORDER = ["UEL","UEM","UENP","UEPG","UNESPAR","UNICENTRO","UNIOESTE"];
  const seloData  = window.SELO_DATA || {};
  const seloInds  = window.SELO_INDICADORES || {};
  const anos = Array.from(new Set(IES_ORDER.flatMap(ies => Object.keys(seloData[ies] || {})))).sort();
  const anoAtivo  = anos.includes(state.seloAno) ? state.seloAno : (anos[anos.length - 1] || state.seloAno || "2025");
  state.seloAno = anoAtivo;

  // ── helpers de cor ──────────────────────────────────────────────────────────
  function corPct(pct) {
    if (pct == null) return "var(--gray-200,#e5e7eb)";
    if (pct >= 80)  return "var(--green-500,#22c55e)";
    if (pct >= 55)  return "var(--yellow-400,#facc15)";
    return "var(--red-400,#f87171)";
  }
  function corNota(nota) {
    if (nota == null) return "var(--gray-400,#9ca3af)";
    if (nota >= 65)  return "var(--green-600,#16a34a)";
    if (nota >= 50)  return "var(--yellow-500,#eab308)";
    return "var(--red-500,#ef4444)";
  }

  // ── seletor de ano — dinâmico; mostra apenas anos presentes no JSON ──────────
  const selectorHtml = anos.length <= 1 ? '' : `
    <div style="display:flex;gap:8px;align-items:center;margin-bottom:14px;">
      <span style="font-size:0.80rem;color:var(--text-secondary);font-weight:500;">Exercício:</span>
      ${anos.map(a => `<button class="mode-btn${a===anoAtivo?' active':''}" type="button"
          onclick="state.seloAno='${a}';render();">${a}</button>`).join("")}
    </div>`;

  function esc(v) {
    return String(v == null ? "" : v).replace(/[&<>"']/g, ch => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
    }[ch]));
  }
  function diagList(values) {
    return (values && values.length) ? values.map(esc).join(", ") : "—";
  }
  function renderSeloDiagnostico() {
    const diag = window.SELO_DIAGNOSTICO || {};
    const preview = Array.isArray(diag.preview) ? diag.preview : [];
    const previewCols = preview.length ? Object.keys(preview[0]).filter(k => k !== "_raw") : [];
    const alerts = Array.isArray(diag.alertas) ? diag.alertas : [];
    const alertHtml = alerts.length
      ? `<div style="margin:10px 0 0;display:grid;gap:6px;">${alerts.map(a => `<div style="font-size:0.78rem;color:#92400e;background:#fff7ed;border:1px solid #fed7aa;border-radius:6px;padding:6px 8px;">${esc(a)}</div>`).join("")}</div>`
      : "";
    const tableHtml = preview.length
      ? `<div class="table-wrap" style="overflow-x:auto;margin-top:12px;"><table class="data-table" style="font-size:0.74rem;min-width:900px;"><thead><tr>${previewCols.map(col => `<th>${esc(col)}</th>`).join("")}</tr></thead><tbody>${preview.map(row => `<tr>${previewCols.map(col => `<td>${esc(row[col])}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`
      : `<p class="card-subtitle" style="margin-top:10px;">Prévia indisponível.</p>`;
    return `<details class="visual-card" style="margin:0 0 1.5rem 0;">
      <summary style="cursor:pointer;font-weight:700;color:var(--text-primary);">Diagnóstico da Base SELO-PR</summary>
      <div style="margin-top:12px;">
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:10px;">
          <div><strong>Total de linhas</strong><br><span>${esc(diag.linhas)}</span></div>
          <div><strong>Total de colunas</strong><br><span>${esc(diag.colunas)}</span></div>
          <div><strong>Anos disponíveis</strong><br><span>${diagList(diag.anos)}</span></div>
          <div><strong>Unidades disponíveis</strong><br><span>${diagList(diag.unidades)}</span></div>
          <div><strong>Periodicidade</strong><br><span>Consolidado anual &mdash; sem desagrega&#xe7;&#xe3;o bimestral</span></div>
          <div><strong>Indicadores disponíveis</strong><br><span>${diagList(diag.indicadores)}</span></div>
        </div>
        ${alertHtml}
        ${tableHtml}
      </div>
    </details>`;
  }

  // ── definição dos eixos ─────────────────────────────────────────────────────
  const EIXOS_DEF = [
    {id:"I",   pts:60, inds:["1.1","1.2","1.3","1.4"]},
    {id:"II",  pts:20, inds:["2.1","2.2","2.3"]},
    {id:"III", pts:20, inds:["3.1","3.2","3.3","3.4"]},
  ];

  // ── tabela anual por eixo ───────────────────────────────────────────────────
  const eixoRows = IES_ORDER.map(ies => {
    const d = (seloData[ies] || {})[anoAtivo];
    if (!d) return `<tr><td><strong>${ies}</strong></td>${EIXOS_DEF.map(()=>`<td style="text-align:center;color:var(--text-secondary)">—</td>`).join("")}<td>—</td></tr>`;
    const inds = d.indicadores || {};
    const eixoCells = EIXOS_DEF.map(e => {
      const obtido = e.inds.reduce((s, k) => s + (inds[k] || 0), 0);
      const pct    = obtido / e.pts * 100;
      const cor    = corPct(pct);
      return `<td style="text-align:center;padding:6px 8px;">
        <div style="font-weight:600;font-size:0.88rem;">${obtido.toFixed(1).replace(".",",")}
          <span style="font-size:0.70rem;font-weight:400;color:var(--text-secondary);">/${e.pts}</span></div>
        <div style="height:3px;border-radius:2px;background:${cor};margin-top:3px;"></div>
      </td>`;
    }).join("");
    const nf = d.notaFinal;
    const corFinal = corNota(nf);
    return `<tr>
      <td style="font-weight:600;white-space:nowrap;">${ies}</td>
      ${eixoCells}
      <td style="text-align:center;padding:6px 8px;">
        <span style="font-size:1.05rem;font-weight:700;color:${corFinal};">${nf!=null?Math.round(nf):"—"}</span>
        <span style="font-size:0.70rem;color:var(--text-secondary);display:block;">/&nbsp;100</span>
      </td>
    </tr>`;
  }).join("");

  // ── ranking de nota final (barras horizontais) ──────────────────────────────
  const rankData = IES_ORDER
    .map(ies => ({ ies, nota: (seloData[ies]||{})[anoAtivo]?.notaFinal }))
    .filter(x => x.nota != null)
    .sort((a,b) => b.nota - a.nota);
  const mediaGrupo = rankData.length
    ? rankData.reduce((s,x)=>s+x.nota,0)/rankData.length
    : null;

  const barRows = rankData.map((x,i) => {
    const w = x.nota/100*100;
    const cor = corNota(x.nota);
    const abaixoMedia = mediaGrupo && x.nota < mediaGrupo;
    return `<div style="display:flex;align-items:center;gap:8px;margin-bottom:7px;">
      <span style="width:16px;font-size:0.72rem;color:var(--text-secondary);text-align:right;">${i+1}&#xBA;</span>
      <span style="width:70px;font-size:0.80rem;font-weight:600;">${x.ies}</span>
      <div style="flex:1;height:14px;background:var(--gray-100,#f3f4f6);border-radius:4px;overflow:hidden;position:relative;">
        <div style="width:${w}%;height:100%;background:${cor};border-radius:4px;transition:width .4s;"></div>
        ${mediaGrupo?`<div style="position:absolute;top:0;bottom:0;left:${mediaGrupo}%;width:2px;background:var(--gray-500,#6b7280);opacity:0.5;"></div>`:''}
      </div>
      <span style="font-size:0.82rem;font-weight:700;min-width:28px;color:${cor};">${Math.round(x.nota)}</span>
      ${abaixoMedia?'<span style="font-size:0.68rem;color:var(--red-400,#f87171);">&#x2193; m&#xe9;dia</span>':''}
    </div>`;
  }).join("");

  const legendaCor = `
    <div style="display:flex;gap:14px;margin-top:10px;font-size:0.72rem;color:var(--text-secondary);flex-wrap:wrap;">
      <span><span style="color:var(--green-600,#16a34a);">&#x25A0;</span> &#x2265; 65 &mdash; desempenho elevado</span>
      <span><span style="color:var(--yellow-500,#eab308);">&#x25A0;</span> 50&ndash;64 &mdash; desempenho intermedi&#xe1;rio</span>
      <span><span style="color:var(--red-500,#ef4444);">&#x25A0;</span> &lt; 50 &mdash; abaixo da refer&#xea;ncia</span>
      ${mediaGrupo?`<span style="border-left:2px solid var(--gray-400);padding-left:8px;">linha vertical = m&#xe9;dia (${Math.round(mediaGrupo)})</span>`:''}
    </div>`;

  // ── diagnóstico por eixo ────────────────────────────────────────────────────
  const EIXOS_META = [
    {
      id: "I", nome: "Efici&#xea;ncia na Execu&#xe7;&#xe3;o Or&#xe7;ament&#xe1;ria", pts: 60,
      inds: ["1.1","1.2","1.3","1.4"],
      descricao: "Mede se a universidade converteu sua dota&#xe7;&#xe3;o or&#xe7;ament&#xe1;ria em despesas empenhadas e liquidadas ao longo do exerc&#xed;cio. &#xc9; o eixo de maior peso (60 pts) — avalia empenho, liquida&#xe7;&#xe3;o, empenho liquidado e foco em a&#xe7;&#xf5;es final&#xed;sticas.",
      destaque: "O indicador 1.4 (Foco em A&#xe7;&#xf5;es Final&#xed;sticas) atingiu quase 100% em todas as IES em 2025 — evidenciando que o gasto universit&#xe1;rio est&#xe1; estruturalmente direcionado &#xe0; miss&#xe3;o acad&#xea;mica (ensino, pesquisa e extens&#xe3;o)."
    },
    {
      id: "II", nome: "Racionalidade na Gest&#xe3;o de Cr&#xe9;ditos Adicionais", pts: 20,
      inds: ["2.1","2.2","2.3"],
      descricao: "Avalia a qualidade do planejamento or&#xe7;ament&#xe1;rio inicial e o uso respons&#xe1;vel de cr&#xe9;ditos suplementares ao longo do exerc&#xed;cio. Um planejamento mais preciso reduz a necessidade de suplementa&#xe7;&#xf5;es e de depend&#xea;ncia de super&#xe1;vit financeiro de anos anteriores.",
      destaque: "Em 2025, a maior parte das IES obteve pontua&#xe7;&#xe3;o m&#xe1;xima no indicador 2.3 (Prioriza&#xe7;&#xe3;o do Cr&#xe9;dito do Exerc&#xed;cio), refletindo uso priorit&#xe1;rio de dota&#xe7;&#xe3;o pr&#xf3;pria antes de recorrer a cr&#xe9;ditos adicionais."
    },
    {
      id: "III", nome: "Passivos de Exerc&#xed;cios Anteriores", pts: 20,
      inds: ["3.1","3.2","3.3","3.4"],
      descricao: "Analisa a gest&#xe3;o dos Restos a Pagar — despesas empenhadas mas n&#xe3;o pagas at&#xe9; 31 de dezembro. Volume elevado de RAP indica que compromissos s&#xe3;o transferidos para o exerc&#xed;cio seguinte, pressionando o or&#xe7;amento futuro.",
      destaque: "Em 2025, as IES apresentaram bom desempenho no indicador 3.3 (Pagamento de RAP), indicando comprometimento com a liquida&#xe7;&#xe3;o de passivos inscritos em exerc&#xed;cios anteriores."
    }
  ];

  const eixoCards = EIXOS_META.map(eixo => {
    let totalObt = 0, count = 0;
    IES_ORDER.forEach(ies => {
      const dAnual = (seloData[ies]||{})[anoAtivo];
      if (!dAnual?.indicadores) return;
      const somaIes = eixo.inds.reduce((s, k) => s + (dAnual.indicadores[k] || 0), 0);
      totalObt += somaIes;
      count++;
    });
    const mediaObt = count > 0 ? totalObt / count : 0;
    const aprov = count > 0 ? Math.round(mediaObt / eixo.pts * 100) : null;
    const corAprov = aprov!=null ? corPct(aprov) : "var(--gray-300,#d1d5db)";
    const tooltipAprov = `Média das 7 IEES-PR neste eixo, expressa como percentual da pontuação máxima possível (Eixo I: máx. 60 pts · Eixo II: máx. 20 pts · Eixo III: máx. 20 pts). Fonte: Base SELO – Paraná / SEFA · Exercício ${anoAtivo}.`;
    return `<div style="padding:14px 16px;border-radius:10px;border:1px solid var(--gray-200,#e5e7eb);margin-bottom:10px;background:var(--surface-1,#fff);">
      <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:8px;">
        <div>
          <div style="font-size:0.70rem;font-weight:600;color:var(--text-secondary);text-transform:uppercase;letter-spacing:0.05em;">Eixo ${eixo.id} &middot; ${eixo.pts} pontos</div>
          <div style="font-size:0.92rem;font-weight:700;margin-top:2px;">${eixo.nome}</div>
        </div>
        ${aprov!=null?`<div style="text-align:center;min-width:64px;cursor:help;" title="${tooltipAprov}">
          <div style="font-size:1.4rem;font-weight:800;color:${corAprov};">${aprov}%</div>
          <div style="font-size:0.65rem;color:var(--text-secondary);">aproveit.<br>m&#xe9;dio ${anoAtivo}</div>
        </div>`:''}
      </div>
      <div style="font-size:0.78rem;color:var(--text-secondary);line-height:1.6;margin-bottom:8px;">${eixo.descricao}</div>
      <div style="font-size:0.75rem;background:var(--surface-2,#f8fafc);border-radius:6px;padding:8px 10px;border-left:3px solid ${corAprov};line-height:1.5;"
           title="Fonte: Base SELO – Paraná / SEFA · Exercício ${anoAtivo}. A nota de cada indicador é calculada pelo SEFA/SETI com base nos dados de execução orçamentária registrados no Sistema SELO.">
        <strong>An&#xe1;lise:</strong> ${eixo.destaque}
      </div>
    </div>`;
  }).join("");

  // ── nota metodológica ───────────────────────────────────────────────────────
  const notaMetodologica = `
    <div style="padding:12px 16px;background:var(--surface-2,#f8fafc);border-radius:8px;
         font-size:0.77rem;color:var(--text-secondary);line-height:1.65;
         border-left:3px solid var(--color-primary,#1a56a0);margin-bottom:1.5rem;">
      <strong style="display:block;color:var(--text-primary);margin-bottom:4px;">O que &#xe9; o SELO Paran&#xe1;?</strong>
      O SELO Paran&#xe1; (Sistema de Excel&#xea;ncia em Lideran&#xe7;a Or&#xe7;ament&#xe1;ria) &#xe9; uma avalia&#xe7;&#xe3;o da
      <strong>qualidade da execu&#xe7;&#xe3;o or&#xe7;ament&#xe1;ria</strong> das universidades estaduais, conduzida pela
      Diretoria de Or&#xe7;amento Estadual (DOE/SEFA-PR). A nota final (escala 0&ndash;100) &#xe9; calculada
      pela DOE/SEFA com base em 11 indicadores organizados em 3 eixos tem&#xe1;ticos, com dados do
      SIAFIC &mdash; o sistema oficial de execu&#xe7;&#xe3;o or&#xe7;ament&#xe1;ria do Estado.<br><br>
      <strong>Como interpretar a nota:</strong> O SELO mede o <em>ritmo e a qualidade</em> da execu&#xe7;&#xe3;o &mdash;
      diferente do Relat&#xf3;rio 8050, que mede o <em>volume</em>. Uma universidade pode ter or&#xe7;amento
      elevado (8050) e nota SELO baixa se executa de forma concentrada no final do ano ou gera
      muitos Restos a Pagar. A leitura combinada das duas fontes oferece diagn&#xf3;stico mais completo.
      <br><br>
      <strong>Fonte:</strong> Base SELO &mdash; Paran&#xe1; (DOE/SEFA-PR) &middot;
      Extra&#xed;do via pipeline SETI/Instituto Publix. Exerc&#xed;cio ${anoAtivo}.
    </div>`;

  // ── montagem final ──────────────────────────────────────────────────────────
  return `
    ${notaMetodologica}
    ${selectorHtml}
    ${renderSeloDiagnostico()}

    <div style="display:grid;grid-template-columns:1fr 300px;gap:1.5rem;align-items:start;margin-bottom:1.5rem;">
      <article class="visual-card">
        <h3>Pontuação por Eixo Temático — ${anoAtivo}</h3>
        <p class="card-subtitle">
          Pontua&#xe7;&#xe3;o obtida por cada IEES em cada eixo (pts obtidos / pts m&#xe1;ximos).
          Nota final pr&#xe9;-calculada pela DOE/SEFA-PR.
        </p>
        <div class="table-wrap" style="overflow-x:auto;">
          <table class="data-table" style="font-size:0.82rem;">
            <thead><tr>
              <th>IEES</th>
              ${EIXOS_DEF.map(e=>`<th style="text-align:center;">Eixo ${e.id}<br><span style="font-weight:400;font-size:0.68rem;color:var(--text-secondary);">m&#xe1;x ${e.pts}</span></th>`).join("")}
              <th style="text-align:center;">Nota<br>Final</th>
            </tr></thead>
            <tbody>${eixoRows}</tbody>
          </table>
        </div>
      </article>

      <div style="display:flex;flex-direction:column;gap:1rem;">
        <article class="visual-card">
          <h3>Ranking &mdash; Nota Final</h3>
          <p class="card-subtitle">
            Posi&#xe7;&#xe3;o relativa das IEES no exerc&#xed;cio ${anoAtivo}. Escala 0&ndash;100.
            ${mediaGrupo?'A linha vertical indica a m&#xe9;dia do grupo ('+Math.round(mediaGrupo)+' pts).':''}
          </p>
          <div style="margin-top:12px;">${barRows||'<p class="card-subtitle">Sem dados.</p>'}</div>
          ${legendaCor}
        </article>
      </div>
    </div>

    <article class="visual-card" style="margin-top:0;">
      <h3>Diagn&#xf3;stico por Eixo Tem&#xe1;tico</h3>
      <p class="card-subtitle">
        Aproveitamento m&#xe9;dio das 7 IEES-PR em cada eixo, expresso como percentual
        da pontua&#xe7;&#xe3;o m&#xe1;xima poss&#xed;vel do eixo. Dados do exerc&#xed;cio ${anoAtivo} &mdash; consolidado anual.
      </p>
      <div style="margin-top:14px;">${eixoCards}
        <div class="chart-note metodologica" style="margin-top:16px;padding:14px 18px;background:var(--surface-2,#f5f7fa);border-left:3px solid var(--color-primary,#1a56a0);border-radius:6px;font-size:0.81rem;color:var(--text-secondary,#555);line-height:1.6;">
          <strong style="display:block;margin-bottom:6px;color:var(--text-primary,#222);font-size:0.83rem;">Sobre o SELO e a metodologia de avalia&#xe7;&#xe3;o</strong>
          <p style="margin:0 0 6px 0;">O <strong>SELO</strong> (Sistema de Excel&#xea;ncia em Lideran&#xe7;a Or&#xe7;ament&#xe1;ria) &#xe9; uma ferramenta da Secretaria de Estado da Fazenda do Paran&#xe1; (SEFA/SETI) que avalia anualmente a qualidade da gest&#xe3;o or&#xe7;ament&#xe1;ria das universidades estaduais paranaenses (IEES).</p>
          <p style="margin:0 0 6px 0;">A avalia&#xe7;&#xe3;o &#xe9; organizada em <strong>tr&#xea;s eixos tem&#xe1;ticos</strong>, cada um com peso definido (Eixo I: 60 pts &middot; Eixo II: 20 pts &middot; Eixo III: 20 pts), totalizando <strong>100 pontos</strong>. A nota final de cada IEES &#xe9; a soma direta das notas obtidas em todos os indicadores.</p>
          <p style="margin:0;">Os dados exibidos referem-se ao <strong>exerc&#xed;cio ${anoAtivo} &mdash; consolidado anual</strong>. N&#xe3;o h&#xe1; desagrega&#xe7;&#xe3;o por bimestre nesta base.</p>
        </div>
      </div>
    </article>`;
}

window.setEfficiencyMode = function setEfficiencyMode(mode) {
  state.efficiencyMode = mode === "eficiencia" ? "eficiencia" : "movimentacao";
  render();
};

window.setEfficiencyResult = function setEfficiencyResult(value) {
  state.efficiencyResult = budgetResultOptions[value] ? value : "completion";
  render();
};

var previousUpdateScopeAvailabilityEfficiency = updateScopeAvailability;
updateScopeAvailability = function(scope) {
  const v6Option = el.groupBy ? el.groupBy.querySelector('option[value="v6"]') : null;
  if ((state.activeTab === "efficiency" || state.activeTab === "performance") && v6Option) {
    v6Option.disabled = false;
    v6Option.title = "Variável padrão das abas de Orçamento e Desempenho (Despesa 8050)";
    return;
  }
  previousUpdateScopeAvailabilityEfficiency(scope);
};

function applyEfficiencyDefaults() {
  if ((state.activeTab !== "efficiency" && state.activeTab !== "performance") || state.efficiencyDefaultApplied || !el.groupBy) return;
  const v6Option = el.groupBy.querySelector('option[value="v6"]');
  if (v6Option) v6Option.disabled = false;
  el.groupBy.value = "v6";
  updateGroupOptions("v6");
  if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
  state.efficiencyDefaultApplied = true;
}

var previousRenderEfficiencyDefaults = render;
render = function renderWithEfficiencyDefaults() {
  applyEfficiencyDefaults();
  previousRenderEfficiencyDefaults();
};

var previousRenderBlockContentEfficiency = renderBlockContent;

function canonicalTabBlockRenderer(tabId) {
  if (tabId === "comparison" && typeof comparisonBlock === "function") return comparisonBlock;
  if (tabId === "access" && typeof accessBlock === "function") return accessBlock;
  if (tabId === "retention" && typeof retentionBlock === "function") return retentionBlock;
  if (tabId === "quality" && typeof qualityBlock === "function") return qualityBlock;
  if (tabId === "faculty" && typeof facultyBlock === "function") return facultyBlock;
  if (tabId === "employment" && typeof employmentBlock === "function") return employmentBlock;
  if (tabId === "efficiency" && typeof efficiencyBlock === "function") return efficiencyBlock;
  if (tabId === "performance" && typeof performanceBlock === "function") return performanceBlock;
  return null;
}
window.canonicalTabBlockRenderer = canonicalTabBlockRenderer;

renderBlockContent = function renderBlockContentCanonical(tabId, title, c) {
  var renderer = canonicalTabBlockRenderer(tabId);
  return renderer ? renderer(title, c) : previousRenderBlockContentEfficiency(tabId, title, c);
};
window.renderBlockContent = renderBlockContent;

var previousRenderNumberedTabEfficiency = renderNumberedTab;
renderNumberedTab = function renderNumberedTabCanonical(tabId, c, summary = "") {
  if (tabId === "comparison" && typeof renderComparisonTab === "function") return renderComparisonTab(c, summary);
  if (tabId !== "efficiency" && tabId !== "performance") return previousRenderNumberedTabEfficiency(tabId, c, summary);
  const blocks = tabBlocks[tabId] || [];
  const mode = "";
  const banner2026 = (tabId === "efficiency" && c.f.year === '2026')
    ? '<div class="data-source-banner warning visible"><span class="dsb-icon" aria-hidden="true">⚠</span><div class="dsb-body"><strong>Dados parciais — 2026</strong><span>Dados de 2026 parciais — exercício em andamento (~3 meses executados). Valores de execução orçamentária não são comparáveis aos anos anteriores.</span></div></div>'
    : '';
  const perfNote = tabId === "performance"
    ? '<div class="metodologia-note"><span class="metodologia-icon">ℹ</span> Esta aba apresenta o desempenho relativo das IEES-PR com base em indicadores compostos, cruzamentos acadêmicos e a avaliação de resposta ao Piloto Orçamento para Resultados.</div>'
    : '';
  return `<div class="tab-aba-wrapper" data-tab-id="${tabId}">${summary}${banner2026}${perfNote}${mode}${blocks.map((title, index) => renderBlock(index + 1, title, renderBlockContent(tabId, title, c))).join("")}</div>`;
};
window.renderNumberedTab = renderNumberedTab;

renderTab = function renderTabCanonical(c) {
  const id = state.activeTab;
  const summary = typeof renderTabSummary === "function" ? renderTabSummary(id) : "";

  try {
    if (id === "overview") {
      const selectorBar = typeof indicatorSelectorBar === "function" ? indicatorSelectorBar("overview", tabIndicators.overview) : "";
      el.tabContent.innerHTML = `<div class="tab-aba-wrapper" data-tab-id="overview">${summary}${selectorBar}${overview(c)}</div>`;
    } else if (id === "comparison" && typeof renderComparisonTab === "function") {
      el.tabContent.innerHTML = renderComparisonTab(c, summary);
    } else {
      el.tabContent.innerHTML = renderNumberedTab(id, c, summary);
    }

    if (typeof bindModeSelector === "function") bindModeSelector();
    if (typeof bindOverviewControls === "function") bindOverviewControls();
    if (typeof bindComparisonControls === "function") bindComparisonControls();
    if (typeof bindComparisonYearButtons === "function") bindComparisonYearButtons();
    window.__lastTabRenderError = null;
  } catch (error) {
    const detail = String(error && error.message ? error.message : error)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;");
    window.__lastTabRenderError = { tabId: id, message: detail };
    console.error(`[painel] Falha ao renderizar a aba ${id}`, error);
    if (el.tabContent) {
      el.tabContent.innerHTML = `<div class="tab-aba-wrapper" data-tab-id="${id}"><div class="empty-state"><span class="empty-icon">!</span><p class="empty-title">Falha ao renderizar a aba ${id}</p><p class="empty-desc">${detail}</p></div></div>`;
    }
  }
};
window.renderTab = renderTab;

var previousRenderKpisEfficiency = renderKpis;
renderKpis = function(c) {
  if (state.activeTab === "performance") {
    el.kpiGrid.classList.remove("overview-kpi-grid", "efficiency-kpi-grid");
    el.kpiGrid.classList.add("efficiency-kpi-grid");
    el.kpiGrid.style.display = "";
    const rows = efficiencyRows(c);
    const corrRows = rows.filter(u => isValidNumber(costPerStudent(u)) && isValidNumber(academicPerformanceIndex(u)));
    const corr = corrRows.length >= 3 ? pearsonCorrelation(corrRows.map(u => costPerStudent(u)), corrRows.map(u => academicPerformanceIndex(u))) : null;
    const effRows = rows.map(u => ({ u, idx: efficiencyAcademicIndex(u, rows) })).filter(x => isValidNumber(x.idx)).sort((a, b) => b.idx - a.idx);
    const topEff = effRows[0];
    const cards = [
      ["Correlação orçamento × desempenho", corr != null ? corr.toFixed(2).replace(".", ",") : "—"],
      ["IEES mais eficiente", topEff ? topEff.u.sigla : "—"],
      ["Custo médio por aluno", rows.length ? formatCurrency(mean(rows, costPerStudent)) : "—"],
      ["Desempenho acadêmico médio", corrRows.length ? `${mean(corrRows, academicPerformanceIndex).toFixed(1).replace(".", ",")} pts` : "—"]
    ];
    el.kpiGrid.innerHTML = cards.map(([label, value]) => `<article class="kpi-card kpi-budget"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`).join("");
    return;
  }
  if (state.activeTab !== "efficiency") return previousRenderKpisEfficiency(c);
  el.kpiGrid.classList.remove("overview-kpi-grid");
  el.kpiGrid.classList.add("efficiency-kpi-grid");
  el.kpiGrid.style.display = "";
  const rows = efficiencyRows(c);
  const a = budgetAgg(rows);
  const profile = efficiencyProfileLabel(rows, c);
  const cards = [
    ["Orçamento liquidado total", formatCurrencyMillions(a.liquidated)],
    [indicatorName(81), formatPercent(a.executionRate)],
    [indicatorName(85), formatPercent(a.variationRate)],
    [indicatorName(84), formatPercent(a.contingencyRate)],
    ["Perfil orçamentário", profile]
  ];
  el.kpiGrid.innerHTML = cards.map(([label, value]) => `<article class="kpi-card kpi-budget"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`).join("");
};
window.renderKpis = renderKpis;

var previousUpdateFooterEfficiency = updateFooter;
updateFooter = function(c) {
  const footerCluster = document.getElementById("footerClusterLabel");
  const footerScope = document.getElementById("footerScopeLabel");
  if (!footerCluster && !footerScope) return previousUpdateFooterEfficiency(c);
  const ctx = c || context();
  const groupName = ctx.group === "all" ? "Todos os grupos" : ctx.group;
  if (footerCluster) footerCluster.textContent = `${ctx.f.groupBy.toUpperCase()} – ${groupName}`;
  if (footerScope) footerScope.textContent = state.activeTab === "faculty" ? "Paraná (SETI/LGU)" : (state.activeTab === "efficiency" || state.activeTab === "performance") ? "Paraná (Despesa 8050)" : ctx.f.scope;
};

var previousUpdateContextBarEfficiency = updateContextBar;
updateContextBar = function(c) {
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  if (badge) {
    const lockedPR = state.activeTab === "faculty" || state.activeTab === "efficiency" || state.activeTab === "performance";
    const isBR = c.f.scope === "Brasil" && !lockedPR;
    badge.className = `scope-badge ${isBR ? "scope-br" : "scope-pr"}`;
    badge.textContent = isBR ? "🌐 Brasil" : "📍 Paraná";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    const groupName = c.group === "all" ? "Todos os grupos" : c.group;
    row.innerHTML = `<span class="cluster-badge c-${c.f.groupBy}"><span class="c-dim">${c.f.groupBy.toUpperCase()}</span> ${groupName}</span>`;
  }
  updateFooter(c);
};

var previousRenderTopEfficiency = renderTop;
renderTop = function(c) {
  const t = tabInfo[state.activeTab];
  el.activeTabKicker.textContent = t[0];
  el.activeTabTitle.textContent = t[1];
  el.activeTabDescription.textContent = t[2];
  const scopeText = state.activeTab === "faculty" ? "Paraná · SETI/LGU" : (state.activeTab === "efficiency" || state.activeTab === "performance") ? "Paraná · Despesa 8050" : c.f.scope;
  el.periodPill.innerHTML = _periodPillHTML(c.f.year, scopeText);
  el.scopeLabel.textContent = c.selected ? `${c.selected.sigla} | ${c.group}` : c.group === "all" ? "Sistema estadual" : `Grupo ${c.group}`;
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateFooter(c);
  updateTabIndicator();
};

// ── PILOTO: helpers de cálculo ──────────────────────────────────────────────

function safeDivide(a, b) {
  const na = Number(a), nb = Number(b);
  if (!isFinite(na) || !isFinite(nb) || nb === 0) return null;
  return na / nb;
}

function isValidNumber(v) {
  return v != null && isFinite(Number(v));
}

// Custo por aluno (R$) — denominador: número de matrículas ativas (QT_MAT/INEP), não vagas
function costPerStudent(u) {
  return safeDivide(u.budget * 1e6, u.students);
}

// Custo por concluinte (R$)
function costPerGraduate(u) {
  return safeDivide(u.budget * 1e6, u.graduates);
}

// Custo por vaga ocupada (R$)
function costPerOccupiedVacancy(u) {
  return safeDivide(u.budget * 1e6, u.vacancies * u.occupancy / 100);
}

// Custo por egresso inserido (R$)
function costPerEmployed(u) {
  return safeDivide(u.budget * 1e6, u.graduates * u.employment / 100);
}

// Índice de Desempenho Acadêmico (0–100)
// Pesos: conclusão 25%, permanência 20%, ocupação 15%, qualidade 15%, inserção 15%, pesquisa 10%
function academicPerformanceIndex(u) {
  const permanence = isValidNumber(u.dropout) ? clamp(100 - u.dropout, 0, 100) : null;
  const metrics = [
    { value: isValidNumber(u.completion)  ? clamp(u.completion,  0, 100) : null, weight: 25 },
    { value: permanence,                                                          weight: 20 },
    { value: isValidNumber(u.occupancy)   ? clamp(u.occupancy,   0, 100) : null, weight: 15 },
    { value: isValidNumber(u.doctors)     ? clamp(u.doctors,     0, 100) : null, weight: 15 },
    { value: isValidNumber(u.employment)  ? clamp(u.employment,  0, 100) : null, weight: 15 },
    { value: isValidNumber(u.capes)       ? clamp((u.capes - 3) / 2 * 100, 0, 100) : null, weight: 10 }
  ];
  const valid = metrics.filter(m => m.value != null);
  if (valid.length < 2) return null;
  const totalWeight = valid.reduce((s, m) => s + m.weight, 0);
  return valid.reduce((s, m) => s + m.value * m.weight, 0) / totalWeight;
}

// Índice de eficiência acadêmico-orçamentária
// = desempenho relativo / esforço relativo
function efficiencyAcademicIndex(u, rows) {
  const api = academicPerformanceIndex(u);
  const cps = costPerStudent(u);
  if (api == null || cps == null || !rows.length) return null;
  const apis = rows.map(academicPerformanceIndex).filter(isValidNumber);
  const cpss = rows.map(costPerStudent).filter(isValidNumber);
  const avgApi = apis.length ? apis.reduce((a, b) => a + b, 0) / apis.length : null;
  const avgCps = cpss.length ? cpss.reduce((a, b) => a + b, 0) / cpss.length : null;
  if (!avgApi || !avgCps) return null;
  const relPerf = api / avgApi;
  const relCost = cps / avgCps;
  return safeDivide(relPerf, relCost);
}

// Coeficiente de correlação de Pearson entre dois arrays numéricos
function pearsonCorrelation(xs, ys) {
  if (xs.length !== ys.length || xs.length < 3) return null;
  const n = xs.length;
  const mx = xs.reduce((a, b) => a + b, 0) / n;
  const my = ys.reduce((a, b) => a + b, 0) / n;
  const num = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0);
  const dx  = Math.sqrt(xs.reduce((s, x) => s + (x - mx) ** 2, 0));
  const dy  = Math.sqrt(ys.reduce((s, y) => s + (y - my) ** 2, 0));
  if (dx === 0 || dy === 0) return null;
  return clamp(num / (dx * dy), -1, 1);
}

function classifyCorrelation(r) {
  if (r == null) return "Não calculável";
  const abs = Math.abs(r);
  if (abs >= 0.60) return "forte";
  if (abs >= 0.30) return "moderada";
  return "fraca";
}

function classifyEfficiency(idx) {
  if (idx == null) return { label: "Sem dados", cls: "eff-neutral" };
  if (idx > 1.10)  return { label: "Alta eficiência", cls: "eff-high" };
  if (idx >= 0.90) return { label: "Eficiência proporcional", cls: "eff-mid" };
  return { label: "Baixa eficiência", cls: "eff-low" };
}

// Para cada par (IEES menor orçamento, IEES maior orçamento), conta indicadores superados
function lowerBudgetOutperformance(rows) {
  const PERF_GETTERS = [
    { get: u => u.completion,  higher: true },
    { get: u => clamp(100 - u.dropout, 0, 100), higher: true },
    { get: u => u.occupancy,   higher: true },
    { get: u => u.doctors,     higher: true },
    { get: u => u.employment,  higher: true },
    { get: u => u.capes,       higher: true }
  ];
  const pairs = [];
  for (let i = 0; i < rows.length; i++) {
    for (let j = 0; j < rows.length; j++) {
      if (i === j) continue;
      const low = rows[i], high = rows[j];
      if ((costPerStudent(low) ?? Infinity) >= (costPerStudent(high) ?? 0)) continue;
      let wins = 0, total = 0;
      PERF_GETTERS.forEach(({ get, higher }) => {
        const a = get(low), b = get(high);
        if (!isValidNumber(a) || !isValidNumber(b)) return;
        total++;
        if (higher ? a > b : a < b) wins++;
      });
      if (total > 0) pairs.push({ low, high, wins, total, pct: wins / total });
    }
  }
  return pairs.filter(p => p.pct >= 0.5).sort((a, b) => b.pct - a.pct).slice(0, 6);
}

// ── fim PILOTO: helpers de cálculo ──────────────────────────────────────────

var budgetResultOptions = {
  completion: { label: indicatorName(27), get: u => u.completion, fmt: formatPercent },
  occupancy: { label: indicatorName(26), get: u => u.occupancy, fmt: formatPercent },
  employment: { label: indicatorName(37), get: u => u.employment, fmt: formatPercent },
  doctorate: { label: indicatorName(6), get: u => u.doctors, fmt: formatPercent },
  cresShare: { label: indicatorName(59), get: u => facultyMetrics(u).cresParticipation, fmt: formatPercent },
  cnpqTeacher: { label: `${indicatorName(60)} por docente`, get: u => u.cnpq * 1000000 / Math.max(estimatedFaculty(u), 1), fmt: formatCurrency }
};

// ── PILOTO: funções de renderização ─────────────────────────────────────────

function renderPilotAnswer(rows) {
  if (!rows.length) return `<div class="pilot-answer-card">Dados insuficientes para calcular a relação entre orçamento e desempenho no recorte selecionado.</div>`;
  const cpsList = rows.map(costPerStudent).filter(isValidNumber);
  const apiList = rows.map(academicPerformanceIndex).filter(isValidNumber);
  if (cpsList.length < 3 || apiList.length < 3) {
    return `<div class="pilot-answer-card">Dados insuficientes para calcular a relação entre orçamento e desempenho no recorte selecionado.</div>`;
  }
  const r = pearsonCorrelation(cpsList, apiList);
  const direction = r != null && r < 0 ? "inversa" : "positiva";
  const strength = classifyCorrelation(r);
  const pairs = lowerBudgetOutperformance(rows);
  const nLower = new Set(pairs.map(p => p.low.id)).size;
  const rStr = r != null ? `(r = ${r.toFixed(2).replace(".", ",")})` : "";
  return `<div class="pilot-answer-card">
    No recorte selecionado, a relação entre custo por aluno e desempenho acadêmico é
    <strong>${strength} ${rStr}</strong> e de direção <strong>${direction}</strong>.
    ${nLower > 0
      ? `<strong>${nLower} IEES</strong> com menor custo por aluno apresentam desempenho superior a IEES mais caras em pelo menos metade dos indicadores avaliados.`
      : "Não foram identificadas IEES com menor custo e desempenho sistematicamente superior no recorte atual."}
    <br><em style="font-size:12px;opacity:.7">Os dados sugerem associação, não causalidade.</em>
  </div>`;
}

function renderPilotEvidenceCards(rows) {
  if (!rows.length) return "";
  const cpsList = rows.map(u => ({ u, cps: costPerStudent(u) })).filter(x => isValidNumber(x.cps));
  const effList = rows.map(u => ({ u, idx: efficiencyAcademicIndex(u, rows) })).filter(x => isValidNumber(x.idx));
  const apiList = rows.map(u => ({ u, api: academicPerformanceIndex(u) })).filter(x => isValidNumber(x.api));
  const corr = pearsonCorrelation(cpsList.map(x => x.cps), rows.map(academicPerformanceIndex).filter(isValidNumber));
  const mostEff = effList.length ? effList.sort((a, b) => b.idx - a.idx)[0] : null;
  const highestCost = cpsList.length ? cpsList.sort((a, b) => b.cps - a.cps)[0] : null;
  const pairs = lowerBudgetOutperformance(rows);
  const bestOutperf = pairs.length ? pairs[0] : null;
  const alertIees = effList.filter(x => x.idx < 0.90);

  function card(label, value, sub) {
    return `<div class="pilot-ev-card"><div class="pilot-ev-label">${label}</div><div class="pilot-ev-value">${value}</div><div class="pilot-ev-sub">${sub}</div></div>`;
  }
  return `<div class="pilot-evidence-grid">
    ${corr != null
      ? card("Correlação orçamento × desempenho", corr.toFixed(2).replace(".", ","), `Relação ${classifyCorrelation(corr)} entre custo por aluno e desempenho`)
      : card("Correlação orçamento × desempenho", "—", "Dados insuficientes")}
    ${mostEff
      ? card("IEES mais eficiente", mostEff.u.sigla, `Índice de eficiência: ${mostEff.idx.toFixed(2).replace(".", ",")}`)
      : card("IEES mais eficiente", "—", "Não calculável")}
    ${highestCost
      ? card("Maior custo por aluno", highestCost.u.sigla, `${formatCurrency(highestCost.cps)} por estudante`)
      : card("Maior custo por aluno", "—", "Não disponível")}
    ${bestOutperf
      ? card("Menor orçamento, maior desempenho", bestOutperf.low.sigla, `Supera ${bestOutperf.high.sigla} em ${bestOutperf.wins} de ${bestOutperf.total} indicadores`)
      : card("Menor orçamento, maior desempenho", "—", "Nenhum par identificado")}
    ${alertIees.length
      ? card("IEES em alerta", String(alertIees.length), `${alertIees.map(x => x.u.sigla).join(", ")} com eficiência abaixo de 0,90`)
      : card("IEES em alerta", "0", "Nenhuma IEES com baixa eficiência no recorte")}
  </div>`;
}

function renderBudgetPerformanceScatter(rows) {
  if (!rows.length) return `<p class="card-subtitle">Sem dados para exibir.</p>`;
  const cpsList = rows.map(u => ({ u, cps: costPerStudent(u) })).filter(x => isValidNumber(x.cps));
  const apiList = rows.map(u => ({ u, api: academicPerformanceIndex(u) })).filter(x => isValidNumber(x.api));
  if (!cpsList.length || !apiList.length) return `<p class="card-subtitle">Dados insuficientes para montar a matriz.</p>`;
  const allRows = rows.filter(u => isValidNumber(costPerStudent(u)) && isValidNumber(academicPerformanceIndex(u)));
  const avgCps = allRows.reduce((s, u) => s + costPerStudent(u), 0) / allRows.length;
  const avgApi = allRows.reduce((s, u) => s + academicPerformanceIndex(u), 0) / allRows.length;
  const maxCps = Math.max(...allRows.map(costPerStudent));
  const maxApi = Math.max(...allRows.map(academicPerformanceIndex));

  // Posição das linhas de média no espaço de plot (0–100%)
  const avgXPct = clamp(avgCps / maxCps * 100, 10, 90).toFixed(1);
  const avgYPct = clamp(avgApi / maxApi * 100, 10, 90).toFixed(1);
  const avgXR   = (100 - parseFloat(avgXPct)).toFixed(1);
  const avgYT   = (100 - parseFloat(avgYPct)).toFixed(1);

  // Pontos coloridos por IES
  const points = allRows.map(u => {
    const cps = costPerStudent(u);
    const api = academicPerformanceIndex(u);
    const xPct = clamp(cps / maxCps * 100, 5, 92);
    const yPct = clamp(api / maxApi * 100, 5, 92);
    const col = _SCATTER_IES_COLORS[u.sigla] || "#4A6FA5";
    return `<button class="pilot-scatter-point" type="button"
      style="left:${xPct}%;bottom:${yPct}%;background:${col};border-color:${col}cc"
      title="${u.sigla}: custo/aluno ${formatCurrency(cps)} · Índice desempenho ${api.toFixed(1).replace(".", ",")}">${u.sigla}</button>`;
  }).join("");

  // Bloco explicativo
  const explainer = `<div class="chart-explainer" style="margin-bottom:12px;padding:12px 16px;background:var(--surface-2,#f5f5f5);border-radius:8px;font-size:0.85rem;color:var(--text-secondary,#555);line-height:1.6;">
    <strong style="display:block;margin-bottom:6px;color:var(--text-primary,#222);">O que esta matriz analisa?</strong>
    <p style="margin:0 0 6px 0;">A <strong>Matriz gasto × desempenho</strong> posiciona cada IEES paranaense
    segundo duas dimensões: o <strong>custo por aluno</strong> (eixo horizontal —
    orçamento liquidado dividido pelo número de matrículas ativas) e o
    <strong>índice composto de desempenho acadêmico</strong> (eixo vertical —
    média ponderada de indicadores de ocupação de vagas, conclusão, qualificação
    docente, pós-graduação e inserção profissional). O tamanho de cada bolinha é
    proporcional ao número de alunos matriculados.</p>
    <p style="margin:0 0 4px 0;"><strong>Bases e fontes:</strong></p>
    <ul style="margin:0;padding-left:18px;">
      <li><em>Custo por aluno (eixo X):</em> Orçamento liquidado — Relatório da Despesa 8050 (SETI/SEFA) ÷ Matrículas ativas — INEP, Censo da Educação Superior.</li>
      <li><em>Índice de desempenho (eixo Y):</em> Score composto calculado a partir de indicadores do INEP (Censo), CAPES (Sucupira) e SETI/RAIS (inserção profissional de egressos).</li>
    </ul>
  </div>`;

  // Fundos coloridos dos quadrantes (desenhados antes dos pontos)
  const quadBg = `
    <div style="position:absolute;left:0;right:${avgXR}%;bottom:${avgYPct}%;top:0;background:rgba(34,197,94,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:${avgXPct}%;right:0;bottom:${avgYPct}%;top:0;background:rgba(234,179,8,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:0;right:${avgXR}%;top:${avgYT}%;bottom:0;background:rgba(148,163,184,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:${avgXPct}%;right:0;top:${avgYT}%;bottom:0;background:rgba(239,68,68,0.07);pointer-events:none;z-index:0"></div>`;

  // Legenda dos quadrantes
  const quadLegend = `<div style="display:flex;gap:16px;flex-wrap:wrap;margin-top:8px;font-size:0.78rem;color:var(--text-secondary,#555);">
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(34,197,94,0.25);margin-right:4px;"></span>Eficiente — baixo custo, alto desempenho</span>
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(234,179,8,0.25);margin-right:4px;"></span>Alto investimento — alto custo, alto desempenho</span>
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(148,163,184,0.25);margin-right:4px;"></span>Atenção — baixo custo, baixo desempenho</span>
    <span><span style="display:inline-block;width:10px;height:10px;border-radius:2px;background:rgba(239,68,68,0.25);margin-right:4px;"></span>Ineficiente — alto custo, baixo desempenho</span>
  </div>`;

  return explainer +
    `<div class="pilot-scatter">
      ${quadBg}
      <span class="scatter-ref-v" style="left:${avgXPct}%"></span>
      <span class="scatter-ref-h" style="bottom:${avgYPct}%;top:auto"></span>
      <span class="scatter-q-label q1" style="color:#16a34a;opacity:0.6">Eficiente</span>
      <span class="scatter-q-label q2" style="color:#ca8a04;opacity:0.6">Alto investimento</span>
      <span class="scatter-q-label q3" style="color:#64748b;opacity:0.6">Atenção</span>
      <span class="scatter-q-label q4" style="color:#dc2626;opacity:0.6">Ineficiente</span>
      ${points}
      <span class="scatter-axis-label x">Custo por aluno →</span>
      <span class="scatter-axis-label y">↑ Desempenho</span>
    </div>
    <p class="card-subtitle" style="margin-top:4px">Média de custo: ${formatCurrency(avgCps)} por aluno · Média de desempenho: ${avgApi.toFixed(1).replace(".", ",")} pts</p>` +
    quadLegend;
}

function renderEfficiencyRankingTable(rows) {
  if (!rows.length) return "";
  const data = rows.map(u => ({
    u,
    cps: costPerStudent(u),
    api: academicPerformanceIndex(u),
    idx: efficiencyAcademicIndex(u, rows)
  })).filter(x => isValidNumber(x.idx)).sort((a, b) => b.idx - a.idx);
  if (!data.length) return `<p class="card-subtitle">Índice de eficiência não calculável para o recorte selecionado.</p>`;
  const maxIdx = Math.max(...data.map(x => x.idx));

  // SELO: lê notaFinal do window.SELO_DATA (já carregado pelo data-hub)
  // Usa o ano ativo quando existir; caso contrário, usa o ano mais recente disponível.
  const _seloD = window.SELO_DATA || {};
  const _todosAnosSelo = Array.from(new Set(Object.values(_seloD).flatMap(entry => Object.keys(entry || {})))).sort();
  const _seloAnoTabela = _todosAnosSelo.includes(state.seloAno)
    ? state.seloAno
    : (_todosAnosSelo[_todosAnosSelo.length - 1] || "2025");
  function _seloNota(sigla) {
    const entry = _seloD[sigla];
    if (!entry) return null;
    const v = entry[_seloAnoTabela]?.notaFinal;
    return v != null ? v : null;
  }

  // ranking SELO por posição relativa entre as IES do recorte com nota disponível
  const seloRanking = [...data.map(x => x.u)]
    .filter(u => _seloNota(u.sigla) != null)
    .sort((a, b) => _seloNota(b.sigla) - _seloNota(a.sigla));
  const seloTotal = seloRanking.length;
  const seloPos = {};
  seloRanking.forEach((u, i) => { seloPos[u.sigla] = i + 1; });

  const rows_html = data.map((item, i) => {
    const cls = classifyEfficiency(item.idx);
    const barW = clamp(item.idx / Math.max(maxIdx, 0.01) * 100, 4, 100);
    const seloNota = _seloNota(item.u.sigla);
    const pos = seloPos[item.u.sigla] ?? null;
    const seloColor = pos === null ? "var(--gray-300,#d1d5db)"
      : pos <= 2                ? "#2e7d32"
      : pos <= seloTotal - 2    ? "#5c7a9e"
      : "#e65100";
    const seloCell = seloNota != null
      ? `<div title="Posição ${pos}º de ${seloTotal} no ranking SELO-PR ${_seloAnoTabela}. Nota Final da Unidade calculada pela SEFA com base na execução orçamentária acumulada do exercício." style="display:flex;flex-direction:column;align-items:center;gap:3px;">
          <span style="font-weight:700;font-size:0.90rem;color:${seloColor};">${Math.round(seloNota)}</span>
          <div style="width:52px;height:4px;background:var(--gray-100,#f3f4f6);border-radius:2px;overflow:hidden;">
            <div style="width:${seloNota}%;height:100%;background:${seloColor};border-radius:2px;"></div>
          </div>
        </div>`
      : `<span style="color:var(--text-secondary)">—</span>`;
    return `<tr class="${cls.cls}"><td>${i + 1}º</td><td><strong>${item.u.sigla}</strong></td>
      <td>${item.cps != null ? formatCurrency(item.cps) : "—"}</td>
      <td>${item.api != null ? item.api.toFixed(1).replace(".", ",") : "—"}</td>
      <td><div class="eff-bar-wrap ${cls.cls}"><div class="eff-bar-track"><div class="eff-bar-fill" style="width:${barW}%"></div></div><span>${item.idx.toFixed(2).replace(".", ",")}</span></div></td>
      <td style="text-align:center;">${seloCell}</td>
      <td><span class="eff-badge">${cls.label}</span></td></tr>`;
  }).join("");
  return `<div class="table-wrap"><table class="pilot-ranking-table">
    <thead><tr><th>Pos.</th><th>IEES</th>
      <th><span class="eff-th-info" tabindex="0">Custo/aluno ⓘ<span class="eff-th-tooltip"><strong>Custo por aluno</strong><br>Orçamento total liquidado pela universidade no ano dividido pelo número de alunos com matrícula ativa. Reflete o investimento médio por estudante efetivamente matriculado — não considera vagas ofertadas.<br><br><em>Fontes: Despesa liquidada — Relatório da Despesa 8050 (SETI/SEFA, 2024); Matrículas ativas (QT_MAT) — INEP/Censo da Educação Superior (2024).</em></span></span></th>
      <th><span class="eff-th-info" tabindex="0">Índice desempenho ⓘ<span class="eff-th-tooltip"><strong>Índice de Desempenho Acadêmico</strong><br>Score composto (0–100) calculado por média ponderada de seis indicadores:<br>• Conclusão: 25% &nbsp;• Permanência (1 − evasão): 20%<br>• Ocupação de vagas: 15% &nbsp;• % Docentes doutores: 15%<br>• Inserção profissional: 15% &nbsp;• Conceito CAPES médio: 10%<br>Quando um indicador está ausente, o peso é redistribuído entre os demais.<br><br><em>Fontes: INEP/Censo da Educação Superior, CAPES/Sucupira, bases administrativas SETI/PR.</em></span></span></th>
      <th><span class="eff-th-info" tabindex="0">Índice eficiência ⓘ<span class="eff-th-tooltip"><strong>Índice de Eficiência Acadêmico-Orçamentária</strong><br>Razão entre o desempenho relativo e o custo relativo da universidade em relação à média do conjunto: <em>desempenho da IES ÷ média do grupo</em> dividido por <em>custo da IES ÷ média do grupo</em>.<br>Valores acima de 1,0 indicam que a universidade entrega desempenho proporcionalmente superior ao seu custo.<br>• Acima de 1,10 → Alta eficiência<br>• Entre 0,90 e 1,10 → Eficiência proporcional<br>• Abaixo de 0,90 → Baixa eficiência<br><br><em>Fontes: calculado internamente a partir do Índice de Desempenho e do Custo/Aluno normalizados pela média das IEES-PR do recorte.</em></span></span></th>
      <th style="text-align:center;"><span class="eff-th-info" tabindex="0">SELO ${_seloAnoTabela} ⓘ<span class="eff-th-tooltip"><strong>Nota Final SELO-PR</strong><br>Nota final SELO-PR — Sistema de Excelência em Liderança Orçamentária (DOE/SEFA). Escala 0–100.<br><br>Composta por 11 indicadores em 3 eixos: Eficiência na Execução Orçamentária (60 pts), Racionalidade na Gestão de Créditos Adicionais (20 pts) e Passivos de Exercícios Anteriores (20 pts).<br><br>A cor indica posição relativa entre as IES do recorte: verde = 1º–2º &nbsp; azul-acinzentado = posições intermediárias &nbsp; laranja = últimas posições.<br><br><em>Fonte: Base SELO — Paraná (DOE/SEFA-PR), exercício ${_seloAnoTabela}.</em></span></span></th>
      <th>Classificação</th></tr></thead>
    <tbody>${rows_html}</tbody>
  </table></div>
  <div class="metodologia-ranking-note">
    <strong>Como os índices são calculados</strong>
    <p><strong>Custo/Aluno:</strong> orçamento total liquidado pela IEES no exercício (Relatório da Despesa 8050 · SEFA/SETI), dividido pelo número de estudantes com matrícula ativa (QT_MAT · INEP/Censo da Educação Superior). Expresso em reais por estudante. Não considera vagas ofertadas não preenchidas.</p>
    <p><strong>Índice de Desempenho Acadêmico</strong> (escala 0–100): média ponderada de seis indicadores acadêmicos — taxa de conclusão (peso 25%), permanência, ou seja, 100 menos a taxa de evasão (20%), taxa de ocupação de vagas (15%), proporção de docentes com doutorado (15%), taxa de inserção profissional de egressos (15%) e conceito CAPES médio dos programas de pós-graduação (10%). Quando algum indicador não está disponível para a IEES, o peso é redistribuído proporcionalmente entre os demais; o índice exige pelo menos dois indicadores com dado válido.</p>
    <p><strong>Índice de Eficiência Acadêmico-Orçamentária:</strong> razão entre o desempenho relativo e o custo relativo da IEES em relação à média do conjunto — isto é, (Índice de Desempenho da IEES ÷ média do grupo) dividido por (Custo/Aluno da IEES ÷ média do grupo). Um valor acima de 1,0 indica que a IEES entrega desempenho proporcionalmente superior ao que seu custo justificaria. Faixas de classificação: <em>Alta eficiência</em> (índice &gt; 1,10), <em>Eficiência proporcional</em> (0,90–1,10) e <em>Baixa eficiência</em> (&lt; 0,90).</p>
    <p style="margin:0"><em>Os índices têm caráter analítico-comparativo e devem ser interpretados em conjunto com o contexto institucional de cada IEES — porte, missão territorial, perfil de cursos e condições orçamentárias estruturais.</em></p>
  </div>`;
}

// ── Comparador Direto entre Duas IES ─────────────────────────────────────────
if (!state.comparadorDiretoA) state.comparadorDiretoA = "UEL";
if (!state.comparadorDiretoB) state.comparadorDiretoB = "UEM";
var _cdRows = null;
var _CD_IES  = ["UEL","UEM","UEPG","UNIOESTE","UNICENTRO","UENP","UNESPAR"];
var _CD_INDS = [
  { key:"occupancy",  label:"Taxa de ocupação de vagas",
    get:function(u){return u.occupancy;},  fmt:_fmtP, higher:true },
  { key:"completion", label:"Taxa de conclusão",
    get:function(u){return u.completion;}, fmt:_fmtP, higher:true },
  { key:"employment", label:"Inserção profissional",
    get:function(u){return u.employment;}, fmt:_fmtP, higher:true },
  { key:"capes",      label:"Conceito CAPES médio",
    get:function(u){return u.capes;},
    fmt:function(v){return v!=null&&isFinite(v)?v.toFixed(2).replace(".",","):"—";},
    higher:true },
  { key:"doctors",    label:"% Docentes doutores",
    get:function(u){return u.doctors;},    fmt:_fmtP, higher:true },
  { key:"costGrad",   label:"Custo por graduado (R$)",
    get:function(u){return (u.liquidado>0&&u.graduates>0)?u.liquidado*1e6/u.graduates:null;},
    fmt:function(v){return v!=null&&isFinite(v)?formatCurrency(v):"—";},
    higher:false }
];

window.setComparadorDireto = function(side, sigla) {
  if (side === "A") state.comparadorDiretoA = sigla;
  else              state.comparadorDiretoB = sigla;
};

window.runComparadorDireto = function() {
  var inner = document.getElementById("comparadorDiretoInner");
  if (!inner || !_cdRows) return;
  var sA = state.comparadorDiretoA, sB = state.comparadorDiretoB;
  if (sA === sB) {
    inner.innerHTML = '<p class="card-subtitle" style="color:var(--orange-600);padding:12px 0">Selecione IES diferentes para comparar.</p>';
    return;
  }
  inner.innerHTML = _buildCDInner(_cdRows, sA, sB);
  if (typeof window._injectAnnotations === "function") window._injectAnnotations();
};

function _buildCDInner(rows, sA, sB) {
  var uA = rows.find(function(u){return u.sigla===sA;});
  var uB = rows.find(function(u){return u.sigla===sB;});
  if (!uA || !uB) return '<div class="empty-state">Uma das IES não está disponível no recorte atual.</div>';

  // ── Contexto orçamentário ─────────────────────────────────────────────────
  var cpA = (uA.liquidado>0&&uA.students>0) ? uA.liquidado*1e6/uA.students : null;
  var cpB = (uB.liquidado>0&&uB.students>0) ? uB.liquidado*1e6/uB.students : null;

  function ctxDiff(vA, vB, lowerBetter) {
    if (vA==null||vB==null||vB===0) return "";
    var pct = (vA-vB)/Math.abs(vB)*100;
    var abs = Math.abs(pct).toFixed(1).replace(".",",");
    if (Math.abs(pct)<2) return '<span style="color:var(--gray-500)">≈ equivalentes</span>';
    if (lowerBetter) {
      return pct<0
        ? '<span style="color:var(--color-success,#16a34a)">▼ '+abs+'% mais barata</span>'
        : '<span style="color:var(--color-danger,#dc2626)">▲ '+abs+'% mais cara</span>';
    }
    return pct>0
      ? '<span style="color:var(--color-success,#16a34a)">▲ '+abs+'% acima</span>'
      : '<span style="color:var(--color-danger,#dc2626)">▼ '+abs+'% abaixo</span>';
  }

  // taxa liquidado/orçamento atualizado (%)
  var liqOaA = (uA.budget>0 && uA.liquidado!=null) ? uA.liquidado/uA.budget*100 : null;
  var liqOaB = (uB.budget>0 && uB.liquidado!=null) ? uB.liquidado/uB.budget*100 : null;

  var ctxRows = [
    { label:"Orçamento atualizado (R$ M)",
      fmtA:uA.budget!=null?_fmtM(uA.budget):"—", fmtB:uB.budget!=null?_fmtM(uB.budget):"—",
      vA:uA.budget, vB:uB.budget, lower:false },
    { label:"Liquidado (R$ M)",
      fmtA:uA.liquidado!=null?_fmtM(uA.liquidado):"—", fmtB:uB.liquidado!=null?_fmtM(uB.liquidado):"—",
      vA:uA.liquidado, vB:uB.liquidado, lower:false },
    { label:"Liquidado / Orçamento atualizado (%)",
      fmtA:liqOaA!=null?_fmtP(liqOaA):"—", fmtB:liqOaB!=null?_fmtP(liqOaB):"—",
      vA:liqOaA, vB:liqOaB, lower:false },
    { label:"Execução orçamentária — IND-81 (%)",
      fmtA:uA.execution!=null?_fmtP(uA.execution):"—", fmtB:uB.execution!=null?_fmtP(uB.execution):"—",
      vA:uA.execution, vB:uB.execution, lower:false },
    { label:"Taxa de liquidação — IND-82 (%)",
      fmtA:uA.liquidation!=null?_fmtP(uA.liquidation):"—", fmtB:uB.liquidation!=null?_fmtP(uB.liquidation):"—",
      vA:uA.liquidation, vB:uB.liquidation, lower:false },
    { label:"Custo por aluno (R$)",
      fmtA:cpA!=null?formatCurrency(cpA):"—", fmtB:cpB!=null?formatCurrency(cpB):"—",
      vA:cpA, vB:cpB, lower:true },
    { label:"% Pessoal e Encargos",
      fmtA:uA.part_pessoal!=null?_fmtP(uA.part_pessoal):"—", fmtB:uB.part_pessoal!=null?_fmtP(uB.part_pessoal):"—",
      vA:uA.part_pessoal, vB:uB.part_pessoal, lower:false },
    { label:"Suplementação (%)",
      fmtA:uA.supplementation!=null?_fmtP(uA.supplementation):"—", fmtB:uB.supplementation!=null?_fmtP(uB.supplementation):"—",
      vA:uA.supplementation, vB:uB.supplementation, lower:true }
  ];

  var ctxHtml =
    '<h4 style="font-size:12px;font-weight:700;color:var(--gray-600);text-transform:uppercase;margin:0 0 8px">Contexto orçamentário</h4>'+
    '<div style="overflow-x:auto;margin-bottom:16px"><table class="data-table">'+
    '<thead><tr>'+
    '<th style="text-align:left">Indicador</th>'+
    '<th style="text-align:right">'+sA+'</th>'+
    '<th style="text-align:right">'+sB+'</th>'+
    '<th style="text-align:left">Diferença</th>'+
    '</tr></thead><tbody>'+
    ctxRows.map(function(r){
      return '<tr><td>'+r.label+'</td>'+
        '<td style="text-align:right">'+r.fmtA+'</td>'+
        '<td style="text-align:right">'+r.fmtB+'</td>'+
        '<td style="font-size:12px">'+ctxDiff(r.vA,r.vB,r.lower)+'</td>'+
        '</tr>';
    }).join("")+
    '</tbody></table></div>';

  // ── Tabela de indicadores de desempenho ───────────────────────────────────
  var nA = 0, nB = 0;
  var winNamesA = [], winNamesB = [];

  var indRows = _CD_INDS.map(function(ind) {
    var vA = ind.get(uA);
    var vB = ind.get(uB);
    var allVals = rows.map(function(u){return ind.get(u);});
    var valid   = allVals.filter(function(v){return v!=null&&isFinite(v);});
    var best    = valid.length ? (ind.higher?Math.max.apply(null,valid):Math.min.apply(null,valid)) : null;
    var worst   = valid.length ? (ind.higher?Math.min.apply(null,valid):Math.max.apply(null,valid)) : null;

    function barPct(v) {
      if (v==null||best==null||worst==null||best===worst) return 0;
      return ind.higher
        ? clamp((v-worst)/(best-worst)*100,0,100)
        : clamp((worst-v)/(worst-best)*100,0,100);
    }
    function avgOf7() {
      return valid.length ? valid.reduce(function(s,v){return s+v;},0)/valid.length : null;
    }
    function miniBar(v) {
      var pct = barPct(v);
      var avg = avgOf7();
      var isGood = v!=null&&avg!=null&&(ind.higher?v>=avg:v<=avg);
      var col = v!=null ? (isGood?"var(--color-success,#16a34a)":"var(--color-danger,#dc2626)") : "#d9e1ec";
      return '<div style="height:5px;background:#edf1f7;border-radius:3px;margin-top:4px">'+
        '<div style="height:100%;width:'+pct.toFixed(1)+'%;background:'+col+';border-radius:3px"></div>'+
        '</div>';
    }

    var winHtml = "—";
    if (vA!=null&&vB!=null) {
      var maxV = Math.max(Math.abs(vA),Math.abs(vB));
      if (maxV>0 && Math.abs(vA-vB)/maxV*100<2) {
        winHtml = '<span style="background:#f3f4f6;color:var(--gray-600);padding:2px 7px;border-radius:4px;font-size:12px">= Empate</span>';
      } else {
        var aWins = ind.higher ? vA>vB : vA<vB;
        if (aWins) {
          nA++; winNamesA.push(ind.label);
          winHtml = '<span style="background:#d1fae5;color:#065f46;padding:2px 7px;border-radius:4px;font-size:12px">← '+sA+' ✓</span>';
        } else {
          nB++; winNamesB.push(ind.label);
          winHtml = '<span style="background:#d1fae5;color:#065f46;padding:2px 7px;border-radius:4px;font-size:12px">'+sB+' ✓ →</span>';
        }
      }
    }

    return '<tr><td>'+ind.label+'</td>'+
      '<td style="text-align:right">'+(vA!=null?ind.fmt(vA):"—")+miniBar(vA)+'</td>'+
      '<td style="text-align:right">'+(vB!=null?ind.fmt(vB):"—")+miniBar(vB)+'</td>'+
      '<td>'+winHtml+'</td></tr>';
  }).join("");

  var total6 = _CD_INDS.length;
  var scoreCellA = nA>nB ? '<strong style="color:var(--color-success,#16a34a)">'+nA+'</strong>' : String(nA);
  var scoreCellB = nB>nA ? '<strong style="color:var(--color-success,#16a34a)">'+nB+'</strong>' : String(nB);
  var scoreWinTxt = nA>nB
    ? '<strong style="color:var(--color-success,#16a34a)">'+sA+' vence</strong>'
    : nB>nA
    ? '<strong style="color:var(--color-success,#16a34a)">'+sB+' vence</strong>'
    : '<span style="color:var(--gray-500)">Empate ('+nA+'×'+nB+')</span>';

  var placarRow =
    '<tr style="background:#f9fafb;border-top:2px solid var(--gray-200)">'+
    '<td><strong>PLACAR FINAL</strong></td>'+
    '<td style="text-align:right;font-size:15px">'+scoreCellA+' de '+total6+'</td>'+
    '<td style="text-align:right;font-size:15px">'+scoreCellB+' de '+total6+'</td>'+
    '<td>'+scoreWinTxt+'</td></tr>';

  var perfHtml =
    '<h4 style="font-size:12px;font-weight:700;color:var(--gray-600);text-transform:uppercase;margin:0 0 8px">Indicadores de desempenho</h4>'+
    '<div style="overflow-x:auto;margin-bottom:16px"><table class="data-table">'+
    '<thead><tr>'+
    '<th style="text-align:left;min-width:180px">Indicador</th>'+
    '<th style="text-align:right">'+sA+'</th>'+
    '<th style="text-align:right">'+sB+'</th>'+
    '<th style="text-align:left;min-width:120px">Vencedor</th>'+
    '</tr></thead>'+
    '<tbody>'+indRows+placarRow+'</tbody>'+
    '</table></div>';

  // ── Resumo automático ─────────────────────────────────────────────────────
  var cpDiffTxt = "";
  if (cpA!=null&&cpB!=null&&cpB>0) {
    var cpDiff = (cpA-cpB)/Math.abs(cpB)*100;
    var cpAbs  = Math.abs(cpDiff).toFixed(1).replace(".",",");
    if (Math.abs(cpDiff)<2) cpDiffTxt = "tem custo por aluno <strong>similar</strong> ao de "+sB;
    else if (cpDiff<0)      cpDiffTxt = "tem custo por aluno <strong>"+cpAbs+"% menor</strong> que "+sB;
    else                    cpDiffTxt = "tem custo por aluno <strong>"+cpAbs+"% maior</strong> que "+sB;
  } else {
    cpDiffTxt = "não tem dados de custo por aluno disponíveis para comparação com "+sB;
  }

  var summaryTxt;
  if (nA===3&&nB===3) {
    summaryTxt = "As duas IES apresentam <strong>desempenho equivalente no placar geral (3 × 3)</strong>. "+
      "<strong>"+sA+"</strong> "+cpDiffTxt+". Os indicadores divergem individualmente, sem vantagem clara para nenhuma das partes.";
  } else {
    var conj = (cpA!=null&&cpB!=null&&cpA<cpB) ? "Apesar disso, " : "Além disso, ";
    var vantagem;
    if      (nA===total6) vantagem = "supera "+sB+" em <strong>todos os "+total6+" indicadores</strong> avaliados";
    else if (nA===0)      vantagem = "não supera "+sB+" em <strong>nenhum dos "+total6+" indicadores</strong> avaliados";
    else                  vantagem = conj+"supera "+sB+" em <strong>"+nA+" de "+total6+" indicadores</strong>: "+winNamesA.join(", ");
    var desvantagem = winNamesB.length
      ? " "+sB+" leva vantagem em: "+winNamesB.join(", ")+"."
      : "";
    summaryTxt = "<strong>"+sA+"</strong> "+cpDiffTxt+". "+vantagem+"."+desvantagem;
  }

  var summary =
    '<div style="padding:12px 14px;border:1px solid var(--gray-200);border-radius:10px;background:#f8fafd">'+
    '<p style="font-size:13px;line-height:1.6;margin:0">'+summaryTxt+'</p></div>';

  return ctxHtml+perfHtml+summary;
}

function renderComparadorDireto(c) {
  var rows = efficiencyRows(c);
  _cdRows = rows;
  var sA = state.comparadorDiretoA, sB = state.comparadorDiretoB;
  if (!rows.find(function(u){return u.sigla===sA;})) { sA="UEL"; state.comparadorDiretoA=sA; }
  if (!rows.find(function(u){return u.sigla===sB;})) { sB="UEM"; state.comparadorDiretoB=sB; }

  function makeOpts(selected) {
    return rows.map(function(u){
      return '<option value="'+u.sigla+'"'+(u.sigla===selected?' selected':'')+'>'+u.sigla+' — '+u.nome+'</option>';
    }).join("");
  }

  var inner = (sA!==sB)
    ? _buildCDInner(rows,sA,sB)
    : '<p class="card-subtitle" style="color:var(--orange-600);padding:12px 0">Selecione IES diferentes para comparar.</p>';

  return '<article class="visual-card">'+
    '<div class="visual-card-header"><div>'+
    '<h3>Comparador Direto entre Duas IES</h3>'+
    '<p class="card-subtitle">Selecione as IES para comparar lado a lado em cada indicador.</p>'+
    '</div></div>'+
    '<div style="display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:12px 0 16px">'+
    '<select class="filter-select" onchange="setComparadorDireto(\'A\',this.value)">'+makeOpts(sA)+'</select>'+
    '<span style="font-weight:700;color:var(--gray-400)">vs</span>'+
    '<select class="filter-select" onchange="setComparadorDireto(\'B\',this.value)">'+makeOpts(sB)+'</select>'+
    '<button class="filter-btn active" type="button" onclick="runComparadorDireto()">Comparar</button>'+
    '</div>'+
    '<div id="comparadorDiretoInner">'+inner+'</div>'+
    '</article>';
}
// ── fim Comparador Direto ─────────────────────────────────────────────────────

function renderPilotConclusion(rows) {
  if (!rows.length) return "";
  const cpsList = rows.map(costPerStudent).filter(isValidNumber);
  const apiList = rows.map(academicPerformanceIndex).filter(isValidNumber);
  const r = cpsList.length >= 3 && apiList.length >= 3 ? pearsonCorrelation(cpsList, apiList) : null;
  const strength = classifyCorrelation(r);
  const pairs = lowerBudgetOutperformance(rows);
  const nLower = new Set(pairs.map(p => p.low.id)).size;
  const direction = r != null && r < 0 ? "inversa (maior custo não está associado a maior desempenho)" : r != null ? "positiva" : "não calculável";
  let text = "";
  if (r == null) {
    text = "Os dados disponíveis no recorte selecionado são insuficientes para calcular correlação entre orçamento e desempenho. Amplie o recorte para obter uma conclusão mais robusta.";
  } else if (strength === "fraca") {
    text = `Os dados indicam que maior orçamento não se traduz automaticamente em melhor desempenho acadêmico. A correlação entre custo por aluno e desempenho é <strong>fraca</strong> e de direção ${direction}.${nLower > 0 ? ` No recorte selecionado, ${nLower} IEES com menor custo por aluno superam instituições mais caras em mais da metade dos indicadores avaliados.` : ""} Os dados sugerem que eficiência na aplicação dos recursos pode ser mais determinante do que o volume absoluto do orçamento.`;
  } else if (strength === "moderada") {
    text = `Os dados sugerem associação ${direction} e de intensidade <strong>moderada</strong> entre orçamento e desempenho acadêmico. Há diferenças relevantes de eficiência entre as IEES: algumas instituições entregam desempenho superior com menor custo por aluno. Há indícios de que fatores além do orçamento influenciam os resultados acadêmicos.`;
  } else {
    text = `Os dados indicam associação ${direction} e de intensidade <strong>forte</strong> entre custo por aluno e desempenho no recorte selecionado. Isso não implica causalidade direta — outros fatores estruturais devem ser considerados na interpretação.`;
  }
  return `<div class="pilot-conclusion-card">
    <p class="pilot-conclusion-title">Conclusão preliminar do piloto</p>
    <p class="pilot-conclusion-text">${text}</p>
  </div>
  <div class="pilot-methodological-note">
    <strong>Nota metodológica:</strong> Esta análise busca avaliar associação entre orçamento e desempenho acadêmico, sem inferir causalidade. Os indicadores de desempenho são normalizados para permitir comparação entre IEES de diferentes portes. Indicadores de contexto são utilizados como apoio interpretativo.
  </div>`;
}

// ── fim PILOTO: renderização ─────────────────────────────────────────────────

function performanceRelativeBlock(title, c) {
  if (title.includes("Resposta ao Piloto")) {
    const rows = efficiencyRows(c);
    return `
      <div class="pilot-answer-section">
        <h3 class="pilot-answer-question">Orçamento maior gera melhor desempenho?</h3>
        <p class="pilot-answer-subtitle">Análise da relação entre esforço orçamentário, custo por aluno e desempenho acadêmico das IEES no recorte selecionado.</p>
        ${renderPilotAnswer(rows)}
      </div>
      ${renderPilotEvidenceCards(rows)}
      <article class="visual-card">
        <div class="visual-card-header">
          <div>
            <h3>Matriz gasto × desempenho</h3>
            <p class="card-subtitle">Posicionamento das IEES segundo custo por aluno e índice de desempenho acadêmico. Quadrantes indisponíveis na planilha.</p>
          </div>
        </div>
        ${renderBudgetPerformanceScatter(rows)}
      </article>
      <div class="table-wrap mt-14">
        <h3>Ranking de eficiência acadêmico-orçamentária</h3>
        <p class="card-subtitle">Ordenado pelo índice de eficiência = desempenho relativo / custo relativo.</p>
        <p class="card-subtitle" style="margin-top:2px;font-size:11px;color:var(--gray-500)">
          ⓘ Custo/aluno calculado sobre <strong>matrículas ativas</strong> (QT_MAT · INEP/Censo da Educação Superior) — não sobre vagas ofertadas.
        </p>
        <div class="ranking-note">
          <p><strong>Como ler esta tabela:</strong></p>
          <ul>
            <li><strong>Custo/Aluno:</strong> orçamento liquidado da IES no ano (R$) dividido pelo total de matrículas de graduação presencial — reflete o investimento médio por estudante efetivamente matriculado (fontes: Relatório da Despesa 8050 · Base SEFA-PR; matrículas QT_MAT · INEP/Censo da Educação Superior).</li>
            <li><strong>Índice de Desempenho:</strong> pontuação sintética de resultado acadêmico, calculada como média ponderada: ocupação de vagas (15%) + taxa de concluintes (15%) + permanência — 100 menos evasão — (12%) + docentes com doutorado (14%) + captação CNPq normalizada entre 900 e 1.900 (12%) + conceito CAPES normalizado entre 3,2 e 5 (10%) + taxa de inserção profissional (12%) + salário dos egressos normalizado entre R$&nbsp;4.500 e R$&nbsp;6.500 (10%). Reúne indicadores de oferta, permanência, qualificação docente, pesquisa e inserção profissional.</li>
            <li><strong>Índice de Eficiência:</strong> razão entre o desempenho relativo e o custo relativo da IES em relação à média do grupo — <em>(desempenho IES ÷ média grupo) ÷ (custo IES ÷ média grupo)</em>. Valor acima de 1,0 indica que a IES entrega resultado acima da média com custo igual ou inferior; valor abaixo de 1,0 indica o oposto.</li>
            <li><strong>Classificação:</strong>
              <ul>
                <li><em>Alta eficiência</em> — Índice de Eficiência &gt; 1,10 (desempenho claramente acima do esperado dado o custo).</li>
                <li><em>Eficiência proporcional</em> — Índice entre 0,90 e 1,10 (desempenho compatível com o investimento realizado).</li>
                <li><em>Baixa eficiência</em> — Índice &lt; 0,90 (desempenho abaixo do esperado para o nível de custo).</li>
              </ul>
            </li>
          </ul>
        </div>
        ${renderEfficiencyRankingTable(rows)}
      </div>
      ${renderComparadorDireto(c)}
      ${renderPilotConclusion(rows)}
    `;
  }
  if (title.includes("Perfil da movimentação")) return budgetMovementBlock(c);
  if (title.includes("Composição")) return budgetCompositionBlock(c);
  if (title.includes("desempenho acadêmico")) return budgetAcademicBlock(c);
  if (title.includes("corpo docente")) return budgetFacultyBlock(c);
  if (title.includes("Matriz de oportunidades") || title.includes("alertas")) return budgetOpportunityBlock(c);
  return null;
}
window.performanceRelativeBlock = performanceRelativeBlock;

function efficiencyBlock(title, c) {
  var handled = performanceRelativeBlock(title, c);
  if (handled != null) return handled;
  if (typeof window.budget8050Block === "function") {
    handled = window.budget8050Block(title, c);
    if (handled != null) return handled;
  }
  if (typeof window.budgetPerformanceScatterBlock === "function") {
    handled = window.budgetPerformanceScatterBlock(title, c);
    if (handled != null) return handled;
  }
  return budgetOpportunityBlock(c);
}

function performanceBlock(title, c) {
  var handled = performanceRelativeBlock(title, c);
  if (handled != null) return handled;
  if (typeof window.budgetPerformanceScatterBlock === "function") {
    handled = window.budgetPerformanceScatterBlock(title, c);
    if (handled != null) return handled;
  }
  return efficiencyBlock(title, c);
}

function efficiencyRows(c) {
  const base = clusterRowsFor(c);
  const rows = base.length ? base : c.all;
  if (!c.display || !c.display.length) return rows;
  const ids = new Set(c.display.map(u => u.id));
  const filtered = rows.filter(u => ids.has(u.id));
  return filtered.length ? filtered : rows;
}

function efficiencyChartRows(c) {
  const rows = c.base.length ? c.base : c.all;
  if (!c.display || !c.display.length || c.display.length === rows.length) return rows;
  const ids = new Set(c.display.map(u => u.id));
  const filtered = rows.filter(u => ids.has(u.id));
  return filtered.length ? filtered : rows;
}

function estimatedFaculty(u) {
  return Math.max(80, Math.round(u.students / 15));
}

function budgetMetrics(u) {
  const liquidated = u.budget;
  const liquidationRate = clamp(u.liquidation, 70, 99.5);
  const committed = liquidated / Math.max(liquidationRate / 100, 0.01);
  const executionRate = clamp(u.execution, 65, 99.5);
  const updatedBudget = committed / Math.max(executionRate / 100, 0.01);
  // Usa o valor real de variação da dotação quando disponível; o teto antigo de
  // 28% saturava todas as IES (valores reais 34–77%) e congelava o card
  // "Variação da Dotação" independentemente do filtro aplicado.
  const variationRate = u.var_dotacao_loa != null
    ? Number(u.var_dotacao_loa)
    : clamp(u.supplementation, -10, 150);
  const initialBudget = updatedBudget / Math.max(1 + variationRate / 100, 0.72);
  const paymentRate = clamp(88 + (u.execution - 88) * 0.35 + (u.liquidation - 88) * 0.18, 78, 99.2);
  const paid = liquidated * paymentRate / 100;
  const contingencyRate = clamp(3.2 + (94 - u.execution) * 0.42 + u.supplementation * 0.12, 1.5, 18);
  const contingency = updatedBudget * contingencyRate / 100;
  const availableBudget = Math.max(updatedBudget - contingency, 1);
  const notExecuted = Math.max(availableBudget - liquidated, 0);
  const execInitial   = liquidated / Math.max(initialBudget,   1) * 100;
  const execAvailable = liquidated / Math.max(availableBudget, 1) * 100;
  const execUpdated   = liquidated / Math.max(updatedBudget,   1) * 100;
  const personnel = clamp(u.personnel, 58, 92);
  const odc       = clamp(13 + (100 - personnel) * 0.42 + u.supplementation * 0.08, 8, 30);
  const investment = clamp(100 - personnel - odc, 2, 25);
  const freeResources = clamp(100 - u.supplementation - u.cnpq * 0.45, 60, 96);
  const ownResources  = clamp(4 + u.cnpq * 0.55 + u.pgTop * 0.12, 4, 24);
  const transfers     = clamp(100 - freeResources - ownResources, 1, 30);
  const currentCapitalRatio = (personnel + odc) / Math.max(investment, 1);
  const works     = clamp(investment * 0.45 + u.territory * 0.02, 0.8, 12);
  const equipment = clamp(investment * 0.55 + u.doctors * 0.01, 0.8, 12);
  const equivalentStudents = Math.max(u.students * 0.82 + u.graduates * 1.7 + u.entrants * 0.42, 1);
  const costEquivalentStudent = liquidated * 1000000 / equivalentStudents;
  return { liquidated, committed, updatedBudget, initialBudget, paymentRate, paid, liquidationRate, executionRate, variationRate, contingencyRate, contingency, availableBudget, notExecuted, execInitial, execAvailable, execUpdated, personnel, odc, investment, freeResources, ownResources, transfers, currentCapitalRatio, works, equipment, costEquivalentStudent };
}

function budgetAgg(rows) {
  const safeRows = rows.length ? rows : universities;
  const liquidated = sum(safeRows, u => budgetMetrics(u).liquidated);
  const updatedBudget = sum(safeRows, u => budgetMetrics(u).updatedBudget);
  const initialBudget = sum(safeRows, u => budgetMetrics(u).initialBudget);
  const committed = sum(safeRows, u => budgetMetrics(u).committed);
  const paid = sum(safeRows, u => budgetMetrics(u).paid);
  const contingency = sum(safeRows, u => budgetMetrics(u).contingency);
  const availableBudget = sum(safeRows, u => budgetMetrics(u).availableBudget);
  return {
    liquidated,
    updatedBudget,
    initialBudget,
    committed,
    paid,
    contingency,
    availableBudget,
    executionRate: committed / Math.max(updatedBudget, 1) * 100,
    liquidationRate: liquidated / Math.max(committed, 1) * 100,
    paymentRate: paid / Math.max(liquidated, 1) * 100,
    variationRate: (updatedBudget - initialBudget) / Math.max(initialBudget, 1) * 100,
    contingencyRate: contingency / Math.max(updatedBudget, 1) * 100,
    execInitial: liquidated / Math.max(initialBudget, 1) * 100,
    execAvailable: liquidated / Math.max(availableBudget, 1) * 100,
    execUpdated: liquidated / Math.max(updatedBudget, 1) * 100,
    personnel: wavg(safeRows, u => budgetMetrics(u).personnel, u => budgetMetrics(u).liquidated),
    odc: wavg(safeRows, u => budgetMetrics(u).odc, u => budgetMetrics(u).liquidated),
    investment: wavg(safeRows, u => budgetMetrics(u).investment, u => budgetMetrics(u).liquidated),
    freeResources: wavg(safeRows, u => budgetMetrics(u).freeResources, u => budgetMetrics(u).liquidated),
    ownResources: wavg(safeRows, u => budgetMetrics(u).ownResources, u => budgetMetrics(u).liquidated),
    transfers: wavg(safeRows, u => budgetMetrics(u).transfers, u => budgetMetrics(u).liquidated)
  };
}

function budgetBadge(value, good, warn) {
  return value >= good ? "adequado" : value >= warn ? "atenção" : "crítico";
}

function budgetProfileClass(profile) {
  const text = String(profile || "").toLowerCase();
  if (text.includes("expansivo") || text.includes("autônomo")) return "profile-expansive";
  if (text.includes("restritivo")) return "profile-restrictive";
  return "profile-moderate";
}

function efficiencyProfileLabel(rows, c) {
  if (explicitClusterActive(c) && c.f.groupBy === "v6") return c.f.groupLevel;
  const counts = rows.reduce((acc, u) => {
    const label = u.groups.v6 || null;
    acc[label] = (acc[label] || 0) + 1;
    return acc;
  }, {});
  return Object.entries(counts).sort((a, b) => b[1] - a[1])[0]?.[0] || "Perfil Moderado-Expansivo";
}

function budgetMovementBlock(c) {
  let rows = efficiencyRows(c);
  const localBud = getLocalFilter("budgetMovement");
  if (localBud !== "all") { const f = rows.filter(u => u.groups[c.f.groupBy] === localBud); if (f.length) rows = f; }
  const a = budgetAgg(rows);
  return `<div class="qchip-strip-wrapper">${quartilChipStrip("budgetMovement", "v6", c.base, c)}</div>
  <div class="score-grid budget-movement-grid">
    ${budgetScoreCard("Orçamento liquidado total", formatCurrencyMillions(a.liquidated), "soma do cluster")}
    ${budgetScoreCard(indicatorName(81), formatPercent(a.executionRate), "empenhado / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(82), formatPercent(a.liquidationRate), "liquidado / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(83), formatPercent(a.paymentRate), "pago / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(84), formatPercent(a.contingencyRate), "contingenciado / atualizado")}
    ${budgetScoreCard(indicatorName(85), formatPercent(a.variationRate), "LOA vs. atualizado")}
    ${budgetScoreCard(indicatorName(95), formatPercent(a.execInitial), "liquidado / dotação inicial")}
    ${budgetScoreCard(indicatorName(96), formatPercent(a.execAvailable), "liquidado / orçamento disponível")}
    ${budgetScoreCard(indicatorName(97), formatPercent(a.execUpdated), "liquidado / orçamento atualizado")}
  </div>
  <article class="visual-card mt-14"><h3>${indicatorName(81)} por IEES</h3><p class="card-subtitle">V6 é a referência natural. Verde acima de 90%; amarelo entre 80% e 90%; vermelho abaixo de 80%.</p>${budgetExecutionBars(c)}</article>`;
}

function budgetScoreCard(title, value, subtitle) {
  return `<article class="score-card budget-score-card"><h3>${title}</h3><p class="card-subtitle">${subtitle}</p><div class="score-value">${value}</div></article>`;
}

function budgetExecutionBars(c) {
  const clusterRows = chartRowsByLocal(c, "budgetMovementBlock", efficiencyRows(c));
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = efficiencyChartRows(c);
  const ref = mean(clusterRows, u => budgetMetrics(u).executionRate);
  return `<div class="bars budget-execution-bars" style="--ref-pos:${clamp(ref, 0, 100)}%">${[...rows].sort((a, b) => budgetMetrics(b).executionRate - budgetMetrics(a).executionRate).map(u => {
    const m = budgetMetrics(u);
    const tone = m.executionRate > 90 ? "rate-high" : m.executionRate >= 80 ? "rate-mid" : "rate-low";
    return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone}" style="width:${clamp(m.executionRate, 4, 100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${formatPercent(m.executionRate)}</span></div>`;
  }).join("")}</div><div class="bars-reference-note"><span>Média do cluster: <strong>${formatPercent(ref)}</strong></span></div>`;
}

function budgetCompositionBlock(c) {
  return `<div class="chart-grid">
    <article class="visual-card"><h3>Composição da despesa por IEES</h3><p class="card-subtitle">${indicatorName(86)}, ${indicatorName(87)} e investimento residual.</p>${budgetStackedBars(c, "expense")}</article>
    <article class="visual-card"><h3>Origem dos recursos por IEES</h3><p class="card-subtitle">${indicatorName(89)}, ${indicatorName(90)} e ${indicatorName(91)}.</p>${budgetStackedBars(c, "source")}</article>
  </div>
  <article class="visual-card mt-14"><h3>Movimentação orçamentária: da dotação inicial ao liquidado</h3><p class="card-subtitle">Dotação inicial, alterações, contingenciamento, orçamento disponível, empenhado, liquidado e pago.</p>${budgetWaterfall(c)}</article>
  ${metricTable(efficiencyRows(c), [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups.v6}</span>`], [indicatorName(86), u => formatPercent(budgetMetrics(u).personnel)], [indicatorName(87), u => formatPercent(budgetMetrics(u).odc)], [indicatorName(88), u => budgetMetrics(u).currentCapitalRatio.toFixed(1).replace(".", ",")], [indicatorName(89), u => formatPercent(budgetMetrics(u).freeResources)], [indicatorName(90), u => formatPercent(budgetMetrics(u).ownResources)], [indicatorName(91), u => formatPercent(budgetMetrics(u).transfers)], [indicatorName(92), u => formatPercent(budgetMetrics(u).works)], [indicatorName(93), u => formatPercent(budgetMetrics(u).equipment)]], "Composição por tipo de crédito, origem e despesa")}`;
}

function budgetStackedBars(c, type) {
  const rows = efficiencyRows(c);
  const avg = budgetAgg(rows);
  const avgValues = type === "expense" ? [avg.personnel, avg.odc, avg.investment] : [avg.freeResources, avg.ownResources, avg.transfers];
  const labels = type === "expense" ? ["Pessoal", "Despesas Correntes", "Investimento"] : ["Recursos livres", "Recursos próprios", "Transferências"];
  const segLabel = (v, label) => v >= 5 ? `<span class="seg-label">${Math.round(v)}%</span>` : "";
  return `<div class="budget-stack-reference"><strong>Composição média do cluster</strong><div class="budget-stack-track">${avgValues.map((v, i) => `<span class="budget-seg seg-${i} has-tip" style="width:${clamp(v, 0, 100)}%" data-tip="${labels[i]}: ${formatPercent(v)}">${segLabel(v, labels[i])}</span>`).join("")}</div></div><div class="budget-stacked-list">${rows.map(u => {
    const m = budgetMetrics(u);
    const values = type === "expense" ? [m.personnel, m.odc, m.investment] : [m.freeResources, m.ownResources, m.transfers];
    return `<div class="budget-stack-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="stack-name">${u.sigla}</span><div class="budget-stack-track">${values.map((v, i) => `<span class="budget-seg seg-${i} has-tip" style="width:${clamp(v, 0, 100)}%" data-tip="${labels[i]}: ${formatPercent(v)} · ${formatCurrencyMillions(m.liquidated * v / 100)}">${segLabel(v, labels[i])}</span>`).join("")}</div><span class="stack-value">${formatPercent(values[0])}</span></div>`;
  }).join("")}</div><div class="stack-legend">${labels.map((label, i) => `<span><i class="budget-dot seg-${i}"></i>${label}</span>`).join("")}</div>`;
}

function budgetWaterfall(c) {
  const u = c.selected || efficiencyRows(c)[0];
  const m = budgetMetrics(u);
  const reductions = Math.max(m.initialBudget * 0.025 + m.updatedBudget * 0.01, 8);
  const remaps = Math.max(m.initialBudget * 0.018 + u.territory * 0.06, 5);
  const steps = [
    ["Dotação inicial",      m.initialBudget,   "base"],
    ["Suplementações",       m.updatedBudget - m.initialBudget + reductions - remaps, "positive"],
    ["Reduções",             -reductions,        "negative"],
    ["Remanejamentos",       remaps,             "positive"],
    ["Orçamento atualizado", m.updatedBudget,    "total"],
    ["Contingenciamento",    -m.contingency,     "negative"],
    ["Orçamento disponível", m.availableBudget,  "total"],
    ["Empenhado",            m.committed,        "total"],
    ["Liquidado",            m.liquidated,       "total"],
    ["Pago",                 m.paid,             "total"]
  ];
  const maxAbs = Math.max(...steps.map(s => Math.abs(s[1])), 1);
  return `<div class="budget-waterfall"><div class="waterfall-title"><strong>${u.sigla}</strong><span>${indicatorName(85)} ${formatPercent(m.variationRate)} · ${indicatorName(84)} ${formatPercent(m.contingencyRate)} · ${indicatorName(97)} ${formatPercent(m.execUpdated)}</span></div><div class="waterfall-bars">${steps.map(([label, value, type]) => `<div class="waterfall-step ${type}"><span class="waterfall-label">${label}</span><div class="waterfall-track"><span class="has-tip" style="width:${clamp(Math.abs(value) / maxAbs * 100, 6, 100)}%" data-tip="${label}: ${formatCurrencyMillions(Math.abs(value))}"></span></div><strong>${formatCurrencyMillions(Math.abs(value))}</strong></div>`).join("")}</div></div>`;
}

// ── Scatter com dados reais (byYear) para seções 3 e 4 da aba 9 ─────────────
function renderPerformanceCrossScatter(rows, getY, fmtY, yLabel) {
  const validRows = rows.filter(u => isValidNumber(costPerStudent(u)) && isValidNumber(getY(u)));
  if (!validRows.length) return '<p class="card-subtitle">Dados insuficientes para o recorte selecionado.</p>';
  const maxX   = Math.max(...validRows.map(u => costPerStudent(u)));
  const maxY   = Math.max(...validRows.map(u => getY(u)));
  const avgX   = validRows.reduce((s, u) => s + costPerStudent(u), 0) / validRows.length;
  const avgY   = validRows.reduce((s, u) => s + getY(u), 0) / validRows.length;
  const avgXPct = clamp(avgX / maxX * 100, 10, 90).toFixed(1);
  const avgYPct = clamp(avgY / maxY * 100, 10, 90).toFixed(1);
  const avgXR   = (100 - parseFloat(avgXPct)).toFixed(1);
  const avgYT   = (100 - parseFloat(avgYPct)).toFixed(1);
  const points = validRows.map(u => {
    const xPct = clamp(costPerStudent(u) / maxX * 100, 5, 92).toFixed(1);
    const yPct = clamp(getY(u) / maxY * 100, 5, 92).toFixed(1);
    const col = _SCATTER_IES_COLORS[u.sigla] || '#4A6FA5';
    return `<button class="pilot-scatter-point" type="button"
      style="left:${xPct}%;bottom:${yPct}%;background:${col};border-color:${col}cc"
      title="${u.sigla}: custo/aluno ${formatCurrency(costPerStudent(u))} · ${yLabel}: ${fmtY(getY(u))}">${u.sigla}</button>`;
  }).join('');
  const quadBg = `
    <div style="position:absolute;left:0;right:${avgXR}%;bottom:${avgYPct}%;top:0;background:rgba(34,197,94,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:${avgXPct}%;right:0;bottom:${avgYPct}%;top:0;background:rgba(234,179,8,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:0;right:${avgXR}%;top:${avgYT}%;bottom:0;background:rgba(148,163,184,0.07);pointer-events:none;z-index:0"></div>
    <div style="position:absolute;left:${avgXPct}%;right:0;top:${avgYT}%;bottom:0;background:rgba(239,68,68,0.07);pointer-events:none;z-index:0"></div>`;
  return `<div class="pilot-scatter">
    ${quadBg}
    <span class="scatter-ref-v" style="left:${avgXPct}%"></span>
    <span class="scatter-ref-h" style="bottom:${avgYPct}%;top:auto"></span>
    <span class="scatter-q-label q1" style="color:#16a34a;opacity:0.6">Eficiente</span>
    <span class="scatter-q-label q2" style="color:#ca8a04;opacity:0.6">Alto investimento</span>
    <span class="scatter-q-label q3" style="color:#64748b;opacity:0.6">Atenção</span>
    <span class="scatter-q-label q4" style="color:#dc2626;opacity:0.6">Ineficiente</span>
    ${points}
    <span class="scatter-axis-label x">Custo por aluno →</span>
    <span class="scatter-axis-label y">↑ ${yLabel}</span>
  </div>
  <p class="card-subtitle" style="margin-top:4px">Média custo: ${formatCurrency(avgX)}/aluno · Média ${yLabel}: ${fmtY(avgY)}</p>`;
}

function budgetAcademicBlock(c) {
  const rows = efficiencyRows(c);
  const chart1 = renderPerformanceCrossScatter(rows, u => u.completion, formatPercent, "Conclusão");
  const chart2 = renderPerformanceCrossScatter(rows, u => u.occupancy, formatPercent, "Ocupação de vagas");
  const src1 = `<p class="chart-source" style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:6px;">
    <strong>Eixo X:</strong> Orçamento liquidado (Relatório da Despesa 8050 — SETI/SEFA) ÷ Matrículas ativas (INEP, Censo da Educação Superior) ·
    <strong>Eixo Y:</strong> Concluintes ÷ Matrículas × 100 (INEP, Censo da Educação Superior — Base Cursos - Brasil.xlsx / QT_CONC ÷ QT_MAT)
  </p>`;
  const src2 = `<p class="chart-source" style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:6px;">
    <strong>Eixo X:</strong> mesmo cálculo acima ·
    <strong>Eixo Y:</strong> Ingressantes ÷ Vagas ofertadas × 100 (INEP, Censo da Educação Superior — Base Cursos - Brasil.xlsx / QT_ING ÷ QT_VG_TOTAL)
  </p>`;
  return `<div class="chart-grid budget-relative-grid">
    <article class="visual-card"><h3>Custo por aluno × Taxa de conclusão</h3><p class="card-subtitle">Eixo X: custo real (R$/aluno) · Eixo Y: % concluintes sobre matrículas.</p>${chart1}${src1}</article>
    <article class="visual-card"><h3>Custo por aluno × Taxa de ocupação de vagas</h3><p class="card-subtitle">Eixo X: custo real (R$/aluno) · Eixo Y: % ingressantes sobre vagas ofertadas.</p>${chart2}${src2}</article>
  </div>`;
}

function budgetFacultyBlock(c) {
  const rows = efficiencyRows(c);
  const getCresPartic  = u => facultyMetrics(u).cresParticipation;
  const getCnpqTeacher = u => {
    const occ = facultyMetrics(u).occupied || estimatedFaculty(u);
    return u.cnpq * 1e6 / Math.max(occ, 1);
  };
  const chart1 = renderPerformanceCrossScatter(rows, getCresPartic, formatPercent, "Participação CRES");
  const chart2 = renderPerformanceCrossScatter(rows, getCnpqTeacher, formatCurrency, "CNPq/docente");
  const src1 = `<p class="chart-source" style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:6px;">
    <strong>Eixo X:</strong> mesmo cálculo acima ·
    <strong>Eixo Y:</strong> Participação da CRES no esforço docente total (%) (SETI — Base Docentes - Paraná.xlsx / Base_Docentes_PR / col. 33)
  </p>`;
  const src2 = `<p class="chart-source" style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:6px;">
    <strong>Eixo X:</strong> mesmo cálculo acima ·
    <strong>Eixo Y:</strong> Captação CNPq por docente estimado (CNPq / Dados Abertos — Base CNPq - Brasil.xlsx ÷ vagas docentes ocupadas — SETI, Base Docentes - Paraná.xlsx)
  </p>`;
  return `<div class="chart-grid budget-relative-grid">
    <article class="visual-card"><h3>Custo por aluno × ${indicatorName(59)}</h3><p class="card-subtitle">Eixo X: custo real (R$/aluno) · Eixo Y: % CRES no esforço docente total.</p>${chart1}${src1}</article>
    <article class="visual-card"><h3>Custo por aluno × ${indicatorName(60)} por docente</h3><p class="card-subtitle">Eixo X: custo real (R$/aluno) · Eixo Y: captação CNPq normalizada por docente.</p>${chart2}${src2}</article>
  </div>`;
}

function budgetResultSelector(label) {
  return `<div class="budget-result-selector"><label for="efficiencyResultSelector">${label}</label><select id="efficiencyResultSelector" onchange="setEfficiencyResult(this.value)">${Object.entries(budgetResultOptions).map(([key, opt]) => `<option value="${key}" ${state.efficiencyResult === key ? "selected" : ""}>${opt.label}</option>`).join("")}</select></div>`;
}

function budgetRelativeRows(c, resultOption) {
  const rows = efficiencyRows(c);
  const costAvg = mean(rows, u => budgetMetrics(u).costEquivalentStudent) || 1;
  const resultAvg = mean(rows, resultOption.get) || 1;
  return rows.map(u => {
    const m = budgetMetrics(u);
    const costDelta = (m.costEquivalentStudent - costAvg) / costAvg * 100;
    const resultDelta = (resultOption.get(u) - resultAvg) / resultAvg * 100;
    return { u, m, costDelta, resultDelta, resultValue: resultOption.get(u), resultAvg, costAvg, profile: u.groups.v6 };
  });
}

function budgetQuadrant(row) {
  if (!hasOfficialQuadrants()) return quadrantUnavailable();
  if (row.costDelta <= 0 && row.resultDelta >= 0) return { code: "q1", label: "Gasto abaixo da média, resultado acima",  tone: "high" };
  if (row.costDelta > 0 && row.resultDelta >= 0) return { code: "q2", label: "Gasto acima da média, resultado acima",   tone: "info" };
  if (row.costDelta <= 0 && row.resultDelta < 0) return { code: "q3", label: "Gasto abaixo da média, resultado abaixo", tone: "warn" };
  return { code: "q4", label: "Gasto acima da média, resultado abaixo",                                                  tone: "danger" };
}

function classificaQuadrante(custoRel, resultadoRel) {
  if (custoRel === null || resultadoRel === null) return { label: "Sem dados",                              color: "#94a3b8" };
  if (custoRel < 0 && resultadoRel > 0) return { label: "Gasto abaixo da média, resultado acima",         color: "#16a34a" };
  if (custoRel > 0 && resultadoRel > 0) return { label: "Gasto acima da média, resultado acima",          color: "#ca8a04" };
  if (custoRel < 0 && resultadoRel < 0) return { label: "Gasto abaixo da média, resultado abaixo",        color: "#64748b" };
  if (custoRel > 0 && resultadoRel < 0) return { label: "Gasto acima da média, resultado abaixo",         color: "#dc2626" };
  return { label: "Na média do cluster",                                                                    color: "#64748b" };
}

function budgetRelativeScatter(c, resultOption) {
  if (!hasOfficialQuadrants()) return quadrantUnavailableBlock();
  const rows = budgetRelativeRows(c, resultOption);
  const maxBudget = Math.max(...rows.map(r => r.m.liquidated), 1);
  return `<div class="budget-relative-scatter"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span><div class="budget-q q1">Gasto abaixo da média, resultado acima</div><div class="budget-q q2">Gasto acima da média, resultado acima</div><div class="budget-q q3">Gasto abaixo da média, resultado abaixo</div><div class="budget-q q4">Gasto acima da média, resultado abaixo</div>${rows.map(row => {
    const quad = budgetQuadrant(row);
    const size = clamp(28 + row.m.liquidated / maxBudget * 26, 28, 56);
    return `<button class="budget-point ${quad.code} ${budgetProfileClass(row.profile)} ${isUniSelected(c.f, row.u.id) ? "selected" : ""}" style="left:${clamp(50 + row.costDelta, 6, 94)}%;bottom:${clamp(50 + row.resultDelta, 6, 94)}%;width:${size}px;height:${size}px" type="button" title="${row.u.sigla}: custo relativo ${row.costDelta.toFixed(1).replace(".", ",")}% · resultado relativo ${row.resultDelta.toFixed(1).replace(".", ",")}% · ${quad.label}">${row.u.sigla}</button>`;
  }).join("")}<span class="axis-caption x">Custo relativo ao cluster</span><span class="axis-caption y">Resultado relativo ao cluster</span></div>`;
}

function budgetOpportunityBlock(c) {
  const rows = efficiencyRows(c);
  if (!rows.length) return '<p class="card-subtitle">Sem dados para o recorte selecionado.</p>';

  const bpsValid       = rows.filter(u => isValidNumber(costPerStudent(u)));
  const completValid   = rows.filter(u => isValidNumber(u.completion));
  const avgBPS         = bpsValid.length     ? bpsValid.reduce((s, u) => s + costPerStudent(u), 0) / bpsValid.length   : 0;
  const avgCompletion  = completValid.length ? completValid.reduce((s, u) => s + u.completion, 0)  / completValid.length : 0;

  // mediana de cnpq (R$ mi) por aluno para o grupo
  const cnpqRatios = rows
    .filter(u => isValidNumber(u.cnpq) && isValidNumber(u.students) && u.students > 0)
    .map(u => u.cnpq / u.students)
    .sort((a, b) => a - b);
  const medCnpqRatio = cnpqRatios.length ? cnpqRatios[Math.floor(cnpqRatios.length / 2)] : 0;

  const alerts = [];
  rows.forEach(u => {
    const bps = costPerStudent(u);
    if (!isValidNumber(bps)) return;
    if (bps > avgBPS && isValidNumber(u.completion) && u.completion < avgCompletion) {
      alerts.push({ emoji: '🔴', sigla: u.sigla,
        msg: 'Alto custo por aluno com taxa de conclusão abaixo da média do grupo.',
        detail: `Custo/aluno: ${formatCurrency(bps)} (média: ${formatCurrency(avgBPS)}) · Conclusão: ${formatPercent(u.completion)} (média: ${formatPercent(avgCompletion)})` });
    }
    if (isValidNumber(u.personnel) && u.personnel > 85) {
      alerts.push({ emoji: '🟡', sigla: u.sigla,
        msg: `Alta participação de pessoal e encargos no orçamento (${formatPercent(u.personnel)}).`,
        detail: `Participação de pessoal: ${formatPercent(u.personnel)} — referência: ≤ 85%` });
    }
    if (bps < avgBPS && isValidNumber(u.completion) && u.completion > avgCompletion) {
      alerts.push({ emoji: '🟢', sigla: u.sigla,
        msg: 'Alta taxa de conclusão com custo abaixo da média — destaque de eficiência.',
        detail: `Custo/aluno: ${formatCurrency(bps)} (média: ${formatCurrency(avgBPS)}) · Conclusão: ${formatPercent(u.completion)} (média: ${formatPercent(avgCompletion)})` });
    }
    if (medCnpqRatio > 0 && isValidNumber(u.cnpq) && isValidNumber(u.students) && u.students > 0
        && u.cnpq / u.students < medCnpqRatio) {
      alerts.push({ emoji: '🔵', sigla: u.sigla,
        msg: 'Captação CNPq por aluno abaixo da mediana do grupo — potencial de captação não explorado.',
        detail: `CNPq/aluno: ${formatCurrency(u.cnpq * 1e6 / u.students)} (mediana: ${formatCurrency(medCnpqRatio * 1e6)})` });
    }
  });

  const alertsHtml = alerts.length
    ? alerts.map(a => {
        const bg = a.emoji === '🟢' ? "rgba(22,163,74,0.08)" : a.emoji === '🔴' ? "rgba(220,38,38,0.08)" : a.emoji === '🟡' ? "rgba(202,138,4,0.08)" : "rgba(74,111,165,0.08)";
        const border = a.emoji === '🟢' ? "#bbf7d0" : a.emoji === '🔴' ? "#fecaca" : a.emoji === '🟡' ? "#fde68a" : "#bfdbfe";
        return `<div style="display:flex;align-items:flex-start;gap:10px;padding:10px 14px;border-radius:6px;background:${bg};border:1px solid ${border};margin-bottom:8px;">
          <span style="font-size:1.1rem;">${a.emoji}</span>
          <div><strong>${a.sigla}</strong> — ${a.msg}<br>
          <span style="font-size:0.78rem;color:var(--text-secondary,#777);">${a.detail}</span></div>
        </div>`;
      }).join('')
    : `<p style="color:var(--text-secondary,#777);padding:16px;">Nenhum alerta identificado para o grupo selecionado.</p>`;

  // Matriz de oportunidades: IEES × dimensões
  const DIMS = [
    { label: "Custo", get: u => { const bps = costPerStudent(u); return bps <= avgBPS ? "ok" : "warn"; }, tip: u => `Custo/aluno: ${formatCurrency(costPerStudent(u))}` },
    { label: "Conclusão", get: u => u.completion >= avgCompletion ? "ok" : u.completion >= avgCompletion * 0.85 ? "mid" : "warn", tip: u => `Conclusão: ${formatPercent(u.completion)}` },
    { label: "Pessoal", get: u => u.personnel <= 80 ? "ok" : u.personnel <= 85 ? "mid" : "warn", tip: u => `Pessoal: ${formatPercent(u.personnel)}` },
    { label: "CNPq", get: u => (medCnpqRatio > 0 && u.cnpq / Math.max(u.students, 1) >= medCnpqRatio) ? "ok" : "warn", tip: u => `CNPq/aluno: ${formatCurrency(u.cnpq * 1e6 / Math.max(u.students, 1))}` },
    { label: "Ocupação", get: u => u.occupancy >= 85 ? "ok" : u.occupancy >= 70 ? "mid" : "warn", tip: u => `Ocupação: ${formatPercent(u.occupancy)}` },
    { label: "Doutores", get: u => u.doctors >= 80 ? "ok" : u.doctors >= 65 ? "mid" : "warn", tip: u => `Doutores: ${formatPercent(u.doctors)}` },
  ];
  const cellColor = s => s === "ok" ? "#dcfce7" : s === "mid" ? "#fef9c3" : "#fee2e2";
  const cellText = s => s === "ok" ? "#14804a" : s === "mid" ? "#92400e" : "#b91c1c";
  const cellIcon = s => s === "ok" ? "✓" : s === "mid" ? "~" : "✗";
  const matrixHtml = `<div class="table-wrap" style="margin-top:16px;overflow-x:auto;"><table class="data-table" style="font-size:12px;"><thead><tr><th>IEES</th>${DIMS.map(d => `<th>${d.label}</th>`).join("")}</tr></thead><tbody>${rows.map(u => `<tr><td><strong>${u.sigla}</strong></td>${DIMS.map(d => { const s = d.get(u); return `<td style="text-align:center;background:${cellColor(s)};color:${cellText(s)};font-weight:700;" title="${d.tip(u)}">${cellIcon(s)}</td>`; }).join("")}</tr>`).join("")}</tbody></table></div>`;

  const footnote = `<p style="font-size:0.78rem;color:var(--text-secondary,#777);margin-top:12px;">
    <strong>Fontes:</strong> Orçamento — Relatório da Despesa 8050 (SETI/SEFA) ·
    Matrículas e concluintes — INEP, Censo da Educação Superior ·
    Captação de pesquisa — CNPq / Dados Abertos ·
    Pessoal e encargos — Relatório da Despesa 8050, col. part_pessoal
  </p>`;

  return `<article class="visual-card budget-alert-card">
    <h3>Alertas automáticos e oportunidades</h3>
    <p class="card-subtitle">Baseados nos dados reais do recorte selecionado (Despesa 8050 × INEP × CNPq). ✓ adequado · ~ atenção · ✗ oportunidade de melhoria</p>
    ${matrixHtml}
    <div style="margin-top:16px;">${alertsHtml}</div>
    ${footnote}
  </article>`;
}

function budgetDiagnosticTable(c, resultOption) {
  const rows = budgetRelativeRows(c, resultOption);
  const subtitleHtml = '<p style="font-size:0.83rem; color:var(--text-secondary,#666); margin:4px 0 12px 0; line-height:1.5;">Cada IEES é comparada às demais universidades do mesmo cluster (agrupamento ativo no filtro). Os percentuais de Custo e Resultado mostram o desvio em relação à média do grupo: valor positivo = acima da média; negativo = abaixo da média.</p>';
  const thCusto = '<th style="cursor:default;"><span style="display:block;font-size:0.75rem;font-weight:700;letter-spacing:.04em;color:var(--text-primary,#222);">CUSTO RELATIVO</span><span style="display:block;font-size:0.70rem;font-weight:400;color:var(--text-secondary,#888);text-transform:none;letter-spacing:0;margin-top:2px;">% vs. média do cluster</span> <span style="display:inline-block;font-size:0.7rem;background:var(--accent,#4A6FA5);color:#fff;border-radius:50%;width:14px;height:14px;text-align:center;line-height:14px;cursor:help;vertical-align:middle;" title="Definição: desvio percentual do custo por aluno desta IES em relação à média do cluster ativo.&#10;Fórmula: (custo_IES − média_cluster) ÷ média_cluster × 100&#10;Fonte: Orçamento liquidado — Relatório da Despesa 8050 (SETI/SEFA) ÷ Matrículas ativas — INEP, Censo da Educação Superior.&#10;Valores negativos indicam custo abaixo da média do grupo; positivos indicam custo acima.">?</span></th>';
  const thResult = '<th style="cursor:default;"><span style="display:block;font-size:0.75rem;font-weight:700;letter-spacing:.04em;color:var(--text-primary,#222);">RESULTADO RELATIVO</span><span style="display:block;font-size:0.70rem;font-weight:400;color:var(--text-secondary,#888);text-transform:none;letter-spacing:0;margin-top:2px;">% vs. média do cluster</span> <span style="display:inline-block;font-size:0.7rem;background:var(--accent,#4A6FA5);color:#fff;border-radius:50%;width:14px;height:14px;text-align:center;line-height:14px;cursor:help;vertical-align:middle;" title="Definição: desvio percentual do indicador de desempenho selecionado desta IES em relação à média do cluster ativo.&#10;Fórmula: (resultado_IES − média_cluster) ÷ média_cluster × 100&#10;Fonte: depende do indicador — ex: Taxa de concluintes: INEP (QT_CONC ÷ QT_MAT); Taxa de ocupação: INEP (QT_ING ÷ QT_VG_TOTAL); CRES: SETI, Base Docentes - Paraná.xlsx.&#10;Valores positivos indicam desempenho acima da média do grupo; negativos indicam abaixo — sempre em relação ao cluster, não ao universo total.">?</span></th>';
  const noteHtml = '<div style="margin-top:14px;padding:12px 16px;background:var(--surface-2,#f5f5f5);border-radius:8px;font-size:0.80rem;color:var(--text-secondary,#666);line-height:1.65;"><strong style="display:block;margin-bottom:6px;color:var(--text-primary,#333);">Como ler esta tabela</strong><ul style="margin:0;padding-left:18px;"><li><strong>Custo relativo</strong> &#8212; quanto a IES gasta por aluno comparado à média das universidades do mesmo cluster. Fórmula: (custo da IES &#8722; média do cluster) &#247; média do cluster &#215; 100. Fonte: orçamento liquidado (Relatório da Despesa 8050, SETI/SEFA) &#247; matrículas ativas (INEP, Censo da Educação Superior).</li><li style="margin-top:6px;"><strong>Resultado relativo</strong> &#8212; desvio do indicador de desempenho selecionado (ex: taxa de conclusão, ocupação de vagas) em relação à média do cluster. Mesmo cálculo proporcional. Fontes variam conforme o indicador exibido na coluna &#8220;Indicador usado&#8221;.</li><li style="margin-top:6px;"><strong>Classificação</strong> &#8212; combinação das duas dimensões: uma IES com gasto abaixo da média e resultado acima entrega maior eficiência relativa dentro do seu grupo de referência.</li></ul></div>';
  return `<div class="table-wrap mt-14"><h3>Posicionamento relativo das IEES no cluster</h3>${subtitleHtml}<table class="data-table budget-diagnostic-table"><thead><tr><th>IEES</th><th>Cluster</th>${thCusto}${thResult}<th>Classificação</th><th>Indicador usado</th></tr></thead><tbody>${rows.map(row => {
    const q = classificaQuadrante(row.costDelta, row.resultDelta);
    return `<tr class="diag-q"><td><strong>${row.u.sigla}</strong><br><span>${row.u.nome}</span></td><td>${row.u.groups[c.f.groupBy] || row.u.groups.v6}</td><td>${row.costDelta >= 0 ? "+" : ""}${row.costDelta.toFixed(1).replace(".", ",")}%</td><td>${row.resultDelta >= 0 ? "+" : ""}${row.resultDelta.toFixed(1).replace(".", ",")}%</td><td><span style="font-weight:600;color:${q.color};">${q.label}</span></td><td>${resultOption.label}</td></tr>`;
  }).join("")}</tbody></table>${noteHtml}</div>`;
}

function budgetContextAlerts(c, resultOption) {
  if (!hasOfficialQuadrants()) {
    return `<article class="visual-card budget-alert-card"><h3>Alertas automáticos contextuais</h3>${quadrantUnavailableBlock()}</article>`;
  }
  const rows = budgetRelativeRows(c, resultOption);
  const alerts = [];
  rows.forEach(row => {
    const quad = budgetQuadrant(row);
    const profile = row.u.groups.v6 || "";
    if (quad.code === "q4" && (profile.includes("Expansivo") || profile.includes("Autônomo"))) alerts.push(["alert-danger", "⚠", row.u.sigla, "Perfil orçamentário expansivo (V6): orçamento atualizado significativamente superior à dotação inicial, indicando uso intenso de suplementações. Verificar sustentabilidade e recorrência das fontes que financiam as suplementações."]);
    if (quad.code === "q3" && profile.includes("Restritivo")) alerts.push(["alert-info", "i", row.u.sigla, profile.includes("Moderado-Restritivo") ? "Perfil orçamentário moderado-restritivo (V6): execução dentro dos limites, mas com margem reduzida de flexibilidade. Monitorar evolução da dotação atualizada e do grau de contingenciamento nos próximos ciclos." : "Perfil orçamentário restritivo (V6): orçamento atualizado sistematicamente inferior à dotação inicial, com baixa margem para suplementações. Isso tende a comprimir investimentos em pessoal, infraestrutura e custeio — o que pode justificar resultados abaixo da média em indicadores que dependem de capacidade instalada, como ocupação docente e oferta de vagas."]);
    if (budgetMetrics(row.u).executionRate < 80) alerts.push(["alert-warn", "⚠", row.u.sigla, `${indicatorName(81)} abaixo do esperado (${formatPercent(budgetMetrics(row.u).executionRate)}).`]);
  });
  if (!alerts.length) alerts.push(["alert-ok", "✓", "Sistema", "Nenhum alerta crítico no recorte orçamentário ativo."]);
  return `<article class="visual-card budget-alert-card"><h3>Alertas automáticos contextuais</h3><p class="card-subtitle">Regras baseadas na matriz relativa, perfil V6 e execução orçamentária.</p><div class="system-alerts-list">${alerts.map(([cls, icon, ies, msg]) => `<div class="alert-item ${cls}"><span class="alert-icon" aria-hidden="true">${icon}</span><div class="alert-body"><strong class="alert-ies">${ies}</strong><span class="alert-msg">${msg}</span></div></div>`).join("")}</div></article>`;
}

function budgetProfileClass(profile) {
  const text = String(profile || "").toLowerCase().trim();
  if (text === "perfil expansivo" || text === "autônomo" || text === "autonomo") return "profile-expansive";
  if (text === "perfil restritivo") return "profile-restrictive";
  return "profile-moderate";
}

function budgetMovementBlock(c) {
  const rows = chartRowsByLocal(c, "budgetMovementBlock", efficiencyRows(c));
  const a = budgetAgg(rows);
  return `${quartilChipStrip("budgetMovementBlock", c.f.groupBy, c.base, c)}
  <div class="score-grid budget-movement-grid">
    ${budgetScoreCard("Orçamento liquidado total", formatCurrencyMillions(a.liquidated), "soma do cluster")}
    ${budgetScoreCard(indicatorName(81), formatPercent(a.executionRate), "empenhado / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(82), formatPercent(a.liquidationRate), "liquidado / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(83), formatPercent(a.paymentRate), "pago / orçamento atualizado")}
    ${budgetScoreCard(indicatorName(84), formatPercent(a.contingencyRate), "contingenciado / atualizado")}
    ${budgetScoreCard(indicatorName(85), formatPercent(a.variationRate), "LOA vs. atualizado")}
    ${budgetScoreCard(indicatorName(94), formatPercent(a.variationRate), "variação frente à LOA inicial")}
    ${budgetScoreCard(indicatorName(95), formatPercent(a.execInitial), "liquidado / dotação inicial")}
    ${budgetScoreCard(indicatorName(96), formatPercent(a.execAvailable), "liquidado / orçamento disponível")}
    ${budgetScoreCard(indicatorName(97), formatPercent(a.execUpdated), "liquidado / orçamento atualizado")}
  </div>
  <article class="visual-card mt-14"><h3>${indicatorName(81)} por IEES</h3><p class="card-subtitle">V6 é a referência natural. Verde acima de 90%; amarelo entre 80% e 90%; vermelho abaixo de 80%.</p>${budgetExecutionBars(c)}</article>`;
}

function deltaForRenderedKpi(label, c) {
  const text = String(label || "").toLowerCase();
  const previousYear = Number(c.f.year) - 1;
  if (!yearAdj[previousYear]) return kpiDeltaForValue(null, null, "neutral", "pp", previousYear, label);

  if (state.activeTab === "efficiency" || state.activeTab === "performance") {
    const rows = efficiencyRows(c);
    const previous = budgetAgg(previousYearRows(rows, previousYear));
    const current = budgetAgg(rows);
    if (text.includes("liquidado")) return kpiDeltaForValue(current.liquidated, previous.liquidated, "higher", "pct", previousYear, label);
    if (text.includes("execu")) return kpiDeltaForValue(current.executionRate, previous.executionRate, "higher", "pp", previousYear, label);
    if (text.includes("varia")) return kpiDeltaForValue(current.variationRate, previous.variationRate, "neutral", "pp", previousYear, label);
    if (text.includes("conting") || text.includes("menor")) return kpiDeltaForValue(current.contingencyRate, previous.contingencyRate, "lower", "pp", previousYear, label);
    return kpiDeltaForValue(null, null, "neutral", "pp", previousYear, label);
  }

  const data = state.activeTab === "overview" ? overviewDataSet(c) : (c.display.length ? c.display : c.ref);
  const ref = c.ref.length ? c.ref : c.all;
  const previousData = previousYearRows(data, previousYear);
  const previousRef = previousYearRows(ref, previousYear);
  const a = state.activeTab === "overview" ? overviewAgg(data) : agg(data);
  const p = state.activeTab === "overview" ? overviewAgg(previousData) : agg(previousData);
  const ar = agg(ref);
  const pr = agg(previousRef);
  const rows = matrixRows(ref, c.f);
  const previousRows = matrixRows(previousRef, {...c.f, year:String(previousYear)});
  const selectedRow = c.selected && rows.find(r => r.id === c.selected.id);
  const selectedPrevious = c.selected && previousRows.find(r => r.id === c.selected.id);

  if (text.includes("total de estudantes") || text.includes("matr")) return kpiDeltaForValue(a.students, p.students, "higher", "pct", previousYear, label);
  if (text.includes("ingressantes")) return kpiDeltaForValue(a.entrants, p.entrants, "higher", "pct", previousYear, label);
  if (text.includes("concluintes")) {
    const current = text.includes("taxa") ? (a.completionByVacancy ?? a.completion) : a.graduates;
    const previous = text.includes("taxa") ? (p.completionByVacancy ?? p.completion) : p.graduates;
    return kpiDeltaForValue(current, previous, "higher", text.includes("taxa") ? "pp" : "pct", previousYear, label);
  }
  if (text.includes("cursos")) return kpiDeltaForValue(a.courses, p.courses, "higher", "pct", previousYear, label);
  if (text.includes("vagas") && !text.includes("ocupa")) return kpiDeltaForValue(a.vacancies, p.vacancies, "higher", "pct", previousYear, label);
  if (text.includes("ocup")) {
    const current = text.includes("ingresso") ? (a.ingressOccupancy ?? a.occupancy) : a.occupancy;
    const previous = text.includes("ingresso") ? (p.ingressOccupancy ?? p.occupancy) : p.occupancy;
    return kpiDeltaForValue(current, previous, "higher", "pp", previousYear, label);
  }
  if (text.includes("desvincula")) return kpiDeltaForValue(a.dropout, p.dropout, "lower", "pp", previousYear, label);
  if (text.includes("doutorado")) return kpiDeltaForValue(a.doctors, p.doctors, "higher", "pp", previousYear, label);
  if (text.includes("cnpq") || text.includes("capta")) return kpiDeltaForValue(a.cnpq, p.cnpq, "higher", "pct", previousYear, label);
  if (text.includes("sal")) return kpiDeltaForValue(a.salary, p.salary, "higher", "pct", previousYear, label);
  if (text.includes("inser")) return kpiDeltaForValue(a.employment, p.employment, "higher", "pp", previousYear, label);
  if (text.includes("liquidado")) return kpiDeltaForValue(ar.budget, pr.budget, "higher", "pct", previousYear, label);
  if (text.includes("execu")) return kpiDeltaForValue(ar.execution, pr.execution, "higher", "pp", previousYear, label);
  if (text.includes("resultado relativo")) return kpiDeltaForValue(selectedRow ? selectedRow.resultRel : mean(rows, r => r.resultRel), selectedPrevious ? selectedPrevious.resultRel : mean(previousRows, r => r.resultRel), "higher", "pp", previousYear, label);
  if (text.includes("esfor")) return kpiDeltaForValue(selectedRow ? selectedRow.effortRel : mean(rows, r => r.effortRel), selectedPrevious ? selectedPrevious.effortRel : mean(previousRows, r => r.effortRel), "lower", "pp", previousYear, label);
  return kpiDeltaForValue(null, null, "neutral", "pp", previousYear, label);
}

function appendMissingKpiDeltas(c) {
  return;
}

var renderKpisEfficiencyCleanup = renderKpis;
renderKpis = function(c) {
  if (c.f.university === "none") {
    if (el.kpiGrid) el.kpiGrid.innerHTML = `<p style="grid-column:1/-1;text-align:center;padding:20px;color:var(--gray-500)">Selecione pelo menos uma IEES para ver os indicadores.</p>`;
    return;
  }
  if (state.activeTab !== "efficiency" && el.kpiGrid) el.kpiGrid.classList.remove("efficiency-kpi-grid");
  renderKpisEfficiencyCleanup(c);
  appendMissingKpiDeltas(c);
};
