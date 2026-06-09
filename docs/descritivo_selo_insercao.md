## Base SELO - Paraná

| ✔ 11 indicadores calculados a partir desta base |

| Campo | Descrição / Detalhe |
|---|---|
| **O que é** | Base de avaliação de qualidade orçamentária das universidades estaduais do Paraná, extraída do BI SELO-PR (Sistema de Excelência em Liderança Orçamentária Paraná). Contém notas bimestrais (B1–B6) por indicador, organizadas em três eixos: (1) Eficiência na Execução Orçamentária (inds. 1.1 Empenho, 1.2 Liquidação, 1.3 Empenho Liquidado, 1.4 Foco em Ações Finalísticas), (2) Racionalidade na Gestão de Créditos Adicionais (inds. 2.1–2.3) e (3) Passivos de Exercícios Anteriores (inds. 3.1–3.4). A Nota Final é expressa na escala 0–100 e pondera as notas de cada bimestre conforme pesos predefinidos (B1=10%, B2=15%, B3=15%, B4=25%, B5=25%, B6=10%). |
| **Arquivo** | Base SELO - Paraná.xlsx |
| **Fonte** | SETI / Secretaria de Estado da Fazenda do Paraná (SEFA) — BI SELO-PR; fonte dos dados financeiros subjacentes: SIAFIC. |
| **Escopo geográfico** | Paraná — UEL, UEM, UENP, UEPG, UNESPAR, UNICENTRO e UNIOESTE. |
| **Como atualizar** | 1. Solicitar à SETI/SEFA nova extração do BI SELO-PR para o exercício desejado. 2. Acrescentar as linhas do novo exercício nas abas Resumo e Base_Bimestral. 3. Executar o pipeline (assemble_final.py) para regenerar o JSON. |
| **Periodicidade** | Bimestral — atualizado a cada bimestre do exercício. |
| **Nível de desagregação** | Indicador → Bimestre → IES → Ano → Paraná |
