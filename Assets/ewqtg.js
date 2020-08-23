(function() {
    var sec = 60;
    function startTimer(){
        console.log('timer suppose to go')
        var timer = setInterval(function(){
            sec--;
            document.getElementById('timer').innerHTML='00:'+sec;
            if (sec < 0) {
                clearInterval(timer);
                alert("Time is up!")
            }
        }, 1000);
    }
    document.getElementById('incorrect').addEventListener('click', function() {
        sec -= 15;
        document.getElementById('timerDisplay').innerHTML='00:'+sec;
    });
    startTimer();
})();

//https://stackoverflow.com/questions/58964755/subtract-time-from-timer-if-answer-is-wrong-creating-a-quiz-javascript//