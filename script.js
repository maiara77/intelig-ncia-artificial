const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você acorda se sente mais disposto",
        alternativas: [
            {
                texto: "pela manhã com o sol iluminando tudo",
                afirmacao: "prefiro aproveitar a energia do dia"
            },
            {
                texto: "a noite, quando tudo está mais calmo",
                afirmacao: "gosto da tranquilidade e silêncio da noite"
            }
        ]
    },
    {
        enunciado: "na hora de estudar ou trabalhar você se sente mais produtivo",
        alternativas: [
            {
                texto: "durante o dia com a luz natural",
                afirmacao: "minha mente rende melhor com a luz do sol"
            },
            {
                texto: " durante a noite sem distrções",
                afirmacao: "minha mente rende melhor quando está escuro e silencioso."
            }
        ]
    },
    {
        enunciado: "para passeios ou atividades ao ar livre você prefere:",
        alternativas: [
            {
                texto: "a luz do dia e o calor do sol",
                afirmacao: "gosto de aproveitar o dia ao máximo."
            },
            {
                texto: "A atmosfera tranquila da noite. ",
                afirmacao: "Prefiro sair quando está tudo mais calmo."
            }
        ]
    },
    {
        enunciado: "Em festas ou encontros, você se sente mais à vontade:",
        alternativas: [
            {
                texto: "durante o dia em ambientes claros e animados",
                afirmacao: "prefiro a energia e movimento do dia"
            },
            {
                texto: "À noite, com luz baixa e clima descontraído",
                afirmacao: "prefiro o clima intimista da noite"
            }
        ]
    },
    {
        enunciado: "para descançar e relaxar você prefere:",
        alternativas: [
            {
                texto: "Aproveitar a luz do dia para se energizar",
                afirmacao: "sou mais ativo com o sol"
            },
            {
                texto: "A noite para se desligar e refetir.",
                afirmacao: "sou mais contemplativo à noite."
            }
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if (atual >= perguntas.length) {
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas) {
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSelecionada) {
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado() {
    caixaPerguntas.textContent = "Em 2049...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();