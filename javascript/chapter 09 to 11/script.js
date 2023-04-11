var cityName = prompt("Enter the name of your city", "Karachi");

if(cityName === "Karachi")
{
    console.log("Welcome to city of Lights");
}

else
{
    console.log("Your city is something else");
}

var genderInput = prompt("Enter your gender", "male");
genderInput = genderInput.toLowerCase();
if(genderInput === "male")
{
    console.log("Good Morning Sir");
}

else if(genderInput === "female")
{
    console.log("Good Morning Ma'am");
}


//3
var signalColor = prompt("Enter Signal Color", "red");
var message;
if(signalColor === "red")
{
    message = "Must Stop";
}

else if(signalColor === "yellow")
{
    message = "Ready to move";
}

else if(signalColor === "green")
{
    message = "Move now";
}

else
{
    message = ("Signal is something else");
}

console.log(message);

var remainingFuel = +prompt("Enter Remainig fuel (in litres)");
if(remainingFuel < 0.25)
{
    console.log("Please refill the fuel in your car");
}

//5
var a = 4;
if(++a === 5)
{
    console.log("given condition for variable a is true");
    //true
}

var b = 82;

if(b++ === 83)
{
    alert("given condition for variable b is true");
    //false
}

var c = 12;
if(c++ === 13)
{
    alert("condition 1 is true");
    //false

}

if(c === 13)
{
    alert("condition 2 is true");
    //false
}

if(++c < 14)
{
    alert("condition 3 is true");
    //false
}

if(c === 14)
{
    alert("condition 4 is true");
    //true
}


var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if(totalCost === laborCost + materialCost)
{
    alert("The cost equals");
}


if(true)
{
    alert("True");
    //true
}

if(false)
{
    alert("False");
    //false
}

if("car" < "cat")
{
    alert("car is smaller than cat");
    //true
}




//6
var totalMarks = +prompt("Enter Total Marks",300);
var obtainedMarks = +prompt("Enter obtained marks", 200);

var percentage = obtainedMarks / totalMarks * 100;
percentage = percentage.toFixed(2);
var grade;
var remarks;
if(percentage >= 80)
{   
    grade = "A-one";
    remarks = "Excellent";
}

else if(percentage >= 70)
{
    grade = "A";
    remarks = "Good";
}


else if(percentage >= 60)
{
    grade = "B";
    remarks = "You need to improve";
}

else if(percentage < 60)
{
    grade = "Fail";
    remarks = "Sorry";
}


console.log("Total Marks: " + totalMarks);
console.log("Obtained Marks: " + obtainedMarks);
console.log("Percentage: " + percentage);
console.log("Grade: " + grade);
console.log("Remarks: " + remarks);


// 7
var randomNum = Math.random() * 10;
randomNum = Math.round(randomNum);
var userGuess = +prompt("Choose a number between 1 to 10");
if(randomNum === userGuess)
{
    console.log("Bingo! Correct Answer");
}
else if(++userGuess === randomNum )
{
console.log("Close enough to correct answer");
}



// 8
var userInput = +prompt("Enter a number");
var remainder = userInput % 3;

if(remainder === 0)
{
    console.log("Your number is divisible by 3");
}

else
{
    console.log("Your number is not divisible by 3");
}



// 9

var userInput2 = +prompt("Enter an odd number or even number");
var isEven = false;
var remaining = userInput2 % 2;
if(remaining === 0)
{
    isEven = true;
}

if(isEven === true)
{
    console.log("Your number is even");
}

else
{
    console.log("Your number is odd");
}



//10
var inputTemperature = +prompt("Enter Temperature");
var tempMessage;
if(inputTemperature > 40)
{
    tempMessage = "It is too hot outside."
}

else if(inputTemperature > 30)
{
    tempMessage = "The Weather today is normal";
}

else if(inputTemperature > 20)
{
    tempMessage = "Today's Weather is cool";
}

else if(inputTemperature > 10)
{
    tempMessage = "Today's Weather is so cool";
}

console.log(tempMessage);


// 11
var num1Input = +prompt("Enter first number");
var num2Input = +prompt("Enter second number");
var operatorInput = prompt("Enter any single arthimetic operator");
var result;
if(operatorInput === "+")
{
    result = num1Input + num2Input;
}

else if(operatorInput === "-")
{
    result = num1Input - num2Input;
}

else if(operatorInput === "*")
{
    result = num1Input * num2Input;
}

else if(operatorInput === "/")
{
    result = num1Input / num2Input;
}

console.log(result);

