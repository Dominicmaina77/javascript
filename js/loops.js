// loops allow a block of code to be executed a number of times

// while loop
// syntax
// while (condition) {
//     // code to be executed
// }

// for loop
// syntax
// for(exp1,exp2,exp3){
// code to be executed
// }

const cars = [
  "Toyota",
  "Audi",
  "Honda",
  "BMW",
  "Volvo",
  "Mercedes",
  "Ferrari",
  "Lamborghini",
];
let text = "";

for (let i = 0; i < cars.length; i++) {
  text += cars[i] + "<br>";
}
// document.getElementById("demo1").innerHTML = text;

// while loop
let txt = "";
let u = 0;
while (u < 10) {
  txt = "The number is " + u ;
  u++;
}
document.getElementById("demo2").innerHTML = txt;


// do while loop 
// syntax
// do{
// code to be execud
// }
// while(condition){
// code to be executed
// }
let word ="";
let w=0;
do{
    word +="<br>The number is"+ w;
    w++;
}
while(w < 10);
document.getElementById('demo3').innerHTML=word;
