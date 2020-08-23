//Question variable
const qanda = [
    {
        question : 'What is the base coding language all front-end website developers must know? (Also commonly referred to as the "skeleton" of a website)',
        answers : [
            {text:'HTMl', value:'correct'},
            {text:'CSS', value:'incorrect'},
            {text:'Java', value:'incorrect'},
            {text:'Javascript', value:'incorrect'},
        ]
    },
    {
        question : 'What coding language would you use to change the overall asthetics (font, layout, colors, etc.) of a webpage?',
        answers : [
            {text:'HTMl', value:'incorrect'},
            {text:'Javascript', value:'incorrect'},
            {text:'Java', value:'incorrect'},
            {text:'CSS', value:'correct'},
        ]
    },
    {
        question : "What coding language would you use to increase a website's functionality and to encourage user interaction?",
        answers : [
            {text:'HTMl', value:'incorrect'},
            {text:'Javascript', value:'correct'},
            {text:'jquery', value:'incorrect'},
            {text:'CSS', value:'incorrect'},
        ]
    },
    {
        question : 'What is jQuery?',
        answers : [
            {text:'A more complex version of CSS', value:'incorrect'},
            {text:'A new way to code your base HTML', value:'incorrect'},
            {text:'A mixture of HTML and Java', value:'incorrect'},
            {text:'A simplified version of Javascript that is easier to use', value:'correct'},
        ]
    },

    {
        question : 'What is the main function of ajax?',
        answers : [
            {text:'adds special animations to on-screen text', value:'incorrect'},
            {text:'rewrites and simplifies code for easier interpretation', value:'incorrect'},
            {text:'Creating dynamic web pages that can update without having to reload', value:'correct'},
            {text:"provides links to w3schools for when you're lost and don't know what you're doing", value:'incorrect'},
        ]
    }
]
let currentQuestion = 0
//

//Begin! Button//
const beginButton = document.getElementById('start-button');
beginButton.addEventListener('click', function() {
    showNextQuestion();

let time = 120;
const countdownEl = document.getElementById('timer');
//const interval//
setInterval(updateCountdown, 1000);
function updateCountdown() {
    countdownEl.innerHTML = `${time}`;
    time--;
}
})
//
document.addEventListener('click',function(e){
    if(e.target && e.target.id== 'next-question'){
        showNextQuestion();   
    //if statement for last question check, if it is, calculate score, else show next question//      
     }
 });

function showNextQuestion() {
    document.querySelector(".card-container").innerHTML = "";
    const nextQuestion = generateCard(qanda[currentQuestion]);
    document.querySelector(".card-container").innerHTML = nextQuestion;
    currentQuestion++;

}

function generateCard(qObject) {

const qCard = `<div class="card text-center" style="width: 25rem;">
<div class="card-body text-center">
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
  <button class="btn btn-secondary" id="next-question">Next</button>
</div>`
return qCard
}
