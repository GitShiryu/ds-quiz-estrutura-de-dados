const questionsDB = [
    {
        category: "Ordenação",
        question: "A técnica de ordenação Mergesort consiste em dividir um problema complexo em problemas menores... Assinale a alternativa correta que apresenta a forma como é feita a ordenação pelo algoritmo Mergesort:",
        options: [
            "O elemento atual é removido, de maneira recursiva, em dois laços de repetição, e sua posição ideal é procurada no vetor...",
            "O vetor original é percorrido em um único laço de repetição, de maneira iterativa, e os elementos são adicionados em um segundo vetor...",
            "Os elementos são comparados e trocados conforme o caso, de maneira iterativa, fazendo os valores maiores 'flutuarem' para o final...",
            "O vetor é dividido em várias partes iguais menores, em que é feita a ordenação em cada uma delas usando a função partition()...",
            "O vetor é dividido em duas partes, essas partes são divididas novamente, e assim por diante, até que cada parte tenha apenas um elemento. Depois é feita a junção, ordenando e recompondo o vetor."
        ],
        correct: 4,
        explanation: "O Mergesort utiliza o paradigma 'dividir para conquistar', dividindo recursivamente o vetor em metades até restar um elemento, realizando a intercalação (merge) ordenada em seguida."
    },
    {
        category: "Árvores e Grafos",
        question: "Analisando os 4 grafos apresentados na questão (onde o 4 possui raiz A, filhos B e C, e cada um com 2 filhos preenchendo perfeitamente o nível), assinale a alternativa correta:",
        options: [
            "Os grafos (3) e (4) são árvores binárias completas.",
            "O grafo da figura (2) não pode ser considerado uma árvore.",
            "O grafo (2) é uma árvore estritamente binária.",
            "A árvore (1) não é necessariamente um grafo.",
            "No quadro (4), tem-se, ao mesmo tempo, uma árvore estritamente binária e uma árvore completa."
        ],
        correct: 4,
        explanation: "No quadro (4), todos os nós internos possuem exatamente dois filhos e todas as folhas estão no mesmo nível, caracterizando simultaneamente uma árvore estritamente binária e completa."
    },
    {
        category: "Ordenação",
        question: "Sobre os algoritmos de ordenação, analise as afirmativas:\nI. O InsertionSort não é um algoritmo inerentemente recursivo.\nII. O InsertionSort também é conhecido como método de ordenação por inserção.\nIII. O InsertionSort, assim como o BubbleSort, também utiliza a função 'troca' para realizar a ordenação.\nIV. Pelo fato de possuir dois laços aninhados, o InsertionSort não é capaz de ser mais veloz que SelectionSort e BubbleSort.",
        options: [
            "II e III, apenas.",
            "II e IV, apenas.",
            "I, II e IV.",
            "I, apenas.",
            "I, II e III, apenas."
        ],
        correct: 4,
        explanation: "As afirmativas I, II e III estão corretas. A IV está incorreta pois o InsertionSort atinge O(n) no melhor caso (vetor já ordenado), superando Bubble e Selection."
    },
    {
        category: "Ordenação",
        question: "Sobre o processamento do método QuickSort, analise as afirmativas:\nI. O método pode escolher um elemento qualquer do vetor que será o pivô.\nII. O pivô, durante o processo de partição, já estará na sua posição final do vetor.\nIII. As sublistas são percorridas de forma recursiva até que haja apenas um elemento.\nIV. A partir do método Merge(), a lista é dividida em sublistas...",
        options: [
            "I, apenas.",
            "I, II, III e IV.",
            "III e IV, apenas.",
            "II e III, apenas.",
            "I, II e III, apenas."
        ],
        correct: 4,
        explanation: "As afirmativas I, II e III estão corretas. A IV é falsa porque a função Merge() pertence ao MergeSort, e não ao particionamento do QuickSort."
    },
    {
        category: "Árvores",
        question: "Considere uma árvore binária onde a raiz ocupa a posição 1. Se o filho esquerdo ocupa 2*P e o direito 2*P+1, com base na árvore ilustrada, assinale a alternativa correta sobre a posição do vértice I:",
        options: [
            "Caso a árvore fosse binária completa com altura 2, seriam necessárias no mínimo 15 posições.",
            "A árvore é estritamente binária.",
            "A árvore é uma binária completa.",
            "Os vértices que são filhos direitos sempre estarão em posições pares.",
            "O vértice I estaria armazenado na posição 11 do vetor."
        ],
        correct: 4,
        explanation: "Rastreando a partir da raiz A(1) -> B(2) -> E(5) -> I (filho direito de E: 2*5 + 1 = 11)."
    },
    {
        category: "Ordenação",
        question: "Sobre a ordenação de arranjos, analise as afirmativas:\nI. BubbleSort possui fácil implementação e baixo custo computacional.\nII. MergeSort é uma otimização do ShellSort dividida por pivô.\nIII. SelectionSort é de fácil implementação e um dos mais velozes.\nIV. O algoritmo ShellSort é o mais eficiente e refinado do método de inserção.",
        options: [
            "II e III, apenas.",
            "I, II e III, apenas.",
            "I e IV, apenas.",
            "IV, apenas.",
            "II, III e IV, apenas."
        ],
        correct: 3,
        explanation: "Apenas a afirmativa IV está correta. O BubbleSort e SelectionSort têm alto custo computacional O(n²), e o MergeSort não é otimização do ShellSort."
    },
    {
        category: "Ordenação",
        question: "Sobre as técnicas de ordenação, analise as afirmativas:\nI. O InsertionSort tem alto desempenho quando o vetor está ordenado ou parcialmente ordenado.\nII. O ShellSort apresenta de maneira geral um bom desempenho.\nIII. O QuickSort se apropria da técnica 'dividir para conquistar'.\nIV. O InsertionSort, em ocasiões em que o vetor está ordenado, é capaz de superar o QuickSort.",
        options: [
            "II, III e IV, apenas.",
            "I e II, apenas.",
            "I, II e III, apenas.",
            "I, II, III e IV.",
            "III, apenas."
        ],
        correct: 3,
        explanation: "Todas as afirmativas (I, II, III e IV) estão corretas, destacando os cenários de melhor caso e eficiência dos algoritmos."
    },
    {
        category: "Ordenação",
        question: "Assinale a alternativa correta que apresenta a principal característica do algoritmo ShellSort:",
        options: [
            "Ele aplica o método SelectionSort utilizando recursividade.",
            "Ele mescla os métodos MergeSort e QuickSort.",
            "Ele divide o vetor em vetores menores e em cada um deles aplica o método InsertionSort.",
            "Ele aplica uma busca sequencial completa.",
            "Ele aplica uma busca binária utilizando o método BubbleSort."
        ],
        correct: 2,
        explanation: "O ShellSort organiza os elementos distantes utilizando saltos (gaps), aplicando o InsertionSort em subgrupos até reduzir o salto para 1."
    },
    {
        category: "Árvores",
        question: "A respeito de árvores, analise as afirmativas:\nI. Considere que a raiz é o vértice inicial e não possui um nó-pai.\nII. Considere que o nó V tem uma subárvore cuja raiz é o nó W. Diz-se que V é pai de W.\nIII. Considere que o nó V tem uma subárvore cuja raiz é o nó W. Diz-se que W é pai de V.\nIV. Considere que o nó V tem uma subárvore cuja raiz é W. Diz-se que W é filho de V.",
        options: [
            "I, apenas.",
            "I, II e IV, apenas.",
            "III e IV, apenas.",
            "II e III, apenas.",
            "II, III e IV, apenas."
        ],
        correct: 1,
        explanation: "As afirmativas I, II e IV estão corretas. A III está incorreta pois inverte a relação hierárquica (W é filho de V, e não pai)."
    }
];

