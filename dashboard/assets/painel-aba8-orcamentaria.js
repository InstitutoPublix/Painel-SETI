/* ==========================================================================
   ABA 8 — Orçamentária e Despesa 8050
   Redefine as funções desta aba carregando-as após painel.js.
   ========================================================================== */

// ── ABA 8: Orçamentária — implementação com dados reais Despesa 8050 ─────────
// Aba: data-tab="efficiency" (v8_painel_seti_html.html, linha 55)
// Seção 1 — Custo por Resultado        (usa u.liquidado real do JSON)
// Seção 2 — Execução Orçamentária 8050 (tabela completa com 4 blocos)
// Seção 3 — Evolução 2024–2026         (linha SVG dual-axis, checkboxes IES)
//
// Dados via: byYear(u, year) + getRealIndicators() — não acessa DATA diretamente.
// data-hub.js já carrega byYear[2024/2025/2026] via loadPrecomputedJson().

// ── Patch de byYear: copia campos D8050 de _rc para o objeto c ───────────────
// Permite que u.liquidado, u.orcamento_atualizado, etc. estejam disponíveis
// após byYear(u, year), respeitando o contrato da camada de render.
(function() {
  var _prevByYear = byYear;
  byYear = function byYearWithD8050(u, year) {
    var c = _prevByYear(u, year);
    var rc = (typeof getRealIndicators === "function")
      ? getRealIndicators((u.sigla || String(u.id || "")).toUpperCase(), String(year))
      : null;
    if (rc) {
      var D8050 = [
        "dotacao_inicial","orcamento_atualizado","empenhado","liquidado","pago",
        "tx_execucao_empenho","tx_liquidacao","tx_pagamento_liq",
        "grau_contingenciamento","var_dotacao_loa",
        "part_pessoal","part_outras_correntes","part_capital",
        "part_recursos_livres","part_fonte_500","part_fonte_501",
        "part_demais_vincul","part_convenios_uniao","part_convenios_privados",
        "part_emendas_federais"
      ];
      D8050.forEach(function(f) { if (rc[f] != null) c[f] = rc[f]; });
      if (rc.composicaoFontes != null) c.composicaoFontes = rc.composicaoFontes;
      ['ind81','ind82','ind83','ind84','ind85','ind86','ind87','ind88','ind89','ind90','ind91','ind92','ind93','ind94','ind95'].forEach(function(f){if(rc[f]!=null)c[f]=rc[f];});
    }
    return c;
  };
  window.byYear = byYear;
}());

// ── Remove blocos da sessão anterior e registra os 3 novos ───────────────────
var _OLD_BLOCKS = ["Custo por Resultado","Orçamento × Desempenho (Scatter)","Placar de Eficiência","Execução Orçamentária (contexto)"];
tabBlocks.efficiency = tabBlocks.efficiency.filter(function(t) { return !_OLD_BLOCKS.includes(t); });
tabBlocks.efficiency.push(
  "Composição por Fonte de Despesa",
  "Custo por Resultado (8050)",
  "Execução Orçamentária 8050",
  "Evolução 2024–2026",
  "Comparador de Eficiência",
  "Avaliação SELO-PR"
);

// ── Estado para a Seção 3 ────────────────────────────────────────────────────
var _ORC_IES_PR = ["UEL","UEM","UEPG","UNIOESTE","UNICENTRO","UENP","UNESPAR"];
if (!state.orcEvolucaoFilter) state.orcEvolucaoFilter = new Set(_ORC_IES_PR);

window.toggleOrcEvolucaoIES = function(sigla) {
  if (!state.orcEvolucaoFilter) state.orcEvolucaoFilter = new Set(_ORC_IES_PR);
  if (state.orcEvolucaoFilter.has(sigla)) state.orcEvolucaoFilter.delete(sigla);
  else state.orcEvolucaoFilter.add(sigla);
  render();
};

window.limparOrcEvolucao = function() {
  state.orcEvolucaoFilter = new Set();
  render();
};

// ── Helpers locais ────────────────────────────────────────────────────────────
function _fmtM(v) {
  if (v == null || !isFinite(v)) return "—";
  return "R$ " + v.toFixed(1).replace(".", ",") + " M";
}
function _fmtP(v) {
  if (v == null || !isFinite(v)) return "—";
  return v.toFixed(1).replace(".", ",") + "%";
}
function _avgField(rows, get) {
  var vals = rows.map(get).filter(function(v) { return v != null && isFinite(v); });
  return vals.length ? vals.reduce(function(a, b) { return a + b; }, 0) / vals.length : null;
}
// acesso aos dados 8050 por sigla/ano sem acessar DATA diretamente
function _rc8050(sigla, year) {
  return (typeof getRealIndicators === "function")
    ? (getRealIndicators(String(sigla).toUpperCase(), String(year)) || {})
    : {};
}

// ── Composição por Fonte de Despesa (pizza charts) ───────────────────────────
function renderComposicaoFontesBlock(c) {
  if (c.f.scope !== 'Paraná') return '';
  var rows = efficiencyRows(c);
  var ies = rows.filter(function(u) { return u.composicaoFontes; });
  if (!ies.length) return '<div class="empty-state">Dados de composição por fonte não disponíveis para o recorte selecionado.</div>';
  var cards = ies.map(function(u) { return composicaoFontesSection(u); }).filter(Boolean);
  if (!cards.length) return '<div class="empty-state">Sem fontes de despesa com participação no orçamento.</div>';

  // Filtro global — re-definido a cada render
  window.filtroFonteIES = function(iesSel) {
    var alvo = (iesSel === 'limpar') ? 'todas' : iesSel;
    document.querySelectorAll('.filtroFonte-btn').forEach(function(b) {
      var isLimpar = b.dataset.ies === 'limpar';
      var isAtivo  = b.dataset.ies === alvo && !isLimpar;
      b.style.background  = isAtivo  ? 'var(--accent,#4A6FA5)' : 'transparent';
      b.style.color       = isAtivo  ? '#fff' : (isLimpar ? 'var(--text-secondary,#94a3b8)' : 'var(--text-primary,#222)');
      b.style.borderColor = isAtivo  ? 'var(--accent,#4A6FA5)' : (isLimpar ? '#e2e8f0' : '#cbd5e1');
    });
    document.querySelectorAll('[data-ies-fonte]').forEach(function(bloco) {
      bloco.style.display = (alvo === 'todas' || bloco.dataset.iesFonte === alvo) ? '' : 'none';
    });
  };

  var _IES_PR_ALL = ['UEL','UEM','UEPG','UNIOESTE','UNICENTRO','UENP','UNESPAR'];
  var filtroBtns = '<div id="filtroFonteIES" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:16px;align-items:center;">' +
    '<span style="font-size:0.82rem;color:var(--text-secondary,#666);margin-right:4px;">Exibir:</span>' +
    '<button class="filtroFonte-btn" data-ies="todas" onclick="window.filtroFonteIES(\'todas\')" style="padding:5px 14px;border-radius:20px;border:1px solid var(--accent,#4A6FA5);background:var(--accent,#4A6FA5);color:#fff;font-size:0.82rem;cursor:pointer;">Todas as IEES</button>' +
    _IES_PR_ALL.map(function(sig) {
      return '<button class="filtroFonte-btn" data-ies="' + sig + '" onclick="window.filtroFonteIES(\'' + sig + '\')" style="padding:5px 14px;border-radius:20px;border:1px solid #cbd5e1;background:transparent;color:var(--text-primary,#222);font-size:0.82rem;cursor:pointer;">' + sig + '</button>';
    }).join('') +
    '<button class="filtroFonte-btn" data-ies="limpar" onclick="window.filtroFonteIES(\'limpar\')" style="padding:5px 14px;border-radius:20px;border:1px solid #e2e8f0;background:transparent;color:var(--text-secondary,#94a3b8);font-size:0.82rem;cursor:pointer;">Limpar filtro</button>' +
    '</div>';

  var gridStyle = ies.length === 1
    ? ''
    : 'display:grid;grid-template-columns:repeat(auto-fill,minmax(560px,1fr));gap:1rem';
  return filtroBtns + '<div style="' + gridStyle + '">' + cards.join('') + '</div>';
}

// ─────────────────────────────────────────────────────────────────────────────
// SEÇÃO 1 — Custo por Resultado (dados reais: u.liquidado)
// ─────────────────────────────────────────────────────────────────────────────
function renderOrcCustoPorResultado(rows) {
  if (!rows || !rows.length) return '<div class="empty-state">Sem dados no recorte selecionado.</div>';

  var COST_INDS = [
    { label: "Custo por aluno matriculado",
      sub:   "Liquidado × 1M / matrículas",
      get:   function(u) { return (u.liquidado > 0 && u.students > 0) ? u.liquidado * 1e6 / u.students : null; } },
    { label: "Custo por graduado",
      sub:   "Liquidado × 1M / concluintes",
      get:   function(u) { return (u.liquidado > 0 && u.graduates > 0) ? u.liquidado * 1e6 / u.graduates : null; } },
    { label: "Custo por vaga ocupada",
      sub:   "Liquidado × 1M / (vagas × ocupação%)",
      get:   function(u) {
        var denom = u.vacancies > 0 && u.occupancy > 0 ? u.vacancies * u.occupancy / 100 : 0;
        return (u.liquidado > 0 && denom > 0) ? u.liquidado * 1e6 / denom : null; } },
    { label: "Custo por egresso empregado",
      sub:   "Liquidado × 1M / (graduados × inserção%)",
      get:   function(u) {
        var denom = u.graduates > 0 && u.employment > 0 ? u.graduates * u.employment / 100 : 0;
        return (u.liquidado > 0 && denom > 0) ? u.liquidado * 1e6 / denom : null; } },
    { label: "Custo por programa de PG",
      sub:   "Liquidado × 1M / programas de pós-graduação",
      get:   function(u) { return (u.liquidado > 0 && u.pg > 0) ? u.liquidado * 1e6 / u.pg : null; } },
    { label: "Custo por programa PG nota ≥5",
      sub:   "Liquidado × 1M / programas CAPES 5–7",
      get:   function(u) { return (u.liquidado > 0 && u.pgTop > 0) ? u.liquidado * 1e6 / u.pgTop : null; } },
  ];

  function costCard(ind) {
    var valid = rows.filter(function(u) { return ind.get(u) != null; });
    if (!valid.length) {
      return '<article class="visual-card"><h3>' + ind.label + '</h3><p class="card-subtitle">' + ind.sub +
             '</p><div class="empty-state" style="padding:10px 0">Dados insuficientes no recorte.</div></article>';
    }
    var sorted = valid.slice().sort(function(a, b) { return ind.get(a) - ind.get(b); });
    var minV = ind.get(sorted[0]);
    var maxV = ind.get(sorted[sorted.length - 1]);
    var range = maxV - minV || 1;

    var avgV = valid.reduce(function(s, u) { return s + ind.get(u); }, 0) / valid.length;
    var barsHtml = sorted.map(function(u) {
      var v = ind.get(u);
      var pct = clamp(((v - minV) / range) * 82 + 8, 8, 95);
      var fillStyle = v <= avgV * 0.95
        ? "background:#16a34a;opacity:0.85"
        : v >= avgV * 1.05
        ? "background:#dc2626;opacity:0.85"
        : "background:#ca8a04;opacity:0.85";
      return '<div class="bar-row"><span class="bar-name" title="' + u.nome + '">' + u.sigla +
             '</span><span class="bar-track"><span class="bar-fill" style="width:' + pct.toFixed(1) + '%;' + fillStyle +
             '"></span></span><span class="bar-value">' + formatCurrency(v) + '</span></div>';
    }).join("");

    return '<article class="visual-card"><h3>' + ind.label +
           '</h3><p class="card-subtitle">' + ind.sub + ' · 🟢 Abaixo da média · 🟡 Na média · 🔴 Acima da média</p>' +
           '<div class="bars">' + barsHtml + '</div></article>';
  }

  var cards = COST_INDS.map(costCard);
  return '<div class="chart-grid">' + cards[0] + cards[1] + '</div>' +
         '<div class="chart-grid mt-14">' + cards[2] + cards[3] + '</div>' +
         '<div class="chart-grid mt-14">' + cards[4] + cards[5] + '</div>';
}

