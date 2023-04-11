var min = 0;
var sec = 0;
var milli = 0;
var displayMin = document.getElementById("min");
var displaySec = document.getElementById("sec");
var displayMilli = document.getElementById("milli");
var interval;

function timer() {
    milli++;
    displayMilli.innerHTML = milli;
    if (displayMilli.innerHTML == 100) {
        sec++;
        displaySec.innerHTML = sec;
        milli = 0;
        displayMilli.innerHTML = milli;
    } else if (displaySec.innerHTML == 60) {
        min++;
        displayMin.innerHTML = min;
        sec = 0;
        displaySec.innerHTML = sec;
    }
}

function start() {
    var start = document.getElementById("start").style.display="none";
    interval = setInterval(timer, 10);
}

function pause() {
    var start = document.getElementById("start").style.display="";
    clearInterval(interval);
}

function reset() {
    pause();
    min = 0;
    sec = 0;
    milli = 0;
    displayMin.innerHTML = min;
    displaySec.innerHTML = sec;
    displayMilli.innerHTML = milli;
}


