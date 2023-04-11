//////////////////////// Quiz Applictaion /////////////////

var questions = [
    {
        question: "HTML stands for:",
        option1: "Hyper Markup Language.",
        option2: "Hybird Language",
        option3: "Hyper Text Markup Language",
        answer: 3,
    },
    {
        question: "Javascript is a:",
        option1: "Programming Language.",
        option2: "Style Sheet",
        option3: "Both A & B",
        answer: 1,
    },
    {
        question: "CSS used for:",
        option1: "Website designing.",
        option2: "Backend Programming.",
        option3: "Making Website Functional.",
        answer: 1,
    },
    {
        question: "CSS Stand for:",
        option1: "Commenting Style Sheet.",
        option2: "Cascading Style Sheet.",
        option3: "Cast Style Sheet.",
        answer: 2,
    },
    {
        question: "HTML is a ________ language : ",
        option1: "Case Sensitive.",
        option2: "Programming.",
        option3: "Both A & B",
        answer: 1,
    },
    {
        question: "How to write function in javascript: ",
        option1: "var func = function{}.",
        option2: "function(){}.",
        option3: "function[]().",
        answer: 2,
    },
    {
        question: "How to apply color on h1:",
        option1: "h1 { color : red ; }",
        option2: "h1[ color = 'red']",
        option3: "h1( color: 'red' )",
        answer: 1,
    },
    {
        question: "Tick correct text to write border:",
        option1: "border : 1px solid black;",
        option2: "border:(1px, solid, black)",
        option3: "border['1px solid black']",
        answer: 1,
    },
    {
        question: "Correct way to show alert box:",
        option1: "ALERT('Hello World')",
        option2: "alert('Hello World')",
        option3: "Alert('Hello World')",
        answer: 2,
    },
    {
        question: "Declare a var in javascript:",
        option1: "var name;",
        option2: "var name : ,",
        option3: "var name = ,",
        answer: 1,
    },
]

var question = document.getElementById("question");
var option1 = document.getElementById("one");
var option2 = document.getElementById("two");
var option3 = document.getElementById("three");

var count = 0;

question.innerHTML = "Q1). " + questions[count].question;
option1.innerHTML = questions[count].option1;
option2.innerHTML = questions[count].option2;
option3.innerHTML = questions[count].option3;

function nextQuestion() {
    if (count < questions.length - 1) {
        var options = document.getElementsByName("option");
        for (var i = 0; i < options.length; i++) {
            if (options[i].checked) {
                console.log(options[i].value)
            }
            options[i].checked = false;
            var btn = document.getElementById("btn").disabled = true;
        }
        count++;
        question.innerHTML = "Q" + (count + 1) + "). " + questions[count].question;
        option1.innerHTML = questions[count].option1;
        option2.innerHTML = questions[count].option2;
        option3.innerHTML = questions[count].option3;
    }
    else {
        console.log("Questions End")
    }
}

function enable() {
    var btn = document.getElementById("btn");

    btn.disabled = false;
}

////////// Timer Integration ////////////////

var mm = 0;
var min = document.getElementById("min");
var sec = document.getElementById("sec")

var interval;

function timer() {
    mm++
    if (mm == 100) {
        sec.innerHTML--
        mm = 0

    }
    else if (min.innerHTML > 0 && sec.innerHTML == 0) {
        min.innerHTML--
        sec.innerHTML = 59
    }
    else if (min.innerHTML == 0 && sec.innerHTML == 0) {
        sec.innerHTML = 0
        min.innerHTML = 0
        alert("timer end")
    }
}

interval = setInterval(timer, 10)

//////////////////////// Show Percentage /////////////////////////////////

// var totalMarks = 
// var percentage = obtainedMarks/totalMarks * 100;
 