// ─────────────────────────────────────────────────────────────────────────────
// SEÇÃO 2 — Execução Orçamentária 8050 (tabela 4 blocos)
// ─────────────────────────────────────────────────────────────────────────────
function renderOrcExecucao(rows) {
  if (!rows || !rows.length) return '<div class="empty-state">Sem dados no recorte selecionado.</div>';

  // Ordena por liquidado decrescente
  var sorted = rows.slice().sort(function(a, b) { return (b.liquidado || 0) - (a.liquidado || 0); });
  var n = sorted.length;

  function cellStyle(v, avgV, higherBetter) {
    if (v == null || avgV == null || !isFinite(v) || !isFinite(avgV)) return "";
    var better = higherBetter ? v > avgV : v < avgV;
    return better
      ? "background:#e0f5ec;color:var(--color-success,#16a34a);font-weight:600"
      : "background:#fdecea;color:var(--color-danger,#dc2626);font-weight:600";
  }

  function avgOf(getter) { return _avgField(sorted, getter); }

  function makeRow(label, getter, fmtFn, colorOpt, grupo) {
    var avgV = colorOpt ? avgOf(getter) : null;
    var cells = sorted.map(function(u) {
      var v = getter(u);
      var style = colorOpt ? cellStyle(v, avgV, colorOpt === "higher") : "";
      return '<td style="text-align:right;' + style + '">' + fmtFn(v) + '</td>';
    }).join("");
    return '<tr data-grupo="' + grupo + '"><td style="font-size:12px;padding:5px 8px;white-space:nowrap">' + label + '</td>' + cells + '</tr>';
  }

  function blockHead(label, grupo) {
    return '<tr class="grupo-header" data-grupo-header="' + grupo + '" style="background:#f3f4f6"><td colspan="' + (n + 1) + '" style="padding:6px 8px;font-size:11px;font-weight:700;color:#374151;letter-spacing:.03em;text-transform:uppercase">' + label + '</td></tr>';
  }

  // Calculated fields
  function creditosAdicionais(u) {
    return (u.orcamento_atualizado != null && u.dotacao_inicial != null)
      ? round(u.orcamento_atualizado - u.dotacao_inicial, 2) : null;
  }
  function saldoNaoExec(u) {
    return (u.orcamento_atualizado != null && u.liquidado != null)
      ? round(u.orcamento_atualizado - u.liquidado, 2) : null;
  }

  var colHeaders = sorted.map(function(u) {
    return '<th style="text-align:center;padding:6px 4px;min-width:80px">' + u.sigla + '<br>' +
           '<span style="font-size:10px;font-weight:400;color:var(--gray-500)">' + _fmtM(u.liquidado) + '</span></th>';
  }).join("");

  var thead = '<thead><tr><th style="text-align:left;min-width:200px">Indicador</th>' + colHeaders + '</tr></thead>';

  var tbody = '<tbody>' +
    blockHead("A — Valores absolutos (R$ milhões)", "A") +
    makeRow("Dotação Inicial (LOA)",       function(u){return u.dotacao_inicial;},      _fmtM, null,     "A") +
    makeRow("Orçamento Atualizado",        function(u){return u.orcamento_atualizado;}, _fmtM, null,     "A") +
    makeRow("Créditos Adicionais",         creditosAdicionais,                          _fmtM, null,     "A") +
    makeRow("Empenhado",                   function(u){return u.empenhado;},            _fmtM, null,     "A") +
    makeRow("Liquidado",                   function(u){return u.liquidado;},            _fmtM, null,     "A") +
    makeRow("Pago",                        function(u){return u.pago;},                 _fmtM, null,     "A") +
    makeRow("Saldo não executado",         saldoNaoExec,                               _fmtM, null,     "A") +
    blockHead("B — Taxas de execução (%)", "B") +
    makeRow("Taxa de Execução — Empenho",    function(u){return u.tx_execucao_empenho;},   _fmtP, "higher", "B") +
    makeRow("Taxa de Liquidação",            function(u){return u.tx_liquidacao;},          _fmtP, "higher", "B") +
    makeRow("Taxa de Pagamento / Liquidado", function(u){return u.tx_pagamento_liq;},       _fmtP, "higher", "B") +
    makeRow("Grau de Contingenciamento",     function(u){return u.grau_contingenciamento;}, _fmtP, "lower",  "B") +
    makeRow("Variação Dotação / LOA",        function(u){return u.var_dotacao_loa;},        _fmtP, null,     "B") +
    blockHead("C — Composição da despesa (%)", "C") +
    makeRow("Pessoal e Encargos",         function(u){return u.part_pessoal;},          _fmtP, null, "C") +
    makeRow("Outras Desp. Correntes",     function(u){return u.part_outras_correntes;}, _fmtP, null, "C") +
    makeRow("Investimentos / Capital",    function(u){return u.part_capital;},          _fmtP, null, "C") +
    blockHead("D — Composição por fonte de recurso (%)", "D") +
    makeRow("Recursos Livres (Gr. 50)",      function(u){return u.part_recursos_livres;},    _fmtP, null, "D") +
    makeRow("Fonte 500 — Tesouro",           function(u){return u.part_fonte_500;},          _fmtP, null, "D") +
    makeRow("Fonte 501 — Arrecad. Própria",  function(u){return u.part_fonte_501;},          _fmtP, null, "D") +
    makeRow("Demais Vinculações (Gr. 70)",   function(u){return u.part_demais_vincul;},      _fmtP, null, "D") +
    makeRow("Convênios União",               function(u){return u.part_convenios_uniao;},    _fmtP, null, "D") +
    makeRow("Convênios Privados",            function(u){return u.part_convenios_privados;}, _fmtP, null, "D") +
    makeRow("Emendas Federais",              function(u){return u.part_emendas_federais;},   _fmtP, null, "D") +
    '</tbody>';

  // Rodapé: médias (valores absolutos — grupo A)
  var avgRow = '<tfoot id="tabela8050-tfoot"><tr style="border-top:2px solid var(--gray-200);background:#fafafa"><td style="font-size:12px;padding:5px 8px"><strong>Média das ' + n + ' IEES</strong></td>' +
    [
      {g: function(u){return u.dotacao_inicial;},      f: _fmtM},
      {g: function(u){return u.orcamento_atualizado;}, f: _fmtM},
      {g: creditosAdicionais,                           f: _fmtM},
      {g: function(u){return u.empenhado;},            f: _fmtM},
      {g: function(u){return u.liquidado;},            f: _fmtM},
      {g: function(u){return u.pago;},                 f: _fmtM},
      {g: saldoNaoExec,                                f: _fmtM},
    ].map(function(x) {
      var v = avgOf(x.g); return '<td style="text-align:right;font-weight:600">' + x.f(v) + '</td>';
    }).join("") + '</tr></tfoot>';

  // Filtro global — reutilizável após re-render
  window.filtro8050 = function(grupo) {
    document.querySelectorAll(".filtro8050-btn").forEach(function(b) {
      var active = b.dataset.grupo === grupo;
      b.style.background   = active ? "var(--accent,#4A6FA5)" : "transparent";
      b.style.color        = active ? "#fff" : "var(--text-primary,#222)";
      b.style.borderColor  = active ? "var(--accent,#4A6FA5)" : "#64748b";
    });
    var table = document.getElementById("tabela8050");
    if (!table) return;
    table.querySelectorAll("tr[data-grupo]").forEach(function(tr) {
      tr.style.display = (grupo === "todos" || tr.dataset.grupo === grupo) ? "" : "none";
    });
    table.querySelectorAll("tr.grupo-header").forEach(function(tr) {
      tr.style.display = (grupo === "todos" || grupo === tr.dataset.grupoHeader) ? "" : "none";
    });
    // Médias (tfoot) só fazem sentido para valores absolutos (grupo A)
    var tfoot = document.getElementById("tabela8050-tfoot");
    if (tfoot) tfoot.style.display = (grupo === "todos" || grupo === "A") ? "" : "none";
  };

  var filtroBtns = '<div id="filtro8050" style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">' +
    [
      { g: "todos", label: "Todos",                  active: true  },
      { g: "A",     label: "A — Valores absolutos",  active: false },
      { g: "B",     label: "B — Taxas de execução",  active: false },
      { g: "C",     label: "C — Estrutura da despesa", active: false },
      { g: "D",     label: "D — Fontes de recursos", active: false },
    ].map(function(item) {
      var bg   = item.active ? "var(--accent,#4A6FA5)" : "transparent";
      var col  = item.active ? "#fff" : "var(--text-primary,#222)";
      var bord = item.active ? "var(--accent,#4A6FA5)" : "#64748b";
      return '<button class="filtro8050-btn" data-grupo="' + item.g +
        '" onclick="window.filtro8050(\'' + item.g + '\')" style="padding:5px 14px;border-radius:20px;border:1px solid ' +
        bord + ';background:' + bg + ';color:' + col + ';font-size:0.82rem;cursor:pointer;">' + item.label + '</button>';
    }).join("") + '</div>';

  return '<div class="table-wrap" style="overflow-x:auto">' +
    '<h3>Execução Orçamentária — Relatório da Despesa 8050</h3>' +
    '<p class="card-subtitle">IEES ordenadas por Liquidado (maior → menor) · Verde = acima da média · Vermelho = abaixo</p>' +
    '<p style="font-size:0.82rem;color:var(--text-secondary,#666);margin:6px 0 4px 0;line-height:1.55;">Tabela comparativa das 7 universidades estaduais paranaenses com dados de execução orçamentária organizados em quatro grupos: <strong>A — Valores absolutos</strong> (dotação, empenho, liquidação e pagamento em R$ milhões), <strong>B — Taxas de execução</strong> (eficiência do ciclo orçamentário), <strong>C — Estrutura da despesa</strong> (composição por natureza de gasto) e <strong>D — Fontes de recursos</strong> (origem dos recursos financeiros).</p>' +
    '<p style="font-size:0.80rem;color:var(--text-secondary,#777);margin:0 0 12px 0;"><strong>Fonte:</strong> Relatório da Despesa 8050 — SETI / Secretaria de Estado da Fazenda do Paraná (SEFA). Exercício 2024. Valores em R$ milhões (grupo A) e percentual do orçamento atualizado (grupos B, C e D).</p>' +
    filtroBtns +
    '<table id="tabela8050" class="data-table" style="min-width:600px">' + thead + avgRow + tbody + '</table></div>';
}