// ---------------- Estado da sessão ----------------
const STORAGE_KEY = "ds-quiz-progresso";
const STREAK_KEY = "ds-quiz-sequencia";
const XP_INICIAL = 650;

// respostas[indice na questionsDB] = { picked: n } ou { skipped: true }
let respostas = {};
// A rodada atual é uma lista de índices da questionsDB: todas, uma categoria ou os erros.
let rodada = questionsDB.map((_, i) => i);
let rotuloRodada = "todas as questões";
let currentIndex = 0;
let selectedOption = null;

// Adversários fictícios, só para dar escala ao ranking. Nenhum dado real.
const rankingDemo = [
    { nome: "BinaryBia", nivel: 9, pontos: 1450 },
    { nome: "HeapMaster", nivel: 8, pontos: 1280 },
    { nome: "PivôDoQuick", nivel: 7, pontos: 1100 },
    { nome: "NodeNinja", nivel: 6, pontos: 870 },
    { nome: "RecursivaRaiz", nivel: 5, pontos: 640 },
    { nome: "AlgoRaptor", nivel: 4, pontos: 410 },
    { nome: "StackOverflower", nivel: 3, pontos: 260 }
];

// ---------------- Persistência ----------------
// Todo acesso ao localStorage é protegido: em file:// o navegador pode bloquear
// o storage, e aí o app roda normalmente, só sem lembrar nada entre sessões.
function lerStorage(chave, padrao) {
    try {
        const salvo = localStorage.getItem(chave);
        return salvo ? (JSON.parse(salvo) || padrao) : padrao;
    } catch (e) {
        return padrao;
    }
}

