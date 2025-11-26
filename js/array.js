// an array is an object designed to store data collections

// syntax
// const arrayName = [value1,value2,value3,value4]

// creating an array
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo1").innerHTML = cars;

// method two
const cars1 = new Array("Saab", "Volvo", "BMW");
document.getElementById("demo2").innerHTML = cars1;

// method three
const cars2 = [];
cars2[0] = "Saab";
cars2[1] = "Volvo";
cars2[2] = "BMW";
document.getElementById("demo3").innerHTML = cars2;

// accessing an array
const cars3 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo4").innerHTML = cars3[2];

// length of an array
const cars4 = ["Saab", "Volvo", "BMW"];
document.getElementById("demo5").innerHTML = cars4.length;

// changing an element in an array
const cars5 = ["Saab", "Volvo", "BMW"];
cars5[0] = "Toyota";
document.getElementById("demo6").innerHTML = cars5;

// array methods
// push()
// adds a new element at the end of an array
const cars6 = ["Saab", "Volvo", "BMW"];
cars6.push("Toyota");
document.getElementById("demo7").innerHTML = cars6;

// pop
// removes the last element from an array
const cars7 = ["Saab", "Volvo", "BMW"];
cars7.pop();
document.getElementById("demo8").innerHTML = cars7;

// shift
// removes the first element from an array
const cars8 = ["Saab", "Volvo", "BMW"];
cars8.shift();
document.getElementById("demo9").innerHTML = cars8;

// unshift
// adds a new element at the beginning of an array
const cars9 = ["Saab", "Volvo", "BMW"];
cars9.unshift("Toyota");
document.getElementById("demo10").innerHTML = cars9;

// splice
// adds new elements to an array
// the first parameter 2, specifies the position where new elements should be added
// the second parameter 0, specifies the number of elements to remove
const cars10 = ["Saab", "Volvo", "BMW"];
cars10.splice(2, 0, "Toyota");
document.getElementById("demo11").innerHTML = cars10;

// slice
// returns a part of an array into a new array
// the parameter 1, specifies the start position
// the parameter 3, specifies the end position(not included the 3rd element)
const cars11 = ["Saab", "Volvo", "BMW", "Toyota", "Honda", "Audi"];
const cars12 = cars11.slice(1, 3);
document.getElementById("demo12").innerHTML = cars12;

