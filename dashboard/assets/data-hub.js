// ── Repositório global de dados reais ──────────────────────────────
// Estrutura: DATA[sigla].byYear[coorte] = { ind33, ind34, … ind42 }
const DATA = {};

// ── Estado global de carregamento ─────────────────────────────────
// Exposto globalmente para depuração e para a função de exportação.
const DATA_STATUS = {
  loadedBases:    [],   // [{ name, type, timestamp, rows, sourceBases }]
  failedBases:    [],   // [{ name, reason, timestamp }]
  workbooks:      [],   // [{ key, name, file, sheet, rows }]
  lastUpdated:    null,
};


// ── Hub interno de dados reais (v4) ───────────────────────────────
// Centraliza leitura de planilhas, normalização, tratamento,
// cálculo seguro e atualização do painel. Novas bases devem entrar
// neste catálogo, sem criar JS externo.
const SETI_DATASETS = {
  egressos: {
    key: "egressos",
    name: "Base Egressos – Paraná",
    file: "../data/Base Egressos - Paraná.xlsx",
    enabled: true,
    sheetAliases: ["base", "egressos", "base egressos", "base egressos parana"],
    columns: {
      coIes:  { index: 0, optional: true, aliases: ["co_ies", "coies", "cod_ies", "codigo_ies"] },
      sigla: { index: 1, aliases: ["sigla", "ies", "iees", "instituicao", "universidade"] },
      coorte: { index: 2, aliases: ["coorte", "ano coorte", "ano formacao", "ano conclusao", "ano"] },
      anoRais: { index: 3, optional: true, aliases: ["ano rais", "ano_rais", "rais ano"] },
      totalEgressos: { index: 4, aliases: ["total egressos", "egressos iees", "ind33"] },
      encontradosSul: { index: 5, optional: true, aliases: ["encontrados sul", "egressos sul", "ind34"] },
      encontradosPR: { index: 6, optional: true, aliases: ["encontrados pr", "egressos parana", "egressos pr", "ind36"] },
      encontradosPRCBO2: { index: 7, optional: true, aliases: ["encontrados pr cbo2", "aderentes cbo2", "ind38"] },
      encontradosCidadeSede: { index: 8, optional: true, aliases: ["cidade sede", "municipio sede", "ind41"] },
      salarioMedioCBO2: { index: 9, optional: true, aliases: ["salario medio cbo2", "salario", "media salarial", "ind40"] },
    },
  },
  // ── Catálogo de fontes: enabled=true carrega XLSX direto; enabled=false entra via JSON ──────
  cursos:        { key: "cursos",        name: "Base Cursos - Brasil",         file: "../data/Base Cursos - Brasil.xlsx",                    enabled: false }, // 72MB → JSON
  ies:           { key: "ies",           name: "Base IES - Brasil",            file: "../data/Base IES - Brasil.xlsx",                       enabled: true  },
  cnpq:          { key: "cnpq",          name: "Base CNPq - Brasil",           file: "../data/Base CNPq - Brasil.xlsx",                      enabled: false }, // 47MB → JSON
  capes:         { key: "capes",         name: "Base CAPES- Pós-Graduação",    file: "../data/Base CAPES- Pós-Graduação - Brasil.xlsx",       enabled: false }, // 250MB → JSON
  despesa8050:   { key: "despesa8050",   name: "Relatório da Despesa 8050",     file: "../data/Relatório da Despesa 8050 (2024 - 2026).xlsx", enabled: false }, // substituído por JSON pré-processado
  clusterizacao: { key: "clusterizacao", name: "Base de dados para clusterização", file: "../data/Base de dados para clusterização.xlsx",    enabled: false }, // legado: loader existe, mas o pipeline atual não usa
  docentes:      { key: "docentes",      name: "Base Docentes - Paraná",       file: "../data/Base Docentes - Paraná.xlsx",                  enabled: true  },
  rais:          { key: "rais",          name: "Base RAIS 2023-2024 - Paraná", file: "../data/Base RAIS - 2023 e 2024 - Paraná.xlsx",        enabled: true  },
  cbo2:          { key: "cbo2",          name: "CBO2 _ RAIS 2023-2024",        file: "../data/CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx",        enabled: true  },
  suplementacao: { key: "suplementacao", name: "Suplementação - Paraná",       file: "../data/Dados de Suplementação das Universidades - Paraná.xlsx", enabled: false }, // 23MB → JSON
  fundoParana:   { key: "fundoParana",   name: "Base Fundo Paraná",            file: "../data/Base Fundo Paraná - Paraná.xlsx",              enabled: true  },
};

const RUNTIME_SOURCE_BASES = {};
Object.values(SETI_DATASETS).forEach(function(dataset) {
  RUNTIME_SOURCE_BASES[dataset.name] = (dataset.file || "").replace(/^\.\.\/data\//, "");
});

function inferPrecomputedSourceBases(data) {
  const names = new Set();
  function visit(value) {
    if (value == null) return;
    if (typeof value === "string") {
      const firstPart = value.split(" / ")[0].trim();
      if (/\.xlsx$/i.test(firstPart)) names.add(firstPart);
      return;
    }
    if (Array.isArray(value)) {
      value.forEach(visit);
      return;
    }
    if (typeof value === "object") Object.values(value).forEach(visit);
  }
  visit(data && data.sources);
  if (data && (data.clusters || data.quartiRefs)) names.add("Estratificação_IES_Estaduais_BR.xlsx");
  return Array.from(names).sort(function(a, b) { return a.localeCompare(b, "pt-BR"); });
}

function getLoadedSourceNames() {
  return Array.from(new Set(DATA_STATUS.loadedBases.flatMap(function(b) {
    return b.sourceBases || [b.name];
  }))).sort(function(a, b) { return a.localeCompare(b, "pt-BR"); });
}

let DASHBOARD_STATUS_REPORTED = false;
function reportDashboardStatus() {
  if (DASHBOARD_STATUS_REPORTED) return;
  if (!DATA_STATUS.loadedBases.length && !DATA_STATUS.failedBases.length) return;
  DASHBOARD_STATUS_REPORTED = true;
  const sources = getLoadedSourceNames();
  const payload = JSON.stringify({
    status: DATA_STATUS.failedBases.length ? "Erro de carregamento" : "Dados reais carregados",
    sourceCount: sources.length,
    loadCount: DATA_STATUS.loadedBases.length,
    failedCount: DATA_STATUS.failedBases.length,
    sources,
    generated: DATA_STATUS.precomputedGenerated || null,
    year: DATA_STATUS.precomputedYear || null,
  });
  try {
    if (navigator.sendBeacon) {
      navigator.sendBeacon("/__dashboard_status", new Blob([payload], { type: "application/json" }));
      return;
    }
  } catch (err) {}
  try {
    fetch("/__dashboard_status", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: payload,
      keepalive: true,
    }).catch(function() {});
  } catch (err) {}
}

const REAL_DATA_CACHE = {};

function normalizeColumnName(value) {
  return String(value == null ? "" : value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "_")
    .replace(/^_+|_+$/g, "");
}

function parseLocaleNumber(value, fallback = null) {
  if (value == null || value === "") return fallback;
  if (typeof value === "number") return Number.isFinite(value) ? value : fallback;
  let text = String(value).trim();
  if (!text) return fallback;
  const negative = /^\(.*\)$/.test(text) || /^-/.test(text);
  text = text
    .replace(/[R$\s%]/g, "")
    .replace(/[()]/g, "")
    .replace(/\./g, "")
    .replace(",", ".")
    .replace(/[^0-9.-]/g, "");
  const number = Number(text);
  if (!Number.isFinite(number)) return fallback;
  return negative && number > 0 ? -number : number;
}

function parsePercentValue(value, fallback = null) {
  if (value == null || value === "") return fallback;
  const hasPercentSign = typeof value === "string" && value.includes("%");
  const number = parseLocaleNumber(value, fallback);
  if (number == null || !Number.isFinite(number)) return fallback;
  if (hasPercentSign || Math.abs(number) > 1) return number / 100;
  return number;
}

function safeDivide(numerator, denominator, fallback = null) {
  const n = parseLocaleNumber(numerator, null);
  const d = parseLocaleNumber(denominator, null);
  if (!Number.isFinite(n) || !Number.isFinite(d) || d === 0) return fallback;
  return n / d;
}

function formatPanelNumber(value, digits = 0) {
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits,
  }).format(Number(value) || 0);
}

function formatPanelPercent(value, digits = 1) {
  const number = Number(value) || 0;
  const percent = Math.abs(number) <= 1 ? number * 100 : number;
  return `${formatPanelNumber(percent, digits)}%`;
}

function formatPanelCurrency(value, digits = 0) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: digits,
  }).format(Number(value) || 0);
}

