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
    },
]
let currentQuestion = 0;
let time = 120;
const beginButton = document.getElementById('start-button');
const countdownEl = document.getElementById('timer');
let t;
const status = document.getElementById('status');

beginButton.addEventListener('click', function () {
    startTimer();
    showNextQuestion();
});

function startTimer() {
    t = setInterval(updateCountdown, 1000);
};

function endTimer() {
    clearInterval(t);
};

function updateCountdown() {
    countdownEl.innerHTML = `${time}`;
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

function getAnswer() {
    var allAnswers = document.getElementsByName('choice');
    var checkedAnswer = "";
    allAnswers.forEach(e => {
        if (e.checked) {
            checkedAnswer = e.value;
            time = time - e.value;
            if (e.value == 15) {
                status.innerHTML = "Incorrect!";
            } else {
                status.innerHTML = "Correct!";
            };
        };
    });
    if (checkedAnswer == "") {
        alert("Answer the question, silly!");
        time = time - 15;
        status.innerHTML = "Make sure you answer!";
    };
};

function showNextQuestion() {
    const nextQuestion = generateCard(qanda[currentQuestion]);
    document.querySelector(".card-container").innerHTML = nextQuestion;
    currentQuestion++;
};

function showScoreCard() {
    document.querySelector(".card-container").innerHTML = scoreCard();
    countdownEl.innerHTML = time;
};

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
  <button onclick="getAnswer()" class="btn btn-secondary" id="${qObject.button}">Next</button>
</div>`
    return qCard
};

function getInputValue() {
    let inputValue = document.getElementById("myInput").value;
    localStorage.setItem(inputValue, time);
    document.querySelector(".card-container").innerHTML = highScoreCard();
};

function highScoreCard() { 
    const highScores = `<div class="card text-center" style="width: 25rem;">
    <div id="highscores" class="card-body text-center">
    <h3>Highscores:</h3>
    <p>${JSON.stringify(localStorage, null, "\t")}</p>
    </div>`
    return highScores
};

function scoreCard() {
    const sCard = `<div class="card text-center" style="width: 25rem;">
    <div class="card-body text-center">
        <p>Score: ${time}</p>
        <input type="text" placeholder="Give initials for high score card" id="myInput">
        <button type="button" onclick="getInputValue();">Submit</button>
    </div>`
    return sCard
};