function gravarStorage(chave, valor) {
    try {
        localStorage.setItem(chave, JSON.stringify(valor));
    } catch (e) {
        // sem storage disponível, segue só em memória
    }
}

function carregarProgresso() {
    respostas = lerStorage(STORAGE_KEY, {});
}

function salvarProgresso() {
    gravarStorage(STORAGE_KEY, respostas);
}

// ---------------- Sequência de dias ----------------
function hojeISO() {
    const d = new Date();
    const mes = String(d.getMonth() + 1).padStart(2, "0");
    const dia = String(d.getDate()).padStart(2, "0");
    return `${d.getFullYear()}-${mes}-${dia}`;
}

// Diferença em dias entre duas datas AAAA-MM-DD, comparadas em UTC para que
// horário de verão não transforme um dia em 23 ou 25 horas.
function diasEntre(inicioISO, fimISO) {
    const [ai, ami, adi] = inicioISO.split("-").map(Number);
    const [bi, bmi, bdi] = fimISO.split("-").map(Number);
    const inicio = Date.UTC(ai, ami - 1, adi);
    const fim = Date.UTC(bi, bmi - 1, bdi);
    return Math.round((fim - inicio) / 86400000);
}

// Regra da sequência, isolada do storage e do relógio para poder ser testada:
// mantém se já passou hoje, soma se a última visita foi ontem, reinicia se
// faltou um dia.
function proximaSequencia(anterior, hoje) {
    if (anterior.ultimoDia === hoje) {
        return { ultimoDia: hoje, sequencia: anterior.sequencia };
    }
    if (anterior.ultimoDia && diasEntre(anterior.ultimoDia, hoje) === 1) {
        return { ultimoDia: hoje, sequencia: anterior.sequencia + 1 };
    }
    return { ultimoDia: hoje, sequencia: 1 };
}

function atualizarSequencia() {
    const anterior = lerStorage(STREAK_KEY, { ultimoDia: null, sequencia: 0 });
    const atual = proximaSequencia(anterior, hojeISO());

    if (atual.ultimoDia !== anterior.ultimoDia || atual.sequencia !== anterior.sequencia) {
        gravarStorage(STREAK_KEY, atual);
    }

    document.getElementById("streak-days").innerText = atual.sequencia;
    document.getElementById("streak-label").innerText =
        atual.sequencia === 1 ? "dia de estudo" : "dias consecutivos";
    return atual.sequencia;
}

// ---------------- Pontuação ----------------
function todosOsIndices() {
    return questionsDB.map((_, i) => i);
}

function foiRespondida(i) {
    return !!respostas[i] && typeof respostas[i].picked === "number";
}

function acertou(i) {
    return foiRespondida(i) && respostas[i].picked === questionsDB[i].correct;
}

function acertos(indices) {
    return indices.filter(acertou).length;
}

function respondidas(indices) {
    return indices.filter(foiRespondida).length;
}

function indicesErrados() {
    return todosOsIndices().filter(i => foiRespondida(i) && !acertou(i));
}

function pulos() {
    return Object.keys(respostas).filter(i => respostas[i].skipped).length;
}

// A pontuação é derivada das respostas salvas, nunca acumulada num contador:
// assim voltar numa questão ou recarregar a página não inventa pontos.
function getScore() {
    return acertos(todosOsIndices()) * 100 - pulos() * 10;
}

function getXp() {
    return XP_INICIAL + acertos(todosOsIndices()) * 50;
}

function getNivel() {
    return Math.max(1, Math.ceil(getXp() / 200));
}

function atualizarHud() {
    document.getElementById("score-val").innerText = getScore();
    document.getElementById("xp-val").innerText = getXp();
    document.getElementById("user-level").innerText = getNivel();
}

