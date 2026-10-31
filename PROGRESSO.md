# PROGRESSO — DS Quiz (Estrutura de Dados)

Arquivo de retomada: se a sessão cair, leia este arquivo primeiro.

## Em andamento

**2026-10-30 — Melhorias no app + publicação no GitHub público**

- Onde: `D:\quiz-estruturas-dados` (`index.html`, `style.css`, `script.js`).
- O que: rodada de melhorias (sequência real, responsivo, teclado, acessibilidade,
  revisar erros), documentação (`README.md`, `LICENSE`, `.gitignore`) e publicação
  do repositório público no GitHub (conta `GitShiryu`).
- Critério de pronto: suíte de testes em `teste/` passando 100% no Chrome headless,
  repositório público no ar e card do portfólio atualizado com o link do GitHub.

## Próximos passos

1. Implementar as melhorias e rodar a suíte de testes.
2. Criar `README.md`, `LICENSE` (MIT) e `.gitignore`.
3. `git init` + commit inicial + push para repositório público no GitHub.
4. Atualizar o card do portfólio (MagenCode) com o link do repositório e republicar.
5. Pendências que o dono ainda não decidiu:
   - Deploy público (GitHub Pages ou Vercel) para o card virar "demo no ar".
   - Se o site público tiver deploy, adicionar os cards "Conheça outros projetos".

## Decisões do dono

- 2026-10-30: o projeto entra no portfólio (https://romulofullstack.duckdns.org),
  com print do sistema no banner, igual aos outros projetos.
- 2026-10-30: repositório no GitHub deve ser **público**.
- Contato público do dono: eliromulo@gmail.com (sem telefone).

## Concluído

**2026-10-30 — Abas Categorias e Ranking + correções**

- `switchTab()` implementado (não existia; os botões do menu davam erro no console).
- Telas novas: Categorias (progresso e acertos por assunto) e Ranking.
- Corrigidos: botão "Pular" sem `onclick`; pontuação que dobrava ao voltar numa
  questão; `.view-panel` sem regra CSS; tela final que afirmava "nota máxima"
  independente do desempenho; nível fixo no HTML.
- Verificado: 26 checagens automatizadas no Chrome headless, todas passando.

**2026-10-30 — Entrada no portfólio**

- Card "DS Quiz — Estrutura de Dados" adicionado à seção "Em desenvolvimento" do
  portfólio, com banner `images/project-quiz-ds.png`.
- Contadores "em laboratório" atualizados de 16 para 17.
- Publicado via `publish.sh` e verificado no ar (HTTP 200 na página e na imagem).

## Como retomar

```bash
# abrir o app (não precisa de servidor, é front-end puro)
start index.html

# rodar a suíte de testes (precisa do Chrome instalado)
bash teste/rodar-testes.sh
```