// ─────────────────────────────────────────────────────────────────────────────
// SEÇÃO 3 — Evolução 2024–2026 (SVG dual-axis: R$M esq. / % dir.)
// ─────────────────────────────────────────────────────────────────────────────
function renderOrcEvolucao(c) {
  var ANOS = ["2024", "2025", "2026"];
  var FILTER = state.orcEvolucaoFilter || new Set(_ORC_IES_PR);
  var IES_COLORS = {
    UEL:"#1f72b8", UEM:"#16875d", UEPG:"#c07000",
    UNIOESTE:"#9b3dc8", UNICENTRO:"#c43f3a", UENP:"#2e6da4", UNESPAR:"#0e7490"
  };

  // Checkboxes de filtro IES
  var checkHtml = _ORC_IES_PR.map(function(sig) {
    var chk = FILTER.has(sig) ? " checked" : "";
    var col = IES_COLORS[sig] || "#666";
    return '<label style="margin-right:14px;cursor:pointer;display:inline-flex;align-items:center;gap:5px;font-size:12px">' +
           '<input type="checkbox"' + chk + ' onchange="toggleOrcEvolucaoIES(\'' + sig + '\')">' +
           '<span style="display:inline-block;width:18px;height:3px;background:' + col + ';border-radius:2px"></span>' +
           '<strong>' + sig + '</strong></label>';
  }).join("");

  var selectedIES = _ORC_IES_PR.filter(function(s) { return FILTER.has(s); });
  if (!selectedIES.length) {
    return '<article class="visual-card"><div class="visual-card-header"><div>' +
           '<h3>Evolução Orçamentária 2024–2026</h3></div></div>' +
           '<div style="padding:8px 0 4px">' + checkHtml + '</div>' +
           '<div class="empty-state" style="padding:16px 0">Selecione ao menos uma IEES acima.</div></article>';
  }

  // Coleta dados dos 3 anos por sigla via getRealIndicators (não acessa DATA diretamente)
  var DATA_YEARS = {};
  selectedIES.forEach(function(sig) {
    DATA_YEARS[sig] = {};
    ANOS.forEach(function(yr) {
      var rc = _rc8050(sig, yr);
      DATA_YEARS[sig][yr] = {
        orc:   rc.orcamento_atualizado != null ? rc.orcamento_atualizado : null,
        liq:   rc.liquidado            != null ? rc.liquidado            : null,
        txLiq: rc.tx_liquidacao        != null ? rc.tx_liquidacao        : null,
      };
    });
  });

  // SVG layout
  var W = 620, H = 300, PL = 70, PR = 60, PT = 20, PB = 44;
  var CW = W - PL - PR, CH = H - PT - PB;
  var xPos = ANOS.map(function(_, i) { return PL + i * (CW / (ANOS.length - 1)); });

  // Escala Y esquerda (R$M)
  var allRm = [];
  selectedIES.forEach(function(s) {
    ANOS.forEach(function(yr) {
      var d = DATA_YEARS[s][yr];
      if (d.orc != null) allRm.push(d.orc);
      if (d.liq != null) allRm.push(d.liq);
    });
  });
  var maxRm = allRm.length ? Math.ceil(Math.max.apply(null, allRm) * 1.1 / 100) * 100 : 1000;
  var sy = function(v) { return PT + (1 - v / maxRm) * CH; };

  // Escala Y direita (%)
  var syR = function(v) { return PT + (1 - v / 100) * CH; };

  // Grid lines
  var grid = "";
  for (var gi = 0; gi <= 4; gi++) {
    var gy = PT + gi * (CH / 4);
    grid += '<line x1="' + PL + '" y1="' + gy.toFixed(1) + '" x2="' + (W-PR) + '" y2="' + gy.toFixed(1) + '" stroke="#e5e7eb" stroke-width="1"/>';
  }

  // Y labels left
  var yLabL = "";
  for (var li = 0; li <= 4; li++) {
    var lv = maxRm * (1 - li / 4);
    var ly = PT + li * (CH / 4);
    yLabL += '<text x="' + (PL-5).toFixed(1) + '" y="' + (ly+4).toFixed(1) + '" text-anchor="end" fill="#6d7a8a" font-size="9.5">R$' + lv.toFixed(0) + 'M</text>';
  }

  // Y labels right
  var yLabR = "";
  for (var ri = 0; ri <= 4; ri++) {
    var rv = 100 * (1 - ri / 4);
    var ry = PT + ri * (CH / 4);
    yLabR += '<text x="' + (W-PR+5).toFixed(1) + '" y="' + (ry+4).toFixed(1) + '" text-anchor="start" fill="#9ca3af" font-size="9.5">' + rv.toFixed(0) + '%</text>';
  }

  // X axis labels
  var xLab = "";
  var XLAB = ["2024", "2025", "2026 (parcial)"];
  ANOS.forEach(function(yr, i) {
    var px = xPos[i].toFixed(1);
    xLab += '<line x1="' + px + '" y1="' + PT + '" x2="' + px + '" y2="' + (H-PB) + '" stroke="#e5e7eb" stroke-width="1"/>';
    xLab += '<text x="' + px + '" y="' + (H-PB+16).toFixed(1) + '" text-anchor="middle" fill="#374151" font-size="11">' + XLAB[i] + '</text>';
  });

  // Lines per IES
  var linesHtml = "";
  selectedIES.forEach(function(sig) {
    var col = IES_COLORS[sig] || "#555";
    var dYear = DATA_YEARS[sig];

    // Orçamento (solid, full opacity)
    var orcPts = ANOS.map(function(yr, i) {
      var v = dYear[yr].orc; return v != null ? xPos[i].toFixed(1) + "," + sy(v).toFixed(1) : null;
    }).filter(Boolean);
    if (orcPts.length >= 2) linesHtml += '<polyline points="' + orcPts.join(" ") + '" fill="none" stroke="' + col + '" stroke-width="2.5" stroke-linejoin="round"/>';
    ANOS.forEach(function(yr, i) {
      var v = dYear[yr].orc; if (v == null) return;
      linesHtml += '<circle cx="' + xPos[i].toFixed(1) + '" cy="' + sy(v).toFixed(1) + '" r="5" fill="' + col + '" stroke="white" stroke-width="1.5"><title>' + sig + ' ' + yr + ': Orç. R$' + v.toFixed(1) + 'M</title></circle>';
    });

    // Liquidado (dashed, same color slightly transparent)
    var liqPts = ANOS.map(function(yr, i) {
      var v = dYear[yr].liq; return v != null ? xPos[i].toFixed(1) + "," + sy(v).toFixed(1) : null;
    }).filter(Boolean);
    if (liqPts.length >= 2) linesHtml += '<polyline points="' + liqPts.join(" ") + '" fill="none" stroke="' + col + '" stroke-width="1.8" stroke-dasharray="7,4" stroke-linejoin="round" opacity="0.8"/>';
    ANOS.forEach(function(yr, i) {
      var v = dYear[yr].liq; if (v == null) return;
      linesHtml += '<rect x="' + (xPos[i]-4).toFixed(1) + '" y="' + (sy(v)-4).toFixed(1) + '" width="8" height="8" fill="' + col + '" stroke="white" stroke-width="1.5" opacity="0.8"><title>' + sig + ' ' + yr + ': Liq. R$' + v.toFixed(1) + 'M</title></rect>';
    });

    // Tx Liquidação (dotted, right axis, lighter)
    var txPts = ANOS.map(function(yr, i) {
      var v = dYear[yr].txLiq; return v != null ? xPos[i].toFixed(1) + "," + syR(v).toFixed(1) : null;
    }).filter(Boolean);
    if (txPts.length >= 2) linesHtml += '<polyline points="' + txPts.join(" ") + '" fill="none" stroke="' + col + '" stroke-width="1.2" stroke-dasharray="2,4" stroke-linejoin="round" opacity="0.6"/>';
    ANOS.forEach(function(yr, i) {
      var v = dYear[yr].txLiq; if (v == null) return;
      linesHtml += '<polygon points="' + xPos[i].toFixed(1) + ',' + (syR(v)-5).toFixed(1) + ' ' + (xPos[i]+4.5).toFixed(1) + ',' + (syR(v)+3).toFixed(1) + ' ' + (xPos[i]-4.5).toFixed(1) + ',' + (syR(v)+3).toFixed(1) + '" fill="' + col + '" opacity="0.6"><title>' + sig + ' ' + yr + ': Tx.Liq. ' + v.toFixed(1) + '%</title></polygon>';
    });
  });

  // Axes
  var axes = '<line x1="' + PL + '" y1="' + PT + '" x2="' + PL + '" y2="' + (H-PB) + '" stroke="#9ca3af" stroke-width="1.5"/>' +
             '<line x1="' + (W-PR) + '" y1="' + PT + '" x2="' + (W-PR) + '" y2="' + (H-PB) + '" stroke="#c0c8d6" stroke-width="1" stroke-dasharray="3,2"/>' +
             '<line x1="' + PL + '" y1="' + (H-PB) + '" x2="' + (W-PR) + '" y2="' + (H-PB) + '" stroke="#9ca3af" stroke-width="1.5"/>';

  // Axis titles
  var axisTitles = '<text x="' + (PL-44).toFixed(1) + '" y="' + (PT+CH/2).toFixed(1) + '" text-anchor="middle" fill="#374151" font-size="10" transform="rotate(-90 ' + (PL-44).toFixed(1) + ' ' + (PT+CH/2).toFixed(1) + ')">← R$ Milhões</text>' +
                   '<text x="' + (W-PR+48).toFixed(1) + '" y="' + (PT+CH/2).toFixed(1) + '" text-anchor="middle" fill="#9ca3af" font-size="10" transform="rotate(90 ' + (W-PR+48).toFixed(1) + ' ' + (PT+CH/2).toFixed(1) + ')">% Liquidação →</text>';

  // Legend (styles)
  var legendY = H - 4;
  var legend = '<g transform="translate(' + PL + ',' + legendY + ')" font-size="9.5" fill="#374151">' +
               '<line x1="0" y1="-5" x2="16" y2="-5" stroke="#666" stroke-width="2.5"/><text x="19" y="-1">Orç. Atualizado (eixo esq.)</text>' +
               '<g transform="translate(145,0)"><line x1="0" y1="-5" x2="16" y2="-5" stroke="#666" stroke-width="1.8" stroke-dasharray="7,4"/><text x="19" y="-1">Liquidado (eixo esq.)</text></g>' +
               '<g transform="translate(270,0)"><line x1="0" y1="-5" x2="16" y2="-5" stroke="#999" stroke-width="1.2" stroke-dasharray="2,4"/><text x="19" y="-1" fill="#9ca3af">Tx. Liquidação % (eixo dir.)</text></g>' +
               '</g>';

  return '<article class="visual-card">' +
         '<div class="visual-card-header"><div>' +
         '<h3>Evolução Orçamentária 2024–2026</h3>' +
         '<p class="card-subtitle">Orçamento Atualizado, Liquidado (eixo esq.) e Taxa de Liquidação % (eixo dir.) · Fonte: Relatório da Despesa 8050</p>' +
         '</div></div>' +
         '<div style="margin:6px 0 10px;line-height:1.8">' + checkHtml +
         '<button onclick="window.limparOrcEvolucao()" style="margin-left:12px;padding:3px 12px;border-radius:14px;border:1px solid #94a3b8;background:transparent;color:var(--text-secondary,#666);font-size:0.80rem;cursor:pointer;vertical-align:middle;" title="Desselecionar todas as IES">Limpar</button></div>' +
         '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="display:block;overflow:visible;font-family:DM Sans,sans-serif">' +
         grid + axes + axisTitles + xLab + yLabL + yLabR + linesHtml + legend +
         '</svg>' +
         '<p class="card-subtitle" style="margin-top:4px;font-size:11px">2026 = Dados parciais do exercício em curso · Clique nos checkboxes para selecionar ou desselecionar IES</p>' +
         '</article>';
}