// ---------------- Quiz ----------------
function renderQuestion() {
    if (currentIndex >= rodada.length) {
        showCompletionScreen();
        return;
    }

    const qId = rodada[currentIndex];
    const q = questionsDB[qId];

    document.getElementById("question-category").innerText = q.category;
    document.getElementById("question-progress").innerText =
        `Questão ${currentIndex + 1} de ${rodada.length}`;
    document.getElementById("question-text").innerText = q.question;

    const optionsGroup = document.getElementById("options-list");
    optionsGroup.innerHTML = "";
    document.getElementById("explanation-box").classList.add("hidden");
    selectedOption = null;

    q.options.forEach((optText, idx) => {
        const btn = document.createElement("button");
        btn.className = "opt-btn";
        btn.type = "button";
        btn.setAttribute("aria-pressed", "false");
        btn.innerText = `${String.fromCharCode(65 + idx)}) ${optText}`;
        btn.onclick = () => selectOption(idx, btn);
        optionsGroup.appendChild(btn);
    });

    // Controle do Botão "Voltar" (exibe somente a partir da 2ª questão da rodada)
    document.getElementById("prev-btn").classList.toggle("hidden", currentIndex === 0);
    document.getElementById("review-btn").classList.add("hidden");

    const confirmBtn = document.getElementById("confirm-btn");
    confirmBtn.innerText = "Confirmar Resposta ➔";
    confirmBtn.onclick = confirmAnswer;
    confirmBtn.classList.remove("hidden");
    document.getElementById("skip-btn").classList.remove("hidden");

    // Questão que já foi respondida (ex.: ao voltar) reabre com o resultado,
    // em vez de deixar responder de novo e pontuar duas vezes.
    if (foiRespondida(qId)) {
        mostrarResultado(qId, respostas[qId].picked);
    }

    atualizarHud();
}

function selectOption(index, btnElement) {
    const allBtns = document.querySelectorAll(".opt-btn");
    allBtns.forEach(b => {
        b.classList.remove("selected");
        b.setAttribute("aria-pressed", "false");
    });
    btnElement.classList.add("selected");
    btnElement.setAttribute("aria-pressed", "true");
    selectedOption = index;
}

function mostrarResultado(qId, escolhida) {
    const q = questionsDB[qId];
    const allBtns = document.querySelectorAll(".opt-btn");

    allBtns.forEach(b => {
        b.disabled = true;
        b.classList.remove("selected");
        b.setAttribute("aria-pressed", "false");
    });

    if (escolhida === q.correct) {
        allBtns[escolhida].classList.add("correct");
    } else {
        allBtns[escolhida].classList.add("wrong");
        allBtns[q.correct].classList.add("correct");
    }

    const caixa = document.getElementById("explanation-box");
    caixa.classList.toggle("errada", escolhida !== q.correct);
    document.getElementById("explanation-text").innerText = q.explanation;
    caixa.classList.remove("hidden");
    document.getElementById("skip-btn").classList.add("hidden");

    const confirmBtn = document.getElementById("confirm-btn");
    if (currentIndex === rodada.length - 1) {
        confirmBtn.innerText = "Finalizar Teste 🏁";
        confirmBtn.onclick = showCompletionScreen;
    } else {
        confirmBtn.innerText = "Próxima Questão ➔";
        confirmBtn.onclick = nextQuestion;
    }
}

function confirmAnswer() {
    if (selectedOption === null) return;

    const qId = rodada[currentIndex];
    respostas[qId] = { picked: selectedOption };
    salvarProgresso();

    mostrarResultado(qId, selectedOption);
    atualizarHud();
}

function skipQuestion() {
    const qId = rodada[currentIndex];
    if (!respostas[qId]) {
        respostas[qId] = { skipped: true };
        salvarProgresso();
    }
    nextQuestion();
}

function nextQuestion() {
    currentIndex++;
    renderQuestion();
}

function prevQuestion() {
    if (currentIndex > 0) {
        currentIndex--;
        renderQuestion();
    }
}

