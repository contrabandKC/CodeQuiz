var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#startButton")
var startEl = document.querySelector("#start")
var quizEl = document.querySelector("#quiz")


var questionNumber = 0


var questions = [{
    question: "question 1",
    answer: ["answer1","answer 2", "answer 3", "Answer 4" ],
    correct:1,
},
{
    question: "question 1",
    answer: ["answer1","answer 2", "answer 3", "Answer 4" ],
    correct:1,
}]

function time(){

    var timer = 100

    var timerInterval = setInterval(function() {
        timer--
        timerEl.textContent = "Time: " + timer

    }, 1000)


}

// time()



buttonEl.addEventListener("click", function(){

    startEl.setAttribute("style", "display: none;")
    // console.log(questions[1].question)

    
   
    time()




})

