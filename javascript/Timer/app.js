var hour = +prompt("Set hours");
var min = +prompt("Set mins");
var sec = +prompt("Set seconds");
// var milli = 0;

var a = document.getElementById("a");
var b = document.getElementById("b")
var c = document.getElementById("c")
// var d = document.getElementById("d")

a.innerHTML = hour;
b.innerHTML = min;
c.innerHTML = sec;
// d.innerHTML = milli;

var interval;

function timer(){
    sec--;
    c.innerHTML= sec;
    if (sec== 0){
        sec = c.innerHTML;
        min--;
        b.innerHTML= min;
        sec = 60;
        c.innerHTML= sec;
    }
    else if(min == 0){
        min = b.innerHTML;
        hour--;
        a.innerHTML = hour;
        min= 60;
        b.innerHTML= min;
    } 
}

function start(){
    var x = document.getElementById("x").style.display="none";
    interval = setInterval(timer , 1000);
}

function pause(){
    var x = document.getElementById("x").style.display="";
    clearInterval(interval);
}

function reset(){
    var x = document.getElementById("x").style.display="";

    pause();
    hour = 0;
    min = 0 ;
    sec = 0;
    a.innerHTML = hour;
    b.innerHTML = min;
    c.innerHTML = sec;
    var hour = +prompt("Enter hours");
    var min = +prompt("Enter mins");
    var sec = +prompt("Enter seconds");   
}