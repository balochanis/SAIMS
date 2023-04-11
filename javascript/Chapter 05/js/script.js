//1
var num1 = 3;
var num2 = 5;
var addition = num1 + num2;
var subtraction = num1 - num2;
var multiplication = num1 * num2;
var division = num1 / num2;
var modulus = num1 % num2;




//2
document.write("<p>Sum of " + num1 + " and " + num2 + " is " + addition + " </p>");
document.write("<p>Subtraction of " + num1 + " and " + num2 + " is " + subtraction + " </p>");
document.write("<p>Multiplication of " + num1 + " and " + num2 + " is " + multiplication + " </p>");
document.write("<p>Division of " + num1 + " and " + num2 + " is " + division + " </p>");
document.write("<p>Modulus of " + num1 + " and " + num2 + " is " + modulus + " </p>");


//3
var myVar;
document.write("<p>Value after variable declaration is " + myVar + "</p>");

myVar = 5;
document.write("<p>Initial value: " + myVar + "</p>");

var myVar = ++myVar;
document.write("<p>Value after increment is: " + myVar + "</p>");

var myVar = myVar + 7;
document.write("<p>Value after addition is: " + myVar + "</p>");

var myVar = --myVar;
document.write("<p>Value after decrement is: " + myVar + "</p>");

var myVar = myVar % 3;
document.write("<p>The remainder is: " + myVar + "</p>");


//4
var perTicket = 600;
var TicketQty = 5;
var totalTicketsPrice = perTicket * TicketQty;
document.write("<p>Total cost to buy " + TicketQty + " tickets to a movie is " + totalTicketsPrice + "PKR" + "</p>");

//5
var tableNum = 4;
var tableLength = 10;
for(var i = 1; i <= tableLength; i++)
{
    document.write("<p>" + tableNum + " x " + i + " = " + tableNum * i + "</p>");
} 



//6
// var celsiusInput = +prompt("Enter Temperature in Celsius", "25");
// var fahrenheit = (celsiusInput * 9 / 5) + 32;
// document.write("<p>" + celsiusInput + "<sup>0</sup>C is " + fahrenheit + "<sup>0</sup>F</p>");


// var fahrenheitInput = +prompt("Enter temperature in Fahrenheit", "70");
// var celsius = (fahrenheitInput - 32 ) * 5 / 9;
// document.write("<p>" + fahrenheitInput + "<sup>0</sup>F is " + celsius + "<sup>0</sup>C</p>");


//7
// document.body.innerHTML = "";
document.write("<h1>Shopping Cart</h1>");

var item1Price = 650;
var item1Qty = 3;
var item1Total = item1Price * item1Qty;
var item2Price = 100;
var item2Qty = 7;
var item2Total = item2Price * item2Qty;
var shippingCharges = 100;
var totalCost = item1Total + item2Total + shippingCharges;
document.write("<p>Product of item 1 is " + item1Price + "</p>");
document.write("<p>Quantity of item 1 is " + item1Qty + "</p>");

document.write("<p>Price of item 2 is " + item2Price + "</p>");
document.write("<p>Quantity of item 2 is " + item2Qty + "</p>");
document.write("<p>Shipping Charges " + shippingCharges + "</p>");
document.write("<p>Total cost of your order is " + totalCost + "</p>");


//8
var totalMarks = 980;
var obtainedMarks = 804;
var percentage = (obtainedMarks / totalMarks) * 100;
document.write("<p>Total Marks: " + totalMarks + "</p>");
document.write("<p>Marks Obtained: " + obtainedMarks + "</p>");
document.write("<p>Percentage: " + percentage + "</p>");


//9
var usDollars = 10;
var sauRiyals = 25;
var dollarsToPkr = usDollars * 104.80;
var riyalsToPkr = sauRiyals * 28;
var totalPkr = dollarsToPkr + riyalsToPkr;
document.write("<p>Total Currency in PKR: " + totalPkr + "</p>");





//10
var myNumber = 5;
myNumber = myNumber + 5 * 10 / 2;
document.write(myNumber);


//11
var currentYear = 2020;
var birthYear = 1992;
var myAge = currentYear - birthYear;

document.write("<h1>Age Calculator</h1>");
document.write("<p>Current Year: "+ currentYear + "</p>");
document.write("<p>Birth Year: " + birthYear + "</p>");
document.write("<p>Your Age is: " + myAge + "</p>");


//12
document.write("<h1>The Geometrizer</h1>");
document.write("<p>Radius of a circle: </p>");
document.write("<p>The circumference is: </p>");
document.write("<p>The area is: </p>");

//12
var radius = 20;
var area = radius * 3.142 * 2;


document.write("<p>Radius of a circle: " + radius + "<p>");
document.write("<p>The circumference is: " + area + "</p>");
document.write("<p>The area is: " + area.toFixed(2) + "</p>");





//13
var favSnack = "chocolate chip";
var currentAge = 15;
var maxAge = 65;
var snacksPerDay = 3;
var totalSnacks = (maxAge-currentAge) * snacksPerDay;

document.write("<h1>The Lifetime Supply Calculator</h1>");
document.write("<p>Favourite Snack: " + favSnack  + "</p>");
document.write("<p>Current age: " + currentAge  + "</p>");
document.write("<p>Estimated Maximum Age: " + maxAge  + "</p>");
document.write("<p>You will need " + snacksPerDay +  " " + favSnack + " to last you until the ripe old age of " + maxAge + "</p>");


