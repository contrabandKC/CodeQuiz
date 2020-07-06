var timerEl = document.querySelector("#timer")
var buttonEl = document.querySelector("#startButton")
var startEl = document.querySelector("#start")
var quizEl = document.querySelector("#quiz")
var answerEl = document.querySelector("#answers")

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

