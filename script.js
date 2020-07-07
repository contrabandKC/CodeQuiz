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
var wrongEl = document.querySelector("#wrong")
var correctEl = document.querySelector("#correct")

var questionNumber = 0
var question = ''
var answer = ''
var correct = ''
var timer = 75

var questions = [{
    question: "question 1",
    answer: ["answer1","answer 2", "answer 3", "Answer 4" ],
    correct:1,
},
{
    question: "question 2",
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

function toggleWrong() {
    if(wrongEl.style.display == "none"){
        wrongEl.style.display = "block"
    }
    else{
        wrongEl.style.display = "none"

    }
}

function toggleCorrect() {
    if(correctEl.style.display == "none"){
        correctEl.style.display = "block"
    }
    else{
        correctEl.style.display = "none"

    }
}



var timerInterval = setInterval(function() {
    timer--
    timerEl.textContent = "Time: " + timer
    
    if(timer == 0){
        clearInterval(timerInterval)
        toggleQuiz()
        toggleDone()
    }

}, 1000)



function time(){

    timerInterval

}

// time()

function loadQuestion() {

    

    while (answerEl.lastElementChild) {
        answerEl.removeChild(answerEl.lastElementChild);
      }

    if(questions[questionNumber]){
        questionEl.textContent = questions[questionNumber].question
    
        questions[questionNumber].answer.forEach(function(element, i) {
            var answers = document.createElement("button")
            answers.textContent =element
            // console.log(i)
            answers.setAttribute("data-index", i)
            answerEl.appendChild(answers)
    
        });
    }
    else{
        clearInterval(timerInterval)

    }

}

buttonEl.addEventListener("click", function(){

    toggleStart() 
    toggleQuiz()

    loadQuestion()

    
    answerEl.addEventListener("click", function (event) {
        var element = event.target
        
        if(element.matches("button")){
            var index = element.getAttribute("data-index")

            console.log(index)

            if(index == questions[questionNumber].correct){
                console.log("correct")
                questionNumber++
                toggleCorrect()
                loadQuestion()

            }
            else{
                questionNumber++
                timer = timer - 15
                loadQuestion()
                toggleWrong()
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