function normalizeTableHeader(headerRow) {
  const index = {};
  (headerRow || []).forEach(function(cell, i) {
    const key = normalizeColumnName(cell);
    if (key && index[key] == null) index[key] = i;
  });
  return index;
}

function resolveDatasetColumns(headerIndex, columnSpec) {
  const resolved = {};
  const missing = [];
  Object.entries(columnSpec || {}).forEach(function(entry) {
    const key = entry[0];
    const spec = entry[1] || {};
    const aliases = [key].concat(spec.aliases || []).map(normalizeColumnName);
    let found = null;
    for (let i = 0; i < aliases.length; i++) {
      if (headerIndex[aliases[i]] != null) { found = headerIndex[aliases[i]]; break; }
    }
    if (found == null && Number.isInteger(spec.index)) found = spec.index;
    resolved[key] = found;
    if (found == null && !spec.optional) missing.push(key);
  });
  if (missing.length) throw new Error("missing_columns:" + missing.join(","));
  return resolved;
}

function cellByColumn(row, columns, key, fallback = "") {
  const index = columns[key];
  if (index == null) return fallback;
  const value = row[index];
  return value == null || value === "" ? fallback : value;
}

function findWorksheet(workbook, sheetAliases) {
  const names = workbook.SheetNames || [];
  if (!names.length) throw new Error("missing_sheet");
  const wanted = (sheetAliases || []).map(normalizeColumnName);
  const sheetName = names.find(function(name) {
    return wanted.includes(normalizeColumnName(name));
  }) || names[0];
  return { sheetName, worksheet: workbook.Sheets[sheetName] };
}

async function loadWorkbookTable(datasetKey) {
  const dataset = SETI_DATASETS[datasetKey];
  if (!dataset) throw new Error("unknown_dataset:" + datasetKey);
  if (!window.XLSX) throw new Error("xlsx_missing");
  const response = await fetch(encodeURI(dataset.file));
  if (!response.ok) throw new Error("HTTP " + response.status);
  const buffer = await response.arrayBuffer();
  const workbook = XLSX.read(buffer, { type: "array" });
  const found = findWorksheet(workbook, dataset.sheetAliases);
  const rows = XLSX.utils.sheet_to_json(found.worksheet, { header: 1, defval: "" });
  if (rows.length < 2) throw new Error("no_valid_rows");
  const header = normalizeTableHeader(rows[0]);
  const columns = resolveDatasetColumns(header, dataset.columns);
  const table = { dataset, workbook, sheetName: found.sheetName, rows, header, columns, dataRows: rows.slice(1) };
  REAL_DATA_CACHE[datasetKey] = table;
  DATA_STATUS.workbooks.push({ key: datasetKey, name: dataset.name, file: dataset.file, sheet: found.sheetName, rows: rows.length - 1 });
  return table;
}

function upsertYearIndicators(sigla, year, indicators) {
  const cleanSigla = String(sigla || "").trim().toUpperCase();
  const cleanYear = String(year || "").trim();
  if (!cleanSigla || !cleanYear) return false;
  ensureData(cleanSigla);
  DATA[cleanSigla].byYear[cleanYear] = Object.assign({}, DATA[cleanSigla].byYear[cleanYear] || {}, indicators || {});
  if (indicators && indicators.v6_perfil) {
    DATA[cleanSigla].groups = DATA[cleanSigla].groups || {};
    DATA[cleanSigla].groups.v6 = indicators.v6_perfil;
  }
  return true;
}

function getRealIndicators(sigla, year) {
  const row = DATA[String(sigla || "").trim().toUpperCase()];
  if (!row || !row.byYear) return null;
  const wanted = String(year || "").trim();
  if (wanted && wanted !== "all" && row.byYear[wanted]) return row.byYear[wanted];
  const years = Object.keys(row.byYear).sort();
  return years.length ? row.byYear[years[years.length - 1]] : null;
}

function applyPanelFiltersToRows(rows, filterState) {
  const f = filterState || {};
  return (rows || []).filter(function(row) {
    return (f.university == null || f.university === "all" || (Array.isArray(f.university) && (f.university.includes(row.id) || f.university.includes(row.sigla)))) &&
      (f.region == null || f.region === "all" || row.region === f.region) &&
      (f.courseType == null || f.courseType === "all" || row.type === f.courseType) &&
      (f.municipality == null || f.municipality === "all" || row.municipality === f.municipality) &&
      (f.groupBy == null || f.groupLevel == null || f.groupLevel === "all" || (row.groups && row.groups[f.groupBy] === f.groupLevel));
  });
}

function refreshPanelFromData() {
  updateDataStatusUI();
  if (typeof render === "function" && typeof el !== "undefined" && el.yearFilter && el.tabContent) render();
}

const SETIDataHub = {
  datasets: SETI_DATASETS,
  cache: REAL_DATA_CACHE,
  normalizeColumnName,
  parseLocaleNumber,
  parsePercentValue,
  safeDivide,
  formatPanelNumber,
  formatPanelPercent,
  formatPanelCurrency,
  loadWorkbookTable,
  resolveDatasetColumns,
  cellByColumn,
  upsertYearIndicators,
  getRealIndicators,
  applyPanelFiltersToRows,
  refreshPanelFromData,
};
window.SETIDataHub = SETIDataHub;
window.SETI_DATA = DATA;
window.DATA_STATUS = DATA_STATUS;
window.getRealIndicators = getRealIndicators;

function ensureData(sigla) {
  if (!DATA[sigla]) DATA[sigla] = { byYear: {} };
  if (!DATA[sigla].byYear) DATA[sigla].byYear = {};
}

// ── Mensagens amigáveis por tipo de falha ──────────────────────────
function friendlyError(err) {
  if (!window.XLSX)
    return "Biblioteca SheetJS não carregada. Verifique a conexão com a internet.";
  const msg = String(err && err.message ? err.message : "");
  if (msg.includes("404") || msg.toLowerCase().includes("not found"))
    return "Arquivo não encontrado. Verifique se o xlsx está na mesma pasta do painel.";
  if (/^HTTP \d/.test(msg))
    return `Erro ao acessar o arquivo (${msg}). Verifique permissões ou servidor.`;
  if (msg.includes("no_valid_rows"))
    return "Nenhuma linha válida encontrada na planilha. Verifique o formato do arquivo.";
  if (msg.includes("missing_sheet"))
    return "Aba esperada não encontrada. O painel usará a primeira aba disponível ou fallback sintético.";
  if (msg.includes("missing_columns"))
    return "Planilha sem as colunas esperadas. Verifique o layout do arquivo xlsx.";
  return `Erro inesperado: ${msg || "motivo desconhecido"}.`;
}

// ── Registrar base carregada (real ou sintética) ───────────────────
function registerBase(name, type, rowCount, sourceBases) {
  const ts = new Date().toISOString();
  const inferredSources = sourceBases || (RUNTIME_SOURCE_BASES[name] ? [RUNTIME_SOURCE_BASES[name]] : [name]);
  DATA_STATUS.loadedBases.push({ name, type, timestamp: ts, rows: rowCount, sourceBases: inferredSources });
  DATA_STATUS.lastUpdated = ts;
  updateDataStatusUI();
}

function registerFailedBase(name, reason) {
  DATA_STATUS.failedBases.push({ name, reason, timestamp: new Date().toISOString() });
  updateDataStatusUI();
}

// ── Atualiza todos os elementos de UI que refletem o status ────────
function updateDataStatusUI() {
  const hasError     = DATA_STATUS.failedBases.length > 0;
  const loadedCount  = DATA_STATUS.loadedBases.length;
  const sourceNames  = getLoadedSourceNames();
  const sourceCount  = sourceNames.length;

  // Chip de status no cabeçalho
  const chip = document.getElementById("dataStatusChip");
  if (chip) {
    chip.className = "status-chip " +
      (hasError ? "status-chip--error" : "status-chip--real");
    chip.textContent = hasError
        ? "✕ Erro de carregamento"
        : loadedCount > 0
          ? "✓ Dados reais carregados"
          : "Carregando…";
  }

  // Rodapé — status e detalhe das bases
  const footerStatus = document.getElementById("footerDataStatus");
  if (footerStatus) {
    footerStatus.textContent = hasError
        ? "✕ Erro de carregamento"
        : "Painel v3 · dados reais XLSX/JSON";
  }
  const footerDot = document.getElementById("footerStatusDot");
  if (footerDot) {
              footerDot.style.background = hasError ? "#c43f3a" : "#16875d";
  }
  const footerDetail = document.getElementById("footerBasesDetail");
  if (footerDetail && DATA_STATUS.loadedBases.length > 0) {
    const ts    = DATA_STATUS.lastUpdated
      ? new Date(DATA_STATUS.lastUpdated).toLocaleString("pt-BR") : "—";
    footerDetail.textContent = "Última carga · " + ts;
  }
}

