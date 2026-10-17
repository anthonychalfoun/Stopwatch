let secondsHTML = document.getElementById("seconds");
let millisecondsHTML = document.getElementById("milliseconds");
let minutesHTML = document.getElementById("minutes");
let hoursHTML = document.getElementById("hours");

let startButton = document.getElementById("btn-start");
let pauseButton = document.getElementById("btn-pause");
let resetButton = document.getElementById("btn-reset");

let seconds = 0;
let milliseconds = 0;
let minutes = 0;
let hours = 0;

let interval;

startButton.addEventListener("click", () => {
    clearInterval(interval);
    interval = setInterval(startTimer, 10);
})

function startTimer() {
    milliseconds++
    if (milliseconds < 10) {
        millisecondsHTML.textContent = "0" + milliseconds
    }
    else if (milliseconds < 100) {
        millisecondsHTML.textContent = milliseconds
    }
    else if (milliseconds > 99) {
        seconds++
        milliseconds = 0
        millisecondsHTML.textContent = "00"

        if (seconds < 10) {
            secondsHTML.textContent = "0" + seconds
        }
        else if (seconds >= 10 && seconds < 60) {
            secondsHTML.textContent = seconds
        }
        else if (seconds > 59) {
            minutes++
            milliseconds = 0
            seconds = 0
            millisecondsHTML.textContent = "00"
            secondsHTML.textContent = "00"

            if (minutes < 10) {
                minutesHTML.textContent = "0" + minutes
            }
            else if (minutes >= 10) {
                minutesHTML.textContent = minutes
            }
            else if (minutes > 59) {
                hours++
                minutes = 0
                milliseconds = 0
                seconds = 0
                millisecondsHTML.textContent = "00"
                secondsHTML.textContent = "00"
                minutesHTML.textContent = "00"

                if (hours < 10) {
                    hoursHTML.textContent = "0" + hours
                }
                else if (hours >= 10) {
                    hoursHTML.textContent = hours
                }
            }
        }

    }

    pauseButton.addEventListener("click", () => {
        clearInterval(interval);

    });

    resetButton.addEventListener("click", () => {
        clearInterval(interval);
        interval

    });




}

