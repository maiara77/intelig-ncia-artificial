const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Quando você acorda se sente mais disposto:",
        alternativas: [
            {
                texto: "Pela manhã com o sol iluminando tudo.",
                afirmacao: "Prefiro aproveitar a energia do dia."
            },
            {
                texto: "A noite, quando tudo está mais calmo.",
                afirmacao: "Gosto da tranquilidade e silêncio da noite."
            }
        ]
    },
    {
        enunciado: "Na hora de estudar ou trabalhar você se sente mais produtivo.",
        alternativas: [
            {
                texto: "Durante o dia com a luz natural.",
                afirmacao: "Minha mente rende melhor com a luz do sol."
            },
            {
                texto: "Durante a noite sem distrações.",
                afirmacao: "Minha mente rende melhor quando está escuro e silencioso."
            }
        ]
    },
    {
        enunciado: "Para passeios ou atividades ao ar livre você prefere:",
        alternativas: [
            {
                texto: "A luz do dia e o calor do sol.",
                afirmacao: "Gosto de aproveitar o dia ao máximo."
            },
            {
                texto: "A atmosfera tranquila da noite.",
                afirmacao: "Prefiro sair quando está tudo mais calmo."
            }
        ]
    },
    {
        enunciado: "Em festas ou encontros, você se sente mais à vontade:",
        alternativas: [
            {
                texto: "Durante o dia em ambientes claros e animados.",
                afirmacao: "Prefiro a energia e movimento do dia."
            },
            {
                texto: "À noite, com luz baixa e clima descontraído.",
                afirmacao: "Prefiro o clima intimista da noite."
            }
        ]
    },
    {
        enunciado: "Para descançar e relaxar você prefere:",
        alternativas: [
            {
                texto: "Aproveitar a luz do dia para se energizar.",
                afirmacao: "Sou mais ativo com o sol."
            },
            {
                texto: "A noite para se desligar e refetir.",
                afirmacao: "Sou mais contemplativo à noite."
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
    caixaPerguntas.textContent = "Você é mais";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent = "";
}

mostraPergunta();