// ── Dispatcher nominal da aba 8 (reutilizado pela aba 9) ─────────────────────
function budget8050Block(title, c) {
  if (title === "Avaliação SELO-PR") return renderSeloBlock(c);
  if (title === "Composição por Fonte de Despesa") return renderComposicaoFontesBlock(c);
  if (title === "Custo por Resultado (8050)") return renderOrcCustoPorResultado(efficiencyRows(c));
  if (title === "Execução Orçamentária 8050") return renderOrcExecucao(efficiencyRows(c));
  if (title === "Evolução 2024–2026") return renderOrcEvolucao(c);
  if (title === "Comparador de Eficiência") return renderEficienciaComparador(c);
  return null;
}
window.budget8050Block = budget8050Block;
// efficiencyBlock (base) é definido em painel-aba9-desempenho.js, que delega
// para window.budget8050Block — não há patch direto aqui.

// ── fim ABA 8: Orçamentária (dados reais 8050) ───────────────────────────────

// ── estado do scatter ────────────────────────────────────────────────────────
state.tab8ScatterY = state.tab8ScatterY || "occupancy";

// ── novos helpers de custo ───────────────────────────────────────────────────
function costPerPg(u) {
  return (u.pg > 0) ? safeDivide(u.budget * 1e6, u.pg) : null;
}
function costPerPgTop(u) {
  return (u.pgTop > 0) ? safeDivide(u.budget * 1e6, u.pgTop) : null;
}
// ── opções do eixo Y do scatter ──────────────────────────────────────────────
var TAB8_SCATTER_Y_OPTIONS = {
  occupancy:  { label: "Taxa de ocupação de vagas",  get: u => u.occupancy,   fmt: formatPercent },
  completion: { label: "Taxa de conclusão",          get: u => u.completion,  fmt: formatPercent },
  employment: { label: "Inserção profissional (PR)", get: u => u.employment,  fmt: formatPercent },
  capes:      { label: "Conceito CAPES médio",       get: u => u.capes,       fmt: v => Number(v || 0).toFixed(1).replace(".", ",") + " pts" },
  doctors:    { label: "% Docentes c/ doutorado",   get: u => u.doctors,     fmt: formatPercent },
};

window.setTab8ScatterY = function(key) {
  if (TAB8_SCATTER_Y_OPTIONS[key]) state.tab8ScatterY = key;
  render();
};

// ── Seção 1 — Custo por Resultado ───────────────────────────────────────────
function renderTab8CostCards(rows) {
  if (!rows.length) return `<div class="empty-state">Sem dados para o recorte selecionado.</div>`;

  const COST_INDS = [
    { label: "Custo por aluno",                code: "IND-81", get: costPerStudent,         sub: "orçamento liquidado × 1M / estudantes matriculados" },
    { label: "Custo por graduado",             code: "IND-82", get: costPerGraduate,        sub: "orçamento liquidado × 1M / concluintes" },
    { label: "Custo por vaga ocupada",         code: "IND-83", get: costPerOccupiedVacancy, sub: "orçamento liquidado × 1M / (vagas × ocupação%)" },
    { label: "Custo por egresso inserido",     code: "IND-84", get: costPerEmployed,        sub: "orçamento liquidado × 1M / (graduados × inserção%)" },
    { label: "Custo por programa PG",          code: "—",      get: costPerPg,              sub: "orçamento liquidado × 1M / programas de pós-graduação" },
    { label: "Custo por programa PG nota ≥5", code: "—",      get: costPerPgTop,           sub: "orçamento liquidado × 1M / programas CAPES 5–7" },
  ];

  function costCardHtml(ind) {
    const valid = rows.filter(u => isValidNumber(ind.get(u)));
    if (!valid.length) {
      return `<article class="visual-card"><span class="indicator-code">${ind.code}</span><h3>${ind.label}</h3><p class="card-subtitle">${ind.sub}</p><div class="empty-state" style="font-size:12px;padding:10px 0">Dados insuficientes no recorte selecionado.</div></article>`;
    }
    const sorted = [...valid].sort((a, b) => ind.get(a) - ind.get(b));
    const minV = ind.get(sorted[0]);
    const maxV = ind.get(sorted[sorted.length - 1]);
    const range = maxV - minV || 1;
    const barsHtml = sorted.map(u => {
      const v = ind.get(u);
      const pct = clamp(((v - minV) / range) * 80 + 10, 10, 96);
      const fillStyle = v <= minV + range * 0.33
        ? "background:linear-gradient(90deg,#0f6e56,#2fb47c)"
        : v >= minV + range * 0.66
        ? "background:linear-gradient(90deg,var(--color-danger,#dc2626),#e46a62)"
        : "";
      return `<div class="bar-row"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${pct.toFixed(1)}%;${fillStyle}"></span></span><span class="bar-value">${formatCurrency(v)}</span></div>`;
    }).join("");
    return `<article class="visual-card"><span class="indicator-code">${ind.code}</span><h3>${ind.label}</h3><p class="card-subtitle">${ind.sub} · verde = mais eficiente</p><div class="bars">${barsHtml}</div></article>`;
  }

  const cards = COST_INDS.map(costCardHtml);
  return `<div class="chart-grid">${cards[0]}${cards[1]}</div>
<div class="chart-grid mt-14">${cards[2]}${cards[3]}</div>
<div class="chart-grid mt-14">${cards[4]}${cards[5]}</div>
<div class="mt-14">${cards[6]}</div>`;
}

// ── regressão linear simples ─────────────────────────────────────────────────
function tab8LinearReg(pairs) {
  const n = pairs.length;
  if (n < 3) return null;
  const mx = pairs.reduce((s, p) => s + p.x, 0) / n;
  const my = pairs.reduce((s, p) => s + p.y, 0) / n;
  const num = pairs.reduce((s, p) => s + (p.x - mx) * (p.y - my), 0);
  const den = pairs.reduce((s, p) => s + (p.x - mx) ** 2, 0);
  if (!den) return null;
  const slope = num / den;
  return { slope, intercept: my - slope * mx };
}

