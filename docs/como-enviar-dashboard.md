# Como enviar o painel atualizado

## Opção recomendada: arquivo único

Use o arquivo da raiz do projeto:

```text
dashboard.html
```

Esse arquivo já contém o painel, os estilos, os logos e o `data/seti_precomputed.json` embutidos. A pessoa pode abrir com duplo clique, sem rodar Python e sem enviar a pasta `data`.

Sempre que o JSON for atualizado, gere novamente o arquivo único:

```bash
python pipeline/export_standalone.py
```

Depois disso, envie o novo `dashboard.html`.

## Opção completa do projeto

Se a pessoa também precisar acessar as bases, scripts e pipeline, envie a pasta inteira do projeto. Nesse caso, a forma mais estável de abrir o painel é:

```bash
python serve.py
```

O endereço aberto será:

```text
http://localhost:8080/dashboard/v8_painel_seti_html.html
```

