//1
var students = [];


//2
var students2 = new Array();


//3
var fruits = ["apple", "banana", "orange", "pineapple", "mango"];

//4
var expenses = [200, 300, 400, 600];

//5
var booleans = [true, false, false, true, false, true, true];

//6
var mixedArray = ["Apple", 300, true];


//7;
var qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil", "PhD"];
document.write("<h1>Qualifications:</h1>");
for(var i=1; i <qualifications.length; i++)
{
    document.write(i + ") " + qualifications[i]  + "<br>" );
}

//8 start
var student1 = ["Michael", 320, 64];
var student2 = ["John", 230, 46];
var student3 = ["Tony", 480, 96];

console.log("Score of " + student1[0] + " is " + student1[1] + ". Percentage: " + student1[2] + "%");
console.log("Score of " + student2[0] + " is " + student2[1] + ". Percentage: " + student2[2] + "%");
console.log("Score of " + student3[0] + " is " + student3[1] + ". Percentage: " + student3[2] + "%");



// //9

var colors = ["Blue", "Purple", "Magenta", "Red"];
console.log(colors);

//add color in the beginning
var addColorInBeginning = prompt("Add color the beginning", "Brown");
colors.unshift(addColorInBeginning);
console.log(addColorInBeginning + " added in the array");
console.log(colors);

var addColorInEnd = prompt("Add color at the end of the array", "Green");
colors.push(addColorInEnd);
console.log(addColorInEnd + " added at the end of the array");
console.log(colors);

var addColorInBeginning2 = prompt("Enter item in the array on start", "Black");
var addColorInBeginning3 = prompt("Enter item in the array on start", "White");

colors.unshift(addColorInBeginning2, addColorInBeginning3);
console.log(addColorInBeginning2 + " and " + addColorInBeginning3 + " are added in the array");
console.log(colors);

var deleteFromBeginning = colors.shift();
console.log(deleteFromBeginning + " is deleted from the array");
console.log(colors);

var deleteFromEnd = colors.pop();
console.log(deleteFromEnd + " is deleted from the array");
console.log(colors);


var indexNum = +prompt("Enter index number to add your color", 2);
var addColorInIndex = prompt("Enter color to add in the index", "Yellow");
colors.splice(indexNum, 0, addColorInIndex);
console.log(addColorInIndex + " is added in the array at the position of " + indexNum);
console.log(colors);


var deleteColorInIndex = +prompt("Enter index number to delete color from array", 3);
var deleteColorsFromIndex = deleteColorInIndex;
var colorsDeleted = colors.splice(deleteColorInIndex, deleteColorsFromIndex);
console.log(colorsDeleted + " are deleted from array");
console.log(colors);




//10
var scores = [320, 230, 480, 120];
console.log("Scores of Students: " + scores);
console.log("Ordered Scores of Students" + scores.sort());



//11
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
var selectedCities = cities.slice(2,4);
console.log(selectedCities);



//12
var arr = ["This", "is", "my", "cat"];
console.log(arr.join(" "));


//13
var devices = [];

for(var i=0; i<4; i++)
{   
    var addInArray = prompt("Enter item in array");
    devices.push(addInArray);
}
console.log(devices);




//14
var itemstoAdd2 = ["keyboard", "mouse", "printer", "monitor"];
var devices2 = [];

for(var i=0; i<4; i++)
{
    var addInArray2 = prompt("Enter items in array", itemstoAdd2[i]);
    devices2.unshift(addInArray2);
    console.log(devices2);
}


//15
var manufactures = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (let i = 0; i < manufactures.length; i++) {
    document.write("<option>" + manufactures[i]  + "</option>");
    
}
document.write("</select>");