// Chapter 1 (Changing Case)

// Q1
// var name = prompt("Enter your name");
// name = name.toUpperCase();
// alert(name);

// Q2
// var name = prompt("Enter your name");
// name = name[0].toUpperCase() + name.slice(1).toLowerCase();
// console.log(name);



// Chapter 2 (Strings: measuring length and extracting parts)

// Q1
// var userMobile = prompt("Enter your favourite Mobile");
// userMobile = userMobile.length;
// document.write("The length is: " + userMobile);

// Q2
// var userName = prompt("Enter your name");
// var total = userName.length;
// var total1 = total-1;
// var lastChar = userName.charAt(total1).toUpperCase();
// console.log(lastChar);



// Chapter 3 (Strings: Finding Segments)

// Q1
// var country = "Pakistani";
// country = country.indexOf("n");
// document.write("The index no. of letter (n) is: " + country);

// Q2
var userName = prompt("Enter your name");
var arr = ['!' , '@' , '.'];
for(i=0 ; i<=arr.length ; i++){
    
}















// Q3
// var message = "The quick brown fox jumps over the lazy dog";
// var message = message.toLowerCase();
// var counts = 0;
// var find = "the";
// for (var i = 0; i <= message.length; i++) {
//   if (message.slice(i, i + 3) === find) {
//     ++counts;
//     }
//  }
// document.write("The word " + find + " is "+ counts + " times in the paragragh.");



// Chapter 4 (Strings: finding a character at a location)

// Q1
// var country = "Pakistani";
// var indexNo = country.charAt(3);
// document.write(indexNo + " is on the 3rd index. ");




// Chapter 5 (Strings: replacing characters)

// Q1
// var city = "Hyderabad";
// var city1 = city.replace("Hyder" , "Islam");
// document.write("<h1>" + city1 + "</h1>");

// Q2
// var message = "Ali and Sami are best friends. They play cricket and football together." ; 
// message = message.replace( /and/g , "&");
// document.write("<h1>" + message + "</h1>");



// Chapter 6 (Rounding numbers)

// Q1 (A)
// var number = +prompt("Enter any Positive integar");
// document.write(number);
// (b)
// var number = +prompt("Enter any Positive integar");
// number = Math.round(number);
// document.write(number);
// (c)
// var number = +prompt("Enter any Positive integar");
// number = Math.floor(number);
// document.write(number);
// (d)
// var number = +prompt("Enter any Positive integar");
// number = Math.ceil(number);
// document.write(number);

// Q2 (A)
// var number = +prompt("Enter any Negative integar");
// document.write(number);
// (b)
// var number = +prompt("Enter any Negative integar");
// number = Math.round(number);
// document.write(number);
// (c)
// var number = +prompt("Enter any Negative integar");
// number = Math.floor(number);
// document.write(number);
// (d)
// var number = +prompt("Enter any Negative integar");
// number = Math.ceil(number);
// document.write(number);



// Chapter 7 (Generating random numbers)

// Q1
// var number = Math.round(Math.random() * 6);
// console.log(number);

// Q2
// var flipCoin = Math.round(Math.random()*2);
// if(flipCoin === 1){
//     document.write("Head")
// }else{
//     document.write("Tails");
// }

// Q3
// var randomNum = Math.round(Math.random()*10);
// var userNum = +prompt("Enter any number from 1 to 10");
// if(randomNum === userNum){
//     alert("Congratulations! you win");
// }else{
//     alert("Try again");
// }



// Chapter 8 (Converting strings to integers and decimals)

// Q1
// var userWeight = prompt("Enter your weight");
// userWeight = Number(userWeight);
// console.log("Your weight is: " + userWeight + " kgs");



// Chapter 9 (Converting strings to numbers, numbers to strings)

// Q1
// var str = "472";
// str = parseInt(str);
// document.write(str + " is a  " + typeof(str));

// Q2
// var num = 35.36;
// num = num.toString().replace("." , "");
// document.write(num);



// Chapter 10 (Controlling the length of decimals)

// Q1
// var percentage = 30 / 45 * 100;
// percentage = percentage.toFixed(2);
// document.write(percentage);




























































































































































































