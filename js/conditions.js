// conditiional statemnets allow us to perform different actions based on different conditions
// if
// if ...else
// if ...else if...else
// switch
// ternary operator


// 1. if
// if (condition) {
//     // code to be executed if the condition is true
// }
let a = 7;
let b = 6;
if (a > b) {
    console.log("a is greater than b");
    document.getElementById("demo1").innerHTML = "a is greater than b";
}

// 2. if ...else
// if (condition) {
//     // code to be executed if the condition is true
// } else {
//     // code to be executed if the condition is false
// }
let c = 5;
let d = 6;
if (c > d) {
    console.log("c is greater than d");
    document.getElementById("demo2").innerHTML = "c is greater than d";
} else {
    console.log("c is less than d");
    document.getElementById("demo3").innerHTML = "c is less than d";
}


// 3. if ...else if...else
// if (condition1) {
//     // code to be executed if the condition1 is true
// } else if (condition2) {
//     // code to be executed if the condition2 is true
// } else {
//     // code to be executed if none of the conditions are true
// }
let e = 5;
let f = 6;
if (e > f) {
    console.log("e is greater than f");
    document.getElementById("demo4").innerHTML = "e is greater than f";
} else if (e < f) {
    console.log("e is less than f");
    document.getElementById("demo5").innerHTML = "e is less than f";
} else {
    console.log("e is equal to f");
    document.getElementById("demo6").innerHTML = "e is equal to f";
}


// 4. switch
// switch (expression) {
//     case value1:
//         // code to be executed if the expression is equal to value1
//         break;
//     
//     default:
//         // code to be executed if none of the cases match
// }
let date = new Date().getDay();
let day;
switch (date) {
    
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wedensday";
        break;
    case 4:
        day = "Thursday";
        break;
    default:
        day = "Friday";
        break;
}
console.log(day);
document.getElementById("demo7").innerHTML = day;

// ternary operator
// condition ? true : false
let g = 5;
let h = 6;
let i = g > h ? "g is greater than h" : "g is less than h";
console.log(i);
document.getElementById("demo8").innerHTML = i;

let age = 16;
let vote = (age >= 18) ? "You can vote" : "You cannot vote";
console.log(vote);
document.getElementById("demo9").innerHTML = vote;
