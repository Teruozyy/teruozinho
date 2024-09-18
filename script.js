const storyElement = document.getElementById('story');
const choicesElement = document.getElementById('choices');
const scoreElement = document.getElementById('score');

let score = 0;

const story = [
    {
        text: "Você se encontra na entrada de uma floresta sombria. O que você faz?",
        choices: [
            { text: "Entrar na floresta", next: 1, score: 0 },
            { text: "Voltar para casa", next: 2, score: 1 }
        ]
    },
    {
        text: "Você encontra um lobo faminto! O que você faz?",
        choices: [
            { text: "Tentar fugir", next: 3, score: 1 },
            { text: "Enfrentar o lobo", next: 4, score: -1 }
        ]
    },
    {
        text: "Você voltou para casa em segurança. Fim da aventura.",
        choices: []
    },
    {
        text: "Você consegue fugir e volta para casa. Fim da aventura.",
        choices: []
    },
    {
        text: "O lobo te ataca e você não sobrevive. Fim da aventura.",
        choices: []
    },
    {
        text: "Você encontra um mágico que oferece ajuda. O que você faz?",
        choices: [
            { text: "Aceitar a ajuda", next: 6, score: 2 },
            { text: "Recusar e seguir sozinho", next: 7, score: 0 }
        ]
    },
    {
        text: "O mágico te dá uma poção poderosa! Você se sente forte. Fim da aventura.",
        choices: []
    },
    {
        text: "Você encontra um caminho seguro e volta para casa. Fim da aventura.",
        choices: []
    }
];

function startGame() {
    score = 0; // Reinicia a pontuação
    updateScore();
    showStory(0);
}

function showStory(index) {
    const currentStory = story[index];
    storyElement.textContent = currentStory.text;
    choicesElement.innerHTML = '';

    currentStory.choices.forEach(choice => {
        const button = document.createElement('button');
        button.textContent = choice.text;
        button.onclick = () => {
            score += choice.score; // Atualiza a pontuação
            updateScore();
            showStory(choice.next);
        };
        choicesElement.appendChild(button);
    });
}

function updateScore() {
    scoreElement.textContent = `Pontuação: ${score}`;
}

startGame();
