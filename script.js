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
var userScoreEl = document.querySelector("#userScore")
var nameInput=document.querySelector("#name")
var userScores = document.querySelector("#userScores")

var questionNumber = 0
var question = ''
var answer = ''
var correct = ''
var timer = 3

var questions = [{
    question: "Commonly used data types DO NOT include:",
    answer: ["Strings","booleans", "alerts", "numbers" ],
    correct:3,
},
{
    question: "The condition in an if/else statement is enclose within ____.",
    answer: ["quotes","curly brackets", "parentheses", "square brackets" ],
    correct:3,
}
// ,
// {
//     question: "Arrays in JavaScript can be used to store _____.",
//     answer: ["numbers and strings","other arrays", "booleans", "all of the above" ],
//     correct:4,
// },
// {
//     question: "String values must be enclosed within _______ when being assigned to variables.",
//     answer: ["commas","curly brackets", "parentheses", "square brackets" ],
//     correct:3,
// }
]

function toggleDone() {
    if(doneEl.style.display == "none"){
        doneEl.style.display = "block"
        userScoreEl.textContent = "Your final score " + timer
    }
    else{
        doneEl.style.display = "none"

    }
}

function toggleScore() {
    if(scoreEl.style.display == "none"){
        scoreEl.style.display = "block"

        Object.keys(localStorage).forEach(element => {
            var user = document.createElement("li")
            user.textContent = element + " - " +localStorage.getItem(element)
            userScores.appendChild(user)
            console.log(element, element.value )
            
        });

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
        toggleDone()

    }

}

submitButton.addEventListener("click", function () {
    toggleDone()
    toggleScore()
    var name = nameInput.value.trim()
    localStorage.setItem(name, timer)
})


backButton.addEventListener("click", function(){
    toggleScore()
    toggleStart()
})


function time(){

    var timerInterval = setInterval(function() {
        timer--
        timerEl.textContent = "Time: " + timer
        

        if(timer == 0){
            clearInterval(timerInterval)
            toggleQuiz()
            toggleDone()
        }
    
    }, 1000)


}

buttonEl.addEventListener("click", function(){
    timer = 3
    time()

    toggleStart() 
    toggleQuiz()

    loadQuestion()


    
    
    answerEl.addEventListener("click", function (event) {
        var element = event.target
        
        if(element.matches("button")){
            var index = element.getAttribute("data-index")

            console.log(index)

            if(index == questions[questionNumber].correct){
                questionNumber++
                toggleCorrect()
                loadQuestion()

            }
            else{
                questionNumber++
                timer -= 15
                loadQuestion()
                toggleWrong()
            }

        }
    })
   




})
