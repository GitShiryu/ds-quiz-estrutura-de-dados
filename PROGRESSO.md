# PROGRESSO — DS Quiz (Estrutura de Dados)

Arquivo de retomada: se a sessão cair, leia este arquivo primeiro.

Repositório: https://github.com/GitShiryu/ds-quiz-estrutura-de-dados (público)

## Em andamento

Nada em andamento.

## Próximos passos

1. Quando houver deploy público, acrescentar o quiz na lista de projetos dos outros sites
   que já exibem os cards. Hoje ele não entra: a regra é só URL pública verificada.
2. **Avisar o dono**: o link do Já Tô Chegando no portfólio (`shopdigitalbrasil.com`) está
   quebrado para qualquer visitante — o DNS do domínio e do `www` resolve para `127.0.0.1`,
   confirmado pelos resolvedores públicos 8.8.8.8 e 1.1.1.1. Por isso o projeto ficou de
   fora dos cards. Decidir se corrige o DNS ou troca o link no portfólio.
3. Banco de questões tem 9 itens; ampliar quando houver material novo (basta editar
   `questionsDB` no topo do `script.js`, o resto se ajusta sozinho).
4. Avaliar embaralhar a ordem das alternativas (hoje o gabarito é um índice fixo, então
   embaralhar exige remapear `correct`).

## Decisões do dono

- 2026-10-30: o projeto entra no portfólio (https://romulofullstack.duckdns.org), com print
  do sistema no banner, igual aos outros projetos.
- 2026-10-30: repositório no GitHub deve ser **público**.
- Contato público do dono: eliromulo@gmail.com (sem telefone).
- A versão de arquivo único com Tailwind virou histórico em `legado/`; quem manda é a
  versão da raiz.

## Concluído

**2026-10-30 — Cards "Conheça outros projetos"**

- Seção no fim do app (fora dos painéis, aparece em todas as abas), no padrão do Saber+:
  card com print, status, descrição, stack e "Visitar o site", mais o link do portfólio.
- 7 cards: The Lost Goddess, Vigia Cidadão, Apuração 2º Turno 2026, Saber+, AdvPilot,
  Central do Despachante e Sistemas PDV/ERP.
- **Já Tô Chegando ficou de fora**: `shopdigitalbrasil.com` não resolve publicamente
  (DNS aponta para 127.0.0.1). A regra é só URL pública verificada.
- Saber+ não tinha print; capturei um e guardei também em `MagenCode/images/project-saber.png`.
- Imagens redimensionadas para 640px de largura (283 KB no total, contra ~1,1 MB originais).
- VERIFICADO: as 8 URLs testadas com `curl` (7 deram 200, shopdigitalbrasil deu falha de
  conexão); suíte de testes seguiu em 57/57; seção conferida por print.

**2026-10-30 — Melhorias, documentação e publicação no GitHub**

Commits `97afca7` (inicial) e `054fcf5` (LF no runner), ambos no `main` do repositório
público.

Melhorias:
- Sequência de dias ("🔥 N dias consecutivos") passou a ser contada de verdade pela data da
  última visita, em vez de estar fixa em 12 no HTML. A regra ficou numa função pura
  (`proximaSequencia`), separada do storage e do relógio, para poder ser testada.
- Rodada "Revisar erros": card na aba Categorias (só aparece quando há erro) e botão na tela
  final. Monta uma rodada com as questões erradas e as libera para responder de novo.
- Atalhos de teclado na aba Início: `A`–`E` / `1`–`5` escolhem, `Enter` confirma e avança,
  `←` volta. Não agem fora da aba Início.
- Acessibilidade: foco visível, link "pular para o conteúdo", `role="tab"` e `aria-selected`
  no menu, `aria-live` na explicação, `role="progressbar"` nas barras, `aria-pressed` nas
  alternativas e `prefers-reduced-motion`.
- Layout responsivo (a partir de 860px de largura): menu vira linha, cabeçalho empilha,
  botões ocupam a largura toda e o ranking reorganiza as colunas em áreas de grid.
- Explicação fica vermelha quando a resposta está errada, em vez de verde sempre.
- Tela final mostra percentual e um recado conforme o desempenho.
- "Zerar progresso" passou a pedir confirmação.

Documentação e repositório:
- `README.md` com como rodar, o que tem, como testar, estrutura, como adicionar questão e
  dois prints (`docs/tela-quiz.png`, `docs/tela-categorias.png`).
- `LICENSE` (MIT — o GitHub detectou corretamente), `.gitignore` e `.gitattributes`
  (força LF no `teste/rodar-testes.sh`, senão o CRLF do Windows quebraria em Linux).
- `legado/ds_quiz_estrutura_de_dados.html`: protótipo original movido para lá.
- Topics configurados no repositório.

VERIFICADO de verdade:
- Suíte `teste/rodar-testes.sh`: **57/57 passaram**, exit 0.
- A suíte foi conferida contra falso-positivo: com uma asserção quebrada de propósito, ela
  reporta 56/57 e sai com código 1.
- Layout estreito medido no Chrome (`scrollWidth == clientWidth`, sem overflow) e conferido
  por print. Observação: o Chrome headless tem viewport mínimo de 485px, então larguras
  menores que isso não foram medidas — o layout é fluido, mas 360px não foi testado.
- Repositório conferido pela API: `PUBLIC`, branch `main`, licença `MIT`, 11 itens na raiz,
  imagem do README retornando 200 no raw.
- Portfólio republicado e conferido no ar: link do GitHub presente na página e banner
  servindo 200 com o tamanho novo.

**2026-10-30 — Abas Categorias e Ranking + correções**

- `switchTab()` implementado (não existia; os botões do menu davam erro no console).
- Corrigidos: botão "Pular" sem `onclick`; pontuação que dobrava ao voltar numa questão;
  `.view-panel` sem regra CSS; tela final que afirmava "nota máxima" independente do
  desempenho; nível fixo no HTML.
- Verificado: 26 checagens automatizadas no Chrome headless, todas passando.

**2026-10-30 — Entrada no portfólio**

- Card "DS Quiz — Estrutura de Dados" na seção "Em desenvolvimento" do portfólio, com banner.
- Contadores "em laboratório" de 16 para 17.
- Publicado via `publish.sh` e verificado no ar.

## Como retomar

```bash
# abrir o app (não precisa de servidor, é front-end puro)
start index.html

# rodar a suíte de testes (precisa do Chrome instalado)
bash teste/rodar-testes.sh
```
