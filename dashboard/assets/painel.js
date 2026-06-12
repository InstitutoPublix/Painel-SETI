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
    "formula": "Liquidado / Orçamento Atualizado × 100",
    "unidade": "Percentual",
    "periodicidade": "Anual / Trimestral",
    "polaridade": "Quanto maior, melhor",
    "desagregacoes": "Por IES; por GND; por Fonte de Recursos",
    "dimensao": "Paraná",
    "fonte": "Relatório da Despesa 8050",
    "serie": "2018– Abril 2026",
    "atualizacao": "2026-04-02",
    "ocde": "Sem correspondência direta",
    "uso": "Mede a proporção do orçamento atualizado efetivamente reconhecida como despesa incorrida.",
    "link": "Dados internos da SETI /  SEFA / https://www.transparencia.pr.gov.br",
    "observacoes": "Taxa de liquidação muito abaixo da taxa de empenho pode indicar restos a pagar elevados."
  },
  "ind83": {
    "codigo": 83,
    "nome": "Taxa de Pagamento sobre Liquidado",
    "categoria": "Eficiência Orçamentária",
    "formula": "Pago / Orçamento Atualizado × 100",
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
    const chip = e.target.closest(".quartil-chips .qchip, .side-group-filter .qchip");
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

// Metadados de cobertura por aba — fonte e nota explicativa para o usuário
var TAB_YEAR_CONTEXT = {
  overview:   { fonte: "INEP · Censo da Educação Superior",                    nota: null },
  comparison: { fonte: "INEP · Censo da Educação Superior",                    nota: null },
  access:     { fonte: "INEP · Censo da Educação Superior",                    nota: null },
  retention:  { fonte: "INEP · Censo da Educação Superior",                    nota: null },
  quality:    { fonte: "INEP · Censo da Educação Superior + CAPES/Sucupira",   nota: null },
  faculty:    { fonte: "SETI · Base Docentes PR",                              nota: null },
  employment: {
    fonte: "SETI/RAIS · Cruzamento egressos × mercado formal",
    nota: "2023 = egressos coorte 2020 cruzados com RAIS 2023 · 2024 = egressos coorte 2021 cruzados com RAIS 2024"
  },
  efficiency: {
    fonte: "SEFA · Relatório da Despesa 8050 · Base SELO-PR",
    nota: "2026 = exercício em andamento — dados parciais até a data de extração"
  },
  performance: {
    fonte: "SETI/RAIS · Cruzamento egressos × mercado formal + INEP",
    nota: "2023 = egressos coorte 2020 cruzados com RAIS 2023 · 2024 = egressos coorte 2021 cruzados com RAIS 2024"
  },
};

function updateYearFilterOptions(tabId) {
  const sel = el && el.yearFilter;
  if (!sel) return;

  // ── atualizar options (comportamento original) ────────────────────────────
  const years = TAB_YEAR_COVERAGE[tabId] || [2020, 2021, 2022, 2023, 2024];
  const currentVal = parseInt(sel.value, 10);
  sel.innerHTML = "";
  years.slice().reverse().forEach(y => {
    const label = y === 2026 ? "2026 (em andamento)" : String(y);
    sel.appendChild(new Option(label, String(y)));
  });
  const maxYear = Math.max(...years);

  // ── default por aba: ao entrar na efficiency, forçar 2026 ─────────────────
  const TAB_YEAR_DEFAULTS = { efficiency: "2026" };
  const isTabSwitch = tabId !== updateYearFilterOptions._prevTab;
  updateYearFilterOptions._prevTab = tabId;
  const tabDefault = TAB_YEAR_DEFAULTS[tabId];
  if (isTabSwitch && tabDefault && years.includes(parseInt(tabDefault, 10))) {
    sel.value = tabDefault;
  } else {
    sel.value = years.includes(currentVal) ? String(currentVal) : String(maxYear);
  }

  // ── nota contextual abaixo do select ─────────────────────────────────────
  const ctx = TAB_YEAR_CONTEXT[tabId];
  const container = sel.closest(".filter-bar-left") || sel.parentElement;
  if (!container) return;

  let note = document.getElementById("yearContextNote");
  if (!note) {
    note = document.createElement("div");
    note.id = "yearContextNote";
    container.appendChild(note);
  }

  if (!ctx) { note.innerHTML = ""; return; }

  const minYear = Math.min(...years);
  const cobertura = minYear === maxYear ? String(maxYear) : minYear + "–" + maxYear;

  var html = "<span>Cobertura: <strong>" + cobertura + "</strong></span>"
           + " &middot; <span>Fonte: <strong>" + ctx.fonte + "</strong></span>";
  if (ctx.nota) {
    html += "<br><em>" + ctx.nota + "</em>";
  }
  note.innerHTML = html;
}
window.updateYearFilterOptions = updateYearFilterOptions;

// Helper: gera o HTML do period-pill com fonte da aba ativa
function _periodPillHTML(year, scope) {
  var ctx = TAB_YEAR_CONTEXT[state.activeTab];
  var fonte = ctx ? ' <span style="font-weight:400;opacity:0.75;">· ' + ctx.fonte + '</span>' : '';
  return 'Ano base ' + year + ' · Escopo ' + scope + fonte;
}

function renderTop(c){const t=tabInfo[state.activeTab];el.activeTabKicker.textContent=t[0];el.activeTabTitle.textContent=t[1];el.activeTabDescription.textContent=t[2];el.periodPill.innerHTML=_periodPillHTML(c.f.year, c.f.scope);el.scopeLabel.textContent=c.selected?`${c.selected.sigla} | ${c.group}`:c.group==="all"?"Sistema estadual":`Grupo ${c.group}`;updateActiveClusterLabel(c);}
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
  return `<article class="visual-card cf-card" data-ies-fonte="${u.sigla}">
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
  el.periodPill.innerHTML = _periodPillHTML(c.f.year, c.f.scope);
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
    <article class="visual-card"><h3>IND-82 · Taxa de liquidação</h3><p class="card-subtitle">Liquidado / Orçamento Atualizado × 100. Fonte: Relatório da Despesa 8050.</p>${bars(d, u => u.liquidation, formatPercent)}</article>
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
  el.periodPill.innerHTML = _periodPillHTML(c.f.year, c.f.scope);
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

// overviewMetricOptions é definido em painel-aba1-panorama.js (carregado depois);
// declarado aqui apenas para hoisting de var antes da renderização.
var overviewMetricOptions = {};

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
    const brTag = "";
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
    const noteHtml = '<div style="margin-top:14px;padding:12px 16px;background:var(--surface-2,#f5f5f5);border-radius:8px;font-size:0.80rem;color:var(--text-secondary,#666);line-height:1.65;"><strong style="display:block;margin-bottom:6px;color:var(--text-primary,#333);">Como ler esta tabela</strong><ul style="margin:0;padding-left:18px;"><li><strong>Custo relativo</strong> &#8212; quanto a IES gasta por aluno comparado à média das universidades do mesmo cluster. Fórmula: (custo da IES &#8722; média do cluster) &#247; média do cluster &#215; 100. Fonte: orçamento liquidado (Relatório da Despesa 8050, SETI/SEFA) &#247; matrículas ativas (INEP, Censo da Educação Superior).</li><li style="margin-top:6px;"><strong>Resultado relativo</strong> &#8212; desvio do indicador de desempenho selecionado (ex: taxa de conclusão, ocupação de vagas) em relação à média do cluster. Mesmo cálculo proporcional. Fontes variam conforme o indicador exibido na coluna &#8220;Indicador usado&#8221;.</li><li style="margin-top:6px;"><strong>Classificação</strong> &#8212; combinação das duas dimensões: uma IES com gasto abaixo da média e resultado acima entrega maior eficiência relativa dentro do seu grupo de referência.</li></ul></div>';
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

comparisonIndicatorSets = typeof buildComparisonIndicatorSets === "function" ? buildComparisonIndicatorSets() : {};

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
if (typeof setComparisonDimension === "function") window.setComparisonDimension = setComparisonDimension;
if (typeof setRankingLocalDimension === "function") window.setRankingLocalDimension = setRankingLocalDimension;

function renderComparisonTab(c, summary) {
  const dimBar = renderComparisonDimensionBar();
  const blocks = tabBlocks["comparison"] || [];
  return `<div class="tab-aba-wrapper" data-tab-id="comparison">${summary}${dimBar}${blocks.map((title, i) => renderBlock(i + 1, title, comparisonBlock(title, c))).join("")}</div>`;
}
if (typeof setAccessCourseTypeFilter === "function") window.setAccessCourseTypeFilter = setAccessCourseTypeFilter;
if (typeof setSemaphoreYear === "function") window.setSemaphoreYear = setSemaphoreYear;
if (typeof setDistributionCourseType === "function") window.setDistributionCourseType = setDistributionCourseType;
if (typeof setDayNightFilter === "function") window.setDayNightFilter = setDayNightFilter;
if (typeof setSynthTableGroup === "function") window.setSynthTableGroup = setSynthTableGroup;
if (typeof setSynthSort === "function") window.setSynthSort = setSynthSort;

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

/* Aba 3 bloco 3 e Aba 4 - permanência/formação orientadas a cluster */
var previousRenderBlockContentAccessRetention = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "access" && title.includes("Distribuição")) return accessTerritory(c);
  if (tabId === "retention") return retentionBlock(title, c);
  return previousRenderBlockContentAccessRetention(tabId, title, c);
};

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
if (typeof setRetentionCourseType === "function") window.setRetentionCourseType = setRetentionCourseType;

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

/* Aba 5 - Qualidade, Pesquisa e Pós-Graduação */
var previousRenderBlockContentQuality = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "quality") return qualityBlock(title, c);
  return previousRenderBlockContentQuality(tabId, title, c);
};

function estimatedFaculty(u) {
  return Math.max(120, Math.round(u.students / 15));
}

/* Aba 6 - Corpo Docente e Capacidade Operacional (SETI/LGU - Paraná) */
var previousRenderBlockContentFaculty = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "faculty") return facultyBlock(title, c);
  return previousRenderBlockContentFaculty(tabId, title, c);
};

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
  el.periodPill.innerHTML = _periodPillHTML(c.f.year, scopeText);
  el.scopeLabel.textContent = c.selected ? `${c.selected.sigla} | ${c.group}` : c.group === "all" ? "Sistema estadual" : `Grupo ${c.group}`;
  updateActiveClusterLabel(c);
  updateContextBar(c);
  updateFooter(c);
  updateTabIndicator();
  updateQuartilChips();
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
var previousRenderBlockContentEmployment = renderBlockContent;
renderBlockContent = function(tabId, title, c) {
  if (tabId === "employment") return employmentBlock(title, c);
  return previousRenderBlockContentEmployment(tabId, title, c);
};

var _EMP_COLORS = {
  uel:'#1e40af', uem:'#0891b2', uepg:'#065f46',
  unioeste:'#7c3aed', unicentro:'#b45309',
  uenp:'#be123c', unespar:'#0f766e'
};

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

/* Aba 8 - Orçamento, Desempenho e Eficiência Relativa (Relatório Despesa 8050) */
state.efficiencyMode = state.efficiencyMode || "eficiencia";
state.efficiencyResult = state.efficiencyResult || "completion";
state.efficiencyDefaultApplied = state.efficiencyDefaultApplied || false;
state.seloAno = state.seloAno || "2025";

window.setEfficiencyMode = function setEfficiencyMode(mode) {
  state.efficiencyMode = mode === "eficiencia" ? "eficiencia" : "movimentacao";
  render();
};

window.setEfficiencyResult = function setEfficiencyResult(value) {
  state.efficiencyResult = budgetResultOptions[value] ? value : "completion";
  render();
};

(function () {
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
}());

(function () {
  var previousRenderEfficiencyDefaults = render;
  render = function renderWithEfficiencyDefaults() {
    applyEfficiencyDefaults();
    previousRenderEfficiencyDefaults();
  };
}());

(function () {
  var previousRenderBlockContentEfficiency = renderBlockContent;
  renderBlockContent = function(tabId, title, c) {
    if (tabId === "efficiency") {
      if (title === "Avaliação SELO-PR") return renderSeloBlock(c);
      return efficiencyBlock(title, c);
    }
    if (tabId === "performance") return performanceBlock(title, c);
    return previousRenderBlockContentEfficiency(tabId, title, c);
  };
}());

(function () {
  var previousRenderNumberedTabEfficiency = renderNumberedTab;
  renderNumberedTab = function(tabId, c, summary = "") {
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
}());

(function () {
var previousRenderKpisEfficiency = renderKpis;
renderKpis = function(c) {
  if (state.activeTab !== "efficiency") return previousRenderKpisEfficiency(c);
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
}());

(function () {
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
}());

(function () {
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
}());

(function () {
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
}());

// ── fim PILOTO: helpers de cálculo ──────────────────────────────────────────

// budgetResultOptions, Comparador Direto (_cdRows/_CD_IES/_CD_INDS, setComparadorDireto,
// runComparadorDireto) e estimatedFaculty agora vivem em painel-aba9-desempenho.js.

(function () {
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
}());

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
  state.efficiencyMode = "eficiencia";
  state.efficiencyResult = "completion";
  state.efficiencyDefaultApplied = false;
  updateGroupOptions("v1");
  setScope("PR", { render: false });
  updateActiveTabFilters();
  if (options.render !== false) render();
}
window.resetAllFilters = resetAllFilters;

const TABS_WITH_BRASIL = new Set(["overview","comparison","access","retention","quality"]);

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
  if (el.periodPill) el.periodPill.innerHTML = _periodPillHTML(c.f.year, scopeDisplayName(c.f.scope));
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
    if (el.periodPill) el.periodPill.innerHTML = _periodPillHTML(c.f.year, 'Brasil');
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

// comparisonTable, comparisonRanking e comparisonRadar vivem em painel-aba2-comparacao.js
// e já tratam o escopo Brasil internamente (isBrasilContext).

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

// ── ABA 8: Orçamentária (dados 8050, scatter, comparador, bloco 11) ─────────
// Implementação completa movida para painel-aba8-orcamentaria.js.

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
      "Taxa de liquidação: liquidado ÷ orçamento atualizado × 100. Mede a proporção do orçamento atualizado efetivamente reconhecida como despesa incorrida."],

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

// ── Dispatcher canônico das abas modularizadas ────────────────────────────────
// Garante que renderBlockContent utilize as versões dos arquivos por-aba (aba1–aba9)
// quando disponíveis, caindo de volta à infraestrutura de painel.js caso contrário.
(function () {
  var renderBlockContentInfra = renderBlockContent;

  function modularTabBlockRenderer(tabId) {
    if (tabId === "overview"    && typeof overviewBlock    === "function") return overviewBlock;
    if (tabId === "comparison"  && typeof comparisonBlock  === "function") return comparisonBlock;
    if (tabId === "access"      && typeof accessBlock      === "function") return accessBlock;
    if (tabId === "retention"   && typeof retentionBlock   === "function") return retentionBlock;
    if (tabId === "quality"     && typeof qualityBlock     === "function") return qualityBlock;
    if (tabId === "faculty"     && typeof facultyBlock     === "function") return facultyBlock;
    if (tabId === "employment"  && typeof employmentBlock  === "function") return employmentBlock;
    if (tabId === "efficiency"  && typeof efficiencyBlock  === "function") return efficiencyBlock;
    if (tabId === "performance" && typeof performanceBlock === "function") return performanceBlock;
    return null;
  }

  window.modularTabBlockRenderer = modularTabBlockRenderer;

  renderBlockContent = function renderBlockContentCanonical(tabId, title, c) {
    var renderer = modularTabBlockRenderer(tabId);
    return renderer ? renderer(title, c) : renderBlockContentInfra(tabId, title, c);
  };
  window.renderBlockContent = renderBlockContent;
}());

