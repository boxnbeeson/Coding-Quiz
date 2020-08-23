const qanda = [
    {
        question: 'What is the base coding language all front-end website developers must know? (Also commonly referred to as the "skeleton" of a website)',
        answers: [
            { text: 'HTMl', value: 0 },
            { text: 'CSS', value: 15 },
            { text: 'Java', value: 15 },
            { text: 'Javascript', value: 15 },
        ],
        button: 'next-question',
    },
    {
        question: 'What coding language would you use to change the overall asthetics (font, layout, colors, etc.) of a webpage?',
        answers: [
            { text: 'HTMl', value: 15 },
            { text: 'Javascript', value: 15 },
            { text: 'Java', value: 15 },
            { text: 'CSS', value: 0 },
        ],
        button: 'next-question'
    },
    {
        question: "What coding language would you use to increase a website's functionality and to encourage user interaction?",
        answers: [
            { text: 'HTMl', value: 15 },
            { text: 'Javascript', value: 0 },
            { text: 'jquery', value: 15 },
            { text: 'CSS', value: 15 },
        ],
        button: 'next-question'
    },
    {
        question: 'What is jQuery?',
        answers: [
            { text: 'A more complex version of CSS', value: 15 },
            { text: 'A new way to code your base HTML', value: 15 },
            { text: 'A mixture of HTML and Java', value: 15 },
            { text: 'A simplified version of Javascript that is easier to use', value: 0 },
        ],
        button: 'next-question'
    },

    {
        question: 'What is the main function of ajax?',
        answers: [
            { text: 'adds special animations to on-screen text', value: 15 },
            { text: 'rewrites and simplifies code for easier interpretation', value: 15 },
            { text: 'Creating dynamic web pages that can update without having to reload', value: 0 },
            { text: "provides links to w3schools for when you're lost and don't know what you're doing", value: 15 },
        ],
        button: 'answers-page'
    }
]
let currentQuestion = 0
var checkedButton = 0;
getPoints();
const beginButton = document.getElementById('start-button');
beginButton.addEventListener('click', function () {
    showNextQuestion();
    startTimer();
});


const countdownEl = document.getElementById('timer');
let t
function startTimer() {
    t = setInterval(updateCountdown, 1000);
};
function endTimer() {
    clearInterval(t);
}

let time = 120;
function updateCountdown() {
    countdownEl.innerHTML = `${time}` - checkedButton;
    time--;
};

document.addEventListener('click', function (e) {
    if (e.target && e.target.id == 'next-question') {
        showNextQuestion();
    };
    if (e.target && e.target.id == 'answers-page') {
        showScoreCard();
        endTimer();
    };
});

function getPoints() {
    var allAnswers = document.getElementsByName('choice');
    allAnswers.forEach(e => {
        if (e.checked) {
            checkedButton = e.value;
            console.log(checkedButton);
        };
    });
}


document.va

function showNextQuestion() {

    document.querySelector(".card-container").innerHTML = "";
    const nextQuestion = generateCard(qanda[currentQuestion]);
    document.querySelector(".card-container").innerHTML = nextQuestion;
    currentQuestion++;
}

function showScoreCard() {
    document.querySelector(".card-container").innerHTML = "";
    document.querySelector(".card-container").innerHTML = scoreCard();
}

function generateCard(qObject) {

    const qCard = `<div class="card text-center" style="width: 25rem;">
<div class="card-body">
            ${qObject.question}
          <br>
          <input type="radio" name="choice" value="${qObject.answers[0].value}">${qObject.answers[0].text}
          <br>
          <input type="radio" name="choice" value="${qObject.answers[1].value}">${qObject.answers[1].text}
          <br>
          <input type="radio" name="choice" value="${qObject.answers[2].value}">${qObject.answers[2].text}
          <br>
          <input type="radio" name="choice" value="${qObject.answers[3].value}">${qObject.answers[3].text}
          </div>
          <br>
  <button onclick="getPoints()" class="btn btn-secondary" id="${qObject.button}">Next</button>
</div>`
    return qCard
}

function scoreCard() {
    const sCard = `<div class="card text-center" style="width: 25rem;">
    <div class="card-body text-center">
        <p>Score: ${countdownEl.innerHTML}</p>
        <p>Highscore:</p>
    </div>`
    return sCard
}