// ── Fallback sintético — Base Egressos ─────────────────────────────
function loadEgressosSintetico() {
  const iesMock = [
    ["UEL",       2110, 0.452, 3933],
    ["UEM",       1803, 0.485, 4209],
    ["UEPG",      1348, 0.468, 4477],
    ["UNIOESTE",  2289, 0.538, 4179],
    ["UNICENTRO", 1160, 0.520, 4338],
    ["UENP",       607, 0.421, 3364],
    ["UNESPAR",   1203, 0.542, 3475],
    ["UTFPR",     2800, 0.610, 5200],
  ];
  const coortes = ["2018", "2019", "2020", "2021", "2022"];
  for (var _i = 0; _i < iesMock.length; _i++) {
    var _m = iesMock[_i];
    var sigla = _m[0], grads = _m[1], emplPct = _m[2], salary = _m[3];
    ensureData(sigla);
    for (var _c = 0; _c < coortes.length; _c++) {
      var coorte = coortes[_c];
      var adj = 1 + (parseInt(coorte, 10) - 2021) * 0.025;
      var totalEgressos         = Math.max(1, Math.round(grads * Math.abs(adj)));
      var encontradosSul        = Math.round(totalEgressos * (emplPct + 0.11));
      var encontradosPR         = Math.round(totalEgressos * emplPct);
      var encontradosPRCBO2     = Math.round(encontradosPR * 0.65);
      var encontradosCidadeSede = Math.round(encontradosPR * 0.38);
      var salarioMedioCBO2      = Math.round(salary * adj);
      DATA[sigla].byYear[coorte] = Object.assign(
        {}, DATA[sigla].byYear[coorte] || {},
        {
          ind33: totalEgressos,
          ind34: encontradosSul,
          ind35: encontradosSul / totalEgressos,
          ind36: encontradosPR,
          ind37: encontradosPR / totalEgressos,
          ind38: encontradosPRCBO2,
          ind39: encontradosPR > 0 ? encontradosPRCBO2 / encontradosPR : null,
          ind40: salarioMedioCBO2,
          ind41: encontradosCidadeSede > 0 ? encontradosCidadeSede : null,
          ind42: encontradosCidadeSede > 0 ? encontradosCidadeSede / totalEgressos : null,
        }
      );
    }
  }
}

function calculateEgressosIndicatorsFromRow(row, columns) {
  const totalEgressos = parseLocaleNumber(cellByColumn(row, columns, "totalEgressos", 0), 0) || 0;
  const encontradosSul = parseLocaleNumber(cellByColumn(row, columns, "encontradosSul", 0), 0) || 0;
  const encontradosPR = parseLocaleNumber(cellByColumn(row, columns, "encontradosPR", 0), 0) || 0;
  const encontradosPRCBO2 = parseLocaleNumber(cellByColumn(row, columns, "encontradosPRCBO2", 0), 0) || 0;
  const encontradosCidadeSede = parseLocaleNumber(cellByColumn(row, columns, "encontradosCidadeSede", 0), 0) || 0;
  const salarioMedioCBO2 = parseLocaleNumber(cellByColumn(row, columns, "salarioMedioCBO2", null), null);
  const ind41 = encontradosCidadeSede > 0 ? encontradosCidadeSede : null;
  return {
    ind33: totalEgressos,
    ind34: encontradosSul,
    ind35: safeDivide(encontradosSul, totalEgressos, null),
    ind36: encontradosPR,
    ind37: safeDivide(encontradosPR, totalEgressos, null),
    ind38: encontradosPRCBO2,
    ind39: safeDivide(encontradosPRCBO2, encontradosPR, null),
    ind40: salarioMedioCBO2,
    ind41,
    ind42: ind41 !== null ? safeDivide(encontradosCidadeSede, totalEgressos, null) : null,
  };
}
SETIDataHub.calculateEgressosIndicatorsFromRow = calculateEgressosIndicatorsFromRow;

// ── Loader — Base Egressos – Paraná ────────────────────────────────
async function loadEgressosBase() {
  const NOME_BASE = SETI_DATASETS.egressos.name;

  try {
    const table = await loadWorkbookTable("egressos");
    const columns = table.columns;

    // Fase 1 — por cada par (IES, Coorte) manter somente o Ano_RAIS mais recente
    const bestRows = new Map();
    var validCount = 0;
    for (let i = 0; i < table.dataRows.length; i++) {
      const row = table.dataRows[i];
      const coIes = parseLocaleNumber(cellByColumn(row, columns, "coIes", 0), 0) || 0;
      const siglaFromCoIes = coIes ? (CURSOS_IES_MAP[coIes] || "") : "";
      const sigla = siglaFromCoIes || String(cellByColumn(row, columns, "sigla", "")).trim().toUpperCase();
      const coorte = String(cellByColumn(row, columns, "coorte", "")).trim();
      const anoRais = parseLocaleNumber(cellByColumn(row, columns, "anoRais", 0), 0) || 0;
      if (!sigla || !coorte) continue;
      validCount++;
      const key  = sigla + "|" + coorte;
      const prev = bestRows.get(key);
      if (!prev || anoRais > prev.anoRais) bestRows.set(key, { anoRais, row });
    }

    // Guarda 3: linhas válidas encontradas?
    if (validCount === 0) throw new Error("no_valid_rows");

    // Fase 2 — calcular indicadores e popular DATA
    for (const [key, { row }] of bestRows) {
      const parts  = key.split("|");
      const sigla  = parts[0], coorte = parts[1];
      upsertYearIndicators(sigla, coorte, calculateEgressosIndicatorsFromRow(row, columns));
    }

    registerBase(NOME_BASE, "real", bestRows.size);

  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    try {
      loadEgressosSintetico();
      registerBase(NOME_BASE, "sintético", 0);
    } catch (fallbackErr) {
      console.error("[" + NOME_BASE + "] Falha no fallback sintético.", fallbackErr);
      registerFailedBase(NOME_BASE, reason);
    }
  }
}

// ── Mapa CO_IES → sigla (INEP Censo da Educação Superior) ──────────
const CURSOS_IES_MAP = {
  // PR
  9:"UEL", 57:"UEM", 609:"UNIOESTE", 730:"UEPG",
  1126:"UNICENTRO", 15015:"UENP", 18492:"UNESPAR",
  // BR — 15 originais (CO confirmados via diagnóstico)
  55:"USP", 56:"UNESP", 54:"UNICAMP", 547:"UERJ",
  43:"UDESC", 3336:"UERGS", 29:"UECE", 40:"UNEB",
  688:"UESB", 47:"UEG", 568:"UEMA", 550:"UEPB",
  38:"UEPA", 3172:"UEA", 71:"UERN",
  // BR — 17 novas
  24:"UESC", 32:"UNCISAL", 95:"UVA", 367:"UNIMONTES",
  409:"UPE", 666:"UEFS", 719:"UNEMAT", 756:"UESPI",
  829:"UNITINS", 1027:"UENF", 1028:"UEMS", 1036:"UEMG",
  5077:"UERR", 5242:"UNEAL", 5701:"UEAP", 23410:"UEMASUL", 27103:"UnDF",
  746:"URCA"
};
const CURSOS_SIGLAS_SET = new Set(Object.values(CURSOS_IES_MAP));

