var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#startButton")
var startEl = document.querySelector("#start")
var quizEl = document.querySelector("#quiz")
var questionEl = document.querySelector("#question")
var answerEl = document.querySelector("#answers")
var doneEl = document.querySelector('#done')
var submitButton = document.querySelector("#submit")
var scoreEl = document.querySelector("#score")
var backButton  = document.querySelector("#back")


var questionNumber = 0
var question = ''
var answer = ''
var correct = ''

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

function toggleDone() {
    if(doneEl.style.display == "none"){
        doneEl.style.display = "block"
    }
    else{
        doneEl.style.display = "none"

    }
}

function toggleScore() {
    if(scoreEl.style.display == "none"){
        scoreEl.style.display = "block"
    }
    else{
        scoreEl.style.display = "none"

    }
}

function toggleStart() {
    if(startEl.style.display == "none"){
        startEl.style.display = "block"
    }
    else{
        startEl.style.display = "none"

    }
}

function toggleQuiz() {
    if(quizEl.style.display == "none"){
        quizEl.style.display = "block"
    }
    else{
        quizEl.style.display = "none"

    }
}
function time(){

    var timer = 3

    var timerInterval = setInterval(function() {
        timer--
        timerEl.textContent = "Time: " + timer
        
        if(timer == 0){
            clearInterval(timerInterval)
            toggleDone()
        }

    }, 1000)


}

// time()



buttonEl.addEventListener("click", function(){

    startEl.setAttribute("style", "display: none;")
    // console.log(questions[1].question)

    var questionEl = document.createElement("div")
    // var answerEl = document.createElement("div")

    questionEl.textContent = questions[questionNumber].question
    // answerEl.textContent = questions[questionNumber].answer

    quizEl.appendChild(questionEl)

    questions[questionNumber].answer.forEach(function(element, i) {
        
    
        var answers = document.createElement("button")
        answers.textContent =element
        // console.log(i)

        answers.setAttribute("data-index", i)
        answerEl.appendChild(answers)

    });
    
    answerEl.addEventListener("click", function (event) {
        var element = event.target
        
        if(element.matches("button")){
            var index = element.getAttribute("data-index")

            console.log(index)

            if(index == questions[questionNumber].correct){
                console.log("correct")
            }

        }
    })
   
    time()




})

submitButton.addEventListener("click", function () {
    toggleDone()
    toggleScore()
})


backButton.addEventListener("click", function(){
    toggleScore()
    toggleStart()
})