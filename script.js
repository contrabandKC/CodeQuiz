var timerEl = document.getElementById("timer")
var buttonEl = document.querySelector("#startButton")









function time(){
    var time = 100

    var timerInterval = setInterval(function() {
        timer--
        timerEl.textContent = "Time: " + timer

    }, 1000)
}

// time()



buttonEl.addEventListener("click", function(){


    time()




})