// ── Loader — Base Cursos – Brasil ────────────────────────────────────
async function loadCursosBase() {
  const NOME_BASE = SETI_DATASETS.cursos.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const dataset = SETI_DATASETS.cursos;
    const response = await fetch(encodeURI(dataset.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(n =>
      /IES.*P.BL.*CURSO|CURSO.*IES/i.test(n.replace(/[\s_]+/g, ""))
    ) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: 0, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    const hdr = rows[0].map(h => String(h).trim().toUpperCase());
    const ci = {};
    hdr.forEach((h, i) => { ci[h] = i; });

    const needed = [
      "NU_ANO_CENSO", "CO_IES", "QT_MAT", "QT_ING", "QT_CONC", "QT_VG_TOTAL",
      "QT_VG_NOVA", "QT_VG_TOTAL_DIURNO", "QT_VG_TOTAL_NOTURNO", "QT_MAT_DIURNO",
      "QT_MAT_NOTURNO", "QT_SIT_DESVINCULADO", "QT_MOB_ACADEMICA", "QT_ING_PROCESCPUBLICA"
    ];
    const absent = needed.filter(function(c) { return ci[c] == null; });
    if (absent.length) console.warn("[" + NOME_BASE + "] Colunas ausentes:", absent.join(", "));

    const g = function(row, col) {
      const v = ci[col] != null ? row[ci[col]] : 0;
      return Number.isFinite(+v) ? +v : 0;
    };
    const sd = function(n, d) { return d > 0 ? n / d : null; };
    const r1 = function(v) { return Math.round(v * 10) / 10; };

    const acc = new Map();
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const coIes = +row[ci["CO_IES"]];
      if (!coIes || !CURSOS_IES_MAP[coIes]) continue;
      const year = String(+row[ci["NU_ANO_CENSO"]]);
      if (!year || year === "0") continue;
      const key = CURSOS_IES_MAP[coIes] + "|" + year;
      let a = acc.get(key);
      if (!a) {
        a = {
          sigla: CURSOS_IES_MAP[coIes], year,
          mat: 0, ing: 0, conc: 0, vgTot: 0, vgNova: 0,
          vgDiurno: 0, vgNoturno: 0, matDiurno: 0, matNoturno: 0,
          desvinc: 0, mob: 0, ingEscPub: 0, cursos: 0
        };
        acc.set(key, a);
      }
      a.mat       += g(row, "QT_MAT");
      a.ing       += g(row, "QT_ING");
      a.conc      += g(row, "QT_CONC");
      a.vgTot     += g(row, "QT_VG_TOTAL");
      a.vgNova    += g(row, "QT_VG_NOVA");
      a.vgDiurno  += g(row, "QT_VG_TOTAL_DIURNO");
      a.vgNoturno += g(row, "QT_VG_TOTAL_NOTURNO");
      a.matDiurno += g(row, "QT_MAT_DIURNO");
      a.matNoturno+= g(row, "QT_MAT_NOTURNO");
      a.desvinc   += g(row, "QT_SIT_DESVINCULADO");
      a.mob       += g(row, "QT_MOB_ACADEMICA");
      a.ingEscPub += g(row, "QT_ING_PROCESCPUBLICA");
      a.cursos    += 1;
    }
    if (!acc.size) throw new Error("no_valid_rows");

    acc.forEach(function(a) {
      const ingDiurnoEst  = a.mat > 0 ? a.ing * (a.matDiurno  / a.mat) : 0;
      const ingNoturnoEst = a.mat > 0 ? a.ing * (a.matNoturno / a.mat) : 0;
      const occ  = sd(a.ing, a.vgTot);
      const drop = sd(a.desvinc, a.mat);
      const comp = sd(a.conc, a.mat);
      const ing0 = sd(a.ing, a.vgNova);
      const mob0 = sd(a.mob, a.mat);
      const pub0 = sd(a.ingEscPub, a.ing);
      upsertYearIndicators(a.sigla, a.year, {
        cursosStudents:              a.mat,
        cursosEntrants:              a.ing,
        cursosGraduates:             a.conc,
        cursosCourses:               a.cursos,
        cursosVacancies:             a.vgTot,
        cursosVacanciesNova:         a.vgNova,
        cursosVacanciesDay:          a.vgDiurno,
        cursosVacanciesNight:        a.vgNoturno,
        cursosMatDay:                a.matDiurno,
        cursosMatNight:              a.matNoturno,
        cursosOccupancy:             occ  != null ? r1(occ  * 100) : null,
        cursosDropout:               drop != null ? r1(drop * 100) : null,
        cursosCompletion:            comp != null ? r1(comp * 100) : null,
        cursosIngressOccupancy:      ing0 != null ? r1(ing0 * 100) : null,
        cursosVacanciesUnfilled:     a.vgTot  > a.ing ? a.vgTot  - a.ing : 0,
        cursosVacanciesNovaUnfilled: a.vgNova > a.ing ? a.vgNova - a.ing : 0,
        cursosOccupancyDay:          a.vgDiurno  > 0 ? r1(ingDiurnoEst  / a.vgDiurno  * 100) : null,
        cursosOccupancyNight:        a.vgNoturno > 0 ? r1(ingNoturnoEst / a.vgNoturno * 100) : null,
        cursosMobility:              mob0 != null ? Math.round(mob0 * 10000) / 100 : null,
        cursosPublicSchool:          pub0 != null ? r1(pub0 * 100) : null,
      });
    });

    registerBase(NOME_BASE, "real", acc.size);
  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base IES – Brasil ───────────────────────────────────────
async function loadIesBase() {
  const NOME_BASE = SETI_DATASETS.ies.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.ies.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(function(n) {
      return /ies.*brasil/i.test(n.replace(/[\s_]+/g, ""));
    }) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: 0, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");
    const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
    const ci = {};
    hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });
    const needed = ["nu_ano_censo","co_ies","qt_doc_exe","qt_doc_ex_dout","qt_doc_ex_est","in_acesso_portal_capes"];
    const absent = needed.filter(function(c) { return ci[c] == null; });
    if (absent.length) console.warn("[" + NOME_BASE + "] Colunas ausentes:", absent.join(", "));
    const g = function(row, col) { const v = ci[col] != null ? row[ci[col]] : 0; return Number.isFinite(+v) ? +v : 0; };
    const sd = function(n, d) { return d > 0 ? Math.round(n / d * 1000) / 10 : null; };
    let loaded = 0;
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const coIes = +row[ci["co_ies"]];
      if (!coIes || !CURSOS_IES_MAP[coIes]) continue;
      const year = String(+row[ci["nu_ano_censo"]]);
      if (!year || year === "0") continue;
      const exe = g(row, "qt_doc_exe");
      const dout = g(row, "qt_doc_ex_dout");
      const est = g(row, "qt_doc_ex_est");
      const portal = g(row, "in_acesso_portal_capes");
      upsertYearIndicators(CURSOS_IES_MAP[coIes], year, {
        iesDocDout:    sd(dout, exe),
        iesDocForeign: exe > 0 ? Math.round(est / exe * 10000) / 100 : null,
        iesCapesPortal: (portal === 1 || portal === "1" || portal === true) ? 1 : 0,
      });
      loaded++;
    }
    if (!loaded) throw new Error("no_valid_rows");
    registerBase(NOME_BASE, "real", loaded);
  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base Docentes – Paraná ──────────────────────────────────
async function loadDocentesBase() {
  const NOME_BASE = SETI_DATASETS.docentes.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.docentes.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(function(n) {
      return /docentes.*pr|pr.*docentes|docentes_pr/i.test(n.replace(/\s/g, ""));
    }) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "", raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");
    const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
    const ci = {};
    hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });
    const g = function(row, col) {
      const v = ci[col] != null ? row[ci[col]] : "";
      const n = +v;
      return Number.isFinite(n) ? n : 0;
    };
    // Rates stored as 0-1 in source → multiply by 100. Values > 1.5 assumed already percent.
    const asPct = function(row, col) {
      const v = g(row, col);
      if (!v && v !== 0) return null;
      return v > 1.5 ? Math.round(v * 10) / 10 : Math.round(v * 1000) / 10;
    };
    const monthOrd = {
      dezembro: 12, novembro: 11, outubro: 10, setembro: 9, agosto: 8,
      julho: 7, junho: 6, maio: 5, abril: 4, marco: 3, fevereiro: 2, janeiro: 1
    };
    // Keep the most-recent month row per (CO_IES, ANO)
    const best = new Map();
    for (let i = 1; i < rows.length; i++) {
      const row = rows[i];
      const coIes = +row[ci["co_ies"]];
      if (!coIes || !CURSOS_IES_MAP[coIes]) continue;
      const ano = String(+row[ci["ano"]]);
      if (!ano || ano === "0") continue;
      const mesNorm = normalizeColumnName(String(row[ci["mes"]] || ""));
      const mesOrd = monthOrd[mesNorm] || 0;
      const key = coIes + "|" + ano;
      const prev = best.get(key);
      if (!prev || mesOrd > prev.mesOrd) {
        best.set(key, { row: row, mesOrd: mesOrd, sigla: CURSOS_IES_MAP[coIes], year: ano });
      }
    }
    if (!best.size) throw new Error("no_valid_rows");
    best.forEach(function(b) {
      const row = b.row;
      upsertYearIndicators(b.sigla, b.year, {
        docVagasTotais:      Math.round(g(row, "total_de_codigos_de_vagas_docentes")) || null,
        docVagasDisp:        Math.round(g(row, "vagas_docentes_disponiveis_para_ocupacao")) || null,
        docVagasOcupadas:    Math.round(g(row, "vagas_docentes_efetivas_ocupadas")) || null,
        docTaxaOcup:         asPct(row, "taxa_de_ocupacao_do_quadro_docente"),
        docTaxaUtil:         asPct(row, "taxa_de_utilizacao_das_vagas_docentes_disponiveis"),
        docVagasCond:        Math.round(g(row, "vagas_docentes_condicionadas_a_autorizacao_governamental")) || null,
        // IND-49: Base Docentes - Parana.xlsx, Excel column X.
        docPctCond:          asPct(row, "percentual_de_vagas_condicionadas_a_autorizacao_governamental"),
        docTideAtrib:        Math.round(g(row, "quantidade_de_tide_atribuido_ao_corpo_docente")) || null,
        docTidePartic:       asPct(row, "participacao_do_tide_no_quadro_docente_disponivel"),
        docTidePctNaoAtrib:  asPct(row, "percentual_de_tide_nao_atribuido"),
        docChMedia:          g(row, "carga_horaria_media_de_docentes_efetivos") || null,
        docCresAut:          Math.round(g(row, "carga_horaria_cres_autorizada")) || null,
        docCresUtil:         Math.round(g(row, "carga_horaria_cres_utilizada")) || null,
        docCresTaxa:         asPct(row, "taxa_de_utilizacao_da_cres"),
        docCresSaldo:        Math.round(g(row, "saldo_de_carga_horaria_cres_nao_utilizada")) || null,
        docCresOciosidade:   asPct(row, "taxa_de_ociosidade_da_cres"),
        docCresPartic:       asPct(row, "participacao_da_cres_no_esforco_docente_total"),
      });
    });
    registerBase(NOME_BASE, "real", best.size);
  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base CAPES – Pós-Graduação ─────────────────────────────