// ── Seção 2 — Scatter Orçamento × Desempenho ────────────────────────────────
function renderTab8Scatter(rows, c) {
  const yKey = state.tab8ScatterY || "occupancy";
  const yOpt = TAB8_SCATTER_Y_OPTIONS[yKey] || TAB8_SCATTER_Y_OPTIONS.occupancy;

  const selectHtml = `<select class="filter-inline-select" onchange="setTab8ScatterY(this.value)">${Object.entries(TAB8_SCATTER_Y_OPTIONS).map(([k, o]) => `<option value="${k}"${k === yKey ? " selected" : ""}>${o.label}</option>`).join("")}</select>`;
  const header = `<div class="visual-card-header"><div><h3>Orçamento × Desempenho</h3><p class="card-subtitle">Eixo X = custo por aluno · Eixo Y = ${yOpt.label} · linha tracejada = tendência linear</p></div><div style="display:flex;align-items:center;gap:6px"><span style="font-size:12px;color:var(--gray-500)">Eixo Y:</span>${selectHtml}</div></div>`;

  const valid = rows.filter(u => isValidNumber(costPerStudent(u)) && isValidNumber(yOpt.get(u)));
  if (valid.length < 2) return `<article class="visual-card">${header}<p class="card-subtitle" style="padding:16px 0">Dados insuficientes para o recorte selecionado.</p></article>`;

  const xs = valid.map(u => costPerStudent(u));
  const ys = valid.map(u => yOpt.get(u));
  const xMin = Math.min(...xs), xMax = Math.max(...xs);
  const yMin = Math.min(...ys), yMax = Math.max(...ys);
  const xPad = (xMax - xMin) * 0.1 || Math.abs(xMin) * 0.1 || 5000;
  const yPad = (yMax - yMin) * 0.1 || Math.abs(yMin) * 0.1 || 2;
  const x0 = xMin - xPad, x1 = xMax + xPad;
  const y0 = yMin - yPad, y1 = yMax + yPad;
  const xRange = x1 - x0 || 1, yRange = y1 - y0 || 1;

  // SVG layout
  const W = 580, H = 360, PL = 68, PR = 20, PT = 24, PB = 52;
  const CW = W - PL - PR, CH = H - PT - PB;
  const sx = x => PL + (x - x0) / xRange * CW;
  const sy = y => PT + (1 - (y - y0) / yRange) * CH;

  // Grid lines + tick labels
  let grid = "", xLabels = "", yLabels = "";
  const nTicks = 4;
  for (let i = 0; i <= nTicks; i++) {
    const xv = x0 + xRange * i / nTicks;
    const px = sx(xv).toFixed(1);
    grid += `<line x1="${px}" y1="${PT}" x2="${px}" y2="${H - PB}" stroke="#e5e7eb" stroke-width="1"/>`;
    const lab = formatCurrency(xv);
    xLabels += `<text x="${px}" y="${(H - PB + 18).toFixed(1)}" text-anchor="middle" fill="#6d7a8a" font-size="9.5">${lab.replace(/\s/g, "").slice(0, 12)}</text>`;
    const yv = y0 + yRange * i / nTicks;
    const py = sy(yv).toFixed(1);
    grid += `<line x1="${PL}" y1="${py}" x2="${W - PR}" y2="${py}" stroke="#e5e7eb" stroke-width="1"/>`;
    yLabels += `<text x="${(PL - 5).toFixed(1)}" y="${(Number(py) + 4).toFixed(1)}" text-anchor="end" fill="#6d7a8a" font-size="9.5">${yOpt.fmt(yv).slice(0, 8)}</text>`;
  }

  // Regression line
  const pairs = valid.map(u => ({ x: costPerStudent(u), y: yOpt.get(u) }));
  const reg = tab8LinearReg(pairs);
  let regSvg = "", rAnnotation = "";
  if (reg) {
    const ry0 = reg.slope * x0 + reg.intercept;
    const ry1 = reg.slope * x1 + reg.intercept;
    regSvg = `<line x1="${sx(x0).toFixed(1)}" y1="${sy(ry0).toFixed(1)}" x2="${sx(x1).toFixed(1)}" y2="${sy(ry1).toFixed(1)}" stroke="#1f72b8" stroke-width="2" stroke-dasharray="6,4" opacity="0.7"/>`;
    const r = pearsonCorrelation(pairs.map(p => p.x), pairs.map(p => p.y));
    if (r != null) {
      rAnnotation = `<text x="${(W - PR - 4).toFixed(1)}" y="${(PT + 14).toFixed(1)}" text-anchor="end" fill="#1f72b8" font-size="10.5" font-style="italic">r = ${r.toFixed(2).replace(".", ",")} · ${classifyCorrelation(r)}</text>`;
    }
  }

  // Data points
  const POINT_COLORS = ["#1f72b8","#16875d","#c07000","#9b3dc8","#c43f3a","#2e6da4","#0e7490"];
  const pointsSvg = valid.map((u, i) => {
    const cx = sx(costPerStudent(u)).toFixed(1);
    const cy = sy(yOpt.get(u)).toFixed(1);
    const col = POINT_COLORS[i % POINT_COLORS.length];
    const tip = `${u.sigla}: custo/aluno ${formatCurrency(costPerStudent(u))} | ${yOpt.label}: ${yOpt.fmt(yOpt.get(u))}`;
    return `<g role="img" aria-label="${tip}"><circle cx="${cx}" cy="${cy}" r="20" fill="${col}" opacity="0.88"/><text x="${cx}" y="${(Number(cy) + 4).toFixed(1)}" text-anchor="middle" fill="white" font-size="9.5" font-weight="700">${u.sigla}</text><title>${tip}</title></g>`;
  }).join("");

  // Correlation note
  const rVal = reg ? pearsonCorrelation(pairs.map(p => p.x), pairs.map(p => p.y)) : null;
  const corrNote = rVal != null
    ? `Correlação entre custo por aluno e ${yOpt.label}: <strong>${classifyCorrelation(rVal)}</strong> (r = ${rVal.toFixed(2).replace(".", ",")}). ${rVal < 0 ? "Direção inversa: maior custo está associado a menor desempenho." : "Direção positiva: maior custo está associado a maior desempenho."}`
    : "Selecione mais IEES no recorte para calcular correlação.";

  return `<article class="visual-card">${header}
<svg viewBox="0 0 ${W} ${H}" width="100%" style="display:block;overflow:visible" aria-label="Scatter: custo por aluno vs ${yOpt.label}">
  ${grid}
  <line x1="${PL}" y1="${PT}" x2="${PL}" y2="${H - PB}" stroke="#9ca3af" stroke-width="1.5"/>
  <line x1="${PL}" y1="${H - PB}" x2="${W - PR}" y2="${H - PB}" stroke="#9ca3af" stroke-width="1.5"/>
  ${xLabels}${yLabels}
  <text x="${(PL + CW / 2).toFixed(1)}" y="${(H - 4).toFixed(1)}" text-anchor="middle" fill="#374151" font-size="11">→ Custo por aluno (R$)</text>
  <text x="${(PL - 50).toFixed(1)}" y="${(PT + CH / 2).toFixed(1)}" text-anchor="middle" fill="#374151" font-size="11" transform="rotate(-90 ${(PL - 50).toFixed(1)} ${(PT + CH / 2).toFixed(1)})">↑ ${yOpt.label}</text>
  ${regSvg}${rAnnotation}
  ${pointsSvg}
</svg>
<p class="card-subtitle" style="margin-top:6px">${corrNote}</p>
</article>`;
}

// ── Comparador de Eficiência por IES ────────────────────────────────────────
var _COMP_IES_PR = ["UEL","UEM","UEPG","UNIOESTE","UNICENTRO","UENP","UNESPAR"];
var _compRows = null; // cache para update direto do DOM

if (!state.comparadorIES) state.comparadorIES = "UEL";

var _COMP_INDS = [
  { key: "occupancy",  label: "Taxa de ocupação de vagas",
    get: function(u) { return u.occupancy;  }, fmt: _fmtP, higher: true },
  { key: "completion", label: "Taxa de conclusão",
    get: function(u) { return u.completion; }, fmt: _fmtP, higher: true },
  { key: "employment", label: "Inserção profissional",
    get: function(u) { return u.employment; }, fmt: _fmtP, higher: true },
  { key: "capes",      label: "Conceito CAPES médio",
    get: function(u) { return u.capes; },
    fmt: function(v) { return (v != null && isFinite(v)) ? v.toFixed(2).replace(".",",") : "—"; },
    higher: true },
  { key: "doctors",    label: "% Docentes doutores",
    get: function(u) { return u.doctors; }, fmt: _fmtP, higher: true },
  { key: "costGrad",   label: "Custo por graduado (R$)",
    get: function(u) {
      return (u.liquidado > 0 && u.graduates > 0) ? u.liquidado * 1e6 / u.graduates : null;
    },
    fmt: function(v) { return (v != null && isFinite(v)) ? formatCurrency(v) : "—"; },
    higher: false },
];

window.setComparadorIES = function(sigla) {
  if (!_COMP_IES_PR.includes(sigla)) return;
  state.comparadorIES = sigla;
  var inner = document.getElementById("eficienciaComparadorInner");
  if (inner && _compRows) {
    inner.innerHTML = _buildComparadorInner(_compRows, sigla);
    if (typeof window._injectAnnotations === "function") window._injectAnnotations();
  } else {
    render();
  }
};

function _compAvg(arr) {
  var valid = arr.filter(function(v) { return v != null && isFinite(v); });
  return valid.length ? valid.reduce(function(s, v) { return s + v; }, 0) / valid.length : null;
}

