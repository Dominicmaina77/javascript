// let x =5;
// let y=6;
// let z=x+y;
// document.getElementById("demo").innerHTML=z;
// document.getElementById("demo").style.color="red";

// variable is a container that stores values
// we declare variables by using the const,let or var keyword
// let eg
// variables can be letters,numbers,dash underscore or symbols but cannot start with a number
// variables are case sensitive i.e Value and value are different variables
let value = 5;
let  Value = 6;
let plus = value + Value;
document.getElementById("demo").innerHTML = plus; 

// keywords
// const
//  const cannot be redeclared
// const cannnot be reassigned

// cannot be reassigned
// a variable with const cannot be reassigned
const sum = 5;
sum = 20;  //this will give an error
document.getElementById("demo1").innerHTML = sum;

// const cannot be redeclared
const sum1 = 5;
const sum2 = 20;
// const sum1 = 20;   // this will give an error
document.getElementById("demo2").innerHTML = sum1 + sum2;

// variables defined with const have a block scope
{
    const sum1 =5;
    const sum2 = 6;
    document.getElementById("demo3").innerHTML = sum1 + sum2;
}


// let cannot be redeclared
// variables defined with ley cannot be redeclared
let x = "Hello";
// let x = "World";
document.getElementById("demo4").innerHTML = x;

// variables defined with let can be reassigned 
let y = "Hello";
y = "World";
document.getElementById("demo5").innerHTML = y;

// let t;
// t= 5;
let t =5
document.getElementById("demo6").innerHTML = t;