async function loadCapesBase() {
  const NOME_BASE = SETI_DATASETS.capes.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.capes.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const findSheet = function(pattern) {
      return workbook.SheetNames.find(function(n) { return pattern.test(n.replace(/\s/g, "").toLowerCase()); }) || null;
    };
    const cursosSheet   = findSheet(/^base_cursos$/);
    const docentesSheet = findSheet(/^base_docentes$/);
    if (!cursosSheet && !docentesSheet) throw new Error("missing_sheet");

    // Map: "SIGLA|YEAR|PROGRAMA" → conceito (deduplicate programs)
    const accCursos = new Map();
    if (cursosSheet) {
      const ws = workbook.Sheets[cursosSheet];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "", raw: true });
      if (rows.length >= 2) {
        const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
        const ci = {};
        hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });
        const conceitoCol = ci["cd_conceito_curso"] != null ? "cd_conceito_curso" : "cd_conceito_programa";
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const coIes = ci["co_ies"] != null ? +row[ci["co_ies"]] : 0;
          const sigla = (coIes && CURSOS_IES_MAP[coIes])
            ? CURSOS_IES_MAP[coIes]
            : (ci["sg_entidade_ensino"] != null ? String(row[ci["sg_entidade_ensino"]] || "").trim().toUpperCase() : "");
          if (!sigla || !CURSOS_SIGLAS_SET.has(sigla)) continue;
          const year = String(+row[ci["an_base"]]);
          if (!year || year === "0") continue;
          const programa = String(row[ci["cd_programa_ies"]] || "");
          if (!programa) continue;
          const cKey = sigla + "|" + year + "|" + programa;
          if (accCursos.has(cKey)) continue;
          const conceito = +row[ci[conceitoCol]];
          if (Number.isFinite(conceito) && conceito > 0) accCursos.set(cKey, conceito);
        }
      }
    }

    // Map: "SIGLA|YEAR" → { perm, estrang, bolsa, total }
    const accDoc = new Map();
    if (docentesSheet) {
      const ws = workbook.Sheets[docentesSheet];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "", raw: true });
      if (rows.length >= 2) {
        const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
        const ci = {};
        hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });
        const nacCol = ci["ds_tipo_nacionalidade_docente"] != null
          ? "ds_tipo_nacionalidade_docente" : "ds_tipo_nacionalidade";
        const docConceitoCol = ci["cd_conceito_programa"];
        const docProgramaCol = ci["cd_programa_ies"];
        for (let i = 1; i < rows.length; i++) {
          const row = rows[i];
          const coIes = ci["co_ies"] != null ? +row[ci["co_ies"]] : 0;
          const sigla = (coIes && CURSOS_IES_MAP[coIes])
            ? CURSOS_IES_MAP[coIes]
            : (ci["sg_entidade_ensino"] != null ? String(row[ci["sg_entidade_ensino"]] || "").trim().toUpperCase() : "");
          if (!sigla || !CURSOS_SIGLAS_SET.has(sigla)) continue;
          const year = String(+row[ci["an_base"]]);
          if (!year || year === "0") continue;
          // Collect program conceito from docentes sheet (deduplicado por programa)
          if (docConceitoCol != null && docProgramaCol != null) {
            const programa = String(row[docProgramaCol] || "");
            if (programa) {
              const cKey = sigla + "|" + year + "|" + programa;
              if (!accCursos.has(cKey)) {
                const conceito = +row[docConceitoCol];
                if (Number.isFinite(conceito) && conceito > 0) accCursos.set(cKey, conceito);
              }
            }
          }
          const key = sigla + "|" + year;
          let a = accDoc.get(key);
          if (!a) { a = { perm: 0, estrang: 0, bolsa: 0, total: 0 }; accDoc.set(key, a); }
          a.total++;
          const categ = String(row[ci["ds_categoria_docente"]] || "").toUpperCase();
          if (categ === "PERMANENTE") a.perm++;
          const nac = String(row[ci[nacCol]] || "").toUpperCase().trim();
          if (nac && nac !== "BRASILEIRO" && nac !== "BRASILEIRA") a.estrang++;
          const bolsa = String(row[ci["cd_cat_bolsa_produtividade"]] || "").toUpperCase().trim();
          if (bolsa && bolsa !== "NA") a.bolsa++;
        }
      }
    }

    if (!accCursos.size && !accDoc.size) throw new Error("no_valid_rows");

    // Aggregate programs per (sigla, year)
    const byIesYear = new Map();
    accCursos.forEach(function(conceito, key) {
      const parts = key.split("|");
      const iyKey = parts[0] + "|" + parts[1];
      let a = byIesYear.get(iyKey);
      if (!a) { a = { sigla: parts[0], year: parts[1], sum: 0, count: 0, top: 0 }; byIesYear.set(iyKey, a); }
      a.sum += conceito;
      a.count++;
      if (conceito >= 5) a.top++;
    });

    const pct = function(n, tot) { return tot > 0 ? Math.round(n / tot * 1000) / 10 : null; };
    let stored = 0;
    byIesYear.forEach(function(a) {
      const d = accDoc.get(a.sigla + "|" + a.year) || null;
      upsertYearIndicators(a.sigla, a.year, {
        capesConceito:        a.count > 0 ? Math.round(a.sum / a.count * 100) / 100 : null,
        capesPct567:          a.count > 0 ? pct(a.top, a.count) : null,
        capesDocPermanentes:  d ? pct(d.perm,   d.total) : null,
        capesDocEstrangeiros: d ? pct(d.estrang, d.total) : null,
        capesDocBolsa:        d ? pct(d.bolsa,  d.total) : null,
      });
      stored++;
    });
    // IES with docente data but no course data
    accDoc.forEach(function(d, key) {
      if (byIesYear.has(key)) return;
      const parts = key.split("|");
      upsertYearIndicators(parts[0], parts[1], {
        capesDocPermanentes:  pct(d.perm,   d.total),
        capesDocEstrangeiros: pct(d.estrang, d.total),
        capesDocBolsa:        pct(d.bolsa,  d.total),
      });
    });

    registerBase(NOME_BASE, "real", stored || accDoc.size);
  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base RAIS – 2023 e 2024 – Paraná ───────────────────────
