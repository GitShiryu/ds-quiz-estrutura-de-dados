// Suíte de testes do DS Quiz.
//
// Roda dentro do próprio index.html, depois que o script.js já inicializou, e
// despeja o resultado num <pre id="saida"> para o runner ler via --dump-dom.
// Não precisa de framework nem de instalar nada: só do Chrome.

(function () {
    const falhas = [];
    const linhas = [];

    function checa(nome, obtido, esperado) {
        const ok = JSON.stringify(obtido) === JSON.stringify(esperado);
        if (!ok) {
            falhas.push(`${nome}\n    obtido:   ${JSON.stringify(obtido)}\n    esperado: ${JSON.stringify(esperado)}`);
        }
        linhas.push(`${ok ? "PASS" : "FALHA"}  ${nome}`);
    }

    function txt(id) {
        return document.getElementById(id).innerText;
    }

    function opts() {
        return document.querySelectorAll(".opt-btn");
    }

    function temClasse(id, classe) {
        return document.getElementById(id).classList.contains(classe);
    }

    function tecla(key) {
        document.dispatchEvent(new KeyboardEvent("keydown", { key: key, bubbles: true, cancelable: true }));
    }

    // ---------- datas e sequência de dias ----------
    checa("diasEntre conta um dia", diasEntre("2026-10-29", "2026-10-30"), 1);
    checa("diasEntre atravessa o mês", diasEntre("2026-10-31", "2026-11-01"), 1);
    checa("diasEntre atravessa o ano", diasEntre("2025-12-31", "2026-01-01"), 1);
    checa("diasEntre ignora horário de verão", diasEntre("2026-02-14", "2026-02-22"), 8);

    checa("sequência: primeira visita começa em 1",
        proximaSequencia({ ultimoDia: null, sequencia: 0 }, "2026-10-30"),
        { ultimoDia: "2026-10-30", sequencia: 1 });
    checa("sequência: voltou no dia seguinte, soma",
        proximaSequencia({ ultimoDia: "2026-10-29", sequencia: 4 }, "2026-10-30"),
        { ultimoDia: "2026-10-30", sequencia: 5 });
    checa("sequência: já entrou hoje, não soma de novo",
        proximaSequencia({ ultimoDia: "2026-10-30", sequencia: 7 }, "2026-10-30"),
        { ultimoDia: "2026-10-30", sequencia: 7 });
    checa("sequência: faltou um dia, reinicia",
        proximaSequencia({ ultimoDia: "2026-10-28", sequencia: 9 }, "2026-10-30"),
        { ultimoDia: "2026-10-30", sequencia: 1 });
    checa("hojeISO tem formato AAAA-MM-DD", /^\d{4}-\d{2}-\d{2}$/.test(hojeISO()), true);

    // ---------- estado inicial ----------
    zerarProgresso();
    praticarCategoria(null);
    checa("rodada completa tem 9 questões", rodada.length, 9);
    checa("HUD zerado", [txt("score-val"), txt("xp-val"), txt("user-level")], ["0", "650", "4"]);
    checa("mostra o progresso da rodada", txt("question-progress"), "Questão 1 de 9");
    checa("primeira questão não mostra o botão Voltar", temClasse("prev-btn", "hidden"), true);

    // ---------- acerto ----------
    selectOption(4, opts()[4]);
    checa("opção marcada tem aria-pressed", opts()[4].getAttribute("aria-pressed"), "true");
    confirmAnswer();
    checa("acerto vale 100 pts / 700 xp / nível 4",
        [txt("score-val"), txt("xp-val"), txt("user-level")], ["100", "700", "4"]);
    checa("explicação aparece", temClasse("explanation-box", "hidden"), false);
    checa("explicação do acerto fica verde", temClasse("explanation-box", "errada"), false);
    checa("botão vira Próxima Questão", txt("confirm-btn"), "Próxima Questão ➔");
    checa("botão Pular some após responder", temClasse("skip-btn", "hidden"), true);

    // ---------- pular ----------
    nextQuestion();
    skipQuestion();
    checa("pular desconta 10 pts", txt("score-val"), "90");
    checa("pular avança a questão", txt("question-progress"), "Questão 3 de 9");

    // ---------- voltar não pontua duas vezes ----------
    currentIndex = 0;
    renderQuestion();
    checa("questão já respondida reabre travada", opts()[0].disabled, true);
    confirmAnswer();
    confirmAnswer();
    checa("pontuação não dobra ao reconfirmar", txt("score-val"), "90");

    // ---------- erro ----------
    currentIndex = 2;
    renderQuestion();
    selectOption(0, opts()[0]);
    confirmAnswer();
    checa("erro não pontua", txt("score-val"), "90");
    checa("alternativa errada em vermelho", opts()[0].classList.contains("wrong"), true);
    checa("alternativa correta em verde", opts()[4].classList.contains("correct"), true);
    checa("explicação do erro fica vermelha", temClasse("explanation-box", "errada"), true);

    // ---------- atalhos de teclado ----------
    currentIndex = 3;
    renderQuestion();
    tecla("c");
    checa("tecla C marca a terceira alternativa", selectedOption, 2);
    tecla("5");
    checa("tecla 5 marca a quinta alternativa", selectedOption, 4);
    tecla("Enter");
    checa("Enter confirma a resposta", temClasse("explanation-box", "hidden"), false);
    tecla("Enter");
    checa("Enter de novo avança a questão", txt("question-progress"), "Questão 5 de 9");
    tecla("ArrowLeft");
    checa("seta esquerda volta", txt("question-progress"), "Questão 4 de 9");
    switchTab("ranking");
    const antes = selectedOption;
    tecla("a");
    checa("atalho não age fora da aba Início", selectedOption, antes);
    switchTab("inicio");

    // ---------- tela final ----------
    currentIndex = rodada.length;
    renderQuestion();
    checa("tela final", txt("question-category"), "Concluído");
    checa("tela final conta acertos reais", txt("question-text").indexOf("Acertos: 2 de 9 (22%)") !== -1, true);
    checa("tela final oferece revisar erros", temClasse("review-btn", "hidden"), false);

    // ---------- revisar erros ----------
    const errosAntes = indicesErrados().length;
    checa("há erros registrados", errosAntes > 0, true);
    praticarErros();
    checa("rodada de revisão só tem os erros", rodada.length, errosAntes);
    checa("revisão libera as questões para responder de novo", opts()[0].disabled, false);
    checa("revisão zera a lista de erros", indicesErrados().length, 0);
    checa("rótulo da rodada de revisão", rotuloRodada, "a revisão dos erros");

    // ---------- filtro por categoria ----------
    praticarCategoria("Árvores");
    checa("categoria Árvores tem 2 questões", rodada.length, 2);
    checa("rodada de categoria começa do zero", txt("question-progress"), "Questão 1 de 2");
    checa("praticar leva para a aba Início", temClasse("inicio-view", "active"), true);

    // ---------- abas ----------
    switchTab("categorias");
    checa("aba Categorias visível", temClasse("categorias-view", "active"), true);
    checa("aba Início escondida", temClasse("inicio-view", "active"), false);
    checa("um card por categoria + Todas", document.querySelectorAll(".cat-card").length, 4);
    checa("nav marcada", document.querySelector('.nav-item[data-tab="categorias"]').classList.contains("active"), true);
    checa("nav com aria-selected", document.querySelector('.nav-item[data-tab="categorias"]').getAttribute("aria-selected"), "true");
    checa("sem erros, o card de revisão não aparece", document.querySelectorAll(".cat-card-erros").length, 0);

    // card de erros aparece quando há erro
    currentIndex = 0;
    praticarCategoria(null);
    selectOption(0, opts()[0]);
    confirmAnswer();
    switchTab("categorias");
    checa("com erro, o card de revisão aparece", document.querySelectorAll(".cat-card-erros").length, 1);

    switchTab("ranking");
    checa("aba Ranking visível", temClasse("ranking-view", "active"), true);
    checa("ranking tem 8 linhas", document.querySelectorAll(".rank-row").length, 8);
    checa("jogador destacado uma única vez", document.querySelectorAll(".rank-row.me").length, 1);
    const pts = Array.from(document.querySelectorAll(".rank-points"))
        .map(el => parseInt(el.innerText, 10));
    checa("ranking em ordem decrescente", pts.slice().sort((a, b) => b - a), pts);

    // ---------- zerar ----------
    zerarProgresso();
    checa("zerar limpa pontuação e XP", [txt("score-val"), txt("xp-val")], ["0", "650"]);
    checa("zerar limpa as respostas", Object.keys(respostas).length, 0);

    // ---------- saída ----------
    const pre = document.createElement("pre");
    pre.id = "saida";
    // textContent, não innerText: innerText vira <br> e o runner perderia as quebras.
    pre.textContent = linhas.join("\n") +
        `\n\n${linhas.length - falhas.length}/${linhas.length} passaram` +
        (falhas.length ? `\n\nFALHAS:\n${falhas.join("\n")}` : "") +
        `\nTOTAL_FALHAS=${falhas.length}`;
    document.body.appendChild(pre);
})();