function _buildComparadorInner(rows, sigla) {
  var ref    = rows.find(function(u) { return u.sigla === sigla; });
  var others = rows.filter(function(u) { return u.sigla !== sigla; });
  if (!ref) return '<div class="empty-state">IES não encontrada no recorte.</div>';

  // ── Componente 2 — contexto orçamentário ─────────────────────────────────
  function cpsOf(u) {
    return (u.liquidado > 0 && u.students > 0) ? u.liquidado * 1e6 / u.students : null;
  }
  function diffRow(refVal, avgVal, lowerIsBetter) {
    if (refVal == null || avgVal == null || avgVal === 0) return "";
    var pct = (refVal - avgVal) / Math.abs(avgVal) * 100;
    var abs = Math.abs(pct).toFixed(1).replace(".",",");
    if (Math.abs(pct) < 2) return '<div style="font-size:11px;color:var(--gray-500)">≈ na média</div>';
    var better = lowerIsBetter ? pct < 0 : pct > 0;
    var arrow  = pct > 0 ? "▲" : "▼";
    var txt;
    if (lowerIsBetter) txt = pct < 0 ? arrow+" "+abs+"% mais barata" : arrow+" "+abs+"% mais cara";
    else               txt = pct > 0 ? arrow+" "+abs+"% acima" : arrow+" "+abs+"% abaixo";
    var color = better ? "var(--color-success,#16a34a)" : "var(--color-danger,#dc2626)";
    return '<div style="font-size:11px;font-weight:600;color:'+color+'">'+txt+'</div>';
  }
  function ctxBox(title, refFmt, avgFmt, diffHtml) {
    return '<div style="padding:12px;border:1px solid var(--gray-200);border-radius:10px;background:#fbfdff">'+
      '<div style="font-size:11px;font-weight:700;color:var(--gray-600);text-transform:uppercase;margin-bottom:6px">'+title+'</div>'+
      '<div style="font-size:16px;font-weight:800;color:var(--gray-950)">'+refFmt+'</div>'+
      diffHtml+
      '<div style="font-size:11px;color:var(--gray-500);margin-top:4px">Média das outras 6: '+avgFmt+'</div>'+
      '</div>';
  }
  var cpsRef = cpsOf(ref);
  var cpsAvg = _compAvg(others.map(cpsOf));
  var liqAvg = _compAvg(others.map(function(u) { return u.liquidado; }));
  var empAvg = _compAvg(others.map(function(u) { return u.empenhado; }));
  var pagAvg = _compAvg(others.map(function(u) { return u.pago; }));

  var ctxGrid = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">'+
    ctxBox("Empenhado (R$ M)",
      ref.empenhado != null ? _fmtM(ref.empenhado) : "—",
      empAvg != null ? _fmtM(empAvg) : "—",
      diffRow(ref.empenhado, empAvg, false))+
    ctxBox("Liquidado (R$ M)",
      ref.liquidado != null ? _fmtM(ref.liquidado) : "—",
      liqAvg != null ? _fmtM(liqAvg) : "—",
      diffRow(ref.liquidado, liqAvg, false))+
    ctxBox("Pago (R$ M)",
      ref.pago != null ? _fmtM(ref.pago) : "—",
      pagAvg != null ? _fmtM(pagAvg) : "—",
      diffRow(ref.pago, pagAvg, false))+
    '</div>';

  // ── Componente 3 — tabela de indicadores ─────────────────────────────────
  function rankAll(vals, higher) {
    var idx = vals.map(function(v,i){return{v:v,i:i};})
                  .filter(function(x){return x.v!=null&&isFinite(x.v);});
    idx.sort(function(a,b){return higher ? b.v-a.v : a.v-b.v;});
    var out = vals.map(function(){return null;});
    idx.forEach(function(x,r){out[x.i]=r+1;});
    return out;
  }

  var _lbl = '<span style="display:block;font-size:0.73rem;font-weight:700;letter-spacing:.04em;">';
  var _sub = '<span style="display:block;font-size:0.68rem;font-weight:400;color:var(--text-secondary,#888);text-transform:none;letter-spacing:0;margin-top:1px;">';
  var thead = '<thead><tr>'+
    '<th style="text-align:left;min-width:170px">'+_lbl+'INDICADOR</span></th>'+
    '<th style="text-align:right" title="Valor do indicador para a IES selecionada no filtro acima.">'+
      _lbl+sigla+'</span>'+_sub+'valor da IES</span></th>'+
    '<th style="text-align:right" title="Melhor valor registrado entre as 7 universidades estaduais do Paraná (UEL, UEM, UEPG, UNIOESTE, UNICENTRO, UENP e UNESPAR) para este indicador, no ano selecionado.&#10;Em indicadores onde maior é melhor (ex: taxa de conclusão), é o maior valor.&#10;Em indicadores onde menor é melhor (ex: custo por aluno), é o menor valor.">'+
      _lbl+'MELHOR — PR</span>'+_sub+'entre as 7 IEES ⓘ</span></th>'+
    '<th style="text-align:right" title="Média aritmética do indicador entre as 7 universidades estaduais do Paraná.&#10;Use como referência para saber se a IES selecionada está acima ou abaixo do sistema estadual.">'+
      _lbl+'MÉDIA — PR</span>'+_sub+'das 7 IEES ⓘ</span></th>'+
    '<th style="text-align:right" title="Pior valor registrado entre as 7 universidades estaduais do Paraná para este indicador, no ano selecionado.&#10;Indica o limite inferior do sistema estadual — útil para contextualizar o quanto a IES selecionada se distancia do pior desempenho.">'+
      _lbl+'PIOR — PR</span>'+_sub+'entre as 7 IEES ⓘ</span></th>'+
    '<th style="text-align:right" title="Posição da IES selecionada no ranking das 7 IEES paranaenses para este indicador.&#10;1º de 7 = melhor posição no grupo. A posição considera a direção do indicador (maior ou menor é melhor).">'+
      _lbl+'POSIÇÃO</span>'+_sub+'no ranking PR ⓘ</span></th>'+
    '<th style="text-align:left;min-width:130px" title="Avaliação qualitativa em relação à média das 7 IEES paranaenses:&#10;✅ Acima da média — valor melhor que a média do grupo (diferença > 5%)&#10;⚠️ Na média — valor próximo à média (diferença ≤ 5%)&#10;❌ Abaixo da média — valor pior que a média do grupo (diferença > 5%)">'+
      _lbl+'STATUS</span>'+_sub+'vs. média PR ⓘ</span></th>'+
    '</tr></thead>';

  var refIdx = rows.indexOf(ref);
  var tbody = '<tbody>'+_COMP_INDS.map(function(ind) {
    var allVals = rows.map(function(u){return ind.get(u);});
    var refVal  = ind.get(ref);
    var valid   = allVals.filter(function(v){return v!=null&&isFinite(v);});
    var best    = valid.length ? (ind.higher ? Math.max.apply(null,valid) : Math.min.apply(null,valid)) : null;
    var worst   = valid.length ? (ind.higher ? Math.min.apply(null,valid) : Math.max.apply(null,valid)) : null;
    var avg7    = _compAvg(valid);
    var ranks   = rankAll(allVals, ind.higher);
    var refRank = ranks[refIdx];

    // Mini barra range [pior → melhor]
    var barPct = 0;
    if (refVal!=null && best!=null && worst!=null && best!==worst) {
      barPct = ind.higher
        ? clamp((refVal-worst)/(best-worst)*100, 0, 100)
        : clamp((worst-refVal)/(worst-best)*100, 0, 100);
    }
    var isGood = refVal!=null && avg7!=null && (ind.higher ? refVal>=avg7 : refVal<=avg7);
    var barColor = refVal!=null && avg7!=null ? (isGood ? "var(--color-success,#16a34a)" : "var(--color-danger,#dc2626)") : "#d9e1ec";
    var miniBar = '<div style="height:5px;background:#edf1f7;border-radius:3px;margin-top:4px">'+
      '<div style="height:100%;width:'+barPct.toFixed(1)+'%;background:'+barColor+';border-radius:3px"></div>'+
      '</div>';

    // Status
    var statusHtml = "—";
    if (refVal!=null && avg7!=null) {
      var relDiff = (refVal-avg7)/Math.abs(avg7||1)*100;
      var better  = ind.higher ? relDiff>0 : relDiff<0;
      var onAvg   = Math.abs(relDiff)<5;
      statusHtml = onAvg
        ? '<span style="color:#c07000">⚠️ Na média</span>'
        : better
          ? '<span style="color:var(--color-success,#16a34a)">✅ Acima da média</span>'
          : '<span style="color:var(--color-danger,#dc2626)">❌ Abaixo da média</span>';
    }

    // Posição (1º verde, 7º vermelho)
    var posHtml = refRank!=null
      ? '<span style="font-weight:700;color:'+(refRank===1?"var(--color-success,#16a34a)":refRank===rows.length?"var(--color-danger,#dc2626)":"inherit")+'">'+refRank+'º de '+rows.length+'</span>'
      : "—";

    return '<tr>'+
      '<td><strong>'+ind.label+'</strong></td>'+
      '<td style="text-align:right">'+(refVal!=null?ind.fmt(refVal):"—")+miniBar+'</td>'+
      '<td style="text-align:right">'+(best!=null?ind.fmt(best):"—")+'</td>'+
      '<td style="text-align:right">'+(avg7!=null?ind.fmt(avg7):"—")+'</td>'+
      '<td style="text-align:right">'+(worst!=null?ind.fmt(worst):"—")+'</td>'+
      '<td style="text-align:right">'+posHtml+'</td>'+
      '<td>'+statusHtml+'</td>'+
      '</tr>';
  }).join('')+'</tbody>';

  var explainer = '<p style="font-size:0.82rem;color:var(--text-secondary,#666);margin:0 0 10px 0;line-height:1.6;">A tabela abaixo compara a IES selecionada com as outras 6 universidades estaduais do Paraná. Cada linha mostra um indicador: o valor da IES escolhida, o melhor e o pior valor registrado entre as 7, a média do grupo e a posição no ranking. <strong>Universo de comparação: apenas as 7 IEES paranaenses (UEL, UEM, UEPG, UNIOESTE, UNICENTRO, UENP e UNESPAR).</strong></p>';
  var table = explainer+'<div style="overflow-x:auto"><table class="data-table">'+thead+tbody+'</table></div>';

  // ── Componente 4 — resumo textual ─────────────────────────────────────────
  var aboveNames = [], belowNames = [];
  _COMP_INDS.forEach(function(ind) {
    var rv  = ind.get(ref);
    var v7  = _compAvg(rows.map(function(u){return ind.get(u);}).filter(function(v){return v!=null&&isFinite(v);}));
    if (rv==null || v7==null) return;
    var rd = (rv-v7)/Math.abs(v7||1)*100;
    var better = ind.higher ? rd>0 : rd<0;
    if (Math.abs(rd)<5) return; // na média: não lista
    if (better) aboveNames.push(ind.label);
    else        belowNames.push(ind.label);
  });
  var n = aboveNames.length, total = _COMP_INDS.length;

  var cpsDiffTxt = "";
  if (cpsRef!=null && cpsAvg!=null && cpsAvg>0) {
    var cpsPct = (cpsRef-cpsAvg)/Math.abs(cpsAvg)*100;
    var cpsAbs = Math.abs(cpsPct).toFixed(1).replace(".",",");
    if (Math.abs(cpsPct)<2) cpsDiffTxt = "tem custo por aluno <strong>similar à média</strong> das demais IES-PR";
    else if (cpsPct<0)      cpsDiffTxt = "tem custo por aluno <strong>"+cpsAbs+"% mais baixo</strong> que a média das demais IES-PR";
    else                    cpsDiffTxt = "tem custo por aluno <strong>"+cpsAbs+"% mais alto</strong> que a média das demais IES-PR";
  } else {
    cpsDiffTxt = "não tem dados suficientes de custo por aluno para comparação";
  }

  var acimaPart = n===total
    ? "em <strong>todos os "+total+" indicadores</strong> avaliados"
    : n===0
    ? "em <strong>nenhum dos "+total+" indicadores</strong> avaliados"
    : "acima da média em <strong>"+n+" de "+total+" indicadores</strong>: "+aboveNames.join(", ");

  var abaixoPart = belowNames.length ? " Está abaixo da média em: "+belowNames.join(", ")+"." : "";

  var summary = '<div style="margin-top:14px;padding:12px 14px;border:1px solid var(--gray-200);border-radius:10px;background:#f8fafd">'+
    '<p style="font-size:13px;line-height:1.6;margin:0"><strong>'+sigla+'</strong> '+cpsDiffTxt+
    '. Está '+acimaPart+'.'+abaixoPart+'</p></div>';

  return ctxGrid + table + summary;
}

function renderEficienciaComparador(c) {
  var rows = efficiencyRows(c);
  _compRows = rows;

  // Garantir que a IES selecionada existe no recorte
  var sigla = state.comparadorIES;
  if (!rows.find(function(u) { return u.sigla === sigla; })) {
    sigla = rows.length ? rows[0].sigla : "UEL";
    state.comparadorIES = sigla;
  }

  var selHtml = '<select id="eficienciaComparadorSelect" onchange="setComparadorIES(this.value)">'+
    rows.map(function(u) {
      return '<option value="'+u.sigla+'"'+(u.sigla===sigla?' selected':'')+'>'+u.sigla+' — '+u.nome+'</option>';
    }).join("")+'</select>';

  return '<article class="visual-card">'+
    '<div class="visual-card-header">'+
    '<div><h3>Comparador de Eficiência por IES</h3>'+
    '<p class="card-subtitle">Escolha uma IES e veja em quais indicadores ela performa acima ou abaixo das demais, considerando seu nível de gasto.</p></div>'+
    '<div style="display:flex;align-items:center;gap:8px">'+
    '<span style="font-size:12px;color:var(--gray-500)">IES:</span>'+selHtml+
    '</div></div>'+
    '<div id="eficienciaComparadorInner">'+_buildComparadorInner(rows, sigla)+'</div>'+
    '</article>';
}