async function loadRaisBase() {
  const NOME_BASE = SETI_DATASETS.rais.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const dataset = SETI_DATASETS.rais;
    const response = await fetch(encodeURI(dataset.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(n => /rais/i.test(n)) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    const hdr = rows[0].map(function(h){ return String(h == null ? "" : h).trim(); });
    const ci = {};
    hdr.forEach(function(h, i){ var k = normalizeColumnName(h); if (k && ci[k] == null) ci[k] = i; });

    // Colunas identificadas no arquivo (cabeçalhos normalizados via normalizeColumnName)
    const COL = {
      iees:          ci["iees"],
      anoEgr:        ci["ano_egresso"],
      cursoPad:      ci["curso_padronizado"],
      grau:          ci["grau_curso"],
      cbo2:          ci["cbo2"],
      muniNome:      ci["municipio_nome"],
      partMun:       ci["participacao_do_municipio_na_insercao_formal_dos_egressos"],
      partCurso:     ci["participacao_do_curso_na_insercao_formal_dos_egressos"],
      partCbo2:      ci["participacao_dos_grandes_grupos_ocupacionais_cbo2_na_insercao_dos_egressos"],
      divOcup:       ci["diversidade_ocupacional_dos_egressos_por_curso"],
      munDestino:    ci["municipios_de_destino_profissional_dos_egressos_por_curso"],
      dispersao:     ci["indice_de_dispersao_territorial_dos_egressos_por_curso"],
    };

    const pn = function(v){ return (v != null && v !== "") ? parseLocaleNumber(v, null) : null; };

    // Agrega por (IEES, ANO_EGRESSO = coorte)
    const agg = new Map();
    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row || !row.length) continue;
      var sigla  = String(row[COL.iees] == null ? "" : row[COL.iees]).trim().toUpperCase();
      var anoEgr = row[COL.anoEgr];
      var coorte = String(anoEgr == null ? "" : anoEgr).trim();
      if (!sigla || !coorte || coorte === "0" || coorte === "null") continue;

      var key = sigla + "|" + coorte;
      if (!agg.has(key)) {
        agg.set(key, {
          sigla: sigla, coorte: coorte,
          munis: new Set(), cursos: new Set(), graus: new Set(), cbo2s: new Set(),
          divOcupByCurso: new Map(), munDestByCurso: new Map(), dispersaoByCurso: new Map(),
          partMunMax: 0, partCursoMax: 0, partCbo2Max: 0,
        });
      }
      var a = agg.get(key);
      var muni  = String(row[COL.muniNome]  == null ? "" : row[COL.muniNome]).trim();
      var curso = String(row[COL.cursoPad]  == null ? "" : row[COL.cursoPad]).trim();
      var grau  = String(row[COL.grau]      == null ? "" : row[COL.grau]).trim();
      var cbo2  = String(row[COL.cbo2]      == null ? "" : row[COL.cbo2]).trim();

      if (muni)  a.munis.add(muni);
      if (grau)  a.graus.add(grau);
      if (cbo2)  a.cbo2s.add(cbo2);

      if (curso) {
        a.cursos.add(curso);
        // armazena um valor por curso (maior granularidade disponível)
        if (!a.divOcupByCurso.has(curso)) {
          var vd = pn(row[COL.divOcup]);
          if (vd != null && vd > 0) a.divOcupByCurso.set(curso, vd);
        }
        if (!a.munDestByCurso.has(curso)) {
          var vm = pn(row[COL.munDestino]);
          if (vm != null && vm > 0) a.munDestByCurso.set(curso, vm);
        }
        if (!a.dispersaoByCurso.has(curso)) {
          var vs = pn(row[COL.dispersao]);
          if (vs != null && vs > 0) a.dispersaoByCurso.set(curso, vs);
        }
      }
      var pm = pn(row[COL.partMun]);
      if (pm != null && pm > a.partMunMax) a.partMunMax = pm;
      var pc = pn(row[COL.partCurso]);
      if (pc != null && pc > a.partCursoMax) a.partCursoMax = pc;
      var pcbo = pn(row[COL.partCbo2]);
      if (pcbo != null && pcbo > a.partCbo2Max) a.partCbo2Max = pcbo;
    }

    var stored = 0;
    var mapAvg = function(m) {
      if (!m.size) return null;
      var vals = Array.from(m.values());
      return Math.round(vals.reduce(function(s,v){ return s+v; }, 0) / vals.length * 100) / 100;
    };
    var toPercent = function(v){ return v > 0 ? Math.round(v * 10000) / 100 : null; }; // 0-1 → %

    for (var entry of agg) {
      var ae = entry[1];
      upsertYearIndicators(ae.sigla, ae.coorte, {
        raisMunCount:     ae.munis.size  || null,              // ind70
        raisPartMunMax:   toPercent(ae.partMunMax),            // ind71: % maior município
        raisCursoCount:   ae.cursos.size || null,              // ind72
        raisPartCursoMax: toPercent(ae.partCursoMax),          // ind73: % maior curso
        raisGrauCount:    ae.graus.size  || null,              // ind74
        raisDivOcup:      mapAvg(ae.divOcupByCurso),           // ind75: diversidade ocupacional média/curso
        raisCbo2Count:    ae.cbo2s.size  || null,              // ind76
        raisPartCbo2Max:  toPercent(ae.partCbo2Max),           // ind77: % maior grupo CBO2
        raisMunDestino:   mapAvg(ae.munDestByCurso),           // ind78: média municípios destino por curso
        raisDispersao:    mapAvg(ae.dispersaoByCurso),         // ind79: índice dispersão médio por curso
      });
      stored++;
    }

    registerBase(NOME_BASE, "real", stored);
  } catch(err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}