function showCompletionScreen() {
    const certas = acertos(rodada);
    const pct = Math.round((certas / rodada.length) * 100);
    let recado;
    if (pct === 100) recado = "Gabaritou. 🎯";
    else if (pct >= 70) recado = "Bom resultado. 👏";
    else if (pct >= 40) recado = "Dá pra melhorar: revise os erros.";
    else recado = "Vale refazer com calma.";

    document.getElementById("question-category").innerText = "Concluído";
    document.getElementById("question-progress").innerText = `${rodada.length} de ${rodada.length}`;
    document.getElementById("question-text").innerText =
        `🎉 Rodada concluída: ${rotuloRodada}.\n\n${recado}\n\nAcertos: ${certas} de ${rodada.length} (${pct}%)  |  Pontuação: ${getScore()} pts  |  XP: ${getXp()}`;
    document.getElementById("options-list").innerHTML = "";
    document.getElementById("explanation-box").classList.add("hidden");
    document.getElementById("skip-btn").classList.add("hidden");
    document.getElementById("prev-btn").classList.add("hidden");

    // Só oferece a revisão se houver erro para revisar.
    document.getElementById("review-btn")
        .classList.toggle("hidden", indicesErrados().length === 0);

    const confirmBtn = document.getElementById("confirm-btn");
    confirmBtn.classList.remove("hidden");
    confirmBtn.innerText = "Escolher outra categoria 📚";
    confirmBtn.onclick = () => switchTab("categorias");

    atualizarHud();
}

// ---------------- Categorias ----------------
function nomesDasCategorias() {
    const nomes = [];
    questionsDB.forEach(q => {
        if (nomes.indexOf(q.category) === -1) nomes.push(q.category);
    });
    return nomes;
}

function indicesDaCategoria(nome) {
    const ids = [];
    questionsDB.forEach((q, i) => {
        if (q.category === nome) ids.push(i);
    });
    return ids;
}

function renderCategorias() {
    const grid = document.getElementById("categorias-grid");
    grid.innerHTML = "";

    const blocos = [{ nome: null, rotulo: "Todas as questões", ids: todosOsIndices() }]
        .concat(nomesDasCategorias().map(nome => ({
            nome: nome,
            rotulo: nome,
            ids: indicesDaCategoria(nome)
        })));

    blocos.forEach(bloco => {
        const total = bloco.ids.length;
        const feitas = respondidas(bloco.ids);
        const certas = acertos(bloco.ids);
        const pct = Math.round((feitas / total) * 100);

        const card = document.createElement("div");
        card.className = "cat-card";

        const titulo = document.createElement("h3");
        titulo.innerText = bloco.rotulo;
        card.appendChild(titulo);

        const meta = document.createElement("p");
        meta.className = "cat-meta";
        meta.innerText = `${total} ${total === 1 ? "questão" : "questões"} · ${certas} ${certas === 1 ? "acerto" : "acertos"}`;
        card.appendChild(meta);

        const track = document.createElement("div");
        track.className = "progress-track";
        track.setAttribute("role", "progressbar");
        track.setAttribute("aria-valuenow", String(pct));
        track.setAttribute("aria-valuemin", "0");
        track.setAttribute("aria-valuemax", "100");
        track.setAttribute("aria-label", `Progresso em ${bloco.rotulo}`);
        const fill = document.createElement("div");
        fill.className = "progress-fill";
        fill.style.width = `${pct}%`;
        track.appendChild(fill);
        card.appendChild(track);

        const andamento = document.createElement("p");
        andamento.className = "cat-meta";
        andamento.innerText = `${feitas} de ${total} respondidas (${pct}%)`;
        card.appendChild(andamento);

        const btn = document.createElement("button");
        btn.className = "btn btn-primary";
        btn.type = "button";
        btn.innerText = feitas === total ? "Revisar ➔" : "Praticar ➔";
        btn.onclick = () => praticarCategoria(bloco.nome);
        card.appendChild(btn);

        grid.appendChild(card);
    });

    renderCardDeErros(grid);
}

// Card extra, só aparece quando existe erro para refazer.
function renderCardDeErros(grid) {
    const erradas = indicesErrados();
    if (erradas.length === 0) return;

    const card = document.createElement("div");
    card.className = "cat-card cat-card-erros";

    const titulo = document.createElement("h3");
    titulo.innerText = "🔁 Revisar erros";
    card.appendChild(titulo);

    const meta = document.createElement("p");
    meta.className = "cat-meta";
    meta.innerText = `${erradas.length} ${erradas.length === 1 ? "questão errada" : "questões erradas"} para refazer`;
    card.appendChild(meta);

    const aviso = document.createElement("p");
    aviso.className = "cat-meta";
    aviso.innerText = "Monta uma rodada só com o que você errou e libera essas questões para responder de novo.";
    card.appendChild(aviso);

    const btn = document.createElement("button");
    btn.className = "btn btn-primary";
    btn.type = "button";
    btn.innerText = "Refazer os erros ➔";
    btn.onclick = praticarErros;
    card.appendChild(btn);

    grid.appendChild(card);
}