// ── Seção 4 — Execução Orçamentária ─────────────────────────────────────────
function renderTab8ExecutionCards(rows) {
  if (!rows.length) return `<div class="empty-state">Sem dados para o recorte selecionado.</div>`;

  const avg = get => {
    const vals = rows.map(get).filter(isValidNumber);
    return vals.length ? vals.reduce((s, v) => s + v, 0) / vals.length : null;
  };

  function execCard(title, value, subtitle, thGood, thWarn) {
    if (!isValidNumber(value)) return `<article class="score-card budget-score-card"><h3>${title}</h3><p class="card-subtitle">${subtitle}</p><div class="score-value">—</div></article>`;
    const badge = value >= thGood ? "adequado" : value >= thWarn ? "atenção" : "crítico";
    const badgeColor = badge === "adequado" ? "var(--color-success,#16a34a)" : badge === "atenção" ? "#c07000" : "var(--color-danger,#dc2626)";
    return `<article class="score-card budget-score-card">
<h3>${title}</h3>
<p class="card-subtitle">${subtitle}</p>
<div class="score-value">${formatPercent(value)}</div>
<div class="score-meter" style="margin-top:6px"><span style="width:${clamp(value, 0, 100)}%"></span></div>
<div style="margin-top:4px;font-size:11px;font-weight:600;color:${badgeColor}">${badge}</div>
</article>`;
  }

  return `<div class="score-grid" style="margin-bottom:16px">
${execCard("Execução orçamentária", avg(u => u.execution), "% empenho / orçamento atualizado — média do recorte · ref.: ≥ 90%", 90, 80)}
${execCard("Taxa de liquidação", avg(u => u.liquidation), "% liquidado / orçamento atualizado — média do recorte · ref.: ≥ 90%", 90, 80)}
${execCard("Participação de pessoal", avg(u => u.personnel), "% despesa pessoal / total liquidado — média do recorte", 100, 75)}
${execCard("Suplementação", avg(u => u.supplementation), "% crédito adicional / dotação inicial — média do recorte", 100, 50)}
</div>
<div class="chart-grid">
<article class="visual-card"><h3>Execução orçamentária por IEES</h3><p class="card-subtitle">% empenho / orçamento atualizado · referência: acima de 90% indica boa absorção</p>${bars(rows, u => u.execution, formatPercent)}</article>
<article class="visual-card"><h3>Taxa de liquidação por IEES</h3><p class="card-subtitle">% liquidado / orçamento atualizado · referência: ≥ 90%</p>${bars(rows, u => u.liquidation, formatPercent)}</article>
</div>
<div class="chart-grid mt-14">
<article class="visual-card"><h3>Participação de pessoal por IEES</h3><p class="card-subtitle">% despesa com pessoal no total do orçamento liquidado</p>${bars(rows, u => u.personnel, formatPercent)}</article>
<article class="visual-card"><h3>Suplementação por IEES</h3><p class="card-subtitle">% crédito adicional sobre dotação inicial · quanto maior, maior ajuste ao longo do exercício</p>${bars(rows, u => u.supplementation, formatPercent)}</article>
</div>`;
}

// ── [Substituído] Sessão anterior: blocos e patch antigos desativados ──────────
// Os blocos "Custo por Resultado", "Orçamento × Desempenho (Scatter)",
// "Placar de Eficiência" e "Execução Orçamentária (contexto)" foram
// removidos via filter() acima e substituídos pelos 3 novos blocos 8050.
// O patch tab8EfficiencyBlock foi substituído por orcamentariaBlock acima.

// ─────────────────────────────────────────────────────────────────────────────
// BLOCO 11 — Scatter: Orçamento × Desempenho
// Pergunta central: "Orçamento maior = melhor desempenho?"
// Eixo X: custo por aluno (liquidado real 8050)
// Eixo Y: indicador de desempenho selecionável
// Regressão linear, quadrantes interpretativos, tamanho ∝ alunos
// ─────────────────────────────────────────────────────────────────────────────

// Opções do eixo Y
var _SCATTER_Y_OPTS = {
  occupancy:  { label: "Taxa de ocupação de vagas (%)", get: function(u) { return u.occupancy;  }, fmt: _fmtP },
  completion: { label: "Taxa de conclusão (%)",         get: function(u) { return u.completion; }, fmt: _fmtP },
  employment: { label: "Egressos empregados (%)",       get: function(u) { return u.employment; }, fmt: _fmtP },
  capes:      { label: "Conceito CAPES médio",          get: function(u) { return u.capes;      }, fmt: function(v) { return (v != null && isFinite(v)) ? v.toFixed(1).replace(".", ",") + " pts" : "—"; } },
  doctors:    { label: "% Docentes doutores",           get: function(u) { return u.doctors;    }, fmt: _fmtP },
  costGrad:   { label: "Custo por graduado (R$)",       get: function(u) { return (u.liquidado > 0 && u.graduates > 0) ? u.liquidado * 1e6 / u.graduates : null; }, fmt: function(v) { return (v != null && isFinite(v)) ? formatCurrency(v) : "—"; } },
};

// Metadados de base de cálculo e fonte por indicador do eixo Y
var _SCATTER_Y_META = {
  occupancy:  {
    formula: "Ingressantes ÷ Vagas ofertadas × 100",
    fonte: "INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx / QT_ING ÷ QT_VG_TOTAL",
  },
  completion: {
    formula: "Concluintes ÷ Matrículas × 100",
    fonte: "INEP — Censo da Educação Superior / Base Cursos - Brasil.xlsx / QT_CONC ÷ QT_MAT",
  },
  employment: {
    formula: "Egressos com vínculo formal no PR ÷ Total de egressos da coorte × 100",
    fonte: "RAIS cruzada com registros de egressos das IEES / CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx",
  },
  capes: {
    formula: "Média dos conceitos CAPES dos programas de pós-graduação stricto sensu",
    fonte: "CAPES / Plataforma Sucupira — Base CAPES Pós-Graduação - Brasil.xlsx / CD_CONCEITO_CURSO",
  },
  doctors: {
    formula: "Docentes com doutorado ÷ Total de docentes × 100",
    fonte: "INEP — Censo da Educação Superior / Base IES - Brasil.xlsx / Proporção de docentes com doutorado",
  },
  costGrad: {
    formula: "Orçamento liquidado (R$) ÷ Concluintes",
    fonte: "SETI/PR 2024 (Despesa 8050) × INEP 2024 / QT_CONC",
  },
};

var _SCATTER_IES_COLORS = {
  UEL:"#1f72b8", UEM:"#16875d", UEPG:"#c07000",
  UNIOESTE:"#9b3dc8", UNICENTRO:"#c43f3a", UENP:"#2e6da4", UNESPAR:"#0e7490"
};

// Rows cache para update direto do SVG sem re-render completo
var _orcScatterRows = null;

if (!state.orcScatterY) state.orcScatterY = "occupancy";

window.setOrcScatterY = function(key) {
  if (!_SCATTER_Y_OPTS[key]) return;
  state.orcScatterY = key;
  var svgEl = document.getElementById("orcScatterSvg");
  if (svgEl && _orcScatterRows) {
    // Limpa e redesenha apenas o SVG — sem recriar o container externo
    svgEl.innerHTML = _buildOrcScatterInner(_orcScatterRows, key);
  } else {
    render();
  }
  // Atualiza bloco de base de cálculo e fonte
  var meta = _SCATTER_Y_META[key] || {};
  var opt  = _SCATTER_Y_OPTS[key] || {};
  var infoEl = document.getElementById("scatterYInfoText");
  if (infoEl) {
    infoEl.innerHTML = opt.label
      ? '<strong>' + opt.label + '</strong><br>' +
        '<span><em>Base de cálculo:</em> ' + (meta.formula || '—') + '</span><br>' +
        '<span><em>Fonte:</em> ' + (meta.fonte || '—') + '</span>'
      : '';
  }
};

