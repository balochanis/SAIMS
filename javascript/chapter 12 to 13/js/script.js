//1
var charInput = prompt("Enter any character");
var charCode = charInput.charCodeAt(0);
console.log(charCode);



//2
var num1Input = +prompt("Enter first number");
var num2Input = +prompt("Enter second number");
var result;

if(num1Input > num2Input)
{
 result = num1Input;
}

else if(num1Input < num2Input)
{
    result = num2Input;
}

else if(num1Input === num2Input)
{
    result = "Numbers are equal";
}

console.log(result);



//3
var userInputNumber = +prompt("Enter a number, I will tell if your number is negative, positive or zero ");
var numResult;
if(userInputNumber > 0 )
{
    numResult = "Positive";
}

else if(userInputNumber = 0)
{
    numResult = "Zero";
}


else if(userInputNumber < 0)
{
    numResult = "Negative";
}   

console.log(numResult);


// 4
var vowels = ["a", "e", "i", "o", "u"];
var userChar = prompt("Enter any single char");
userChar = userChar.toLowerCase();
var found = false;
var message = "";
for(var i=0; i <=vowels.length; i++)
{
    if(userChar === vowels[i])
    {
        found = true;
    }
}

if(found)
{
    message = "Your character is vowel";
}

else
{
    message = "Your character is not a vowel";
}

console.log(message);


//5
var passwordInput = prompt("Enter your password");
var password = "12345";
var passMessage;
if(passwordInput === "")
{
    passMessage = "Please enter your password";
}

else if(passwordInput === password)
{
    passMessage = "Correct! The password you entered matches the original password";
}

else
{
    passMessage = "Incorrect password";
}

console.log(passMessage);

//6
var greeting;
var hour = 13;
if(hour < 18)
{
    greeting = "Good day";
}

else
{
    greeting = "Good evening";
}



//7
var timeInput = +prompt("Enter current time, for example 1900", 1900);
var timeMessage;
if(timeInput >= 0000 && timeInput < 1200)
{
    timeMessage = "Good Morning";
}

else if(timeInput >=1200 && timeInput < 1700)
{
    timeMessage = "Good afternoon";
}

else if(timeInput >=1700 && timeInput < 2100)
{
    timeMessage = "Good evening";
}

else if( timeInput >=2100 && timeInput <= 2359)
{
    timeMessage = "Good night";
}


console.log(timeMessage);