function praticarCategoria(nome) {
    rodada = nome === null ? todosOsIndices() : indicesDaCategoria(nome);
    rotuloRodada = nome === null ? "todas as questões" : `a categoria ${nome}`;
    currentIndex = 0;
    switchTab("inicio");
    renderQuestion();
}

function praticarErros() {
    const erradas = indicesErrados();
    if (erradas.length === 0) return;

    // Libera as questões erradas para serem respondidas de novo.
    erradas.forEach(i => delete respostas[i]);
    salvarProgresso();

    rodada = erradas;
    rotuloRodada = "a revisão dos erros";
    currentIndex = 0;
    switchTab("inicio");
    renderQuestion();
}

function zerarProgresso() {
    respostas = {};
    salvarProgresso();
    rodada = todosOsIndices();
    rotuloRodada = "todas as questões";
    currentIndex = 0;
    renderCategorias();
    atualizarHud();
}

function confirmarZerar() {
    if (window.confirm("Apagar todo o progresso salvo neste navegador?")) {
        zerarProgresso();
    }
}

// ---------------- Ranking ----------------
function renderRanking() {
    const lista = document.getElementById("ranking-list");
    lista.innerHTML = "";

    const jogadores = rankingDemo
        .map(j => ({ nome: j.nome, nivel: j.nivel, pontos: j.pontos, eu: false }))
        .concat([{ nome: "Eli Rômulo", nivel: getNivel(), pontos: getScore(), eu: true }])
        .sort((a, b) => b.pontos - a.pontos);

    jogadores.forEach((j, idx) => {
        const linha = document.createElement("div");
        linha.className = "rank-row" + (j.eu ? " me" : "");

        const pos = document.createElement("span");
        pos.className = "rank-pos";
        pos.innerText = idx === 0 ? "🥇" : idx === 1 ? "🥈" : idx === 2 ? "🥉" : `${idx + 1}º`;

        const nome = document.createElement("span");
        nome.className = "rank-name";
        nome.innerText = j.eu ? `${j.nome} (você)` : j.nome;

        const nivel = document.createElement("span");
        nivel.className = "rank-level";
        nivel.innerText = `Nível ${j.nivel}`;

        const pontos = document.createElement("span");
        pontos.className = "rank-points";
        pontos.innerText = `${j.pontos} pts`;

        linha.appendChild(pos);
        linha.appendChild(nome);
        linha.appendChild(nivel);
        linha.appendChild(pontos);
        lista.appendChild(linha);
    });
}

// ---------------- Navegação entre abas ----------------
function switchTab(aba) {
    document.querySelectorAll(".view-panel").forEach(p => p.classList.remove("active"));
    document.getElementById(`${aba}-view`).classList.add("active");

    document.querySelectorAll(".nav-item").forEach(b => {
        const ativa = b.dataset.tab === aba;
        b.classList.toggle("active", ativa);
        b.setAttribute("aria-selected", ativa ? "true" : "false");
    });

    if (aba === "categorias") renderCategorias();
    if (aba === "ranking") renderRanking();
}

// ---------------- Atalhos de teclado ----------------
// Só valem na aba Início: A–E ou 1–5 escolhem, Enter confirma/avança,
// setas navegam entre as questões já vistas.
function tratarTecla(ev) {
    if (ev.ctrlKey || ev.altKey || ev.metaKey) return;
    if (!document.getElementById("inicio-view").classList.contains("active")) return;

    const botoes = document.querySelectorAll(".opt-btn");
    const tecla = ev.key.toLowerCase();
    const porLetra = "abcde".indexOf(tecla);
    const porNumero = "12345".indexOf(tecla);
    const escolha = porLetra !== -1 ? porLetra : porNumero;

    if (escolha !== -1 && botoes[escolha] && !botoes[escolha].disabled) {
        selectOption(escolha, botoes[escolha]);
        ev.preventDefault();
        return;
    }

    if (ev.key === "Enter") {
        const confirmBtn = document.getElementById("confirm-btn");
        if (!confirmBtn.classList.contains("hidden")) {
            confirmBtn.onclick();
            ev.preventDefault();
        }
        return;
    }

    if (ev.key === "ArrowLeft" && currentIndex > 0) {
        prevQuestion();
        ev.preventDefault();
    }
}

// ---------------- Inicialização ----------------
function iniciar() {
    carregarProgresso();
    atualizarSequencia();
    renderQuestion();
    atualizarHud();
    document.addEventListener("keydown", tratarTecla);
}

iniciar();