// Constrói o conteúdo interno do SVG (reutilizado em render + update direto)
function _buildOrcScatterInner(rows, yKey) {
  var opt = _SCATTER_Y_OPTS[yKey] || _SCATTER_Y_OPTS.occupancy;

  // Pontos válidos
  var points = [];
  rows.forEach(function(u) {
    if (!u.liquidado || !u.students || u.students <= 0) return;
    var x = u.liquidado * 1e6 / u.students;
    var y = opt.get(u);
    if (x == null || y == null || !isFinite(x) || !isFinite(y)) return;
    points.push({ u: u, x: x, y: y });
  });

  // Layout SVG: margem esq=80 dir=50 topo=60 base=70 (conforme spec)
  var W = 640, H = 420, PL = 80, PR = 50, PT = 60, PB = 70;
  var CW = W - PL - PR, CH = H - PT - PB;

  if (!points.length) {
    return '<text x="' + (PL + CW / 2) + '" y="' + (PT + CH / 2) + '" text-anchor="middle" fill="#6d7a8a" font-size="14">Dados insuficientes para exibir o gráfico</text>';
  }

  // Extents com padding 12%
  var xs = points.map(function(p) { return p.x; });
  var ys = points.map(function(p) { return p.y; });
  var xMin = Math.min.apply(null, xs), xMax = Math.max.apply(null, xs);
  var yMin = Math.min.apply(null, ys), yMax = Math.max.apply(null, ys);
  var xPad = (xMax - xMin) * 0.12 || Math.abs(xMin) * 0.1 || 5000;
  var yPad = (yMax - yMin) * 0.12 || Math.abs(yMin) * 0.1 || 2;
  var x0 = xMin - xPad, x1 = xMax + xPad;
  var y0 = yMin - yPad, y1 = yMax + yPad;
  var xRange = x1 - x0 || 1, yRange = y1 - y0 || 1;

  var sx = function(v) { return PL + (v - x0) / xRange * CW; };
  var sy = function(v) { return PT + (1 - (v - y0) / yRange) * CH; };

  // Raio ∝ students: 6px (menor IES) a 18px (maior IES)
  var allS = points.map(function(p) { return p.u.students; });
  var minS = Math.min.apply(null, allS), maxS = Math.max.apply(null, allS);
  var getR = function(s) { return maxS === minS ? 12 : 6 + (s - minS) / (maxS - minS) * 12; };

  // Grade de fundo
  var grid = "";
  for (var gi = 0; gi <= 4; gi++) {
    var gy = (PT + gi * (CH / 4)).toFixed(1);
    grid += '<line x1="' + PL + '" y1="' + gy + '" x2="' + (PL + CW) + '" y2="' + gy + '" stroke="#e5e7eb" stroke-width="1"/>';
    var gx = (PL + gi * (CW / 4)).toFixed(1);
    grid += '<line x1="' + gx + '" y1="' + PT + '" x2="' + gx + '" y2="' + (PT + CH) + '" stroke="#e5e7eb" stroke-width="1"/>';
  }

  // Eixos principais
  var axes = '<line x1="' + PL + '" y1="' + PT + '" x2="' + PL + '" y2="' + (PT + CH) + '" stroke="#9ca3af" stroke-width="1.5"/>' +
             '<line x1="' + PL + '" y1="' + (PT + CH) + '" x2="' + (PL + CW) + '" y2="' + (PT + CH) + '" stroke="#9ca3af" stroke-width="1.5"/>';

  // Ticks eixo X (4 intervalos = 5 rótulos)
  var xLabels = "";
  for (var xi = 0; xi <= 4; xi++) {
    var xv = x0 + xRange * xi / 4;
    var xpx = sx(xv).toFixed(1);
    var xlab = formatCurrency(xv);
    xLabels += '<text x="' + xpx + '" y="' + (PT + CH + 18).toFixed(1) + '" text-anchor="middle" fill="#6d7a8a" font-size="9.5">' + xlab + '</text>';
  }
  xLabels += '<text x="' + (PL + CW / 2).toFixed(1) + '" y="' + (H - 6) + '" text-anchor="middle" fill="#374151" font-size="11" font-weight="600">Custo por aluno (R$) →</text>';

  // Ticks eixo Y (4 intervalos)
  var yLabels = "";
  for (var yi = 0; yi <= 4; yi++) {
    var yv = y0 + yRange * yi / 4;
    var ypx = sy(yv).toFixed(1);
    yLabels += '<text x="' + (PL - 6) + '" y="' + (parseFloat(ypx) + 4).toFixed(1) + '" text-anchor="end" fill="#6d7a8a" font-size="9.5">' + opt.fmt(yv) + '</text>';
  }
  yLabels += '<text x="' + (PL - 52) + '" y="' + (PT + CH / 2).toFixed(1) + '" text-anchor="middle" fill="#374151" font-size="11" font-weight="600" transform="rotate(-90 ' + (PL - 52) + ' ' + (PT + CH / 2).toFixed(1) + ')">↑ ' + opt.label + '</text>';

  var quadLines = "", quadLabels = "";

  // Regressão linear — fórmula exata conforme spec
  var regLine = "", r2Anno = "";
  if (points.length >= 3) {
    var n = points.length;
    var sumX  = points.reduce(function(a, p) { return a + p.x; }, 0);
    var sumY  = points.reduce(function(a, p) { return a + p.y; }, 0);
    var sumXY = points.reduce(function(a, p) { return a + p.x * p.y; }, 0);
    var sumX2 = points.reduce(function(a, p) { return a + p.x * p.x; }, 0);
    var denom = n * sumX2 - sumX * sumX;
    if (Math.abs(denom) > 1e-9) {
      var slope     = (n * sumXY - sumX * sumY) / denom;
      var intercept = (sumY - slope * sumX) / n;
      var yMean = sumY / n;
      var ssTot = points.reduce(function(a, p) { return a + Math.pow(p.y - yMean, 2); }, 0);
      var ssRes = points.reduce(function(a, p) { return a + Math.pow(p.y - (slope * p.x + intercept), 2); }, 0);
      var r2 = ssTot > 1e-12 ? 1 - ssRes / ssTot : 0;

      // Linha tracejada (extensão total do eixo X)
      regLine = '<line x1="' + PL + '" y1="' + sy(slope * x0 + intercept).toFixed(1) +
                '" x2="' + (PL + CW) + '" y2="' + sy(slope * x1 + intercept).toFixed(1) +
                '" stroke="#9ca3af" stroke-width="1.5" stroke-dasharray="7,5"/>';

      var r2Str = r2.toFixed(2).replace(".", ",");
      var corrTxt = r2 > 0.60 ? "(correlação forte)" : r2 >= 0.25 ? "(correlação moderada)" : "(correlação fraca)";
      r2Anno = '<text x="' + (PL + CW - 4) + '" y="' + (PT - 10) + '" text-anchor="end" fill="#6d7a8a" font-size="10.5">R² = ' + r2Str + ' ' + corrTxt + '</text>';
    }
  } else {
    r2Anno = '<text x="' + (PL + CW - 4) + '" y="' + (PT - 10) + '" text-anchor="end" fill="#b0b7c3" font-size="10">Dados insuficientes para calcular tendência</text>';
  }

  // Pontos de dados
  var ptsSvg = "";
  points.forEach(function(p) {
    var cx  = sx(p.x).toFixed(1);
    var cy  = sy(p.y).toFixed(1);
    var r   = getR(p.u.students).toFixed(1);
    var col = _SCATTER_IES_COLORS[p.u.sigla] || "#555";

    // Tooltip nativo SVG (multi-linha com \n)
    var tip = p.u.sigla + "\n" +
              "Custo/aluno: " + formatCurrency(p.x) + "\n" +
              opt.label + ": " + opt.fmt(p.y) + "\n" +
              "Liquidado: " + _fmtM(p.u.liquidado) + "\n" +
              "Alunos: " + formatNumber(p.u.students);

    // Label: à direita do ponto; se na borda direita (>80% da largura), à esquerda
    var nearRight = parseFloat(cx) > PL + CW * 0.80;
    var lx  = (parseFloat(cx) + (nearRight ? -(parseFloat(r) + 4) : (parseFloat(r) + 5))).toFixed(1);
    var ly  = (parseFloat(cy) + 4).toFixed(1);
    var anc = nearRight ? "end" : "start";

    ptsSvg +=
      '<g style="cursor:pointer">' +
      '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + col + '" opacity="0.85" stroke="white" stroke-width="1.5">' +
      '<title>' + tip + '</title></circle>' +
      '<text x="' + lx + '" y="' + ly + '" text-anchor="' + anc + '" fill="' + col + '" font-size="11" font-weight="700" pointer-events="none">' +
      p.u.sigla + '</text>' +
      '</g>';
  });

  return grid + quadLines + quadLabels + regLine + r2Anno + axes + xLabels + yLabels + ptsSvg;
}

// Função principal do bloco 11
function renderOrcScatter(c) {
  var rows = efficiencyRows(c);
  _orcScatterRows = rows;  // cache para update direto do SVG

  var yKey = state.orcScatterY || "occupancy";

  // Dropdown de seleção do eixo Y
  var selHtml = '<select id="orcScatterYSelect" class="filter-inline-select" onchange="setOrcScatterY(this.value)">' +
    Object.keys(_SCATTER_Y_OPTS).map(function(k) {
      return '<option value="' + k + '"' + (k === yKey ? " selected" : "") + '>' + _SCATTER_Y_OPTS[k].label + '</option>';
    }).join("") + '</select>';

  // Aviso de IES omitidas
  var omitted = rows.filter(function(u) { return !u.liquidado || !u.students || u.students <= 0; });
  var omitNote = omitted.length
    ? '<p class="card-subtitle" style="margin-top:4px;font-size:11px;color:var(--gray-500)">' +
      omitted.length + (omitted.length === 1 ? " IES omitida" : " IES omitidas") +
      ' por dados insuficientes (' + omitted.map(function(u) { return u.sigla; }).join(", ") + ')</p>'
    : "";

  var meta0 = _SCATTER_Y_META[yKey] || {};
  var opt0  = _SCATTER_Y_OPTS[yKey] || {};
  var yInfoInitial = opt0.label
    ? '<strong>' + opt0.label + '</strong><br>' +
      '<span><em>Base de cálculo:</em> ' + (meta0.formula || '—') + '</span><br>' +
      '<span><em>Fonte:</em> ' + (meta0.fonte || '—') + '</span>'
    : '';

  return '<article class="visual-card">' +
    '<div class="visual-card-header">' +
    '<div><h3>Orçamento × Desempenho</h3>' +
    '<p class="card-subtitle">Cada ponto = uma IEES · tamanho ∝ número de alunos · linha tracejada = tendência linear · ' + (hasOfficialQuadrants() ? "quadrantes oficiais" : "quadrantes indisponíveis na planilha") + '</p></div>' +
    '<div style="display:flex;align-items:center;gap:8px">' +
    '<span style="font-size:12px;color:var(--gray-500)">Eixo Y:</span>' + selHtml +
    '</div></div>' +
    '<div class="chart-explainer" style="margin-bottom:12px;padding:12px 16px;background:var(--surface-2,#f5f5f5);border-radius:8px;font-size:0.85rem;color:var(--text-secondary,#555);line-height:1.6;">' +
    '<strong style="display:block;margin-bottom:6px;color:var(--text-primary,#222);">O que este gráfico analisa?</strong>' +
    '<p style="margin:0 0 6px 0;">Este gráfico de dispersão relaciona o <strong>esforço orçamentário</strong> de cada IEES paranaense ' +
    '(eixo X — orçamento por aluno, em R$) com um <strong>indicador de desempenho ou eficiência</strong> ' +
    'selecionável (eixo Y). Cada ponto representa uma universidade; o tamanho do ponto é proporcional ' +
    'ao número de alunos matriculados. A linha tracejada indica a tendência linear entre as duas variáveis.</p>' +
    '<p style="margin:0;"><strong>Como interpretar:</strong> universidades no quadrante superior direito combinam alto orçamento ' +
    'por aluno com bom desempenho no indicador selecionado; no quadrante superior esquerdo, bom desempenho ' +
    'com menor gasto relativo.</p>' +
    '</div>' +
    '<svg id="orcScatterSvg" viewBox="0 0 640 420" width="100%" style="display:block;overflow:visible;font-family:DM Sans,sans-serif">' +
    _buildOrcScatterInner(rows, yKey) +
    '</svg>' + omitNote +
    '<div id="scatterYInfo" style="margin-top:10px;padding:10px 14px;background:var(--surface-2,#f0f4fa);border-left:3px solid var(--accent,#4A6FA5);border-radius:4px;font-size:0.82rem;color:var(--text-secondary,#555);line-height:1.55;">' +
    '<span id="scatterYInfoText">' + yInfoInitial + '</span>' +
    '</div>' +
    '</article>';
}

// ── Registra o bloco 11 e expõe o dispatcher para uso cruzado ─────────────────
if (!tabBlocks.performance.includes("Orçamento × Desempenho")) {
  tabBlocks.performance.unshift("Orçamento × Desempenho");
}

function budgetPerformanceScatterBlock(title, c) {
  if (title === "Orçamento × Desempenho") return renderOrcScatter(c);
  return null;
}
window.budgetPerformanceScatterBlock = budgetPerformanceScatterBlock;
// efficiencyBlock (base, em painel-aba9-desempenho.js) delega para
// window.budgetPerformanceScatterBlock — não há patch direto aqui.
