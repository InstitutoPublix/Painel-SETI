// Catálogo embutido gerado originalmente de '5. Relação de Indicadores das Universidades.xlsx' — 96 indicadores. A planilha é fonte de referência/catalogação, não é carregada em runtime.
const INDICATOR_CATALOG = {
  "ind1": {
    "codigo": 1,
    "nome": "Proporção de ocupação de vagas no Ensino Superior Público Estadual",
    "categoria": "Acesso e Inclusão",
    "formula": "Total de alunos matriculados / total de vagas ofertadas x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Município; Tipo de curso; Turno",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Participação no ensino terciário",
    "uso": "Permite avaliar o grau de ocupação da oferta existente, comparando o volume de matrículas (QT_MAT) com o total de vagas oferecidas (QT_VG_TOTAL) e identificando possíveis situações de ociosidade relativa da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind2": {
    "codigo": 2,
    "nome": "Número de Matrículas de Graduação da Rede Pública",
    "categoria": "Acesso e Inclusão",
    "formula": "Somatório do número de matrículas nos cursos de graduação na modalidade presencial da rede pública",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Matrículas no ensino terciário",
    "uso": "Permite dimensionar o porte da universidade em termos de matrículas de graduação presencial da rede pública, servindo como variável de contexto para relativizar comparações entre instituições de tamanhos diferentes.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind3": {
    "codigo": 3,
    "nome": "Taxa de ocupação de vagas iniciais",
    "categoria": "Acesso e Inclusão",
    "formula": "Número de ingressantes / número de vagas iniciais ofertadas x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Ingresso no ensino terciário",
    "uso": "Permite analisar a capacidade de preenchimento das vagas novas de entrada, comparando ingressantes (QT_ING) com vagas iniciais ofertadas (QT_VG_NOVA) e identificando menor ou maior atratividade da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind4": {
    "codigo": 4,
    "nome": "Proporção de ingressantes oriundos da escola pública",
    "categoria": "Acesso e Inclusão",
    "formula": "Número de ingressantes oriundos da escola pública / total de ingressantes x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Município; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Perfil e equidade dos estudantes no ensino terciário",
    "uso": "Permite avaliar o perfil de inclusão social dos ingressantes, a partir da participação de estudantes oriundos de escolas públicas (QT_ING_PROCESCPUBLICA) no total de ingressantes (QT_ING).",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind5": {
    "codigo": 5,
    "nome": "Taxa anual de desvinculação discente",
    "categoria": "Permanência e Conclusão",
    "formula": "Número de estudantes desvinculados do curso / total de estudantes matriculados no ano x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade; Tipo de curso; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Não conclusão do ensino terciário",
    "uso": "Permite monitorar a perda anual de vínculo discente, usando a quantidade de alunos desvinculados do curso (QT_SIT_DESVINCULADO) em relação ao total de matrículas (QT_MAT), e levantar hipóteses sobre dificuldades de permanência.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind6": {
    "codigo": 6,
    "nome": "Proporção de docentes com doutorado",
    "categoria": "Qualidade Acadêmica",
    "formula": "Número de docentes com doutorado / total de docentes x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do conhecimento",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Qualificação do corpo docente",
    "uso": "Permite analisar a qualificação acadêmica do corpo docente, comparando docentes com doutorado (QT_DOC_EX_DOUT) com o total de docentes em exercício (QT_DOC_EXE). institucional.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind7": {
    "codigo": 7,
    "nome": "Proporção de alunos em mobilidade acadêmica no ano",
    "categoria": "Qualidade Acadêmica",
    "formula": "Quantidade de alunos em mobilidade acadêmica no ano / Total de alunos matriculados no ano × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Mobilidade estudantil",
    "uso": "Permite avaliar a intensidade da mobilidade acadêmica discente, a partir da quantidade de alunos que se vincularam temporariamente a outra instituição (QT_MOB_ACADEMICA) em relação ao total de matrículas (QT_MAT), como sinal de circulação acadêmica e inserção em redes.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind8": {
    "codigo": 8,
    "nome": "Proporção de docentes estrangeiros",
    "categoria": "Qualidade Acadêmica",
    "formula": "Quantidade de docentes estrangeiros / Quantidade de docentes em exercício x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Programa",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Internacionalização do corpo acadêmico",
    "uso": "Permite analisar o grau de internacionalização do corpo docente, comparando docentes estrangeiros em exercício (QT_DOC_EX_EST) com o total de docentes em exercício (QT_DOC_EXE).",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind9": {
    "codigo": 9,
    "nome": "Acesso ao Portal CAPES pela biblioteca da universidade",
    "categoria": "Qualidade Acadêmica",
    "formula": "Acesso ao Portal CAPES x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Recursos institucionais e de aprendizagem",
    "uso": "Permite verificar a presença ou ausência de acesso institucional ao Portal CAPES pela biblioteca da universidade, funcionando como indicador binário de infraestrutura informacional de apoio ao ensino e à pesquisa.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind10": {
    "codigo": 10,
    "nome": "Total de cursos",
    "categoria": "Oferta e Territorialização",
    "formula": "Contagem de cursos",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o porte e a diversidade da oferta da instituição, permitindo comparações entre universidades e leitura da dispersão da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind11": {
    "codigo": 11,
    "nome": "Total de vagas",
    "categoria": "Oferta e Territorialização",
    "formula": "Somatório do número de vagas ofertadas",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Município",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Ingresso no ensino terciário",
    "uso": "Mede o volume potencial de atendimento da instituição e permite avaliar a escala da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind12": {
    "codigo": 12,
    "nome": "Total de estudantes",
    "categoria": "Acesso e Inclusão",
    "formula": "Somatório do número de alunos matriculados",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Matrículas no ensino terciário",
    "uso": "Mede o volume discente observado e serve como variável de contexto para relativizar comparações entre instituições.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind13": {
    "codigo": 13,
    "nome": "Total de estudantes ingressantes",
    "categoria": "Acesso e Inclusão",
    "formula": "Somatório do número de estudantes ingressantes",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Ingresso no ensino terciário",
    "uso": "Mede o fluxo anual de entrada de novos estudantes e ajuda a analisar a atratividade da instituição.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind14": {
    "codigo": 14,
    "nome": "Total de estudantes concluintes",
    "categoria": "Permanência e Conclusão",
    "formula": "Somatório do número de estudantes concluintes",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Conclusão no ensino terciário",
    "uso": "Mede o volume de estudantes que concluíram a formação e ajuda a analisar a capacidade de formação final da instituição.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind15": {
    "codigo": 15,
    "nome": "Média de vagas por curso",
    "categoria": "Oferta e Territorialização",
    "formula": "Total de vagas / total de cursos",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o tamanho médio da oferta por curso e ajuda a identificar diferenças de escala entre instituições.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind16": {
    "codigo": 16,
    "nome": "Participação da IEES no total de vagas",
    "categoria": "Oferta e Territorialização",
    "formula": "Vagas da IEES / vagas totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o peso relativo de cada universidade no conjunto analisado.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind17": {
    "codigo": 17,
    "nome": "Participação do município no total de vagas",
    "categoria": "Oferta e Territorialização",
    "formula": "Vagas do município / vagas totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Município; Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra a concentração territorial da oferta e ajuda a identificar polos de atendimento.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind18": {
    "codigo": 18,
    "nome": "Participação do curso no total de vagas",
    "categoria": "Oferta e Territorialização",
    "formula": "Vagas do curso / vagas totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra a composição da oferta por curso e ajuda a identificar concentração em determinadas áreas.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind19": {
    "codigo": 19,
    "nome": "Participação da IEES no total de cursos",
    "categoria": "Oferta e Territorialização",
    "formula": "Cursos da IEES / cursos totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a diversidade institucional relativa da oferta de cursos.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind20": {
    "codigo": 20,
    "nome": "Participação do município no total de cursos",
    "categoria": "Oferta e Territorialização",
    "formula": "Cursos do município / cursos totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Município; Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a dispersão territorial dos cursos e ajuda a identificar concentração geográfica da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind21": {
    "codigo": 21,
    "nome": "Média de estudantes por curso",
    "categoria": "Acesso e Inclusão",
    "formula": "Estudantes / cursos",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume discente médio por curso e ajuda a comparar densidade de ocupação entre instituições.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind22": {
    "codigo": 22,
    "nome": "Participação da IEES no total de estudantes",
    "categoria": "Acesso e Inclusão",
    "formula": "Estudantes da IEES / estudantes totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Matrículas no ensino terciário",
    "uso": "Mostra o peso discente relativo de cada universidade no conjunto analisado.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind23": {
    "codigo": 23,
    "nome": "Relação estudantes por vaga",
    "categoria": "Acesso e Inclusão",
    "formula": "Estudantes / vagas",
    "unidade": "Razão",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Aproxima o nível de ocupação relativa da oferta total disponível.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind24": {
    "codigo": 24,
    "nome": "Taxa de ocupação das vagas de ingresso",
    "categoria": "Acesso e Inclusão",
    "formula": "Alunos ingressantes / vagas de ingresso x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Ingresso no ensino terciário",
    "uso": "Mede o aproveitamento da oferta inicial do processo seletivo.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind25": {
    "codigo": 25,
    "nome": "Vagas de ingresso não ocupadas",
    "categoria": "Acesso e Inclusão",
    "formula": "Vagas de ingresso - alunos ingressantes",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume de ociosidade inicial da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind26": {
    "codigo": 26,
    "nome": "Taxa de ocupação das vagas",
    "categoria": "Acesso e Inclusão",
    "formula": "Alunos matriculados / vagas totais x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Participação no ensino terciário",
    "uso": "Mede a proporção efetivamente preenchida da oferta disponível.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind27": {
    "codigo": 27,
    "nome": "Taxa de concluintes",
    "categoria": "Permanência e Conclusão",
    "formula": "Alunos concluintes / vagas de ingresso x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Conclusão no ensino terciário",
    "uso": "Mede a proporção de concluintes em relação à oferta inicial de vagas.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind28": {
    "codigo": 28,
    "nome": "Vagas não ocupadas",
    "categoria": "Acesso e Inclusão",
    "formula": "Vagas totais - alunos matriculados",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o estoque de ociosidade global da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind29": {
    "codigo": 29,
    "nome": "Taxa de ocupação por grau",
    "categoria": "Acesso e Inclusão",
    "formula": "Alunos do grau / vagas do grau x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Tipo de curso; Universidade",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite detectar diferenças de preenchimento entre bacharelado, licenciatura e tecnólogo.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind30": {
    "codigo": 30,
    "nome": "Taxa de ocupação - Diurno",
    "categoria": "Acesso e Inclusão",
    "formula": "Alunos do turno / vagas do turno x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Turno",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite detectar turnos com maior ou menor preenchimento.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind31": {
    "codigo": 31,
    "nome": "Taxa de ocupação - Noturno",
    "categoria": "Acesso e Inclusão",
    "formula": "Alunos do turno / vagas do turno x 101",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Turno",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite detectar turnos com maior ou menor preenchimento.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind32": {
    "codigo": 32,
    "nome": "Taxa de ocupação por município",
    "categoria": "Oferta e Territorialização",
    "formula": "Alunos do município / vagas do município x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Município; Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite detectar concentração territorial da ocupação da oferta.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind33": {
    "codigo": 33,
    "nome": "Egressos IEES",
    "categoria": "Inserção Profissional",
    "formula": "Somatório do número de egressos",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a quantidade total de formados da IES e da coorte.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind34": {
    "codigo": 34,
    "nome": "Egressos inseridos no mercado de trabalho formal (Região Sul)",
    "categoria": "Inserção Profissional",
    "formula": "Somatório do número de egressos encontrados nas RAIS (Sul)",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Região",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a quantidade de egressos localizados na RAIS no recorte geográfico amplo.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind35": {
    "codigo": 35,
    "nome": "Taxa de inserção de egressos (Região Sul)",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados na região Sul  / Egressos x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Região; Tipo de curso",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Taxa de emprego de graduados do ensino terciário",
    "uso": "Mede a proporção de egressos encontrados no recorte geográfico amplo. Permite avaliar o nível de empregabilidade dos egressos, podendo ser desagregado por tipo de curso (bacharelado, licenciatura e tecnólogo), território ou instituição.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind36": {
    "codigo": 36,
    "nome": "Egressos inseridos no mercado de trabalho formal (Paraná)",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no Paraná",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a quantidade de egressos localizados formalmente no Paraná.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind37": {
    "codigo": 37,
    "nome": "Taxa de inserção de egressos no mercado de trabalho no Paraná",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no Paraná / Somatório do número de egressos x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso; Região",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Taxa regional de emprego de graduados do ensino terciário",
    "uso": "Mede a proporção de egressos com vínculo formal no Paraná. Permite avaliar o nível de empregabilidade dos egressos, podendo ser desagregado por tipo de curso (bacharelado, licenciatura e tecnólogo), território ou instituição.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind38": {
    "codigo": 38,
    "nome": "Egressos aderentes ao filtro CBO2 inseridos no mercado de trabalho (Paraná)",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no Paraná + CBO2",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do curso; Tipo de curso",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a quantidade de egressos com vínculo formal no Paraná que atendem ao filtro CBO2.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind39": {
    "codigo": 39,
    "nome": "Percentual de egressos empregados no Paraná em ocupações aderentes ao CBO2",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no Paraná + CBO2 / Egressos encontrados no Paraná x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do curso; Tipo de curso",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Aderência entre área de formação e ocupação",
    "uso": "Mede o percentual dos egressos empregados no Paraná que estão em ocupações aderentes ao filtro CBO2.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind40": {
    "codigo": 40,
    "nome": "Média salarial dos egressos inseridos no mercado de trabalho do Paraná aderentes ao CBO2",
    "categoria": "Inserção Profissional",
    "formula": "Média salarial do grupo Paraná + CBO2",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do curso; Tipo de curso",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Rendimentos de graduados do ensino terciário empregados",
    "uso": "Permite analisar a remuneração média dos egressos do grupo aderente.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind41": {
    "codigo": 41,
    "nome": "Egressos inseridos no mercado formal na cidade-sede da IES",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados na cidade-sede da IES",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Município",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite detectar a quantidade de egressos empregados formalmente na cidade-sede da IES.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind42": {
    "codigo": 42,
    "nome": "Taxa de egressos empregados formalmente na cidade-sede da IES",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados na cidade-sede da IES / Somatório do número de egressos x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Município",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a proporção de egressos empregados formalmente na cidade-sede da IES.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind43": {
    "codigo": 43,
    "nome": "Total de códigos de vagas docentes",
    "categoria": "Qualidade Acadêmica",
    "formula": "Somatório de Total códigos de vagas (LGU)",
    "unidade": "Número",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / LGU",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a capacidade formal instalada de vagas docentes da universidade.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind44": {
    "codigo": 44,
    "nome": "Vagas docentes disponíveis para ocupação",
    "categoria": "Qualidade Acadêmica",
    "formula": "Somatório de Vagas disponíveis para ocupação por docentes efetivos",
    "unidade": "Número",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / LGU",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o estoque de vagas efetivamente disponíveis para provimento docente no recorte analisado.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind45": {
    "codigo": 45,
    "nome": "Vagas docentes efetivas ocupadas",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Vagas ocupadas por Docentes efetivos",
    "unidade": "Número",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume de posições docentes efetivamente preenchidas.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind46": {
    "codigo": 46,
    "nome": "Taxa de ocupação do quadro docente",
    "categoria": "Corpo Docente",
    "formula": "Vagas ocupadas por Docentes efetivos / Total códigos de vagas (LGU) x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o quanto do quadro legal total está efetivamente ocupado.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind47": {
    "codigo": 47,
    "nome": "Taxa de utilização das vagas docentes disponíveis",
    "categoria": "Corpo Docente",
    "formula": "Vagas ocupadas por Docentes efetivos / Vagas disponíveis para ocupação por docentes efetivos x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o grau de utilização do estoque liberado para ocupação. Em alguns casos pode ultrapassar 100% por efeito de transição/regra administrativa, então exige leitura contextual.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind48": {
    "codigo": 48,
    "nome": "Vagas docentes condicionadas à autorização governamental",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Vagas condicionadas autorização governamental (Art. 15)",
    "unidade": "Número",
    "periodicidade": "Mensal",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / LGU",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume de vagas cuja ocupação ainda depende de autorização governamental.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind49": {
    "codigo": 49,
    "nome": "Percentual de vagas condicionadas à autorização governamental",
    "categoria": "Corpo Docente",
    "formula": "Vagas condicionadas autorização governamental / Total códigos de vagas (LGU) x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / LGU",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o peso relativo das restrições de autorização sobre o quadro docente.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind50": {
    "codigo": 50,
    "nome": "Quantidade de TIDE atribuído ao corpo docente",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Quantidade de TIDE atribuído ao corpo docente",
    "unidade": "Número",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume de vagas disponíveis que estão com TIDE atribuído.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind51": {
    "codigo": 51,
    "nome": "Participação do TIDE no quadro docente disponível",
    "categoria": "Corpo Docente",
    "formula": "Quantidade de TIDE atribuído ao corpo docente / Vagas disponíveis para ocupação por docentes efetivos x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a participação do regime TIDE dentro do conjunto de vagas disponíveis para docentes efetivos.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind52": {
    "codigo": 52,
    "nome": "Percentual de TIDE não atribuído",
    "categoria": "Corpo Docente",
    "formula": "Quantidade de TIDE NÃO atribuído ao corpo docente / Vagas disponíveis para ocupação por docentes efetivos x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra a parcela do quadro disponível que não está sob regime TIDE.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind53": {
    "codigo": 53,
    "nome": "Carga horária média de docentes efetivos",
    "categoria": "Corpo Docente",
    "formula": "Carga horaria docentes efetivos / Vagas ocupadas por Docentes efetivos",
    "unidade": "Horas",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI / Sistema de códigos de vagas",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Aproxima a intensidade média de carga horária por posição docente efetivamente ocupada.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind54": {
    "codigo": 54,
    "nome": "Carga horária CRES autorizada",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Carga Horaria CRES Autorizada Resolução Seti",
    "unidade": "Horas",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a capacidade autorizada de contratação/cobertura por CRES no período.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind55": {
    "codigo": 55,
    "nome": "Carga horária CRES utilizada",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Carga Horaria CRES Utilizada",
    "unidade": "Horas",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o volume efetivamente usado de carga horária CRES.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind56": {
    "codigo": 56,
    "nome": "Taxa de utilização da CRES",
    "categoria": "Corpo Docente",
    "formula": "Carga Horaria CRES Utilizada / Carga Horaria CRES (Autorizado + Licença) x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o aproveitamento da carga horária CRES efetivamente disponível no período.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind57": {
    "codigo": 57,
    "nome": "Saldo de carga horária CRES não utilizada",
    "categoria": "Corpo Docente",
    "formula": "Somatório de Carga Horaria Não Utilizada",
    "unidade": "Horas",
    "periodicidade": "Mensal",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o estoque de capacidade temporária não executada.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind58": {
    "codigo": 58,
    "nome": "Taxa de ociosidade da CRES",
    "categoria": "Corpo Docente",
    "formula": "Carga Horaria Não Utilizada / Carga Horaria CRES (Autorizado + Licença) x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra a parcela da capacidade CRES disponível que não foi utilizada.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind59": {
    "codigo": 59,
    "nome": "Participação da CRES no esforço docente total",
    "categoria": "Corpo Docente",
    "formula": "Carga Horaria CRES Utilizada / (Carga horaria docentes efetivos + Carga Horaria CRES Utilizada) x 100",
    "unidade": "Percentual",
    "periodicidade": "Mensal",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Paraná",
    "fonte": "SETI",
    "serie": "2022-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Ajuda a entender o quanto a universidade depende de carga horária temporária em relação ao esforço docente total observado.",
    "link": "Dados internos da SETI",
    "observacoes": ""
  },
  "ind60": {
    "codigo": 60,
    "nome": "Captação de recursos do CNPq",
    "categoria": "Pesquisa e Inovação",
    "formula": "Soma dos valores captados em bolsas, auxílios e projetos de pesquisa no período",
    "unidade": "Reais (R$)",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade",
    "dimensao": "Brasil",
    "fonte": "CNPq",
    "serie": "2020-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o volume de recursos de fomento captados via CNPq pela universidade no período.",
    "link": "https://www.gov.br/cnpq/pt-br/acesso-a-informacao/dados-abertos/paineis-de-dados",
    "observacoes": ""
  },
  "ind61": {
    "codigo": 61,
    "nome": "Número de vínculos de fomento do CNPq",
    "categoria": "Pesquisa e Inovação",
    "formula": "Somatório dos Benef. Modal / Ano por universidade e período",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do conhecimento",
    "dimensao": "Brasil",
    "fonte": "CNPq",
    "serie": "2020-2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mostra o volume de vínculos de fomento do CNPq registrados para a universidade no período. Não representa o número de pesquisadores únicos, pois a base não possui identificador único do pesquisador e um mesmo indivíduo pode aparecer em mais de um vínculo, modalidade ou ano.",
    "link": "https://www.gov.br/cnpq/pt-br/acesso-a-informacao/dados-abertos/paineis-de-dados",
    "observacoes": ""
  },
  "ind62": {
    "codigo": 62,
    "nome": "Conceito dos programas de pós-graduação no ano de referência",
    "categoria": "Qualidade Acadêmica",
    "formula": "Somatória dos conceitos dos programas de pós-graduação / total de programas de pós-graduação com conceito informado",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do conhecimento",
    "dimensao": "Brasil",
    "fonte": "CAPES – Base Pós-Graduação",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite segmentar docentes por nível de Qualidade Acadêmica e cruzar posteriormente com perfil docente, bolsa e internacionalização.",
    "link": "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/outras-acoes/censo-da-pos-graduacao-stricto-sensu",
    "observacoes": ""
  },
  "ind63": {
    "codigo": 63,
    "nome": "Proporção de docentes permanentes da pós-graduação",
    "categoria": "Corpo Docente",
    "formula": "Número de docentes permanentes da pós-graduação / total de docentes da pós-graduação x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Programa",
    "dimensao": "Brasil",
    "fonte": "CAPES – Base Pós-Graduação",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite medir estabilidade/composição do quadro docente e calcular, no Power BI, a proporção de permanentes por IES, programa, UF ou ano.",
    "link": "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/outras-acoes/censo-da-pos-graduacao-stricto-sensu",
    "observacoes": ""
  },
  "ind64": {
    "codigo": 64,
    "nome": "Proporção de docentes estrangeiros da pós-graduação",
    "categoria": "Internacionalização",
    "formula": "Número de docentes da pós-graduação com nacionalidade diferente de brasileira / total de docentes da pós-graduação x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Programa",
    "dimensao": "Brasil",
    "fonte": "CAPES – Base Pós-Graduação",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Ajuda a analisar grau de internacionalização do corpo docente e comparar programas/IES com maior inserção internacional.",
    "link": "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/outras-acoes/censo-da-pos-graduacao-stricto-sensu",
    "observacoes": ""
  },
  "ind65": {
    "codigo": 65,
    "nome": "Proporção de docentes da pós-graduação com bolsa de produtividade",
    "categoria": "Qualidade Acadêmica",
    "formula": "Número de docentes da pós-graduação com bolsa de produtividade / total de docentes da pós-graduação x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Programa",
    "dimensao": "Brasil",
    "fonte": "CAPES – Base Pós-Graduação",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite identificar concentração de docentes com reconhecimento acadêmico e cruzar com conceito do programa, permanência e internacionalização.",
    "link": "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/outras-acoes/censo-da-pos-graduacao-stricto-sensu",
    "observacoes": ""
  },
  "ind66": {
    "codigo": 66,
    "nome": "Proporção de programas de pós-graduação com conceito CAPES 5, 6 e 7 no ano de referência",
    "categoria": "Qualidade Acadêmica",
    "formula": "Número de programas de pós-graduação com conceito CAPES 5, 6 ou 7 / total de programas de pós-graduação com conceito informado x 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Área do conhecimento",
    "dimensao": "Brasil",
    "fonte": "CAPES – Base Pós-Graduação",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Facilita análises comparativas e criação de cortes rápidos no Power BI entre programas de maior e menor desempenho.",
    "link": "https://www.gov.br/capes/pt-br/acesso-a-informacao/acoes-e-programas/outras-acoes/censo-da-pos-graduacao-stricto-sensu",
    "observacoes": ""
  },
  "ind67": {
    "codigo": 67,
    "nome": "Taxa de Ocupação de Vagas por Tipo de Curso",
    "categoria": "Acesso e Inclusão",
    "formula": "Número de matrículas no tipo de curso / número de vagas ofertadas no tipo de curso × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Tipo de curso; Universidade; Área do curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Participação por área de formação",
    "uso": "Permite avaliar o grau de ocupação da oferta por tipo de formação, identificando diferenças de atratividade entre bacharelado, licenciatura e tecnólogo, podendo ser desagregado por universidade e área do curso.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind68": {
    "codigo": 68,
    "nome": "Índice de Especialização da Oferta Acadêmica",
    "categoria": "Oferta e Territorialização",
    "formula": "Maior valor entre (% de cursos de bacharelado, % de cursos de licenciatura, % de cursos de tecnólogo)",
    "unidade": "Índice (0 a 1)",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Distribuição por áreas de formação",
    "uso": "Permite identificar o grau de concentração da oferta acadêmica em um tipo de formação, diferenciando instituições mais especializadas daquelas com oferta mais diversificada, podendo ser analisado por universidade. O resultado será um índice entre 0 e 1.\nInterpretação:\n0,33        Oferta bem diversificada entre os tipos\n0,60        Alguma concentração em um tipo\n0,90        Oferta fortemente especializada em um tipo",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind69": {
    "codigo": 69,
    "nome": "Proporção de Cursos de Licenciatura na Oferta",
    "categoria": "Oferta e Territorialização",
    "formula": "Número de cursos de licenciatura / total de cursos × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Universidade; Tipo de curso",
    "dimensao": "Brasil",
    "fonte": "INEP",
    "serie": "2020-2024",
    "atualizacao": "2026-04-01",
    "ocde": "Formação de professores",
    "uso": "Permite avaliar o peso da formação de professores na estrutura da oferta acadêmica da instituição, relevante para análise de políticas educacionais e formação docente, podendo ser desagregado por universidade.",
    "link": "https://www.gov.br/inep/pt-br/acesso-a-informacao/dados-abertos/microdados/censo-da-educacao-superior",
    "observacoes": ""
  },
  "ind71": {
    "codigo": 71,
    "nome": "Egressos inseridos no mercado formal por município de vínculo",
    "categoria": "Inserção Profissional",
    "formula": "Contagem de registros da base RAIS por município de vínculo",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Município; Universidade; Curso; Tipo de curso; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Distribuição regional do emprego de graduados",
    "uso": "Permite identificar os municípios que mais absorvem egressos das IEES no mercado formal, revelando polos territoriais de inserção profissional.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind72": {
    "codigo": 72,
    "nome": "Participação do município na inserção formal dos egressos",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no município / total de egressos encontrados na RAIS × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Município; Universidade; Curso; Tipo de curso; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Distribuição regional do emprego de graduados",
    "uso": "Mostra a concentração territorial dos vínculos formais dos egressos, permitindo avaliar o peso relativo de cada município na absorção dos egressos.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind73": {
    "codigo": 73,
    "nome": "Egressos inseridos no mercado formal por curso padronizado",
    "categoria": "Inserção Profissional",
    "formula": "Contagem de registros da base RAIS por curso padronizado",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade; Tipo de curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Taxa de emprego de graduados do ensino terciário",
    "uso": "Permite identificar quais cursos concentram maior número de egressos localizados no mercado formal.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind74": {
    "codigo": 74,
    "nome": "Participação do curso na inserção formal dos egressos",
    "categoria": "Inserção Profissional",
    "formula": "Egressos encontrados no curso / total de egressos encontrados na RAIS × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade; Tipo de curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Taxa de emprego de graduados do ensino terciário",
    "uso": "Mostra o peso relativo de cada curso no total de egressos encontrados na RAIS, permitindo comparar a composição da inserção profissional por formação.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind75": {
    "codigo": 75,
    "nome": "Egressos inseridos no mercado formal por tipo de curso",
    "categoria": "Inserção Profissional",
    "formula": "Contagem de registros da base RAIS por tipo de curso — excluindo registros com classificação \"Não identificado\"",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Tipo de curso; Universidade; Curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Taxa de emprego de graduados do ensino terciário",
    "uso": "Permite comparar o volume de egressos inseridos no mercado formal entre bacharelado, licenciatura e tecnólogo. Requer tratamento prévio da categoria \"Não identificado\" para evitar distorção nas participações relativas.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind76": {
    "codigo": 76,
    "nome": "Diversidade ocupacional dos egressos por curso",
    "categoria": "Inserção Profissional",
    "formula": "Contagem distinta de ocupações CBO por curso padronizado",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade; Tipo de curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Correspondência entre formação e ocupação",
    "uso": "Mede a variedade de ocupações formais exercidas pelos egressos de cada curso, indicando se a formação leva a trajetórias ocupacionais mais concentradas ou mais diversificadas.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind77": {
    "codigo": 77,
    "nome": "Distribuição dos egressos por grande grupo ocupacional CBO2",
    "categoria": "Inserção Profissional",
    "formula": "Contagem de registros da base RAIS por grande grupo CBO2",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "CBO2; Universidade; Curso; Tipo de curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Correspondência entre formação e ocupação",
    "uso": "Permite analisar em quais grandes grupos ocupacionais os egressos estão empregados, apoiando leituras sobre o perfil ocupacional da inserção.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind78": {
    "codigo": 78,
    "nome": "Participação dos grandes grupos ocupacionais CBO2 na inserção dos egressos",
    "categoria": "Inserção Profissional",
    "formula": "Egressos no grupo CBO2 / total de egressos encontrados na RAIS × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "CBO2; Universidade; Curso; Tipo de curso; Município; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Correspondência entre formação e ocupação",
    "uso": "Mostra a distribuição relativa dos egressos por grandes grupos ocupacionais, permitindo identificar concentração em determinados perfis de ocupação.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind79": {
    "codigo": 79,
    "nome": "Municípios de destino profissional dos egressos por curso",
    "categoria": "Inserção Profissional",
    "formula": "Contagem distinta de municípios com egressos encontrados na RAIS por curso padronizado",
    "unidade": "Número",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade; Tipo de curso; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Distribuição regional do emprego de graduados",
    "uso": "Mede o alcance territorial da inserção profissional dos egressos de cada curso. A base cobre 514 municípios distintos na região Sul.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind80": {
    "codigo": 80,
    "nome": "Índice de dispersão territorial dos egressos por curso",
    "categoria": "Inserção Profissional",
    "formula": "Número de municípios distintos com egressos do curso / total de egressos encontrados no curso",
    "unidade": "Razão",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Curso; Universidade; Tipo de curso; Coorte",
    "dimensao": "Paraná",
    "fonte": "SETI / RAIS",
    "serie": "RAIS 2023-2025",
    "atualizacao": "2026-04-01",
    "ocde": "Distribuição regional do emprego de graduados",
    "uso": "Permite comparar cursos quanto à dispersão territorial da inserção profissional. Recomenda-se estabelecer um número mínimo de egressos por curso antes de publicar o índice, pois cursos com poucos formados tendem a apresentar valores artificialmente elevados.",
    "link": "Dados internos da SETI / https://www.gov.br/trabalho-e-emprego/pt-br/assuntos/estatisticas-trabalho/microdados-rais-e-caged",
    "observacoes": ""
  },
  "ind81": {
    "codigo": 81,
    "nome": "Taxa de Execução Orçamentária (Empenho)",
    "categoria": "Eficiência Orçamentária",
    "formula": "Empenhado / Orçamento Atualizado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES (UO-Sigla); por GND; por Fonte de Recursos; por Ação/Programa",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Avalia se o aumento de dotação orçamentária se converte em execução real. Permite identificar IES com baixa absorção de recursos e correlacionar com indicadores acadêmicos.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Valores abaixo de 85% indicam dificuldades de execução. Valores acima de 100% sinalizam suplementações não previstas."
  },
  "ind82": {
    "codigo": 82,
    "nome": "Taxa de Liquidação",
    "categoria": "Eficiência Orçamentária",
    "formula": "Liquidado / Empenhado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-02",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a conversão de empenhos em entrega efetiva de bens/serviços.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Taxa de liquidação muito abaixo da taxa de empenho pode indicar restos a pagar elevados."
  },
  "ind83": {
    "codigo": 83,
    "nome": "Taxa de Pagamento sobre Liquidado",
    "categoria": "Eficiência Orçamentária",
    "formula": "Pago / Liquidado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por GND",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-03",
    "ocde": "Sem correspondência direta",
    "uso": "Sinaliza a capacidade de caixa da IES para honrar obrigações liquidadas. Taxas baixas indicam acúmulo de restos a pagar processados.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind84": {
    "codigo": 84,
    "nome": "Grau de Contingenciamento Orçamentário",
    "categoria": "Eficiência Orçamentária",
    "formula": "Contingenciado / Orçamento Atualizado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto menor, melhor",
    "desagregacoes": "Por IES; por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-04",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a parcela do orçamento bloqueada por contingenciamento. Permite avaliar o quanto da dotação disponível está efetivamente liberado para execução.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "O Indicador pode ter cobertura parcial para anos anteriores a 2021."
  },
  "ind85": {
    "codigo": 85,
    "nome": "Variação da Dotação Orçamentária (Dotação Inicial vs. Atualizada)",
    "categoria": "Eficiência Orçamentária",
    "formula": "(Orçamento Atualizado – Dotação Inicial) / Dotação Inicial × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Neutra (valores muito positivos ou muito negativos indicam baixa qualidade do planejamento)",
    "desagregacoes": "Por IES; por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-05",
    "ocde": "Sem correspondência direta",
    "uso": "Avalia a qualidade do planejamento orçamentário. Variações elevadas (para mais ou menos) indicam imprevisibilidade no processo de alocação de recursos.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Créditos adicionais e suplementações legislativas podem causar variações positivas legítimas, não necessariamente por falha de planejamento."
  },
  "ind86": {
    "codigo": 86,
    "nome": "Participação de Pessoal e Encargos no Total da Despesa",
    "categoria": "Estrutura de Gastos",
    "formula": "Soma do Orçamento Atualizado (GND = 'Pessoal e Encargos Sociais') / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Neutra (referência setorial: ~75–80% para IES públicas estaduais brasileiras)",
    "desagregacoes": "Por IES; por Sub-elemento (vencimentos, obrigações patronais, contratos temporários)",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-06",
    "ocde": "Sem correspondência direta",
    "uso": "Indicador de rigidez orçamentária. Permite correlacionar com indicadores de produtividade acadêmica (publicações, titulações por docente).",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Percentuais acima de 85% indicam rigidez severa. Valores nominais devem ser deflacionados para análises longitudinais. MEC/ANDIFES: média nacional ~75%."
  },
  "ind87": {
    "codigo": 87,
    "nome": "Participação de Outras Despesas Correntes no Total",
    "categoria": "Estrutura de Gastos",
    "formula": "Soma do Orçamento Atualizado (GND = 'Outras Despesas Correntes') / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Neutra",
    "desagregacoes": "Por IES; por Elemento de Despesa; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-07",
    "ocde": "Sem correspondência direta",
    "uso": "Representa a capacidade de custeio operacional (manutenção, serviços, materiais). Percentuais muito baixos indicam comprometimento da operação cotidiana.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind88": {
    "codigo": 88,
    "nome": "Proporção Despesas Correntes vs. Despesas de Capital",
    "categoria": "Estrutura de Gastos",
    "formula": "Soma do Orçamento Atualizado (Categoria = 'Despesas Correntes') / Soma do Orçamento Atualizado (Categoria = 'Despesas de Capital')",
    "unidade": "Razão",
    "periodicidade": "Anual",
    "polaridade": "Neutra (razões muito altas indicam baixa capacidade de investimento)",
    "desagregacoes": "Por IES; por Exercício",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-08",
    "ocde": "Sem correspondência direta",
    "uso": "Indica o equilíbrio entre manutenção das atividades correntes e expansão da capacidade instalada. Razões acima de 20:1 são sinais de alerta para infraestrutura.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Exercícios com obras ou aquisições pontuais podem apresentar razões artificialmente baixas. Analisar em série histórica."
  },
  "ind89": {
    "codigo": 89,
    "nome": "Participação de Recursos Livres (Tesouro Estadual) no Orçamento Total",
    "categoria": "Autonomia e Diversificação de Recursos",
    "formula": "Soma do Orçamento Atualizado (Tipo Fonte = 'Recursos Livres') / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Neutra (alta dependência pode indicar vulnerabilidade a cortes estaduais)",
    "desagregacoes": "Por IES; por GND",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-09",
    "ocde": "Sem correspondência direta",
    "uso": "Permite avaliar a vulnerabilidade da IES a políticas de austeridade fiscal estadual.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind90": {
    "codigo": 90,
    "nome": "Participação de Recursos Próprios no Orçamento Total",
    "categoria": "Autonomia e Diversificação de Recursos",
    "formula": "Soma do Orçamento Atualizado (Tipo Fonte = 'Recursos Próprios') / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por GND; por Elemento",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-10",
    "ocde": "Sem correspondência direta",
    "uso": "Recursos próprios (taxas, prestação de serviços, convênios) ampliam a autonomia gestora. Correlacionar com indicadores de extensão e transferência de tecnologia do piloto.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Recursos arrecadados por fundações de apoio vinculadas às IES não são capturados por esta base. O indicador subestima a autonomia real em IES com forte apoio fundacional."
  },
  "ind91": {
    "codigo": 91,
    "nome": "Participação de Recursos de Transferências (Federal/Convênios)",
    "categoria": "Autonomia e Diversificação de Recursos",
    "formula": "Soma do Orçamento Atualizado (Tipo Fonte = 'Decorrentes de Transferências') / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por GND",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-11",
    "ocde": "Sem correspondência direta",
    "uso": "Indica a capacidade da IES de captar recursos federais e de organismos externos. Correlacionar com número de convênios e indicadores de pesquisa do piloto.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind92": {
    "codigo": 92,
    "nome": "Participação de Investimentos em Obras e Instalações no Orçamento Total",
    "categoria": "Capacidade de Investimento",
    "formula": "Soma do Liquidado (Elemento 449051) / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por Exercício",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-12",
    "ocde": "Sem correspondência direta",
    "uso": "Mede o esforço de manutenção e ampliação da infraestrutura física.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind93": {
    "codigo": 93,
    "nome": "Participação de Investimentos em Equipamentos e Material Permanente no Orçamento Total",
    "categoria": "Capacidade de Investimento",
    "formula": "Soma do Liquidado (Elemento 449052) / Soma do Orçamento Atualizado Total × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por Exercício",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-13",
    "ocde": "Sem correspondência direta",
    "uso": "Indica o ritmo de modernização tecnológica.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": ""
  },
  "ind94": {
    "codigo": 94,
    "nome": "Percentual de variação da dotação orçamentária em relação à LOA inicial",
    "categoria": "Eficiência Orçamentária",
    "formula": "(Orçamento Atualizado – Dotação Inicial) / Dotação Inicial × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual",
    "polaridade": "Neutra (variações muito positivas ou negativas indicam baixa qualidade do planejamento)",
    "desagregacoes": "Por IES (UO-Sigla); por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Avalia a qualidade do planejamento orçamentário: variações elevadas (positivas ou negativas) indicam imprevisibilidade no processo de alocação de recursos.",
    "link": "Dados internos da SETI / SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Créditos adicionais e suplementações legislativas podem causar variações positivas legítimas, não necessariamente por falha de planejamento."
  },
  "ind95": {
    "codigo": 95,
    "nome": "Percentual de execução de liquidação do Orçamento Inicial",
    "categoria": "Eficiência Orçamentária",
    "formula": "Liquidado / Dotação Inicial × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor (referência: acima de 85% indica boa absorção do orçamento originalmente aprovado)",
    "desagregacoes": "Por IES (UO-Sigla); por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Permite avaliar se os recursos previstos originalmente na LOA foram efetivamente executados até a etapa de liquidação. Mede o grau de conversão da dotação aprovada em entrega real de bens e serviços, sinalizando a capacidade de execução frente ao planejamento inicial.",
    "link": "Dados internos da SETI / SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Valores acima de 100% indicam que houve suplementações ao longo do exercício."
  },
  "ind96": {
    "codigo": 96,
    "nome": "Percentual de execução de liquidação do Orçamento Disponível",
    "categoria": "Eficiência Orçamentária",
    "formula": "Liquidado / (Orçamento Atualizado – Contingenciado) × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES (UO-Sigla); por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a capacidade de execução sobre o orçamento efetivamente liberado para uso, descontando os valores contingenciados.",
    "link": "Dados internos da SETI / SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "O denominador (Orçamento Atualizado – Contingenciado) pode ter cobertura parcial para exercícios anteriores a 2021, nos quais a coluna de contingenciamento pode estar incompleta."
  },
  "ind97": {
    "codigo": 97,
    "nome": "Percentual de execução de liquidação do Orçamento Atualizado",
    "categoria": "Eficiência Orçamentária",
    "formula": "Liquidado / Orçamento Atualizado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor (referência: acima de 85% indica boa absorção do orçamento disponível)",
    "desagregacoes": "Por IES (UO-Sigla); por GND; por Fonte de Recursos; por Ação/Programa",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-01",
    "ocde": "Sem correspondência direta",
    "uso": "Avalia o quanto do orçamento total atualizado (dotação inicial + créditos adicionais) foi convertido em liquidação efetiva.",
    "link": "Dados internos da SETI / SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Este indicador mede diretamente a relação entre o orçamento disponível e a entrega, sem depender da etapa de empenho como intermediária."
  }
};

// Fonte dos dados reais:
// students/entrants/graduates/courses/vacancies/dropout/completion → Base Cursos - Brasil.xlsx (INEP 2024)
// doctors → Base IES - Brasil.xlsx (INEP 2024)
// cnpq → Base CNPq - Brasil.xlsx (ano mais recente por IES; UNICENTRO/UNESPAR estimados por similaridade)
// capes/pg/pgTop → Base CAPES- Pós-Graduação - Brasil.xlsx (2024)
// budget/execution/liquidation/personnel → Relatório da Despesa 8050 (2024 - 2026).xlsx via seti_precomputed.json
// supplementation → Dados de Suplementação das Universidades - Paraná.xlsx (% crédito adicional / dotação inicial)
// employment/salary → CBO2 _ RAIS 2023 e 2024 - Paraná.xlsx (egressos 2021 encontrados RAIS 2024)
// facultyOcc/cres/tide → Base Docentes - Paraná.xlsx / Base_Docentes_PR (pipeline atual)
// occupancy = ingressantes / vagas ofertadas × 100 (ind3 – vagas de ingresso); valores INEP acumulados excederiam 100%
// territory → índice de dispersão territorial (estimado; RAIS por município ainda não agregado por IES)

// ── CNPq: flag de disponibilidade da base real ───────────────────────────────
// false = Base CNPq - Brasil.xlsx ainda não carregada; ind60/ind61 retornam null (N/D).
// Alterado para true automaticamente por loadCnpqBase() quando a base for conectada.
// O CNPQ_DATA abaixo permanece ativo SOMENTE para cálculos internos (score composto,
// eficiência orçamentária, recursos próprios). Não deve ser exibido como dado real.
window.CNPQ_BASE_LOADED = false;

// ── Estimativas provisórias CNPq (uso interno em fórmulas — NÃO exibir como dado real) ──
// Fonte: valores 2020–2024 referenciados em publicações CNPq/DGP;
// UNICENTRO e UNESPAR estimados por similaridade institucional.
// Substituídos automaticamente quando loadCnpqBase() concluir com sucesso.
const CNPQ_DATA = {
  uel:      { 2020:{captacao:6.30,vinculos:986},  2021:{captacao:5.55,vinculos:972},  2022:{captacao:5.43,vinculos:1022}, 2023:{captacao:7.76,vinculos:1089},  2024:{captacao:11.05,vinculos:1215}, 2025:{captacao:9.80,vinculos:1182}  },
  uem:      { 2020:{captacao:9.92,vinculos:1191}, 2021:{captacao:9.57,vinculos:1201}, 2022:{captacao:9.13,vinculos:1279}, 2023:{captacao:12.79,vinculos:1383}, 2024:{captacao:15.38,vinculos:1388}, 2025:{captacao:13.71,vinculos:1333} },
  uepg:     { 2020:{captacao:2.04,vinculos:444},  2021:{captacao:2.01,vinculos:427},  2022:{captacao:2.02,vinculos:452},  2023:{captacao:2.93,vinculos:512},   2024:{captacao:4.06,vinculos:568},  2025:{captacao:4.43,vinculos:587}   },
  unioeste: { 2020:{captacao:2.17,vinculos:363},  2021:{captacao:2.52,vinculos:364},  2022:{captacao:2.83,vinculos:398},  2023:{captacao:3.93,vinculos:484},   2024:{captacao:5.67,vinculos:528},  2025:{captacao:5.03,vinculos:505}   },
  unicentro:{ 2020:{captacao:1.01,vinculos:245},  2021:{captacao:1.13,vinculos:264},  2022:{captacao:1.42,vinculos:288},  2023:{captacao:2.47,vinculos:385},   2024:{captacao:3.52,vinculos:394},  2025:{captacao:3.13,vinculos:404}   },
  uenp:     { 2020:{captacao:0.12,vinculos:60},   2021:{captacao:0.12,vinculos:46},   2022:{captacao:0.13,vinculos:64},   2023:{captacao:0.28,vinculos:67},    2024:{captacao:0.49,vinculos:123},  2025:{captacao:0.73,vinculos:159}   },
  unespar:  { 2020:{captacao:0.15,vinculos:59},   2021:{captacao:0.16,vinculos:63},   2022:{captacao:0.16,vinculos:71},   2023:{captacao:0.38,vinculos:106},   2024:{captacao:0.65,vinculos:144},  2025:{captacao:0.58,vinculos:145}   },
};
const raw = [
  // [id, sigla, nome, região, município, perfil, tipo,
  //  students, entrants, graduates, courses, vacancies,
  //  occupancy, dropout, completion, doctors,
  //  cnpq, capes, pg, pgTop,
  //  budget, execution, liquidation, personnel, supplementation,
  //  employment, salary, facultyOcc, cres, territory, groups]
  ["uel","UEL","Universidade Estadual de Londrina","Norte","Londrina","Pesquisa consolidada","Bacharelado",
   13523,3264,2110,58,4562, 71.5,8.3,15.6,80.9,
   9.8,5.0,42,14,
   770,92.6,96.5,78.5,70.6,
   45.2,3933,69.3,80.0,74,
   ["Alto","Alto","Médio-alto","Alto","Alto","Baixo","Alto","Médio-alto"]],
  ["uem","UEM","Universidade Estadual de Maringá","Noroeste","Maringá","Pesquisa consolidada","Bacharelado",
   12808,4328,1803,91,8365, 51.7,22.4,14.1,88.2,
   13.8,4.0,64,22,
   784,87.5,93.8,77.1,76.5,
   48.5,4209,71.3,61.3,71,
   ["Alto","Alto","Médio-alto","Alto","Alto","Alto","Alto","Alto"]],
  ["uepg","UEPG","Universidade Estadual de Ponta Grossa","Campos Gerais","Ponta Grossa","Multicampi","Bacharelado",
   8823,2986,1348,53,3475, 85.9,14.8,15.3,79.9,
   4.4,5.0,20,5,
   449,88.3,98.0,79.6,68.5,
   46.8,4477,72.1,84.9,67,
   ["Médio-alto","Médio-alto","Médio-baixo","Médio-alto","Médio-alto","Baixo","Médio-alto","Médio-alto"]],
  ["unioeste","UNIOESTE","Universidade Estadual do Oeste do Paraná","Oeste","Cascavel","Multicampi","Bacharelado",
   11214,3769,2289,71,5338, 70.6,22.4,20.4,76.5,
   5.0,5.0,31,14,
   563,92.2,96.9,80.9,60.8,
   53.8,4179,83.7,100.0,82,
   ["Médio-alto","Alto","Alto","Médio-alto","Médio-alto","Baixo","Médio-alto","Médio-baixo"]],
  ["unicentro","UNICENTRO","Universidade Estadual do Centro-Oeste","Centro-Sul","Guarapuava","Vocação territorial","Licenciatura",
   6674,1554,1160,66,3382, 45.9,9.5,17.4,75.9,
   0.8,4.0,14,1,
   341,92.5,96.9,82.4,66.6,
   52.0,4338,72.7,95.7,76,
   ["Médio-baixo","Médio-baixo","Médio-alto","Médio-baixo","Médio-baixo","Médio-alto","Médio-baixo","Médio-baixo"]],
  ["uenp","UENP","Universidade Estadual do Norte do Paraná","Norte Pioneiro","Jacarezinho","Vocação territorial","Licenciatura",
   3746,1288,607,30,5732, 22.5,21.4,16.2,70.1,
   0.8,4.0,5,0,
   156,95.7,98.7,83.7,58.4,
   42.1,3364,65.4,72.0,64,
   ["Baixo","Baixo","Médio-baixo","Baixo","Baixo","Médio-alto","Baixo","Baixo"]],
  ["unespar","UNESPAR","Universidade Estadual do Paraná","Litoral e Noroeste","Paranavaí","Artes e formação docente","Licenciatura",
   8718,3301,1203,82,4625, 71.4,21.0,13.8,59.1,
   0.3,3.0,7,0,
   303,97.0,97.6,84.8,34.6,
   54.2,3475,70.5,84.4,83,
   ["Médio-baixo","Médio-alto","Alto","Baixo","Baixo","Baixo","Médio-baixo","Baixo"]]
];
const groupKeys = ["v1","v2","v3","v4","v5","v6","v7","v8"];

// IEES estaduais brasileiras — usadas quando escopo = "Brasil"
// Dados estimados coerentes com benchmarks INEP/CNPq/CAPES 2024
const rawBrasil = [
  // [id, sigla, nome, região, município, perfil, tipo,
  //  students, entrants, graduates, courses, vacancies,
  //  occupancy, dropout, completion, doctors,
  //  cnpq, capes, pg, pgTop,
  //  budget, execution, liquidation, personnel, supplementation,
  //  employment, salary, facultyOcc, cres, territory, groups]
  ["usp","USP","Universidade de São Paulo","Sudeste","São Paulo","Pesquisa consolidada","Bacharelado",
   98000,12000,9500,260,12500, 96.0,6.5,79.2,95.0,
   280.0,5.0,280,120,
   4800,92.0,95.0,80.5,8.2,
   75.0,7200,88.0,0,32,
   ["Alto","Alto","Médio-alto","Alto","Alto","Alto","Alto","Alto"]],
  ["unicamp","UNICAMP","Universidade Estadual de Campinas","Sudeste","Campinas","Pesquisa consolidada","Bacharelado",
   38000,4500,3800,85,4800, 94.0,6.0,84.4,97.0,
   178.0,5.0,180,90,
   2200,91.0,94.0,79.8,7.5,
   79.0,7800,85.0,0,28,
   ["Alto","Alto","Médio-alto","Alto","Alto","Alto","Alto","Alto"]],
  ["unesp","UNESP","Universidade Estadual Paulista","Sudeste","São Paulo","Pesquisa consolidada","Bacharelado",
   52000,8000,5800,185,9000, 88.8,9.0,72.5,89.0,
   132.0,4.5,120,45,
   2800,90.0,93.0,80.2,9.1,
   70.0,6400,80.0,0,72,
   ["Alto","Alto","Alto","Alto","Médio-alto","Alto","Alto","Alto"]],
  ["uerj","UERJ","Universidade do Estado do Rio de Janeiro","Sudeste","Rio de Janeiro","Pesquisa consolidada","Bacharelado",
   44000,7500,3600,130,9500, 78.9,14.5,48.0,81.0,
   85.0,4.0,85,28,
   1900,86.0,90.0,82.1,11.5,
   65.0,5800,74.0,0,25,
   ["Alto","Alto","Médio-alto","Médio-alto","Médio-alto","Alto","Médio-alto","Médio-alto"]],
  ["udesc","UDESC","Universidade do Estado de Santa Catarina","Sul","Florianópolis","Multicampi","Bacharelado",
   14500,3200,2100,75,3900, 82.1,11.0,65.6,78.0,
   22.0,3.8,30,8,
   590,91.0,94.0,79.5,10.8,
   68.0,5600,76.0,0,60,
   ["Médio-alto","Médio-alto","Médio-alto","Médio-alto","Médio-alto","Médio-alto","Médio-alto","Médio-alto"]],
  ["uergs","UERGS","Universidade Estadual do Rio Grande do Sul","Sul","Porto Alegre","Vocação territorial","Licenciatura",
   8200,2100,1150,60,2900, 72.4,16.0,54.8,65.0,
   8.0,3.5,12,2,
   310,89.0,92.0,81.3,12.2,
   62.0,4800,68.0,0,76,
   ["Médio-baixo","Médio-alto","Alto","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo"]],
  ["uece","UECE","Universidade Estadual do Ceará","Nordeste","Fortaleza","Multicampi","Bacharelado",
   26000,5800,3100,98,7200, 80.6,18.0,53.4,68.0,
   18.0,3.6,38,6,
   750,88.0,91.0,81.5,13.8,
   60.0,3900,65.0,0,68,
   ["Alto","Médio-alto","Alto","Médio-alto","Médio-alto","Médio-alto","Médio-alto","Médio-baixo"]],
  ["uneb","UNEB","Universidade do Estado da Bahia","Nordeste","Salvador","Artes e formação docente","Licenciatura",
   28000,5500,2800,115,8000, 68.8,22.0,50.9,50.0,
   14.0,3.1,18,2,
   680,85.0,89.0,82.0,14.5,
   55.0,3600,61.0,0,88,
   ["Médio-alto","Alto","Alto","Baixo","Médio-baixo","Médio-alto","Médio-baixo","Médio-baixo"]],
  ["uesb","UESB","Universidade Estadual do Sudoeste da Bahia","Nordeste","Vitória da Conquista","Vocação territorial","Licenciatura",
   12000,2800,1500,62,3800, 73.7,17.0,53.6,62.0,
   12.0,3.4,22,3,
   410,87.0,90.0,81.0,13.2,
   57.0,3700,63.0,0,65,
   ["Médio-baixo","Médio-alto","Médio-alto","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo"]],
  ["ueg","UEG","Universidade Estadual de Goiás","Centro-Oeste","Anápolis","Multicampi","Licenciatura",
   18000,4500,2200,90,6200, 72.6,19.0,48.9,55.0,
   10.0,3.2,18,2,
   520,85.0,89.0,80.8,14.1,
   55.0,3500,60.0,0,82,
   ["Médio-alto","Médio-alto","Alto","Médio-baixo","Médio-baixo","Médio-alto","Médio-baixo","Médio-baixo"]],
  ["uema","UEMA","Universidade Estadual do Maranhão","Nordeste","São Luís","Multicampi","Bacharelado",
   16000,3800,1800,72,5500, 69.1,21.0,47.4,51.0,
   8.0,3.1,14,1,
   450,84.0,88.0,82.2,15.5,
   52.0,3200,58.0,0,79,
   ["Médio-baixo","Médio-alto","Alto","Baixo","Médio-baixo","Médio-baixo","Médio-baixo","Baixo"]],
  ["uepb","UEPB","Universidade Estadual da Paraíba","Nordeste","Campina Grande","Vocação territorial","Licenciatura",
   17000,4000,2000,80,5600, 71.4,18.5,50.0,58.0,
   9.0,3.3,16,2,
   490,86.0,90.0,81.5,13.8,
   56.0,3600,62.0,0,72,
   ["Médio-baixo","Médio-alto","Alto","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo"]],
  ["uepa","UEPA","Universidade do Estado do Pará","Norte","Belém","Vocação territorial","Licenciatura",
   14000,3200,1600,65,4600, 69.6,20.0,50.0,48.0,
   7.0,3.0,10,1,
   420,83.0,87.0,82.5,16.2,
   53.0,3300,60.0,0,77,
   ["Médio-alto","Médio-alto","Alto","Baixo","Médio-baixo","Médio-baixo","Médio-baixo","Baixo"]],
  ["uea","UEA","Universidade do Estado do Amazonas","Norte","Manaus","Multicampi","Bacharelado",
   13000,3000,1400,60,4600, 65.2,22.0,46.7,45.0,
   6.0,2.8,9,1,
   390,82.0,86.0,82.8,16.8,
   50.0,3100,56.0,0,84,
   ["Médio-baixo","Médio-alto","Alto","Baixo","Baixo","Médio-baixo","Médio-baixo","Baixo"]],
  ["uern","UERN","Universidade do Estado do Rio Grande do Norte","Nordeste","Mossoró","Vocação territorial","Licenciatura",
   11000,2600,1300,56,3700, 70.3,19.0,50.0,54.0,
   8.0,3.2,14,1,
   390,85.0,89.0,81.8,14.0,
   55.0,3500,61.0,0,69,
   ["Médio-baixo","Médio-alto","Médio-alto","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo","Médio-baixo"]],
  ["uesc","UESC","Universidade Estadual de Santa Cruz","Nordeste","Ilhéus","Pesquisa em desenvolvimento","Bacharelado",
   33706,null,null,196,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.519,
   ["Médio-baixo","Médio-baixo","Médio-alto",null,null,null,null,null]],
  ["uncisal","UNCISAL","Universidade Estadual de Ciências da Saúde de Alagoas","Nordeste","Maceió","Vocação territorial","Bacharelado",
   7640,null,null,72,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.515,
   ["Baixo","Baixo","Médio-alto",null,null,null,null,null]],
  ["uva","UVA","Universidade Estadual Vale do Acaraú","Nordeste","Sobral","Vocação territorial","Licenciatura",
   34654,null,null,149,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.504,
   ["Médio-baixo","Baixo","Médio-baixo",null,null,null,null,null]],
  ["unimontes","UNIMONTES","Universidade Estadual de Montes Claros","Sudeste","Montes Claros","Multicampi","Bacharelado",
   51465,null,null,323,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.554,
   ["Médio-alto","Médio-alto","Alto",null,null,null,null,null]],
  ["upe","UPE","Universidade de Pernambuco","Nordeste","Recife","Multicampi","Bacharelado",
   73889,null,null,317,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.527,
   ["Médio-alto","Médio-baixo","Médio-alto",null,null,null,null,null]],
  ["uefs","UEFS","Universidade Estadual de Feira de Santana","Nordeste","Feira de Santana","Pesquisa em desenvolvimento","Bacharelado",
   44392,null,null,175,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.503,
   ["Médio-baixo","Médio-baixo","Médio-baixo",null,null,null,null,null]],
  ["unemat","UNEMAT","Universidade do Estado de Mato Grosso","Centro-Oeste","Cáceres","Multicampi","Licenciatura",
   96747,null,null,606,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.522,
   ["Alto","Alto","Médio-alto",null,null,null,null,null]],
  ["uespi","UESPI","Universidade Estadual do Piauí","Nordeste","Teresina","Multicampi","Licenciatura",
   87300,null,null,697,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.556,
   ["Alto","Alto","Alto",null,null,null,null,null]],
  ["unitins","UNITINS","Universidade Estadual do Tocantins","Norte","Palmas","Vocação territorial","Licenciatura",
   15171,null,null,94,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.527,
   ["Baixo","Baixo","Médio-alto",null,null,null,null,null]],
  ["uenf","UENF","Universidade Estadual do Norte Fluminense Darcy Ribeiro","Sudeste","Campos dos Goytacazes","Pesquisa consolidada","Bacharelado",
   24014,null,null,100,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.515,
   ["Baixo","Baixo","Médio-alto",null,null,null,null,null]],
  ["uems","UEMS","Universidade Estadual de Mato Grosso do Sul","Centro-Oeste","Dourados","Multicampi","Licenciatura",
   33243,null,null,332,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.527,
   ["Médio-baixo","Médio-alto","Médio-alto",null,null,null,null,null]],
  ["uemg","UEMG","Universidade do Estado de Minas Gerais","Sudeste","Belo Horizonte","Artes e formação docente","Licenciatura",
   109139,null,null,646,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.462,
   ["Alto","Alto","Médio-baixo",null,null,null,null,null]],
  ["uerr","UERR","Universidade Estadual de Roraima","Norte","Boa Vista","Vocação territorial","Licenciatura",
   7605,null,null,133,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.508,
   ["Baixo","Baixo","Médio-baixo",null,null,null,null,null]],
  ["uneal","UNEAL","Universidade Estadual de Alagoas","Nordeste","Arapiraca","Vocação territorial","Licenciatura",
   28924,null,null,293,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.407,
   ["Médio-baixo","Médio-baixo","Médio-baixo",null,null,null,null,null]],
  ["ueap","UEAP","Universidade do Estado do Amapá","Norte","Macapá","Vocação territorial","Licenciatura",
   11351,null,null,67,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.014,
   ["Baixo","Baixo","Baixo",null,null,null,null,null]],
  ["uemasul","UEMASUL","Universidade Estadual da Região Tocantina do Maranhão","Nordeste","Imperatriz","Vocação territorial","Licenciatura",
   13972,null,null,157,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.228,
   ["Baixo","Baixo","Baixo",null,null,null,null,null]],
  ["undf","UnDF","Universidade do Distrito Federal","Centro-Oeste","Brasília","Vocação territorial","Licenciatura",
   2520,null,null,29,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,null,
   ["Baixo","Baixo","Baixo",null,null,null,null,null]],
  ["urca","URCA","Universidade Regional do Cariri","Nordeste","Crato","Vocação territorial","Licenciatura",
   57628,null,null,157,null, null,null,null,null,
   null,null,null,null,
   null,null,null,null,null,
   null,null,null,null,0.198,
   ["Pequeno Porte","Oferta Reduzida","Sede Única / Baixa Dispersão","Qualif. Inicial","Estrutura Incipiente",null,null,null]],
];
const universitiesBrasil = rawBrasil.map((r) => ({
  id:r[0], sigla:r[1], nome:r[2], region:r[3], municipality:r[4], profile:r[5], type:r[6],
  students:r[7], entrants:r[8], graduates:r[9], courses:r[10], vacancies:r[11],
  occupancy:r[12], dropout:r[13], completion:r[14], doctors:r[15], cnpq:r[16], capes:r[17],
  pg:r[18], pgTop:r[19], budget:r[20], execution:r[21], liquidation:r[22], personnel:r[23],
  supplementation:r[24], employment:r[25], salary:r[26], facultyOcc:r[27], cres:r[28],
  territory:r[29], groups:Object.fromEntries(groupKeys.map((k,i)=>[k,r[30][i]])),
  coursesFocus:["Administração","Agronomia","Direito","Enfermagem","Engenharia","Licenciaturas","Medicina"],
  vinculos:null
}));
const universities = raw.map((r) => ({
  id:r[0], sigla:r[1], nome:r[2], region:r[3], municipality:r[4], profile:r[5], type:r[6], students:r[7], entrants:r[8], graduates:r[9], courses:r[10], vacancies:r[11], occupancy:r[12], dropout:r[13], completion:r[14], doctors:r[15], cnpq:r[16], capes:r[17], pg:r[18], pgTop:r[19], budget:r[20], execution:r[21], liquidation:r[22], personnel:r[23], supplementation:r[24], employment:r[25], salary:r[26], facultyOcc:r[27], cres:r[28], territory:r[29], groups:Object.fromEntries(groupKeys.map((k,i)=>[k,r[30][i]])), coursesFocus:["Administração","Agronomia","Direito","Enfermagem","Engenharia","Licenciaturas","Medicina"], vinculos:null
}));
function clearEmbeddedClusterGroups(rows) {
  rows.forEach(u => {
    groupKeys.forEach(k => { u.groups[k] = null; });
    u.territoryIncome = null;
    u.idhmRegional = null;
  });
}
clearEmbeddedClusterGroups(universities.concat(universitiesBrasil));
const groupMeta = {
  v1:{label:"V1 - Porte institucional",getter:u=>u.students,format:formatNumber,criteria:[["Baixo","Até 9 mil estudantes"],["Médio-baixo","9 mil a 14 mil estudantes"],["Médio-alto","14 mil a 20 mil estudantes"],["Alto","Acima de 20 mil estudantes"]]},
  v2:{label:"V2 - Oferta acadêmica",getter:u=>u.courses*100+u.vacancies/100,format:v=>`${formatNumber(v)} pts`,criteria:[["Baixo","Oferta concentrada"],["Médio-baixo","Oferta intermediária"],["Médio-alto","Oferta ampla"],["Alto","Oferta muito diversificada"]]},
  v3:{label:"V3 - Territorialização da oferta",getter:u=>u.territory,format:v=>`${v.toFixed(1)} pts`,criteria:[["Baixo","Presença territorial concentrada"],["Médio-baixo","Presença em poucos polos"],["Médio-alto","Rede multicampi"],["Alto","Alta capilaridade territorial"]]},
  v4:{label:"V4 - Qualificação docente",getter:u=>u.doctors,format:formatPercent,criteria:[["Baixo","Até 78%"],["Médio-baixo","78% a 84%"],["Médio-alto","84% a 89%"],["Alto","Acima de 89%"]]},
  v5:{label:"V5 - Estrutura acadêmica e pós-graduação",getter:u=>u.pg*u.capes,format:v=>`${v.toFixed(0)} pts`,criteria:[["Baixo","Pós-graduação inicial"],["Médio-baixo","Estrutura em consolidação"],["Médio-alto","Pós-graduação consolidada"],["Alto","Alta maturidade acadêmica"]]},
  v6:{label:"V6 - Perfil de inserção profissional",getter:u=>u.employment,format:formatPercent,criteria:[["Baixo","Inserção abaixo da rede"],["Médio-baixo","Inserção moderada"],["Médio-alto","Inserção consistente"],["Alto","Alta inserção profissional"]]},
  v7:{label:"V7 - Renda do território (PR)",getter:u=>u.territoryIncome,format:v=>v==null?"N/D":formatCurrency(v),criteria:[]},
  v8:{label:"V8 - IDHM (PR)",getter:u=>u.idhmRegional,format:v=>v==null?"N/D":Number(v).toFixed(3).replace(".",","),criteria:[]}
};
const resultIndicators = {
  composite:{label:"Resultado institucional composto",get:u=>composite(u),format:v=>`${v.toFixed(1)} pts`},
  occupancy:{label:"Taxa de ocupação das vagas",get:u=>u.occupancy,format:formatPercent},
  completion:{label:"Taxa de concluintes",get:u=>u.completion,format:formatPercent},
  permanence:{label:"Permanência discente",get:u=>100-u.dropout,format:formatPercent},
  doctorate:{label:"Proporção de docentes com doutorado",get:u=>u.doctors,format:formatPercent},
  cnpq:{label:"Captação CNPq por estudante",get:u=>u.cnpq*1000000/u.students,format:formatCurrency},
  capes:{label:"Conceito médio CAPES",get:u=>u.capes,format:v=>v.toFixed(1)},
  employment:{label:"Taxa de inserção profissional no Paraná",get:u=>panelEmploymentRate(u),format:formatPercent},
  salary:{label:"Média salarial dos egressos",get:u=>panelEmploymentSalary(u),format:formatCurrency}
};
const effortIndicators = {
  budgetPerStudent:{label:"Custo por estudante",get:u=>u.budget*1000000/u.students,format:formatCurrency,sub:"Orçamento liquidado ÷ total de matrículas ativas (QT_MAT · INEP/Censo da Educação Superior). Não considera vagas ofertadas."},
  costGraduate:{label:"Custo por concluinte",get:u=>u.budget*1000000/u.graduates,format:formatCurrency},
  costOccupiedVacancy:{label:"Custo por vaga ocupada",get:u=>u.budget*1000000/(u.vacancies*u.occupancy/100),format:formatCurrency},
  costEmployed:{label:"Custo por egresso inserido no Paraná",get:u=>u.budget*1000000/(u.graduates*u.employment/100),format:formatCurrency},
  budget:{label:"Orçamento liquidado",get:u=>u.budget,format:formatCurrencyMillions},
  personnelShare:{label:"Participação de pessoal na despesa",get:u=>u.personnel,format:formatPercent},
  supplementation:{label:"Percentual de suplementação",get:u=>u.supplementation,format:formatPercent}
};
const tabInfo = {
  overview:["Visão integrada","Panorama Executivo","Como está o sistema universitário estadual? Síntese dos resultados acadêmicos, profissionais e orçamentários."],
  comparison:["Comparação entre pares","Comparação entre IEES","Com quem cada universidade deve ser comparada? A leitura usa média Paraná, referência Brasil e média do agrupamento dinâmico."],
  access:["Acesso, oferta e ociosidade","Acesso e Oferta","Onde há demanda, ocupação e ociosidade? Escala da oferta, ocupação, territorialização e eficiência da oferta."],
  retention:["Permanência e formação","Permanência e Formação","Os estudantes permanecem e concluem? Funil de ingressantes, matrículas e concluintes com custos associados."],
  quality:["Qualidade acadêmica e ciência","Qualidade, Pesquisa e Pós-Graduação","Onde está a maturidade acadêmica e científica? Qualificação docente, CAPES, CNPq e internacionalização."],
  faculty:["Capacidade operacional","Corpo Docente e Capacidade Operacional","Há capacidade operacional suficiente? Quadro legal, ocupação docente, TIDE, CRES e alertas."],
  employment:["Egressos e mercado","Inserção Profissional","Os egressos se inserem bem no mercado? Inserção no Paraná, aderência CBO2 e salários."],
  efficiency:["Execução","Execução Orçamentária","Dados do Relatório da Despesa 8050: execução, liquidação, composição e evolução orçamentária das universidades estaduais do Paraná."],
  performance:["Desempenho","Desempenho e Eficiência Relativa","Orçamento maior está associado a melhor desempenho? Resposta ao piloto, cruzamentos de desempenho e matriz de oportunidades das IEES."]
};
const yearAdj = {2026:[1,1,0],2025:[1,1,0],2024:[1,1,0],2023:[.985,.93,-.8],2022:[.968,.86,-1.6],2021:[.952,.80,-2.4],2020:[.941,.74,-3.2]};
const brazil = {result:{composite:82.4,occupancy:84.1,completion:58.8,permanence:88.1,doctorate:82.6,cnpq:1700,capes:3.9,employment:68.4,salary:5480},effort:{budgetPerStudent:49300,costGraduate:282000,costOccupiedVacancy:178000,costEmployed:393000,budget:780,personnelShare:80.4,supplementation:10.1}};
const state = { activeTab:"overview", scope:"Paraná", accessCourseTypeFilter:"all", semaphoreYear:null, dayNightFilter:"all", synthTableGroup:"all" };

// Local chart filter state — independent from global filters
// Each key is a chartId, value is the active quartil group (or "all")
state.localFilters = state.localFilters || {};
state.distributionCourseType = state.distributionCourseType || "all";
state.activeIndicator = state.activeIndicator || {};

// Helper: get local filter for a chart, fallback to global groupLevelFilter
function getLocalFilter(chartId) {
  return state.localFilters[chartId] || "all";
}

function setLocalFilter(chartId, value) {
  const current = state.localFilters[chartId] || "all";
  state.localFilters[chartId] = (current === value) ? "all" : value; // toggle
  if (chartId === "overviewClusterBars") state.synthTableGroup = "all";
  render();
}
window.setLocalFilter = setLocalFilter;

// Apply local filter to a dataset
function applyLocalGroupFilter(data, chartId, groupByKey) {
  const local = getLocalFilter(chartId);
  if (local === "all") return data;
  return data.filter(u => u.groups[groupByKey] === local);
}

function chartRowsByLocal(c, chartId, defaultRows) {
  const local = getLocalFilter(chartId);
  if (local === "all") return defaultRows;
  const source = c.base.length ? c.base : c.all;
  const rows = source.filter(u => u.groups[c.f.groupBy] === local);
  return rows.length ? rows : defaultRows;
}

// Render quartil chip strip for a chart
function quartilChipStrip(chartId, groupByKey, data, c) {
  const groups = groupOptions[groupByKey] || [];
  if (!groups.length) return "";
  const active = getLocalFilter(chartId);
  const chipItems = groups
    .map(g => ({ g, count: data.filter(u => u.groups[groupByKey] === g).length }))
    .filter(item => item.count > 0);
  if (!chipItems.length) return "";
  const chips = chipItems.map(({g, count}) => {
    const isActive = active === g;
    return `<button class="qchip ${isActive ? "qchip-active" : ""}" type="button"
      data-group="${g.replace(/"/g,'&quot;')}"
      title="${groupOptionNotes[groupByKey]?.[g] || g} · ${count} IEES">
      ${g}<span class="qchip-count">(${count})</span>
    </button>`;
  }).join("");
  const clearBtn = active !== "all" ? `<button class="qchip qchip-clear" type="button" onclick="setLocalFilter('${chartId}','all')" title="Remover filtro local">× Limpar</button>` : "";
  return `<div class="qchip-strip" data-chart-id="${chartId}" aria-label="Filtrar por grupo">
    <span class="qchip-label">${groupMeta[groupByKey]?.label?.replace(/^V\d+ [–-] /,"")||groupByKey}</span>
    ${chips}${clearBtn}
  </div>`;
}

// Update global quartil chips in the header bar
function updateQuartilChips(data=null) {
  const container = document.getElementById("quartilChips");
  if (!container) return;
  const variable = el.groupBy ? el.groupBy.value : "v1";
  const groups = groupOptions[variable] || [];
  const currentLevel = el.groupLevelFilter ? el.groupLevelFilter.value : "all";
  const f = filters();
  const rows = Array.isArray(data) ? data : applyFilters({...f, groupLevel:"all"}, universities.map(u => byYear(u, f.year)));
  if (!groups.length) {
    container.innerHTML = "";
    return;
  }
  const totalCount = rows.length;
  const chipItems = groups
    .map(g => ({ g, count: rows.filter(u => u.groups[variable] === g).length }))
    .filter(item => item.count > 0);
  container.innerHTML =
    `<button class="qchip ${currentLevel === "all" ? "qchip-active" : ""}" type="button" data-group="all" title="Mostrar todos os grupos">Todos<span class="qchip-count">(${totalCount})</span></button>` +
    chipItems.map(({g, count}) => {
      const isActive = currentLevel === g;
      return `<button class="qchip ${isActive ? "qchip-active" : ""}" type="button"
        data-group="${g.replace(/"/g,'&quot;')}"
        title="${groupOptionNotes[variable]?.[g] || g}">
        ${g}<span class="qchip-count">(${count})</span>
      </button>`;
    }).join("");
  const sideGroupFilter = document.getElementById("sideGroupFilter");
  if (sideGroupFilter) sideGroupFilter.innerHTML = container.innerHTML;
}

function setGlobalGroupLevel(val) {
  if (!el.groupLevelFilter) return;
  const current = el.groupLevelFilter.value;
  const next = (current === val) ? "all" : val;
  el.groupLevelFilter.value = next;
  if (state.activeTab === "overview") {
    state.localFilters["overviewClusterBars"] = next;
    state.synthTableGroup = "all";
  }
  updateQuartilChips();
  render();
}
window.setGlobalGroupLevel = setGlobalGroupLevel;

function groupVariableShortLabel(value, fallback) {
  const label = groupMeta[value]?.label || fallback || value.toUpperCase();
  return label.replace(/^V\d+\s*[–-]\s*/, "").replace(/\s*\(PR\)\s*$/, "");
}

function renderGroupVariableButtons() {
  const container = el.groupVariableButtons || document.getElementById("groupVariableButtons");
  if (container) {
    container.hidden = true;
    container.setAttribute("aria-hidden", "true");
    container.innerHTML = "";
  }
}
window.renderGroupVariableButtons = renderGroupVariableButtons;

function setGroupByVariable(value) {
  const select = el.groupBy || document.getElementById("groupBy");
  if (!select) return;
  const option = [...select.options].find(opt => opt.value === value);
  if (!option || option.disabled || option.hidden) return;
  select.value = value;
  if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
  state.localFilters = {};
  updateGroupOptions(value);
  updateScopeAvailability(state.scope);
  renderGroupVariableButtons();
  render();
}
window.setGroupByVariable = setGroupByVariable;

const groupOptions = Object.fromEntries(groupKeys.map(k => [k, []]));
const groupOptionNotes = Object.fromEntries(groupKeys.map(k => [k, {}]));
Object.entries(groupOptions).forEach(([key,labels])=>{if(groupMeta[key]) groupMeta[key].criteria=labels.map(label=>[label,groupOptionNotes[key][label]||""]);});
let _clustersApplied = false;
let _stratificationMetadataApplied = false;
function stratText(value) {
  return String(value || "").normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}
function groupKeyFromQuartilRef(ref, index) {
  const text = stratText(`${ref?.variable || ""} ${ref?.indicator || ""}`);
  if (text.includes("porte institucional")) return "v1";
  if (text.includes("oferta de cursos")) return "v2";
  if (text.includes("oferta territorial")) return "v3";
  if (text.includes("qualificacao docente")) return "v4";
  if (text.includes("estrutura academica")) return "v5";
  if (text.includes("dinamica orcamentaria")) return "v6";
  if (text.includes("renda do territorio")) return "v7";
  if (text.includes("contexto socioeconomico") || text.includes("idh")) return "v8";
  return groupKeys[index] || null;
}
function quartilNoteForLabel(ref, label) {
  const indicator = ref?.indicator || ref?.variable || "Critério oficial";
  if (label === ref?.label_q1) return `${indicator}: até ${ref.q1_limiar}`;
  if (label === ref?.label_q2) return `${indicator}: de ${ref.q1_limiar} a ${ref.q2_limiar}`;
  if (label === ref?.label_q3) return `${indicator}: de ${ref.q2_limiar} a ${ref.q3_limiar}`;
  if (label === ref?.label_q4) return `${indicator}: acima de ${ref.q3_limiar}`;
  return indicator;
}
function syncStratificationMetadataFromPrecomputed() {
  if (_stratificationMetadataApplied || !Array.isArray(window.SETI_QUARTIREFS)) return;
  groupKeys.forEach(k => {
    groupOptions[k] = [];
    groupOptionNotes[k] = {};
    if (groupMeta[k]) groupMeta[k].criteria = [];
  });
  window.SETI_QUARTIREFS.forEach((ref, index) => {
    const key = groupKeyFromQuartilRef(ref, index);
    if (!key || !groupMeta[key]) return;
    const labels = [ref.label_q4, ref.label_q3, ref.label_q2, ref.label_q1].filter(Boolean);
    groupOptions[key] = labels;
    groupOptionNotes[key] = Object.fromEntries(labels.map(label => [label, quartilNoteForLabel(ref, label)]));
    if (ref.variable) {
      groupMeta[key].label = `${key.toUpperCase()} - ${ref.variable}`;
      const option = typeof document !== "undefined" ? document.querySelector(`#groupBy option[value="${key}"]`) : null;
      if (option) option.textContent = ref.variable;
    }
    groupMeta[key].criteria = labels.map(label => [label, groupOptionNotes[key][label] || ""]);
  });
  _stratificationMetadataApplied = true;
}
function applyOfficialTerritoryValues(u) {
  // "2024" intencional: territoryIncome/idhmRegional existem apenas no entry 2024 do byYear no JSON
  const real = typeof getRealIndicators === "function" ? getRealIndicators(u.sigla, "2024") : null;
  u.territoryIncome = real?.territoryIncome ?? null;
  u.idhmRegional = real?.idhmRegional ?? null;
}
function applySETIClusters() {
  syncStratificationMetadataFromPrecomputed();
  if (_clustersApplied || !window.SETI_CLUSTERS) return;
  universities.concat(universitiesBrasil).forEach(u => {
    const cl = window.SETI_CLUSTERS[u.sigla];
    groupKeys.forEach(k => { u.groups[k] = cl && cl[k] != null ? cl[k] : null; });
    applyOfficialTerritoryValues(u);
  });
  _clustersApplied = true;
  if (el.groupBy) updateGroupOptions(el.groupBy.value || "v1");
}
groupMeta.v1.label="V1 – Porte institucional";
groupMeta.v2.label="V2 – Oferta de cursos";
groupMeta.v3.label="V3 – Oferta territorial";
groupMeta.v4.label="V4 – Qualificação docente";
groupMeta.v5.label="V5 – Estrutura acadêmica composta";
groupMeta.v6.label="V6 – Dinâmica orçamentária (PR)";
groupMeta.v6.getter=u=>(u.execution*0.34)+(u.liquidation*0.26)+(100-u.personnel)*0.18+(100-u.supplementation)*0.22;
groupMeta.v7.label="V7 – Renda do território (PR)";
groupMeta.v8.label="V8 – IDHM (PR)";
const el = {};
let currentFilteredCount = 0;
let _selectedUniversities = "all"; // "all" | "none" | string[] of u.id values

const TAB_SUMMARIES = {
  overview:   { icon:"📊", title:"Panorama Executivo",
                text:"Síntese geral do sistema, reunindo os principais indicadores, dimensões de análise, visão por agrupamentos e sinais de desempenho das instituições." },
  comparison: { icon:"⚖️", title:"Comparação entre IEES",
                text:"Compare instituições dentro de grupos semelhantes, destacando diferenças de desempenho, médias de referência e posicionamento relativo." },
  access:     { icon:"📋", title:"Acesso e Oferta",
                text:"Análises sobre cursos, vagas, matrículas, ocupação e distribuição territorial da oferta educacional." },
  retention:  { icon:"🎓", title:"Permanência e Formação",
                text:"Indicadores de trajetória acadêmica, retenção, concluintes, evasão e desempenho dos cursos ao longo do tempo." },
  quality:    { icon:"🔬", title:"Qualidade, Pesquisa e Pós-Graduação",
                text:"Qualidade acadêmica, produção científica, programas de pós-graduação, titulação docente e capacidades de pesquisa." },
  faculty:    { icon:"👥", title:"Corpo Docente e Capacidade Operacional",
                text:"Estrutura do corpo docente, regimes de trabalho, dedicação, capacidade instalada e sinais de equilíbrio operacional." },
  employment: { icon:"💼", title:"Inserção Profissional",
                text:"Relação entre formação acadêmica, aderência ocupacional, empregabilidade, inserção regional e conexão com o mercado de trabalho." },
  efficiency: { icon:"💰", title:"Orçamento e Eficiência",
                text:"Indicadores orçamentários, execução financeira, desempenho relativo e eficiência no uso dos recursos." }
};

function renderTabSummary(tabId) {
  const s = TAB_SUMMARIES[tabId];
  if (!s) return "";
  return `<div class="tab-summary-box" role="note" aria-label="Resumo da aba">
    <span class="tab-summary-icon" aria-hidden="true">${s.icon}</span>
    <div>
      <p class="tab-summary-title">${s.title}</p>
      <p class="tab-summary-text">${s.text}</p>
    </div>
  </div>`;
}
window.renderTabSummary = renderTabSummary;

function renderDimensionHelp() {
  return `<span class="dim-help-wrap">
    <button class="dim-help-btn" type="button"
      aria-expanded="false"
      aria-label="O que é Dimensão?"
      onclick="const t=this.nextElementSibling;const open=this.getAttribute('aria-expanded')==='true';this.setAttribute('aria-expanded',String(!open));t.hidden=open;">
      i
    </button>
    <span class="dim-tooltip" role="tooltip" hidden>
      Dimensão é uma forma de organizar os indicadores em grandes eixos de análise.
      Ela ajuda a interpretar o desempenho das instituições por temas, como porte,
      oferta, permanência, qualidade acadêmica, corpo docente, inserção profissional
      e orçamento.
    </span>
  </span>`;
}
window.renderDimensionHelp = renderDimensionHelp;

document.addEventListener("DOMContentLoaded", () => { cache(); populate(); bind(); render(); initSuggestedPath(); });
function cache(){["yearFilter","universityFilter","dimensionFilter","groupBy","groupLevelFilter","quartilChips","groupVariableButtons","regionFilter","resultIndicator","effortIndicator","courseTypeFilter","municipalityFilter","courseFilter","courseAreaFilter","knowledgeAreaFilter","turnFilter","pgProgramFilter","cohortFilter","cbo2Filter","sourceFilter","periodicityFilter","creditTypeFilter","resourceOriginFilter","expenseGroupFilter","advancedToggle","advancedFilters","resetFilters","fbsClear","filterCountBadge","scopeLabel","activeClusterLabel","kpiGrid","activeTabKicker","activeTabTitle","activeTabDescription","periodPill","tabContent","groupTitle","criteriaList","groupBreakdown","analyticalNote","systemAlerts"].forEach(id=>el[id]=document.getElementById(id));el.tabs=[...document.querySelectorAll(".tab-button")];}
function populate(){
  const _uniCbList=document.getElementById("universityCheckboxList");if(_uniCbList){universities.forEach(u=>{const l=document.createElement("label");l.className="iees-multi-item";l.innerHTML=`<input type="checkbox" class="uni-check" value="${u.id}"> <strong>${u.sigla}</strong> <span style="color:var(--gray-500);font-size:11px;margin-left:3px">– ${u.nome}</span>`;_uniCbList.appendChild(l);});}
  uniq(universities.map(u=>u.region)).forEach(v=>el.regionFilter?.append(new Option(v,v)));
  uniq(universities.map(u=>u.municipality)).forEach(v=>el.municipalityFilter?.append(new Option(v,v)));
  uniq(universities.flatMap(u=>u.coursesFocus)).forEach(v=>el.courseFilter?.append(new Option(v,v)));
  ["Ciências Humanas","Ciências Sociais Aplicadas","Ciências da Saúde","Engenharias","Ciências Agrárias","Linguística, Letras e Artes","Ciências Exatas e da Terra","Ciências Biológicas"].forEach(v=>el.knowledgeAreaFilter?.append(new Option(v,v)));
  ["Educação","Administração","Agronomia","Direito","Enfermagem","Engenharia","Saúde Coletiva","Desenvolvimento Regional"].forEach(v=>el.pgProgramFilter?.append(new Option(v,v)));
  ["Diretores e gerentes","Profissionais das ciências e intelectuais","Técnicos de nível médio","Trabalhadores administrativos","Serviços e comércio","Agropecuária e produção florestal","Produção industrial"].forEach(v=>el.cbo2Filter?.append(new Option(v,v)));
  updateGroupOptions(el.groupBy.value);
  renderGroupVariableButtons();
  updateScopeAvailability(state.scope);
}
function bind(){
  ["yearFilter","universityFilter","courseTypeFilter","municipalityFilter","courseFilter","courseAreaFilter","knowledgeAreaFilter","turnFilter","pgProgramFilter","cohortFilter","cbo2Filter","sourceFilter","periodicityFilter","creditTypeFilter","resourceOriginFilter","expenseGroupFilter"].forEach(id=>el[id]?.addEventListener("change",render));
  el.groupBy?.addEventListener("change",()=>{updateGroupOptions(el.groupBy.value);updateScopeAvailability(state.scope);render();});
  el.tabs.forEach(tab=>tab.addEventListener("click",()=>{state.activeTab=tab.dataset.tab;el.tabs.forEach(t=>t.classList.toggle("is-active",t===tab));render();trackPath(tab.dataset.tab);}));
  el.resetFilters?.addEventListener("click",()=>{el.yearFilter.value="2024";["universityFilter","courseTypeFilter","municipalityFilter","courseFilter","courseAreaFilter","knowledgeAreaFilter","turnFilter","pgProgramFilter","cohortFilter","cbo2Filter","sourceFilter","creditTypeFilter","resourceOriginFilter","expenseGroupFilter"].forEach(id=>{if(el[id]) el[id].value="all";});if(el.periodicityFilter) el.periodicityFilter.value="anual";el.groupBy.value="v1";updateGroupOptions("v1");setScope("PR");});
  document.addEventListener("click", e => {
    if (!e.target.closest(".dim-help-wrap")) {
      document.querySelectorAll(".dim-help-btn[aria-expanded='true']")
        .forEach(btn => {
          btn.setAttribute("aria-expanded", "false");
          btn.nextElementSibling.hidden = true;
        });
    }
  });
  // Delegação de evento para chips de quartil (local filters)
  document.addEventListener("click", function(e) {
    const chip = e.target.closest(".qchip-strip .qchip");
    if (!chip) return;
    const strip = chip.closest(".qchip-strip");
    if (!strip) return;
    const chartId = strip.dataset.chartId;
    if (!chartId) return;
    const isClear = chip.classList.contains("qchip-clear");
    if (isClear) { setLocalFilter(chartId, "all"); return; }
    const countSpan = chip.querySelector(".qchip-count");
    const groupLabel = chip.dataset.group || (countSpan
      ? chip.textContent.replace(countSpan.textContent, "")
      : chip.textContent
    ).trim();
    if (groupLabel) setLocalFilter(chartId, groupLabel);
  });
  // Delegação de evento para chips globais no header (#quartilChips)
  document.addEventListener("click", function(e) {
    const chip = e.target.closest(".quartil-chips .qchip");
    if (!chip) return;
    const isClear = chip.classList.contains("qchip-clear");
    if (isClear) { setGlobalGroupLevel("all"); return; }
    const countSpan = chip.querySelector(".qchip-count");
    const groupLabel = chip.dataset.group || (countSpan
      ? chip.textContent.replace(countSpan.textContent, "")
      : chip.textContent
    ).trim();
    if (groupLabel) setGlobalGroupLevel(groupLabel);
  });
}
window.addEventListener("scroll",()=>{
  const bar=document.querySelector(".filter-bar-compact");
  if(!bar)return;
  const scrolled=window.scrollY>120;
  bar.classList.toggle("is-scrolled",scrolled);
  bar.setAttribute("aria-hidden","false");
  if(scrolled){
    const tabName=document.getElementById("fbsTabName");
    const scope=document.getElementById("fbsScope");
    const ieesCount=document.getElementById("fbsIeesCount");
    if(tabName)tabName.textContent=tabInfo[state.activeTab]?.[1]||"";
    if(scope)scope.textContent=isBrasilScope?.(state.scope)?"Brasil":"Paraná";
    if(ieesCount)ieesCount.textContent=`${_selectedUniversities==="none"?0:currentFilteredCount||0} IEES`;
  }
});

function initSuggestedPath(){
  const container=document.getElementById("suggestedPath");
  if(!container)return;
  if(sessionStorage.getItem("pathDismissed")){container.hidden=true;return;}
  const steps=[
    {id:"overview",label:"Panorama Executivo"},
    {id:"comparison",label:"Comparação"},
    {id:"access",label:"Acesso e Oferta"}
  ];
  const btnHtml=steps.map((s,i)=>`<button type="button" class="path-btn" onclick="goToTab('${s.id}')">${s.label}</button>${i<steps.length-1?' <span class="path-sep" aria-hidden="true">→</span> ':""}`).join("");
  container.innerHTML=`<span class="path-hint">💡 Comece por:</span> ${btnHtml}`;
  container.hidden=false;
}

window.goToTab=function(tabId){
  state.activeTab=tabId;
  document.querySelectorAll(".tab-button").forEach(btn=>btn.classList.toggle("is-active",btn.dataset.tab===tabId));
  render();
  trackPath(tabId);
};

function trackPath(tabId){
  if(sessionStorage.getItem("pathDismissed"))return;
  const visited=JSON.parse(sessionStorage.getItem("pathVisited")||"[]");
  if(!visited.includes(tabId))visited.push(tabId);
  sessionStorage.setItem("pathVisited",JSON.stringify(visited));
  if(visited.length>=2){
    const container=document.getElementById("suggestedPath");
    if(container)container.hidden=true;
    sessionStorage.setItem("pathDismissed","1");
  }
}
function setScope(val){
  state.scope = val === "BR" ? "Brasil" : "Paraná";
  syncScopeToggle(state.scope);
  updateScopeAvailability(state.scope);
  render();
}
window.setScope = setScope;
function syncScopeToggle(scope){
  const isBrasil = scope === "Brasil" || scope === "BR";
  const btnPR = document.getElementById("scopeBtnPR");
  const btnBR = document.getElementById("scopeBtnBR");
  if(!btnPR || !btnBR) return;
  btnPR.classList.toggle("active", !isBrasil);
  btnBR.classList.toggle("active", isBrasil);
  btnPR.setAttribute("aria-pressed", String(!isBrasil));
  btnBR.setAttribute("aria-pressed", String(isBrasil));
}
function updateGroupOptions(variable){
  if (variable === "none") {
    if (el.groupLevelFilter) {
      el.groupLevelFilter.innerHTML = '<option value="all">Todos os grupos</option>';
      el.groupLevelFilter.disabled = true;
    }
    state.localFilters = {};
    updateQuartilChips();
    renderGroupVariableButtons();
    return;
  }
  // Reabilitar ao voltar para agrupamento real
  if (el.groupLevelFilter) {
    el.groupLevelFilter.disabled = false;
  }
  if(!el.groupLevelFilter) return;
  const current = el.groupLevelFilter.value;
  el.groupLevelFilter.innerHTML = `<option value="all" selected>Todos os grupos</option>`;
  (groupOptions[variable]||[]).forEach(label=>el.groupLevelFilter.append(new Option(label,label)));
  el.groupLevelFilter.value = [...el.groupLevelFilter.options].some(o=>o.value===current) ? current : "all";
  // Reset local chart filters when variable changes
  state.localFilters = {};
  updateQuartilChips();
  renderGroupVariableButtons();
}
function updateScopeAvailability(scope){
  if(!el.groupBy) return;
  const isBrasil = scope === "Brasil" || scope === "BR";
  ['v6','v7','v8'].forEach(v => {
    const opt = el.groupBy.querySelector(`option[value="${v}"]`);
    if(!opt) return;
    opt.disabled = isBrasil;
    opt.title = "Disponível apenas para escopo Paraná";
  });
  if(isBrasil && ['v6','v7','v8'].includes(el.groupBy.value)){
    el.groupBy.value = "v1";
    updateGroupOptions("v1");
  }
}
function updateActiveClusterLabel(c){
  if(!el.activeClusterLabel) return;
  if (c.f.noGroup) {
    el.activeClusterLabel.textContent = "Sem agrupamento";
    updateFooter(c);
    return;
  }
  const groupName = c.group === "all" ? "Todos os grupos" : c.group;
  const label = (groupMeta[c.f.groupBy]?.label || c.f.groupBy.toUpperCase())
    .replace(/^V\d+\s*[–-]\s*/, "");
  const isBR = c.f.scope === "Brasil" || c.f.scope === "BR";
  el.activeClusterLabel.textContent = isBR
    ? `Visão nacional · ${label}`
    : `Cluster: ${label} – ${groupName}`;
  updateFooter(c);
}
function updateActiveTabFilters(){
  document.querySelectorAll('[data-active-tab]').forEach(card=>{
    const enabled = card.dataset.activeTab === state.activeTab;
    card.classList.toggle("is-disabled", !enabled);
    card.querySelectorAll("select, input, button").forEach(control=>control.disabled=!enabled);
  });
}
function filters(){
  const rawGroupBy = el.groupBy?.value || "v1";
  const groupBy = rawGroupBy === "none" ? "v1" : rawGroupBy;
  const noGroup  = rawGroupBy === "none";
  return {year:el.yearFilter.value,university:_selectedUniversities,scope:state.scope,dimension:state.comparisonDimension||"all",groupBy,noGroup,groupLevel: noGroup ? "all" : (el.groupLevelFilter?.value || "all"),region:"all",result:"composite",effort:"budgetPerStudent",profile:"all",courseType:el.courseTypeFilter?.value||"all",municipality:el.municipalityFilter?.value||"all",course:el.courseFilter?.value||"all",courseArea:el.courseAreaFilter?.value||"all",knowledgeArea:el.knowledgeAreaFilter?.value||"all",turn:el.turnFilter?.value||"all",pgProgram:el.pgProgramFilter?.value||"all",cohort:el.cohortFilter?.value||"all",cbo2:el.cbo2Filter?.value||"all",source:el.sourceFilter?.value||"all",periodicity:el.periodicityFilter?.value||"anual",creditType:el.creditTypeFilter?.value||"all",resourceOrigin:el.resourceOriginFilter?.value||"all",expenseGroup:el.expenseGroupFilter?.value||"all",minDoctors:0,attention:false};
}
function isUniSelected(f,id){return Array.isArray(f.university)&&f.university.includes(id);}
function uniLabel(){
  if(_selectedUniversities==="all")return"Todas as IEES";
  if(_selectedUniversities==="none")return"Nenhuma IEES selecionada";
  const n=_selectedUniversities.length;
  if(n===1){const u=universities.find(u=>u.id===_selectedUniversities[0]);return u?u.sigla:"1 IEES selecionada";}
  return`${n} IEES selecionadas`;
}
function setUniSelection(val){
  _selectedUniversities=val;
  const lbl=document.getElementById("universityFilterLabel");
  if(lbl)lbl.textContent=uniLabel();
  const allChk=document.getElementById("uniCheckAll");
  const noneChk=document.getElementById("uniCheckNone");
  const isArr=Array.isArray(val);
  if(allChk){allChk.checked=val==="all";allChk.indeterminate=isArr&&val.length>0&&val.length<universities.length;}
  if(noneChk)noneChk.checked=val==="none";
  document.querySelectorAll(".uni-check").forEach(c=>{c.checked=isArr&&val.includes(c.value);});
}
window.setUniSelection=setUniSelection;
function scopeUniverse(scope){return (scope==="Brasil"||scope==="BR")?[...universities,...universitiesBrasil]:universities;}
function applyFilters(f=filters(),source=null){
  const rows=source||(scopeUniverse(f.scope)).map(u=>byYear(u,f.year));
  if(f.university==="none") return [];
  return rows.filter(u=>
    (f.region==="all"||u.region===f.region)&&
    (f.profile==="all"||u.profile===f.profile)&&
    (f.courseType==="all"||u.type===f.courseType)&&
    (f.municipality==="all"||u.municipality===f.municipality)&&
    (f.course==="all"||u.coursesFocus.includes(f.course))&&
    (f.groupLevel==="all"||u.groups[f.groupBy]===f.groupLevel)&&
    (f.university==="all"||Array.isArray(f.university)&&f.university.includes(u.id))&&
    u.doctors>=f.minDoctors
  );
}
function context(){
  const f=filters(), all=scopeUniverse(f.scope).map(u=>byYear(u,f.year));
  const selected=Array.isArray(f.university)?all.find(u=>u.id===f.university[0])||null:null;
  const base=all.filter(u=>(f.region==="all"||u.region===f.region)&&(f.profile==="all"||u.profile===f.profile)&&(f.courseType==="all"||u.type===f.courseType)&&(f.municipality==="all"||u.municipality===f.municipality)&&(f.course==="all"||u.coursesFocus.includes(f.course))&&u.doctors>=f.minDoctors);
  const group=f.groupLevel!=="all"?f.groupLevel:selected?selected.groups[f.groupBy]:"all";
  let ref=base.filter(u=>group==="all"||u.groups[f.groupBy]===group); if(!ref.length) ref=base;
  let display=f.university==="all"?ref:f.university==="none"?[]:ref.filter(u=>Array.isArray(f.university)&&f.university.includes(u.id));
  if(!display.length&&f.university!=="none") display=ref;
  if(f.attention&&hasOfficialQuadrants()){const ids=matrixRows(ref,f).filter(r=>r.resultRel<100&&r.effortRel>100).map(r=>r.id);ref=ref.filter(u=>ids.includes(u.id));display=display.filter(u=>ids.includes(u.id));}
  return {f,all,base,ref,display,selected,group};
}
function byYear(u,year){const [vol,bud,delta]=yearAdj[year]||yearAdj[2024];const c={...u,groups:{...u.groups},coursesFocus:[...u.coursesFocus]};["students","entrants","graduates","vacancies"].forEach(k=>c[k]=Math.round(c[k]*vol));c.budget=round(c.budget*bud,1);const cnpqReal=CNPQ_DATA[u.id]?.[Number(year)];if(cnpqReal){c.cnpq=round(cnpqReal.captacao,2);c.vinculos=cnpqReal.vinculos;}else{c.cnpq=round(c.cnpq*(.9+bud*.1),1);c.vinculos=null;}c.supplementation=round(c.supplementation+(1-bud)*3,1);["occupancy","completion","doctors","employment","facultyOcc","cres","execution","liquidation"].forEach(k=>c[k]=clamp(round(c[k]+delta,1),0,100));c.dropout=clamp(round(c.dropout-delta*.25,1),0,100);c.salary=Math.round(c.salary*(.88+bud*.12));const _rc=getRealIndicators(u.sigla,year);if(_rc&&_rc.cursosStudents!=null){if(_rc.cursosStudents!=null)c.students=_rc.cursosStudents;if(_rc.cursosEntrants!=null)c.entrants=_rc.cursosEntrants;if(_rc.cursosGraduates!=null)c.graduates=_rc.cursosGraduates;if(_rc.cursosCourses!=null)c.courses=_rc.cursosCourses;if(_rc.cursosVacancies!=null)c.vacancies=_rc.cursosVacancies;if(_rc.cursosOccupancy!=null)c.occupancy=_rc.cursosOccupancy;if(_rc.cursosDropout!=null)c.dropout=_rc.cursosDropout;if(_rc.cursosCompletion!=null)c.completion=_rc.cursosCompletion;c.vacanciesNova=_rc.cursosVacanciesNova??null;c.vacanciesDay=_rc.cursosVacanciesDay??null;c.vacanciesNight=_rc.cursosVacanciesNight??null;c.matDay=_rc.cursosMatDay??null;c.matNight=_rc.cursosMatNight??null;c.ingressOccupancy=_rc.cursosIngressOccupancy??null;c.vacanciesUnfilled=_rc.cursosVacanciesUnfilled??null;c.vacanciesNovaUnfilled=_rc.cursosVacanciesNovaUnfilled??null;c.mobility=_rc.cursosMobility??null;c.publicSchool=_rc.cursosPublicSchool??null;c.occDay=_rc.cursosOccupancyDay??null;c.occNight=_rc.cursosOccupancyNight??null;}if(_rc){if(_rc.iesDocDout!=null)c.doctors=_rc.iesDocDout;c.docForeign=_rc.iesDocForeign??null;c.capesPortal=_rc.iesCapesPortal??null;if(_rc.docTaxaOcup!=null)c.facultyOcc=_rc.docTaxaOcup;if(_rc.docCresTaxa!=null)c.cres=_rc.docCresTaxa;c.docVagasTotais=_rc.docVagasTotais??null;c.docVagasDisp=_rc.docVagasDisp??null;c.docVagasOcupadas=_rc.docVagasOcupadas??null;c.docTaxaUtil=_rc.docTaxaUtil??null;c.docVagasCond=_rc.docVagasCond??null;c.docPctCond=_rc.docPctCond??null;c.docTideAtrib=_rc.docTideAtrib??null;c.docTidePartic=_rc.docTidePartic??null;c.docTidePctNaoAtrib=_rc.docTidePctNaoAtrib??null;c.docChMedia=_rc.docChMedia??null;c.docCresAut=_rc.docCresAut??null;c.docCresUtil=_rc.docCresUtil??null;c.docCresSaldo=_rc.docCresSaldo??null;c.docCresOciosidade=_rc.docCresOciosidade??null;c.docCresPartic=_rc.docCresPartic??null;if(_rc.capesConceito!=null)c.capes=_rc.capesConceito;if(_rc.pg!=null)c.pg=_rc.pg;if(_rc.pgTop!=null)c.pgTop=_rc.pgTop;c.capesPct567=_rc.capesPct567??null;c.capesDocPermanentes=_rc.capesDocPermanentes??null;c.capesDocEstrangeiros=_rc.capesDocEstrangeiros??null;c.capesDocBolsa=_rc.capesDocBolsa??null;}if(_rc){c.budget=_rc.budget??_rc.liquidado??c.budget;c.execution=_rc.execution??_rc.tx_execucao_empenho??c.execution;c.liquidation=_rc.liquidation??_rc.tx_liquidacao??c.liquidation;c.supplementation=_rc.supplementation??_rc.var_dotacao_loa??c.supplementation;c.personnel=_rc.personnel??_rc.part_pessoal??c.personnel;if(_rc.cnpqCaptacao!=null){c.cnpq=_rc.cnpqCaptacao;}if(_rc.cnpqVinculos!=null){c.vinculos=_rc.cnpqVinculos;}c.dotacao_inicial=_rc.dotacao_inicial??c.dotacao_inicial??null;c.orcamento_atualizado=_rc.orcamento_atualizado??c.orcamento_atualizado??null;c.empenhado=_rc.empenhado??c.empenhado??null;c.liquidado=_rc.liquidado??c.liquidado??null;c.pago=_rc.pago??c.pago??null;c.tx_execucao_empenho=_rc.tx_execucao_empenho??c.tx_execucao_empenho??null;c.tx_liquidacao=_rc.tx_liquidacao??c.tx_liquidacao??null;c.tx_pagamento_liq=_rc.tx_pagamento_liq??c.tx_pagamento_liq??null;c.grau_contingenciamento=_rc.grau_contingenciamento??c.grau_contingenciamento??null;c.var_dotacao_loa=_rc.var_dotacao_loa??c.var_dotacao_loa??null;c.part_pessoal=_rc.part_pessoal??c.part_pessoal??null;c.part_outras_correntes=_rc.part_outras_correntes??c.part_outras_correntes??null;c.part_capital=_rc.part_capital??c.part_capital??null;c.ind81=_rc.ind81??c.ind81??null;c.ind82=_rc.ind82??c.ind82??null;c.ind83=_rc.ind83??c.ind83??null;c.ind84=_rc.ind84??c.ind84??null;c.ind85=_rc.ind85??c.ind85??null;c.ind86=_rc.ind86??c.ind86??null;c.ind87=_rc.ind87??c.ind87??null;c.ind88=_rc.ind88??c.ind88??null;c.ind95=_rc.ind95??c.ind95??null;}if(_rc){c.insertionRatePR=_rc.insertionRatePR??null;c.egressosMunicipios=_rc.egressosMunicipios??_rc.raisMunCount??null;c.territoryIncome=_rc.territoryIncome??c.territoryIncome??null;c.idhmRegional=_rc.idhmRegional??c.idhmRegional??null;}if(window.SETI_CLUSTERS&&window.SETI_CLUSTERS[u.sigla]){const cl=window.SETI_CLUSTERS[u.sigla];groupKeys.forEach(k=>{c.groups[k]=cl[k]!=null?cl[k]:null;});}return c;}
function render(){applySETIClusters();const c=context();currentFilteredCount=c.ref.length;syncScopeToggle(c.f.scope);updateScopeAvailability(c.f.scope);updateActiveTabFilters();renderTop(c);renderKpis(c);renderSide(c);renderTab(c);}

// ── Cobertura de anos por aba ────────────────────────────────────────────────
// Fonte: INEP → até 2024 | SETI docentes → 2022–2026 | RAIS → 2023–2024
// Relatório 8050 → 2024–2026 | Performance/Piloto → 2023–2024
const TAB_YEAR_COVERAGE = {
  overview:    [2020, 2021, 2022, 2023, 2024],
  comparison:  [2020, 2021, 2022, 2023, 2024],
  access:      [2020, 2021, 2022, 2023, 2024],
  retention:   [2020, 2021, 2022, 2023, 2024],
  quality:     [2020, 2021, 2022, 2023, 2024],
  faculty:     [2022, 2023, 2024],
  employment:  [2023, 2024],
  efficiency:  [2024, 2025, 2026],
  performance: [2023, 2024],
};

function updateYearFilterOptions(tabId) {
  const sel = el && el.yearFilter;
  if (!sel) return;
  const years = TAB_YEAR_COVERAGE[tabId] || [2020, 2021, 2022, 2023, 2024];
  const currentVal = parseInt(sel.value, 10);
  sel.innerHTML = "";
  years.slice().reverse().forEach(y => {
    const label = y === 2026 ? "2026 (em andamento)" : String(y);
    sel.appendChild(new Option(label, String(y)));
  });
  const maxYear = Math.max(...years);
  sel.value = years.includes(currentVal) ? String(currentVal) : String(maxYear);
}
window.updateYearFilterOptions = updateYearFilterOptions;

function renderTop(c){const t=tabInfo[state.activeTab];el.activeTabKicker.textContent=t[0];el.activeTabTitle.textContent=t[1];el.activeTabDescription.textContent=t[2];el.periodPill.textContent=`Ano base ${c.f.year} · Escopo ${c.f.scope}`;el.scopeLabel.textContent=c.selected?`${c.selected.sigla} | ${c.group}`:c.group==="all"?"Sistema estadual":`Grupo ${c.group}`;updateActiveClusterLabel(c);}
function renderKpis(c){
  const data=c.display.length?c.display:c.ref, ref=c.ref.length?c.ref:c.all, a=agg(data), ar=agg(ref), res=resultIndicators[c.f.result], eff=effortIndicators[c.f.effort], rows=matrixRows(ref,c.f), selectedRow=c.selected&&rows.find(r=>r.id===c.selected.id);
  const year=parseInt(c.f.year), prevYear=year-1, hasPrev=!!yearAdj[prevYear];
  let aPrev=null,arPrev=null;
  if(hasPrev){const dp=data.map(u=>byYear(u,prevYear)),rp=ref.map(u=>byYear(u,prevYear));aPrev=agg(dp);arPrev=agg(rp);}
  const d=(curr,prev,pol,unit)=>hasPrev?kpiDeltaHtml(curr,prev,pol,unit,prevYear):`<span class="kpi-delta kpi-delta-neutral">— sem variação</span>`;
  const cards=state.activeTab==="efficiency"?[
    ["Orçamento liquidado do grupo",formatCurrencyMillions(ar.budget),`${ref.length} IEES no grupo`,"+6,8%",d(ar.budget,arPrev?.budget,"neutral","pct")],["Execução orçamentária média",formatPercent(ar.execution),"empenho sobre disponível",badge(ar.execution,93,90),d(ar.execution,arPrev?.execution,"higher","pp")],["Taxa de liquidação",formatPercent(ar.liquidation),"liquidado sobre empenhado",badge(ar.liquidation,91,88),d(ar.liquidation,arPrev?.liquidation,"higher","pp")],[eff.label,eff.format(mean(ref,eff.get)),"média do grupo","ref.",null],["Resultado médio do grupo",res.format(mean(ref,res.get)),res.label,"grupo",null],["Resultado relativo",selectedRow?`${selectedRow.resultRel.toFixed(1)}%`:`${mean(rows,r=>r.resultRel).toFixed(1)}%`,"base grupo = 100",selectedRow?selectedRow.resultLabel:"média",null],["Esforço relativo",selectedRow?`${selectedRow.effortRel.toFixed(1)}%`:`${mean(rows,r=>r.effortRel).toFixed(1)}%`,"base grupo = 100",selectedRow?selectedRow.effortLabel:"média",null],["Quadrante oficial",selectedRow?selectedRow.quadrant:summarize(rows),"planilha de estratificação",`${rows.length} pontos`,null]
  ]:[
    ["Total de estudantes",formatNumber(a.students),`${formatNumber(a.entrants)} ingressantes`,"+2,1%",d(a.students,aPrev?.students,"higher","pct")],["Taxa de ocupação das vagas",formatPercent(a.occupancy),`${formatNumber(a.vacancies)} vagas`,badge(a.occupancy,88,80),d(a.occupancy,aPrev?.occupancy,"higher","pp")],["Taxa de concluintes",formatPercent(a.completion),`${formatNumber(a.graduates)} concluintes`,badge(a.completion,62,56),d(a.completion,aPrev?.completion,"higher","pp")],["Docentes com doutorado",formatPercent(a.doctors),"proporção no corpo docente",badge(a.doctors,86,80),d(a.doctors,aPrev?.doctors,"higher","pp")],["Captação CNPq",formatCurrencyMillions(a.cnpq),"recursos captados","+4,4%",d(a.cnpq,aPrev?.cnpq,"higher","pct")],["Inserção no Paraná",formatPercent(a.employment),"egressos no mercado formal",badge(a.employment,72,67),d(a.employment,aPrev?.employment,"higher","pp")],["Orçamento liquidado",formatCurrencyMillions(a.budget),"grupo selecionado","+6,8%",d(a.budget,aPrev?.budget,"neutral","pct")],["Execução orçamentária",formatPercent(a.execution),"média ponderada",badge(a.execution,93,90),d(a.execution,aPrev?.execution,"higher","pp")]
  ];
  el.kpiGrid.innerHTML=cards.map(([label,value,meta,trend,delta])=>{const cls=kpiClass(label,trend);return `<article class="kpi-card ${cls}"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`;}).join("");
}
function kpiDeltaHtml(curr,prev,polarity,unit,prevYear){
  if(prev==null)return`<span class="kpi-delta kpi-delta-neutral">— sem variação</span>`;
  let diff,displayStr;
  if(unit==="pp"){diff=curr-prev;const abs=Math.abs(diff).toFixed(1).replace(".",",");displayStr=(diff>=0?"+":"-")+abs+" p.p.";}
  else{if(!prev)return`<span class="kpi-delta kpi-delta-neutral">— sem variação</span>`;diff=(curr-prev)/Math.abs(prev)*100;const abs=Math.abs(diff).toFixed(1).replace(".",",");displayStr=(diff>=0?"+":"-")+abs+"%";}
  if(Math.abs(diff)<0.05)return`<span class="kpi-delta kpi-delta-neutral">— sem variação</span>`;
  const arrow=diff>0?"▲":"▼";
  if(polarity==="neutral")return`<span class="kpi-delta kpi-delta-neutral">${arrow} ${displayStr} vs ${prevYear}</span>`;
  const improved=polarity==="higher"?diff>0:diff<0;
  return`<span class="kpi-delta ${improved?"kpi-delta-up":"kpi-delta-down"}">${arrow} ${displayStr} vs ${prevYear}</span>`;
}
function kpiClass(label, trend){
  const text = `${label} ${trend}`.toLowerCase();
  if(text.includes("crítico") || text.includes("alerta")) return "kpi-alert";
  if(text.includes("orçamento") || text.includes("orçament") || text.includes("esforço") || text.includes("custo") || text.includes("liquidação") || text.includes("execução")) return "kpi-budget";
  if(text.includes("ocupação") || text.includes("concluintes") || text.includes("doutorado") || text.includes("inserção") || text.includes("resultado")) return "kpi-positive";
  return "kpi-default";
}
function trendClass(trend){
  const text = String(trend).toLowerCase();
  if(text.includes("crítico")) return "critical";
  if(text.includes("atenção")) return "warning";
  return "";
}
function kpiIcon(label){
  const text = label.toLowerCase();
  if(text.includes("orçamento") || text.includes("custo") || text.includes("esforço") || text.includes("liquidação") || text.includes("execução")) return "$";
  if(text.includes("estudantes") || text.includes("concluintes") || text.includes("egresso")) return "A";
  if(text.includes("ocupação") || text.includes("resultado") || text.includes("classificação")) return "%";
  if(text.includes("doutorado") || text.includes("cnpq")) return "P";
  return "I";
}
const _ca=[
  c=>!c.ref.length?{level:"error",message:"Nenhuma IEES encontrada no recorte selecionado. Ajuste os filtros."}:null,
  c=>(c.f.year==="2020"||c.f.year==="2021")?{level:"warning",message:"Dados de 2020–2021 refletem impacto da pandemia e podem estar incompletos."}:null
];
const sideContext={
  overview:{analyticalNote:"Os KPIs resumem o sistema. Universo de comparação é o cluster ativo. Outliers acima de 2 desvios-padrão são sinalizados em vermelho.",alertRules:[..._ca]},
  comparison:{analyticalNote:"A tabela ordena por desvio da média do cluster. IEES acima da média em todos os indicadores são candidatas a referência de boas práticas.",alertRules:[..._ca]},
  access:{analyticalNote:"Taxa de ocupação abaixo de 70% sinaliza ociosidade estrutural. Compare com o porte institucional antes de concluir.",alertRules:[..._ca]},
  retention:{analyticalNote:"Taxa de desvinculação acima de 10% é alerta crítico. Correlacione com oferta noturna e perfil socioeconômico do território.",alertRules:[..._ca]},
  quality:{analyticalNote:"Conceito CAPES abaixo de 4 em mais de 30% dos programas indica fragilidade da pós-graduação.",alertRules:[..._ca]},
  faculty:{analyticalNote:"Taxa de utilização da CRES abaixo de 60% sugere capacidade ociosa. Taxa acima de 95% sugere pressão sobre o quadro efetivo.",alertRules:[..._ca,c=>c.f.scope==="Brasil"?{level:"warning",message:"Dados LGU (CRES, TIDE, ocupação docente) disponíveis apenas no escopo Paraná. Resultados desta aba podem estar incompletos."}:null]},
  employment:{analyticalNote:"Taxa de inserção abaixo de 50% na Região Sul merece investigação qualitativa sobre o perfil dos cursos.",alertRules:[..._ca]},
  efficiency:{analyticalNote:"Execução abaixo de 85% do orçamento disponível indica dificuldade de absorção. Correlacione com contingenciamento.",alertRules:[..._ca]},
  performance:{analyticalNote:"IEES com menor custo por aluno e desempenho superior ao cluster apontam eficiência relativa. Analise cruzando perfil V6 e resultado acadêmico.",alertRules:[..._ca]}
};
function renderSide(c){
  if (c.f.noGroup) {
    el.groupTitle.textContent = "Sem agrupamento";
    if (el.criteriaList)  el.criteriaList.innerHTML = "";
    if (el.groupBreakdown) el.groupBreakdown.innerHTML =
      '<p style="color:var(--gray-500);font-size:13px;padding:8px 0">Nenhum agrupamento ativo.</p>';
    renderSystemAlerts(c);
    return;
  }
  const meta=groupMeta[c.f.groupBy], res=resultIndicators[c.f.result], rows=matrixRows(c.ref,c.f), sr=c.selected&&rows.find(r=>r.id===c.selected.id);
  el.groupTitle.textContent=meta.label.replace(/^V\d+\s*[–-]\s*/, "");
  el.criteriaList.innerHTML=meta.criteria.map(([l,t])=>`<div class="criteria-item"><strong>${l}</strong><span>${t}</span></div>`).join("");
  if(el.groupBreakdown){
    const variable=c.f.groupBy, groups=groupOptions[variable]||[], activeGroup=c.f.groupLevel;
    el.groupBreakdown.innerHTML=groups.map(grpLabel=>{
      const entry=meta.criteria.find(([l])=>l===grpLabel);
      const txt=entry?entry[1]:"";
      const members=scopeUniverse(c.f.scope).filter(u=>u.groups[variable]===grpLabel);
      const isActive=activeGroup===grpLabel;
      const membersHTML=members.map(u=>`<div class="group-iees-item"><span class="group-iees-sigla">${u.sigla}</span><span class="group-iees-value">${meta.format(meta.getter(u))}</span></div>`).join("");
      return `<div class="group-breakdown-card${isActive?" is-active":""}"><strong class="group-breakdown-name">${grpLabel}</strong><span class="group-breakdown-criterion">${txt}</span><div class="group-iees-list">${membersHTML}</div></div>`;
    }).join("");
  }
  const ctx=sideContext[state.activeTab]||sideContext.overview;
  const note=sr?`${c.selected.sigla}: resultado relativo de ${sr.resultRel.toFixed(1)}% e esforço relativo de ${sr.effortRel.toFixed(1)}%. Classificação descritiva: ${sr.quadrant}.`:ctx.analyticalNote;
  el.analyticalNote.innerHTML=`<span>${note}</span>`;
  const alerts=ctx.alertRules.map(fn=>fn(c)).filter(Boolean);
  if(el.systemAlerts)el.systemAlerts.innerHTML=alerts.length?alerts.map(sideAlertHtml).join(""):`<p class="side-note" style="margin:0;color:var(--gray-500)">Nenhum alerta para o recorte atual.</p>`;
}
function sideAlertHtml(a){
  const cls={error:"alert-danger",warning:"alert-warn",info:"alert-info"}[a.level]||"alert-info";
  const icon={error:"!",warning:"⚠",info:"i"}[a.level]||"i";
  return`<div class="alert-item ${cls}"><div class="alert-icon">${icon}</div><div class="alert-body"><span class="alert-msg">${a.message}</span></div></div>`;
}
function renderTab(c){const map={overview,comparison,access,retention,quality,faculty,employment,efficiency};el.tabContent.innerHTML=map[state.activeTab](c);}
function overview(c){const d=c.ref,res=resultIndicators[c.f.result];if(!d.length)return empty();const a=agg(d);return `<div class="insight-grid"><article class="visual-card card-primary"><h3>Resultado institucional por IEES</h3><p class="card-subtitle">Indicador selecionado: ${res.label}</p>${bars(d,res.get,res.format)}</article><article class="visual-card card-support"><h3>Ranking executivo do recorte</h3><p class="card-subtitle">Ordenado pelo resultado relativo ao grupo selecionado</p>${rank(matrixRows(d,c.f).sort((a,b)=>b.resultRel-a.resultRel).slice(0,5),r=>`${r.resultRel.toFixed(1)}%`,"resultLabel")}</article></div><div class="chart-grid mt-14"><article class="score-card"><h3>Selo de abrangência</h3><p class="card-subtitle">Referência comparativa ativa</p><div class="score-value">${c.f.scope}</div><div class="score-meter"><span style="width:${c.f.scope==="Brasil"?100:72}%"></span></div></article><article class="score-card"><h3>Orçamento para resultados</h3><p class="card-subtitle">Resultado composto x execução orçamentária</p><div class="score-value">${formatPercent((a.execution+a.completion)/2)}</div><div class="score-meter"><span style="width:${clamp((a.execution+a.completion)/2,0,100)}%"></span></div></article></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.nome}</span>`],["Estudantes",u=>formatNumber(u.students)],["Cursos",u=>formatNumber(u.courses)],["Ocupação",u=>formatPercent(u.occupancy)],["Concluintes",u=>formatNumber(u.graduates)],["Orçamento",u=>formatCurrencyMillions(u.budget)],["Grupo",u=>u.groups[c.f.groupBy]]],"Síntese por IEES")}`;}
function comparison(c){const d=c.ref,res=resultIndicators[c.f.result],eff=effortIndicators[c.f.effort],rows=matrixRows(d,c.f).sort((a,b)=>b.resultRel-a.resultRel),g=mean(d,res.get),p=mean(c.all,res.get),br=brazil.result[c.f.result];if(!d.length)return empty();return `<div class="architecture-message">O agrupamento é dinâmico e depende da variável selecionada. A mesma IEES pode pertencer a grupos diferentes conforme o critério de comparação.</div><div class="insight-grid"><article class="visual-card card-primary"><h3>IEES x média do grupo</h3><p class="card-subtitle">${res.label}</p>${bars(d,res.get,res.format)}</article><article class="visual-card card-support"><h3>Posição relativa</h3><p class="card-subtitle">Resultado relativo e esforço orçamentário relativo</p>${rank(rows,r=>`${r.resultRel.toFixed(1)}%`,"quadrant")}</article></div><div class="table-wrap mt-14"><h3>Tabela comparativa das IEES</h3><p class="card-subtitle">Grupo: ${c.group==="all"?"todos":c.group} | Esforço: ${eff.label}</p><table class="data-table"><thead><tr><th>IEES</th><th>Resultado</th><th>Média grupo</th><th>Média Paraná</th><th>Média Brasil</th><th>Esforço relativo</th><th>Classificação</th></tr></thead><tbody>${rows.map(r=>`<tr><td><strong>${r.sigla}</strong><br><span>${r.region}</span></td><td>${res.format(r.result)}</td><td>${res.format(g)}</td><td>${res.format(p)}</td><td>${res.format(br)}</td><td>${r.effortRel.toFixed(1)}%</td><td>${status(r.quadrant,r.tone)}</td></tr>`).join("")}</tbody></table></div>`;}
function access(c){const d=c.ref,a=agg(d),unfilled=Math.max(0,a.vacancies-Math.round(a.vacancies*a.occupancy/100));if(!d.length)return empty();return `<div class="score-grid">${score("Escala da oferta",formatNumber(a.vacancies),"Total de vagas",pct(a.vacancies,52000))}${score("Ocupação e ociosidade",formatPercent(a.occupancy),`${formatNumber(unfilled)} vagas não ocupadas`,a.occupancy)}${score("Eficiência da oferta",formatCurrency(mean(d,effortIndicators.costOccupiedVacancy.get)),"Custo por vaga ocupada",74)}</div><div class="chart-grid mt-14"><article class="visual-card card-primary"><h3>Taxa de ocupação por IEES</h3><p class="card-subtitle">Demanda, ocupação e ociosidade</p>${bars(d,u=>u.occupancy,formatPercent)}</article><article class="visual-card card-support"><h3>Participação na oferta</h3><p class="card-subtitle">Total de vagas no recorte selecionado</p>${bars(d,u=>u.vacancies,formatNumber)}</article></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`],["Cursos",u=>formatNumber(u.courses)],["Vagas",u=>formatNumber(u.vacancies)],["Ocupação",u=>formatPercent(u.occupancy)],["Vagas não ocupadas",u=>formatNumber(Math.max(0,Math.round(u.vacancies*(1-u.occupancy/100))))],["Custo por estudante",u=>formatCurrency(effortIndicators.budgetPerStudent.get(u))]],"Escala, ocupação e custo da oferta")}`;}
function retention(c){const d=c.ref,a=agg(d);if(!d.length)return empty();return `<div class="insight-grid"><article class="visual-card card-primary"><h3>Funil formativo</h3><p class="card-subtitle">Ingressantes → estudantes → concluintes</p>${(()=>{const W=280,CX=160,ent=Math.max(a.entrants,1),w2=clamp(a.students/ent*W,60,W),w3=clamp(a.graduates/ent*W,30,w2),l=w=>(160-w/2).toFixed(1),r=w=>(160+w/2).toFixed(1),rate1=(a.students/ent*100).toFixed(1).replace('.',','),rate2=(a.completion||0).toFixed(1).replace('.',','),w3b=Math.max(w3*0.85,30);return '<svg viewBox="0 0 320 220" width="100%" style="max-width:340px;margin:0 auto;display:block"><polygon points="'+l(W)+',10 '+r(W)+',10 '+r(w2)+',60 '+l(w2)+',60" fill="var(--blue-700)" opacity="0.9"/><text x="'+CX+'" y="32" text-anchor="middle" fill="white" font-size="13" font-weight="600">'+formatNumber(a.entrants)+'</text><text x="'+CX+'" y="50" text-anchor="middle" fill="white" font-size="10">Ingressantes</text><text x="'+CX+'" y="76" text-anchor="middle" fill="var(--gray-600)" font-size="11">→ '+rate1+'% permaneceram</text><polygon points="'+l(w2)+',83 '+r(w2)+',83 '+r(w3)+',133 '+l(w3)+',133" fill="var(--blue-700)" opacity="0.75"/><text x="'+CX+'" y="105" text-anchor="middle" fill="white" font-size="13" font-weight="600">'+formatNumber(a.students)+'</text><text x="'+CX+'" y="123" text-anchor="middle" fill="white" font-size="10">Matrículas ativas</text><text x="'+CX+'" y="149" text-anchor="middle" fill="var(--gray-600)" font-size="11">→ '+rate2+'% concluíram</text><polygon points="'+l(w3)+',157 '+r(w3)+',157 '+r(w3b)+',207 '+l(w3b)+',207" fill="var(--blue-700)" opacity="0.6"/><text x="'+CX+'" y="179" text-anchor="middle" fill="white" font-size="13" font-weight="600">'+formatNumber(a.graduates)+'</text><text x="'+CX+'" y="197" text-anchor="middle" fill="white" font-size="10">Concluintes</text></svg>';})()}</article><article class="visual-card card-support"><h3>Desvinculação discente</h3><p class="card-subtitle">Barras por IEES</p>${bars(d,u=>u.dropout,formatPercent)}</article></div><div class="chart-grid mt-14"><article class="visual-card card-support"><h3>Taxa de concluintes</h3><p class="card-subtitle">Resultado formativo relativo ao agrupamento</p>${bars(d,u=>u.completion,formatPercent)}</article><article class="visual-card card-support"><h3>Custo por concluinte</h3><p class="card-subtitle">Cruzamento orçamentário prioritário</p>${bars(d,effortIndicators.costGraduate.get,formatCurrency)}</article></div>`;}
function quality(c){const d=c.ref;if(!d.length)return empty();return `<div class="score-grid">${score("Qualificação docente",formatPercent(mean(d,u=>u.doctors)),"Docentes com doutorado",mean(d,u=>u.doctors))}${score("Pesquisa e CNPq",formatCurrencyMillions(sum(d,u=>u.cnpq)),"Captação no recorte",78)}${score("Pós-graduação CAPES",mean(d,u=>u.capes).toFixed(1),"Conceito médio dos programas",mean(d,u=>u.capes)*18)}</div><div class="chart-grid mt-14"><article class="visual-card card-primary"><h3>Docentes com doutorado</h3><p class="card-subtitle">Qualificação docente por IEES</p>${bars(d,u=>u.doctors,formatPercent)}</article><article class="visual-card card-support"><h3>Captação CNPq por estudante</h3><p class="card-subtitle">Eficiência acadêmico-científica</p>${bars(d,resultIndicators.cnpq.get,formatCurrency)}</article></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.profile}</span>`],["Programas PG",u=>formatNumber(u.pg)],["CAPES",u=>u.capes.toFixed(1)],["CAPES 5, 6 e 7",u=>formatNumber(u.pgTop)],["Doutores",u=>formatPercent(u.doctors)],["CNPq",u=>formatCurrencyMillions(u.cnpq)]],"Qualidade acadêmica, pós-graduação e pesquisa")}`;}
function faculty(c){const d=c.ref;if(!d.length)return empty();return `<div class="chart-grid"><article class="visual-card card-primary"><h3>Taxa de ocupação do quadro docente</h3><p class="card-subtitle">Vagas efetivas ocupadas sobre disponíveis</p>${bars(d,u=>u.facultyOcc,formatPercent)}</article><article class="visual-card card-support"><h3>Utilização da CRES</h3><p class="card-subtitle">Carga horária CRES utilizada sobre autorizada</p>${bars(d,u=>u.cres,formatPercent)}</article></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.region}</span>`],["Ocupação docente",u=>formatPercent(u.facultyOcc)],["TIDE estimado",u=>formatPercent((u.facultyOcc+u.doctors)/2)],["CRES",u=>formatPercent(u.cres)],["Despesa pessoal",u=>formatPercent(u.personnel)],["Estudantes/docente",u=>(u.students/Math.max(1,Math.round(u.students/15))).toFixed(1)]],"Quadro docente, TIDE e capacidade operacional")}`;}
function employment(c){const d=c.ref;if(!d.length)return empty();return `<div class="score-grid">${score("Inserção no Paraná",formatPercent(mean(d,u=>u.employment)),"Egressos no mercado formal",mean(d,u=>u.employment))}${score("Aderência CBO2",formatPercent(mean(d,u=>u.employment-5)),"Ocupações aderentes à formação",mean(d,u=>u.employment-5))}${score("Média salarial",formatCurrency(mean(d,u=>u.salary)),"Egressos aderentes ao CBO2",76)}</div><div class="chart-grid mt-14"><article class="visual-card card-primary"><h3>Inserção profissional no Paraná</h3><p class="card-subtitle">Taxa de egressos empregados no estado</p>${bars(d,u=>u.employment,formatPercent)}</article><article class="visual-card card-support"><h3>Média salarial dos egressos</h3><p class="card-subtitle">Egressos aderentes ao filtro CBO2</p>${bars(d,u=>u.salary,formatCurrency)}</article></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`],["Paraná",u=>formatPercent(u.employment)],["Região Sul",u=>formatPercent(u.employment+5)],["Cidade-sede",u=>formatPercent(Math.max(25,u.employment-34))],["Aderência CBO2",u=>formatPercent(u.employment-5)],["Dispersão territorial",u=>`${u.territory} pts`]],"Inserção profissional, território e aderência ocupacional")}`;}

// ── Mini gráfico de linhas SVG — série histórica ind81–87 ───────────────────
function svgLines(series, years, W, H) {
  // series: [{label, color, values:[v2024, v2025, v2026]}]
  // years: ['2024','2025','2026']
  const pad = {t:12, r:10, b:24, l:36};
  const iW = W - pad.l - pad.r, iH = H - pad.t - pad.b;
  const allVals = series.flatMap(s => s.values).filter(v => v != null);
  if (!allVals.length) return '';
  const minV = Math.max(0, Math.floor(Math.min(...allVals) / 5) * 5);
  const maxV = Math.min(100, Math.ceil(Math.max(...allVals) / 5) * 5);
  const range = maxV - minV || 1;
  const xOf = i => pad.l + (i / (years.length - 1)) * iW;
  const yOf = v => pad.t + iH - ((v - minV) / range) * iH;

  let svg = `<svg width="${W}" height="${H}" style="overflow:visible" aria-hidden="true">`;
  // Y grid lines + labels
  for (const tick of [minV, (minV+maxV)/2, maxV]) {
    const y = yOf(tick);
    svg += `<line x1="${pad.l}" y1="${y}" x2="${W-pad.r}" y2="${y}" stroke="#e5e7eb" stroke-width="1"/>`;
    svg += `<text x="${pad.l-4}" y="${y+4}" text-anchor="end" font-size="9" fill="#9ca3af">${tick.toFixed(0)}</text>`;
  }
  // X axis labels
  years.forEach((yr, i) => {
    svg += `<text x="${xOf(i)}" y="${H-4}" text-anchor="middle" font-size="9" fill="#6b7280">${yr}</text>`;
  });
  // Lines + dots
  for (const s of series) {
    const pts = s.values.map((v, i) => v != null ? [xOf(i), yOf(v)] : null);
    // path
    const segs = [];
    let inSeg = false;
    for (let i = 0; i < pts.length; i++) {
      if (pts[i]) {
        segs.push((inSeg ? 'L' : 'M') + pts[i][0].toFixed(1) + ',' + pts[i][1].toFixed(1));
        inSeg = true;
      } else { inSeg = false; }
    }
    if (segs.length > 1) svg += `<path d="${segs.join(' ')}" fill="none" stroke="${s.color}" stroke-width="2" stroke-linejoin="round"/>`;
    // dots + tooltips
    for (let i = 0; i < pts.length; i++) {
      if (!pts[i]) continue;
      const [px, py] = pts[i];
      svg += `<circle cx="${px}" cy="${py}" r="3.5" fill="${s.color}" stroke="white" stroke-width="1.5"><title>${s.label} ${years[i]}: ${s.values[i]?.toFixed(1)}%</title></circle>`;
    }
  }
  svg += '</svg>';
  return svg;
}
function historicalChart(u, precomp) {
  // precomp: { '2024': {ind81,ind82,...}, '2025': {...}, '2026': {...} }
  if (!precomp) return '';
  const years = ['2024','2025','2026'];
  const series = [
    {label:'Execução (81)', color:'#3b82f6', values: years.map(y => precomp[y]?.ind81 ?? null)},
    {label:'Liquidação (82)', color:'#10b981', values: years.map(y => precomp[y]?.ind82 ?? null)},
    {label:'Contingenciamento (84)', color:'#f59e0b', values: years.map(y => precomp[y]?.ind84 ?? null)},
    {label:'Pessoal (86)', color:'#ef4444', values: years.map(y => precomp[y]?.ind86 ?? null)},
  ].filter(s => s.values.some(v => v != null));
  if (!series.length) return '';
  const chart = svgLines(series, years, 340, 120);
  const legend = series.map(s =>
    `<span><span class="orc-dot" style="background:${s.color}"></span>${s.label}</span>`
  ).join('');
  return `<div class="orc-sub-block">
    <div class="orc-sub-header"><strong>Evolução 2024–2026 · ${u.sigla}</strong><span class="orc-ref-note">Hover nos pontos para valor exato</span></div>
    <div style="overflow-x:auto">${chart}</div>
    <div class="orc-bar-legend" style="margin-top:.4rem">${legend}</div>
  </div>`;
}

// ── Gráficos de pizza — Composição de Fontes de Despesa ─────────────────────
function svgPie(slices, size) {
  const R = size / 2 - 4, cx = size / 2, cy = size / 2;
  let svg = `<svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" aria-hidden="true">`;
  let start = -Math.PI / 2;
  for (const s of slices) {
    if (!s.pct || s.pct <= 0) continue;
    const ang = (s.pct / 100) * 2 * Math.PI;
    const end = start + ang;
    if (s.pct >= 99.9) {
      svg += `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${s.color}"/>`;
    } else {
      const x1 = (cx + R * Math.cos(start)).toFixed(1);
      const y1 = (cy + R * Math.sin(start)).toFixed(1);
      const x2 = (cx + R * Math.cos(end)).toFixed(1);
      const y2 = (cy + R * Math.sin(end)).toFixed(1);
      svg += `<path d="M${cx},${cy} L${x1},${y1} A${R},${R} 0 ${ang > Math.PI ? 1 : 0},1 ${x2},${y2} Z" fill="${s.color}" stroke="white" stroke-width="1.5" opacity="0.92"/>`;
    }
    start = end;
  }
  return svg + '</svg>';
}
const _CF_CORES = {'500':'#3a7abf','501':'#6db3e8','700':'#e8792a','703':'#f4a261','706':'#fbbf24','outros':'#94a3b8'};
function composicaoFontesSection(u) {
  const cf = u && u.composicaoFontes;
  if (!cf) return '';
  function renderGrupo(gKey) {
    const g = cf[gKey];
    if (!g || !g.total_pct) return '';
    const fontes = Object.entries(g.fontes || {}).filter(([,f]) => f && f.pct_no_orcamento > 0);
    if (!fontes.length) return '';
    const slices = fontes.map(([code, f]) => ({pct: f.pct_no_grupo, color: _CF_CORES[code] || _CF_CORES['outros']}));
    const pie = svgPie(slices, 100);
    const legend = fontes.map(([code, f]) =>
      `<li><span style="display:inline-block;width:9px;height:9px;border-radius:50%;background:${_CF_CORES[code]||_CF_CORES['outros']};margin-right:4px;vertical-align:middle"></span><span>${f.nome}</span>
       <span class="cf-vals">${f.pct_no_orcamento?.toFixed(1) ?? '—'}% orç. · ${f.pct_no_grupo?.toFixed(1) ?? '—'}% grp${f.valor != null ? ` · R$ ${f.valor.toFixed(1)}M` : ''}</span></li>`
    ).join('');
    return `<div class="cf-grupo">
      <div class="cf-grupo-header"><strong>${g.nome}</strong><span class="kpi-badge">${g.total_pct?.toFixed(1)}%</span></div>
      <div class="cf-pie-row">${pie}<ul class="cf-legend">${legend}</ul></div>
    </div>`;
  }
  const g50 = renderGrupo('grupo50');
  const g70 = renderGrupo('grupo70');
  if (!g50 && !g70) return '';
  return `<article class="visual-card cf-card">
    <h4 class="cf-ies-title">${u.sigla}</h4>
    <div class="cf-grupos-row">${g50}${g70}</div>
  </article>`;
}


// ── Bloco Eficiência e Estrutura Orçamentária (IND-81 a 87) ─────────────────
function _orcColor(v, pol, g, y) {
  if (v == null) return '';
  const ok  = 'style="color:var(--color-success,#16a34a)"';
  const mid = 'style="color:var(--color-warning,#d97706)"';
  const bad = 'style="color:var(--color-danger,#dc2626)"';
  if (pol === 'up')   return v >= g ? ok : v >= y ? mid : bad;
  if (pol === 'down') return v <= g ? ok : v <= y ? mid : bad;
  return '';
}
function _orcColorVal(v, pol, g, y) {
  if (v == null) return 'var(--blue-400,#60a5fa)';
  if (pol === 'up')   return v >= g ? 'var(--color-success,#16a34a)' : v >= y ? 'var(--color-warning,#d97706)' : 'var(--color-danger,#dc2626)';
  if (pol === 'down') return v <= g ? 'var(--color-success,#16a34a)' : v <= y ? 'var(--color-warning,#d97706)' : 'var(--color-danger,#dc2626)';
  return 'var(--blue-400,#60a5fa)';
}
function _orcClass(v, pol, g, y) {
  if (v == null) return '';
  if (pol === 'up')   return v >= g ? 'class="orc-cell-good"' : v >= y ? 'class="orc-cell-warn"' : 'class="orc-cell-bad"';
  if (pol === 'down') return v <= g ? 'class="orc-cell-good"' : v <= y ? 'class="orc-cell-warn"' : 'class="orc-cell-bad"';
  return '';
}
function _orcFmt(v, sign) {
  if (v == null) return '—';
  const s = (sign && v > 0) ? '+' : '';
  return s + v.toFixed(1).replace('.', ',') + '%';
}
function orcamentarioKpis(u) {
  const e81=u.ind81, e82=u.ind82, e83=u.ind83, e84=u.ind84, e85=u.ind85, e86=u.ind86, e87=u.ind87;
  const cap=u.part_capital;
  function card(ind, title, v, pol, g, y, note) {
    const col = _orcColor(v, pol, g, y);
    return `<div class="orc-kpi"><div class="orc-kpi-ind">${ind}</div><div class="orc-kpi-title">${title}</div><div class="orc-kpi-val" ${col}>${_orcFmt(v, ind==='IND-85')}</div>${note?`<div class="orc-kpi-note">${note}</div>`:''}</div>`;
  }
  // Pie de estrutura do orçamento (IND-86/87/capital)
  const pieSlices = [
    {pct: e86||0, color:'#3a7abf'},
    {pct: e87||0, color:'#6db3e8'},
    {pct: cap||0, color:'#94a3b8'},
  ].filter(s => s.pct > 0);
  const pieSvg = svgPie(pieSlices, 100);
  const pieLegend = [
    ['Pessoal e Encargos (IND-86)','#3a7abf', e86],
    ['Outras Despesas Correntes (IND-87)','#6db3e8', e87],
    ['Despesas de Capital','#94a3b8', cap],
  ].filter(([,, v]) => v).map(([lbl, cor, v]) =>
    `<li><span class="orc-dot" style="background:${cor}"></span>${lbl}: <strong>${_orcFmt(v)}</strong></li>`
  ).join('');
  // Bar de estrutura de gastos (IND-86/87)
  const pw = e86 ? Math.min(100, e86) : 0;
  const ow = e87 ? Math.min(100 - pw, e87) : 0;
  const cw = cap ? Math.min(100 - pw - ow, cap) : 0;
  const estrutura = `<div class="orc-struct">
    <div class="orc-struct-header"><strong>IND-86/87 — Estrutura de Gastos Correntes</strong><span class="orc-ref-note">Referência setorial: 77,5% em Pessoal (linha tracejada)</span></div>
    <div class="orc-struct-body">
      <div class="orc-pie-col">
        <div class="orc-pie-title">Estrutura do Orçamento Atualizado</div>
        ${pieSvg}
        <ul class="orc-pie-legend">${pieLegend}</ul>
      </div>
      <div class="orc-bar-col">
        <div class="orc-bar-wrap">
          <div class="orc-bar-ref" style="left:77.5%" title="Referência setorial 77,5%"></div>
          <div class="orc-bar-seg" style="width:${pw}%;background:#3a7abf" title="Pessoal e Encargos: ${_orcFmt(e86)}"></div>
          <div class="orc-bar-seg" style="width:${ow}%;background:#6db3e8" title="Outras Despesas Correntes: ${_orcFmt(e87)}"></div>
          ${cw>0?`<div class="orc-bar-seg" style="width:${cw}%;background:#94a3b8" title="Capital: ${_orcFmt(cap)}"></div>`:''}
        </div>
        <div class="orc-bar-legend">
          <span><span class="orc-dot" style="background:#3a7abf"></span>Pessoal (IND-86): ${_orcFmt(e86)}</span>
          <span><span class="orc-dot" style="background:#6db3e8"></span>Outras Correntes (IND-87): ${_orcFmt(e87)}</span>
          ${cap?`<span><span class="orc-dot" style="background:#94a3b8"></span>Capital: ${_orcFmt(cap)}</span>`:''}
        </div>
      </div>
    </div>
  </div>`;
  return `<article class="visual-card orc-block">
    <h3>Eficiência e Estrutura Orçamentária · ${u.sigla} · 2024</h3>
    <p class="card-subtitle">Indicadores 81–87 — Relatório da Despesa 8050</p>
    <div class="orc-kpis-row">
      ${card('IND-81','Execução (Empenho)',e81,'up',90,75)}
      ${card('IND-82','Liquidação',e82,'up',90,75)}
      ${card('IND-83','Pgto / Liquidado',e83,'up',90,75)}
      ${card('IND-84','Contingenciamento ↓',e84,'down',5,15,'Meta ≤ 5%')}
      ${card('IND-85','Variação Dotação',e85,'neutral',0,0,'vs LOA inicial · Neutro')}
    </div>
    ${estrutura}
    ${autonomiaBlock(u)}
    ${investimentoBlock(u)}
    ${(()=>{const c80=ind80Card(u);return c80?`<div class="orc-sub-block"><div class="orc-sub-header"><strong>Inserção Profissional — Dispersão Territorial</strong></div><div class="orc-kpis-row">${c80}</div></div>`:'';})()} 
    ${(()=>{try{const _precomp=window.SETI_BYEAR&&window.SETI_BYEAR[u.sigla];return historicalChart(u,_precomp);}catch(e){return '';}})()}
  </article>`;
}
function autonomiaBlock(u) {
  const e89=u.ind89, e90=u.ind90, e91=u.ind91;
  if (e89==null && e90==null && e91==null) return '';
  // Nota: ind90 (Arrecadação Própria, Fonte 501) é SUBCONJUNTO de ind89 (Grupo 50).
  // Barra correta: Tesouro=(ind89-ind90) + Própria=ind90 + Transferências=ind91 + Outros=resto
  const tesouro = e89!=null && e90!=null ? Math.max(0, e89-e90) : (e89||0);
  const propria = e90||0;
  const transfer = e91||0;
  const outros = Math.max(0, 100 - tesouro - propria - transfer);
  const bar = `<div class="orc-bar-wrap">
    <div class="orc-bar-seg" style="width:${tesouro.toFixed(1)}%;background:#1e40af" title="Tesouro (Fonte 500): ${tesouro.toFixed(1)}%"></div>
    <div class="orc-bar-seg" style="width:${propria.toFixed(1)}%;background:#3b82f6" title="Arrecadação Própria (IND-90/Fonte 501): ${_orcFmt(e90)}"></div>
    <div class="orc-bar-seg" style="width:${transfer.toFixed(1)}%;background:#93c5fd" title="Transferências Grupo 70 (IND-91): ${_orcFmt(e91)}"></div>
    ${outros>0.5?`<div class="orc-bar-seg" style="width:${outros.toFixed(1)}%;background:#dbeafe" title="Outros: ${outros.toFixed(1)}%"></div>`:''}
  </div>
  <div class="orc-bar-legend">
    <span><span class="orc-dot" style="background:#1e40af"></span>Rec. Livres - Tesouro: ${tesouro.toFixed(1)}%</span>
    <span><span class="orc-dot" style="background:#3b82f6"></span>Arrecadação Própria (IND-90): ${_orcFmt(e90)}</span>
    <span><span class="orc-dot" style="background:#93c5fd"></span>Transferências (IND-91): ${_orcFmt(e91)}</span>
    ${outros>0.5?`<span><span class="orc-dot" style="background:#dbeafe"></span>Outros: ${outros.toFixed(1)}%</span>`:''}
  </div>`;
  function acard(ind, title, v, pol, g, y, note) {
    return `<div class="orc-kpi"><div class="orc-kpi-ind">${ind}</div><div class="orc-kpi-title">${title}</div><div class="orc-kpi-val" ${_orcColor(v,pol,g,y)}>${_orcFmt(v)}</div>${note?`<div class="orc-kpi-note">${note}</div>`:''}</div>`;
  }
  return `<div class="orc-sub-block">
    <div class="orc-sub-header"><strong>Autonomia e Diversificação de Recursos</strong></div>
    <div class="orc-kpis-row">
      ${acard('IND-89','Recursos Livres (Grupo 50)',e89,'neutral',0,0,'Alta dependência = vulnerabilidade a cortes estaduais')}
      ${acard('IND-90','Recursos Próprios (Fonte 501)',e90,'up',10,5,'↑ melhor — maior autonomia')}
      ${acard('IND-91','Transferências (Grupo 70)',e91,'up',10,5,'↑ melhor — diversificação')}
    </div>
    ${bar}
  </div>`;
}
function investimentoBlock(u) {
  const e88=u.ind88, e92=u.ind92, e93=u.ind93, e95=u.ind95;
  if (e88==null && e92==null && e93==null && e95==null) return '';
  function icard(ind, title, v, pol, g, y, note, fmt) {
    const val = fmt ? fmt(v) : _orcFmt(v);
    return `<div class="orc-kpi"><div class="orc-kpi-ind">${ind}</div><div class="orc-kpi-title">${title}</div><div class="orc-kpi-val" ${_orcColor(v,pol,g,y)}>${val}</div>${note?`<div class="orc-kpi-note">${note}</div>`:''}</div>`;
  }
  const fmt88 = v => v!=null ? v.toFixed(1).replace('.',',')+':1' : '—';
  return `<div class="orc-sub-block">
    <div class="orc-sub-header"><strong>Capacidade de Investimento</strong></div>
    <div class="orc-kpis-row">
      ${icard('IND-88','Razão Correntes/Capital',e88,'neutral',0,0,'Quanto maior, menor capacidade de investimento', fmt88)}
      ${icard('IND-92','Obras (Elem. 51)',e92,'up',3,1,'↑ melhor · % do Orçamento Atualizado',null)}
      ${icard('IND-93','Equipamentos (Elem. 52)',e93,'up',3,1,'↑ melhor · % do Orçamento Atualizado',null)}
      ${icard('IND-95','Execução/LOA Inicial',e95,'up',85,70,'Referência ≥ 85%',null)}
    </div>
  </div>`;
}
function orcamentarioTable(rows) {
  const fmt88 = v => v != null ? v.toFixed(1).replace('.', ',') + ':1' : '—';
  const cols=[
    ['IEES',u=>`<strong>${u.sigla}</strong>`,''],
    ['Execução (81)',u=>_orcFmt(u.ind81),u=>_orcClass(u.ind81,'up',90,75)],
    ['Liquidação (82)',u=>_orcFmt(u.ind82),u=>_orcClass(u.ind82,'up',90,75)],
    ['Pgto/Liq (83)',u=>_orcFmt(u.ind83),u=>_orcClass(u.ind83,'up',90,75)],
    ['Conting (84)',u=>_orcFmt(u.ind84),u=>_orcClass(u.ind84,'down',5,15)],
    ['Var Dot (85)',u=>_orcFmt(u.ind85,true),''],
    ['Pessoal (86)',u=>_orcFmt(u.ind86),''],
    ['Outras Corr (87)',u=>_orcFmt(u.ind87),''],
    ['Corr/Cap (88)',u=>fmt88(u.ind88),''],
    ['Exec/LOA (95)',u=>_orcFmt(u.ind95),u=>_orcClass(u.ind95,'up',85,70)],
  ];
  const hd = cols.map(([h])=>`<th>${h}</th>`).join('');
  const tbody = rows.map(u=>`<tr>${cols.map(([,val,col])=>`<td ${col?col(u):''}>${val(u)}</td>`).join('')}</tr>`).join('');
  return `<article class="visual-card orc-block">
    <h3>Eficiência e Estrutura Orçamentária — Comparação</h3>
    <p class="card-subtitle">Indicadores 81–87, 88 e 95 — Relatório da Despesa 8050. Verde ≥ 90%, amarelo ≥ 75%, vermelho &lt; 75% (IND 81–83). IND-84 invertido (↓ melhor). IND-95: verde ≥ 85%.</p>
    <div style="overflow-x:auto"><table class="data-table"><thead><tr>${hd}</tr></thead><tbody>${tbody}</tbody></table></div>
  </article>`;
}
function ind80Card(u) {
  const v = u.egressosMunicipios;
  const disp = u.ind80;
  if (v == null && disp == null) return '';
  return `<div class="orc-kpi">
    <div class="orc-kpi-ind">IND-80</div>
    <div class="orc-kpi-title">Dispersão Territorial de Egressos</div>
    <div class="orc-kpi-val" style="font-size:1.2rem">${v != null ? v + ' municípios' : '—'}</div>
    ${disp != null ? `<div class="orc-kpi-note">${disp.toFixed(3).replace('.', ',')} (índice) · Razão entre municípios de destino distintos e total de egressos empregados por curso · Quanto maior, maior a dispersão territorial</div>` : '<div class="orc-kpi-note" style="color:#9ca3af">Índice não disponível</div>'}
  </div>`;
}
function orcamentarioBlock(c) {
  if (c.f.scope !== 'Paraná') return '';
  const ies = (c.display.length ? c.display : [...c.ref]).map(u => byYear(u, c.f.year)).filter(u => u.ind81 != null);
  if (!ies.length) return '';
  return ies.length === 1 ? orcamentarioKpis(ies[0]) : orcamentarioTable(ies);
}

function efficiency(c){const d=c.ref,rows=matrixRows(d,c.f);if(!d.length)return empty();return `${c.f.scope==="Paraná"?'<div class="metodologia-note"><span class="metodologia-icon">ℹ</span>Para a análise dos dados do Relatório da Despesa 8050, foram consideradas apenas as ações da Gestão das Atividades Universitárias.</div>':''}<div class="efficiency-layout"><article class="matrix-panel card-primary"><h3>Matriz de eficiência relativa por agrupamento dinâmico</h3><p class="card-subtitle">Eixo X: esforço orçamentário relativo ao grupo | Eixo Y: resultado relativo ao grupo | Tamanho: orçamento liquidado</p>${matrix(rows,c)}</article><div class="matrix-side"><article class="visual-card card-support"><h3>Quadrante oficial</h3><p class="card-subtitle">Disponível apenas quando a planilha/JSON trouxer critério de quadrante.</p>${legend(rows)}</article><article class="visual-card card-support"><h3>Insights automáticos</h3><p class="card-subtitle">Sinais contextuais para investigação</p>${insights(rows,c)}</article></div></div>${metricTable(d,[["IEES",u=>`<strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span>`],["Orçamento",u=>formatCurrencyMillions(u.budget)],["Execução",u=>formatPercent(u.execution)],["Liquidação",u=>formatPercent(u.liquidation)],["Pessoal",u=>formatPercent(u.personnel)],["Suplementação",u=>formatPercent(u.supplementation)]],"Estrutura de gastos e execução orçamentária")}${orcamentarioBlock(c)}${c.f.scope==="Paraná"?(()=>{const _ies=(c.display.length?c.display:[...c.ref]).map(u=>composicaoFontesSection(byYear(u,c.f.year))).filter(Boolean);return _ies.length?`<article class="visual-card cf-card" style="margin-top:1.5rem"><h3>Composição por Fonte de Despesa</h3><p class="card-subtitle">Participação de cada fonte nos grupos de vinculação — Orçamento Atualizado 2024</p><div class="cf-all-ies">${_ies.join('')}</div></article>`:'';})():''}`;}
function matrix(rows,c){if(!hasOfficialQuadrants())return quadrantUnavailableBlock();const max=Math.max(...rows.map(r=>r.budget),1);return `<div class="efficiency-matrix" role="img" aria-label="Matriz resultado relativo por esforço orçamentário relativo"><div class="quadrant-label q1">alto resultado, baixo esforço</div><div class="quadrant-label q2">alto resultado, alto esforço</div><div class="quadrant-label q3">baixo resultado, baixo esforço</div><div class="quadrant-label q4">baixo resultado, alto esforço</div><div class="matrix-axis-x">Esforço orçamentário relativo</div><div class="matrix-axis-y">Resultado relativo</div>${rows.map(r=>{const size=36+r.budget/max*22;return `<button class="matrix-point ${r.tone}${isUniSelected(c.f,r.id)?" selected":""}" style="left:${relpos(r.effortRel)}%;bottom:${relpos(r.resultRel)}%;width:${size}px;height:${size}px" type="button">${r.sigla}<span class="matrix-tooltip">${r.nome}<br>Resultado: ${r.resultRel.toFixed(1)}% | Esforço: ${r.effortRel.toFixed(1)}%<br>${r.quadrant}</span></button>`}).join("")}</div>`;}
function legend(rows){if(!hasOfficialQuadrants())return quadrantUnavailableBlock();const counts=rows.reduce((a,r)=>(a[r.quadrant]=(a[r.quadrant]||0)+1,a),{});return `<div class="legend-list">${Object.entries(counts).map(([label,count])=>{const tone=label==="alto resultado, baixo esforço"?"high":label==="baixo resultado, alto esforço"?"low":"mid";return `<div class="legend-item ${tone}"><span><span class="legend-dot"></span> ${label}</span><strong>${count}</strong></div>`;}).join("")}</div>`;}
function insights(rows,c){
  if (!hasOfficialQuadrants()) return quadrantUnavailableBlock();
  const m=new Map(c.ref.map(u=>[u.id,u]));
  const a=rows.filter(r=>r.resultRel>=100&&r.effortRel<=100).map(r=>r.sigla).join(", ")||"Sem ocorrência";
  const b=rows.filter(r=>r.resultRel<100&&r.effortRel>100).map(r=>r.sigla).join(", ")||"Sem ocorrência";
  const cr=rows.filter(r=>{const u=m.get(r.id);return u&&u.execution<91&&u.cres<75}).map(r=>r.sigla).join(", ")||"Sem ocorrência";
  const cn=rows.filter(r=>{const u=m.get(r.id);return u&&u.doctors>84&&resultIndicators.cnpq.get(u)<mean(c.ref,resultIndicators.cnpq.get)}).map(r=>r.sigla).join(", ")||"Sem ocorrência";
  return `<ul class="insight-list"><li><strong>Resultado acima e esforço abaixo:</strong> ${a}</li><li><strong>Alto esforço e resultado abaixo:</strong> ${b}</li><li><strong>Baixa execução e ociosidade de CRES:</strong> ${cr}</li><li><strong>Alta qualificação e menor captação CNPq:</strong> ${cn}</li></ul>`;
}
function bars(d,get,fmt,colorFn){const s=[...d].sort((a,b)=>get(b)-get(a)),max=Math.max(...s.map(get),1);return `<div class="bars">${s.map(u=>{const v=get(u);const bg=colorFn?`;background:${colorFn(v)}`:'';return `<div class="bar-row"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(v/max*100,4,100)}%${bg}"></span></span><span class="bar-value">${fmt(v)}</span></div>`;}).join("")}</div>`;}
function rank(rows,val,sub){return `<div class="rank-list">${rows.map((r,i)=>`<div class="rank-item"><span class="rank-number">${i+1}</span><span><span class="rank-title">${r.sigla} - ${r.nome}</span><span class="rank-subtitle">${r[sub]||r.region}</span></span><span class="rank-value">${val(r)}</span></div>`).join("")}</div>`;}
function score(t,v,s,w,r){const ref=(r!=null&&isFinite(r))?`<span class="score-meter-ref" style="left:${clamp(r,0,100)}%"><span class="score-meter-ref-label">Br</span></span>`:"";return `<article class="score-card"><h3>${t}</h3><p class="card-subtitle">${s}</p><div class="score-value">${v}</div><div class="score-meter"><span style="width:${clamp(w,5,100)}%"></span>${ref}</div></article>`;}
function funnel(l,v,w){return `<div class="funnel-step" style="width:${clamp(w,28,100)}%"><strong>${l}</strong><span>${formatNumber(v)}</span></div>`;}
function toggleMetricTable(btn){const body=btn.nextElementSibling;const expanded=btn.getAttribute("aria-expanded")==="true";btn.setAttribute("aria-expanded",String(!expanded));btn.querySelector(".toggle-icon").textContent=expanded?"▶":"▼";body.hidden=expanded;}
function metricTable(d,cols,title,chartId,c){
  const localF = chartId ? getLocalFilter(chartId) : "all";
  const groupKey = c ? c.f.groupBy : "v1";
  let rows = d;
  if (chartId && localF !== "all") rows = d.filter(u => u.groups && u.groups[groupKey] === localF);
  if (!rows.length) rows = d;
  const chips = (chartId && c) ? quartilChipStrip(chartId+"_tbl", groupKey, d, c) : "";
  const subtitle = "";
  const tableHtml = `<div class="table-wrap mt-14">${chips}<h3>${title}</h3>${subtitle?`<p class="card-subtitle">${subtitle}</p>`:""}<table class="data-table"><thead><tr>${cols.map(col=>`<th>${col[0]}</th>`).join("")}</tr></thead><tbody>${rows.map(r=>`<tr>${cols.map(col=>`<td>${col[1](r)}</td>`).join("")}</tr>`).join("")}</tbody></table></div>`;
  return `<div class="metric-table-wrap"><button class="metric-table-toggle" type="button" aria-expanded="false" onclick="toggleMetricTable(this)"><span class="toggle-icon">▶</span> Ver tabela completa — ${title}</button><div class="metric-table-body" hidden>${tableHtml}</div></div>`;
}
function status(label,tone){return `<span class="status-pill ${tone==="high"?"status-high":tone==="low"?"status-low":"status-mid"}">${label}</span>`;}
function empty(){return `<div class="empty-state">Nenhuma IEES encontrada para o recorte selecionado. Ajuste os filtros para visualizar o painel.</div>`;}
const QUADRANT_UNAVAILABLE_MESSAGE = "Quadrante não disponível — dado não encontrado na planilha de estratificação das IES.";
function hasOfficialQuadrants(){return false;}
function quadrantUnavailable(){return {code:"q-na",label:QUADRANT_UNAVAILABLE_MESSAGE,tone:"mid"};}
function quadrantUnavailableBlock(){return `<div class="empty-state">${QUADRANT_UNAVAILABLE_MESSAGE}</div>`;}
function currentCohortFilter(){try{return typeof filters==="function"?(filters().cohort||"all"):"all";}catch(err){return "all";}}
function realIndicatorsForUniversity(u){return typeof getRealIndicators==="function"?getRealIndicators(u.sigla,currentCohortFilter()):null;}
function panelEmploymentRate(u){const real=realIndicatorsForUniversity(u);return real&&real.ind37!=null?clamp(Number(real.ind37)*100,0,100):u.employment;}
function panelEmploymentSalary(u){const real=realIndicatorsForUniversity(u);return real&&real.ind40!=null?Number(real.ind40):u.salary;}
function panelEgressosField(u,field,fallback){const real=realIndicatorsForUniversity(u);const val=real&&real[field]!=null?real[field]:null;return val!=null?val:fallback;}
function agg(d){return {students:sum(d,u=>u.students),entrants:sum(d,u=>u.entrants),graduates:sum(d,u=>u.graduates),vacancies:sum(d,u=>u.vacancies),occupancy:wavg(d,u=>u.occupancy,u=>u.vacancies),completion:wavg(d,u=>u.completion,u=>u.entrants),doctors:wavg(d,u=>u.doctors,u=>u.students),cnpq:sum(d,u=>u.cnpq),employment:wavg(d,u=>panelEmploymentRate(u),u=>u.graduates),budget:sum(d,u=>u.budget),execution:wavg(d,u=>u.execution,u=>u.budget),liquidation:wavg(d,u=>u.liquidation,u=>u.budget),vinculos:sum(d,u=>u.vinculos||0)};}
function matrixRows(d,f){if(!d.length)return [];const res=resultIndicators[f.result],eff=effortIndicators[f.effort],ra=mean(d,res.get)||1,ea=mean(d,eff.get)||1;return d.map(u=>{const result=res.get(u),effort=eff.get(u),resultRel=result/ra*100,effortRel=effort/ea*100,quad=quadrantUnavailable();return {...u,result,effort,resultRel,effortRel,quadrant:quad.label,tone:quad.tone,resultLabel:"sem quadrante oficial",effortLabel:"sem quadrante oficial"};});}
function composite(u){return u.occupancy*.15+u.completion*.15+(100-u.dropout)*.12+u.doctors*.14+norm(resultIndicators.cnpq.get(u),900,1900)*.12+norm(u.capes,3.2,5)*.1+panelEmploymentRate(u)*.12+norm(panelEmploymentSalary(u),4500,6500)*.1;}
function summarize(rows){const top=rows.reduce((b,r)=>r.resultRel>(b?.resultRel||0)?r:b,null);return top?top.quadrant:"sem dados";}
function badge(v,g,w){return v>=g?"adequado":v>=w?"atenção":"crítico";}
function pct(v,m){return clamp(v/m*100,0,100);}function relpos(v){return clamp(((v-70)/60)*84+8,8,92);}function norm(v,min,max){return clamp((v-min)/(max-min)*100,0,100);}function uniq(v){return [...new Set(v)].sort((a,b)=>a.localeCompare(b,"pt-BR"));}function sum(d,get){return d.reduce((t,x)=>t+get(x),0);}function mean(d,get){return d.length?sum(d,get)/d.length:0;}function wavg(d,get,w){const tw=sum(d,w);return tw?sum(d,x=>get(x)*w(x))/tw:mean(d,get);}function percentile(v,p){if(!v.length)return 0;const i=(v.length-1)*p/100,l=Math.floor(i),u=Math.ceil(i);return l===u?v[l]:v[l]+(v[u]-v[l])*(i-l);}function clamp(v,min,max){return Math.min(Math.max(v,min),max);}function round(v,d=0){const f=10**d;return Math.round(v*f)/f;}
function formatNumber(v){return new Intl.NumberFormat("pt-BR",{maximumFractionDigits:0}).format(v||0);}function formatPercent(v){return `${new Intl.NumberFormat("pt-BR",{minimumFractionDigits:1,maximumFractionDigits:1}).format(v||0)}%`;}function formatCurrency(v){return new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL",maximumFractionDigits:0}).format(v||0);}function formatCurrencyMillions(v){return `R$ ${new Intl.NumberFormat("pt-BR",{maximumFractionDigits:1}).format(v||0)} mi`;}

// ── Helpers de sinalização de bases reais ─────────────────────────────
function isRealBase(dsKey) {
  if (typeof SETI_DATASETS === "undefined" || typeof DATA_STATUS === "undefined") return false;
  const ds = SETI_DATASETS[dsKey];
  if (!ds) return false;
  return DATA_STATUS.loadedBases.some(function(b){ return b.name === ds.name && b.type === "real"; });
}

// ── Brasil benchmark helpers (v5) ─────────────────────────────────────
const PR_UNI_IDS = new Set(["uel","uem","uepg","unioeste","unicentro","uenp","unespar"]);
function isPrUni(id) { return PR_UNI_IDS.has(id); }

function brVal(key) {
  if (!brazil || !brazil.result) return null;
  const v = brazil.result[key];
  return (v != null && isFinite(Number(v))) ? Number(v) : null;
}

function brBenchmarkTag(def) {
  if (!def || typeof def.benchmark !== "function") return "";
  const val = def.benchmark();
  if (!val) return "";
  return `<div class="kpi-br-ref"><span class="br-ref-label">Brasil</span>${val}</div>`;
}

function nationalUnavailableNote(dimensionName) {
  return `<div class="comparison-unavailable"><span class="cu-icon" aria-hidden="true">🌐</span><span>Comparação nacional indisponível para <strong>${dimensionName}</strong>. Os dados desta dimensão são específicos do Paraná e não possuem equivalente na base nacional.</span></div>`;
}

function barsWithBrRef(d, get, fmt, brValue, highlightPR) {
  const s = [...d].sort((a, b) => get(b) - get(a));
  const max = Math.max(...s.map(get), brValue != null ? brValue : 0, 1);
  const refPct = brValue != null ? clamp(brValue / max * 100, 0, 100) : null;
  const refLine = refPct != null
    ? `<div style="position:relative;height:0;margin-bottom:20px"><span style="position:absolute;left:${refPct.toFixed(1)}%;transform:translateX(-50%);font-size:9.5px;color:#14804a;font-weight:600;white-space:nowrap">Média Brasil: ${fmt(brValue)}</span></div>`
    : "";
  return `<div class="bars">${refLine}${s.map(u => {
    const v = get(u);
    const ispr = highlightPR && isPrUni(u.id);
    const refMarker = refPct != null
      ? `<span class="br-ref-marker" style="left:${refPct.toFixed(1)}%" title="Média Brasil: ${fmt(brValue)}"></span>`
      : "";
    return `<div class="bar-row${ispr ? " iees-pr-highlight" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}${ispr ? ' <small style="color:#1f72b8;font-size:9px">PR</small>' : ""}</span><span class="bar-track" style="position:relative"><span class="bar-fill" style="width:${clamp(v / max * 100, 4, 100)}%${ispr ? ";background:#1f72b8" : ""}"></span>${refMarker}</span><span class="bar-value">${fmt(v)}</span></div>`;
  }).join("")}</div>`;
}

function metricTableWithFooter(d, cols, title, chartId, c, prFooter, brFooter) {
  const base = metricTable(d, cols, title, chartId, c);
  if (!prFooter && !brFooter) return base;
  const prCells = cols.map((col, i) => i === 0
    ? `<td><strong>Média PR</strong></td>`
    : `<td>${prFooter[i] != null ? prFooter[i] : "—"}</td>`
  ).join("");
  const brCells = cols.map((col, i) => i === 0
    ? `<td><strong>Média Brasil</strong></td>`
    : `<td>${brFooter && brFooter[i] != null ? brFooter[i] : "—"}</td>`
  ).join("");
  const gapCells = prFooter && brFooter ? cols.map((col, i) => {
    if (i === 0) return `<td><strong>Gap PR−BR</strong></td>`;
    const p = prFooter[i], b = brFooter[i];
    if (p == null || b == null) return `<td>—</td>`;
    const pNum = parseFloat(String(p).replace(/[^\d.,-]/g, "").replace(",", "."));
    const bNum = parseFloat(String(b).replace(/[^\d.,-]/g, "").replace(",", "."));
    if (!isFinite(pNum) || !isFinite(bNum)) return `<td>—</td>`;
    const gap = pNum - bNum;
    const sign = gap >= 0 ? "+" : "";
    const cls = gap >= 0 ? "gap-pos" : "gap-neg";
    return `<td><span class="${cls}">${sign}${gap.toFixed(1).replace(".", ",")} p.p.</span></td>`;
  }).join("") : null;
  const tfoot = `<tfoot><tr class="pr-footer-row">${prCells}</tr><tr class="br-footer-row">${brCells}</tr>${gapCells ? `<tr class="gap-footer-row">${gapCells}</tr>` : ""}</tfoot>`;
  return base.replace("</table>", `${tfoot}</table>`);
}
// ── end Brasil benchmark helpers ──────────────────────────────────────





/* Incremental architecture layer: context bar, numbered blocks, thresholds and alerts */
const decisoryQuestions = {
  overview: "O sistema está crescendo ou retraindo?",
  comparison: "Quais IEES estão acima ou abaixo da média do grupo?",
  access: "A oferta está sendo ocupada de forma eficiente?",
  retention: "Os estudantes estão chegando ao final do curso?",
  quality: "A pesquisa e a pós-graduação estão avançando?",
  faculty: "O quadro docente está sendo utilizado plenamente?",
  employment: "Os egressos estão sendo absorvidos pelo mercado?",
  efficiency: "Como está a execução orçamentária das universidades estaduais?",
  performance: "Orçamento maior está associado a melhor desempenho acadêmico?"
};

const tabBlocks = {
  comparison: ["Tabela comparativa", "Ranking", "Radar"],
  access: ["Escala da oferta", "Ocupação e ociosidade", "Distribuição territorial"],
  retention: ["Funil", "Taxas", "Evolução do ranking por ano", "Dispersão", "Ranking por curso", "Alertas"],
  quality: ["Qualificação docente", "Pós-grad e CAPES", "Pesquisa e CNPq", "Internacionalização"],
  faculty: ["Quadro legal", "Vagas disponíveis e condicionadas", "TIDE", "CRES e esforço", "Alertas"],
  employment: ["Inserção geral", "Inserção PR e Sul", "CBO2 e salário", "Destino territorial", "Por curso", "Perfil ocupacional"],
  efficiency: ["Perfil da movimentação", "Composição crédito e despesa"],
  performance: ["Resposta ao Piloto", "Cruzamento desempenho acadêmico", "Cruzamento corpo docente", "Matriz de oportunidades e alertas"]
};

const tabIndicators = {
  overview: [
    { code:"ind1",  label:"Proporção de ocupação de vagas" },
    { code:"ind2",  label:"Número de matrículas de graduação" },
    { code:"ind10", label:"Total de cursos" },
    { code:"ind12", label:"Total de estudantes" },
    { code:"ind26", label:"Taxa de ocupação das vagas" },
    { code:"ind27", label:"Taxa de concluintes" }
  ],
  comparison: [
    { code:"ind1",  label:"Proporção de ocupação de vagas" },
    { code:"ind5",  label:"Taxa anual de desvinculação" },
    { code:"ind6",  label:"Proporção de docentes com doutorado" },
    { code:"ind26", label:"Taxa de ocupação das vagas" },
    { code:"ind27", label:"Taxa de concluintes" },
    { code:"ind37", label:"Taxa de inserção de egressos no PR" },
    { code:"ind81", label:"Taxa de execução orçamentária" }
  ],
  access: [
    { code:"ind1",  label:"Proporção de ocupação de vagas" },
    { code:"ind3",  label:"Taxa de ocupação de vagas iniciais" },
    { code:"ind4",  label:"Ingressantes de escola pública" },
    { code:"ind10", label:"Total de cursos" },
    { code:"ind11", label:"Total de vagas" },
    { code:"ind15", label:"Média de vagas por curso" },
    { code:"ind24", label:"Taxa de ocupação das vagas de ingresso" },
    { code:"ind26", label:"Taxa de ocupação das vagas" },
    { code:"ind29", label:"Taxa de ocupação por grau" },
    { code:"ind67", label:"Taxa de ocupação por tipo de curso" },
    { code:"ind68", label:"Índice de especialização da oferta" },
    { code:"ind69", label:"Proporção de cursos de licenciatura" }
  ],
  retention: [
    { code:"ind5",  label:"Taxa anual de desvinculação" },
    { code:"ind12", label:"Total de estudantes" },
    { code:"ind13", label:"Total de estudantes ingressantes" },
    { code:"ind14", label:"Total de estudantes concluintes" },
    { code:"ind27", label:"Taxa de concluintes" }
  ],
  quality: [
    { code:"ind6",  label:"Proporção de docentes com doutorado" },
    { code:"ind7",  label:"Alunos em mobilidade acadêmica" },
    { code:"ind8",  label:"Proporção de docentes estrangeiros" },
    { code:"ind9",  label:"Acesso ao Portal CAPES" },
    { code:"ind60", label:"Captação de recursos CNPq" },
    { code:"ind61", label:"Vínculos de fomento CNPq" },
    { code:"ind62", label:"Conceito médio dos programas CAPES" },
    { code:"ind65", label:"Docentes PQ com bolsa de produtividade" },
    { code:"ind66", label:"Programas com conceito CAPES 5-7" }
  ],
  faculty: [
    { code:"ind43", label:"Total de códigos de vagas docentes" },
    { code:"ind45", label:"Vagas docentes efetivas ocupadas" },
    { code:"ind46", label:"Taxa de ocupação do quadro docente" },
    { code:"ind47", label:"Taxa de utilização das vagas disponíveis" },
    { code:"ind53", label:"Carga horária média de docentes efetivos" },
    { code:"ind56", label:"Taxa de utilização da CRES" },
    { code:"ind58", label:"Taxa de ociosidade da CRES" },
    { code:"ind59", label:"Participação da CRES no esforço docente" },
    { code:"ind63", label:"Proporção de docentes permanentes da pós" }
  ],
  employment: [
    { code:"ind33", label:"Egressos IEES" },
    { code:"ind35", label:"Taxa de inserção – Região Sul" },
    { code:"ind37", label:"Taxa de inserção no mercado PR" },
    { code:"ind39", label:"Egressos em ocupações aderentes CBO2" },
    { code:"ind40", label:"Média salarial dos egressos no PR" },
    { code:"ind42", label:"Taxa de egressos empregados na cidade-sede" },
    { code:"ind76", label:"Diversidade ocupacional por curso" },
    { code:"ind80", label:"Índice de dispersão territorial dos egressos" }
  ],
  efficiency: [
    { code:"ind81", label:"Taxa de execução orçamentária (empenho)" },
    { code:"ind82", label:"Taxa de liquidação" },
    { code:"ind83", label:"Taxa de pagamento sobre liquidado" },
    { code:"ind84", label:"Grau de contingenciamento orçamentário" },
    { code:"ind85", label:"Variação da dotação orçamentária" },
    { code:"ind86", label:"Participação de pessoal no total da despesa" },
    { code:"ind89", label:"Participação de recursos livres" },
    { code:"ind90", label:"Participação de recursos próprios" },
    { code:"ind95", label:"Execução sobre orçamento inicial" },
    { code:"ind96", label:"Execução sobre orçamento disponível" },
    { code:"ind97", label:"Execução sobre orçamento atualizado" }
  ]
};

function overviewMetricUniverseRows() {
  try {
    const f = typeof filters === "function" ? filters() : { year: "2024", scope: state.scope };
    const source = f.scope === "Brasil" ? [...universities, ...universitiesBrasil] : universities;
    return source.map(u => byYear(u, f.year || "2024"));
  } catch (err) {
    return scopeUniverse(state.scope);
  }
}

function overviewMetricUniverseTotal(getter) {
  return Math.max(sum(overviewMetricUniverseRows(), u => Number(getter(u)) || 0), 1);
}

function overviewMetricMunicipalityTotal(u, getter) {
  const rows = overviewMetricUniverseRows().filter(row => row.municipality === u.municipality);
  return sum(rows, row => Number(getter(row)) || 0);
}

const IND_FIELD_MAP = {
  ind1:  u=>u.occupancy,
  ind2:  u=>u.students,
  ind3:  u=>u.ingressOccupancy!=null?u.ingressOccupancy:round(u.entrants/Math.max(u.vacanciesNova!=null?u.vacanciesNova:u.vacancies*.82,1)*100,1),
  ind4:  u=>publicSchoolShare(u),
  ind5:  u=>u.dropout,
  ind6:  u=>u.doctors,
  ind7:  u=>u.mobility??mobilityRate(u),
  ind10: u=>u.courses,
  ind11: u=>u.vacancies,
  ind12: u=>u.students,
  ind13: u=>u.entrants,
  ind14: u=>u.graduates,
  ind15: u=>u.courses?+(u.vacancies/u.courses).toFixed(1):null,
  ind16: u=>u.vacancies/overviewMetricUniverseTotal(x=>x.vacancies)*100,
  ind17: u=>overviewMetricMunicipalityTotal(u,x=>x.vacancies)/overviewMetricUniverseTotal(x=>x.vacancies)*100,
  ind20: u=>overviewMetricMunicipalityTotal(u,x=>x.courses)/overviewMetricUniverseTotal(x=>x.courses)*100,
  ind21: u=>u.students/Math.max(u.courses,1),
  ind23: u=>u.students/Math.max(u.vacancies,1),
  ind24: u=>u.occupancy,
  ind25: u=>u.vacanciesNovaUnfilled!=null?u.vacanciesNovaUnfilled:Math.max(0,Math.round((u.vacanciesNova!=null?u.vacanciesNova:u.vacancies*.82)-u.entrants)),
  ind26: u=>u.occupancy,
  ind27: u=>u.completion,
  ind28: u=>u.vacanciesUnfilled!=null?u.vacanciesUnfilled:Math.max(0,Math.round(u.vacancies*(1-u.occupancy/100))),
  ind29: u=>u.occupancy,
  ind30: u=>dayOccupancy(u),
  ind31: u=>nightOccupancy(u),
  ind32: u=>municipalityOccupancy(u),
  ind8:  u=>u.docForeign??foreignFacultyRate(u),
  ind9:  u=>u.capesPortal??capesPortalAccess(u),
  ind33: u=>panelEgressosField(u,"ind33",u.graduates),
  ind34: u=>employmentMetrics(u).southInserted,
  ind35: u=>{const r=panelEgressosField(u,"ind35",null);return r!=null?round(r*100,1):+(u.employment+5).toFixed(1);},
  ind36: u=>employmentMetrics(u).prInserted,
  ind37: u=>panelEmploymentRate(u),
  ind38: u=>employmentMetrics(u).cbo2Inserted,
  ind39: u=>{const r=panelEgressosField(u,"ind39",null);return r!=null?round(r*100,1):+(u.employment-5).toFixed(1);},
  ind40: u=>panelEmploymentSalary(u),
  ind41: u=>employmentMetrics(u).localInserted,
  ind42: u=>{const r=panelEgressosField(u,"ind42",null);return r!=null?round(r*100,1):+Math.max(25,u.employment-34).toFixed(1);},
  ind43: u=>u.docVagasTotais??facultyMetrics(u).totalCodes,
  ind44: u=>u.docVagasDisp??facultyMetrics(u).availableOpen,
  ind45: u=>u.docVagasOcupadas??facultyMetrics(u).occupied,
  ind46: u=>u.docTaxaOcup??facultyMetrics(u).occupationRate,
  ind47: u=>u.docTaxaUtil??facultyMetrics(u).availableUseRate,
  ind48: u=>facultyMetrics(u).conditioned,
  ind49: u=>facultyMetrics(u).conditionedShare,
  ind50: u=>facultyMetrics(u).tideAssigned,
  ind51: u=>facultyMetrics(u).tideShare,
  ind52: u=>facultyMetrics(u).tideNotAssignedShare,
  ind53: u=>u.docChMedia??facultyMetrics(u).avgWorkload,
  ind54: u=>u.docCresAut??facultyMetrics(u).cresAuthorized,
  ind55: u=>u.docCresUtil??facultyMetrics(u).cresUsed,
  ind56: u=>u.docCresTaxa??u.cres??facultyMetrics(u).cresUseRate,
  ind57: u=>u.docCresSaldo??facultyMetrics(u).cresUnused,
  ind58: u=>u.docCresOciosidade??facultyMetrics(u).cresIdleRate,
  ind59: u=>u.docCresPartic??facultyMetrics(u).cresParticipation,
  ind60: u=>u.cnpq,
  ind61: u=>u.vinculos??cnpqLinks(u),
  ind62: u=>u.capes,
  ind63: u=>u.capesDocPermanentes??pgPermanentShare(u),
  ind64: u=>u.capesDocEstrangeiros??pgForeignShare(u),
  ind65: u=>u.capesDocBolsa??pgProductivityShare(u),
  ind66: u=>u.capesPct567??(u.pg?u.pgTop/u.pg*100:0),
  ind67: u=>clamp(u.occupancy+(u.type==="Licenciatura"?-3.5:1.8),0,100),
  ind68: u=>offerSpecialization(u),
  ind69: u=>courseMix(u).lic*100,
  ind70: u=>u.egressosMunicipios??panelEgressosField(u,"raisMunCount",null),
  ind71: u=>panelEgressosField(u,"raisPartMunMax",null),
  ind72: u=>panelEgressosField(u,"raisCursoCount",null),
  ind73: u=>panelEgressosField(u,"raisPartCursoMax",null),
  ind74: u=>panelEgressosField(u,"raisGrauCount",null),
  ind75: u=>panelEgressosField(u,"raisDivOcup",null),
  ind76: u=>panelEgressosField(u,"raisCbo2Count",null),
  ind77: u=>panelEgressosField(u,"raisPartCbo2Max",null),
  ind78: u=>panelEgressosField(u,"raisMunDestino",null),
  ind79: u=>panelEgressosField(u,"raisDispersao",null),
  ind80: u=>u.territory,
  ind81: u=>budgetMetrics(u).executionRate,
  ind82: u=>budgetMetrics(u).liquidationRate,
  ind83: u=>budgetMetrics(u).paymentRate,
  ind84: u=>budgetMetrics(u).contingencyRate,
  ind85: u=>budgetMetrics(u).variationRate,
  ind86: u=>budgetMetrics(u).personnel,
  ind87: u=>budgetMetrics(u).odc,
  ind88: u=>budgetMetrics(u).currentCapitalRatio,
  ind89: u=>budgetMetrics(u).freeResources,
  ind90: u=>budgetMetrics(u).ownResources,
  ind91: u=>budgetMetrics(u).transfers,
  ind92: u=>budgetMetrics(u).works,
  ind93: u=>budgetMetrics(u).equipment,
  ind94: u=>budgetMetrics(u).variationRate,
  ind95: u=>budgetMetrics(u).execInitial,
  ind96: u=>budgetMetrics(u).execAvailable,
  ind97: u=>budgetMetrics(u).execUpdated,
};

IND_FIELD_MAP["students"]  = IND_FIELD_MAP["ind2"];
IND_FIELD_MAP["courses"]   = IND_FIELD_MAP["ind10"];
IND_FIELD_MAP["vacancies"] = IND_FIELD_MAP["ind11"];
IND_FIELD_MAP["graduates"] = IND_FIELD_MAP["ind14"];

window.exportTabData = function exportTabData(tabId) {
  tabId = tabId || state.activeTab;
  const f = filters();
  const data = applyFilters(f);
  const indicators = tabIndicators[tabId] || [];
  const groupBy = f.groupBy || "v1";

  const headers = ["IEES", "Nome", `Grupo_${groupBy.toUpperCase()}`, ...indicators.map(i => i.label)];

  const csvVal = v => {
    if (v == null) return "N/D";
    const s = String(v);
    return s.includes(";") || s.includes('"') ? `"${s.replace(/"/g,'""')}"` : s.replace(".", ",");
  };

  const rows = data.map(u => {
    const cells = [u.sigla, u.nome, u.groups[groupBy] || ""];
    indicators.forEach(ind => {
      const getter = IND_FIELD_MAP[ind.code];
      cells.push(csvVal(getter ? getter(u) : null));
    });
    return cells.join(";");
  });

  const csv = [headers.join(";"), ...rows].join("\n");
  const blob = new Blob(["﻿" + csv], { type: "text/csv;charset=utf-8" });
  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const filename = `Painel_SETI_${tabId}_${f.year}_${timestamp}.csv`;
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

const tabBlockIndMap = {
  comparison: {
    "Tabela comparativa": ["ind1","ind5","ind6","ind26","ind27","ind37","ind81"],
    "Ranking":            ["ind1","ind5","ind6","ind26","ind27","ind37","ind81"],
    "Radar":              ["ind1","ind5","ind6","ind26","ind27","ind37","ind81"]
  },
  access: {
    "Escala da oferta":         ["ind10","ind11","ind15"],
    "Ocupação e ociosidade":    ["ind1","ind3","ind24","ind26","ind29","ind67"],
    "Distribuição territorial": ["ind4","ind68","ind69"]
  },
  retention: {
    "Funil":                       ["ind12","ind13","ind14","ind27"],
    "Taxas":                       ["ind5","ind27"],
    "Evolução do ranking por ano": ["ind5","ind12","ind27"],
    "Dispersão":                   ["ind12","ind27"],
    "Ranking por curso":           ["ind14","ind27"],
    "Alertas":                     ["ind5","ind12","ind13","ind14","ind27"]
  },
  quality: {
    "Qualificação docente": ["ind6","ind8","ind63","ind65"],
    "Pós-grad e CAPES":     ["ind7","ind9","ind62","ind66"],
    "Pesquisa e CNPq":      ["ind60","ind61"],
    "Internacionalização":  ["ind7","ind8","ind9"]
  },
  faculty: {
    "Quadro legal":                        ["ind43","ind45"],
    "Vagas disponíveis e condicionadas":   ["ind46","ind47"],
    "TIDE":                                ["ind53","ind63"],
    "CRES e esforço":                      ["ind56","ind58","ind59"],
    "Alertas":                             ["ind43","ind45","ind46","ind47","ind53","ind56","ind58","ind59","ind63"]
  },
  employment: {
    "Inserção geral":    ["ind33","ind37","ind39"],
    "Inserção PR e Sul": ["ind35","ind37"],
    "CBO2 e salário":    ["ind39","ind40","ind76"],
    "Destino territorial": ["ind42","ind80"],
    "Por curso":         ["ind33"],
    "Perfil ocupacional": ["ind76"]
  },
  efficiency: {
    "Perfil da movimentação":             ["ind81","ind82","ind83","ind84","ind85"],
    "Composição crédito e despesa":       ["ind86","ind89","ind90"]
  },
  performance: {
    "Cruzamento desempenho acadêmico":    ["ind95","ind96","ind97"],
    "Cruzamento corpo docente":           ["ind95","ind96","ind97"],
    "Matriz de oportunidades e alertas":  ["ind81","ind82","ind83","ind84","ind85","ind86","ind89","ind90","ind95","ind96","ind97"]
  }
};

function setActiveIndicator(tabId, indCode) {
  state.activeIndicator[tabId] = indCode;
  render();
}
window.setActiveIndicator = setActiveIndicator;

function indicatorSelectorBar(tabId, indicators) {
  if (!indicators || !indicators.length) return "";
  const activeInd = state.activeIndicator[tabId] || "all";
  const options = indicators.map(ind => `<option value="${ind.code}"${activeInd === ind.code ? " selected" : ""}>${ind.label}</option>`).join("");
  return `<div class="ind-selector-bar"><span class="ind-selector-label">Visualizando:</span><select class="ind-selector-select" onchange="setActiveIndicator('${tabId}', this.value)"><option value="all"${activeInd === "all" ? " selected" : ""}>Todos os indicadores</option>${options}</select></div>`;
}

const quartilReference = {
  v1: [["Q1 – Pequeno Porte", "≤ 33.243 mat."], ["Q2 – Médio-Pequeno Porte", "33.244 – 52.551 mat."], ["Q3 – Médio-Grande Porte", "52.552 – 86.904 mat."], ["Q4 – Grande Porte", "> 86.904 mat."]],
  v2: [["Q1 – Oferta Reduzida", "≤ 157 cursos"], ["Q2 – Oferta Moderada", "158 – 317 cursos"], ["Q3 – Oferta Ampla", "318 – 480 cursos"], ["Q4 – Oferta Extensa", "> 480 cursos"]],
  v3: [["Q1 – Sede Única / Baixa Dispersão", "0 – 0,15"], ["Q2 – Dispersão Moderada", "0,16 – 0,37"], ["Q3 – Alta Dispersão", "0,38 – 0,60"], ["Q4 – Muito Alta Dispersão", "> 0,60"]],
  v4: [["Q1 – Qualif. Inicial", "< 45%"], ["Q2 – Qualif. Em Desenvolvimento", "45% – 56%"], ["Q3 – Qualif. Avançada", "57% – 75%"], ["Q4 – Qualif. Consolidada", "> 75%"]],
  v5: [["Q1 – Estrutura Incipiente", "0 – 0,25"], ["Q2 – Estrutura em Consolidação", "0,26 – 0,42"], ["Q3 – Estrutura Consolidada", "0,43 – 0,62"], ["Q4 – Estrutura Madura", "> 0,62"]],
  v6: [["Q1 – Perfil Restritivo", "< 0,43"], ["Q2 – Perfil Moderado-Restritivo", "0,43 – 0,53"], ["Q3 – Perfil Moderado-Expansivo", "0,54 – 0,64"], ["Q4 – Perfil Expansivo / Autônomo", "> 0,64"]]
};

function setScope(val) {
  state.scope = val === "BR" ? "Brasil" : "Paraná";
  syncScopeToggle(state.scope);
  updateScopeAvailability(state.scope);
  render();
}
window.setScope = setScope;

function renderTop(c) {
  const t = tabInfo[state.activeTab];
  el.activeTabKicker.textContent = t[0];
  el.activeTabTitle.textContent = t[1];
  el.activeTabDescription.textContent = t[2];
  el.periodPill.textContent = `Ano base ${c.f.year} · Escopo ${c.f.scope}`;
  el.scopeLabel.textContent = c.selected ? `${c.selected.sigla} | ${c.group}` : c.group === "all" ? "Sistema estadual" : `Grupo ${c.group}`;
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateTabIndicator();
}

function renderSide(c) {
  if (c.f.noGroup) {
    el.groupTitle.textContent = "Sem agrupamento";
    if (el.criteriaList)  el.criteriaList.innerHTML = "";
    if (el.groupBreakdown) el.groupBreakdown.innerHTML =
      '<p style="color:var(--gray-500);font-size:13px;padding:8px 0">Nenhum agrupamento ativo.</p>';
    renderSystemAlerts(c);
    return;
  }
  const meta = groupMeta[c.f.groupBy];
  const rows = matrixRows(c.ref, c.f);
  const sr = c.selected && rows.find(r => r.id === c.selected.id);
  el.groupTitle.textContent = meta.label.replace(/^V\d+\s*[–-]\s*/, "");
  el.criteriaList.innerHTML = meta.criteria.map(([l, t]) => `<div class="criteria-item"><strong>${l}</strong><span>${t}</span></div>`).join("");
  if (el.groupBreakdown) {
    const variable = c.f.groupBy, groups = groupOptions[variable] || [], activeGroup = c.f.groupLevel;
    el.groupBreakdown.innerHTML = groups.map(grpLabel => {
      const entry = meta.criteria.find(([l]) => l === grpLabel);
      const txt = entry ? entry[1] : "";
      const members = scopeUniverse(c.f.scope).filter(u => u.groups[variable] === grpLabel);
      const isActive = activeGroup === grpLabel;
      const membersHTML = members.map(u => `<div class="group-iees-item"><span class="group-iees-sigla">${u.sigla}</span><span class="group-iees-value">${meta.format(meta.getter(u))}</span></div>`).join("");
      return `<div class="group-breakdown-card${isActive ? " is-active" : ""}"><strong class="group-breakdown-name">${grpLabel}</strong><span class="group-breakdown-criterion">${txt}</span><div class="group-iees-list">${membersHTML}</div></div>`;
    }).join("");
  }
  el.analyticalNote.textContent = sr ? `${c.selected.sigla}: resultado relativo de ${sr.resultRel.toFixed(1)}% e esforço relativo de ${sr.effortRel.toFixed(1)}%. Classificação descritiva: ${sr.quadrant}.` : "A leitura compara cada IEES com o grupo de referência dinâmico. A mesma universidade pode mudar de grupo conforme a variável selecionada.";
  renderSystemAlerts(c);
}

function renderTab(c) {
  const id = state.activeTab;
  el.tabContent.innerHTML = id === "overview" ? `<div class="tab-aba-wrapper" data-tab-id="overview">${overview(c)}</div>` : renderNumberedTab(id, c);
  bindModeSelector();
}

function updateContextBar(c) {
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  if (badge) {
    const isBR = c.f.scope === "Brasil";
    badge.className = `scope-badge ${isBR ? "scope-br" : "scope-pr"}`;
    badge.textContent = isBR ? "🌐 Brasil" : "📍 Paraná";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    if (c.f.noGroup) {
      row.innerHTML = '<span class="cluster-badge">Sem agrupamento</span>';
    } else {
      const groupName = c.group === "all" ? "Todos os grupos" : c.group;
      row.innerHTML = `<span class="cluster-badge c-${c.f.groupBy}"><span class="c-dim">${c.f.groupBy.toUpperCase()}</span> ${groupName}</span>`;
    }
  }
}

function updateTabIndicator() {
  const indicator = document.querySelector(".tab-active-indicator");
  const active = document.querySelector(".tab-button.is-active");
  if (!indicator || !active) return;
  indicator.style.width = `${active.offsetWidth}px`;
  indicator.style.transform = `translateX(${active.offsetLeft}px)`;
}

function renderQuartilThresholds(variable) {
  const box = document.getElementById("quartilThresholdContent");
  if (!box) return;
  const rows = quartilReference[variable] || [["Dados pendentes", "Variável ainda sem cortes disponíveis"]];
  box.innerHTML = rows.map(([label, value]) => `<div class="threshold-row"><span class="th-label">${label}</span><span class="th-value">${value}</span></div>`).join("");
}

function renderSystemAlerts(c) {
  const box = document.getElementById("systemAlerts");
  if (!box) return;
  const rows = matrixRows(c.ref, c.f);
  const alerts = [];
  rows.filter(r => r.resultRel < 96 && r.effortRel > 104).slice(0, 2).forEach(r => alerts.push(["alert-danger", "⚠", r.sigla, `Resultado ${r.resultRel.toFixed(1)}% e esforço ${r.effortRel.toFixed(1)}% no cluster ativo`]));
  rows.filter(r => r.resultRel < 100 && r.effortRel <= 100).slice(0, 2).forEach(r => alerts.push(["alert-warn", "⚠", r.sigla, "Resultado abaixo da média do grupo com esforço controlado"]));
  rows.filter(r => r.resultRel >= 103 && r.effortRel <= 100).slice(0, 2).forEach(r => alerts.push(["alert-ok", "✓", r.sigla, "Referência positiva no cluster: alto resultado com esforço abaixo da média"]));
  if (!alerts.length) alerts.push(["alert-info", "i", "Sistema", "Nenhum alerta crítico no recorte selecionado"]);
  box.innerHTML = alerts.slice(0, 4).map(([cls, icon, ies, msg]) => `<div class="alert-item ${cls}"><span class="alert-icon" aria-hidden="true">${icon}</span><div class="alert-body"><strong class="alert-ies">${ies}</strong><span class="alert-msg">${msg}</span></div></div>`).join("");
}

// Bases necessárias por aba (para nota de disponibilidade metodológica)
const TAB_BASE_DEPS = {
  comparison: ["cursos","ies","egressos"],
  access:     ["cursos"],
  retention:  ["cursos"],
  quality:    ["ies","capes","cnpq"],
  faculty:    ["docentes"],
  employment: ["egressos","rais"],
  efficiency: ["orcamento"]
};

function miniKpi(label, value) {
  return `<div class="mini-kpi"><span class="mini-kpi-label">${label}</span><span class="mini-kpi-value">${value}</span></div>`;
}
function tabMiniKpis(tabId, c) {
  const d = c.ref;
  if (!d.length) return "";
  const a = agg(d);
  let kpis = "";
  if (tabId === "access") {
    const unfilled = Math.max(0, a.vacancies - Math.round(a.vacancies * a.occupancy / 100));
    kpis = miniKpi("Vagas totais", formatNumber(a.vacancies))
         + miniKpi("Ocupação média", formatPercent(a.occupancy))
         + miniKpi("Vagas ociosas", formatNumber(unfilled));
  } else if (tabId === "retention") {
    kpis = miniKpi("Ingressantes", formatNumber(a.entrants))
         + miniKpi("Taxa de concluintes", formatPercent(a.completion))
         + miniKpi("Desvinculação média", formatPercent(mean(d, u => u.dropout)));
  } else if (tabId === "quality") {
    kpis = miniKpi("Doutores médio", formatPercent(mean(d, u => u.doctors)))
         + miniKpi("Conceito CAPES", mean(d, u => u.capes).toFixed(1))
         + miniKpi("Captação CNPq", formatCurrencyMillions(a.cnpq));
  } else if (tabId === "faculty") {
    kpis = miniKpi("Ocupação docente", formatPercent(mean(d, u => u.facultyOcc)))
         + miniKpi("Utilização CRES", formatPercent(mean(d, u => u.cres)))
         + miniKpi("Despesa pessoal", formatPercent(mean(d, u => u.personnel)));
  } else if (tabId === "employment") {
    kpis = miniKpi("Inserção média", formatPercent(mean(d, u => panelEmploymentRate(u))))
         + miniKpi("Salário médio", formatCurrency(mean(d, u => panelEmploymentSalary(u))))
         + miniKpi("Aderência CBO2", formatPercent(mean(d, u => u.employment - 5)));
  } else if (tabId === "efficiency") {
    kpis = miniKpi("Orçamento total", formatCurrencyMillions(a.budget))
         + miniKpi("Execução média", formatPercent(a.execution))
         + miniKpi("Custo/estudante", formatCurrency(mean(d, effortIndicators.budgetPerStudent.get)));
  }
  return kpis ? `<div class="mini-kpi-row">${kpis}</div>` : "";
}
function renderNumberedTab(tabId, c, summary = "") {
  const blocks = tabBlocks[tabId] || [];
  const mode = tabId === "efficiency" ? `<div class="mode-selector" role="group" aria-label="Modo de análise orçamentária"><button class="mode-btn active" data-mode="movimentacao" type="button">Perfil da movimentação</button><button class="mode-btn" data-mode="eficiencia" type="button">Eficiência relativa por cluster ✦</button></div>` : "";
  const selectorBar = indicatorSelectorBar(tabId, tabIndicators[tabId]);
  const activeInd = state.activeIndicator[tabId] || "all";
  const blockIndMap = tabBlockIndMap[tabId] || {};
  const tabNotes = "";
  const renderedBlocks = blocks.map((title, index) => {
    let hlClass = "";
    if (activeInd !== "all") {
      const blockInds = blockIndMap[title] || [];
      hlClass = blockInds.includes(activeInd) ? "ind-block-highlighted" : "ind-block-dimmed";
    }
    return renderBlock(index + 1, title, renderBlockContent(tabId, title, c), hlClass);
  }).join("");
  const miniKpis = tabMiniKpis(tabId, c);
  return `<div class="tab-aba-wrapper" data-tab-id="${tabId}">${summary}${mode}${tabNotes}${selectorBar}${miniKpis}${renderedBlocks}</div>`;
}

function renderBlock(num, title, content, hlClass) {
  const wrapAttr = hlClass ? ` class="${hlClass}"` : "";
  return `<div${wrapAttr}><div class="blk-divider"><div class="blk-num">${num}</div><div class="blk-title">${title}</div><div class="blk-line"></div></div><div class="blk-content">${content}</div></div>`;
}

function renderBlockContent(tabId, title, c) {
  const d = c.ref;
  const res = resultIndicators[c.f.result];
  const eff = effortIndicators[c.f.effort];
  if (!d.length) return empty();
  const prOnly = !isBrasilScope(c.f.scope);
  const brScope = isBrasilScope(c.f.scope);
  const brRefBars = (data, get, fmt, brKey) => prOnly
    ? barsWithBrRef(data, get, fmt, brVal(brKey), false)
    : barsWithBrRef(data, get, fmt, null, true);
  if (tabId === "comparison" && title.includes("Tabela")) {
    const cols = [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.region}</span>`], ["Resultado", u => res.format(res.get(u))], ["Esforço", u => eff.format(eff.get(u))], ["Grupo", u => u.groups[c.f.groupBy]]];
    const prMeanRes = res.format(mean(d, res.get)), prMeanEff = eff.format(mean(d, eff.get));
    const brResVal = brVal(c.f.result);
    const prFooter = [null, prMeanRes, prMeanEff, null];
    const brFooter = brResVal != null ? [null, res.format(brResVal), "—", null] : null;
    return metricTableWithFooter(d, cols, "Tabela comparativa das IEES", null, c, prOnly ? prFooter : null, prOnly ? brFooter : null);
  }
  if (tabId === "comparison" && title.includes("Ranking")) return `<article class="visual-card">${rank(matrixRows(d, c.f).sort((a, b) => b.resultRel - a.resultRel), r => `${r.resultRel.toFixed(1)}%`, "quadrant")}</article>`;
  if (tabId === "comparison") {
    const prMean = prOnly ? score("Média Paraná", res.format(mean(c.all, res.get)), res.label, 72) : "";
    const brScore = score("Média Brasil", res.format(brazil.result[c.f.result]), "benchmark", 64);
    return `<div class="score-grid">${score("IEES", formatNumber(d.length), "no grupo ativo", 80)}${prMean}${brScore}</div>`;
  }
  if (tabId === "access") return title.includes("Escala") ? `<div class="chart-grid"><article class="visual-card">${bars(d, u => u.vacancies, formatNumber)}</article><article class="visual-card">${bars(d, u => u.courses, formatNumber)}</article></div>` : title.includes("Ocupação") ? `<article class="visual-card">${brRefBars(d, u => u.occupancy, formatPercent, "occupancy")}</article>` : metricTable(d, [["IEES", u => u.sigla], ["Município", u => u.municipality], ["Região", u => u.region], ["Dispersão", u => `${u.territory} pts`]], "Distribuição territorial");
  if (tabId === "retention") {
    const dropoutBrVal = (() => { const p = brVal("permanence"); return p != null ? 100 - p : null; })();
    return title.includes("Funil") ? retention(c) : title.includes("Taxas") ? `<div class="chart-grid"><article class="visual-card">${brRefBars(d, u => u.completion, formatPercent, "completion")}</article><article class="visual-card">${prOnly ? barsWithBrRef(d, u => u.dropout, formatPercent, dropoutBrVal, false) : barsWithBrRef(d, u => u.dropout, formatPercent, null, true)}</article></div>` : title.includes("Alertas") ? `<div class="system-alerts-list">${document.getElementById("systemAlerts")?.innerHTML || ""}</div>` : metricTable(d, [["IEES", u => u.sigla], ["Ingressantes", u => formatNumber(u.entrants)], ["Concluintes", u => formatNumber(u.graduates)], ["Custo/concluinte", u => formatCurrency(effortIndicators.costGraduate.get(u))]], title);
  }
  if (tabId === "quality") return title.includes("Docente") ? `<article class="visual-card">${brRefBars(d, u => u.doctors, formatPercent, "doctorate")}</article>` : title.includes("CAPES") ? `<article class="visual-card">${brRefBars(d, u => u.capes, v => v.toFixed(1), "capes")}</article>` : title.includes("CNPq") ? `<article class="visual-card">${bars(d, u => u.cnpq, formatCurrencyMillions)}</article>` : metricTable(d, [["IEES", u => u.sigla], ["CAPES", u => u.capes.toFixed(1)], ["PG", u => formatNumber(u.pg)], ["CAPES 5-7", u => formatNumber(u.pgTop)]], "Internacionalização e maturidade");
  if (tabId === "faculty") return title.includes("CRES") ? `<article class="visual-card">${bars(d, u => u.cres, formatPercent)}</article>${prOnly ? nationalUnavailableNote("Capacidade Residual de Expansão (CRES)") : ""}` : title.includes("Alertas") ? `<div class="system-alerts-list">${document.getElementById("systemAlerts")?.innerHTML || ""}</div>` : metricTable(d, [["IEES", u => u.sigla], ["Ocupação docente", u => formatPercent(u.facultyOcc)], ["TIDE estimado", u => formatPercent((u.facultyOcc + u.doctors) / 2)], ["Pessoal", u => formatPercent(u.personnel)]], title);
  if (tabId === "employment") return title.includes("salário") ? `<article class="visual-card">${prOnly ? barsWithBrRef(d, u => u.salary, formatCurrency, brVal("salary"), false) : barsWithBrRef(d, u => u.salary, formatCurrency, null, true)}</article>${prOnly ? nationalUnavailableNote("distribuição regional de egressos") : ""}` : title.includes("Inserção") ? `<article class="visual-card">${brRefBars(d, u => u.employment, formatPercent, "employment")}</article>` : metricTable(d, [["IEES", u => u.sigla], ["Município", u => u.municipality], ["Inserção PR", u => formatPercent(u.employment)], ["Dispersão", u => `${u.territory} pts`]], title);
  if (tabId === "efficiency" && title.includes("Matriz")) return efficiency(c);
  if (tabId === "efficiency" && title.includes("Composição")) return `${metricTable(d, [["IEES", u => u.sigla], ["Orçamento", u => formatCurrencyMillions(u.budget)], ["Pessoal", u => formatPercent(u.personnel)], ["Suplementação", u => formatPercent(u.supplementation)]], title)}${prOnly ? nationalUnavailableNote("execução orçamentária") : ""}`;
  if (tabId === "efficiency") return `<div class="chart-grid">
    <article class="visual-card"><h3>IND-81 · Taxa de execução orçamentária</h3><p class="card-subtitle">Empenho / Orçamento Atualizado × 100. Fonte: Relatório da Despesa 8050.</p>${bars(d, u => u.execution, formatPercent)}</article>
    <article class="visual-card"><h3>IND-82 · Taxa de liquidação</h3><p class="card-subtitle">Liquidado / Empenhado × 100. Fonte: Relatório da Despesa 8050.</p>${bars(d, u => u.liquidation, formatPercent)}</article>
  </div>`;
  return `<article class="visual-card"><h3>${res.label}</h3><p class="card-subtitle">${title} · ${res.label}</p>${bars(d, res.get, res.format)}</article>`;
}

function bindModeSelector() {
  document.querySelectorAll(".mode-btn").forEach(btn => btn.addEventListener("click", () => {
    document.querySelectorAll(".mode-btn").forEach(b => b.classList.toggle("active", b === btn));
  }));
}

window.addEventListener("resize", updateTabIndicator);

Object.values(groupMeta).forEach(meta => {
  if (!meta.get && meta.getter) meta.get = meta.getter;
});


function updateFooter(c) {
  const footerCluster = document.getElementById("footerClusterLabel");
  const footerScope = document.getElementById("footerScopeLabel");
  if (!footerCluster && !footerScope) return;
  const ctx = c || context();
  const groupName = ctx.group === "all" ? "Todos os grupos" : ctx.group;
  if (footerCluster) footerCluster.textContent = `${ctx.f.groupBy.toUpperCase()} – ${groupName}`;
  if (footerScope) footerScope.textContent = ctx.f.scope;
}

function updateActiveClusterLabel(c) {
  if (!el.activeClusterLabel) return;
  if (c.f.noGroup) {
    el.activeClusterLabel.textContent = "Sem agrupamento";
    updateFooter(c);
    return;
  }
  const groupName = c.group === "all" ? "Todos os grupos" : c.group;
  const label = (groupMeta[c.f.groupBy]?.label || c.f.groupBy.toUpperCase())
    .replace(/^V\d+\s*[–-]\s*/, "");
  const isBR = c.f.scope === "Brasil" || c.f.scope === "BR";
  el.activeClusterLabel.textContent = isBR
    ? `Visão nacional · ${label}`
    : `Cluster: ${label} – ${groupName}`;
  updateFooter(c);
}

function updateContextBar(c) {
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  if (badge) {
    const isBR = c.f.scope === "Brasil";
    badge.className = `scope-badge ${isBR ? "scope-br" : "scope-pr"}`;
    badge.textContent = isBR ? "🌐 Brasil" : "📍 Paraná";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    if (c.f.noGroup) {
      row.innerHTML = '<span class="cluster-badge">Sem agrupamento</span>';
    } else {
      const groupName = c.group === "all" ? "Todos os grupos" : c.group;
      row.innerHTML = `<span class="cluster-badge c-${c.f.groupBy}"><span class="c-dim">${c.f.groupBy.toUpperCase()}</span> ${groupName}</span>`;
    }
  }
  updateFooter(c);
}

function enableTabFilters(tabId) {
  document.querySelectorAll("[data-active-tab]").forEach(card => {
    const enabled = card.dataset.activeTab === tabId;
    card.classList.toggle("is-disabled", !enabled);
    card.querySelectorAll("select, input, button").forEach(control => {
      control.disabled = !enabled;
    });
  });
}

function updateActiveTabFilters() {
  enableTabFilters(state.activeTab);
}

function renderTop(c) {
  const t = tabInfo[state.activeTab];
  el.activeTabKicker.textContent = t[0];
  el.activeTabTitle.textContent = t[1];
  el.activeTabDescription.textContent = t[2];
  el.periodPill.textContent = `Ano base ${c.f.year} · Escopo ${c.f.scope}`;
  el.scopeLabel.textContent = c.selected ? `${c.selected.sigla} | ${c.group}` : c.group === "all" ? "Sistema estadual" : `Grupo ${c.group}`;
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateFooter(c);
  updateTabIndicator();
}

/* Aba 1 - Visão Geral: indicadores oficiais, cluster e benchmark */
state.overviewMetric = state.overviewMetric || "students";

const overviewMetricPercentCodes = new Set([
  "IND-1","IND-3","IND-4","IND-5","IND-6","IND-7","IND-8","IND-9",
  "IND-16","IND-17","IND-20","IND-24","IND-26","IND-27","IND-29","IND-30",
  "IND-31","IND-32","IND-35","IND-37","IND-39","IND-42","IND-46","IND-47",
  "IND-49","IND-51","IND-52","IND-56","IND-58","IND-59","IND-63","IND-64","IND-65","IND-66",
  "IND-67","IND-68","IND-69","IND-71","IND-73","IND-77","IND-79","IND-80",
  "IND-81","IND-82","IND-83","IND-84","IND-85","IND-86","IND-87","IND-89",
  "IND-90","IND-91","IND-92","IND-93","IND-94","IND-95","IND-96","IND-97"
]);
const overviewMetricDecimalCodes = new Set(["IND-15","IND-21","IND-23","IND-53","IND-62","IND-88"]);

function overviewMetricValue(getter) {
  return u => {
    const value = Number(getter ? getter(u) : 0);
    return Number.isFinite(value) ? value : 0;
  };
}

function overviewMetricFormat(code) {
  if (code === "IND-40") return formatCurrency;
  if (code === "IND-60") return formatCurrencyMillions;
  if (overviewMetricPercentCodes.has(code)) return formatPercent;
  if (overviewMetricDecimalCodes.has(code)) return v => Number(v || 0).toFixed(1).replace(".", ",");
  return formatNumber;
}

function overviewMetricOption(key, code, label) {
  const getter = IND_FIELD_MAP[key];
  return { label, code, get: overviewMetricValue(getter), fmt: overviewMetricFormat(code) };
}

var overviewMetricOptions = Object.fromEntries([
  ["ind1", "IND-1", "Proporção de ocupação de vagas no Ensino Superior Público Estadual"],
  ["students", "IND-2", "Estudantes"],
  ["ind3", "IND-3", "Taxa de ocupação de vagas iniciais"],
  ["ind4", "IND-4", "Proporção de ingressantes oriundos da escola pública"],
  ["ind5", "IND-5", "Taxa anual de desvinculação discente"],
  ["ind6", "IND-6", "Proporção de docentes com doutorado"],
  ["ind7", "IND-7", "Proporção de alunos em mobilidade acadêmica no ano"],
  ["ind8", "IND-8", "Proporção de docentes estrangeiros"],
  ["ind9", "IND-9", "Acesso ao Portal CAPES pela biblioteca da universidade"],
  ["courses", "IND-10", "Cursos"],
  ["vacancies", "IND-11", "Vagas"],
  ["ind12", "IND-12", "Total de estudantes"],
  ["ind13", "IND-13", "Total de estudantes ingressantes"],
  ["graduates", "IND-14", "Concluintes"],
  ["ind15", "IND-15", "Média de vagas por curso"],
  ["ind16", "IND-16", "Participação da IEES no total de vagas"],
  ["ind17", "IND-17", "Participação do município no total de vagas"],
  ["ind20", "IND-20", "Participação do município no total de cursos"],
  ["ind21", "IND-21", "Média de estudantes por curso"],
  ["ind23", "IND-23", "Relação estudantes por vaga"],
  ["ind24", "IND-24", "Taxa de ocupação das vagas de ingresso"],
  ["ind25", "IND-25", "Vagas de ingresso não ocupadas"],
  ["ind26", "IND-26", "Taxa de ocupação das vagas"],
  ["ind27", "IND-27", "Taxa de concluintes"],
  ["ind28", "IND-28", "Vagas não ocupadas"],
  ["ind29", "IND-29", "Taxa de ocupação por grau"],
  ["ind30", "IND-30", "Taxa de ocupação - Diurno"],
  ["ind31", "IND-31", "Taxa de ocupação - Noturno"],
  ["ind32", "IND-32", "Taxa de ocupação por município"],
  ["ind33", "IND-33", "Egressos IEES"],
  ["ind34", "IND-34", "Egressos inseridos no mercado de trabalho formal (Região Sul)"],
  ["ind35", "IND-35", "Taxa de inserção de egressos (Região Sul)"],
  ["ind36", "IND-36", "Egressos inseridos no mercado de trabalho formal (Paraná)"],
  ["ind37", "IND-37", "Taxa de inserção de egressos no mercado de trabalho no Paraná"],
  ["ind38", "IND-38", "Egressos aderentes ao filtro CBO2 inseridos no mercado de trabalho (Paraná)"],
  ["ind39", "IND-39", "Percentual de egressos empregados no Paraná em ocupações aderentes ao CBO2"],
  ["ind40", "IND-40", "Média salarial dos egressos inseridos no mercado de trabalho do Paraná aderentes ao CBO2"],
  ["ind41", "IND-41", "Egressos inseridos no mercado formal na cidade-sede da IES"],
  ["ind42", "IND-42", "Taxa de egressos empregados formalmente na cidade-sede da IES"],
  ["ind43", "IND-43", "Total de códigos de vagas docentes"],
  ["ind44", "IND-44", "Vagas docentes disponíveis para ocupação"],
  ["ind45", "IND-45", "Vagas docentes efetivas ocupadas"],
  ["ind46", "IND-46", "Taxa de ocupação do quadro docente"],
  ["ind47", "IND-47", "Taxa de utilização das vagas docentes disponíveis"],
  ["ind48", "IND-48", "Vagas docentes condicionadas à autorização governamental"],
  ["ind49", "IND-49", "Percentual de vagas condicionadas à autorização governamental"],
  ["ind50", "IND-50", "Quantidade de TIDE atribuído ao corpo docente"],
  ["ind51", "IND-51", "Participação do TIDE no quadro docente disponível"],
  ["ind52", "IND-52", "Percentual de TIDE não atribuído"],
  ["ind53", "IND-53", "Carga horária média de docentes efetivos"],
  ["ind54", "IND-54", "Carga horária CRES autorizada"],
  ["ind55", "IND-55", "Carga horária CRES utilizada"],
  ["ind56", "IND-56", "Taxa de utilização da CRES"],
  ["ind57", "IND-57", "Saldo de carga horária CRES não utilizada"],
  ["ind58", "IND-58", "Taxa de ociosidade da CRES"],
  ["ind59", "IND-59", "Participação da CRES no esforço docente total"],
  ["ind60", "IND-60", "Captação de recursos do CNPq"],
  ["ind61", "IND-61", "Número de vínculos de fomento do CNPq"],
  ["ind62", "IND-62", "Conceito dos programas de pós-graduação no ano de referência"],
  ["ind63", "IND-63", "Proporção de docentes permanentes da pós-graduação"],
  ["ind64", "IND-64", "Proporção de docentes estrangeiros da pós-graduação"],
  ["ind65", "IND-65", "Proporção de docentes da pós-graduação com bolsa de produtividade"],
  ["ind66", "IND-66", "Proporção de programas de pós-graduação com conceito CAPES 5, 6 e 7 no ano de referência"],
  ["ind67", "IND-67", "Taxa de Ocupação de Vagas por Tipo de Curso"],
  ["ind68", "IND-68", "Índice de Especialização da Oferta Acadêmica"],
  ["ind69", "IND-69", "Proporção de Cursos de Licenciatura na Oferta"],
  ["ind70", "IND-70", "Indicador sem cadastro na relação oficial de indicadores"],
  ["ind71", "IND-71", "Egressos inseridos no mercado formal por município de vínculo"],
  ["ind72", "IND-72", "Participação do município na inserção formal dos egressos"],
  ["ind73", "IND-73", "Egressos inseridos no mercado formal por curso padronizado"],
  ["ind74", "IND-74", "Participação do curso na inserção formal dos egressos"],
  ["ind75", "IND-75", "Egressos inseridos no mercado formal por tipo de curso"],
  ["ind76", "IND-76", "Diversidade ocupacional dos egressos por curso"],
  ["ind77", "IND-77", "Distribuição dos egressos por grande grupo ocupacional CBO2"],
  ["ind78", "IND-78", "Participação dos grandes grupos ocupacionais CBO2 na inserção dos egressos"],
  ["ind79", "IND-79", "Municípios de destino profissional dos egressos por curso"],
  ["ind80", "IND-80", "Índice de dispersão territorial dos egressos por curso"],
  ["ind81", "IND-81", "Taxa de Execução Orçamentária (Empenho)"],
  ["ind82", "IND-82", "Taxa de Liquidação"],
  ["ind83", "IND-83", "Taxa de Pagamento sobre Liquidado"],
  ["ind84", "IND-84", "Grau de Contingenciamento Orçamentário"],
  ["ind85", "IND-85", "Variação da Dotação Orçamentária (Dotação Inicial vs. Atualizada)"],
  ["ind86", "IND-86", "Participação de Pessoal e Encargos no Total da Despesa"],
  ["ind87", "IND-87", "Participação de Outras Despesas Correntes no Total"],
  ["ind88", "IND-88", "Proporção Despesas Correntes vs. Despesas de Capital"],
  ["ind89", "IND-89", "Participação de Recursos Livres (Tesouro Estadual) no Orçamento Total"],
  ["ind90", "IND-90", "Participação de Recursos Próprios no Orçamento Total"],
  ["ind91", "IND-91", "Participação de Recursos de Transferências (Federal/Convênios)"],
  ["ind92", "IND-92", "Participação de Investimentos em Obras e Instalações no Orçamento Total"],
  ["ind93", "IND-93", "Participação de Investimentos em Equipamentos e Material Permanente no Orçamento Total"],
  ["ind94", "IND-94", "Percentual de variação da dotação orçamentária em relação à LOA inicial"],
  ["ind95", "IND-95", "Percentual de execução de liquidação do Orçamento Inicial"],
  ["ind96", "IND-96", "Percentual de execução de liquidação do Orçamento Disponível"],
  ["ind97", "IND-97", "Percentual de execução de liquidação do Orçamento Atualizado"]
].map(([key, code, label]) => [key, overviewMetricOption(key, code, label)]));

var overviewKpiDefinitions = [
  { code: "IND-2", title: "Matrículas de graduação", source: "INEP", formula: "Somatório QT_MAT", polarity: "↑", mode: "pct", get: a => a.students, fmt: formatNumber },
  { code: "IND-13", title: "Estudantes ingressantes", source: "INEP", formula: "Somatório QT_ING", polarity: "↑", mode: "pct", get: a => a.entrants, fmt: formatNumber },
  { code: "IND-14", title: "Estudantes concluintes", source: "INEP", formula: "Somatório QT_CONC", polarity: "↑", mode: "pct", get: a => a.graduates, fmt: formatNumber },
  { code: "IND-10", title: "Total de cursos", source: "INEP", formula: "Contagem de cursos", polarity: "↑", mode: "pct", get: a => a.courses, fmt: formatNumber },
  { code: "IND-11", title: "Total de vagas", source: "INEP", formula: "Somatório QT_VG_TOTAL", polarity: "↑", mode: "pct", get: a => a.vacancies, fmt: formatNumber },
  { code: "IND-26", title: "Taxa de ocupação das vagas", source: "INEP", formula: "QT_MAT / QT_VG_TOTAL × 100", polarity: "↑", mode: "pp", benchmark: () => formatPercent(brazil.result.occupancy), get: a => a.occupancy, fmt: formatPercent },
  { code: "IND-24", title: "Taxa de ocupação das vagas de ingresso", source: "INEP", formula: "QT_ING / QT_VG_NOVA × 100", polarity: "↑", mode: "pp", get: a => a.ingressOccupancy, fmt: formatPercent },
  { code: "IND-5", title: "Taxa anual de desvinculação discente", source: "INEP", formula: "QT_DESVINCULADO / QT_MAT × 100", polarity: "↓", mode: "pp", benchmark: () => formatPercent(100 - brazil.result.permanence), get: a => a.dropout, fmt: formatPercent },
  { code: "IND-27", title: "Taxa de concluintes", source: "INEP", formula: "QT_CONC / QT_VG_NOVA × 100", polarity: "↑", mode: "pp", benchmark: () => formatPercent(brazil.result.completion), get: a => a.completionByVacancy, fmt: formatPercent },
  { code: "IND-6", title: "Docentes com doutorado", source: "INEP", formula: "QT_DOC_EX_DOUT / QT_DOC_EXE × 100", polarity: "↑", mode: "pp", benchmark: () => formatPercent(brazil.result.doctorate), get: a => a.doctors, fmt: formatPercent },
  { code: "IND-37", title: "Inserção de egressos no Paraná", source: "SETI / RAIS", formula: "Egressos PR / Total egressos × 100", polarity: "↑", mode: "pp", benchmark: () => formatPercent(brazil.result.employment), get: a => a.employment, fmt: formatPercent },
  { code: "IND-40", title: "Média salarial dos egressos", source: "SETI / RAIS", formula: "Média salarial PR + CBO2", polarity: "↑", mode: "pct", benchmark: () => formatCurrency(brazil.result.salary), get: a => a.salary, fmt: formatCurrency },
  { code: "IND-60", title: "Captação de recursos do CNPq", source: "CNPq", formula: "Bolsas, auxílios e projetos", polarity: "↑", mode: "pct", get: a => a.cnpq, fmt: formatCurrencyMillions },
  { code: "IND-81", title: "Taxa de execução orçamentária", source: "Relatório 8050", formula: "Empenhado / Orçamento atualizado × 100", polarity: "↑", mode: "pp", get: a => a.execution, fmt: formatPercent }
];

function hasClusterFilter(c) {
  return c.f.groupLevel && c.f.groupLevel !== "all";
}

function overviewActiveGroup(c) {
  if (state.activeTab === "overview") return getLocalFilter("overviewClusterBars");
  return hasClusterFilter(c) ? c.f.groupLevel : "all";
}

function overviewDataSet(c) {
  const activeGroup = overviewActiveGroup(c);
  const source = c.base.length ? c.base : c.all;
  const data = activeGroup !== "all" ? source.filter(u => u.groups[c.f.groupBy] === activeGroup) : source;
  return data.length ? data : c.base.length ? c.base : c.all;
}

function overviewPreviousData(ids, year) {
  const previousYear = String(Math.max(2020, Number(year) - 1));
  const wanted = new Set(ids);
  return [...universities, ...universitiesBrasil].map(u => byYear(u, previousYear)).filter(u => wanted.has(u.id));
}

function overviewAgg(d) {
  const base = agg(d);
  const vacancyBase = Math.max(1, base.vacancies);
  return {
    ...base,
    courses: sum(d, u => u.courses),
    dropout: wavg(d, u => u.dropout, u => u.students),
    ingressOccupancy: (() => { const vn = d.some(u => u.vacanciesNova != null) ? Math.max(1, sum(d, u => u.vacanciesNova != null ? u.vacanciesNova : 0)) : vacancyBase; return sum(d, u => u.entrants) / vn * 100; })(),
    completionByVacancy: sum(d, u => u.graduates) / vacancyBase * 100,
    salary: wavg(d, u => panelEmploymentSalary(u), u => u.graduates),
    facultyOcc: wavg(d, u => u.facultyOcc, u => u.students)
  };
}

function overviewDelta(current, previous, mode, polarity) {
  if (!previous) return { label: "sem base", cls: "neutral" };
  const raw = mode === "pp" ? current - previous : (current - previous) / Math.max(Math.abs(previous), 1) * 100;
  const good = polarity === "↓" ? raw < 0 : raw >= 0;
  const sign = raw > 0 ? "+" : "";
  const suffix = mode === "pp" ? " p.p." : "%";
  return { label: `${sign}${raw.toFixed(1).replace(".", ",")}${suffix}`, cls: good ? "positive" : "warning" };
}

function previousYearRows(rows, previousYear) {
  const sourceById = new Map([...universities, ...universitiesBrasil].map(u => [u.id, u]));
  return rows.map(u => sourceById.get(u.id)).filter(Boolean).map(u => byYear(u, String(previousYear)));
}

function normalizeKpiPolarity(polarity, label = "") {
  const text = `${polarity || ""} ${label || ""}`.toLowerCase();
  if (text.includes("↓") || text.includes("menor") || text.includes("custo") || text.includes("desvincula") || text.includes("evas") || text.includes("contingenc") || text.includes("ocios")) return "lower";
  if (text.includes("perfil") || text.includes("classifica")) return "neutral";
  return "higher";
}

function kpiDeltaForValue(current, previous, polarity, mode, previousYear, label = "") {
  const normalized = normalizeKpiPolarity(polarity, label);
  const currentValue = Number(current);
  const previousValue = previous == null ? null : Number(previous);
  if (!Number.isFinite(currentValue) || (previousValue != null && !Number.isFinite(previousValue))) return kpiDeltaHtml(null, null, "neutral", "pp", previousYear);
  return kpiDeltaHtml(currentValue, previousValue, normalized, "pp", previousYear);
}

function renderKpis(c) {
  if (state.activeTab !== "overview") {
    el.kpiGrid.innerHTML = "";
    el.kpiGrid.classList.remove("overview-kpi-grid");
    el.kpiGrid.style.display = "none";
    return;
  }
  el.kpiGrid.classList.add("overview-kpi-grid");
  const data = overviewDataSet(c);
  const current = overviewAgg(data);
  const showBr = !isBrasilScope(c.f.scope);
  el.kpiGrid.style.display = "";
  el.kpiGrid.innerHTML = overviewKpiDefinitions.map(def => {
    const value = def.get(current);
    const brTag = showBr ? brBenchmarkTag(def) : "";
    return `<article class="kpi-card overview-kpi">
      <div class="kpi-head">
        <div class="kpi-label">${def.title}</div>
        <div class="kpi-icon" aria-hidden="true">${kpiIcon(def.title)}</div>
      </div>
      <div class="kpi-value">${def.fmt(value)}</div>
      ${brTag}
    </article>`;
  }).join("");
}

function renderDefaultKpis(c) {
  el.kpiGrid.classList.remove("overview-kpi-grid");
  const data = c.display.length ? c.display : c.ref;
  const ref = c.ref.length ? c.ref : c.all;
  const a = agg(data), ar = agg(ref), res = resultIndicators[c.f.result], eff = effortIndicators[c.f.effort], rows = matrixRows(ref, c.f), selectedRow = c.selected && rows.find(r => r.id === c.selected.id);
  const previousYear = Number(c.f.year) - 1;
  const hasPreviousYear = !!yearAdj[previousYear];
  const dataPrev = hasPreviousYear ? previousYearRows(data, previousYear) : [];
  const refPrev = hasPreviousYear ? previousYearRows(ref, previousYear) : [];
  const aPrev = dataPrev.length ? agg(dataPrev) : null;
  const arPrev = refPrev.length ? agg(refPrev) : null;
  const rowsPrev = refPrev.length ? matrixRows(refPrev, {...c.f, year:String(previousYear)}) : [];
  const selectedRowPrev = c.selected && rowsPrev.find(r => r.id === c.selected.id);
  const d = (curr, prev, polarity, mode, label) => kpiDeltaForValue(curr, prev, polarity, mode, previousYear, label);
  const cards = state.activeTab === "efficiency" ? [
    ["Orçamento liquidado do grupo", formatCurrencyMillions(ar.budget), `${ref.length} IEES no grupo`, "+6,8%"],
    ["Execução orçamentária média", formatPercent(ar.execution), "empenho sobre disponível", badge(ar.execution, 93, 90)],
    ["Taxa de liquidação", formatPercent(ar.liquidation), "liquidado sobre empenhado", badge(ar.liquidation, 91, 88)],
    [eff.label, eff.format(mean(ref, eff.get)), "média do grupo", "ref."],
    ["Resultado médio do grupo", res.format(mean(ref, res.get)), res.label, "grupo"],
    ["Resultado relativo", selectedRow ? `${selectedRow.resultRel.toFixed(1)}%` : `${mean(rows, r => r.resultRel).toFixed(1)}%`, "base grupo = 100", selectedRow ? selectedRow.resultLabel : "média"],
    ["Esforço relativo", selectedRow ? `${selectedRow.effortRel.toFixed(1)}%` : `${mean(rows, r => r.effortRel).toFixed(1)}%`, "base grupo = 100", selectedRow ? selectedRow.effortLabel : "média"],
    ["Quadrante oficial", selectedRow ? selectedRow.quadrant : summarize(rows), "planilha de estratificação", `${rows.length} pontos`]
  ] : [
    ["Total de estudantes", formatNumber(a.students), `${formatNumber(a.entrants)} ingressantes`, "+2,1%"],
    ["Taxa de ocupação das vagas", formatPercent(a.occupancy), `${formatNumber(a.vacancies)} vagas`, badge(a.occupancy, 88, 80)],
    ["Taxa de concluintes", formatPercent(a.completion), `${formatNumber(a.graduates)} concluintes`, badge(a.completion, 62, 56)],
    ["Docentes com doutorado", formatPercent(a.doctors), "proporção no corpo docente", badge(a.doctors, 86, 80)],
    ["Captação CNPq", formatCurrencyMillions(a.cnpq), "recursos captados", "+4,4%"],
    ["Inserção no Paraná", formatPercent(a.employment), "egressos no mercado formal", badge(a.employment, 72, 67)],
    ["Orçamento liquidado", formatCurrencyMillions(a.budget), "grupo selecionado", "+6,8%"],
    ["Execução orçamentária", formatPercent(a.execution), "média ponderada", badge(a.execution, 93, 90)]
  ];
  const deltaForCard = label => {
    const text = String(label).toLowerCase();
    if (text.includes("total de estudantes")) return d(a.students, aPrev?.students, "higher", "pct", label);
    if (text.includes("ocupa")) return d(a.occupancy, aPrev?.occupancy, "higher", "pp", label);
    if (text.includes("concluintes")) return d(a.completion, aPrev?.completion, "higher", "pp", label);
    if (text.includes("doutorado")) return d(a.doctors, aPrev?.doctors, "higher", "pp", label);
    if (text.includes("cnpq") || text.includes("capta")) return d(a.cnpq, aPrev?.cnpq, "higher", "pct", label);
    if (text.includes("inser")) return d(a.employment, aPrev?.employment, "higher", "pp", label);
    if (text.includes("execu")) return d(ar.execution, arPrev?.execution, "higher", "pp", label);
    if (text.includes("taxa") && text.includes("liquida")) return d(ar.liquidation, arPrev?.liquidation, "higher", "pp", label);
    if (text.includes("liquida")) return d(ar.budget, arPrev?.budget, "higher", "pct", label);
    if (text === String(eff.label).toLowerCase()) return d(mean(ref, eff.get), refPrev.length ? mean(refPrev, eff.get) : null, eff.label, text.includes("custo") ? "pct" : "pp", label);
    if (text.includes("resultado relativo")) return d(selectedRow ? selectedRow.resultRel : mean(rows, r => r.resultRel), selectedRowPrev ? selectedRowPrev.resultRel : rowsPrev.length ? mean(rowsPrev, r => r.resultRel) : null, "higher", "pp", label);
    if (text.includes("resultado")) return d(mean(ref, res.get), refPrev.length ? mean(refPrev, res.get) : null, "higher", "pp", label);
    if (text.includes("esfor")) return d(selectedRow ? selectedRow.effortRel : mean(rows, r => r.effortRel), selectedRowPrev ? selectedRowPrev.effortRel : rowsPrev.length ? mean(rowsPrev, r => r.effortRel) : null, "lower", "pp", label);
    return d(null, null, "neutral", "pp", label);
  };
  el.kpiGrid.innerHTML = cards.map(([label, value, meta, trend]) => {
    const cls = kpiClass(label, trend);
    const delta = deltaForCard(label);
    return `<article class="kpi-card ${cls}"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`;
  }).join("");
}

// ── Tabela executiva estrutural — helpers ────────────────────────────

function renderMetricCell(value, maxValue) {
  const pct = maxValue > 0 ? Math.round(Math.min(value / maxValue * 100, 100)) : 0;
  return `<div class="metric-cell">
    <span class="metric-value">${formatNumber(value)}</span>
    <div class="metric-bar"><div class="metric-bar-fill" style="width:${pct}%"></div></div>
  </div>`;
}

function renderGroupBadge(groupName, groupsList) {
  const idx = Array.isArray(groupsList) ? groupsList.indexOf(groupName) : -1;
  const cls = idx >= 0 && idx <= 4 ? `group-badge-${idx}` : "group-badge-4";
  return `<span class="group-badge ${cls}">${groupName || "—"}</span>`;
}

function renderStructuralInsight(allData, filteredData, groupLabel) {
  if (!filteredData.length) return "";
  const totalStudents = sum(allData, u => u.students) || 1;
  const totalGrad     = sum(allData, u => u.graduates) || 1;
  const fStudents     = sum(filteredData, u => u.students);
  const fGrad         = sum(filteredData, u => u.graduates);
  const maxVacU = filteredData.reduce((m, u) => u.vacancies > (m ? m.vacancies : 0) ? u : m, null);
  const maxStuU = filteredData.reduce((m, u) => u.students  > (m ? m.students  : 0) ? u : m, null);
  let text = "";
  if (groupLabel !== "all" && allData.length > filteredData.length) {
    const pctS = (fStudents / totalStudents * 100).toFixed(0);
    const pctG = (fGrad     / totalGrad     * 100).toFixed(0);
    text = `As instituições do grupo <strong>${groupLabel}</strong> concentram ${pctS}% dos estudantes e ${pctG}% dos concluintes do sistema.`;
    if (maxVacU && maxStuU && maxVacU.id !== maxStuU.id) {
      text += ` A maior oferta de vagas está em <strong>${maxVacU.sigla}</strong>, enquanto <strong>${maxStuU.sigla}</strong> apresenta o maior número de estudantes.`;
    } else if (maxStuU) {
      text += ` <strong>${maxStuU.sigla}</strong> concentra o maior número de estudantes no grupo.`;
    }
  } else {
    if (maxVacU && maxStuU && maxVacU.id !== maxStuU.id) {
      text = `<strong>${maxStuU.sigla}</strong> possui o maior número de estudantes no conjunto exibido, enquanto <strong>${maxVacU.sigla}</strong> concentra a maior oferta de vagas.`;
    } else if (maxStuU) {
      text = `<strong>${maxStuU.sigla}</strong> concentra o maior número de estudantes no conjunto exibido.`;
    } else {
      text = "Dados insuficientes para gerar leitura automática.";
    }
  }
  return `<div class="synth-insight-card">
    <p class="synth-insight-label">Leitura rápida</p>
    <p class="synth-insight-text">${text}</p>
  </div>`;
}

// ── fim helpers tabela executiva estrutural ──────────────────────────

function overview(c) {
  const data = overviewDataSet(c);
  if (!data.length) return empty();
  const metricKey = overviewMetricOptions[state.overviewMetric] ? state.overviewMetric : "students";
  state.overviewMetric = metricKey;
  const metric = overviewMetricOptions[metricKey];
  const a = overviewAgg(data);
  const activeOverviewGroup = overviewActiveGroup(c);
  const clusterActive = activeOverviewGroup !== "all";
  const subtitle = clusterActive ? `Cluster ativo: ${c.f.groupBy.toUpperCase()} · ${activeOverviewGroup}.` : "Sistema PR completo. Selecione uma variável e um grupo de agrupamento para filtrar por cluster.";
  const synthGroup = activeOverviewGroup;
  const synthGroups = groupOptions[c.f.groupBy] || [];
  let synthData = synthGroup !== "all" ? data.filter(u => u.groups[c.f.groupBy] === synthGroup) : data;
  if (!synthData.length) synthData = data;
  return `<div class="overview-chart-shell">
    <article class="visual-card overview-bars-card">
      <div class="visual-card-header">
        <div>
          <h3>Ranking de IEES por ${metric.label}</h3>
          <p class="card-subtitle">Comparação das IEES segundo ${metric.label.toLowerCase()} (${metric.code}). As barras mostram o valor de cada instituição e a linha laranja indica a média de referência do sistema${clusterActive ? " — cluster ativo: " + c.f.groupBy.toUpperCase() + " · " + activeOverviewGroup : ""}.</p>
        </div>
        <label class="metric-selector">
          <span class="metric-selector-label">Métrica analisada</span>
          <select id="overviewMetricSelector">
            ${Object.entries(overviewMetricOptions).map(([key, opt]) => `<option value="${key}" ${key === metricKey ? "selected" : ""}>${opt.label}</option>`).join("")}
          </select>
        </label>
      </div>
      ${(() => {
        const localGroup = getLocalFilter("overviewClusterBars");
        const groupLabel = activeOverviewGroup !== "all" ? activeOverviewGroup : "Todos os grupos";
        const groupByLabel = (groupMeta[c.f.groupBy]?.label || c.f.groupBy.toUpperCase()).replace(/^V\d+\s*[–-]\s*/, "");
        const chartData = data;
        const refVal = mean(chartData.length ? chartData : c.base, metric.get);
        const refLabel = clusterActive || localGroup !== "all" ? "Média do grupo" : "Média do sistema";
        const groupOptions_ = groupOptions[c.f.groupBy] || [];
        const chipsHtml = [
          `<button class="qchip${localGroup === "all" ? " qchip-active" : ""}" type="button" data-group="all">Todos (${c.base.length})</button>`,
          ...groupOptions_.map(g => {
            const cnt = c.base.filter(u => u.groups[c.f.groupBy] === g).length;
            if (!cnt) return "";
            return `<button class="qchip${localGroup === g ? " qchip-active" : ""}" type="button" data-group="${g.replace(/"/g,'&quot;')}">${g} (${cnt})</button>`;
          }).filter(Boolean)
        ].join("");
        const displayCount = chartData.length;
        const totalCount = c.base.length;
        const statusText = activeOverviewGroup !== "all"
          ? `Exibindo <strong>${displayCount}</strong> de ${totalCount} IEES · Grupo: <strong>${activeOverviewGroup}</strong>`
          : `Exibindo <strong>${displayCount}</strong> de ${totalCount} IEES`;
        const sorted4insight = [...chartData].sort((a, b) => metric.get(b) - metric.get(a));
        const top = sorted4insight[0], bot = sorted4insight[sorted4insight.length - 1];
        let insightText = "";
        if (top && bot && top.id !== bot.id) {
          insightText = `<strong>${top.sigla}</strong> lidera o ranking de ${metric.label.toLowerCase()}, com ${metric.fmt(metric.get(top))}, ficando acima da ${refLabel.toLowerCase()} de ${metric.fmt(refVal)}. <strong>${bot.sigla}</strong> apresenta o menor valor no conjunto exibido (${metric.fmt(metric.get(bot))}).`;
        } else if (top) {
          insightText = `<strong>${top.sigla}</strong> lidera o ranking de ${metric.label.toLowerCase()} com ${metric.fmt(metric.get(top))}, ${refLabel.toLowerCase()}: ${metric.fmt(refVal)}.`;
        }
        return `${insightText ? `<div class="chart-insight-card"><p class="chart-insight-label">Leitura rápida</p><p class="chart-insight-text">${insightText}</p></div>` : ""}<div class="chart-context-strip">
          <span class="chart-context-pill"><span class="chart-context-label">Métrica</span><span class="chart-context-value">${metric.label} (${metric.code})</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Escopo</span><span class="chart-context-value">${c.f.scope}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Agrupar por</span><span class="chart-context-value">${groupByLabel}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">Grupo</span><span class="chart-context-value">${groupLabel}</span></span>
          <span class="chart-context-sep"></span>
          <span class="chart-context-pill"><span class="chart-context-label">${refLabel}</span><span class="chart-context-reference">${metric.fmt(refVal)}</span></span>
        </div>
        <p class="chart-chips-label">Filtro por grupo</p>
        <div class="qchip-strip" data-chart-id="overviewClusterBars" aria-label="Filtrar por grupo" style="margin-bottom:6px">${chipsHtml}</div>
        <p class="chart-status-line">${statusText}</p>`;
      })()}
      ${overviewClusterBars(c, metric)}
    </article>
  </div>
  <div class="score-grid mt-14">
    ${score("Ocupação das vagas", formatPercent(a.occupancy), "IND-26", a.occupancy, brVal("occupancy"))}
    ${score("Desvinculação", formatPercent(a.dropout), "IND-5", 100 - a.dropout, brVal("permanence"))}
    ${score("Inserção PR", formatPercent(a.employment), "IND-37", a.employment, brVal("employment"))}
    ${score("Execução orçamentária", formatPercent(a.execution), "IND-81", a.execution)}
  </div>
  ${(() => {
    const maxStudents  = Math.max(...data.map(u => u.students),  1);
    const maxVacancies = Math.max(...data.map(u => u.vacancies), 1);
    const maxCourses   = Math.max(...data.map(u => u.courses),   1);
    const maxGraduates = Math.max(...data.map(u => u.graduates), 1);
    const sortKey = state.synthSortKey || "students";
    const getVal  = u => ({ students: u.students, vacancies: u.vacancies, courses: u.courses, graduates: u.graduates, sigla: u.sigla, grupo: u.groups[c.f.groupBy] || "" })[sortKey] ?? u.students;
    const isNum   = ["students","vacancies","courses","graduates"].includes(sortKey);
    const sorted  = [...synthData].sort((a, b) => {
      const va = getVal(a), vb = getVal(b);
      return isNum ? vb - va : String(va).localeCompare(String(vb), "pt-BR");
    });
    const totStudents  = sum(synthData, u => u.students);
    const totVacancies = sum(synthData, u => u.vacancies);
    const totCourses   = sum(synthData, u => u.courses);
    const totGraduates = sum(synthData, u => u.graduates);
    const groupList = groupOptions[c.f.groupBy] || [];
    const tableCountSource = c.base.length ? c.base : c.all;
    const chipsHtml = [
      `<button class="rank-metric-btn${synthGroup === "all" ? " active" : ""}" type="button" onclick="setSynthTableGroup('all')">Todos (${tableCountSource.length})</button>`,
      ...groupList.map(g => {
        const cnt = tableCountSource.filter(u => u.groups[c.f.groupBy] === g).length;
        if (!cnt) return "";
        return `<button class="rank-metric-btn${synthGroup === g ? " active" : ""}" type="button" onclick="setSynthTableGroup('${g.replace(/'/g, "\\'")}')">${g} (${cnt})</button>`;
      }).filter(Boolean)
    ].join("");
    const totalCount = tableCountSource.length;
    const statusLabel = synthGroup !== "all"
      ? `Exibindo <strong>${synthData.length}</strong> de ${totalCount} IEES · Grupo: <strong>${synthGroup}</strong>`
      : `Exibindo <strong>${synthData.length}</strong> de ${totalCount} IEES`;
    const sortOptions = [
      ["students","Estudantes"],["vacancies","Vagas"],["courses","Cursos"],
      ["graduates","Concluintes"],["sigla","IEES"],["grupo","Grupo"]
    ].map(([k,l]) => `<option value="${k}"${sortKey === k ? " selected" : ""}>${l}</option>`).join("");
    const rowsHtml = sorted.map(u => `<tr>
      <td><strong>${u.sigla}</strong><br><span>${u.nome}</span></td>
      <td>${renderMetricCell(u.students,  maxStudents)}</td>
      <td>${renderMetricCell(u.vacancies, maxVacancies)}</td>
      <td>${renderMetricCell(u.courses,   maxCourses)}</td>
      <td>${renderMetricCell(u.graduates, maxGraduates)}</td>
      <td>${renderGroupBadge(u.groups[c.f.groupBy] || "—", groupList)}</td>
    </tr>`).join("");
    return `<div class="table-wrap mt-14">
      <div class="synth-table-header">
        <div class="synth-table-titles">
          <p class="synth-table-title">Síntese dos indicadores estruturais por IEES</p>
          <p class="synth-table-sub">Comparativo das instituições estaduais segundo estudantes, vagas, cursos, concluintes e grupo estrutural.</p>
        </div>
        <div class="synth-sort-wrap">
          <span class="synth-sort-label">Ordenar por</span>
          <select class="synth-sort-select" onchange="setSynthSort(this.value)">${sortOptions}</select>
        </div>
      </div>
      ${renderStructuralInsight(tableCountSource, synthData, synthGroup)}
      <div class="rank-metric-selector" style="margin-bottom:6px">${chipsHtml}</div>
      <p class="synth-status-line">${statusLabel}</p>
      <table class="data-table">
        <thead><tr><th>IEES</th><th>Estudantes</th><th>Vagas</th><th>Cursos</th><th>Concluintes</th><th>Grupo</th></tr></thead>
        <tbody>${rowsHtml}</tbody>
        <tfoot><tr class="synth-total-row">
          <td><strong>Total do sistema</strong></td>
          <td><strong>${formatNumber(totStudents)}</strong></td>
          <td><strong>${formatNumber(totVacancies)}</strong></td>
          <td><strong>${formatNumber(totCourses)}</strong></td>
          <td><strong>${formatNumber(totGraduates)}</strong></td>
          <td>${synthData.length} IEES</td>
        </tr></tfoot>
      </table>
    </div>`;
  })()}`;
}

function overviewClusterBars(c, metric) {
  const clusterActive = overviewActiveGroup(c) !== "all";
  const clusterData = overviewDataSet(c);
  const clusterIds = new Set(clusterData.map(u => u.id));
  const chartData = clusterData;
  const sorted = [...chartData].sort((a, b) => metric.get(b) - metric.get(a));
  const max = Math.max(...sorted.map(metric.get), 1);
  const ref = mean(clusterData, metric.get);
  const refPos = clamp(ref / max * 100, 0, 100);
  const refLabel = clusterActive ? "Média do cluster" : "Média do sistema";
  const ieesColors = { UEL: "#1f72b8", UEM: "#e05c00", UEPG: "#14804a", UNIOESTE: "#8b2fc9", UNICENTRO: "#c43f3a", UENP: "#af7a00", UNESPAR: "#0f6e56" };
  return `<div class="bars-reference-note"><span>${refLabel}: <strong>${metric.fmt(ref)}</strong></span></div>
  <div class="bars overview-cluster-bars" style="--ref-pos:${refPos}%">
    ${sorted.map((u, i) => {
      const value = metric.get(u);
      const inCluster = clusterIds.has(u.id);
      const selected = isUniSelected(c.f, u.id);
      const barColor = ieesColors[u.sigla] || "var(--blue-700)";
      const isTop = i === 0;
      return `<div class="bar-row ${inCluster ? "in-cluster" : "out-cluster"} ${selected ? "selected" : ""} ${isTop ? "top-value" : ""}">
        <span class="bar-name" title="${u.nome}">${u.sigla}${isTop ? '<span class="top-value-badge">↑ maior</span>' : ""}</span>
        <span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${barColor}"></span><span class="bar-reference" aria-hidden="true"></span></span>
        <span class="bar-value">${metric.fmt(value)}</span>
      </div>`;
    }).join("")}
  </div>`;
}

function bindOverviewControls() {
  const selector = document.getElementById("overviewMetricSelector");
  if (!selector) return;
  selector.addEventListener("change", event => {
    state.overviewMetric = event.target.value;
    render();
  });
}

function renderTab(c) {
  const id = state.activeTab;
  el.tabContent.innerHTML = id === "overview" ? `<div class="tab-aba-wrapper" data-tab-id="overview">${overview(c)}</div>` : renderNumberedTab(id, c);
  bindModeSelector();
  bindOverviewControls();
}

function renderSystemAlerts(c) {
  const box = document.getElementById("systemAlerts");
  if (!box) return;
  const data = overviewDataSet(c);
  if (!data.length) {
    box.innerHTML = `<div class="alert-item alert-info"><span class="alert-icon" aria-hidden="true">i</span><div class="alert-body"><strong class="alert-ies">Sistema</strong><span class="alert-msg">Nenhuma IEES no recorte selecionado.</span></div></div>`;
    return;
  }
  const avgOcc = mean(data, u => u.occupancy);
  const avgDrop = mean(data, u => u.dropout);
  const avgEmployment = mean(data, u => u.employment);
  const alerts = [];
  data.forEach(u => {
    if (u.execution < 80) alerts.push(["alert-danger", "⚠", u.sigla, `IND-81 Execução orçamentária ${formatPercent(u.execution)} — abaixo de 80%.`]);
    if (u.occupancy < avgOcc - 10) alerts.push(["alert-warn", "⚠", u.sigla, `IND-26 Ocupação ${formatPercent(u.occupancy)}`]);
    if (u.dropout > avgDrop + 2) alerts.push(["alert-warn", "⚠", u.sigla, `IND-5 Desvinculação ${formatPercent(u.dropout)}`]);
    if (u.facultyOcc < 70) alerts.push(["alert-warn", "⚠", u.sigla, `IND-46 Ocupação do quadro docente ${formatPercent(u.facultyOcc)} — abaixo de 70%.`]);
    if (u.employment < avgEmployment - 5) alerts.push(["alert-warn", "⚠", u.sigla, `IND-37 Inserção PR ${formatPercent(u.employment)}`]);
  });
  if (!alerts.length) alerts.push(["alert-ok", "✓", "Sistema", "Nenhum alerta crítico no recorte ativo. Indicadores dentro da faixa esperada do cluster."]);
  box.innerHTML = alerts.slice(0, 5).map(([cls, icon, ies, msg]) => `<div class="alert-item ${cls}"><span class="alert-icon" aria-hidden="true">${icon}</span><div class="alert-body"><strong class="alert-ies">${ies}</strong><span class="alert-msg">${msg}</span></div></div>`).join("");
}

/* Abas 2 e 3 - comparação por dimensão e acesso/oferta orientados a cluster */
state.comparisonShowOnlyCluster = state.comparisonShowOnlyCluster ?? true;
state.radarReference = state.radarReference || "cluster";
state.comparisonDimension = state.comparisonDimension || "all";
state.retentionCourseType = state.retentionCourseType || "Bacharelado";

var comparisonIndicatorSets = {};

function comparisonDimensionSlug(label) {
  return String(label || "Geral")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "") || "geral";
}

function comparisonCatalogKeyForCode(code) {
  return String(code || "").toLowerCase().replace(/^ind-/, "ind");
}

function comparisonCodeNumber(code) {
  const match = String(code || "").match(/\d+/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function normalizeComparisonText(value) {
  return String(value || "")
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
}

function comparisonPolarityFromCatalog(indicator) {
  const text = normalizeComparisonText(indicator?.polaridade || "");
  if (text.includes("menor")) return "\u2193";
  if (text.includes("maior")) return "\u2191";
  return "~";
}

function comparisonDecimal(v, digits = 1) {
  const n = Number(v);
  if (!Number.isFinite(n)) return "—";
  return new Intl.NumberFormat("pt-BR", {
    minimumFractionDigits: digits,
    maximumFractionDigits: digits
  }).format(n);
}

function comparisonFormatterFromCatalog(indicator, code) {
  const text = normalizeComparisonText(`${indicator?.unidade || ""} ${indicator?.nome || ""}`);
  if (text.includes("percentual") || text.includes("taxa") || text.includes("proporcao") || text.includes("participacao")) return formatPercent;
  if (text.includes("reais") || text.includes("r$") || text.includes("salario") || text.includes("captacao")) {
    return code === "IND-60" ? formatCurrencyMillions : formatCurrency;
  }
  if (text.includes("hora")) return v => `${comparisonDecimal(v, 1)}h`;
  if (text.includes("razao") || text.includes("indice") || text.includes("conceito") || text.includes("media")) return v => comparisonDecimal(v, 1);
  return formatNumber;
}

function buildComparisonIndicatorSets() {
  const sets = {};
  Object.entries(INDICATOR_CATALOG || {}).forEach(([key, indicator]) => {
    const code = `IND-${Number(indicator.codigo)}`;
    const getter = IND_FIELD_MAP[comparisonCatalogKeyForCode(code)] || IND_FIELD_MAP[key];
    if (!getter) return;
    const label = String(indicator.categoria || "Geral").trim() || "Geral";
    const dimKey = comparisonDimensionSlug(label);
    if (!sets[dimKey]) sets[dimKey] = { label, indicators: [], order: comparisonCodeNumber(code) };
    sets[dimKey].order = Math.min(sets[dimKey].order, comparisonCodeNumber(code));
    sets[dimKey].indicators.push({
      code,
      name: indicator.nome || code,
      polarity: comparisonPolarityFromCatalog(indicator),
      get: getter,
      fmt: comparisonFormatterFromCatalog(indicator, code)
    });
  });
  Object.values(sets).forEach(set => {
    const byCode = new Map();
    set.indicators.forEach(ind => {
      if (!byCode.has(ind.code)) byCode.set(ind.code, ind);
    });
    set.indicators = [...byCode.values()].sort((a, b) => comparisonCodeNumber(a.code) - comparisonCodeNumber(b.code));
  });
  return Object.fromEntries(Object.entries(sets).sort((a, b) => a[1].order - b[1].order || a[1].label.localeCompare(b[1].label, "pt-BR")));
}

comparisonIndicatorSets = buildComparisonIndicatorSets();

// Eixo Acesso:               u.occupancy        → IND-26 → Base Cursos INEP       (real)   → BR: brazil.result.occupancy  = 84.1 (benchmark estimado)
// Eixo Permanência (retenção):100-u.dropout      → IND-5↑ → Base Cursos INEP       (real)   → BR: brazil.result.permanence = 88.1 (benchmark estimado)
// Eixo Qualidade:             u.doctors          → IND-6  → Base IES INEP          (real)   → BR: brazil.result.doctorate  = 82.6 (benchmark estimado)
// Eixo Pesquisa:              u.cnpq*1e6/students→ IND-60 → Base CNPq              (real)   → BR: brazil.result.cnpq       = 1700 R$/est. (benchmark estimado)
// Eixo Inserção:              u.employment       → IND-37 → Base RAIS Egressos     (real)   → BR: brazil.result.employment = 68.4 (benchmark estimado)
// Eixo Orçamento:             u.execution        → IND-81 → Relatório Despesa 8050 (real)   → BR: INDISPONÍVEL — sem campo em brazil.result; não comparável com IEES nacionais
var radarAxes = [
  { label: "Acesso",                 code: "IND-26", get: u => u.occupancy,                 br: () => brazil.result.occupancy  },
  { label: "Permanência (retenção)", code: "IND-5",  get: u => 100 - u.dropout,             br: () => brazil.result.permanence },
  { label: "Qualidade",              code: "IND-6",  get: u => u.doctors,                   br: () => brazil.result.doctorate  },
  { label: "Pesquisa",               code: "IND-60", get: u => resultIndicators.cnpq.get(u),br: () => brazil.result.cnpq       },
  { label: "Inserção",               code: "IND-37", get: u => u.employment,                br: () => brazil.result.employment },
  { label: "Orçamento",              code: "IND-81", get: u => u.execution,                 br: () => null, brUnavailable: true }
];

var baseRenderBlockContentForCluster = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "comparison") return comparisonBlock(title, c);
  if (tabId === "access") return accessBlock(title, c);
  return baseRenderBlockContentForCluster(tabId, title, c);
};

var baseRenderTabForCluster = renderTab;
renderTab = function(c) {
  const id = state.activeTab;
  const summary = renderTabSummary(id);
  if (id === "overview") {
    const selectorBar = indicatorSelectorBar("overview", tabIndicators["overview"]);
    el.tabContent.innerHTML = `<div class="tab-aba-wrapper" data-tab-id="overview">${summary}${selectorBar}${overview(c)}</div>`;
  } else if (id === "comparison") {
    el.tabContent.innerHTML = renderComparisonTab(c, summary);
  } else {
    el.tabContent.innerHTML = renderNumberedTab(id, c, summary);
  }
  bindModeSelector();
  bindOverviewControls();
  bindComparisonControls();
  bindComparisonYearButtons();
};

function explicitClusterActive(c) {
  return c.f.groupLevel && c.f.groupLevel !== "all";
}

function clusterRowsFor(c) {
  if (!explicitClusterActive(c)) return c.base.length ? c.base : c.all;
  const rows = c.base.filter(u => u.groups[c.f.groupBy] === c.f.groupLevel);
  return rows.length ? rows : c.base;
}

function comparisonDimensionKey(c) {
  return comparisonIndicatorSets[c.f.dimension] ? c.f.dimension : "all";
}

function comparisonDimensionOptions() {
  return [
    ["all", "Todas as dimensões"],
    ...Object.entries(comparisonIndicatorSets).map(([key, dim]) => [key, dim.label])
  ];
}

function comparisonAllDimIndicators() {
  return Object.values(comparisonIndicatorSets)
    .map(dim => dim.indicators[0])
    .filter(Boolean);
}

function comparisonDimensionForKey(key) {
  return key === "all"
    ? { label: "Visão geral (indicador-síntese por dimensão)", indicators: comparisonAllDimIndicators() }
    : comparisonIndicatorSets[key] || { label: "Dimensão indisponível", indicators: [] };
}

function radarAxesForDimension(key) {
  if (!key || key === "all" || !comparisonIndicatorSets[key]) return comparisonAllDimIndicators()
    .slice(0, 6)
    .map(ind => ({ label: comparisonShortAxisLabel(ind.name), code: ind.code, get: ind.get, br: () => 50 }));
  const dim = comparisonIndicatorSets[key];
  const inds = dim.indicators.slice(0, 6);
  const axes = inds.map(ind => ({ label: comparisonShortAxisLabel(ind.name), code: ind.code, get: ind.get, br: () => 50 }));
  while (axes.length < 3) axes.push(radarAxes[axes.length % radarAxes.length]);
  return axes;
}

function comparisonShortAxisLabel(label) {
  return String(label || "")
    .replace(/\s*\([^)]*\)/g, "")
    .split(/\s+/)
    .slice(0, 2)
    .join(" ")
    .slice(0, 18);
}

function renderComparisonDimensionBar() {
  const dim = state.comparisonDimension || "all";
  return `<div class="comparison-dim-bar" style="margin-bottom:12px">
    <label class="metric-selector">
      <span class="metric-selector-label">Dimensão de análise</span>
      <select onchange="setComparisonDimension(this.value)">
        ${comparisonDimensionOptions().map(([k,l]) => `<option value="${k}"${k===dim?" selected":""}>${l}</option>`).join("")}
      </select>
    </label>
  </div>`;
}

function setComparisonDimension(key) {
  state.comparisonDimension = key;
  render();
}
window.setComparisonDimension = setComparisonDimension;

function comparisonBlock(title, c) {
  if (title.includes("Tabela")) return comparisonTable(c);
  if (title.includes("Ranking")) return comparisonRanking(c);
  return comparisonRadar(c);
}

function renderComparisonTab(c, summary) {
  const dimBar = renderComparisonDimensionBar();
  const blocks = tabBlocks["comparison"] || [];
  return `<div class="tab-aba-wrapper" data-tab-id="comparison">${summary}${dimBar}${blocks.map((title, i) => renderBlock(i + 1, title, comparisonBlock(title, c))).join("")}</div>`;
}

function comparisonTable(c) {
  const key = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(key);
  const isBR = isBrasilContext(c);
  const clusterRows = clusterRowsFor(c);
  const showOnly = !explicitClusterActive(c) || state.comparisonShowOnlyCluster;
  const rows = showOnly ? clusterRows : (c.base.length ? c.base : c.all);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const means = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(clusterRows, ind)]));
  const prRows = c.base.length ? c.base : c.all;
  const prMeans = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(prRows, ind)]));
  const ranking = dimensionRanking(clusterRows, dimension.indicators);
  const sortedRows = [...rows].sort((a, b) => (ranking.get(a.id) || 999) - (ranking.get(b.id) || 999));
  const clusterMeanLabel = isBR ? "Média nacional" : "Média do cluster";
  return `<div class="comparison-toolbar">
    <div><strong>Dimensão ${renderDimensionHelp()}</strong><span class="card-subtitle"> · ${dimension.label}</span></div>
    ${!isBR ? `<button class="text-button comparison-toggle" id="comparisonClusterToggle" type="button">${state.comparisonShowOnlyCluster ? "Mostrar todas" : "Mostrar apenas cluster"}</button>` : ""}
  </div>
  <div class="table-wrap comparison-table-wrap">
    <table class="data-table comparison-table">
      <thead><tr><th>Ranking</th><th>IEES</th>${dimension.indicators.map(ind => `<th><span class="indicator-code">${ind.code}</span>${indicatorName(ind.code)}</th>`).join("")}</tr></thead>
      <tbody>${sortedRows.map(u => `<tr class="${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected-row" : ""}"><td><strong>${ranking.get(u.id) || "-"}º</strong></td><td><strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span></td>${dimension.indicators.map(ind => indicatorCell(ind, u, means[ind.code])).join("")}</tr>`).join("")}</tbody>
      <tfoot>
        <tr><td colspan="2"><strong>${clusterMeanLabel}</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, means[ind.code])}</td>`).join("")}</tr>
        ${!isBR ? `<tr class="pr-average-row"><td colspan="2"><strong>Média geral PR</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, prMeans[ind.code])}</td>`).join("")}</tr>` : ""}
      </tfoot>
    </table>
  </div>`;
}

function comparisonValue(ind, u) {
  const value = ind.get(u);
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

function comparisonValues(rows, ind) {
  return rows.map(u => comparisonValue(ind, u)).filter(v => v != null);
}

function comparisonMean(rows, ind) {
  const values = comparisonValues(rows, ind);
  return values.length ? values.reduce((s, v) => s + v, 0) / values.length : null;
}

function comparisonFormat(ind, value) {
  return value == null || !Number.isFinite(Number(value)) ? "—" : ind.fmt(value);
}

function indicatorCell(ind, u, avg) {
  const value = comparisonValue(ind, u);
  if (value == null || avg == null) return `<td class="conditional-cell"><strong>—</strong><span>sem dado</span></td>`;
  const cls = conditionalClass(value, avg, ind.polarity);
  const delta = value - avg;
  const sign = delta > 0 ? "+" : "";
  return `<td class="conditional-cell ${cls}"><strong>${comparisonFormat(ind, value)}</strong><span>${sign}${delta.toFixed(1).replace(".", ",")} vs média</span></td>`;
}

function conditionalClass(value, avg, polarity) {
  if (polarity === "~") return Math.abs(value - avg) <= Math.abs(avg) * 0.1 ? "cell-good" : "cell-warn";
  if (polarity === "↓") {
    if (value <= avg) return "cell-good";
    if (value <= avg * 1.1) return "cell-warn";
    return "cell-bad";
  }
  if (value >= avg) return "cell-good";
  if (value >= avg * 0.9) return "cell-warn";
  return "cell-bad";
}

function dimensionRanking(rows, indicators) {
  const scores = rows.map(u => [u.id, dimensionScore(u, rows, indicators)]).sort((a, b) => b[1] - a[1]);
  return new Map(scores.map(([id], index) => [id, index + 1]));
}

function dimensionScore(u, rows, indicators) {
  const scores = indicators.map(ind => {
    const value = comparisonValue(ind, u);
    const values = comparisonValues(rows, ind);
    if (value == null || values.length < 2) return null;
    const min = Math.min(...values), max = Math.max(...values);
    const n = max === min ? 0.5 : (value - min) / (max - min);
    return ind.polarity === "↓" ? 1 - n : n;
  }).filter(v => v != null);
  return scores.length ? scores.reduce((s, v) => s + v, 0) / scores.length : 0;
}

function comparisonRanking(c) {
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const showAll = explicitClusterActive(c) && !state.comparisonShowOnlyCluster;
  const rows = showAll ? (c.base.length ? c.base : c.all) : clusterRows;
  const dimKey = comparisonDimensionKey(c);
  const dimSet = comparisonDimensionForKey(dimKey);
  const indicator = dimSet.indicators.length
    ? { label: dimSet.label, format: v => `${(v * 100).toFixed(0)} pts`, get: u => dimensionScore(u, clusterRows, dimSet.indicators) }
    : (resultIndicators[c.f.result] || resultIndicators.composite);
  const ranking = [...clusterRows].sort((a, b) => indicator.get(b) - indicator.get(a));
  const rankMap = new Map(ranking.map((u, index) => [u.id, index + 1]));
  const max = Math.max(...rows.map(u => Number(indicator.get(u)) || 0), 1);
  const ref = mean(clusterRows, u => Number(indicator.get(u)) || 0);
  const refPos = clamp(ref / max * 100, 0, 100);
  const ieesColors = { UEL: "#1f72b8", UEM: "#e05c00", UEPG: "#14804a", UNIOESTE: "#8b2fc9", UNICENTRO: "#c43f3a", UENP: "#af7a00", UNESPAR: "#0f6e56" };
  return `<article class="visual-card comparison-ranking-card">
    <h3>Ranking por Dimensão ${renderDimensionHelp()}</h3>
    <p class="card-subtitle">${indicator.label}. Linha laranja = média do cluster (${indicator.format(ref)}).</p>
    <div class="bars comparison-ranking-bars" style="--ref-pos:${refPos}%">
      ${[...rows].sort((a,b)=>indicator.get(b)-indicator.get(a)).map(u => {
        const value = indicator.get(u), inCluster = clusterIds.has(u.id), selected = isUniSelected(c.f, u.id);
        const rank = rankMap.get(u.id);
        return `<div class="bar-row ${inCluster ? "in-cluster" : "out-cluster"} ${selected ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${rank ? rank + "º " : ""}${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${ieesColors[u.sigla] || "var(--blue-700)"}"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${indicator.format(value)} · ${rank || "-"}º</span></div>`;
      }).join("")}
    </div>
  </article>`;
}

function radarRefUniverse(c) {
  return [...universities, ...universitiesBrasil].map(u => byYear(u, c.f.year));
}

function comparisonRadar(c) {
  const clusterRows = clusterRowsFor(c);
  const universe = explicitClusterActive(c) ? clusterRows : (c.base.length ? c.base : c.all);
  const selected = c.selected && universe.some(u => u.id === c.selected.id) ? c.selected : universe[0];
  if (!selected) return empty();
  const refKey = state.radarReference || "cluster";
  const dimKey = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(dimKey);
  const axes = radarAxesForDimension(dimKey);

  const allUnis = radarRefUniverse(c);
  const refIees = ["cluster","parana","brasil"].includes(refKey) ? null : allUnis.find(u => u.id === refKey);
  const isSameIees = refIees && refIees.id === selected.id;

  const isBRref = refKey === "brasil";
  const unavailableAxes = new Set(isBRref ? axes.map((ax, i) => ax.brUnavailable ? i : -1).filter(i => i >= 0) : []);

  const selectedValues = axes.map(axis => normalizeForRadar(axis.get(selected), universe.map(axis.get)));
  const referenceValues = isSameIees
    ? axes.map(() => 0)
    : axes.map((axis, i) => unavailableAxes.has(i)
        ? 0
        : normalizeForRadar(radarReferenceValue(axis, refKey, clusterRows, c, allUnis), universe.map(axis.get)));

  const unavailNote = unavailableAxes.size > 0
    ? `<p style="font-size:12px;color:var(--gray-500,#888);text-align:center;margin:4px 0 0">⚠ Orçamento: dado de execução orçamentária indisponível para comparação nacional.</p>`
    : "";

  const refLabel = refIees ? refIees.sigla
    : refKey === "brasil" ? "Média Brasil"
    : refKey === "parana" ? "Média do Paraná"
    : "Média do cluster";

  const prOpts = universities.map(u => byYear(u, c.f.year))
    .map(u => `<option value="${u.id}"${refKey === u.id ? " selected" : ""}>${u.sigla} – ${u.nome}</option>`).join("");
  const brOpts = universitiesBrasil.map(u => byYear(u, c.f.year))
    .map(u => `<option value="${u.id}"${refKey === u.id ? " selected" : ""}>${u.sigla} – ${u.nome}</option>`).join("");

  const warnHtml = isSameIees
    ? `<p style="text-align:center;color:var(--warn,#c07000);padding:8px 0;font-size:13px">⚠ Selecione uma IEES diferente da analisada (${selected.sigla})</p>`
    : "";

  return `<article class="visual-card radar-card">
    <div class="visual-card-header">
      <div><h3>Radar IEES × referência</h3><p class="card-subtitle">Dimensão: ${dimension.label} · IEES: ${selected.sigla}.</p></div>
      <label class="metric-selector">Comparar com
        <select id="radarReferenceSelect">
          <option value="cluster"${refKey === "cluster" ? " selected" : ""}>Média do cluster</option>
          <option value="parana"${refKey === "parana" ? " selected" : ""}>Média do Paraná</option>
          <option value="brasil"${refKey === "brasil" ? " selected" : ""}>Média Brasil</option>
          <optgroup label="Universidades do Paraná">${prOpts}</optgroup>
          <optgroup label="Outras estaduais - Brasil">${brOpts}</optgroup>
        </select>
      </label>
    </div>
    ${warnHtml}${radarSvg(selectedValues, referenceValues, axes, unavailableAxes)}${unavailNote}
    <div class="radar-analysis">
      <strong>Como interpretar este gráfico</strong>
      <p>Cada eixo representa um indicador da dimensão selecionada. Quanto maior a área do polígono, melhor o desempenho relativo da IEES. Os valores são normalizados entre 0 e 1 com base nas IEES do grupo de comparação ativo — ou seja, o valor 1 indica a melhor IEES do grupo naquele eixo, e 0 a pior. A linha de referência (pontilhada) representa a referência selecionada.</p>
    </div>
    <div class="radar-legend"><span class="radar-selected-dot"></span>${selected.sigla}<span class="radar-reference-dot"></span>${refLabel}</div>
  </article>`;
}

function radarReferenceValue(axis, refKey, clusterRows, c, allUnis) {
  if (refKey === "brasil") return axis.br();
  if (refKey === "parana") return mean(c.base.length ? c.base : c.all, axis.get);
  if (allUnis) {
    const refIees = allUnis.find(u => u.id === refKey);
    if (refIees) return axis.get(refIees);
  }
  return mean(clusterRows, axis.get);
}

function normalizeForRadar(value, values) {
  const numericValues = values.map(Number).filter(Number.isFinite);
  const n = Number(value);
  if (!Number.isFinite(n) || !numericValues.length) return 0;
  const min = Math.min(...numericValues), max = Math.max(...numericValues);
  if (max === min) return 0.5;
  return clamp((n - min) / (max - min), 0, 1);
}

function radarSvg(selectedValues, referenceValues, activeAxes, unavailableAxes) {
  const axDef = activeAxes || radarAxes;
  const unavail = unavailableAxes || new Set();
  const cx = 170, cy = 150, radius = 108, n = axDef.length;
  const axisPoints = axDef.map((axis, i) => radarPoint(cx, cy, radius, i, n));
  const selectedPoints = selectedValues.map((v, i) => radarPoint(cx, cy, radius * v, i, n)).map(p => `${p.x},${p.y}`).join(" ");
  const referencePoints = referenceValues.map((v, i) => radarPoint(cx, cy, radius * v, i, n)).map(p => `${p.x},${p.y}`).join(" ");
  const rings = [0.25, 0.5, 0.75, 1].map(r => `<polygon class="radar-ring" points="${axDef.map((_, i) => { const p = radarPoint(cx, cy, radius * r, i, n); return `${p.x},${p.y}`; }).join(" ")}" />`).join("");
  const axLines = axisPoints.map((p, i) => {
    const off = unavail.has(i);
    const lAttr = off ? ' stroke="#bbb" stroke-dasharray="4,3" opacity="0.45"' : '';
    const tAttr = off ? ' fill="#bbb" opacity="0.45"' : '';
    return `<line class="radar-axis" x1="${cx}" y1="${cy}" x2="${p.x}" y2="${p.y}"${lAttr} /><text class="radar-label" x="${p.labelX}" y="${p.labelY}"${tAttr}>${axDef[i].label}</text>`;
  }).join("");
  return `<svg class="radar-svg" viewBox="0 0 340 300" role="img" aria-label="Radar comparativo IEES e referência">${rings}${axLines}<polygon class="radar-reference" points="${referencePoints}" /><polygon class="radar-selected" points="${selectedPoints}" /></svg>`;
}

function radarPoint(cx, cy, r, index, total) {
  const angle = -Math.PI / 2 + (Math.PI * 2 * index / total);
  const x = cx + Math.cos(angle) * r;
  const y = cy + Math.sin(angle) * r;
  return { x: round(x, 1), y: round(y, 1), labelX: round(cx + Math.cos(angle) * (r + 24), 1), labelY: round(cy + Math.sin(angle) * (r + 24), 1) };
}

function accessBlock(title, c) {
  if (title.includes("Escala")) return accessScale(c);
  if (title.includes("Ocupação")) return accessOccupancy(c);
  return accessTerritory(c);
}
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

function accessScale(c) {
  const clusterRows = clusterRowsFor(c);
  const selected = c.selected && clusterRows.some(u => u.id === c.selected.id) ? c.selected : null;
  const data = selected ? [selected] : clusterRows;
  const a = overviewAgg(data);
  const cluster = overviewAgg(clusterRows);
  const totalClusterVacancies = Math.max(sum(clusterRows, u => u.vacancies), 1);
  const participation = selected ? selected.vacancies / totalClusterVacancies * 100 : sum(clusterRows, u => u.vacancies) / Math.max(sum(c.all, u => u.vacancies), 1) * 100;
  const avgVacanciesCourse = a.vacancies / Math.max(a.courses, 1);
  const clusterAvgVacanciesCourse = cluster.vacancies / Math.max(cluster.courses, 1);
  return `<div class="access-context-grid">
    ${accessCard("IND-11", "Total de vagas", formatNumber(a.vacancies), `Média do cluster: ${formatNumber(mean(clusterRows, u => u.vacancies))}`)}
    ${accessCard("IND-10", "Cursos ativos", formatNumber(a.courses), `Média do cluster: ${formatNumber(mean(clusterRows, u => u.courses))}`)}
    ${accessCard("IND-17", "Municípios com oferta", formatNumber(new Set(data.map(u => u.municipality)).size), `Cluster: ${formatNumber(new Set(clusterRows.map(u => u.municipality)).size)} municípios`)}
    ${accessCard("IND-16", "Participação nas vagas", formatPercent(participation), selected ? "sobre vagas do cluster" : "sobre Sistema PR completo")}
    ${accessCard("IND-15", "Vagas por curso", formatNumber(avgVacanciesCourse), `Média do cluster: ${formatNumber(clusterAvgVacanciesCourse)}`)}
  </div>
  <div class="chart-grid mt-14">
    <article class="visual-card"><h3>IND-11 · Total de vagas por IEES</h3><p class="card-subtitle">Barras do cluster destacadas; demais IEES em cinza.</p>${accessClusterBars(c, u => u.vacancies, formatNumber)}</article>
    <article class="visual-card"><h3>IND-10 · Total de cursos por IEES</h3><p class="card-subtitle">Linha laranja indica média do cluster.</p>${accessClusterBars(c, u => u.courses, formatNumber)}</article>
  </div>`;
}

function accessCard(code, title, value, subtitle) {
  return `<article class="score-card access-card"><span class="indicator-code">${code}</span><h3>${title}</h3><div class="score-value">${value}</div><p class="card-subtitle">${subtitle}</p></article>`;
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

function accessOccupancy(c) {
  const clusterRows = clusterRowsFor(c);
  return `<article class="visual-card"><h3>IND-26 · Taxa de ocupação por IEES</h3><p class="card-subtitle">Semáforo: verde ≥ 70%, amarelo 55–69%, vermelho < 55%.</p>${occupancyBars(c)}</article>
  <div class="chart-grid mt-14">
    <article class="visual-card"><h3>Evolução de IND-26 · 2020–2024</h3><p class="card-subtitle">Linhas filtradas pelo cluster; linha tracejada = média do cluster por ano.</p>${occupancyTimeline(c)}</article>
    <article class="visual-card"><h3>Semáforo por IEES</h3><p class="card-subtitle">Apenas IEES do cluster ativo.</p><div class="signal-grid">${clusterRows.map(u => signalCard(u)).join("")}</div></article>
  </div>`;
}

function occupancyBars(c) {
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = explicitClusterActive(c) ? (c.base.length ? c.base : c.all) : clusterRows;
  const ref = mean(clusterRows, u => u.occupancy);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatPercent(ref)}</strong></span></div><div class="bars overview-cluster-bars occupancy-bars" style="--ref-pos:${clamp(ref,0,100)}%">${[...rows].sort((a,b)=>b.occupancy-a.occupancy).map(u => { const diff = u.occupancy - ref; const rank = [...clusterRows].sort((a,b)=>b.occupancy-a.occupancy).findIndex(x=>x.id===u.id)+1; return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${occupancyTone(u.occupancy)}" title="${formatPercent(u.occupancy)} · ${rank > 0 ? `${rank}º no cluster` : 'fora do cluster'} · ${diff >= 0 ? '+' : ''}${diff.toFixed(1).replace('.', ',')} p.p."></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${formatPercent(u.occupancy)} · ${rank > 0 ? `${rank}º` : '-'}</span></div>`; }).join("")}</div>`;
}

function occupancyTone(v) {
  if (v >= 70) return "occ-green";
  if (v >= 55) return "occ-yellow";
  return "occ-red";
}

function occupancyTimeline(c) {
  const yr = state.comparisonYear || Number(c.f.year) || 2024;
  const rows = clusterRowsFor(c);
  const years = [2020, 2021, 2022, 2023, 2024];
  const selIdx = years.indexOf(yr);
  const width = 420, height = 220, left = 34, top = 18, plotW = 350, plotH = 155;
  const allUniversities = scopeUniverse(c.f.scope);
  const series = rows.map(u => ({ sigla: u.sigla, points: years.map(y => byYear(allUniversities.find(x => x.id === u.id), String(y)).occupancy) }));
  const avg = years.map((y, i) => mean(series, s => s.points[i]));
  const allValues = series.flatMap(s => s.points).concat(avg);
  const minV = Math.max(40, Math.floor(Math.min(...allValues) / 5) * 5 - 5), maxV = Math.min(100, Math.ceil(Math.max(...allValues) / 5) * 5 + 5);
  const poly = values => values.map((v, i) => `${left + i * (plotW / (years.length - 1))},${top + (maxV - v) / Math.max(maxV - minV, 1) * plotH}`).join(" ");
  const selX = selIdx >= 0 ? left + selIdx * (plotW / (years.length - 1)) : -1;
  const btnHtml = years.map(y => `<button class="year-toggle-btn${y === yr ? " active" : ""}" type="button" data-year="${y}">${y}</button>`).join("");
  const selLine = selIdx >= 0 ? `<line class="timeline-select-line" x1="${selX}" y1="${top}" x2="${selX}" y2="${top + plotH}" />` : "";
  const selDots = selIdx >= 0 ? series.map((s, i) => {
    const cy = top + (maxV - s.points[selIdx]) / Math.max(maxV - minV, 1) * plotH;
    return `<circle class="timeline-select-dot line-${i % 6}" cx="${selX}" cy="${cy}" r="4"><title>${s.sigla}: ${formatPercent(s.points[selIdx])}</title></circle>`;
  }).join("") : "";
  return `<div class="year-toggle-group">${btnHtml}</div><svg class="timeline-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Evolução da taxa de ocupação 2020 a 2024"><line class="timeline-axis" x1="${left}" y1="${top+plotH}" x2="${left+plotW}" y2="${top+plotH}" />${years.map((y, i) => `<text class="timeline-label${i === selIdx ? " timeline-label-active" : ""}" x="${left + i * (plotW / (years.length - 1))}" y="${height - 20}">${y}</text>`).join("")}${selLine}${series.map((s, i) => `<polyline class="timeline-line line-${i % 6}" points="${poly(s.points)}"><title>${s.sigla}: ${s.points.map(formatPercent).join(' · ')}</title></polyline>`).join("")}<polyline class="timeline-average" points="${poly(avg)}" />${selDots}<text class="timeline-note" x="${left}" y="${top + plotH + 28}">Média do cluster tracejada</text></svg>`;
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

function accessTerritory(c) {
  const type = state.distributionCourseType || "all";
  const allRows = clusterRowsFor(c);
  const rows = type === "all" ? allRows : allRows.filter(u => u.type === type);
  const types = [["all", "Todos"], ["Bacharelado", "Bacharelado"], ["Licenciatura", "Licenciatura"], ["Tecnológico", "Tecnológico"]];
  const btns = types.map(([t, label]) => `<button class="mode-btn${t === type ? " active" : ""}" type="button" onclick="setDistributionCourseType('${t}')">${label}</button>`).join("");
  const table = rows.length ? metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`], ["Região", u => u.region], ["Município sede", u => u.municipality], ["Oferta territorial", u => `${u.territory} pts`], ["Cursos", u => formatNumber(u.courses)], ["Vagas", u => formatNumber(u.vacancies)]], "Distribuição territorial da oferta no cluster ativo") : empty();
  return `<div class="mode-selector" style="margin-bottom:10px">${btns}</div>${table}`;
}

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

function setSynthTableGroup(group) {
  if (state.activeTab === "overview") {
    setLocalFilter("overviewClusterBars", group);
    return;
  }
  state.synthTableGroup = state.synthTableGroup === group ? "all" : group;
  render();
}
window.setSynthTableGroup = setSynthTableGroup;

function setSynthSort(key) {
  state.synthSortKey = key;
  render();
}
window.setSynthSort = setSynthSort;

function bindComparisonControls() {
  const toggle = document.getElementById("comparisonClusterToggle");
  if (toggle) toggle.addEventListener("click", () => { state.comparisonShowOnlyCluster = !state.comparisonShowOnlyCluster; render(); });
  const radarSelect = document.getElementById("radarReferenceSelect");
  if (radarSelect) radarSelect.addEventListener("change", event => { state.radarReference = event.target.value; render(); });
}

function bindComparisonYearButtons() {
  document.querySelectorAll(".year-toggle-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      state.comparisonYear = Number(btn.dataset.year);
      render();
    });
  });
}

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

function accessOccupancy(c) {
  const clusterRows = clusterRowsFor(c);
  const semYear = state.semaphoreYear ?? c.f.year;
  const semRows = previousYearRows(clusterRows, semYear);
  const yearBtns = [2020, 2021, 2022, 2023, 2024].map(y =>
    `<button class="rank-year-btn${String(y) === String(semYear) ? " active" : ""}" type="button" onclick="setSemaphoreYear(${y})">${y}</button>`
  ).join("");
  return `<article class="visual-card"><h3>IND-26 · Taxa de ocupação por IEES</h3><p class="card-subtitle">Semáforo: verde ≥ 70%, amarelo 55–69%, vermelho < 55%.</p>${quartilChipStrip("occupancyBars", c.f.groupBy, c.base, c)}${occupancyBars(c)}</article>
  <div class="chart-grid mt-14">
    <article class="visual-card"><h3>Evolução de IND-26 · 2020–2024</h3><p class="card-subtitle">Linhas filtradas pelo cluster; linha tracejada = média do cluster por ano.</p>${occupancyTimeline(c)}</article>
    <article class="visual-card">
      <h3>Semáforo de ocupação de vagas por IEES</h3>
      <p class="card-subtitle">Verde: ocupação ≥ 70% · Amarelo: 55%–69% · Vermelho: &lt; 55% | Indicador IND-26 · Fonte: INEP</p>
      <div class="rank-year-selector" style="margin-bottom:10px">${yearBtns}</div>
      <div class="signal-year-note">Ano base: <strong>${semYear}</strong></div>
      <div class="signal-grid">${semRows.map(u => signalCard(u)).join("")}</div>
    </article>
  </div>
  <div class="table-wrap mt-14 access-occupancy-table">
    <h3>Matriz de ocupação e ociosidade</h3>
    <p class="card-subtitle">Indicadores calculados por IEES dentro do recorte/cluster ativo, com campos oficiais disponíveis na base consolidada.</p>
    <table class="data-table"><thead><tr><th>IEES</th>${accessOccupancyIndicators.map(ind => `<th><span class="indicator-code">${ind.code}</span>${indicatorName(ind.code)}</th>`).join("")}</tr></thead><tbody>${clusterRows.map(u => `<tr><td><strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span></td>${accessOccupancyIndicators.map(ind => `<td>${ind.fmt(ind.get(u))}</td>`).join("")}</tr>`).join("")}</tbody></table>
  </div>`;
}

/* Aba 3 bloco 3 e Aba 4 - permanência/formação orientadas a cluster */
var previousRenderBlockContentAccessRetention = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "access" && title.includes("Distribuição")) return accessTerritory(c);
  if (tabId === "retention") return retentionBlock(title, c);
  return previousRenderBlockContentAccessRetention(tabId, title, c);
};

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

function accessTerritory(c) {
  const rows = clusterRowsFor(c);
  if (!rows.length) return empty();
  return `<div class="chart-grid">
    <article class="visual-card"><h3>Composição da oferta por tipo de curso</h3><p class="card-subtitle">IND-67, IND-68 e IND-69 · Barras 100% por IEES no cluster ativo.</p>${stackedCourseBars(c)}</article>
    <article class="visual-card"><h3>Mapa de calor municipal de vagas</h3><p class="card-subtitle">Intensidade e tamanho da bolha representam IND-11 Total de vagas por município.</p>${vacancyHeatMap(c)}</article>
  </div>
  <article class="visual-card mt-14"><h3>IND-30 e IND-31 · Ocupação diurno/noturno</h3><p class="card-subtitle">Barras agrupadas por IEES; linhas de referência calculadas no cluster.</p>${dayNightBars(c)}</article>
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`], ["IND-32 Ocupação município", u => formatPercent(municipalityOccupancy(u))], ["IND-17 Part. vagas município", u => formatPercent(u.vacancies / Math.max(sum(rows, x => x.vacancies), 1) * 100)], ["IND-20 Part. cursos município", u => formatPercent(u.courses / Math.max(sum(rows, x => x.courses), 1) * 100)], ["IND-68 Especialização", u => formatPercent(offerSpecialization(u))], ["IND-69 Licenciaturas", u => formatPercent(courseMix(u).lic * 100)], ["IND-4 Escola pública", u => formatPercent(publicSchoolShare(u))]], "Indicadores territoriais e por tipo de curso")}`;
}

function stackedCourseBars(c) {
  const rows = clusterRowsFor(c);
  const avg = averageMix(rows);
  return `<div class="stack-reference"><strong>Composição média do cluster</strong><span>Bach. ${formatPercent(avg.bach * 100)} · Lic. ${formatPercent(avg.lic * 100)} · Tecn. ${formatPercent(avg.tech * 100)}</span></div><div class="stacked-bars">${rows.map(u => {
    const mix = courseMix(u);
    return `<div class="stack-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="stack-name">${u.sigla}</span><div class="stack-track" title="${u.sigla}: Bacharelado ${formatNumber(u.vacancies * mix.bach)} vagas; Licenciatura ${formatNumber(u.vacancies * mix.lic)} vagas; Tecnólogo ${formatNumber(u.vacancies * mix.tech)} vagas"><span class="seg seg-bach" style="width:${mix.bach * 100}%"></span><span class="seg seg-lic" style="width:${mix.lic * 100}%"></span><span class="seg seg-tech" style="width:${mix.tech * 100}%"></span></div><span class="stack-value">${formatPercent(offerSpecialization(u))}</span></div>`;
  }).join("")}</div><div class="stack-legend"><span><i class="seg-bach"></i>Bacharelado</span><span><i class="seg-lic"></i>Licenciatura</span><span><i class="seg-tech"></i>Tecnólogo</span></div>`;
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

function municipalityMapPlaceholder(c) {
  return `<div class="empty-state">Mapa municipal indisponível — coordenadas e ocupação municipal oficiais não encontradas na planilha/JSON consolidado.</div>`;
}

function dayNightBars(c) {
  const rows = clusterRowsFor(c);
  const dayRef = mean(rows, u => dayOccupancy(u));
  const nightRef = mean(rows, u => nightOccupancy(u));
  return `<div class="turn-reference"><span>Diurno médio: <strong>${formatPercent(dayRef)}</strong></span><span>Noturno médio: <strong>${formatPercent(nightRef)}</strong></span></div><div class="turn-bars">${rows.map(u => `<div class="turn-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="turn-name">${u.sigla}</span><div class="turn-pair"><span class="turn-track"><i class="turn-fill day" style="width:${clamp(dayOccupancy(u),4,100)}%"></i></span><span class="turn-track"><i class="turn-fill night" style="width:${clamp(nightOccupancy(u),4,100)}%"></i></span></div><span class="turn-values">${formatPercent(dayOccupancy(u))} / ${formatPercent(nightOccupancy(u))}</span></div>`).join("")}</div><div class="stack-legend"><span><i class="turn-day-dot"></i>Diurno</span><span><i class="turn-night-dot"></i>Noturno</span></div>`;
}

function dayOccupancy(u) {
  return u.occDay != null ? u.occDay : clamp(u.occupancy + 3.2, 0, 100);
}

function nightOccupancy(u) {
  return u.occNight != null ? u.occNight : clamp(u.occupancy - 4.6, 0, 100);
}

function retentionBlock(title, c) {
  if (title.includes("Funil")) return retentionFunnelBlock(c);
  if (title.includes("Taxas")) return retentionRatesBlock(c);
  if (title.includes("Evolução")) return retentionYearRankingBlock(c);
  if (title.includes("Dispersão")) return retentionScatterBlock(c);
  if (title.includes("Ranking")) return retentionCourseRankingBlock(c);
  return retentionAlertsBlock(c);
}

function retentionSubjectRows(c) {
  const clusterRows = clusterRowsFor(c);
  if (c.selected && clusterRows.some(u => u.id === c.selected.id)) return { label: c.selected.sigla, rows: [c.selected] };
  return { label: explicitClusterActive(c) ? c.f.groupLevel : "Sistema PR", rows: clusterRows };
}

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
  const r1 = a.entrants  / vacancies                  * 100;
  const r2 = clamp(a.students  / Math.max(a.entrants, 1) * 100, 0, 200);
  const r3 = a.graduates / Math.max(a.entrants, 1)    * 100;
  const fmt = v => v.toFixed(1).replace('.', ',');

  const w1 = 100;
  const w2 = clamp(r1, 40, 96);
  const w3 = clamp(w2 * 0.82, 30, 82);
  const w4 = clamp(w3 * 0.78, 20, 66);

  const steps = [
    { num:1, code:"IND-11", label:"Vagas ofertadas",   val:a.vacancies, pctTxt:"etapa base (100%)",                 bg:"#0f3b68", w:w1 },
    { num:2, code:"IND-13", label:"Ingressantes",      val:a.entrants,  pctTxt:`${fmt(r1)}% das vagas`,             bg:"#1f72b8", w:w2 },
    { num:3, code:"IND-2",  label:"Estudantes ativos", val:a.students,  pctTxt:`${fmt(clamp(r2,0,100))}% dos ingr.`,bg:"#f28c28", w:w3 },
    { num:4, code:"IND-14", label:"Concluintes",       val:a.graduates, pctTxt:`${fmt(r3)}% dos ingr.`,             bg:"#14804a", w:w4 }
  ];

  const connectors = [
    { rate: r1,              label: fmt(r1)              + "%" },
    { rate: clamp(r2, 0, 100), label: fmt(clamp(r2,0,100)) + "%" },
    { rate: r3,              label: fmt(r3)              + "%" }
  ];

  let html = `<div class="ff-funnel">`;
  steps.forEach((s, i) => {
    html += `<div class="ff-step" style="width:${s.w}%;background:${s.bg}"><div class="ff-step-inner"><div class="ff-num">${s.num}</div><div class="ff-code">${s.code}</div><div class="ff-label">${s.label}</div><div class="ff-val">${formatNumber(s.val)}</div><div class="ff-pct">${s.pctTxt}</div></div></div>`;
    if (i < steps.length - 1) {
      const c = connectors[i];
      const cls = c.rate >= 70 ? "ff-conn-ok" : "ff-conn-low";
      html += `<div class="ff-conn ${cls}"><span>${c.label}</span><span class="ff-arrow">&#9660;</span></div>`;
    }
  });
  html += `</div>`;

  return `<article class="visual-card formation-funnel-card"><h3>${title}</h3><p class="card-subtitle">${subtitle}</p>${html}</article>`;
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
  const sorted = [...rows].sort((a, b) => metric === "dropout" ? get(b) - get(a) : get(b) - get(a));
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${fmt(ref)}</strong></span></div><div class="bars overview-cluster-bars retention-bars" style="--ref-pos:${clamp(ref,0,100)}%">${sorted.map((u, index) => `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${metric === "dropout" ? dropoutTone(get(u)) : completionTone(get(u))}" style="width:${clamp(get(u),4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(get(u))} · ${index + 1}º</span></div>`).join("")}</div>`;
}

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

function dropoutTone(v) {
  if (v > 10) return "occ-red";
  if (v > 7) return "occ-yellow";
  return "occ-green";
}

function completionTone(v) {
  if (v > 75) return "occ-green";
  if (v >= 60) return "occ-yellow";
  return "occ-red";
}

function retentionScatterBlock(c) {
  const clusterRows = clusterRowsFor(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = explicitClusterActive(c) ? (c.base.length ? c.base : c.all) : clusterRows;
  const avgDrop = mean(clusterRows, u => u.dropout);
  const avgComp = mean(clusterRows, u => u.completion);
  const maxStudents = Math.max(...rows.map(u => u.students), 1);
  const dots = rows.map(u => {
    const size = Math.round(18 + u.students / maxStudents * 26);
    const x = clamp(u.dropout, 2, 94);
    const y = clamp(u.completion, 2, 94);
    const half = Math.round(size / 2);
    const tooltip = `${u.sigla}: desvinculação ${formatPercent(u.dropout)}; conclusão ${formatPercent(u.completion)}`;
    // label offset: top-right of the dot, with semi-transparent background to stay readable
    const lx = half + 4;
    const ly = half + 2;
    return `<div class="scatter-item" style="position:absolute;left:${x}%;bottom:${y}%;width:0;height:0">` +
      `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" ` +
      `style="position:absolute;left:-${half}px;bottom:-${half}px;width:${size}px;height:${size}px;display:flex;align-items:center;justify-content:center;font-size:${size >= 28 ? 10 : 0}px;overflow:hidden" ` +
      `type="button" title="${tooltip}" aria-label="${tooltip}">${size >= 28 ? u.sigla : ""}</button>` +
      `<span class="scatter-sigla-label" style="position:absolute;left:${lx}px;bottom:${ly}px;font-size:10px;font-weight:600;white-space:nowrap;background:rgba(255,255,255,0.88);padding:0 3px;border-radius:2px;pointer-events:none;line-height:1.4;border:1px solid rgba(0,0,0,0.08)">${u.sigla}</span>` +
      `</div>`;
  }).join("");
  return `<article class="visual-card"><h3>IND-5 × IND-27 · Dispersão formação</h3>
    <p class="card-subtitle">X = desvinculação (→ pior); Y = taxa de concluintes (↑ melhor); tamanho = matrículas. Quadrantes indisponíveis na planilha.</p>
    <div class="retention-scatter">
      ${dots}
    </div>
  </article>`;
}

function retentionCourseRankingBlock(c) {
  const rows = clusterRowsFor(c);
  const types = ["Bacharelado", "Licenciatura", "Tecnólogo"];
  const active = state.retentionCourseType || "Bacharelado";
  const chips = types.map(type =>
    `<button class="qchip${type === active ? " qchip-active" : ""}" type="button"
      onclick="setRetentionCourseType('${type}')">${type}</button>`
  ).join("");
  return `<div class="course-ranking-filter">
    <div class="qchip-strip" style="margin-bottom:12px">${chips}</div>
    <article class="visual-card">
      <h3>${active}</h3>
      <p class="card-subtitle">IND-27 conclusão e IND-5 desvinculação, ordenado no cluster.</p>
      ${courseTypeRanking(rows, active)}
    </article>
  </div>`;
}

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
  return `<div class="rank-list course-type-rank">${ranked.map((u, index) => { const m = courseTypeMetrics(u, type); return `<div class="rank-item"><span class="rank-number">${index + 1}</span><span><span class="rank-title">${u.sigla}</span><span class="rank-subtitle">Desvinculação ${formatPercent(m.dropout)}</span></span><span class="mini-bar"><i style="width:${clamp(m.completion / max * 100, 4, 100)}%"></i></span><span class="rank-value">${formatPercent(m.completion)}</span></div>`; }).join("")}</div>`;
}

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
    else if (highDrop) alerts.push(["alert-warn", "⚠", u.sigla, `IND-5 ${formatPercent(u.dropout)}`]);
    else if (lowCompletion) alerts.push(["alert-warn", "⚠", u.sigla, `IND-27 ${formatPercent(u.completion)}`]);
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

function stackedCourseBars(c) {
  const rows = clusterRowsFor(c);
  const avg = averageMix(rows);
  const activeType = state.distributionCourseType || "all";
  const oB = (activeType === "all" || activeType === "bach") ? 1 : 0.15;
  const oL = (activeType === "all" || activeType === "lic")  ? 1 : 0.15;
  const oT = (activeType === "all" || activeType === "tech") ? 1 : 0.15;
  const avgNote = activeType !== "all"
    ? `<div class="stack-avg-note">Média ${activeType === "bach" ? "Bacharelado" : activeType === "lic" ? "Licenciatura" : "Tecnólogo"} no cluster: <strong>${formatPercent(avg[activeType] * 100)}</strong></div>`
    : "";
  const barsHTML = rows.map(u => {
    const mix = courseMix(u);
    return `<div class="stack-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="stack-name">${u.sigla}</span><div class="stack-track" title="${u.sigla}: Bacharelado ${formatNumber(u.vacancies * mix.bach)} vagas; Licenciatura ${formatNumber(u.vacancies * mix.lic)} vagas; Tecnólogo ${formatNumber(u.vacancies * mix.tech)} vagas"><span class="seg seg-bach" style="width:${mix.bach * 100}%;opacity:${oB}"></span><span class="seg seg-lic" style="width:${mix.lic * 100}%;opacity:${oL}"></span><span class="seg seg-tech" style="width:${mix.tech * 100}%;opacity:${oT}"></span></div><span class="stack-value">${formatPercent(offerSpecialization(u))}</span></div>`;
  }).join("");
  return `<div class="stack-reference"><div><strong>Composição média do cluster</strong><span>Bach. ${formatPercent(avg.bach * 100)} · Lic. ${formatPercent(avg.lic * 100)} · Tecn. ${formatPercent(avg.tech * 100)}</span></div><div class="stack-reference-track" title="Composição média do cluster"><span class="seg seg-bach" style="width:${avg.bach * 100}%;opacity:${oB}"></span><span class="seg seg-lic" style="width:${avg.lic * 100}%;opacity:${oL}"></span><span class="seg seg-tech" style="width:${avg.tech * 100}%;opacity:${oT}"></span></div></div><div class="stacked-bars">${barsHTML}</div><div class="stack-legend"><button class="stack-type-btn${activeType === "bach" ? " active" : ""}" type="button" onclick="setDistributionCourseType('bach')"><i class="seg-bach"></i>Bacharelado</button><button class="stack-type-btn${activeType === "lic" ? " active" : ""}" type="button" onclick="setDistributionCourseType('lic')"><i class="seg-lic"></i>Licenciatura</button><button class="stack-type-btn${activeType === "tech" ? " active" : ""}" type="button" onclick="setDistributionCourseType('tech')"><i class="seg-tech"></i>Tecnólogo</button></div>${avgNote}`;
}

function dayNightBars(c) {
  const rows = clusterRowsFor(c);
  const dayRef = mean(rows, u => dayOccupancy(u));
  const nightRef = mean(rows, u => nightOccupancy(u));
  const filter = state.dayNightFilter || "all";
  const showDay   = filter !== "night";
  const showNight = filter !== "day";
  const refHTML = (showDay   ? `<span>Diurno médio: <strong>${formatPercent(dayRef)}</strong></span>`   : "") +
                  (showNight ? `<span>Noturno médio: <strong>${formatPercent(nightRef)}</strong></span>` : "");
  const rowsHTML = rows.map(u => {
    const tDay   = showDay   ? `<span class="turn-track"><i class="turn-fill day" style="width:${clamp(dayOccupancy(u),4,100)}%"></i><b class="turn-ref-line day-ref" aria-hidden="true"></b></span>` : "";
    const tNight = showNight ? `<span class="turn-track"><i class="turn-fill night" style="width:${clamp(nightOccupancy(u),4,100)}%"></i><b class="turn-ref-line night-ref" aria-hidden="true"></b></span>` : "";
    const valStr = (showDay && showNight) ? `${formatPercent(dayOccupancy(u))} / ${formatPercent(nightOccupancy(u))}` : showDay ? formatPercent(dayOccupancy(u)) : formatPercent(nightOccupancy(u));
    return `<div class="turn-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="turn-name">${u.sigla}</span><div class="turn-pair">${tDay}${tNight}</div><span class="turn-values">${valStr}</span></div>`;
  }).join("");
  return `<div class="turn-reference">${refHTML}</div><div class="turn-bars" style="--day-ref:${clamp(dayRef,0,100)}%;--night-ref:${clamp(nightRef,0,100)}%">${rowsHTML}</div><div class="stack-legend"><button class="stack-type-btn${filter === "day" ? " active" : ""}" type="button" onclick="setDayNightFilter('day')"><i class="turn-day-dot"></i>Diurno</button><button class="stack-type-btn${filter === "night" ? " active" : ""}" type="button" onclick="setDayNightFilter('night')"><i class="turn-night-dot"></i>Noturno</button></div>`;
}

/* Inspiração do painel de referência: mapa/heatmap de vagas por município (IND-11) */
var prMunicipalityPositions = {
  "Londrina": { x: 69, y: 25, anchor: "Norte" },
  "Maringá": { x: 54, y: 28, anchor: "Noroeste" },
  "Ponta Grossa": { x: 63, y: 63, anchor: "Campos Gerais" },
  "Cascavel": { x: 29, y: 56, anchor: "Oeste" },
  "Guarapuava": { x: 45, y: 66, anchor: "Centro-Sul" },
  "Jacarezinho": { x: 80, y: 20, anchor: "Norte Pioneiro" },
  "Paranavaí": { x: 43, y: 22, anchor: "Litoral e Noroeste" }
};

const PARANA_VIEWBOX = { width: 500, height: 350 };
const PARANA_BBOX = { west: -54.6, east: -48.0, north: -22.5, south: -26.7 };
const paranaOutlineGeo = [
  { lon: -54.58, lat: -25.62 },
  { lon: -54.40, lat: -24.88 },
  { lon: -54.22, lat: -24.23 },
  { lon: -53.72, lat: -23.62 },
  { lon: -53.02, lat: -22.98 },
  { lon: -52.18, lat: -22.56 },
  { lon: -51.15, lat: -22.62 },
  { lon: -50.18, lat: -22.72 },
  { lon: -49.25, lat: -22.82 },
  { lon: -48.54, lat: -23.08 },
  { lon: -48.22, lat: -23.92 },
  { lon: -48.06, lat: -25.12 },
  { lon: -48.50, lat: -25.58 },
  { lon: -49.18, lat: -25.90 },
  { lon: -50.10, lat: -26.25 },
  { lon: -51.15, lat: -26.48 },
  { lon: -52.20, lat: -26.58 },
  { lon: -53.18, lat: -26.42 },
  { lon: -53.95, lat: -26.08 },
  { lon: -54.45, lat: -25.82 }
];
const paranaIeesGeoCoords = {
  UEL: { municipality: "Londrina", lon: -51.17, lat: -23.30 },
  UEM: { municipality: "Maringá", lon: -51.93, lat: -23.42 },
  UEPG: { municipality: "Ponta Grossa", lon: -50.16, lat: -25.09 },
  UNIOESTE: { municipality: "Cascavel", lon: -53.46, lat: -24.95 },
  UNICENTRO: { municipality: "Guarapuava", lon: -51.46, lat: -25.39 },
  UENP: { municipality: "Jacarezinho", lon: -49.97, lat: -23.16 },
  UNESPAR: { municipality: "Paranavaí", lon: -52.46, lat: -23.08 }
};
const paranaIeesLabelOffsets = {
  UEL: { dx: 0, dy: -24 },
  UEM: { dx: -22, dy: 28 },
  UEPG: { dx: 0, dy: 34 },
  UNIOESTE: { dx: 0, dy: 34 },
  UNICENTRO: { dx: 0, dy: 34 },
  UENP: { dx: 22, dy: -24 },
  UNESPAR: { dx: -14, dy: -24 }
};
const PARANA_PATH = paranaSvgPath(paranaOutlineGeo);
const ieesMapCoords = Object.fromEntries(Object.entries(paranaIeesGeoCoords).map(([sigla, coords]) => [sigla, projectParanaCoord(coords.lon, coords.lat)]));

function projectParanaCoord(lon, lat) {
  const x = (lon - PARANA_BBOX.west) / (PARANA_BBOX.east - PARANA_BBOX.west) * PARANA_VIEWBOX.width;
  const y = (lat - PARANA_BBOX.north) / (PARANA_BBOX.south - PARANA_BBOX.north) * PARANA_VIEWBOX.height;
  return [clamp(x, 0, PARANA_VIEWBOX.width), clamp(y, 0, PARANA_VIEWBOX.height)];
}

function paranaSvgPath(points) {
  return points.map((point, index) => {
    const [x, y] = projectParanaCoord(point.lon, point.lat);
    return `${index ? "L" : "M"} ${round(x, 1)} ${round(y, 1)}`;
  }).join(" ") + " Z";
}

function accessScale(c) {
  const clusterRows = clusterRowsFor(c);
  const selected = c.selected && clusterRows.some(u => u.id === c.selected.id) ? c.selected : null;
  const data = selected ? [selected] : clusterRows;

  const typeFilter = state.accessCourseTypeFilter || "all";
  const mixKey = typeFilter === "Bacharelado" ? "bach" : typeFilter === "Licenciatura" ? "lic" : typeFilter === "Tecnólogo" ? "tech" : null;
  const getVac = mixKey ? u => u.vacancies * courseMix(u)[mixKey] : u => u.vacancies;
  const getCrs = mixKey ? u => u.courses  * courseMix(u)[mixKey] : u => u.courses;
  const typeLabel = mixKey ? ` · ${typeFilter}` : "";

  const vacDisp    = sum(data,        getVac);
  const crsDisp    = sum(data,        getCrs);
  const clVacTotal = Math.max(sum(clusterRows, getVac), 1);
  const clVacAvg   = mean(clusterRows, getVac);
  const clCrsAvg   = mean(clusterRows, getCrs);
  const participation = selected
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

function accessTerritoryTable(rows) {
  if (!rows.length) return "";
  const totalVac = Math.max(sum(rows, x => x.vacancies), 1);
  const totalCrs = Math.max(sum(rows, x => x.courses), 1);
  const cols = [
    { h: "IND-11 Vagas ↑",             pol: 1, fn: u => u.vacancies,                              fmt: formatNumber },
    { h: "IND-32 Ocupação município ↑", pol: 1, fn: u => municipalityOccupancy(u),                 fmt: formatPercent },
    { h: "IND-17 Part. vagas ↑",        pol: 1, fn: u => u.vacancies / totalVac * 100,             fmt: formatPercent },
    { h: "IND-20 Part. cursos ↑",       pol: 1, fn: u => u.courses / totalCrs * 100,              fmt: formatPercent },
    { h: "IND-68 Especialização ↑",     pol: 1, fn: u => offerSpecialization(u),                   fmt: formatPercent },
    { h: "IND-69 Licenciaturas ↑",      pol: 1, fn: u => courseMix(u).lic * 100,                  fmt: formatPercent },
    { h: "IND-4 Escola pública ↑",      pol: 1, fn: u => publicSchoolShare(u),                    fmt: formatPercent }
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


/* Aba 5 - Qualidade, Pesquisa e Pós-Graduação */
var previousRenderBlockContentQuality = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "quality") return qualityBlock(title, c);
  return previousRenderBlockContentQuality(tabId, title, c);
};

function qualityBlock(title, c) {
  if (title.includes("Qualificação")) return qualityFacultyBlock(c);
  if (title.includes("Pós-grad")) return qualityCapesBlock(c);
  if (title.includes("Pesquisa")) return qualityResearchBlock(c); // inline CNPq note handled inside
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

function estimatedFaculty(u) {
  return Math.max(120, Math.round(u.students / 15));
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
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups[c.f.groupBy]}</span>`], ["IND-6 Doutores", u => formatPercent(u.doctors)], ["IND-8 Docentes estrangeiros", u => formatPercent(foreignFacultyRate(u))], ["IND-7 Mobilidade acadêmica", u => formatPercent(mobilityRate(u))], ["IND-9 Portal CAPES", u => capesPortalAccess(u) ? "Sim" : "Não"]], "Indicadores de qualificação docente")}`;
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
  return `<div class="dual-reference-note"><span>Média cluster: <strong>${formatPercent(clusterMean)}</strong></span><span>Média PR: <strong>${formatPercent(prMean)}</strong></span><span>Referência nacional INEP: <strong>${formatPercent(brazil.result.doctorate)}</strong></span></div>
  <div class="bars dual-ref-bars quality-doctor-bars" style="--cluster-ref:${clamp(clusterMean,0,100)}%;--pr-ref:${clamp(prMean,0,100)}%">${sorted.map(u => { const rank = rankMap.get(u.id) || "-"; return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(u.doctors,4,100)}%" title="${formatPercent(u.doctors)} · ${rank}º no cluster · INEP BR ${formatPercent(brazil.result.doctorate)}"></span><span class="cluster-ref-line" aria-hidden="true"></span><span class="pr-ref-line" aria-hidden="true"></span></span><span class="bar-value" title="${formatPercent(u.doctors)} — ${rank}º no cluster">${formatPercent(u.doctors)}</span></div>`; }).join("")}</div>`;
}

function qualityCapesBlock(c) {
  const rows = qualityRows(c);
  return `<article class="visual-card"><h3>IND-62 × IND-65 · Pós-graduação e CAPES</h3><p class="card-subtitle">X = conceito médio CAPES; Y = bolsas produtividade; tamanho = IND-63 docentes permanentes. V5 é a variável natural de agrupamento.</p>${capesScatter(c)}</article>
  <div class="table-wrap mt-14 pg-program-table"><h3>Tabela por programa de pós-graduação</h3><div class="empty-state">Dados oficiais por programa não encontrados na planilha/JSON consolidado.</div></div>`;
}

function capesScatter(c) {
  const rows = qualityRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const avgX = mean(rows, u => u.capes);
  const avgY = mean(rows, pgProductivityShare);
  return `<div class="quality-scatter capes-scatter" style="--avg-x:${clamp((avgX - 3) / 2.2 * 100, 0, 100)}%;--avg-y:${clamp(avgY,0,100)}%"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span>${chartRows.map(u => { const x = clamp((u.capes - 3) / 2.2 * 100, 3, 97); const y = clamp(pgProductivityShare(u), 3, 97); const size = 18 + pgPermanentShare(u) / 100 * 32; return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${x}%;bottom:${y}%;width:${size}px;height:${size}px" type="button" title="${u.sigla}: CAPES ${u.capes.toFixed(1)}; bolsas ${formatPercent(pgProductivityShare(u))}; permanentes ${formatPercent(pgPermanentShare(u))}">${u.sigla}</button>`; }).join("")}<span class="axis-caption x">Conceito CAPES</span><span class="axis-caption y">% bolsas produtividade</span></div>`;
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
  const ref = mean(rows, u => u.cnpq);
  return `<div class="bars-reference-note"><span>Média do cluster: <strong>${formatCurrencyMillions(ref)}</strong></span></div><div class="bars overview-cluster-bars cnpq-bars" style="--ref-pos:${clamp(ref / max * 100,0,100)}%">${[...chartRows].sort((a,b)=>b.cnpq-a.cnpq).map(u => { const perDoc = formatCurrency(u.cnpq * 1000000 / estimatedFaculty(u)); return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(u.cnpq / max * 100,4,100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value" title="${formatCurrencyMillions(u.cnpq)} · ${perDoc}/doc.">${formatCurrencyMillions(u.cnpq)}</span></div>`; }).join("")}</div>`;
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

/* Aba 6 - Corpo Docente e Capacidade Operacional (SETI/LGU - Paraná) */
var previousRenderBlockContentFaculty = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "faculty") return facultyBlock(title, c);
  return previousRenderBlockContentFaculty(tabId, title, c);
};

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
  // IND-49 must come from Base Docentes - Parana.xlsx, column X (index 23).
  // Do not recreate it from the synthetic 24% cap used in early prototypes.
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
  return `<div class="stack-reference"><div><strong>Composição média do cluster</strong><span>Ocupadas ${formatPercent(avg.occupied / totalAvg * 100)} · Disponíveis ${formatPercent(avg.availableOpen / totalAvg * 100)} · Condicionadas ${formatPercent(avg.conditioned / totalAvg * 100)}</span></div><div class="stack-reference-track"><span class="faculty-seg occupied" style="width:${avg.occupied / totalAvg * 100}%"></span><span class="faculty-seg available" style="width:${avg.availableOpen / totalAvg * 100}%"></span><span class="faculty-seg conditioned" style="width:${avg.conditioned / totalAvg * 100}%"></span></div></div><div class="faculty-progress-list">${rows.map(u => { const m = facultyMetrics(u); const total = Math.max(m.totalCodes, 1); return `<div class="faculty-progress-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="faculty-name">${u.sigla}</span><div class="faculty-stack"><span class="faculty-seg occupied" style="width:${m.occupied / total * 100}%"></span><span class="faculty-seg available" style="width:${m.availableOpen / total * 100}%"></span><span class="faculty-seg conditioned" style="width:${m.conditioned / total * 100}%"></span></div><span class="faculty-value">IND-49 ${formatPercent(m.conditionedShare)}</span></div>`; }).join("")}</div>`;
}

function facultyTideBlock(c) {
  const rows = facultyRows(c);
  const ref = mean(rows, u => facultyMetrics(u).tideShare);
  return `<article class="visual-card"><h3>IND-51 · Participação do TIDE no quadro docente disponível</h3><p class="card-subtitle">Linha laranja = média do cluster; tooltip inclui IND-50 absoluto e IND-52 não atribuído.</p><div class="bars overview-cluster-bars tide-bars" style="--ref-pos:${clamp(ref,0,100)}%">${[...rows].sort((a,b)=>facultyMetrics(b).tideShare-facultyMetrics(a).tideShare).map(u => { const m = facultyMetrics(u); return `<div class="bar-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(m.tideShare,4,100)}%" title="IND-50 ${formatNumber(m.tideAssigned)} TIDE atribuídos; IND-51 ${formatPercent(m.tideShare)}; IND-52 ${formatPercent(m.tideNotAssignedShare)}"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${formatPercent(m.tideShare)} · ${formatNumber(m.tideAssigned)}</span></div>`; }).join("")}</div></article>`;
}

function facultyCresBlock(c) {
  return `<div class="chart-grid"><article class="visual-card"><h3>IND-56, IND-58 e IND-46 · Série mensal operacional</h3><p class="card-subtitle">2022-2026 · banda sombreada = min/max do cluster para utilização CRES.</p>${facultyTimeline(c)}</article><article class="visual-card"><h3>IND-59 × IND-46 · Esforço docente total</h3><p class="card-subtitle">X = participação CRES; Y = ocupação do quadro. Quadrantes indisponíveis na planilha.</p>${facultyCresScatter(c)}</article></div>`;
}

function facultyTimeline(c) {
  const rows = facultyRows(c);
  const months = Array.from({ length: 48 }, (_, i) => i);
  const width = 460, height = 250, left = 38, top = 18, plotW = 370, plotH = 170;
  const pointFor = (value, i) => `${left + i * (plotW / (months.length - 1))},${top + (100 - value) / 100 * plotH}`;
  const clusterMean = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100)));
  const clusterMin = months.map((_, i) => Math.min(...rows.map(u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100))));
  const clusterMax = months.map((_, i) => Math.max(...rows.map(u => clamp(facultyMetrics(u).cresUseRate + Math.sin((i + u.students / 1000) / 4) * 4, 0, 100))));
  const idleMean = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).cresIdleRate - Math.sin((i + u.students / 1000) / 4) * 3, 0, 100)));
  const occupationMean = months.map((_, i) => mean(rows, u => clamp(facultyMetrics(u).occupationRate + Math.cos((i + u.students / 900) / 5) * 2, 0, 100)));
  const band = clusterMax.map(pointFor).join(" ") + " " + [...clusterMin].reverse().map((v, idx) => pointFor(v, months.length - 1 - idx)).join(" ");
  return `<svg class="faculty-timeline-svg" viewBox="0 0 ${width} ${height}" role="img" aria-label="Linha temporal mensal CRES e ocupação docente"><polygon class="faculty-band" points="${band}" /><polyline class="timeline-line line-0" points="${clusterMean.map(pointFor).join(' ')}" /><polyline class="timeline-line line-1" points="${idleMean.map(pointFor).join(' ')}" /><polyline class="timeline-line line-2" points="${occupationMean.map(pointFor).join(' ')}" /><line class="timeline-axis" x1="${left}" y1="${top+plotH}" x2="${left+plotW}" y2="${top+plotH}" />${[2022,2023,2024,2025,2026].map((y,i)=>`<text class="timeline-label" x="${left+i*(plotW/4)}" y="${height-20}">${y}</text>`).join('')}<text class="timeline-note" x="${left}" y="${top+plotH+28}">IND-56 utilização CRES · IND-58 ociosidade · IND-46 ocupação</text></svg><div class="stack-legend"><span><i class="turn-day-dot"></i>IND-56</span><span><i class="turn-night-dot"></i>IND-58</span><span><i class="seg-tech"></i>IND-46</span></div>`;
}

function facultyCresScatter(c) {
  const rows = facultyRows(c);
  const allRows = c.base.length ? c.base : c.all;
  const clusterIds = new Set(rows.map(u => u.id));
  const chartRows = explicitClusterActive(c) ? allRows : rows;
  const avgX = mean(rows, u => facultyMetrics(u).cresParticipation);
  const avgY = mean(rows, u => facultyMetrics(u).occupationRate);
  return `<div class="retention-scatter faculty-scatter">${chartRows.map(u => { const m = facultyMetrics(u); return `<button class="scatter-point ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}" style="left:${clamp(m.cresParticipation,2,96)}%;bottom:${clamp(m.occupationRate,2,96)}%;" title="${u.sigla}: IND-59 ${formatPercent(m.cresParticipation)}; IND-46 ${formatPercent(m.occupationRate)}" type="button">${u.sigla}</button>`; }).join('')}</div>`;
}

function facultyAlertsBlock(c) {
  const rows = facultyRows(c);
  const cluster = explicitClusterActive(c) ? `${c.f.groupBy.toUpperCase()} ${c.f.groupLevel}` : `${c.f.groupBy.toUpperCase()} todos os grupos`;
  return `<div class="faculty-alert-grid">${rows.map(u => facultyAlertCard(u, rows)).join('')}</div><div class="architecture-message mt-14">Comparado às IEES do cluster V5/${cluster}. Dados exclusivos das 7 IEES do Paraná · Fonte SETI/LGU e Sistema de códigos de vagas.</div>`;
}

function facultyAlertCard(u, rows) {
  const m = facultyMetrics(u);
  const avgOcc = mean(rows, x => facultyMetrics(x).occupationRate);
  const avgCres = mean(rows, x => facultyMetrics(x).cresParticipation);
  const avgIdle = mean(rows, x => facultyMetrics(x).cresIdleRate);
  const avgCond = mean(rows, x => facultyMetrics(x).conditionedShare);
  let stateLabel = "Quadro estável", cls = "alert-ok", icon = "●", trigger = `IND-46 ${formatPercent(m.occupationRate)}`;
  if (m.conditionedShare > 20) { stateLabel = "Restrição de provimento"; cls = "alert-danger"; icon = "●"; trigger = `IND-49 ${formatPercent(m.conditionedShare)}`; }
  else if (m.cresIdleRate > 15) { stateLabel = "CRES não utilizada"; cls = "alert-warn"; icon = "●"; trigger = `IND-58 ${formatPercent(m.cresIdleRate)}`; }
  else if (m.occupationRate < 70 && m.cresParticipation > 20) { stateLabel = "Dependência temporária"; cls = "alert-warn"; icon = "●"; trigger = `IND-46 ${formatPercent(m.occupationRate)} / IND-59 ${formatPercent(m.cresParticipation)}`; }
  return `<article class="faculty-alert-card ${cls}"><span class="faculty-alert-icon">${icon}</span><div><strong>${u.sigla}</strong><span>${stateLabel}</span><em>${trigger}</em></div></article>`;
}

function deltaLabel(value, avg) {
  const d = value - avg;
  return `${d >= 0 ? 'acima' : 'abaixo'} da média do cluster em ${Math.abs(d).toFixed(1).replace('.', ',')} p.p.`;
}

function updateFooter(c) {
  const footerCluster = document.getElementById("footerClusterLabel");
  const footerScope = document.getElementById("footerScopeLabel");
  if (!footerCluster && !footerScope) return;
  const ctx = c || context();
  const groupName = ctx.group === "all" ? "Todos os grupos" : ctx.group;
  if (footerCluster) footerCluster.textContent = `${ctx.f.groupBy.toUpperCase()} – ${groupName}`;
  if (footerScope) footerScope.textContent = state.activeTab === "faculty" ? "Paraná (SETI/LGU)" : ctx.f.scope;
}

function updateContextBar(c) {
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  if (badge) {
    const facultyScope = state.activeTab === "faculty";
    const isBR = c.f.scope === "Brasil" && !facultyScope;
    badge.className = `scope-badge ${isBR ? "scope-br" : "scope-pr"}`;
    badge.textContent = isBR ? "🌐 Brasil" : "📍 Paraná";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    if (c.f.noGroup) {
      row.innerHTML = '<span class="cluster-badge">Sem agrupamento</span>';
    } else {
      const groupName = c.group === "all" ? "Todos os grupos" : c.group;
      row.innerHTML = `<span class="cluster-badge c-${c.f.groupBy}"><span class="c-dim">${c.f.groupBy.toUpperCase()}</span> ${groupName}</span>`;
    }
  }
  updateFooter(c);
}

function renderTop(c) {
  const t = tabInfo[state.activeTab];
  el.activeTabKicker.textContent = t[0];
  el.activeTabTitle.textContent = t[1];
  el.activeTabDescription.textContent = t[2];
  const scopeText = state.activeTab === "faculty" ? "Paraná · SETI/LGU" : c.f.scope;
  el.periodPill.textContent = `Ano base ${c.f.year} · Escopo ${scopeText}`;
  el.scopeLabel.textContent = c.selected ? `${c.selected.sigla} | ${c.group}` : c.group === "all" ? "Sistema estadual" : `Grupo ${c.group}`;
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateFooter(c);
  updateTabIndicator();
  updateQuartilChips();
}

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

/* Regra de apresentação: códigos IND-xx devem aparecer como nomes completos de indicadores. */
const indicatorFullNames = {
  "IND-1": "Proporção de ocupação de vagas no Ensino Superior Público Estadual",
  "IND-2": "Número de Matrículas de Graduação da Rede Pública",
  "IND-3": "Taxa de ocupação de vagas iniciais",
  "IND-4": "Proporção de ingressantes oriundos da escola pública",
  "IND-5": "Taxa anual de desvinculação discente",
  "IND-6": "Proporção de docentes com doutorado",
  "IND-7": "Proporção de alunos em mobilidade acadêmica no ano",
  "IND-8": "Proporção de docentes estrangeiros",
  "IND-9": "Acesso ao Portal CAPES pela biblioteca da universidade",
  "IND-10": "Total de cursos",
  "IND-11": "Total de vagas",
  "IND-12": "Total de estudantes",
  "IND-13": "Total de estudantes ingressantes",
  "IND-14": "Total de estudantes concluintes",
  "IND-15": "Média de vagas por curso",
  "IND-16": "Participação da IEES no total de vagas",
  "IND-17": "Participação do município no total de vagas",
  "IND-18": "Participação do curso no total de vagas",
  "IND-19": "Participação da IEES no total de cursos",
  "IND-20": "Participação do município no total de cursos",
  "IND-21": "Média de estudantes por curso",
  "IND-22": "Participação da IEES no total de estudantes",
  "IND-23": "Relação estudantes por vaga",
  "IND-24": "Taxa de ocupação das vagas de ingresso",
  "IND-25": "Vagas de ingresso não ocupadas",
  "IND-26": "Taxa de ocupação das vagas",
  "IND-27": "Taxa de concluintes",
  "IND-28": "Vagas não ocupadas",
  "IND-29": "Taxa de ocupação por grau",
  "IND-30": "Taxa de ocupação - Diurno",
  "IND-31": "Taxa de ocupação - Noturno",
  "IND-32": "Taxa de ocupação por município",
  "IND-33": "Egressos IEES",
  "IND-34": "Egressos inseridos no mercado de trabalho formal (Região Sul)",
  "IND-35": "Taxa de inserção de egressos (Região Sul)",
  "IND-36": "Egressos inseridos no mercado de trabalho formal (Paraná)",
  "IND-37": "Taxa de inserção de egressos no mercado de trabalho no Paraná",
  "IND-38": "Egressos aderentes ao filtro CBO2 inseridos no mercado de trabalho (Paraná)",
  "IND-39": "Percentual de egressos empregados no Paraná em ocupações aderentes ao CBO2",
  "IND-40": "Média salarial dos egressos inseridos no mercado de trabalho do Paraná aderentes ao CBO2",
  "IND-41": "Egressos inseridos no mercado formal na cidade-sede da IES",
  "IND-42": "Taxa de egressos empregados formalmente na cidade-sede da IES",
  "IND-43": "Total de códigos de vagas docentes",
  "IND-44": "Vagas docentes disponíveis para ocupação",
  "IND-45": "Vagas docentes efetivas ocupadas",
  "IND-46": "Taxa de ocupação do quadro docente",
  "IND-47": "Taxa de utilização das vagas docentes disponíveis",
  "IND-48": "Vagas docentes condicionadas à autorização governamental",
  "IND-49": "Percentual de vagas condicionadas à autorização governamental",
  "IND-50": "Quantidade de TIDE atribuído ao corpo docente",
  "IND-51": "Participação do TIDE no quadro docente disponível",
  "IND-52": "Percentual de TIDE não atribuído",
  "IND-53": "Carga horária média de docentes efetivos",
  "IND-54": "Carga horária CRES autorizada",
  "IND-55": "Carga horária CRES utilizada",
  "IND-56": "Taxa de utilização da CRES",
  "IND-57": "Saldo de carga horária CRES não utilizada",
  "IND-58": "Taxa de ociosidade da CRES",
  "IND-59": "Participação da CRES no esforço docente total",
  "IND-60": "Captação de recursos do CNPq",
  "IND-61": "Número de vínculos de fomento do CNPq",
  "IND-62": "Conceito dos programas de pós-graduação no ano de referência",
  "IND-63": "Proporção de docentes permanentes da pós-graduação",
  "IND-64": "Proporção de docentes estrangeiros da pós-graduação",
  "IND-65": "Proporção de docentes da pós-graduação com bolsa de produtividade",
  "IND-66": "Proporção de programas de pós-graduação com conceito CAPES 5, 6 e 7 no ano de referência",
  "IND-67": "Taxa de Ocupação de Vagas por Tipo de Curso",
  "IND-68": "Índice de Especialização da Oferta Acadêmica",
  "IND-69": "Proporção de Cursos de Licenciatura na Oferta",
  "IND-70": "Indicador sem cadastro na relação oficial de indicadores",
  "IND-71": "Egressos inseridos no mercado formal por município de vínculo",
  "IND-72": "Participação do município na inserção formal dos egressos",
  "IND-73": "Egressos inseridos no mercado formal por curso padronizado",
  "IND-74": "Participação do curso na inserção formal dos egressos",
  "IND-75": "Egressos inseridos no mercado formal por tipo de curso",
  "IND-76": "Diversidade ocupacional dos egressos por curso",
  "IND-77": "Distribuição dos egressos por grande grupo ocupacional CBO2",
  "IND-78": "Participação dos grandes grupos ocupacionais CBO2 na inserção dos egressos",
  "IND-79": "Municípios de destino profissional dos egressos por curso",
  "IND-80": "Índice de dispersão territorial dos egressos por curso",
  "IND-81": "Taxa de Execução Orçamentária (Empenho)",
  "IND-82": "Taxa de Liquidação",
  "IND-83": "Taxa de Pagamento sobre Liquidado",
  "IND-84": "Grau de Contingenciamento Orçamentário",
  "IND-85": "Variação da Dotação Orçamentária (Dotação Inicial vs. Atualizada)",
  "IND-86": "Participação de Pessoal e Encargos no Total da Despesa",
  "IND-87": "Participação de Outras Despesas Correntes no Total",
  "IND-88": "Proporção Despesas Correntes vs. Despesas de Capital",
  "IND-89": "Participação de Recursos Livres (Tesouro Estadual) no Orçamento Total",
  "IND-90": "Participação de Recursos Próprios no Orçamento Total",
  "IND-91": "Participação de Recursos de Transferências (Federal/Convênios)",
  "IND-92": "Participação de Investimentos em Obras e Instalações no Orçamento Total",
  "IND-93": "Participação de Investimentos em Equipamentos e Material Permanente no Orçamento Total",
  "IND-94": "Percentual de variação da dotação orçamentária em relação à LOA inicial",
  "IND-95": "Percentual de execução de liquidação do Orçamento Inicial",
  "IND-96": "Percentual de execução de liquidação do Orçamento Disponível",
  "IND-97": "Percentual de execução de liquidação do Orçamento Atualizado"
};

function indicatorName(code) {
  const normalized = `IND-${Number(String(code).replace(/\D/g, ""))}`;
  return indicatorFullNames[normalized] || "Indicador sem nome cadastrado";
}

function expandIndicatorCodesInText(text) {
  return String(text).replace(/\bIND-(\d{1,3})\b/g, (_, number) => indicatorName(number));
}

function expandIndicatorCodes(root) {
  if (!root) return;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentName = node.parentElement?.tagName?.toLowerCase();
      if (["script", "style", "noscript"].includes(parentName)) return NodeFilter.FILTER_REJECT;
      return /\bIND-\d{1,3}\b/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  textNodes.forEach(node => { node.nodeValue = expandIndicatorCodesInText(node.nodeValue); });
  root.querySelectorAll?.("[title], [aria-label], [data-tooltip]").forEach(node => {
    ["title", "aria-label", "data-tooltip"].forEach(attr => {
      if (node.hasAttribute(attr)) node.setAttribute(attr, expandIndicatorCodesInText(node.getAttribute(attr)));
    });
  });
}

var renderWithIndicatorCodes = render;
render = function renderWithFullIndicatorNames() {
  renderWithIndicatorCodes();
  expandIndicatorCodes(document.body);
};

document.addEventListener("DOMContentLoaded", () => {
  window.setTimeout(() => expandIndicatorCodes(document.body), 0);
});

/* Aba 7 - Inserção Profissional: blocos analíticos por cluster */
state.employmentMapOnlyCluster = state.employmentMapOnlyCluster ?? false;
window.setEmploymentMapMode = function setEmploymentMapMode(onlyCluster) {
  state.employmentMapOnlyCluster = Boolean(onlyCluster);
  render();
};

var previousRenderBlockContentEmployment = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "employment") return employmentBlock(title, c);
  return previousRenderBlockContentEmployment(tabId, title, c);
};

function employmentBlock(title, c) {
  if (title.includes("Inserção geral")) return employmentGeneralBlock(c);
  if (title.includes("Inserção PR")) return employmentRegionBlock(c);
  if (title.includes("CBO2")) return employmentCboSalaryBlock(c);
  if (title.includes("Destino")) return employmentDestinationBlock(c);
  if (title.includes("Por curso")) return employmentCourseBlock(c);
  return employmentOccupationBlock(c);
}

function employmentRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : c.all;
}

function employmentChartRows(c) {
  return c.base.length ? c.base : c.all;
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
  const destinationMunicipalities = u.egressosMunicipios!=null?u.egressosMunicipios:Math.max(5, Math.round(5 + u.territory / 4 + u.courses / 34));
  const territorialDispersion = clamp(16 + u.territory * 0.58, 16, 88);
  const courseDestinationMunicipalities = Math.max(3, Math.round(destinationMunicipalities / Math.max(u.courses / 95, 1.6)));
  const occupationalDiversity = Math.max(8, Math.round(8 + u.courses / 24 + u.doctors / 13));
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
  const targetRows = c.selected ? [c.selected] : rows;
  return { rows, targetRows, target: employmentAgg(targetRows), cluster: employmentAgg(rows), label: c.selected ? c.selected.sigla : (explicitClusterActive(c) ? c.group : "Sistema estadual") };
}

function employmentGeneralBlock(c) {
  const { rows: rawRows, target, cluster, label } = employmentTarget(c);
  const localEmp = getLocalFilter("employmentGeneral");
  const rows = localEmp !== "all" ? rawRows.filter(u => u.groups[c.f.groupBy] === localEmp) : rawRows;
  return `<div class="qchip-strip-wrapper">${quartilChipStrip("employmentGeneral", c.f.groupBy, c.base, c)}</div>
  <div class="score-grid employment-kpi-grid">
    ${employmentKpiCard(indicatorName(33), formatNumber(target.totalEgress), label, `Média do cluster: ${formatNumber(cluster.totalEgress / Math.max(rows.length, 1))}`)}
    ${employmentKpiCard(indicatorName(36), formatNumber(target.prInserted), label, `Média do cluster: ${formatNumber(cluster.prInserted / Math.max(rows.length, 1))}`)}
    ${employmentKpiCard(indicatorName(37), formatPercent(target.prRate), label, `Média do cluster: ${formatPercent(cluster.prRate)}`)}
    ${employmentKpiCard(indicatorName(35), formatPercent(target.southRate), label, `Média do cluster: ${formatPercent(cluster.southRate)}`)}
    ${employmentKpiCard(indicatorName(39), formatPercent(target.cbo2Rate), label, `Média do cluster: ${formatPercent(cluster.cbo2Rate)}`)}
    ${employmentKpiCard(indicatorName(40), formatCurrency(target.salary), label, `Média do cluster: ${formatCurrency(cluster.salary)}`)}
  </div>
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`], [indicatorName(33), u => formatNumber(employmentMetrics(u).totalEgress)], [indicatorName(34), u => formatNumber(employmentMetrics(u).southInserted)], [indicatorName(35), u => formatPercent(employmentMetrics(u).southRate)], [indicatorName(36), u => formatNumber(employmentMetrics(u).prInserted)], [indicatorName(37), u => formatPercent(employmentMetrics(u).prRate)], [indicatorName(39), u => formatPercent(employmentMetrics(u).cbo2Rate)], [indicatorName(40), u => formatCurrency(employmentMetrics(u).salary)], [indicatorName(42), u => formatPercent(employmentMetrics(u).localRate)], [indicatorName(80), u => formatPercent(employmentMetrics(u).territorialDispersion)]], "Inserção geral dos egressos")}`;
}

function employmentKpiCard(title, value, contextLabel, sub) {
  return `<article class="score-card employment-kpi-card"><h3>${title}</h3><p class="card-subtitle">${contextLabel}</p><div class="score-value">${value}</div><div class="employment-card-sub">${sub}</div></article>`;
}

function employmentRegionBlock(c) {
  return `<div class="chart-grid">
    <article class="visual-card"><h3>${indicatorName(37)} por IEES</h3><p class="card-subtitle">Verde acima de 55%; amarelo entre 45% e 55%; vermelho abaixo de 45%. Linha laranja = média do cluster.</p>${employmentRateBars(c, u => employmentMetrics(u).prRate, formatPercent)}</article>
    <article class="visual-card"><h3>${indicatorName(35)} por IEES</h3><p class="card-subtitle">Mesma regra de cor, comparada aos pares do cluster ativo.</p>${employmentRateBars(c, u => employmentMetrics(u).southRate, formatPercent)}</article>
  </div>
  <article class="visual-card mt-14"><h3>Retenção local de talentos</h3><p class="card-subtitle">${indicatorName(42)}. IEES com alta dispersão territorial tendem a distribuir egressos em mais municípios; use V3 para leitura estrutural.</p>${localTalentCards(c)}</article>`;
}

function employmentRateBars(c, getter, fmt) {
  const clusterRows = employmentRows(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = employmentChartRows(c);
  const ref = mean(clusterRows, getter);
  const sorted = [...rows].sort((a, b) => getter(b) - getter(a));
  return `<div class="bars employment-rate-bars" style="--ref-pos:${clamp(ref, 0, 100)}%">${sorted.map(u => {
    const value = getter(u);
    const tone = value > 55 ? "rate-high" : value >= 45 ? "rate-mid" : "rate-low";
    return `<div class="bar-row ${clusterIds.has(u.id) ? "in-cluster" : "out-cluster"} ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${u.sigla}</span><span class="bar-track"><span class="bar-fill ${tone}" style="width:${clamp(value, 4, 100)}%"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${fmt(value)}</span></div>`;
  }).join("")}</div><div class="bars-reference-note"><span>Média do cluster: <strong>${fmt(ref)}</strong></span></div>`;
}

function localTalentCards(c) {
  const rows = employmentRows(c);
  const avg = mean(rows, u => employmentMetrics(u).localRate);
  return `<div class="local-talent-grid">${rows.map(u => {
    const m = employmentMetrics(u);
    const tone = m.localRate >= avg ? "alert-ok" : m.localRate >= avg - 7 ? "alert-warn" : "alert-info";
    return `<article class="local-talent-card ${tone}"><strong>${u.sigla}</strong><span>${formatPercent(m.localRate)} na cidade-sede</span><em>${m.localRate >= avg ? "acima" : "abaixo"} da média do cluster (${formatPercent(avg)})</em></article>`;
  }).join("")}</div>`;
}

function employmentCboSalaryBlock(c) {
  return `<div class="chart-grid">
    <article class="visual-card"><h3>${indicatorName(37)} × ${indicatorName(40)}</h3><p class="card-subtitle">Tamanho da bolha = ${indicatorName(33)}. Quadrantes indisponíveis na planilha/JSON.</p>${employmentScatter(c, u => employmentMetrics(u).prRate, u => employmentMetrics(u).salary, u => employmentMetrics(u).totalEgress, "Inserção PR", "Salário")}</article>
    <article class="visual-card"><h3>${indicatorName(39)} × ${indicatorName(40)}</h3><p class="card-subtitle">Leitura de aderência formação-trabalho e valorização salarial. Quadrantes indisponíveis na planilha/JSON.</p>${employmentScatter(c, u => employmentMetrics(u).cbo2Rate, u => employmentMetrics(u).salary, u => employmentMetrics(u).totalEgress, "Aderência CBO2", "Salário")}</article>
  </div>
  <article class="visual-card mt-14"><h3>Aderência formação-trabalho</h3><p class="card-subtitle">${indicatorName(39)} por IEES versus média do cluster.</p>${employmentAdherenceCards(c)}</article>`;
}

var _EMP_COLORS = {
  uel:'#1e40af', uem:'#0891b2', uepg:'#065f46',
  unioeste:'#7c3aed', unicentro:'#b45309',
  uenp:'#be123c', unespar:'#0f766e'
};
function _empColor(sigla) { return _EMP_COLORS[sigla.toLowerCase()] || '#185fa5'; }

function employmentScatter(c, xGet, yGet, sizeGet, xLabel, yLabel) {
  const rows = employmentChartRows(c);
  const clusterRows = employmentRows(c);
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
  return `<div class="employment-scatter no-quadrants">${points}<span class="axis-caption x">${xLabel}</span><span class="axis-caption y">${yLabel}</span></div>${quadrantUnavailableBlock()}<div class="scatter-legend">${legend}</div>`;
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

function employmentAdherenceCards(c) {
  const rows = employmentRows(c);
  const avg = mean(rows, u => employmentMetrics(u).cbo2Rate);
  return `<div class="adherence-grid">${rows.map(u => {
    const m = employmentMetrics(u);
    const diff = m.cbo2Rate - avg;
    const cls = diff >= 4 ? "alert-ok" : diff >= -4 ? "alert-warn" : "alert-danger";
    return `<article class="adherence-card ${cls}"><strong>${u.sigla}</strong><span>${formatPercent(m.cbo2Rate)}</span><em>${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p. frente ao cluster</em></article>`;
  }).join("")}</div>`;
}

function employmentDestinationBlock(c) {
  const rows = employmentRows(c);
  const clusterAvg = mean(rows, u => employmentMetrics(u).territorialDispersion);
  const target = c.selected || rows[0];
  const targetValue = target ? employmentMetrics(target).territorialDispersion : clusterAvg;
  return `<div class="chart-grid">
    <article class="visual-card employment-map-card"><div class="map-card-head"><div><h3>Mapa de destino profissional</h3><p class="card-subtitle">Intensidade por ${indicatorName(71)} e participação municipal dos egressos.</p></div><div class="map-toggle" role="group" aria-label="Filtro do mapa de destino"><button class="mode-btn ${!state.employmentMapOnlyCluster ? "active" : ""}" type="button" onclick="setEmploymentMapMode(false)">Mostrar todos</button><button class="mode-btn ${state.employmentMapOnlyCluster ? "active" : ""}" type="button" onclick="setEmploymentMapMode(true)">Mostrar apenas cluster</button></div></div>${employmentDestinationMap(c)}</article>
    <article class="visual-card"><h3>${indicatorName(80)}</h3><p class="card-subtitle">Comparação recomendada dentro do cluster V3, pois IEES multicampi inserem egressos em mais municípios.</p><div class="dispersion-score"><strong>${target ? target.sigla : "Cluster"}</strong><span>${formatPercent(targetValue)}</span><em>Média do cluster: ${formatPercent(clusterAvg)}</em></div>${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.groups.v3}</span>`], [indicatorName(71), u => formatNumber(employmentMetrics(u).prInserted)], [indicatorName(72), u => formatPercent(employmentMetrics(u).prInserted / Math.max(sum(rows, x => employmentMetrics(x).prInserted), 1) * 100)], [indicatorName(79), u => formatNumber(employmentMetrics(u).courseDestinationMunicipalities)], [indicatorName(80), u => formatPercent(employmentMetrics(u).territorialDispersion)]], "Destino territorial dos egressos")}</article>
  </div>`;
}

function employmentDestinationMap(c) {
  const clusterRows = employmentRows(c);
  const clusterIds = new Set(clusterRows.map(u => u.id));
  const rows = state.employmentMapOnlyCluster ? clusterRows : employmentChartRows(c);
  const maxValue = Math.max(...rows.map(u => employmentMetrics(u).prInserted), 1);
  return `<div class="employment-map-wrap"><svg class="pr-heatmap-svg employment-map-svg" viewBox="0 0 520 360" role="img" aria-label="Mapa de destino profissional dos egressos no Paraná"><defs><filter id="employmentShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#174a7c" flood-opacity="0.16"/></filter></defs><path class="pr-state-shape" d="M122 53 L222 36 L312 63 L407 94 L468 155 L453 230 L384 302 L268 326 L164 294 L76 218 L58 132 Z"/>${rows.map(u => {
    const p = prMunicipalityPositions[u.municipality] || { x: 50, y: 50 };
    const px = Number.isFinite(p.x) ? p.x / 100 * 520 : 260;
    const py = Number.isFinite(p.y) ? p.y / 100 * 360 : 180;
    const m = employmentMetrics(u);
    const intensity = m.prInserted / maxValue;
    const radius = clamp(14 + intensity * 24, 14, 40);
    const inCluster = clusterIds.has(u.id);
    const fill = inCluster ? `rgba(15, 110, 86, ${0.38 + intensity * 0.48})` : "rgba(148, 163, 184, 0.38)";
    const stroke = inCluster ? "#0f6e56" : "#94a3b8";
    return `<g class="employment-map-node ${inCluster ? "in-cluster" : "out-cluster"}"><circle cx="${px.toFixed(1)}" cy="${py.toFixed(1)}" r="${radius}" fill="${fill}" stroke="${stroke}" stroke-width="2" filter="url(#employmentShadow)"><title>${u.municipality} · ${u.sigla}\n${indicatorName(71)}: ${formatNumber(m.prInserted)}\n${indicatorName(72)}: ${formatPercent(m.prInserted / Math.max(sum(rows, x => employmentMetrics(x).prInserted), 1) * 100)}</title></circle><text x="${px.toFixed(1)}" y="${(py + 4).toFixed(1)}" class="heat-node-label">${u.sigla}</text></g>`;
  }).join("")}</svg><div class="map-legend-card"><strong>Destino profissional</strong><span>Bolha maior = mais egressos inseridos no Paraná</span><div class="heat-gradient"><span></span></div></div></div>`;
}

function employmentCourseBlock(c) {
  return `<article class="visual-card"><h3>Inserção por curso e tipo de curso</h3><div class="empty-state">Dados oficiais por curso não encontrados na planilha/JSON consolidado.</div></article>`;
}

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

function employmentCourseTable(c, rows) {
  const clusterRows = employmentRows(c);
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
  return `<div class="table-wrap employment-course-table"><table class="data-table"><thead><tr><th>Curso</th><th>IEES</th><th>Tipo de curso</th><th>${indicatorName(73)}</th><th>${indicatorName(74)}</th><th>Taxa de inserção</th><th>Comparação com cluster</th></tr></thead><tbody>${bodyRows.map(r => {
    const diff = r.rate - r.avg;
    const cls = diff >= 4 ? "cell-good" : diff >= -4 ? "cell-mid" : "cell-risk";
    return `<tr class="${cls}" title="Média do cluster para ${r.type}: ${formatPercent(r.avg)}"><td><strong>${r.course}</strong></td><td>${r.u.sigla}</td><td>${r.type}</td><td>${formatNumber(r.inserted)}</td><td>${formatPercent(r.inserted / Math.max(sum(bodyRows.filter(x => x.u.id === r.u.id), x => x.inserted), 1) * 100)}</td><td>${formatPercent(r.rate)}</td><td>${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p.</td></tr>`;
  }).join("")}</tbody></table></div>`;
}

function employmentOccupationBlock(c) {
  return `<div class="chart-grid"><article class="visual-card"><h3>Perfil ocupacional CBO2</h3><p class="card-subtitle">${indicatorName(77)} e ${indicatorName(78)}: comparação entre IEES selecionada e média do cluster.</p>${cboDistributionBars(c)}</article><article class="visual-card"><h3>${indicatorName(76)}</h3><p class="card-subtitle">Diversidade ocupacional por curso, maior valor indica maior variedade de destinos profissionais.</p>${occupationalDiversityCards(c)}</article></div>`;
}

function cboDistribution(u) {
  const base = [18, 34, 15, 10, 9, 5, 9];
  const tech = u.type === "Bacharelado" ? 4 : -2;
  const publicSector = String(u.groups.v3 || "").includes("Dispersão") ? 4 : 0;
  const values = [base[0] + publicSector, base[1] + tech + (u.doctors - 80) * 0.04, base[2] + (100 - u.doctors) * 0.03, base[3], base[4] + (100 - u.employment) * 0.04, base[5], base[6] + u.territory * 0.015];
  const total = values.reduce((a, b) => a + Math.max(b, 1), 0);
  return values.map(v => Math.max(v, 1) / total * 100);
}

function cboDistributionBars(c) {
  const labels = ["Diretores e gerentes", "Profissionais das ciências e intelectuais", "Técnicos de nível médio", "Trabalhadores administrativos", "Serviços e comércio", "Agropecuária e produção florestal", "Produção industrial"];
  const rows = employmentRows(c);
  const selected = c.selected || rows[0];
  const selectedDist = selected ? cboDistribution(selected) : labels.map(() => 0);
  const clusterDist = labels.map((_, i) => mean(rows, u => cboDistribution(u)[i]));
  return `<div class="cbo-distribution">${labels.map((label, i) => {
    const diff = selectedDist[i] - clusterDist[i];
    return `<div class="cbo-row"><span class="cbo-label">${label}</span><div class="cbo-track"><span class="cbo-fill selected" style="width:${selectedDist[i]}%"></span><span class="cbo-fill cluster" style="width:${clusterDist[i]}%"></span></div><span class="cbo-value">${formatPercent(selectedDist[i])} · ${diff >= 0 ? "+" : ""}${diff.toFixed(1).replace(".", ",")} p.p.</span></div>`;
  }).join("")}<div class="stack-legend"><span><i class="turn-day-dot"></i>${selected ? selected.sigla : "IEES"}</span><span><i class="turn-night-dot"></i>Média do cluster</span></div></div>`;
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

/* Complemento da Aba 7: explicita todos os indicadores solicitados nos blocos 1, 3 e 5. */
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
  ${metricTable(rows, [["IEES", u => `<strong>${u.sigla}</strong><br><span>${u.municipality}</span>`], [indicatorName(33), u => formatNumber(employmentMetrics(u).totalEgress)], [indicatorName(34), u => formatNumber(employmentMetrics(u).southInserted)], [indicatorName(35), u => formatPercent(employmentMetrics(u).southRate)], [indicatorName(36), u => formatNumber(employmentMetrics(u).prInserted)], [indicatorName(37), u => formatPercent(employmentMetrics(u).prRate)], [indicatorName(38), u => formatNumber(employmentMetrics(u).cbo2Inserted)], [indicatorName(39), u => formatPercent(employmentMetrics(u).cbo2Rate)], [indicatorName(40), u => formatCurrency(employmentMetrics(u).salary)], [indicatorName(41), u => formatNumber(employmentMetrics(u).localInserted)], [indicatorName(42), u => formatPercent(employmentMetrics(u).localRate)], [indicatorName(80), u => formatPercent(employmentMetrics(u).territorialDispersion)]], "Inserção geral dos egressos")}`;
}

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

function employmentCourseTable(c, rows) {
  const clusterRows = employmentRows(c);
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
  }).join("")}</tbody></table></div>`;
}

/* Aba 8 - Orçamento, Desempenho e Eficiência Relativa (Relatório Despesa 8050) */
state.efficiencyMode = state.efficiencyMode || "movimentacao";
state.efficiencyResult = state.efficiencyResult || "completion";
state.efficiencyDefaultApplied = state.efficiencyDefaultApplied || false;

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
renderBlockContent = function(tabId, title, c) {
  if (tabId === "efficiency") return efficiencyBlock(title, c);
  if (tabId === "performance") return performanceBlock(title, c);
  return previousRenderBlockContentEfficiency(tabId, title, c);
};

var previousRenderNumberedTabEfficiency = renderNumberedTab;
renderNumberedTab = function(tabId, c, summary = "") {
  if (tabId !== "efficiency" && tabId !== "performance") return previousRenderNumberedTabEfficiency(tabId, c, summary);
  const blocks = tabBlocks[tabId] || [];
  const mode = tabId === "efficiency"
    ? `<div class="mode-selector" role="group" aria-label="Modo de análise orçamentária"><button class="mode-btn ${state.efficiencyMode === "movimentacao" ? "active" : ""}" data-mode="movimentacao" type="button" onclick="setEfficiencyMode('movimentacao')">Comparação por cluster</button><button class="mode-btn ${state.efficiencyMode === "eficiencia" ? "active" : ""}" data-mode="eficiencia" type="button" onclick="setEfficiencyMode('eficiencia')">Eficiência relativa</button></div>`
    : "";
  const banner2026 = (tabId === "efficiency" && c.f.year === '2026')
    ? '<div class="data-source-banner warning visible"><span class="dsb-icon" aria-hidden="true">⚠</span><div class="dsb-body"><strong>Dados parciais — 2026</strong><span>Dados de 2026 parciais — exercício em andamento (~3 meses executados). Valores de execução orçamentária não são comparáveis aos anos anteriores.</span></div></div>'
    : '';
  const perfNote = tabId === "performance"
    ? '<div class="metodologia-note"><span class="metodologia-icon">ℹ</span> Esta aba apresenta o desempenho relativo das IEES-PR com base em indicadores compostos, cruzamentos acadêmicos e a avaliação de resposta ao Piloto Orçamento para Resultados.</div>'
    : '';
  return `<div class="tab-aba-wrapper" data-tab-id="${tabId}">${summary}${banner2026}${perfNote}${mode}${blocks.map((title, index) => renderBlock(index + 1, title, renderBlockContent(tabId, title, c))).join("")}</div>`;
};

var previousRenderKpisEfficiency = renderKpis;
renderKpis = function(c) {
  if (state.activeTab !== "efficiency" && state.activeTab !== "performance") return previousRenderKpisEfficiency(c);
  el.kpiGrid.classList.remove("overview-kpi-grid");
  el.kpiGrid.classList.add("efficiency-kpi-grid");
  el.kpiGrid.style.display = "";
  const rows = efficiencyRows(c);
  const a = budgetAgg(rows);
  const profile = efficiencyProfileLabel(rows, c);
  const previousYear = Number(c.f.year) - 1;
  const previousRows = yearAdj[previousYear] ? previousYearRows(rows, previousYear) : [];
  const previous = previousRows.length ? budgetAgg(previousRows) : null;
  const cards = [
    ["Orçamento liquidado total", formatCurrencyMillions(a.liquidated), `${rows.length} IEES no recorte`, "+6,8%"],
    [indicatorName(81), formatPercent(a.executionRate), "média do cluster", budgetBadge(a.executionRate, 90, 80)],
    [indicatorName(85), formatPercent(a.variationRate), "média do cluster", "ref."],
    [indicatorName(84), formatPercent(a.contingencyRate), "quanto menor, melhor", a.contingencyRate <= 8 ? "adequado" : "atenção"],
    ["Perfil orçamentário", profile, "rótulo derivado de V6", "Despesa 8050"]
  ];
  el.kpiGrid.innerHTML = cards.map(([label, value, meta, trend]) => `<article class="kpi-card kpi-budget"><div class="kpi-head"><div class="kpi-label">${label}</div><div class="kpi-icon" aria-hidden="true">${kpiIcon(label)}</div></div><div class="kpi-value">${value}</div></article>`).join("");
};

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
  el.periodPill.textContent = `Ano base ${c.f.year} · Escopo ${scopeText}`;
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
  const points = allRows.map(u => {
    const cps = costPerStudent(u);
    const api = academicPerformanceIndex(u);
    const xPct = clamp(cps / maxCps * 100, 5, 92);
    const yPct = clamp(api / maxApi * 100, 5, 92);
    return `<button class="pilot-scatter-point" type="button"
      style="left:${xPct}%;bottom:${yPct}%"
      title="${u.sigla}: custo/aluno ${formatCurrency(cps)} · Índice desempenho ${api.toFixed(1).replace(".", ",")}">${u.sigla}</button>`;
  }).join("");
  return `<div class="pilot-scatter">
    ${points}
    <span class="scatter-axis-label x">Custo por aluno →</span>
    <span class="scatter-axis-label y">↑ Desempenho</span>
  </div>
  <p class="card-subtitle" style="margin-top:4px">Média de custo: ${formatCurrency(avgCps)} por aluno · Média de desempenho: ${avgApi.toFixed(1).replace(".", ",")} pts · Quadrantes indisponíveis na planilha</p>`;
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
  const rows_html = data.map((item, i) => {
    const cls = classifyEfficiency(item.idx);
    const barW = clamp(item.idx / Math.max(maxIdx, 0.01) * 100, 4, 100);
    return `<tr class="${cls.cls}"><td>${i + 1}º</td><td><strong>${item.u.sigla}</strong></td>
      <td>${item.cps != null ? formatCurrency(item.cps) : "—"}</td>
      <td>${item.api != null ? item.api.toFixed(1).replace(".", ",") : "—"}</td>
      <td><div class="eff-bar-wrap ${cls.cls}"><div class="eff-bar-track"><div class="eff-bar-fill" style="width:${barW}%"></div></div><span>${item.idx.toFixed(2).replace(".", ",")}</span></div></td>
      <td><span class="eff-badge">${cls.label}</span></td></tr>`;
  }).join("");
  return `<div class="table-wrap"><table class="pilot-ranking-table">
    <thead><tr><th>Pos.</th><th>IEES</th><th title="Orçamento liquidado ÷ matrículas ativas (QT_MAT · INEP). Não considera vagas ofertadas.">Custo/aluno ⓘ</th><th>Índice desempenho</th><th>Índice eficiência</th><th>Classificação</th></tr></thead>
    <tbody>${rows_html}</tbody>
  </table></div>`;
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

function efficiencyBlock(title, c) {
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
  return budgetOpportunityBlock(c);
}

function performanceBlock(title, c) {
  return efficiencyBlock(title, c);
}

function efficiencyRows(c) {
  const rows = clusterRowsFor(c);
  return rows.length ? rows : c.all;
}

function efficiencyChartRows(c) {
  return c.base.length ? c.base : c.all;
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
  const variationRate = clamp(u.supplementation, -8, 28);
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
    ${budgetScoreCard(indicatorName(81), formatPercent(a.executionRate), "média ponderada")}
    ${budgetScoreCard(indicatorName(82), formatPercent(a.liquidationRate), "liquidado / empenhado")}
    ${budgetScoreCard(indicatorName(83), formatPercent(a.paymentRate), "pago / liquidado")}
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
  return `<div class="budget-stack-reference"><strong>Composição média do cluster</strong><div class="budget-stack-track">${avgValues.map((v, i) => `<span class="budget-seg seg-${i} has-tip" style="width:${clamp(v, 0, 100)}%" data-tip="${labels[i]}: ${formatPercent(v)}"></span>`).join("")}</div></div><div class="budget-stacked-list">${rows.map(u => {
    const m = budgetMetrics(u);
    const values = type === "expense" ? [m.personnel, m.odc, m.investment] : [m.freeResources, m.ownResources, m.transfers];
    return `<div class="budget-stack-row ${isUniSelected(c.f, u.id) ? "selected" : ""}"><span class="stack-name">${u.sigla}</span><div class="budget-stack-track">${values.map((v, i) => `<span class="budget-seg seg-${i} has-tip" style="width:${clamp(v, 0, 100)}%" data-tip="${labels[i]}: ${formatPercent(v)} · ${formatCurrencyMillions(m.liquidated * v / 100)}"></span>`).join("")}</div><span class="stack-value">${formatPercent(values[0])}</span></div>`;
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

function budgetAcademicBlock(c) {
  const options = ["completion", "occupancy", "employment", "doctorate"];
  return `<div class="chart-grid budget-relative-grid">${options.map(key => `<article class="visual-card"><h3>Custo relativo × ${budgetResultOptions[key].label}</h3><p class="card-subtitle">Eixos calculados em relação à média do cluster ativo.</p>${budgetRelativeScatter(c, budgetResultOptions[key])}</article>`).join("")}</div>`;
}

function budgetFacultyBlock(c) {
  return `<div class="chart-grid budget-relative-grid"><article class="visual-card"><h3>Custo relativo × ${indicatorName(59)}</h3><p class="card-subtitle">Participação CRES no esforço docente total, relativa ao cluster.</p>${budgetRelativeScatter(c, budgetResultOptions.cresShare)}</article><article class="visual-card"><h3>Custo relativo × ${indicatorName(60)} normalizada por docente</h3><p class="card-subtitle">Captação CNPq por docente estimado, relativa ao cluster.</p>${budgetRelativeScatter(c, budgetResultOptions.cnpqTeacher)}</article></div>`;
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
  if (row.costDelta <= 0 && row.resultDelta >= 0) return { code: "q1", label: "Entrega mais com menos", tone: "high" };
  if (row.costDelta > 0 && row.resultDelta >= 0) return { code: "q2", label: "Alto investimento, alto resultado", tone: "info" };
  if (row.costDelta <= 0 && row.resultDelta < 0) return { code: "q3", label: "Baixo recurso, baixo resultado", tone: "warn" };
  return { code: "q4", label: "Alto recurso, resultado abaixo da média", tone: "danger" };
}

function budgetRelativeScatter(c, resultOption) {
  if (!hasOfficialQuadrants()) return quadrantUnavailableBlock();
  const rows = budgetRelativeRows(c, resultOption);
  const maxBudget = Math.max(...rows.map(r => r.m.liquidated), 1);
  return `<div class="budget-relative-scatter"><span class="scatter-ref-v"></span><span class="scatter-ref-h"></span><div class="budget-q q1">Entrega mais com menos</div><div class="budget-q q2">Alto investimento, alto resultado</div><div class="budget-q q3">Baixo recurso, baixo resultado</div><div class="budget-q q4">Alto recurso, resultado abaixo</div>${rows.map(row => {
    const quad = budgetQuadrant(row);
    const size = clamp(28 + row.m.liquidated / maxBudget * 26, 28, 56);
    return `<button class="budget-point ${quad.code} ${budgetProfileClass(row.profile)} ${isUniSelected(c.f, row.u.id) ? "selected" : ""}" style="left:${clamp(50 + row.costDelta, 6, 94)}%;bottom:${clamp(50 + row.resultDelta, 6, 94)}%;width:${size}px;height:${size}px" type="button" title="${row.u.sigla}: custo relativo ${row.costDelta.toFixed(1).replace(".", ",")}% · resultado relativo ${row.resultDelta.toFixed(1).replace(".", ",")}% · ${quad.label}">${row.u.sigla}</button>`;
  }).join("")}<span class="axis-caption x">Custo relativo ao cluster</span><span class="axis-caption y">Resultado relativo ao cluster</span></div>`;
}

function budgetOpportunityBlock(c) {
  const resultOption = budgetResultOptions[state.efficiencyResult] || budgetResultOptions.completion;
  const matrix = `<article class="visual-card budget-matrix-card"><h3>Matriz de oportunidades e alertas</h3><p class="card-subtitle">Eixo X: recurso relativo ao cluster. Eixo Y: resultado relativo ao cluster. Bolha: orçamento liquidado. Cor: perfil V6.</p>${budgetResultSelector("Indicador de resultado da matriz")}${budgetRelativeScatter(c, resultOption)}</article>`;
  const table = budgetDiagnosticTable(c, resultOption);
  const alerts = budgetContextAlerts(c, resultOption);
  return state.efficiencyMode === "eficiencia" ? `${matrix}${table}${alerts}` : `${alerts}${table}<div class="mt-14">${matrix}</div>`;
}

function budgetDiagnosticTable(c, resultOption) {
  const rows = budgetRelativeRows(c, resultOption);
  const subtitle = hasOfficialQuadrants() ? "Apenas IEES do cluster ativo; classificação oficial de quadrante." : QUADRANT_UNAVAILABLE_MESSAGE;
  return `<div class="table-wrap mt-14"><h3>Tabela de diagnóstico</h3><p class="card-subtitle">${subtitle}</p><table class="data-table budget-diagnostic-table"><thead><tr><th>IEES</th><th>Cluster</th><th>Custo relativo</th><th>Resultado relativo</th><th>Classificação</th><th>Indicador usado</th></tr></thead><tbody>${rows.map(row => {
    const quad = budgetQuadrant(row);
    return `<tr class="diag-${quad.code}"><td><strong>${row.u.sigla}</strong><br><span>${row.u.nome}</span></td><td>${row.u.groups[c.f.groupBy] || row.u.groups.v6}</td><td>${row.costDelta >= 0 ? "+" : ""}${row.costDelta.toFixed(1).replace(".", ",")}%</td><td>${row.resultDelta >= 0 ? "+" : ""}${row.resultDelta.toFixed(1).replace(".", ",")}%</td><td>${quad.label}</td><td>${resultOption.label}</td></tr>`;
  }).join("")}</tbody></table></div>`;
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
    if (quad.code === "q4" && (profile.includes("Expansivo") || profile.includes("Autônomo"))) alerts.push(["alert-danger", "⚠", row.u.sigla, "Alto orçamento com resultado abaixo do cluster — atenção."]);
    if (quad.code === "q3" && profile.includes("Restritivo")) alerts.push(["alert-info", "i", row.u.sigla, "Restrição orçamentária estrutural pode explicar o posicionamento — analisar junto com corpo docente."]);
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
    ${budgetScoreCard(indicatorName(81), formatPercent(a.executionRate), "média ponderada")}
    ${budgetScoreCard(indicatorName(82), formatPercent(a.liquidationRate), "liquidado / empenhado")}
    ${budgetScoreCard(indicatorName(83), formatPercent(a.paymentRate), "pago / liquidado")}
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
  if (state.activeTab !== "efficiency" && state.activeTab !== "performance" && el.kpiGrid) el.kpiGrid.classList.remove("efficiency-kpi-grid");
  renderKpisEfficiencyCleanup(c);
  appendMissingKpiDeltas(c);
};

/* Catálogo dimensional de indicadores: nomes e unidades extraídos da planilha oficial. */
const indicatorCatalogMeta = {
  "IND-1": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-2": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-3": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-4": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-5": {category:"Permanência e Conclusão", unit:"Percentual"},
  "IND-6": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-7": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-8": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-9": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-10": {category:"Oferta e Territorialização", unit:"Número"},
  "IND-11": {category:"Oferta e Territorialização", unit:"Número"},
  "IND-12": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-13": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-14": {category:"Permanência e Conclusão", unit:"Número"},
  "IND-15": {category:"Oferta e Territorialização", unit:"Número"},
  "IND-16": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-17": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-18": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-19": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-20": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-21": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-22": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-23": {category:"Acesso e Inclusão", unit:"Razão"},
  "IND-24": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-25": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-26": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-27": {category:"Permanência e Conclusão", unit:"Percentual"},
  "IND-28": {category:"Acesso e Inclusão", unit:"Número"},
  "IND-29": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-30": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-31": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-32": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-33": {category:"Inserção Profissional", unit:"Número"},
  "IND-34": {category:"Inserção Profissional", unit:"Número"},
  "IND-35": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-36": {category:"Inserção Profissional", unit:"Número"},
  "IND-37": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-38": {category:"Inserção Profissional", unit:"Número"},
  "IND-39": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-40": {category:"Inserção Profissional", unit:"Número"},
  "IND-41": {category:"Inserção Profissional", unit:"Número"},
  "IND-42": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-43": {category:"Qualidade Acadêmica", unit:"Número"},
  "IND-44": {category:"Qualidade Acadêmica", unit:"Número"},
  "IND-45": {category:"Corpo Docente", unit:"Número"},
  "IND-46": {category:"Corpo Docente", unit:"Percentual"},
  "IND-47": {category:"Corpo Docente", unit:"Percentual"},
  "IND-48": {category:"Corpo Docente", unit:"Número"},
  "IND-49": {category:"Corpo Docente", unit:"Percentual"},
  "IND-50": {category:"Corpo Docente", unit:"Número"},
  "IND-51": {category:"Corpo Docente", unit:"Percentual"},
  "IND-52": {category:"Corpo Docente", unit:"Percentual"},
  "IND-53": {category:"Corpo Docente", unit:"Horas"},
  "IND-54": {category:"Corpo Docente", unit:"Horas"},
  "IND-55": {category:"Corpo Docente", unit:"Horas"},
  "IND-56": {category:"Corpo Docente", unit:"Percentual"},
  "IND-57": {category:"Corpo Docente", unit:"Horas"},
  "IND-58": {category:"Corpo Docente", unit:"Percentual"},
  "IND-59": {category:"Corpo Docente", unit:"Percentual"},
  "IND-60": {category:"Pesquisa e Inovação", unit:"Reais (R$)"},
  "IND-61": {category:"Pesquisa e Inovação", unit:"Número"},
  "IND-62": {category:"Qualidade Acadêmica", unit:"Número"},
  "IND-63": {category:"Corpo Docente", unit:"Percentual"},
  "IND-64": {category:"Internacionalização", unit:"Percentual"},
  "IND-65": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-66": {category:"Qualidade Acadêmica", unit:"Percentual"},
  "IND-67": {category:"Acesso e Inclusão", unit:"Percentual"},
  "IND-68": {category:"Oferta e Territorialização", unit:"Índice (0 a 1)"},
  "IND-69": {category:"Oferta e Territorialização", unit:"Percentual"},
  "IND-71": {category:"Inserção Profissional", unit:"Número"},
  "IND-72": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-73": {category:"Inserção Profissional", unit:"Número"},
  "IND-74": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-75": {category:"Inserção Profissional", unit:"Número"},
  "IND-76": {category:"Inserção Profissional", unit:"Número"},
  "IND-77": {category:"Inserção Profissional", unit:"Número"},
  "IND-78": {category:"Inserção Profissional", unit:"Percentual"},
  "IND-79": {category:"Inserção Profissional", unit:"Número"},
  "IND-80": {category:"Inserção Profissional", unit:"Razão"},
  "IND-81": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-82": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-83": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-84": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-85": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-86": {category:"Estrutura de Gastos", unit:"Percentual"},
  "IND-87": {category:"Estrutura de Gastos", unit:"Percentual"},
  "IND-88": {category:"Estrutura de Gastos", unit:"Razão"},
  "IND-89": {category:"Autonomia e Diversificação de Recursos", unit:"Percentual"},
  "IND-90": {category:"Autonomia e Diversificação de Recursos", unit:"Percentual"},
  "IND-91": {category:"Autonomia e Diversificação de Recursos", unit:"Percentual"},
  "IND-92": {category:"Capacidade de Investimento", unit:"Percentual"},
  "IND-93": {category:"Capacidade de Investimento", unit:"Percentual"},
  "IND-94": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-95": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-96": {category:"Eficiência Orçamentária", unit:"Percentual"},
  "IND-97": {category:"Eficiência Orçamentária", unit:"Percentual"}
};

const tabIndicatorCatalog = {
  overview:[1,2,10,11,12,13,14,26],
  comparison:[1,3,4,5,6,7,8,9,10,11,14,15,21,26,27,28,35,37,39,40,46,47,53,56,60,61,62,64,65,66,81,82,84,85,86,87,88,89,90,91,92,93,94,95],
  access:[1,3,4,10,11,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,67,68,69],
  retention:[5,12,13,14,27],
  quality:[6,7,8,9,60,61,62,63,64,65,66],
  faculty:[43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,63],
  employment:[33,34,35,36,37,38,39,40,41,42,71,72,73,74,75,76,77,78,79,80],
  efficiency:[81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,96,97]
};

function indicatorCode(num) {
  return `IND-${Number(num)}`;
}

// ── Catálogo customizado de indicadores ─────────────────────────────

function buildCatalogItems(tabId) {
  if (tabId === "overview") {
    return overviewKpiDefinitions.map(def => ({
      code: def.code,
      title: def.title,
      category: indicatorCatalogMeta[def.code]?.category || "Geral",
      unit: indicatorCatalogMeta[def.code]?.unit || "—",
      source: def.source || "—",
      formula: def.formula || "—",
      polarity: def.polarity === "↑" ? "Quanto maior, melhor (↑)" : def.polarity === "↓" ? "Quanto menor, melhor (↓)" : "—"
    }));
  }
  let codes = (tabIndicatorCatalog[tabId] || []).map(num => indicatorCode(num));
  if (tabId === "comparison") {
    const dimKey = state.comparisonDimension || "all";
    const dim = comparisonDimensionForKey(dimKey);
    if (dimKey !== "all" && dim.indicators.length) {
      codes = dim.indicators.map(ind => ind.code);
    }
  }
  return codes.map(code => {
    const def = overviewKpiDefinitions.find(d => d.code === code);
    const meta = indicatorCatalogMeta[code] || {};
    return {
      code,
      title: def ? def.title : indicatorName(code),
      category: meta.category || "Geral",
      unit: meta.unit || "—",
      source: def ? (def.source || "—") : "INEP / IEES",
      formula: def ? (def.formula || "—") : "—",
      polarity: def ? (def.polarity === "↑" ? "Quanto maior, melhor (↑)" : def.polarity === "↓" ? "Quanto menor, melhor (↓)" : "—") : "—"
    };
  });
}

function indCatalogKey(code) {
  if (!code) return null;
  // "IND-1" → "ind1",  "IND-27" → "ind27",  "ind1" → "ind1" (passthrough)
  return String(code).toLowerCase().replace(/^ind-/, "ind");
}

function renderIndicatorCard(key) {
  const ind = (typeof INDICATOR_CATALOG !== "undefined") ? INDICATOR_CATALOG[indCatalogKey(key)] : null;
  if (!ind) return `<p class="ind-empty">Ficha não disponível para este indicador.</p>`;
  return `<div class="indicator-card">
  <div class="ind-header">
    <span class="ind-code">Indicador #${ind.codigo}</span>
    <h4 class="ind-name">${ind.nome}</h4>
    <span class="ind-category">${ind.categoria}</span>
  </div>
  <div class="ind-fields">
    ${ind.formula      ? `<div class="ind-field"><label>Fórmula</label><p>${ind.formula}</p></div>` : ""}
    ${ind.unidade      ? `<div class="ind-field ind-field--sm"><label>Unidade</label><p>${ind.unidade}</p></div>` : ""}
    ${ind.polaridade   ? `<div class="ind-field ind-field--sm"><label>Polaridade</label><p>${ind.polaridade}</p></div>` : ""}
    ${ind.fonte        ? `<div class="ind-field ind-field--sm"><label>Fonte</label><p>${ind.fonte}</p></div>` : ""}
    ${ind.periodicidade? `<div class="ind-field ind-field--sm"><label>Periodicidade</label><p>${ind.periodicidade}</p></div>` : ""}
    ${ind.serie        ? `<div class="ind-field ind-field--sm"><label>Série Histórica</label><p>${ind.serie}</p></div>` : ""}
    ${ind.atualizacao  ? `<div class="ind-field ind-field--sm"><label>Última Atualização</label><p>${ind.atualizacao}</p></div>` : ""}
    ${ind.dimensao     ? `<div class="ind-field ind-field--sm"><label>Abrangência</label><p>${ind.dimensao}</p></div>` : ""}
    ${ind.desagregacoes? `<div class="ind-field"><label>Desagregações</label><p>${ind.desagregacoes}</p></div>` : ""}
    ${ind.ocde         ? `<div class="ind-field"><label>Referência OCDE</label><p>${ind.ocde}</p></div>` : ""}
    ${ind.uso          ? `<div class="ind-field"><label>Uso analítico</label><p>${ind.uso}</p></div>` : ""}
    ${ind.observacoes  ? `<div class="ind-field"><label>Limitações metodológicas</label><p>${ind.observacoes}</p></div>` : ""}
    ${ind.link         ? `<div class="ind-field">${ind.link.startsWith("http") ? `<a class="ind-link" href="${ind.link}" target="_blank" rel="noopener">Acessar base de dados ↗</a>` : `<label>Base de dados</label><p>${ind.link}</p>`}</div>` : ""}
  </div>
</div>`;
}

function renderCatalogDetailCard(item) {
  const key = indCatalogKey(item.code);
  if (key && typeof INDICATOR_CATALOG !== "undefined" && INDICATOR_CATALOG[key]) {
    return renderIndicatorCard(key);
  }
  return `<div class="catalog-card">
    <span class="indicator-code">${item.code}</span>
    <strong>${item.title}</strong>
    <dl>
      <dt>Categoria</dt><dd>${item.category}</dd>
      <dt>Unidade</dt><dd>${item.unit}</dd>
      <dt>Fonte</dt><dd>${item.source}</dd>
      <dt>Fórmula</dt><dd>${item.formula}</dd>
      <dt>Polaridade</dt><dd>${item.polarity}</dd>
    </dl>
  </div>`;
}

function renderCustomCatalog(tabId, tabLabel) {
  const items = buildCatalogItems(tabId);
  const uid = `catalog-${tabId}`;
  const optionsHtml = items.map(item => `
    <label class="ind-option" data-code="${item.code}" data-title="${item.title.replace(/"/g, '&quot;')}" data-cat="${item.category}">
      <input type="checkbox" value="${item.code}" aria-label="${item.title}">
      <span class="ind-option-body">
        <span class="ind-option-code">${item.code}</span>
        <span class="ind-option-title">${item.title}</span>
        <span class="ind-option-cat">${item.category}</span>
      </span>
    </label>`).join("");
  return `<div class="table-wrap indicator-catalog-wrap" data-catalog-id="${uid}">
    <div class="ind-catalog-header">
      <div class="ind-catalog-title-block">
        <p class="ind-catalog-title">Catálogo de indicadores${tabLabel ? " · " + tabLabel : ""}</p>
        <p class="ind-catalog-sub">Selecione um ou mais indicadores para consultar detalhes metodológicos, fórmula e fonte.</p>
      </div>
      <span class="ind-catalog-counter" id="${uid}-counter">${items.length} indicadores</span>
    </div>
    <div class="ind-picker-wrap">
      <button class="ind-picker-btn" type="button" id="${uid}-btn"
        aria-expanded="false" aria-controls="${uid}-dropdown">
        <span id="${uid}-btn-label">Selecionar indicadores</span>
        <span class="ind-picker-arrow" aria-hidden="true">▾</span>
      </button>
      <div class="ind-picker-dropdown" id="${uid}-dropdown" hidden role="listbox" aria-multiselectable="true">
        <div class="ind-search">
          <input type="text" id="${uid}-search" placeholder="Buscar por nome, código ou categoria…" aria-label="Buscar indicador">
        </div>
        <div class="ind-option-list" id="${uid}-list">${optionsHtml}</div>
      </div>
    </div>
    <div class="ind-chips-wrap" id="${uid}-chips">
      <span class="ind-chips-none">Nenhum indicador selecionado.</span>
    </div>
    <div class="ind-detail-area" id="${uid}-detail">
      <div class="ind-detail-empty">Selecione um indicador acima para visualizar seus detalhes metodológicos.</div>
    </div>
  </div>`;
}

function bindCustomCatalog(tabId) {
  const uid = `catalog-${tabId}`;
  const btn        = document.getElementById(`${uid}-btn`);
  const dropdown   = document.getElementById(`${uid}-dropdown`);
  const searchInp  = document.getElementById(`${uid}-search`);
  const list       = document.getElementById(`${uid}-list`);
  const chipsWrap  = document.getElementById(`${uid}-chips`);
  const detailArea = document.getElementById(`${uid}-detail`);
  const counter    = document.getElementById(`${uid}-counter`);
  const btnLabel   = document.getElementById(`${uid}-btn-label`);
  if (!btn || !dropdown) return;

  const items = buildCatalogItems(tabId);
  const totalCount = items.length;
  let selected = [];

  function open() {
    dropdown.hidden = false;
    btn.setAttribute("aria-expanded", "true");
    searchInp?.focus();
  }
  function close() {
    dropdown.hidden = true;
    btn.setAttribute("aria-expanded", "false");
  }

  btn.addEventListener("click", () => dropdown.hidden ? open() : close());

  document.addEventListener("click", e => {
    const wrap = btn.closest(".ind-picker-wrap");
    if (wrap && !wrap.contains(e.target)) close();
  });

  document.addEventListener("keydown", e => {
    if (e.key === "Escape") close();
  });

  if (searchInp && list) {
    searchInp.addEventListener("input", () => {
      const term = searchInp.value.toLowerCase().trim();
      list.querySelectorAll(".ind-option").forEach(opt => {
        const text = (opt.dataset.title + " " + opt.dataset.code + " " + opt.dataset.cat).toLowerCase();
        opt.style.display = !term || text.includes(term) ? "" : "none";
      });
      const visible = [...list.querySelectorAll(".ind-option")].filter(o => o.style.display !== "none");
      const empty = list.querySelector(".ind-empty");
      if (!visible.length) {
        if (!empty) { const d = document.createElement("div"); d.className = "ind-empty"; d.textContent = "Nenhum indicador encontrado."; list.appendChild(d); }
      } else {
        if (empty) empty.remove();
      }
    });
  }

  function updateUI() {
    // Counter
    if (counter) counter.textContent = selected.length > 0 ? `${selected.length} de ${totalCount} selecionados` : `${totalCount} indicadores`;

    // Button label
    if (btnLabel) btnLabel.textContent = selected.length === 0 ? "Selecionar indicadores" : `${selected.length} indicador(es) selecionado(s)`;

    // Chips
    if (chipsWrap) {
      if (!selected.length) {
        chipsWrap.innerHTML = `<span class="ind-chips-none">Nenhum indicador selecionado.</span>`;
      } else {
        chipsWrap.innerHTML = selected.map(code => {
          const item = items.find(i => i.code === code);
          const shortTitle = item ? (item.title.length > 40 ? item.title.slice(0, 38) + "…" : item.title) : code;
          return `<span class="ind-chip" title="${item ? item.title : code}">
            <span class="ind-chip-text">${code} · ${shortTitle}</span>
            <button class="ind-chip-remove" type="button" data-code="${code}" aria-label="Remover ${code}">×</button>
          </span>`;
        }).join("") +
        `<button class="ind-clear-btn" type="button" onclick="clearCatalogSelection('${uid}')">Limpar seleção</button>`;

        chipsWrap.querySelectorAll(".ind-chip-remove").forEach(btn2 => {
          btn2.addEventListener("click", () => {
            const code = btn2.dataset.code;
            selected = selected.filter(c => c !== code);
            const cb = list?.querySelector(`input[value="${code}"]`);
            if (cb) { cb.checked = false; cb.closest(".ind-option")?.classList.remove("is-selected"); }
            updateUI();
          });
        });
      }
    }

    // Detail area
    if (detailArea) {
      if (!selected.length) {
        detailArea.innerHTML = `<div class="ind-detail-empty">Selecione um indicador acima para visualizar seus detalhes metodológicos.</div>`;
      } else {
        detailArea.innerHTML = `<p class="ind-detail-count">Exibindo detalhes de ${selected.length} indicador(es).</p>` +
          selected.map(code => {
            const item = items.find(i => i.code === code);
            if (!item) return "";
            return `<details class="ind-detail-accordion" open>
              <summary><span class="indicator-code">${item.code}</span> ${item.title}</summary>
              ${renderCatalogDetailCard(item)}
            </details>`;
          }).join("");
      }
    }
  }

  if (list) {
    list.addEventListener("change", e => {
      const cb = e.target;
      if (cb.type !== "checkbox") return;
      const code = cb.value;
      if (cb.checked) {
        if (!selected.includes(code)) selected.push(code);
        cb.closest(".ind-option")?.classList.add("is-selected");
      } else {
        selected = selected.filter(c => c !== code);
        cb.closest(".ind-option")?.classList.remove("is-selected");
      }
      updateUI();
    });
  }

  window[`clearCatalogSelection`] = window[`clearCatalogSelection`] || function(id) {
    const l = document.getElementById(`${id}-list`);
    if (l) l.querySelectorAll("input[type=checkbox]").forEach(cb => { cb.checked = false; cb.closest(".ind-option")?.classList.remove("is-selected"); });
  };
  // Override para este catálogo específico
  const origClear = window.clearCatalogSelection;
  window.clearCatalogSelection = function(id) {
    if (id === uid) { selected = []; updateUI(); if (list) list.querySelectorAll("input").forEach(cb => { cb.checked = false; cb.closest(".ind-option")?.classList.remove("is-selected"); }); }
    else origClear(id);
  };

  updateUI();
}

function overviewInteractiveCatalog() {
  return renderCustomCatalog("overview", "Panorama Executivo");
}

function bindOverviewCatalogSelect() {
  bindCustomCatalog("overview");
}

function accessInteractiveCatalog() {
  return renderCustomCatalog("access", "Acesso e Oferta");
}

function bindAccessCatalogSelect() {
  bindCustomCatalog("access");
}

// ── fim catálogo customizado ─────────────────────────────────────────

function indicatorCatalogBlock(tabId, c) {
  if (tabId === "overview") return overviewInteractiveCatalog();
  if (tabId === "access")   return accessInteractiveCatalog();
  // Para demais abas: usar o dropdown customizado genérico
  const tabLabels = {
    comparison:"Comparação entre IEES", retention:"Permanência e Formação",
    quality:"Qualidade, Pesquisa e Pós-Graduação", faculty:"Corpo Docente e Capacidade Operacional",
    employment:"Inserção Profissional", efficiency:"Orçamento e Eficiência"
  };
  return renderCustomCatalog(tabId, tabLabels[tabId] || tabId);
}

function appendIndicatorCatalog(tabId, c) {
  if (!el.tabContent || !tabIndicatorCatalog[tabId] || el.tabContent.querySelector(".indicator-catalog-wrap")) return;
  const blockNumber = tabId === "overview" ? 1 : (tabBlocks[tabId]?.length || 0) + 1;
  const target = el.tabContent.querySelector(".tab-aba-wrapper") || el.tabContent;
  target.insertAdjacentHTML("beforeend", renderBlock(blockNumber, "Catálogo de indicadores desta dimensão", indicatorCatalogBlock(tabId, c)));
  bindCustomCatalog(tabId);
}

var previousRenderTabIndicatorCatalog = renderTab;
renderTab = function renderTabWithIndicatorCatalog(c) {
  if (c.f.university === "none") {
    if (el.tabContent) el.tabContent.innerHTML = `<div class="tab-aba-wrapper" data-tab-id="${state.activeTab}"><div class="empty-state"><span class="empty-icon">🎯</span><p class="empty-title">Nenhuma IEES selecionada</p><p class="empty-desc">Selecione uma ou mais universidades no filtro IEES para ver os dados.</p><button onclick="setUniSelection('all');render()">Ver todas as IEES</button></div></div>`;
    return;
  }
  previousRenderTabIndicatorCatalog(c);
  appendIndicatorCatalog(state.activeTab, c);
};

function renderKpiSkeletons() {
  return Array.from({ length: 3 }, () => `<div class="skeleton skeleton-kpi-card" aria-hidden="true"></div>`).join("");
}

function renderChartSkeletons() {
  return `<div class="skeleton-chart-grid" aria-hidden="true">
    <div class="skeleton skeleton-chart-block"></div>
    <div class="skeleton skeleton-chart-block"></div>
  </div>`;
}

function renderLoadingState() {
  if (el.kpiGrid) {
    el.kpiGrid.setAttribute("aria-busy", "true");
    el.kpiGrid.innerHTML = renderKpiSkeletons();
  }
  if (el.tabContent) {
    el.tabContent.setAttribute("aria-busy", "true");
    el.tabContent.innerHTML = renderChartSkeletons();
  }
}

function renderEmptyState() {
  if (!el.tabContent) return;
  el.tabContent.setAttribute("aria-busy", "false");
  el.tabContent.innerHTML = empty();
}

function ensureFilterCountBadge() {
  const reset = el.resetFilters || document.getElementById("resetFilters");
  if (!reset) return null;
  let badge = el.filterCountBadge || document.getElementById("filterCountBadge");
  if (!badge) {
    badge = document.createElement("span");
    badge.id = "filterCountBadge";
    badge.className = "filter-count-badge unfiltered";
    reset.insertAdjacentElement("afterend", badge);
  }
  el.filterCountBadge = badge;
  return badge;
}

function updateFilterCountBadge(count) {
  const badge = ensureFilterCountBadge();
  if (!badge) return;
  const filtered = count < universities.length;
  badge.textContent = `${count} IEES`;
  badge.classList.toggle("filtered", filtered);
  badge.classList.toggle("unfiltered", !filtered);
}

function quartilRowsForCounts(c) {
  return applyFilters({...c.f, groupLevel:"all"}, c.all);
}

empty = function emptyStateHtml() {
  return `<div class="empty-state"><span class="empty-icon">🔍</span><p class="empty-title">Nenhuma IEES encontrada</p><p class="empty-desc">Ajuste os filtros para ver resultados.</p><button onclick="document.getElementById('resetFilters').click()">Limpar filtros</button></div>`;
};

var renderBeforeVisualStates = render;
var renderVisualStateToken = 0;
render = function renderWithVisualStates() {
  const token = ++renderVisualStateToken;
  const schedule = window.requestAnimationFrame || (callback => window.setTimeout(callback, 0));
  renderLoadingState();
  schedule(() => {
    if (token !== renderVisualStateToken) return;
    renderBeforeVisualStates();
    if (el.kpiGrid) el.kpiGrid.setAttribute("aria-busy", "false");
    if (el.tabContent) el.tabContent.setAttribute("aria-busy", "false");
    const c = context();
    const activeRows = applyFilters(c.f, c.all);
    updateFilterCountBadge(activeRows.length);
    updateQuartilChips(quartilRowsForCounts(c));
    if (!activeRows.length) renderEmptyState();
  });
};

/* Auditoria funcional dos botoes: camada final de estado, acessibilidade e testes. */
const BUTTON_AUDIT_MAP = [
  { selector: "#scopeBtnPR", label: "Escopo Parana", handler: "setScope('PR')" },
  { selector: "#scopeBtnBR", label: "Escopo Brasil", handler: "setScope('BR')" },
  { selector: "#resetFilters", label: "Limpar filtros", handler: "resetAllFilters()" },
  { selector: ".tab-button[data-tab='overview']", label: "Aba 1 - Visao Geral", handler: "activateTab('overview')" },
  { selector: ".tab-button[data-tab='comparison']", label: "Aba 2 - Comparacao", handler: "activateTab('comparison')" },
  { selector: ".tab-button[data-tab='access']", label: "Aba 3 - Acesso e Oferta", handler: "activateTab('access')" },
  { selector: ".tab-button[data-tab='retention']", label: "Aba 4 - Permanencia e Formacao", handler: "activateTab('retention')" },
  { selector: ".tab-button[data-tab='quality']", label: "Aba 5 - Qualidade", handler: "activateTab('quality')" },
  { selector: ".tab-button[data-tab='faculty']", label: "Aba 6 - Corpo Docente", handler: "activateTab('faculty')" },
  { selector: ".tab-button[data-tab='employment']", label: "Aba 7 - Insercao Profissional", handler: "activateTab('employment')" },
  { selector: ".tab-button[data-tab='efficiency']", label: "Aba 8 - Execucao Orcamentaria", handler: "activateTab('efficiency')" },
  { selector: ".tab-button[data-tab='performance']", label: "Aba 9 - Desempenho e Eficiencia Relativa", handler: "activateTab('performance')" },
  { selector: ".export-btn", label: "Exportar", handler: "exportTabData()" }
];
window.BUTTON_AUDIT_MAP = BUTTON_AUDIT_MAP;

const PR_ONLY_GROUPS = new Set(["v6", "v7", "v8"]);
const PR_ONLY_FILTERS = ["regionFilter", "municipalityFilter"];
const RESET_SELECT_DEFAULTS = {
  yearFilter: "2024",
  dimensionFilter: "all",
  groupBy: "v1",
  groupLevelFilter: "all",
  regionFilter: "all",
  resultIndicator: "composite",
  effortIndicator: "budgetPerStudent",
  courseTypeFilter: "all",
  municipalityFilter: "all",
  courseFilter: "all",
  courseAreaFilter: "all",
  knowledgeAreaFilter: "all",
  turnFilter: "all",
  pgProgramFilter: "all",
  cohortFilter: "all",
  cbo2Filter: "all",
  sourceFilter: "all",
  periodicityFilter: "anual",
  creditTypeFilter: "all",
  resourceOriginFilter: "all",
  expenseGroupFilter: "all"
};

function normalizeScope(value) {
  const rawValue = String(value || "").trim().toLowerCase();
  return rawValue === "br" || rawValue === "brasil" ? "Brasil" : "Paraná";
}

function isBrasilScope(value) {
  return normalizeScope(value) === "Brasil";
}

function setSelectValue(select, value) {
  if (!select) return;
  const exists = [...select.options].some(option => option.value === value);
  select.value = exists ? value : (select.options[0]?.value || "");
}

function closestFilterShell(control) {
  return control?.closest?.(".filter-mini-card, .filter-inline-group");
}

function setScopedControlState(control, disabled, message) {
  if (!control) return;
  control.disabled = disabled;
  control.setAttribute("aria-disabled", String(disabled));
  const shell = closestFilterShell(control);
  if (shell) {
    shell.classList.toggle("is-disabled", disabled);
    shell.toggleAttribute("data-scope-disabled", disabled);
    if (disabled) shell.title = message || "";
    else shell.removeAttribute("title");
  }
}

function scopeDisplayName(scope) {
  return isBrasilScope(scope) ? "Brasil" : "Paraná";
}

function activeScopeLabel(c) {
  if (!c) return "Sistema estadual";
  const f = c.f;
  if (f.university === "none") return "Nenhuma IEES selecionada";
  if (Array.isArray(f.university)) {
    if (f.university.length === 1 && c.selected) return `${c.selected.sigla} | ${c.group}`;
    if (f.university.length > 1) return `${f.university.length} IEES selecionadas`;
  }
  if (c.group && c.group !== "all") return `${scopeDisplayName(f.scope)} · Grupo ${c.group}`;
  return isBrasilScope(f.scope) ? "Sistema Brasil" : "Sistema estadual";
}

syncScopeToggle = function syncScopeToggle(scope) {
  const normalized = normalizeScope(scope);
  const isBR = normalized === "Brasil";
  const btnPR = document.getElementById("scopeBtnPR");
  const btnBR = document.getElementById("scopeBtnBR");
  if (btnPR) {
    btnPR.classList.toggle("active", !isBR);
    btnPR.classList.toggle("is-active", !isBR);
    btnPR.setAttribute("aria-pressed", String(!isBR));
  }
  if (btnBR) {
    btnBR.classList.toggle("active", isBR);
    btnBR.classList.toggle("is-active", isBR);
    btnBR.setAttribute("aria-pressed", String(isBR));
  }
  const tabBtnPR = document.getElementById("tabScopeBtnPR");
  const tabBtnBR = document.getElementById("tabScopeBtnBR");
  if (tabBtnPR) tabBtnPR.setAttribute("aria-pressed", String(!isBR));
  if (tabBtnBR) tabBtnBR.setAttribute("aria-pressed", String(isBR));
};
window.syncScopeToggle = syncScopeToggle;

updateScopeAvailability = function updateScopeAvailability(scope) {
  if (!el.groupBy) return;
  const normalized = normalizeScope(scope);
  const isBR = normalized === "Brasil";

  [...el.groupBy.options].forEach(option => {
    const prOnly = PR_ONLY_GROUPS.has(option.value);
    option.disabled = isBR && prOnly;
    option.hidden = isBR && prOnly;
    option.title = prOnly
      ? (isBR ? "Disponível apenas para escopo Paraná" : "Agrupamento exclusivo do escopo Paraná")
      : "";
  });

  if (isBR && PR_ONLY_GROUPS.has(el.groupBy.value)) {
    el.groupBy.value = "v1";
    updateGroupOptions("v1");
    if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
    state.localFilters = {};
  }

  PR_ONLY_FILTERS.forEach(id => {
    const control = el[id] || document.getElementById(id);
    if (!control) return;
    if (isBR) setSelectValue(control, "all");
    setScopedControlState(control, isBR, "Filtro territorial disponível apenas para o escopo Paraná");
  });

  // Disable groupBy .filter-mini-card visually when Brasil scope (PR-only options are hidden)
  const groupByShell = closestFilterShell(el.groupBy);
  if (groupByShell) {
    groupByShell.classList.toggle("is-disabled", isBR);
    groupByShell.toggleAttribute("data-scope-disabled", isBR);
    if (isBR) groupByShell.title = "Variáveis V6–V8 exclusivas do escopo Paraná";
    else groupByShell.removeAttribute("title");
  }

  // Disable groupLevelFilter .filter-mini-card (cluster-level filtering unavailable in Brasil scope)
  setScopedControlState(el.groupLevelFilter, isBR, "Filtro de grupo disponível apenas para o escopo Paraná");
  renderGroupVariableButtons();
};
window.updateScopeAvailability = updateScopeAvailability;

applyEfficiencyDefaults = function applyEfficiencyDefaults() {
  if ((state.activeTab !== "efficiency" && state.activeTab !== "performance") || state.efficiencyDefaultApplied || !el.groupBy) return;
  if (isBrasilScope(state.scope)) {
    state.efficiencyDefaultApplied = true;
    return;
  }
  const v6Option = el.groupBy.querySelector('option[value="v6"]');
  if (v6Option) v6Option.disabled = false;
  el.groupBy.value = "v6";
  updateGroupOptions("v6");
  if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
  state.efficiencyDefaultApplied = true;
};
window.applyEfficiencyDefaults = applyEfficiencyDefaults;

setScope = function setScope(value, options = {}) {
  state.scope = normalizeScope(value);
  syncScopeToggle(state.scope);
  updateScopeAvailability(state.scope);
  if (options.render !== false) render();
};
window.setScope = setScope;


function resetAllFilters(options = {}) {
  setUniSelection("all");
  Object.entries(RESET_SELECT_DEFAULTS).forEach(([id, value]) => setSelectValue(el[id], value));
  state.localFilters = {};
  state.activeIndicator = {};
  state.distributionCourseType = "all";
  state.comparisonShowOnlyCluster = false;
  state.comparisonDimension = "all";
  state.retentionCourseType = "Bacharelado";
  state.employmentMapOnlyCluster = false;
  state.efficiencyMode = "movimentacao";
  state.efficiencyResult = "completion";
  state.efficiencyDefaultApplied = false;
  updateGroupOptions("v1");
  setScope("PR", { render: false });
  updateActiveTabFilters();
  if (options.render !== false) render();
}
window.resetAllFilters = resetAllFilters;

const TABS_WITH_BRASIL = new Set(["overview","comparison","access","retention","quality","employment"]);

function activateTab(tabId, options = {}) {
  const nextTab = tabInfo[tabId] ? tabId : "overview";
  state.activeTab = nextTab;
  if (nextTab !== "efficiency" && nextTab !== "performance") state.efficiencyDefaultApplied = false;
  const tabs = el.tabs?.length ? el.tabs : [...document.querySelectorAll(".tab-button")];
  tabs.forEach(tab => {
    const active = tab.dataset.tab === nextTab;
    tab.classList.toggle("is-active", active);
    tab.setAttribute("aria-current", active ? "page" : "false");
  });
  const hasBrasil = TABS_WITH_BRASIL.has(nextTab);
  const toggle = document.getElementById("tabScopeToggle");
  if (toggle) toggle.hidden = !hasBrasil;
  const contextBar = document.getElementById("tabContextBar");
  if (contextBar) contextBar.hidden = !hasBrasil;
  if (!hasBrasil && state.scope === "Brasil") setScope("PR", { render: false });
  updateActiveTabFilters();
  if (options.render !== false) render();
  if (options.track !== false && typeof trackPath === "function") trackPath(nextTab);
}
window.activateTab = activateTab;
window.goToTab = function goToTab(tabId) {
  activateTab(tabId);
};

bind = function bindAuditedButtons() {
  const filterIds = [
    "yearFilter", "courseTypeFilter", "municipalityFilter",
    "courseFilter", "courseAreaFilter", "knowledgeAreaFilter", "turnFilter", "pgProgramFilter",
    "cohortFilter", "cbo2Filter", "sourceFilter", "periodicityFilter", "creditTypeFilter",
    "resourceOriginFilter", "expenseGroupFilter"
  ];
  filterIds.forEach(id => el[id]?.addEventListener("change", render));
  el.groupBy?.addEventListener("change", () => {
    updateGroupOptions(el.groupBy.value);
    updateScopeAvailability(state.scope);
    renderGroupVariableButtons();
    render();
  });
  el.groupLevelFilter?.addEventListener("change", () => {
    updateQuartilChips();
    render();
  });
  document.addEventListener("click", event => {
    const groupButton = event.target.closest(".group-var-btn[data-group-var]");
    if (!groupButton || groupButton.disabled) return;
    setGroupByVariable(groupButton.dataset.groupVar);
  });
  document.addEventListener("click", event => {
    const chip = event.target.closest(".quartil-chips .qchip, .side-group-filter .qchip");
    if (!chip) return;
    const isClear = chip.classList.contains("qchip-clear");
    if (isClear) {
      setGlobalGroupLevel("all");
      return;
    }
    const countSpan = chip.querySelector(".qchip-count");
    const groupLabel = chip.dataset.group || (countSpan
      ? chip.textContent.replace(countSpan.textContent, "")
      : chip.textContent
    ).trim();
    if (groupLabel) setGlobalGroupLevel(groupLabel);
  });
  document.addEventListener("click", event => {
    const chip = event.target.closest(".qchip-strip .qchip:not(.qchip-clear)");
    if (!chip) return;
    const strip = chip.closest(".qchip-strip");
    const chartId = strip?.dataset.chartId;
    if (!chartId) return;
    const countSpan = chip.querySelector(".qchip-count");
    const groupLabel = chip.dataset.group || (countSpan
      ? chip.textContent.replace(countSpan.textContent, "")
      : chip.textContent
    ).trim();
    if (groupLabel) setLocalFilter(chartId, groupLabel);
  });
  el.tabs?.forEach(tab => tab.addEventListener("click", () => activateTab(tab.dataset.tab)));
  el.resetFilters?.addEventListener("click", () => resetAllFilters());
  el.fbsClear?.addEventListener("click", () => resetAllFilters());
  syncScopeToggle(state.scope);
  updateScopeAvailability(state.scope);
  activateTab(state.activeTab, { render: false, track: false });
  // ── IEES multi-select handlers ──────────────────────────────────
  (function(){
    const btn=document.getElementById("universityFilter");
    const drop=document.getElementById("universityFilterDropdown");
    const wrap=document.getElementById("universityFilterWrap");
    if(!btn||!drop)return;
    btn.addEventListener("click",e=>{
      e.stopPropagation();
      const open=btn.getAttribute("aria-expanded")==="true";
      btn.setAttribute("aria-expanded",String(!open));
      drop.hidden=open;
    });
    document.addEventListener("click",e=>{
      if(!wrap?.contains(e.target)){btn.setAttribute("aria-expanded","false");drop.hidden=true;}
    });
    document.addEventListener("keydown",e=>{
      if(e.key==="Escape"&&!drop.hidden){btn.setAttribute("aria-expanded","false");drop.hidden=true;btn.focus();}
    });
    document.getElementById("uniCheckAll")?.addEventListener("change",()=>{setUniSelection("all");render();});
    document.getElementById("uniCheckNone")?.addEventListener("change",()=>{setUniSelection("none");render();});
    document.getElementById("universityCheckboxList")?.addEventListener("change",e=>{
      if(!e.target.classList.contains("uni-check"))return;
      const checked=[...document.querySelectorAll(".uni-check:checked")].map(c=>c.value);
      setUniSelection(checked.length===0?"all":checked);
      render();
    });
  })();
  // ── Filter panel expand/collapse ────────────────────────────────────────
  el.advancedToggle?.addEventListener("click", () => {
    const expanded = el.advancedToggle.getAttribute("aria-expanded") === "true";
    el.advancedToggle.setAttribute("aria-expanded", String(!expanded));
    if (el.advancedFilters) el.advancedFilters.hidden = expanded;
  });
};
window.bind = bind;

updateFooter = function updateFooter(c) {
  const footerCluster = document.getElementById("footerClusterLabel");
  const footerScope = document.getElementById("footerScopeLabel");
  if (!footerCluster && !footerScope) return;
  const ctx = c || context();
  const groupName = ctx.group === "all" ? "Todos os grupos" : ctx.group;
  if (footerCluster) footerCluster.textContent = `${ctx.f.groupBy.toUpperCase()} - ${groupName}`;
  if (footerScope) footerScope.textContent = scopeDisplayName(ctx.f.scope);
};
window.updateFooter = updateFooter;

updateContextBar = function updateContextBar(c) {
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  const isBR = isBrasilScope(c.f.scope);
  if (badge) {
    badge.className = `scope-badge ${isBR ? "scope-br" : "scope-pr"}`;
    badge.textContent = isBR ? "Brasil" : "Paraná";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    const meta = groupMeta[c.f.groupBy];
    const shortLabel = meta?.label?.split(' - ').slice(1).join(' - ') || c.f.groupBy.toUpperCase();
    const groupSuffix = c.group !== "all" ? ` · ${c.group}` : "";
    row.innerHTML = `<span class="cluster-badge c-${c.f.groupBy}">Paraná · Cluster ${c.f.groupBy.toUpperCase()} – ${shortLabel}${groupSuffix}</span>`;
  }
  updateFooter(c);
};
window.updateContextBar = updateContextBar;

renderTop = function renderTop(c) {
  const t = tabInfo[state.activeTab] || tabInfo.overview;
  if (el.activeTabKicker) el.activeTabKicker.textContent = t[0];
  if (el.activeTabTitle) el.activeTabTitle.textContent = t[1];
  if (el.activeTabDescription) el.activeTabDescription.textContent = t[2];
  if (el.periodPill) el.periodPill.textContent = `Ano base ${c.f.year} · Escopo ${scopeDisplayName(c.f.scope)}`;
  if (el.scopeLabel) el.scopeLabel.textContent = activeScopeLabel(c);
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateFooter(c);
  updateTabIndicator();
  updateQuartilChips();
};
window.renderTop = renderTop;

/* Escopo Brasil: sem clusters ou agrupamentos de comparação. */
const BR_CLUSTER_EMPTY_MESSAGE = "Clusters disponíveis apenas para o escopo Paraná. No escopo Brasil, utilize a visão nacional como referência comparativa.";

function brasilClusterUnavailableState() {
  return `<div class="empty-state"><span class="empty-icon">🌐</span><p class="empty-title">Referência Brasil</p><p class="empty-desc">${BR_CLUSTER_EMPTY_MESSAGE}</p></div>`;
}

function isBrasilContext(c) {
  return isBrasilScope(c?.f?.scope || state.scope);
}

function nationalReferenceLabel() {
  return "Referência Brasil";
}

function nationalMeanLabel() {
  return "Média nacional";
}

function allGroupLabelsSet() {
  return new Set(Object.values(groupOptions || {}).flat());
}

var filtersBeforeBrasilScope = filters;
filters = function filtersWithoutBrasilClusters() {
  const f = filtersBeforeBrasilScope();
  if (isBrasilScope(f.scope)) {
    f.groupBy = "v1";
    f.groupLevel = "all";
    f.region = "all";
    f.municipality = "all";
  }
  return f;
};
window.filters = filters;

var applyFiltersBeforeBrasilScope = applyFilters;
applyFilters = function applyFiltersWithoutBrasilGroups(f = filters(), source = null) {
  const normalized = { ...f };
  if (isBrasilScope(normalized.scope)) {
    normalized.groupLevel = "all";
    normalized.region = "all";
    normalized.municipality = "all";
  }
  return applyFiltersBeforeBrasilScope(normalized, source);
};
window.applyFilters = applyFilters;

var contextBeforeBrasilScope = context;
context = function contextWithoutBrasilClusters() {
  const f = filters();
  if (!isBrasilScope(f.scope)) return contextBeforeBrasilScope();

  const all = scopeUniverse(f.scope).map(u => byYear(u, f.year));
  const selected = Array.isArray(f.university) ? all.find(u => u.id === f.university[0]) || null : null;
  const base = all.filter(u =>
    (f.profile === "all" || u.profile === f.profile) &&
    (f.courseType === "all" || u.type === f.courseType) &&
    (f.course === "all" || u.coursesFocus.includes(f.course)) &&
    u.doctors >= f.minDoctors
  );
  let ref = base;
  let display = f.university === "all" ? ref : f.university === "none" ? [] : ref.filter(u => Array.isArray(f.university) && f.university.includes(u.id));
  if (!display.length && f.university !== "none") display = ref;
  if (f.attention && hasOfficialQuadrants()) {
    const ids = matrixRows(ref, f).filter(r => r.resultRel < 100 && r.effortRel > 100).map(r => r.id);
    ref = ref.filter(u => ids.includes(u.id));
    display = display.filter(u => ids.includes(u.id));
  }
  return { f, all, base, ref, display, selected, group: "all" };
};
window.context = context;

function setBrasilClusterControlsState(isBR) {
  const groupControl = el.groupBy || document.getElementById("groupBy");
  const groupShell = closestFilterShell(groupControl);
  if (groupShell) {
    groupShell.hidden = isBR;
    groupShell.setAttribute("aria-hidden", String(isBR));
    groupShell.title = isBR ? "Agrupamentos disponíveis apenas no escopo Paraná" : "";
    if (!isBR) groupShell.removeAttribute("title");
  }
  if (groupControl) {
    if (isBR) setSelectValue(groupControl, "v1");
    setScopedControlState(groupControl, isBR, "Agrupamentos disponíveis apenas no escopo Paraná");
  }
  if (el.groupLevelFilter) {
    el.groupLevelFilter.value = "all";
    setScopedControlState(el.groupLevelFilter, isBR, "Grupos disponíveis apenas no escopo Paraná");
  }
  const chips = el.quartilChips || document.getElementById("quartilChips");
  if (chips) {
    chips.hidden = isBR;
    chips.setAttribute("aria-hidden", String(isBR));
    if (isBR) chips.innerHTML = "";
  }
  const sideFilter = document.getElementById("sideGroupFilter");
  if (sideFilter) {
    sideFilter.hidden = isBR;
    if (isBR) sideFilter.innerHTML = "";
  }
  const groupButtons = el.groupVariableButtons || document.getElementById("groupVariableButtons");
  if (groupButtons) {
    groupButtons.hidden = isBR;
    groupButtons.setAttribute("aria-hidden", String(isBR));
    if (isBR) groupButtons.innerHTML = "";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) row.setAttribute("aria-label", isBR ? "Referências de comparação ativas" : "Clusters de comparação ativos");
}

var updateScopeAvailabilityBeforeBrasilScope = updateScopeAvailability;
updateScopeAvailability = function updateScopeAvailabilityWithoutBrasilClusters(scope) {
  updateScopeAvailabilityBeforeBrasilScope(scope);
  const isBR = isBrasilScope(scope);
  if (isBR) {
    if (el.groupBy) setSelectValue(el.groupBy, "v1");
    if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
    state.localFilters = {};
    state.synthTableGroup = "all";
    state.comparisonShowOnlyCluster = false;
    state.employmentMapOnlyCluster = false;
    if (state.radarReference === "cluster") state.radarReference = "brasil";
  }
  setBrasilClusterControlsState(isBR);
};
window.updateScopeAvailability = updateScopeAvailability;

var setScopeBeforeBrasilScope = setScope;
setScope = function setScopeWithoutBrasilClusters(value, options = {}) {
  const normalized = normalizeScope(value);
  if (isBrasilScope(normalized)) {
    state.localFilters = {};
    state.synthTableGroup = "all";
    if (state.radarReference === "cluster") state.radarReference = "brasil";
    if (el.groupBy) el.groupBy.value = "v1";
    if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
    updateGroupOptions("v1");
  } else {
    if (state.radarReference === "brasil") state.radarReference = "cluster";
    updateGroupOptions(el.groupBy?.value || "v1");
  }
  setScopeBeforeBrasilScope(normalized, options);
};
window.setScope = setScope;

var updateGroupOptionsBeforeBrasilScope = updateGroupOptions;
updateGroupOptions = function updateGroupOptionsWithoutBrasilClusters(variable) {
  const isBR = isBrasilScope(state.scope);
  if (el.groupBy) {
    [...el.groupBy.options].forEach(opt => {
      opt.disabled = isBR && PR_ONLY_GROUPS.has(opt.value);
    });
    if (isBR && PR_ONLY_GROUPS.has(el.groupBy.value)) el.groupBy.value = "v1";
  }
  if (isBR) {
    if (el.groupLevelFilter) {
      el.groupLevelFilter.innerHTML = `<option value="all" selected>Referência Brasil</option>`;
      el.groupLevelFilter.value = "all";
    }
    state.localFilters = {};
    updateQuartilChips();
    renderGroupVariableButtons();
    return;
  }
  updateGroupOptionsBeforeBrasilScope(variable);
  renderGroupVariableButtons();
};
window.updateGroupOptions = updateGroupOptions;

var updateQuartilChipsBeforeBrasilScope = updateQuartilChips;
updateQuartilChips = function updateQuartilChipsWithoutBrasilClusters(data = null) {
  const container = document.getElementById("quartilChips");
  const sideFilter = document.getElementById("sideGroupFilter");
  if (isBrasilScope(state.scope)) {
    if (container) {
      container.innerHTML = "";
      container.hidden = true;
      container.setAttribute("aria-hidden", "true");
    }
    if (sideFilter) {
      sideFilter.innerHTML = "";
      sideFilter.hidden = true;
    }
    return;
  }
  if (container) {
    container.hidden = false;
    container.setAttribute("aria-hidden", "false");
  }
  if (sideFilter) sideFilter.hidden = false;
  updateQuartilChipsBeforeBrasilScope(data);
};
window.updateQuartilChips = updateQuartilChips;

var quartilChipStripBeforeBrasilScope = quartilChipStrip;
quartilChipStrip = function quartilChipStripWithoutBrasilClusters(chartId, groupByKey, data, c) {
  if (isBrasilContext(c)) return "";
  return quartilChipStripBeforeBrasilScope(chartId, groupByKey, data, c);
};
window.quartilChipStrip = quartilChipStrip;

var setGlobalGroupLevelBeforeBrasilScope = setGlobalGroupLevel;
setGlobalGroupLevel = function setGlobalGroupLevelWithoutBrasilClusters(value) {
  if (isBrasilScope(state.scope)) {
    if (el.groupLevelFilter) el.groupLevelFilter.value = "all";
    state.localFilters = {};
    render();
    return;
  }
  setGlobalGroupLevelBeforeBrasilScope(value);
};
window.setGlobalGroupLevel = setGlobalGroupLevel;

var setLocalFilterBeforeBrasilScope = setLocalFilter;
setLocalFilter = function setLocalFilterWithoutBrasilClusters(chartId, value) {
  if (isBrasilScope(state.scope)) {
    state.localFilters = {};
    render();
    return;
  }
  setLocalFilterBeforeBrasilScope(chartId, value);
};
window.setLocalFilter = setLocalFilter;

var applyLocalGroupFilterBeforeBrasilScope = applyLocalGroupFilter;
applyLocalGroupFilter = function applyLocalGroupFilterWithoutBrasilClusters(data, chartId, groupByKey) {
  if (isBrasilScope(state.scope)) return data;
  return applyLocalGroupFilterBeforeBrasilScope(data, chartId, groupByKey);
};

var chartRowsByLocalBeforeBrasilScope = chartRowsByLocal;
chartRowsByLocal = function chartRowsByLocalWithoutBrasilClusters(c, chartId, defaultRows) {
  if (isBrasilContext(c)) return defaultRows;
  return chartRowsByLocalBeforeBrasilScope(c, chartId, defaultRows);
};

var explicitClusterActiveBeforeBrasilScope = explicitClusterActive;
explicitClusterActive = function explicitClusterActiveOnlyParana(c) {
  if (isBrasilContext(c)) return false;
  return explicitClusterActiveBeforeBrasilScope(c);
};
window.explicitClusterActive = explicitClusterActive;

var clusterRowsForBeforeBrasilScope = clusterRowsFor;
clusterRowsFor = function clusterRowsForOnlyParana(c) {
  if (isBrasilContext(c)) return c.base.length ? c.base : c.all;
  return clusterRowsForBeforeBrasilScope(c);
};
window.clusterRowsFor = clusterRowsFor;

var activeScopeLabelBeforeBrasilScope = activeScopeLabel;
activeScopeLabel = function activeScopeLabelWithoutBrasilGroups(c) {
  if (!isBrasilContext(c)) return activeScopeLabelBeforeBrasilScope(c);
  const f = c.f;
  if (f.university === "none") return "Nenhuma IEES selecionada";
  if (Array.isArray(f.university)) {
    if (f.university.length === 1 && c.selected) return `${c.selected.sigla} | ${nationalReferenceLabel()}`;
    if (f.university.length > 1) return `${f.university.length} IEES selecionadas`;
  }
  return nationalReferenceLabel();
};
window.activeScopeLabel = activeScopeLabel;

var updateActiveClusterLabelBeforeBrasilScope = updateActiveClusterLabel;
updateActiveClusterLabel = function updateActiveClusterLabelWithoutBrasilClusters(c) {
  if (isBrasilContext(c)) {
    if (el.activeClusterLabel) el.activeClusterLabel.textContent = `${nationalReferenceLabel()} · ${nationalMeanLabel()}`;
    updateFooter(c);
    return;
  }
  updateActiveClusterLabelBeforeBrasilScope(c);
};
window.updateActiveClusterLabel = updateActiveClusterLabel;

function setSidePanelScopeText(isBR) {
  const firstCard = el.groupTitle?.closest?.(".side-card");
  const breakdownCard = el.groupBreakdown?.closest?.(".side-card");
  const firstEyebrow = firstCard?.querySelector?.(".eyebrow");
  const breakdownEyebrow = breakdownCard?.querySelector?.(".eyebrow");
  if (firstEyebrow) firstEyebrow.textContent = isBR ? "Comparativo nacional" : "Agrupamento dinâmico";
  if (breakdownEyebrow) breakdownEyebrow.textContent = isBR ? "Referências nacionais" : "Grupos do agrupamento ativo";
}

var renderSideBeforeBrasilScope = renderSide;
renderSide = function renderSideWithoutBrasilClusters(c) {
  if (!isBrasilContext(c)) {
    setSidePanelScopeText(false);
    return renderSideBeforeBrasilScope(c);
  }
  setSidePanelScopeText(true);
  if (el.groupTitle) el.groupTitle.textContent = nationalReferenceLabel();
  if (el.criteriaList) {
    el.criteriaList.innerHTML = `
      <div class="criteria-item"><strong>${nationalMeanLabel()}</strong><span>Benchmark nacional para leitura comparativa.</span></div>
      <div class="criteria-item"><strong>Comparativo nacional</strong><span>Leitura consolidada da base nacional.</span></div>`;
  }
  if (el.groupBreakdown) {
    el.groupBreakdown.innerHTML = `
      <div class="group-breakdown-card is-active"><strong class="group-breakdown-name">${nationalReferenceLabel()}</strong><span class="group-breakdown-criterion">Universo nacional exibido como referência comparativa.</span></div>`;
  }
  if (el.analyticalNote) {
    el.analyticalNote.textContent = "No escopo Brasil, o painel usa a visão nacional como referência comparativa. As segmentações dinâmicas ficam disponíveis apenas para o Paraná.";
  }
  renderSystemAlerts(c);
};
window.renderSide = renderSide;

var updateFooterBeforeBrasilScope = updateFooter;
updateFooter = function updateFooterWithoutBrasilClusters(c) {
  const ctx = c || context();
  const footerCluster = document.getElementById("footerClusterLabel");
  const footerScope = document.getElementById("footerScopeLabel");
  if (isBrasilContext(ctx)) {
    // sem cálculo de cluster no escopo Brasil
    if (footerCluster) footerCluster.textContent = nationalMeanLabel();
    if (footerScope) footerScope.textContent = "Brasil";
    return;
  }
  updateFooterBeforeBrasilScope(c);
};
window.updateFooter = updateFooter;

var updateContextBarBeforeBrasilScope = updateContextBar;
updateContextBar = function updateContextBarWithoutBrasilClusters(c) {
  if (!isBrasilContext(c)) return updateContextBarBeforeBrasilScope(c);
  const q = document.getElementById("decisoryQuestionText");
  if (q) q.textContent = decisoryQuestions[state.activeTab] || decisoryQuestions.overview;
  const badge = document.getElementById("scopeBadge");
  if (badge) {
    badge.className = "scope-badge scope-br";
    badge.textContent = "Brasil";
  }
  const row = document.getElementById("activeClustersRow");
  if (row) {
    row.setAttribute("aria-label", "Referências de comparação ativas");
    row.innerHTML = `<span class="cluster-badge scope-br">Brasil · Visão nacional</span>`;
  }
  updateFooter(c);
};
window.updateContextBar = updateContextBar;

var renderTopBeforeBrasilScope = renderTop;
renderTop = function renderTopWithoutBrasilClusters(c) {
  if (isBrasilContext(c)) {
    // sem cálculo de cluster no escopo Brasil
    setBrasilClusterControlsState(true);
    renderTopBeforeBrasilScope(c);
    if (el.periodPill) el.periodPill.textContent = `Ano base ${c.f.year} · Escopo Brasil`;
    if (el.scopeLabel) el.scopeLabel.textContent = activeScopeLabel(c);
    updateActiveClusterLabel(c);
    updateContextBar(c);
    return;
  }
  setBrasilClusterControlsState(false);
  renderTopBeforeBrasilScope(c);
};
window.renderTop = renderTop;

var overviewBeforeBrasilScope = overview;
overview = function overviewWithoutBrasilGroups(c) {
  if (!isBrasilContext(c)) return overviewBeforeBrasilScope(c);
  const data = c.display.length ? c.display : c.ref;
  if (!data.length) return empty();
  const metricKey = overviewMetricOptions[state.overviewMetric] ? state.overviewMetric : "students";
  state.overviewMetric = metricKey;
  const metric = overviewMetricOptions[metricKey];
  const a = overviewAgg(data);
  return `<div class="overview-chart-shell">
    <article class="visual-card overview-bars-card">
      <div class="visual-card-header">
        <div>
          <h3>Gráfico por IEES</h3>
          <p class="card-subtitle">${metric.code} · ${metric.label}. ${nationalReferenceLabel()} como comparativo nacional.</p>
        </div>
        <label class="metric-selector">Métrica
          <select id="overviewMetricSelector">
            ${Object.entries(overviewMetricOptions).map(([key, opt]) => `<option value="${key}" ${key === metricKey ? "selected" : ""}>${opt.label}</option>`).join("")}
          </select>
        </label>
      </div>
      ${overviewClusterBars(c, metric)}
    </article>
  </div>
  <div class="score-grid mt-14">
    ${score("Ocupação das vagas", formatPercent(a.occupancy), "Média nacional", a.occupancy)}
    ${score("Desvinculação", formatPercent(a.dropout), "Média nacional", 100 - a.dropout)}
    ${score("Inserção PR", formatPercent(a.employment), "Comparativo nacional", a.employment)}
    ${score("Execução orçamentária", formatPercent(a.execution), "Comparativo nacional", a.execution)}
  </div>
  <div class="table-wrap mt-14">
    <h3>Síntese dos indicadores estruturais por IEES</h3>
    <p class="card-subtitle">Exibindo ${data.length} IEES no comparativo nacional</p>
    <table class="data-table"><thead><tr><th>IEES</th><th>Estudantes</th><th>Vagas</th><th>Cursos</th><th>Concluintes</th></tr></thead><tbody>${data.map(u => `<tr><td><strong>${u.sigla}</strong><br><span>${u.nome}</span></td><td>${formatNumber(u.students)}</td><td>${formatNumber(u.vacancies)}</td><td>${formatNumber(u.courses)}</td><td>${formatNumber(u.graduates)}</td></tr>`).join("")}</tbody></table>
  </div>`;
};
window.overview = overview;

var comparisonTableBeforeBrasilScope = comparisonTable;
comparisonTable = function comparisonTableWithoutBrasilClusters(c) {
  if (!isBrasilContext(c)) return comparisonTableBeforeBrasilScope(c);
  const key = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(key);
  const rows = c.base.length ? c.base : c.all;
  const means = Object.fromEntries(dimension.indicators.map(ind => [ind.code, comparisonMean(rows, ind)]));
  const ranking = dimensionRanking(rows, dimension.indicators);
  const sortedRows = [...rows].sort((a, b) => (ranking.get(a.id) || 999) - (ranking.get(b.id) || 999));
  return `<div class="comparison-toolbar"><div><strong>Dimensão ${renderDimensionHelp()}</strong><span class="card-subtitle"> · ${dimension.label} · ${nationalReferenceLabel()}</span></div></div>
  <div class="table-wrap comparison-table-wrap">
    <table class="data-table comparison-table">
      <thead><tr><th>Ranking</th><th>IEES</th>${dimension.indicators.map(ind => `<th><span class="indicator-code">${ind.code}</span>${indicatorName(ind.code)}</th>`).join("")}</tr></thead>
      <tbody>${sortedRows.map(u => `<tr class="${isUniSelected(c.f, u.id) ? "selected-row" : ""}"><td><strong>${ranking.get(u.id) || "-"}º</strong></td><td><strong>${u.sigla}</strong><br><span>${u.region}</span></td>${dimension.indicators.map(ind => indicatorCell(ind, u, means[ind.code])).join("")}</tr>`).join("")}</tbody>
      <tfoot><tr><td colspan="2"><strong>${nationalMeanLabel()}</strong></td>${dimension.indicators.map(ind => `<td>${comparisonFormat(ind, means[ind.code])}</td>`).join("")}</tr></tfoot>
    </table>
  </div>`;
};
window.comparisonTable = comparisonTable;

var comparisonRankingBeforeBrasilScope = comparisonRanking;
comparisonRanking = function comparisonRankingWithoutBrasilClusters(c) {
  if (!isBrasilContext(c)) return comparisonRankingBeforeBrasilScope(c);
  const rows = c.base.length ? c.base : c.all;
  const dimKey = comparisonDimensionKey(c);
  const dimSet = comparisonDimensionForKey(dimKey);
  const indicator = dimSet.indicators.length
    ? { label: dimSet.label, format: v => `${(v * 100).toFixed(0)} pts`, get: u => dimensionScore(u, rows, dimSet.indicators) }
    : (resultIndicators[c.f.result] || resultIndicators.composite);
  const ranking = [...rows].sort((a, b) => indicator.get(b) - indicator.get(a));
  const rankMap = new Map(ranking.map((u, index) => [u.id, index + 1]));
  const max = Math.max(...rows.map(u => Number(indicator.get(u)) || 0), 1);
  const ref = mean(rows, u => Number(indicator.get(u)) || 0);
  const refPos = clamp(ref / max * 100, 0, 100);
  const ieesColors = { UEL: "#1f72b8", UEM: "#e05c00", UEPG: "#14804a", UNIOESTE: "#8b2fc9", UNICENTRO: "#c43f3a", UENP: "#af7a00", UNESPAR: "#0f6e56" };
  return `<article class="visual-card comparison-ranking-card">
    <h3>Ranking por Dimensão ${renderDimensionHelp()}</h3>
    <p class="card-subtitle">${indicator.label}. Linha laranja = ${nationalMeanLabel()} (${indicator.format(ref)}).</p>
    <div class="bars comparison-ranking-bars" style="--ref-pos:${refPos}%">
      ${[...rows].sort((a,b)=>indicator.get(b)-indicator.get(a)).map(u => {
        const value = Number(indicator.get(u)) || 0, selected = isUniSelected(c.f, u.id);
        const rank = rankMap.get(u.id);
        return `<div class="bar-row in-cluster ${selected ? "selected" : ""}"><span class="bar-name" title="${u.nome}">${rank ? rank + "º " : ""}${u.sigla}</span><span class="bar-track"><span class="bar-fill" style="width:${clamp(value / max * 100, 4, 100)}%; background:${ieesColors[u.sigla] || "var(--blue-700)"}"></span><span class="bar-reference" aria-hidden="true"></span></span><span class="bar-value">${indicator.format(value)} · ${rank || "-"}º</span></div>`;
      }).join("")}
    </div>
  </article>`;
};
window.comparisonRanking = comparisonRanking;

var comparisonRadarBeforeBrasilScope = comparisonRadar;
comparisonRadar = function comparisonRadarWithoutBrasilClusters(c) {
  if (!isBrasilContext(c)) return comparisonRadarBeforeBrasilScope(c);
  const universe = c.base.length ? c.base : c.all;
  const selected = c.selected && universe.some(u => u.id === c.selected.id) ? c.selected : universe[0];
  if (!selected) return empty();
  const dimKey = comparisonDimensionKey(c);
  const dimension = comparisonDimensionForKey(dimKey);
  const axes = radarAxesForDimension(dimKey);
  const selectedValues = axes.map(axis => normalizeForRadar(axis.get(selected), universe.map(axis.get)));
  const referenceValues = axes.map(axis => normalizeForRadar(radarReferenceValue(axis, "brasil", universe, c, universe), universe.map(axis.get)));
  return `<article class="visual-card radar-card">
    <div class="visual-card-header">
      <div><h3>Radar IEES × referência</h3><p class="card-subtitle">Dimensão: ${dimension.label} · IEES: ${selected.sigla}. Referência: ${nationalMeanLabel()}.</p></div>
    </div>
    ${radarSvg(selectedValues, referenceValues, axes)}
    <div class="radar-analysis">
      <strong>Como interpretar este gráfico</strong>
      <p>Cada eixo representa um indicador da dimensão selecionada. Quanto maior a área do polígono, melhor o desempenho relativo da IEES. Os valores são normalizados com base no comparativo nacional; a linha pontilhada representa a média nacional.</p>
    </div>
    <div class="radar-legend"><span class="radar-selected-dot"></span>${selected.sigla}<span class="radar-reference-dot"></span>${nationalMeanLabel()}</div>
  </article>`;
};
window.comparisonRadar = comparisonRadar;

var renderBlockContentBeforeBrasilScope = renderBlockContent;
renderBlockContent = function renderBlockContentWithoutBrasilClusterBlocks(tabId, title, c) {
  if (isBrasilContext(c) && tabId === "access" && title.includes("Distribuição")) return brasilClusterUnavailableState();
  return renderBlockContentBeforeBrasilScope(tabId, title, c);
};
window.renderBlockContent = renderBlockContent;

var renderTabBeforeBrasilScope = renderTab;
renderTab = function renderTabWithoutBrasilClusterViews(c) {
  if (isBrasilContext(c) && (state.activeTab === "efficiency" || state.activeTab === "performance")) {
    const _btid = state.activeTab;
    if (el.tabContent) el.tabContent.innerHTML = `<div class="tab-aba-wrapper" data-tab-id="${_btid}">${brasilClusterUnavailableState()}</div>`;
    return;
  }
  renderTabBeforeBrasilScope(c);
};
window.renderTab = renderTab;

var renderKpisBeforeBrasilScope = renderKpis;
renderKpis = function renderKpisWithoutBrasilClusterViews(c) {
  if (isBrasilContext(c) && state.activeTab === "efficiency") {
    el.kpiGrid.classList.remove("overview-kpi-grid", "efficiency-kpi-grid");
    el.kpiGrid.style.display = "";
    el.kpiGrid.innerHTML = `
      <article class="kpi-card"><div class="kpi-head"><div class="kpi-label">${nationalReferenceLabel()}</div><div class="kpi-icon" aria-hidden="true">BR</div></div><div class="kpi-value">Comparativo nacional</div></article>
      <article class="kpi-card"><div class="kpi-head"><div class="kpi-label">Regra da aba</div><div class="kpi-icon" aria-hidden="true">PR</div></div><div class="kpi-value">Paraná</div></article>`;
    return;
  }
  renderKpisBeforeBrasilScope(c);
};
window.renderKpis = renderKpis;

function sanitizeBrasilClusterCopy(root) {
  if (!root) return;
  const replacements = [
    [/Média do cluster/g, nationalMeanLabel()],
    [/média do cluster/g, "média nacional"],
    [/Média do grupo/g, nationalMeanLabel()],
    [/média do grupo/g, "média nacional"],
    [/cluster ativo/g, "comparativo nacional"],
    [/Cluster ativo/g, nationalReferenceLabel()],
    [/grupo ativo/g, "comparativo nacional"],
    [/Grupo ativo/g, "Comparativo nacional"],
    [/grupo selecionado/g, "recorte selecionado"],
    [/Grupo selecionado/g, "Recorte selecionado"],
    [/grupo de comparação ativo/g, "comparativo nacional"],
    [/agrupamento dinâmico/g, "referência nacional"],
    [/Agrupamento dinâmico/g, "Referência nacional"],
    [/Comparação por cluster/g, "Comparativo nacional"],
    [/Mostrar apenas cluster/g, "Mostrar referência nacional"],
    [/Média Brasil/g, nationalMeanLabel()],
    [/Média do sistema/g, nationalMeanLabel()],
    [/média do sistema/g, "média nacional"],
    [/Sistema Brasil/g, nationalReferenceLabel()]
  ];
  const apply = text => replacements.reduce((acc, [pattern, value]) => acc.replace(pattern, value), text);
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, {
    acceptNode(node) {
      const parentName = node.parentElement?.tagName?.toLowerCase();
      if (["script", "style", "noscript"].includes(parentName)) return NodeFilter.FILTER_REJECT;
      return /cluster|Cluster|grupo|Grupo|agrupamento|Agrupamento|Média Brasil|Sistema Brasil/.test(node.nodeValue) ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  const nodes = [];
  while (walker.nextNode()) nodes.push(walker.currentNode);
  nodes.forEach(node => {
    if (node.nodeValue.includes(BR_CLUSTER_EMPTY_MESSAGE)) return;
    node.nodeValue = apply(node.nodeValue);
  });
  root.querySelectorAll?.("[title], [aria-label]").forEach(node => {
    ["title", "aria-label"].forEach(attr => {
      if (!node.hasAttribute(attr)) return;
      const value = node.getAttribute(attr);
      if (value.includes(BR_CLUSTER_EMPTY_MESSAGE)) return;
      node.setAttribute(attr, apply(value));
    });
  });
}

function removeBrasilGroupArtifacts(root) {
  const labels = allGroupLabelsSet();
  root.querySelectorAll(".qchip-strip, #comparisonClusterToggle").forEach(node => node.remove());
  root.querySelectorAll(".rank-group").forEach(node => { node.hidden = true; node.textContent = ""; });
  root.querySelectorAll(".rank-metric-selector").forEach(node => {
    const buttons = [...node.querySelectorAll("button")];
    if (buttons.length && buttons.every(btn => labels.has(btn.textContent.trim()))) node.hidden = true;
  });
  root.querySelectorAll("td span, .group-iees-item span, em").forEach(node => {
    if (labels.has(node.textContent.trim())) node.remove();
  });
  root.querySelectorAll("table").forEach(table => {
    const headerRow = table.tHead?.rows?.[0] || table.querySelector("tr");
    if (!headerRow) return;
    const indexes = [...headerRow.cells]
      .map((cell, index) => ({ text: cell.textContent.trim(), index }))
      .filter(item => /^(Grupo|Cluster)(\b|_|-)/i.test(item.text) || item.text === "Grupo" || item.text === "Cluster")
      .map(item => item.index);
    if (!indexes.length) return;
    [...table.rows].forEach(row => indexes.slice().reverse().forEach(index => row.cells[index]?.remove()));
  });
}

function applyBrasilScopeDomCleanup() {
  if (!isBrasilScope(state.scope)) return;
  setBrasilClusterControlsState(true);
  sanitizeBrasilClusterCopy(document.body);
  removeBrasilGroupArtifacts(document.body);
}

var renderBeforeBrasilScopeDomCleanup = render;
render = function renderWithBrasilScopeDomCleanup() {
  renderBeforeBrasilScopeDomCleanup();
  const schedule = window.requestAnimationFrame || (callback => window.setTimeout(callback, 0));
  schedule(() => window.setTimeout(applyBrasilScopeDomCleanup, 0));
};
window.render = render;

function exportCsvEscape(value) {
  if (value == null || Number.isNaN(value)) return "";
  const text = typeof value === "number" ? String(value).replace(".", ",") : String(value);
  return /[;"\n\r]/.test(text) ? `"${text.replace(/"/g, '""')}"` : text;
}

window.exportTabData = function exportTabData(tabIdOrOptions, maybeOptions = {}) {
  const options = typeof tabIdOrOptions === "object" && tabIdOrOptions !== null ? tabIdOrOptions : maybeOptions;
  const tabId = typeof tabIdOrOptions === "string" ? tabIdOrOptions : state.activeTab;
  const format = options.format === "json" ? "json" : "csv";
  const c = context();
  const groupBy = c.f.groupBy || "v1";
  const isBR = isBrasilContext(c);
  const indicators = tabIndicators[tabId] || tabIndicators.overview || [];

  const fonteLabel   = "dados_reais";

  const rows = (c.display && c.display.length ? c.display : c.ref && c.ref.length ? c.ref : c.all).map(u => {
    const values = {};
    indicators.forEach(ind => {
      const getter = IND_FIELD_MAP[ind.code];
      values[ind.label] = getter ? getter(u) : null;
    });
    return {
      aba: tabInfo[tabId]?.[1] || tabId,
      escopo: scopeDisplayName(c.f.scope),
      ano: c.f.year,
      fonte: fonteLabel,
      iees: u.sigla,
      nome: u.nome,
      regiao: u.region,
      municipio: u.municipality,
      grupo: isBR ? nationalReferenceLabel() : u.groups[groupBy] || "",
      indicadores: values
    };
  });

  const timestamp = new Date().toISOString().replace(/[:.]/g, "-").slice(0, 19);
  const extension = format === "json" ? "json" : "csv";
  const filename = `Painel_SETI_${tabId}_${c.f.year}_${scopeDisplayName(c.f.scope)}_${timestamp}.${extension}`;
  const headers = ["Aba", "Escopo", "Ano", "Fonte", "IEES", "Nome", "Regiao", "Municipio",
    isBR ? "Referencia" : `Grupo_${groupBy.toUpperCase()}`, ...indicators.map(ind => ind.label)];



  const csvBody = [
    headers.map(exportCsvEscape).join(";"),
    ...rows.map(row => [
      row.aba, row.escopo, row.ano, row.fonte, row.iees, row.nome,
      row.regiao, row.municipio, row.grupo,
      ...indicators.map(ind => row.indicadores[ind.label])
    ].map(exportCsvEscape).join(";"))
  ].join("\n");

  const content = format === "json"
    ? JSON.stringify({
        filtros: c.f, aba: tabId, fonte: fonteLabel,
        total: rows.length, linhas: rows
      }, null, 2)
    : csvBody;

  const payload = {
    filename, format,
    mime: format === "json" ? "application/json;charset=utf-8" : "text/csv;charset=utf-8",
    rowCount: rows.length,
    content
  };
  if (options.download === false) return payload;

  const blob = new Blob([format === "csv" ? "\ufeff" + content : content], { type: payload.mime });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
  return payload;
};

function waitForButtonAuditRender() {
  return new Promise(resolve => {
    const schedule = window.requestAnimationFrame || (callback => window.setTimeout(callback, 0));
    schedule(() => window.setTimeout(resolve, 40));
  });
}

window.runAudit = async function runAudit(options = {}) {
  const results = [];
  const ok  = (name, pass, detail = "") => results.push({ name, pass: Boolean(pass), detail: String(detail ?? "") });
  const val = id => document.getElementById(id)?.textContent?.trim() ?? "";
  const q   = sel => document.querySelector(sel);
  const qq  = sel => [...document.querySelectorAll(sel)];
  const pos = node => node ? getComputedStyle(node).position : "none";
  const optDisabled = v => Boolean(el.groupBy?.querySelector(`option[value="${v}"]`)?.disabled);

  // ── S1: Estado inicial — Paraná como padrão ──────────────────────
  ok("S1-01 scope inicial é Paraná",          state.scope === "Paraná",                  state.scope);
  ok("S1-02 groupBy inicial é v1",            el.groupBy?.value === "v1",                el.groupBy?.value);
  ok("S1-03 groupLevelFilter inicial é all",  el.groupLevelFilter?.value === "all",      el.groupLevelFilter?.value);
  ok("S1-04 botão Paraná ativo",              q("#scopeBtnPR")?.classList.contains("active"));

  // ── S2: Ordem de leitura vertical no DOM ─────────────────────────
  const kids = [...(q(".app-shell")?.children ?? [])];
  const idx  = cls => kids.findIndex(e => e.classList.contains(cls));
  const [iF, iT, iK, iD] = ["filter-bar-compact","tabs","kpi-grid","dashboard-layout"].map(idx);
  ok("S2-01 filter-bar-compact antes das tabs",      iF > -1 && iF < iT,  `${iF}<${iT}`);
  ok("S2-02 tabs antes do kpi-grid",                 iT < iK,             `${iT}<${iK}`);
  ok("S2-03 kpi-grid antes do dashboard-layout",     iK < iD,             `${iK}<${iD}`);

  // ── S3: Sticky — sem elementos fixed nem stickies extras ─────────
  ok("S3-01 filter-bar-compact é sticky",            pos(q(".filter-bar-compact")) === "sticky");
  ok("S3-02 tabs são sticky",                        pos(q(".tabs"))               === "sticky");
  ok("S3-03 institutional-header NÃO é sticky/fixed",
    !["sticky","fixed"].includes(pos(q(".institutional-header"))),           pos(q(".institutional-header")));
  ok("S3-04 page-footer NÃO é sticky/fixed",
    !["sticky","fixed"].includes(pos(q(".page-footer"))),                    pos(q(".page-footer")));
  ok("S3-05 sticky-context-bar ausente do DOM",      !q(".sticky-context-bar"));
  const fixedUnexpected = qq("body > *").filter(e => pos(e) === "fixed");
  ok("S3-06 nenhum elemento fixed em body > *",      fixedUnexpected.length === 0,
    fixedUnexpected.map(e => (e.id || e.className || e.tagName).toString().slice(0,40)).join(", ") || "ok");

  // ── S4: Escopo Brasil — clusters bloqueados ───────────────────────
  setScope("BR");
  await waitForButtonAuditRender();
  ok("S4-01 botão Brasil ativo",                     q("#scopeBtnBR")?.classList.contains("active"));
  ok("S4-02 aria-pressed Brasil true",               q("#scopeBtnBR")?.getAttribute("aria-pressed") === "true");
  ok("S4-03 PR-only options disabled",               ["v6","v7","v8"].every(optDisabled));
  ok("S4-04 groupBy voltou para v1",                 el.groupBy?.value === "v1",           el.groupBy?.value);
  ok("S4-05 groupLevelFilter = all",                 el.groupLevelFilter?.value === "all", el.groupLevelFilter?.value);
  ok("S4-06 quartilChips ocultos",                   Boolean(q("#quartilChips")?.hidden));
  ok("S4-07 filtros territoriais bloqueados",        PR_ONLY_FILTERS.every(id => document.getElementById(id)?.disabled));
  ok("S4-08 context().group é all",                  context().group === "all",            context().group);
  ok("S4-09 groupBy shell tem is-disabled",          Boolean(closestFilterShell(el.groupBy)?.classList.contains("is-disabled")));
  ok("S4-10 scopeBadge = Brasil",                    val("scopeBadge") === "Brasil",       val("scopeBadge"));
  ok("S4-11 footerScopeLabel = Brasil",              val("footerScopeLabel") === "Brasil", val("footerScopeLabel"));
  ok("S4-12 footerClusterLabel = Média nacional",    val("footerClusterLabel") === "Média nacional", val("footerClusterLabel"));
  ok("S4-13 activeClustersRow = Brasil · Visão nacional",
    val("activeClustersRow").includes("Brasil · Visão nacional"), val("activeClustersRow"));
  ok("S4-14 activeClusterLabel sem texto cluster",   !val("activeClusterLabel").toLowerCase().includes("cluster"), val("activeClusterLabel"));

  // ── S5: Escopo Paraná — clusters habilitados ──────────────────────
  setScope("PR");
  await waitForButtonAuditRender();
  ok("S5-01 botão Paraná ativo",                     q("#scopeBtnPR")?.classList.contains("active"));
  ok("S5-02 PR-only options liberadas",              ["v6","v7","v8"].every(v => !optDisabled(v)));
  ok("S5-03 groupBy shell sem is-disabled",          !closestFilterShell(el.groupBy)?.classList.contains("is-disabled"));
  ok("S5-04 activeClustersRow começa com Paraná · Cluster",
    val("activeClustersRow").startsWith("Paraná · Cluster"), val("activeClustersRow"));

  // ── S6: Abas — navegação e renderização ──────────────────────────
  for (const tabId of Object.keys(tabInfo)) {
    activateTab(tabId);
    await waitForButtonAuditRender();
    const actives = qq(".tab-button.is-active");
    ok(`S6 Aba ${tabId}: classe ativa única`,   actives.length === 1 && actives[0]?.dataset.tab === tabId);
    ok(`S6 Aba ${tabId}: título atualizado`,    val("activeTabTitle") === tabInfo[tabId][1]);
    ok(`S6 Aba ${tabId}: conteúdo renderizado`, Boolean(el.tabContent?.textContent?.trim()));
    ok(`S6 Aba ${tabId}: KPIs renderizados`,    Boolean(el.kpiGrid?.children?.length));
  }
  activateTab("overview");
  await waitForButtonAuditRender();

  // ── S7: Reset de filtros (a partir do escopo Brasil) ─────────────
  setScope("BR");
  setSelectValue(el.yearFilter, "2023");
  setSelectValue(el.groupBy, "v3");
  updateGroupOptions("v3");
  await waitForButtonAuditRender();
  resetAllFilters();
  await waitForButtonAuditRender();
  ok("S7-01 ano volta a 2024",              el.yearFilter?.value === "2024",       el.yearFilter?.value);
  ok("S7-02 groupBy volta a v1",            el.groupBy?.value === "v1",             el.groupBy?.value);
  ok("S7-03 groupLevelFilter volta a all",  el.groupLevelFilter?.value === "all",  el.groupLevelFilter?.value);
  ok("S7-04 escopo volta a Paraná",         state.scope === "Paraná",               state.scope);
  ok("S7-05 botão PR ativo após reset",     q("#scopeBtnPR")?.getAttribute("aria-pressed") === "true");

  // ── S8: Exportação ───────────────────────────────────────────────
  const exp = window.exportTabData?.({ download: false });
  ok("S8-01 exportar gera CSV sem download",
    exp?.format === "csv" && exp.content?.includes("IEES") && exp.rowCount > 0,
    exp ? `${exp.rowCount} linhas` : "exportTabData ausente");

  // ── S9: Sem erros de runtime ─────────────────────────────────────
  const errs = window.__auditRuntimeErrors ?? [];
  ok("S9-01 sem erros de runtime", errs.length === 0, errs.join("; ") || "ok");

  // ── Relatório ────────────────────────────────────────────────────
  const passed = results.filter(r => r.pass).length;
  const failed = results.filter(r => !r.pass);
  const report = { ok: failed.length === 0, passed, total: results.length, failed, results };

  if (!options.silent) {
    const tag = report.ok ? "✅ APROVADO" : "❌ REPROVADO";
    console.group(`%cSETI Audit — ${tag} (${passed}/${results.length})`,
      `color:${report.ok ? "green" : "crimson"};font-weight:bold;font-size:14px`);
    console.table(results.map(r => ({ "": r.pass ? "✓" : "✗", Teste: r.name, Detalhe: r.detail })));
    if (failed.length) console.warn("Falhas:", failed.map(r => r.name));
    console.groupEnd();
  }

  let marker = document.getElementById("auditTestResult");
  if (!marker) {
    marker = document.createElement("pre");
    marker.id = "auditTestResult";
    marker.hidden = true;
    document.body.appendChild(marker);
  }
  marker.dataset.ok     = String(report.ok);
  marker.dataset.passed = String(passed);
  marker.dataset.total  = String(results.length);
  marker.textContent    = JSON.stringify(report, null, 2);
  return report;
};

/* Alias para compatibilidade retroativa */
window.runButtonAuditTests = window.runAudit;

document.addEventListener("DOMContentLoaded", () => {
  window.__auditRuntimeErrors = [];
  window.addEventListener("error", e => window.__auditRuntimeErrors.push(e.message || "Erro de runtime"));
  window.addEventListener("unhandledrejection", e => window.__auditRuntimeErrors.push(String(e.reason || "Promessa rejeitada")));
  /* Para executar: abra o arquivo com ?audit=1 na URL, ou chame window.runAudit() no console */
  if (new URLSearchParams(window.location.search).get("audit") === "1") {
    window.setTimeout(() => window.runAudit({ silent: false }), 500);
  }
});

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
  "Comparador de Eficiência"
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
  var gridStyle = ies.length === 1
    ? ''
    : 'display:grid;grid-template-columns:repeat(auto-fill,minmax(560px,1fr));gap:1rem';
  return '<div style="' + gridStyle + '">' + cards.join('') + '</div>';
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

    var barsHtml = sorted.map(function(u, i) {
      var v = ind.get(u);
      var pct = clamp(((v - minV) / range) * 82 + 8, 8, 95);
      var fillStyle = i === 0
        ? "background:linear-gradient(90deg,#0f6e56,#2fb47c)"
        : i === sorted.length - 1
        ? "background:linear-gradient(90deg,var(--color-danger,#dc2626),#e46a62)"
        : "";
      return '<div class="bar-row"><span class="bar-name" title="' + u.nome + '">' + u.sigla +
             '</span><span class="bar-track"><span class="bar-fill" style="width:' + pct.toFixed(1) + '%;' + fillStyle +
             '"></span></span><span class="bar-value">' + formatCurrency(v) + '</span></div>';
    }).join("");

    return '<article class="visual-card"><h3>' + ind.label +
           '</h3><p class="card-subtitle">' + ind.sub + ' · verde = menor custo · vermelho = maior custo</p>' +
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

  function makeRow(label, getter, fmtFn, colorOpt) {
    var avgV = colorOpt ? avgOf(getter) : null;
    var cells = sorted.map(function(u) {
      var v = getter(u);
      var style = colorOpt ? cellStyle(v, avgV, colorOpt === "higher") : "";
      return '<td style="text-align:right;' + style + '">' + fmtFn(v) + '</td>';
    }).join("");
    return '<tr><td style="font-size:12px;padding:5px 8px;white-space:nowrap">' + label + '</td>' + cells + '</tr>';
  }

  function blockHead(label) {
    return '<tr style="background:#f3f4f6"><td colspan="' + (n + 1) + '" style="padding:6px 8px;font-size:11px;font-weight:700;color:#374151;letter-spacing:.03em;text-transform:uppercase">' + label + '</td></tr>';
  }

  // Calculated fields (not from u directly but derived)
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
    // Bloco A
    blockHead("A — Valores absolutos (R$ milhões)") +
    makeRow("Dotação Inicial (LOA)",    function(u){return u.dotacao_inicial;},      _fmtM, null) +
    makeRow("Orçamento Atualizado",     function(u){return u.orcamento_atualizado;}, _fmtM, null) +
    makeRow("Créditos Adicionais",      creditosAdicionais,                          _fmtM, null) +
    makeRow("Empenhado",                function(u){return u.empenhado;},            _fmtM, null) +
    makeRow("Liquidado",                function(u){return u.liquidado;},            _fmtM, null) +
    makeRow("Pago",                     function(u){return u.pago;},                 _fmtM, null) +
    makeRow("Saldo não executado",      saldoNaoExec,                               _fmtM, null) +
    // Bloco B
    blockHead("B — Taxas de execução (%)") +
    makeRow("Taxa de Execução — Empenho",     function(u){return u.tx_execucao_empenho;},    _fmtP, "higher") +
    makeRow("Taxa de Liquidação",             function(u){return u.tx_liquidacao;},           _fmtP, "higher") +
    makeRow("Taxa de Pagamento / Liquidado",  function(u){return u.tx_pagamento_liq;},        _fmtP, "higher") +
    makeRow("Grau de Contingenciamento",      function(u){return u.grau_contingenciamento;},  _fmtP, "lower") +
    makeRow("Variação Dotação / LOA",         function(u){return u.var_dotacao_loa;},         _fmtP, null) +
    // Bloco C
    blockHead("C — Composição da despesa (%)") +
    makeRow("Pessoal e Encargos",        function(u){return u.part_pessoal;},         _fmtP, null) +
    makeRow("Outras Desp. Correntes",    function(u){return u.part_outras_correntes;},_fmtP, null) +
    makeRow("Investimentos / Capital",   function(u){return u.part_capital;},         _fmtP, null) +
    // Bloco D
    blockHead("D — Composição por fonte de recurso (%)") +
    makeRow("Recursos Livres (Gr. 50)",  function(u){return u.part_recursos_livres;},     _fmtP, null) +
    makeRow("Fonte 500 — Tesouro",       function(u){return u.part_fonte_500;},           _fmtP, null) +
    makeRow("Fonte 501 — Arrecad. Própria", function(u){return u.part_fonte_501;},        _fmtP, null) +
    makeRow("Demais Vinculações (Gr. 70)",  function(u){return u.part_demais_vincul;},    _fmtP, null) +
    makeRow("Convênios União",           function(u){return u.part_convenios_uniao;},     _fmtP, null) +
    makeRow("Convênios Privados",        function(u){return u.part_convenios_privados;},  _fmtP, null) +
    makeRow("Emendas Federais",          function(u){return u.part_emendas_federais;},    _fmtP, null) +
    '</tbody>';

  // Rodapé: médias
  var avgRow = '<tfoot><tr style="border-top:2px solid var(--gray-200);background:#fafafa"><td style="font-size:12px;padding:5px 8px"><strong>Média das ' + n + ' IEES</strong></td>' +
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

  return '<div class="table-wrap" style="overflow-x:auto">' +
         '<h3>Execução Orçamentária 2024 — Relatório Despesa 8050</h3>' +
         '<p class="card-subtitle">IEES ordenadas por Liquidado (maior → menor) · Verde = acima da média · Vermelho = abaixo</p>' +
         '<table class="data-table" style="min-width:600px">' + thead + avgRow + tbody + '</table></div>';
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
         '<p class="card-subtitle">Orçamento Atualizado, Liquidado (eixo esq.) e Taxa de Liquidação % (eixo dir.) · Fonte: Despesa 8050</p>' +
         '</div></div>' +
         '<div style="margin:6px 0 10px;line-height:1.8">' + checkHtml + '</div>' +
         '<svg viewBox="0 0 ' + W + ' ' + H + '" width="100%" style="display:block;overflow:visible;font-family:DM Sans,sans-serif">' +
         grid + axes + axisTitles + xLab + yLabL + yLabR + linesHtml + legend +
         '</svg>' +
         '<p class="card-subtitle" style="margin-top:4px;font-size:11px">2026 = dados parciais do exercício em curso · clique nos checkboxes para selecionar/deselecionar IES</p>' +
         '</article>';
}

// ── Monkey-patch efficiencyBlock — novas seções 8050 ─────────────────────────
var _prevEfficiencyBlockOrc2 = efficiencyBlock;
efficiencyBlock = function orcamentariaBlock(title, c) {
  if (title === "Composição por Fonte de Despesa") return renderComposicaoFontesBlock(c);
  if (title === "Custo por Resultado (8050)")  return renderOrcCustoPorResultado(efficiencyRows(c));
  if (title === "Execução Orçamentária 8050")  return renderOrcExecucao(efficiencyRows(c));
  if (title === "Evolução 2024–2026")          return renderOrcEvolucao(c);
  if (title === "Comparador de Eficiência")    return renderEficienciaComparador(c);
  return _prevEfficiencyBlockOrc2(title, c);
};
window.efficiencyBlock = efficiencyBlock;

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
  var pesAvg = _compAvg(others.map(function(u) { return u.part_pessoal; }));

  var ctxGrid = '<div style="display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-bottom:16px">'+
    ctxBox("Custo por aluno",
      cpsRef != null ? formatCurrency(cpsRef) : "—",
      cpsAvg != null ? formatCurrency(cpsAvg) : "—",
      diffRow(cpsRef, cpsAvg, true))+
    ctxBox("Liquidado (R$ M)",
      ref.liquidado != null ? _fmtM(ref.liquidado) : "—",
      liqAvg != null ? _fmtM(liqAvg) : "—",
      diffRow(ref.liquidado, liqAvg, false))+
    ctxBox("% Pessoal",
      ref.part_pessoal != null ? _fmtP(ref.part_pessoal) : "—",
      pesAvg != null ? _fmtP(pesAvg) : "—",
      diffRow(ref.part_pessoal, pesAvg, false))+
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

  var thead = '<thead><tr>'+
    '<th style="text-align:left;min-width:170px">Indicador</th>'+
    '<th style="text-align:right">'+sigla+'</th>'+
    '<th style="text-align:right">Melhor das 7</th>'+
    '<th style="text-align:right">Média das 7</th>'+
    '<th style="text-align:right">Pior das 7</th>'+
    '<th style="text-align:right">Posição</th>'+
    '<th style="text-align:left;min-width:130px">Status</th>'+
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

  var table = '<div style="overflow-x:auto"><table class="data-table">'+thead+tbody+'</table></div>';

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
${execCard("Taxa de liquidação", avg(u => u.liquidation), "% liquidado / empenhado — média do recorte · ref.: ≥ 90%", 90, 80)}
${execCard("Participação de pessoal", avg(u => u.personnel), "% despesa pessoal / total liquidado — média do recorte", 100, 75)}
${execCard("Suplementação", avg(u => u.supplementation), "% crédito adicional / dotação inicial — média do recorte", 100, 50)}
</div>
<div class="chart-grid">
<article class="visual-card"><h3>Execução orçamentária por IEES</h3><p class="card-subtitle">% empenho / orçamento atualizado · referência: acima de 90% indica boa absorção</p>${bars(rows, u => u.execution, formatPercent)}</article>
<article class="visual-card"><h3>Taxa de liquidação por IEES</h3><p class="card-subtitle">% liquidado / empenhado · referência: ≥ 90%</p>${bars(rows, u => u.liquidation, formatPercent)}</article>
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

  return '<article class="visual-card">' +
    '<div class="visual-card-header">' +
    '<div><h3>Orçamento × Desempenho</h3>' +
    '<p class="card-subtitle">Cada ponto = uma IEES · tamanho ∝ número de alunos · linha tracejada = tendência linear · ' + (hasOfficialQuadrants() ? "quadrantes oficiais" : "quadrantes indisponíveis na planilha") + '</p></div>' +
    '<div style="display:flex;align-items:center;gap:8px">' +
    '<span style="font-size:12px;color:var(--gray-500)">Eixo Y:</span>' + selHtml +
    '</div></div>' +
    '<svg id="orcScatterSvg" viewBox="0 0 640 420" width="100%" style="display:block;overflow:visible;font-family:DM Sans,sans-serif">' +
    _buildOrcScatterInner(rows, yKey) +
    '</svg>' + omitNote + '</article>';
}

// ── Registra o bloco 11 e despacha pelo mesmo padrão dos blocos 8-10 ────────
tabBlocks.performance.unshift("Scatter Orçamento × Desempenho");

var _prevEffBlockSct = efficiencyBlock;
efficiencyBlock = function(title, c) {
  if (title === "Scatter Orçamento × Desempenho") return renderOrcScatter(c);
  return _prevEffBlockSct(title, c);
};
window.efficiencyBlock = efficiencyBlock;

// ─────────────────────────────────────────────────────────────────────────────
// FONTES E DEFINIÇÕES DOS INDICADORES — camada de apresentação (sem impacto no cálculo)
// Injeta ".data-source-label" e ícone "ⓘ" em cada card/gráfico/tabela após render().
// ─────────────────────────────────────────────────────────────────────────────
(function () {
  "use strict";

  // ── Regras: [regex-para-título, fonte, definição]. A primeira que casar vence.
  var _SRC_RULES = [

    // ── Aba 8 — D8050 ─────────────────────────────────────────────────────────
    [/scatter|orçamento\s*[×x]\s*desempenho/i,
      "SETI/PR 2024 (Despesa 8050) × INEP 2024",
      "Custo por estudante (R$/aluno, eixo X) cruzado com indicador de desempenho selecionável (eixo Y). Cada ponto representa uma IES; tamanho proporcional ao número de alunos matriculados. Linha tracejada = regressão linear por mínimos quadrados."],

    [/evolução.*orçament|orçament.*2024.*2026|2024.*2026/i,
      "SETI/PR 2024–2026 (Relatório da Despesa 8050)",
      "Evolução do orçamento atualizado e da liquidação (R$M, eixo esquerdo) e da taxa de liquidação (%, eixo direito) ao longo dos exercícios 2024, 2025 e 2026 (parcial)."],

    [/execução.*8050|8050.*execução|despesa.*8050|orçamentária.*2024/i,
      "SETI/PR 2024 (Relatório da Despesa 8050)",
      "Dados financeiros detalhados da Unidade Orçamentária 8050: dotação inicial (LOA), orçamento atualizado, empenho, liquidação, pagamento e composição por natureza de despesa e fonte de recurso."],

    [/custo.*egresso.*empregado|egresso.*empregado.*custo/i,
      "SETI/PR 2024 (Despesa 8050) × INEP 2024 × MTE/RAIS 2023–2024",
      "Orçamento liquidado dividido pelo número de graduados com inserção formal no mercado de trabalho (RAIS). Cruza dados financeiros com Censo da Educação Superior e RAIS."],

    [/custo.*programa.*pg.*nota|pgTop.*custo/i,
      "SETI/PR 2024 (Despesa 8050) × CAPES 2024",
      "Orçamento liquidado (R$) dividido pelo número de programas de pós-graduação com conceito CAPES 5, 6 ou 7 — indicativo de excelência em pesquisa."],

    [/custo.*programa.*pg|pg.*custo/i,
      "SETI/PR 2024 (Despesa 8050) × CAPES 2024",
      "Orçamento liquidado (R$) dividido pelo total de programas de pós-graduação stricto sensu ativos. Mede o custo médio por programa de mestrado ou doutorado."],

    [/custo.*vaga.*ocup|vaga.*ocup.*custo/i,
      "SETI/PR 2024 (Despesa 8050) × INEP 2024",
      "Orçamento liquidado dividido pelo número efetivo de vagas ocupadas (vagas × taxa de ocupação). Mede o custo por aluno ingressante que efetivamente preencheu uma vaga."],

    [/custo.*graduado|custo.*concluinte/i,
      "SETI/PR 2024 (Despesa 8050) × INEP 2024",
      "Orçamento liquidado (R$) dividido pelo número de concluintes do ano de referência. Indica o custo médio para formar um diplomado na IES."],

    [/custo.*aluno|custo.*matriculado/i,
      "SETI/PR 2024 (Despesa 8050) × INEP 2024",
      "Orçamento liquidado (R$) dividido pelo total de matrículas ativas. Mede o custo médio anual por estudante matriculado na IES."],

    // ── Orçamento geral ────────────────────────────────────────────────────────
    [/suplementa/i,
      "SETI/PR 2024 (Dados de Suplementação das Universidades — Paraná)",
      "Percentual do orçamento proveniente de suplementações (créditos adicionais aprovados ao longo do exercício) para cobrir despesas não previstas na dotação inicial da LOA."],

    [/IND-81|taxa.*exec.*orç|execu.*orçament/i,
      "SETI/PR 2024 (Relatório da Despesa 8050)",
      "Taxa de execução orçamentária: valor empenhado ÷ orçamento atualizado × 100. Mede a capacidade da IES de comprometer formalmente os recursos autorizados para o exercício."],

    [/IND-82|taxa.*liquid/i,
      "SETI/PR 2024 (Relatório da Despesa 8050)",
      "Taxa de liquidação: valor liquidado ÷ valor empenhado × 100. Indica a proporção do empenho efetivamente reconhecida como despesa incorrida."],

    [/orçamento.*liquid|liquidado|orçamento.*result|orçamento.*grupo/i,
      "SETI/PR 2024 (Relatório da Despesa 8050)",
      "Orçamento total liquidado pela IES no exercício (R$ milhões). Liquidação é o estágio em que a despesa é reconhecida formalmente após verificação do serviço ou bem entregue."],

    [/pessoal.*encargo|despesa.*pessoal|part.*pessoal/i,
      "SETI/PR 2024 (Relatório da Despesa 8050)",
      "Participação das despesas com pessoal (ativos, inativos e pensionistas) no total do orçamento liquidado. Indica a rigidez orçamentária da IES."],

    // ── Mercado de trabalho ────────────────────────────────────────────────────
    [/aderência.*cbo|cbo.*aderência/i,
      "MTE/RAIS 2023–2024 (Paraná)",
      "Percentual de egressos cujo vínculo formal de trabalho se enquadra no grupo CBO2 correspondente à área de formação. Mede a pertinência ocupacional da formação oferecida."],

    [/salário|média.*sal|remuner/i,
      "MTE/RAIS 2023–2024 (Paraná)",
      "Média salarial dos egressos com vínculo formal de emprego aderente ao CBO2 da área de formação, dois anos após a conclusão do curso."],

    [/inserção.*profis|profis.*inser|inserção.*paran|egressos.*empregados|inserção no paran/i,
      "MTE/RAIS 2023–2024 (Paraná)",
      "Percentual de egressos com vínculo formal de emprego no estado do Paraná, calculado dois anos após a conclusão do curso (base RAIS, filtro CBO2 por área de formação)."],

    // ── Quadro docente ─────────────────────────────────────────────────────────
    [/CRES|carga.*resid|resid.*expan|utilização.*cres/i,
      "SETI/PR 2024 (Base de dados para clusterização — LGU)",
      "Percentual da Carga Horária Residual de Expansão (CRES) utilizada sobre a capacidade total autorizada pela SETI. Indica a margem disponível para expansão do quadro docente efetivo."],

    [/ocupa.*quadro|quadro.*docent|taxa.*ocupa.*docent/i,
      "SETI/PR 2024 (Base de dados para clusterização — LGU)",
      "Taxa de ocupação das vagas docentes efetivas em relação ao total de vagas disponíveis. Valores próximos de 100% indicam quadro pleno; acima disso, pressão sobre o efetivo."],

    // ── Qualidade acadêmica ────────────────────────────────────────────────────
    [/pós.*graduação.*capes|capes.*pós|conceito.*capes|pós-graduação/i,
      "CAPES 2024 (Avaliação dos Programas de Pós-Graduação)",
      "Conceito médio dos programas de pós-graduação stricto sensu avaliados pela CAPES (escala 1 a 7). Programas com conceito ≥ 5 têm reconhecimento de excelência internacional."],

    [/cnpq|capta.*pesq|pesquisa.*cnpq/i,
      "CNPq 2024 (Grupos de pesquisa e fomento)",
      "Valor total de fomento à pesquisa captado junto ao CNPq no ano de referência, incluindo bolsas individuais e projetos institucionais. Indica capacidade de captação de recursos externos para C&T."],

    [/doutora|qualifica.*doc|docent.*doutor/i,
      "INEP 2024 (Censo da Educação Superior — IES)",
      "Percentual de docentes em exercício com titulação de doutorado. Indica o nível de qualificação do corpo docente e é critério nos processos regulatórios do MEC."],

    // ── Acesso e oferta ────────────────────────────────────────────────────────
    [/eficiência.*oferta|custo.*por.*vaga\b/i,
      "INEP 2024 × SETI/PR 2024 (Relatório da Despesa 8050)",
      "Relação entre o orçamento liquidado e o número de vagas ofertadas. Mede o custo médio para disponibilizar uma vaga de graduação, independentemente do preenchimento."],

    [/IND-26|ocupa.*vagas|vagas.*ocupa|taxa.*ocup/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Relação entre ingressantes efetivos e vagas ofertadas no período de referência. Mede o aproveitamento da capacidade instalada; valores abaixo de 70% indicam ociosidade relevante."],

    [/escala.*oferta|participa.*oferta|total.*vagas/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Total de vagas autorizadas para ingresso em cursos de graduação presencial e a distância no ano de referência."],

    [/cursos?|composição.*oferta/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Número total de cursos de graduação ativos (presencial e EaD). Indica a diversidade e a abrangência da oferta acadêmica da IES."],

    // ── Permanência ────────────────────────────────────────────────────────────
    [/funil.*format|format.*funil/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Representação do fluxo estudantil: ingressantes → matrículas ativas → concluintes. Evidencia as perdas em cada etapa do percurso formativo da IES."],

    [/desvincul|evasão|abandon|dropout/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Percentual de alunos que abandonam o curso sem concluir em relação às matrículas ativas do período. Proxy de evasão, calculado por coorte anual."],

    [/taxa.*conclu|conclu.*taxa/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Percentual de estudantes matriculados que obtiveram diploma no período, em relação ao total de matrículas ativas. Mede a eficácia formativa da IES."],

    // ── Estudantes / ingresso ──────────────────────────────────────────────────
    [/total.*estudantes|estudantes.*total/i,
      "INEP 2024 (Censo da Educação Superior — Cursos)",
      "Total de estudantes com matrícula ativa em cursos de graduação presencial e a distância no ano de referência."],

    // ── Eficiência relativa ────────────────────────────────────────────────────
    [/eficiência relativa|matriz.*efic|estrutura.*gastos/i,
      "INEP 2024 × SETI/PR 2024 (Relatório da Despesa 8050)",
      "Cruzamento entre esforço orçamentário relativo ao grupo (eixo X) e resultado relativo ao grupo (eixo Y). Quadrantes só são exibidos quando houver critério oficial na planilha/JSON."],

    // ── Genérico resultado ─────────────────────────────────────────────────────
    [/resultado.*institu|institu.*resultado/i,
      "INEP 2024 (Censo da Educação Superior)",
      "Indicador de resultado selecionado para comparação das IES no recorte ativo. A variável exata é escolhida pelo filtro de resultado na barra de filtros."],
  ];

  function _matchSrc(text) {
    var t = String(text || "");
    for (var i = 0; i < _SRC_RULES.length; i++) {
      if (_SRC_RULES[i][0].test(t)) return _SRC_RULES[i];
    }
    return null;
  }

  function _injectAnnotations() {
    // ── KPI cards ────────────────────────────────────────────────────────────
    document.querySelectorAll(".kpi-card:not([data-src-done])").forEach(function (card) {
      var labelEl = card.querySelector(".kpi-label");
      if (!labelEl) return;
      var rule = _matchSrc(labelEl.textContent);
      if (!rule) return;
      card.setAttribute("data-src-done", "1");

      var icon = document.createElement("span");
      icon.className = "ind-info";
      icon.setAttribute("tabindex", "0");
      icon.setAttribute("aria-label", rule[2]);
      icon.innerHTML = "ⓘ<span class='ind-tooltip'>" + rule[2] + "</span>";
      labelEl.appendChild(icon);

      var lbl = document.createElement("div");
      lbl.className = "data-source-label";
      lbl.textContent = "Fonte: " + rule[1];
      card.appendChild(lbl);
    });

    // ── Visual / score / table-wrap / matrix cards ───────────────────────────
    var sel = ".visual-card:not([data-src-done]),.score-card:not([data-src-done]),.table-wrap:not([data-src-done]),.matrix-panel:not([data-src-done])";
    document.querySelectorAll(sel).forEach(function (card) {
      var h3 = card.querySelector("h3");
      if (!h3) return;
      var rule = _matchSrc(h3.textContent);
      if (!rule) return;
      card.setAttribute("data-src-done", "1");

      var icon = document.createElement("span");
      icon.className = "ind-info";
      icon.setAttribute("tabindex", "0");
      icon.setAttribute("aria-label", rule[2]);
      icon.innerHTML = "ⓘ<span class='ind-tooltip'>" + rule[2] + "</span>";
      h3.appendChild(icon);

      var lbl = document.createElement("div");
      lbl.className = "data-source-label";
      lbl.textContent = "Fonte: " + rule[1];
      card.appendChild(lbl);
    });
  }

  // Patch render() — injeta anotações após cada ciclo de renderização
  var _prevRenderSrc = render;
  render = function () {
    _prevRenderSrc.apply(this, arguments);
    _injectAnnotations();
  };
  window.render = render;

  // Expõe para chamadas externas (e.g., setOrcScatterY não chama render())
  window._injectAnnotations = _injectAnnotations;
}());

// ── Sincroniza opções do yearFilter com a aba ativa (camada mais externa) ────
// Deve ficar após todos os overrides anteriores para envolver toda a cadeia.
(function () {
  var _prevRenderYear = render;
  render = function renderWithYearFilterSync() {
    updateYearFilterOptions(state.activeTab);
    _prevRenderYear.apply(this, arguments);
  };
  window.render = render;
}());