// ── Loader — Base CNPq – Brasil (stub — aguardando arquivo) ────────────
//
// CAMPOS ESPERADOS NA BASE CNPq - Brasil.xlsx
// ┌──────────────────────┬──────────────────────────────────────────────┐
// │ Campo                │ Descrição                                    │
// ├──────────────────────┼──────────────────────────────────────────────┤
// │ CO_IES               │ Código INEP da IES (prioritário).            │
// │                      │ Mapear via CURSOS_IES_MAP → sigla interna.   │
// │ SIGLA_IES            │ Fallback se CO_IES ausente (UEL, UEM…).      │
// │ ANO ou NU_ANO        │ Ano de referência (ex.: 2020, 2021… 2024).   │
// │ VL_CAPTACAO          │ Valor total captado (R$). Converter para     │
// │                      │ R$ milhões ao armazenar (÷ 1 000 000).       │
// │ QT_VINCULOS          │ Quantidade de vínculos de fomento ativos.    │
// │ DS_MODALIDADE        │ Tipo de fomento, se disponível:              │
// │                      │ "Bolsa", "Auxílio", "Projeto", "Cooperação". │
// └──────────────────────┴──────────────────────────────────────────────┘
//
// PONTO DE CONEXÃO — quando a base for disponibilizada:
//   1. Definir cnpq: { ..., enabled: true } em SETI_DATASETS (linha ~5808).
//   2. Descomentar o bloco try/catch abaixo e ajustar nomes das colunas.
//   3. Verificar se CO_IES está presente; usar CURSOS_IES_MAP para sigla.
//   4. Após sucesso, window.CNPQ_BASE_LOADED = true é definido aqui
//      e ind60/ind61 passam a exibir dados reais automaticamente.
async function loadCnpqBase() {
  const NOME_BASE = SETI_DATASETS.cnpq.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.cnpq.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const ws = workbook.Sheets[workbook.SheetNames[0]];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
    const ci = {};
    hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });

    // Mapeamento: nome normalizado da instituição → sigla IEES-PR
    const CNPQ_IES_MAP = {
      "universidade_estadual_de_londrina":        "UEL",
      "universidade_estadual_de_maringa":         "UEM",
      "universidade_estadual_de_ponta_grossa":    "UEPG",
      "universidade_estadual_do_oeste_do_parana": "UNIOESTE",
      "universidade_estadual_do_centro_oeste":    "UNICENTRO",
      "universidade_estadual_do_norte_do_parana": "UENP",
      "universidade_estadual_do_parana":          "UNESPAR",
    };

    const colAno      = ci["ano"];
    const colInst     = ci["01_instituicao"];
    const colUF       = ci["14_sigla_uf"];
    const colCaptacao = ci["captacao_de_recursos_para_pesquisa"];
    const colVinc     = ci["numero_de_vinculos_de_fomento_do_cnpq"];

    const absent = [];
    if (colAno == null)      absent.push("ano");
    if (colInst == null)     absent.push("01_instituicao");
    if (colUF == null)       absent.push("14_sigla_uf");
    if (colCaptacao == null) absent.push("captacao_de_recursos_para_pesquisa");
    if (colVinc == null)     absent.push("numero_de_vinculos_de_fomento_do_cnpq");
    if (absent.length) console.warn("[" + NOME_BASE + "] Colunas ausentes:", absent.join(", "));

    const pn = function(v) { return (v != null && v !== "") ? parseLocaleNumber(v, null) : null; };
    const agg = new Map();

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row || !row.length) continue;
      var uf = String(row[colUF] == null ? "" : row[colUF]).trim().toUpperCase();
      if (uf !== "PR") continue;
      var instNorm = normalizeColumnName(String(row[colInst] == null ? "" : row[colInst]).trim());
      var sigla = CNPQ_IES_MAP[instNorm];
      if (!sigla) continue;
      var ano = String(pn(row[colAno]) || "").trim();
      if (!ano || ano === "0") continue;
      var key = sigla + "|" + ano;
      if (!agg.has(key)) agg.set(key, { sigla: sigla, ano: ano, captacao: 0, vinculos: 0 });
      var a = agg.get(key);
      a.captacao += pn(row[colCaptacao]) || 0;
      a.vinculos += pn(row[colVinc]) || 0;
    }

    if (!agg.size) throw new Error("no_valid_rows");
    var stored = 0;
    agg.forEach(function(a) {
      upsertYearIndicators(a.sigla, a.ano, {
        cnpqCaptacao: a.captacao > 0 ? Math.round(a.captacao / 1e6 * 100) / 100 : null,
        cnpqVinculos: a.vinculos > 0 ? a.vinculos : null,
      });
      stored++;
    });
    window.CNPQ_BASE_LOADED = true;
    registerBase(NOME_BASE, "real", stored);
  } catch (err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base Fundo Paraná ───────────────────────────────────────
async function loadFundoParanaBase() {
  const NOME_BASE = SETI_DATASETS.fundoParana.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.fundoParana.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(function(n) { return /fundo/i.test(n); }) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
    const ci = {};
    hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });

    const COL = {
      ano:      ci["nu_ano_ref"],
      coIes:    ci["co_ies"],
      sigla:    ci["sigla_ies"],
      pctExec:  ci["pct_execucao_contratos"],
      vlAcord:  ci["vl_total_acordado"],
      vlRepass: ci["vl_total_repassado"],
      vlEmp:    ci["vl_total_empenhado"],
    };
    const absent = Object.keys(COL).filter(function(k) { return COL[k] == null; });
    if (absent.length) console.warn("[" + NOME_BASE + "] Colunas ausentes:", absent.join(", "));

    const pn = function(v) { return (v != null && v !== "") ? parseLocaleNumber(v, null) : null; };
    var stored = 0;

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row || !row.length) continue;
      var coIes = pn(row[COL.coIes]) || 0;
      var sigla = coIes ? (CURSOS_IES_MAP[coIes] || "") : "";
      if (!sigla && COL.sigla != null) sigla = String(row[COL.sigla] == null ? "" : row[COL.sigla]).trim().toUpperCase();
      if (!sigla) continue;
      var ano = String(pn(row[COL.ano]) || "").trim();
      if (!ano || ano === "0" || ano === "null") continue;

      var vlAcord  = pn(row[COL.vlAcord]);
      var vlRepass = pn(row[COL.vlRepass]);
      var vlEmp    = pn(row[COL.vlEmp]);
      var pctExec  = pn(row[COL.pctExec]);

      upsertYearIndicators(sigla, ano, {
        fundoVlAcordado:  vlAcord  != null ? Math.round(vlAcord  / 1e6 * 100) / 100 : null,
        fundoVlRepassado: vlRepass != null ? Math.round(vlRepass / 1e6 * 100) / 100 : null,
        fundoVlEmpenhado: vlEmp    != null ? Math.round(vlEmp    / 1e6 * 100) / 100 : null,
        fundoPctExecucao: pctExec  != null ? Math.round(pctExec  * 10000) / 100 : null,
      });
      stored++;
    }

    if (!stored) throw new Error("no_valid_rows");
    registerBase(NOME_BASE, "real", stored);
  } catch (err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Dados de Suplementação ─────────────────────────────────
async function loadSupplementacaoBase() {
  const NOME_BASE = SETI_DATASETS.suplementacao.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.suplementacao.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    const sheetName = workbook.SheetNames.find(function(n) {
      return /matriz.*cluster|cluster.*matriz/i.test(n);
    }) || workbook.SheetNames[0];
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
    const ci = {};
    hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });

    const COL = {
      iees:    ci["iees"],
      valor:   ci["valor_total"],
      atos:    ci["n_atos"],
      pctSupl: ci["suplementacao"],
      pctPess: ci["pessoal"],
      pctCust: ci["custeio"],
      pctInv:  ci["investimento"],
      perfil:  ci["perfil_orcamentario"],
    };
    const absent = Object.keys(COL).filter(function(k) { return COL[k] == null; });
    if (absent.length) console.warn("[" + NOME_BASE + "] Colunas ausentes:", absent.join(", "));

    const pn = function(v) { return (v != null && v !== "") ? parseLocaleNumber(v, null) : null; };
    const toPct = function(v) { return v != null ? Math.round(v * 10000) / 100 : null; };
    var stored = 0;

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row || !row.length) continue;
      var sigla = COL.iees != null ? String(row[COL.iees] == null ? "" : row[COL.iees]).trim().toUpperCase() : "";
      if (!sigla) continue;

      var atos = pn(row[COL.atos]);
      upsertYearIndicators(sigla, "all", {
        supleValorTotal: pn(row[COL.valor]),
        supleNrAtos:     atos != null ? Math.round(atos) : null,
        suplePctSupl:    toPct(pn(row[COL.pctSupl])),
        suplePctPessoal: toPct(pn(row[COL.pctPess])),
        suplePctCusteio: toPct(pn(row[COL.pctCust])),
        suplePctInvest:  toPct(pn(row[COL.pctInv])),
        suplePerfil:     COL.perfil != null ? (String(row[COL.perfil] == null ? "" : row[COL.perfil]).trim() || null) : null,
      });
      stored++;
    }

    if (!stored) throw new Error("no_valid_rows");
    registerBase(NOME_BASE, "real", stored);
  } catch (err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — CBO2 / RAIS ─────────────────────────────────────────────
async function loadCbo2Base() {
  const NOME_BASE = SETI_DATASETS.cbo2.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.cbo2.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    // Aba de resumo aggregado por IEES (wide format por coorte/ano RAIS)
    const sheetName = workbook.SheetNames.find(function(n) {
      return normalizeColumnName(n).indexOf("quantitativa") !== -1;
    }) || null;
    if (!sheetName) throw new Error("missing_sheet");
    const ws = workbook.Sheets[sheetName];
    const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
    if (rows.length < 2) throw new Error("no_valid_rows");

    // Wide format com índices fixos:
    // col[1]=IEES-PR, col[4]=enc.PR 2020/RAIS2023, col[6]=sal.médio 2020,
    // col[9]=enc.PR 2021/RAIS2024, col[11]=sal.médio 2021
    const pn = function(v) {
      if (v == null || v === "") return null;
      var n = parseLocaleNumber(v, null);
      return (n != null && Number.isFinite(n)) ? n : null;
    };
    var stored = 0;

    for (var i = 1; i < rows.length; i++) {
      var row = rows[i];
      if (!row || !row.length) continue;
      var sigla = String(row[1] == null ? "" : row[1]).trim().toUpperCase();
      if (!sigla) continue;

      var enc2020 = pn(row[4]);
      if (enc2020 != null && enc2020 > 0) {
        upsertYearIndicators(sigla, "2020", {
          cbo2EgressosEncontrados: enc2020,
          cbo2MediaSalarial:       pn(row[6]),
        });
        stored++;
      }

      var enc2021 = pn(row[9]);
      if (enc2021 != null && enc2021 > 0) {
        upsertYearIndicators(sigla, "2021", {
          cbo2EgressosEncontrados: enc2021,
          cbo2MediaSalarial:       pn(row[11]),
        });
        stored++;
      }
    }

    if (!stored) throw new Error("no_valid_rows");
    registerBase(NOME_BASE, "real", stored);
  } catch (err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Loader — Base de dados para clusterização ────────────────────────
async function loadClusterizacaoBase() {
  const NOME_BASE = SETI_DATASETS.clusterizacao.name;
  try {
    if (!window.XLSX) throw new Error("xlsx_missing");
    const response = await fetch(encodeURI(SETI_DATASETS.clusterizacao.file));
    if (!response.ok) throw new Error("HTTP " + response.status);
    const buffer = await response.arrayBuffer();
    const workbook = XLSX.read(buffer, { type: "array" });
    var stored = 0;

    // ── Aba IES (microdados INEP — porte, municípios, proporção doutores) ──
    const iesSheet = workbook.SheetNames.find(function(n) { return /^ies$/i.test(n.trim()); }) || null;
    if (iesSheet) {
      const ws = workbook.Sheets[iesSheet];
      const rows = XLSX.utils.sheet_to_json(ws, { header: 1, defval: null, raw: true });
      if (rows.length >= 2) {
        const hdr = rows[0].map(function(h) { return normalizeColumnName(h); });
        const ci = {};
        hdr.forEach(function(h, i) { if (h && ci[h] == null) ci[h] = i; });
        const g = function(row, col) {
          var v = ci[col] != null ? row[ci[col]] : null;
          return Number.isFinite(+v) ? +v : null;
        };
        for (var i = 1; i < rows.length; i++) {
          var row = rows[i];
          if (!row || !row.length) continue;
          var coIes = +(row[ci["co_ies"]] || 0);
          if (!coIes || !CURSOS_IES_MAP[coIes]) continue;
          var year = String(+(row[ci["nu_ano_censo"]] || 0));
          if (!year || year === "0") continue;
          var propDout = g(row, "proporcao_de_docentes_com_doutorado");
          upsertYearIndicators(CURSOS_IES_MAP[coIes], year, {
            clusterPorte:         g(row, "porte_institucional"),
            clusterQtdMunicipios: g(row, "qtd_municipios_atuacao"),
            clusterPropDoutores:  propDout != null ? Math.round(propDout * 10000) / 100 : null,
          });
          stored++;
        }
      }
    } else {
      console.warn("[" + NOME_BASE + "] Aba 'IES' não encontrada.");
    }

    // ── Aba Estrutura docente PR (por IES/mês — mantém mês mais recente) ──
    const docSheet = workbook.SheetNames.find(function(n) {
      return /estrutura.*docente.*pr|docente.*pr/i.test(n);
    }) || null;
    if (docSheet) {
      const wsd = workbook.Sheets[docSheet];
      const rowsd = XLSX.utils.sheet_to_json(wsd, { header: 1, defval: "", raw: true });
      if (rowsd.length >= 2) {
        const hdrd = rowsd[0].map(function(h) { return normalizeColumnName(h); });
        const cid = {};
        hdrd.forEach(function(h, i) { if (h && cid[h] == null) cid[h] = i; });
        const gd = function(row, col) {
          var v = cid[col] != null ? row[cid[col]] : "";
          var n = +v;
          return Number.isFinite(n) ? n : 0;
        };
        const asPct = function(row, col) {
          var v = gd(row, col);
          if (!v && v !== 0) return null;
          return v > 1.5 ? Math.round(v * 10) / 10 : Math.round(v * 1000) / 10;
        };
        const monthOrd = {
          dezembro: 12, novembro: 11, outubro: 10, setembro: 9, agosto: 8,
          julho: 7, junho: 6, maio: 5, abril: 4, marco: 3, fevereiro: 2, janeiro: 1
        };
        const best = new Map();
        for (var j = 1; j < rowsd.length; j++) {
          var rowd = rowsd[j];
          if (!rowd || !rowd.length) continue;
          var coIes2 = +(rowd[cid["co_ies"]] || 0);
          if (!coIes2 || !CURSOS_IES_MAP[coIes2]) continue;
          var ano = String(+(rowd[cid["ano"]] || 0));
          if (!ano || ano === "0") continue;
          var mesNorm = normalizeColumnName(String(rowd[cid["mes"]] || ""));
          var mesOrd = monthOrd[mesNorm] || 0;
          var bkey = coIes2 + "|" + ano;
          var prev = best.get(bkey);
          if (!prev || mesOrd > prev.mesOrd) {
            best.set(bkey, { row: rowd, mesOrd: mesOrd, sigla: CURSOS_IES_MAP[coIes2], year: ano });
          }
        }
        best.forEach(function(b) {
          var r = b.row;
          upsertYearIndicators(b.sigla, b.year, {
            docTaxaOcup:        asPct(r, "taxa_de_ocupacao_do_quadro_docente"),
            docTideAtrib:       Math.round(gd(r, "quantidade_de_tide_atribuido_ao_corpo_docente")) || null,
            docTidePartic:      asPct(r, "participacao_do_tide_no_quadro_docente_disponivel"),
            docTidePctNaoAtrib: asPct(r, "percentual_de_tide_nao_atribuido"),
            docCresAut:         Math.round(gd(r, "carga_horaria_cres_autorizada")) || null,
            docCresUtil:        Math.round(gd(r, "carga_horaria_cres_utilizada")) || null,
            docCresTaxa:        asPct(r, "taxa_de_utilizacao_da_cres"),
            docCresOciosidade:  asPct(r, "taxa_de_ociosidade_da_cres"),
            docCresPartic:      asPct(r, "participacao_da_cres_no_esforco_docente_total"),
          });
          stored++;
        });
      }
    } else {
      console.warn("[" + NOME_BASE + "] Aba 'Estrutura docente PR' não encontrada.");
    }

    // TODO: aba "Dinâmica orçamentária PR" (1M+ linhas) — implementar separadamente

    if (!stored) throw new Error("no_valid_rows");
    registerBase(NOME_BASE, "real", stored);
  } catch (err) {
    var reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

// ── Orquestrador principal ─────────────────────────────────────────
async function loadGenericDataset(datasetKey) {
  const table = await loadWorkbookTable(datasetKey);
  registerBase(table.dataset.name, "real", table.dataRows.length);
  return table;
}

// ── Loader do JSON pré-processado (substitui os XLSX pesados) ──────────
// Gerado por: python pipeline/assemble_final.py
// Contém os indicadores agregados por IES, extraídos de:
//   Cursos, IES, CAPES, CNPq, Despesa 8050, Docentes, Suplementação,
//   CBO2/RAIS, Egressos, Fundo Paraná, RAIS e Estratificação.
async function loadPrecomputedJson() {
  const NOME_BASE = "Indicadores Pré-processados (JSON)";
  try {
    const response = await fetch("../data/seti_precomputed.json");
    if (!response.ok) throw new Error("HTTP " + response.status);
    const data = await response.json();
    const indicators = data.indicators || {};
    const year = String(data.year || "2024");
    DATA_STATUS.precomputedGenerated = data.generated || null;
    DATA_STATUS.precomputedYear = year;
    let count = 0;
    for (const [sigla, vals] of Object.entries(indicators)) {
      // Alias raw precomputed-JSON field names to the prefixed names that
      // byYear() reads, so JSON data is applied even when the corresponding
      // XLSX loader is disabled (cursos, capes, cnpq are enabled:false).
      // XLSX loaders that ARE enabled (ies, docentes) run later and will
      // override these aliases with fresher per-row data if available.
      const augmented = Object.assign({}, vals);
      if (vals.students   != null) augmented.cursosStudents   = vals.students;
      if (vals.entrants   != null) augmented.cursosEntrants   = vals.entrants;
      if (vals.graduates  != null) augmented.cursosGraduates  = vals.graduates;
      if (vals.courses    != null) augmented.cursosCourses    = vals.courses;
      if (vals.vacancies  != null) augmented.cursosVacancies  = vals.vacancies;
      if (vals.occupancy  != null) augmented.cursosOccupancy  = vals.occupancy;
      if (vals.dropout    != null) augmented.cursosDropout    = vals.dropout;
      if (vals.completion != null) augmented.cursosCompletion = vals.completion;
      if (vals.doctors    != null) augmented.iesDocDout       = vals.doctors;
      if (vals.capes      != null) augmented.capesConceito    = vals.capes;
      if (vals.cnpq       != null) augmented.cnpqCaptacao     = vals.cnpq;
      if (upsertYearIndicators(sigla, year, augmented)) count++;
    }
    if (count === 0) throw new Error("no_valid_rows");
    // Carrega dados multi-ano do Relatório Despesa 8050 (2024/2025/2026)
    const byYearData = data.byYear || {};
    for (const [sigla, yearMap] of Object.entries(byYearData)) {
      for (const [yr, vals] of Object.entries(yearMap || {})) {
        upsertYearIndicators(sigla, yr, vals);
      }
    }
    if (data.clusters)   window.SETI_CLUSTERS   = data.clusters;
    if (data.quartiRefs) window.SETI_QUARTIREFS  = data.quartiRefs;
    registerBase(NOME_BASE + " (ano=" + year + ")", "real", count, inferPrecomputedSourceBases(data));
  } catch (err) {
    const reason = friendlyError(err);
    console.warn("[" + NOME_BASE + "] " + reason, err && err.message ? err.message : "");
    registerFailedBase(NOME_BASE, reason);
  }
}

async function loadAllData() {
  try {
    const loaders = [
      loadPrecomputedJson(),   // bases pesadas/agregadas via JSON pré-processado
      ...Object.values(SETI_DATASETS)
        .filter(function(dataset) { return dataset.enabled; })
        .map(function(dataset) {
          if (dataset.key === "egressos") return loadEgressosBase();
          if (dataset.key === "ies")      return loadIesBase();
          if (dataset.key === "docentes") return loadDocentesBase();
          if (dataset.key === "rais")     return loadRaisBase();
          if (dataset.key === "cbo2")     return loadCbo2Base();
          if (dataset.key === "fundoParana") return loadFundoParanaBase();
          return loadGenericDataset(dataset.key);
        }),
    ];
    await Promise.all(loaders);
  } catch (err) {
    console.error("[loadAllData] Erro inesperado.", err);
  } finally {
    refreshPanelFromData();
    reportDashboardStatus();
  }
}
SETIDataHub.loadGenericDataset = loadGenericDataset;
SETIDataHub.loadAllData = loadAllData;

document.addEventListener("DOMContentLoaded", function() { loadAllData(); });
