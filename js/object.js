// an object is a collection of related data and/or functionality
// objects are used to store data values in key/value pairs
// objects are used to perform operations on data

// creating an object
const person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
};
console.log(person);
document.getElementById("demo").innerHTML =
  person.firstName + " " + person.lastName;

// creating an object 2
const car={};
car.make="BMW";
car.model="X5";
car.year="1999";
document.getElementById("value").innerHTML=car.model;

// object properties
// accessing object properties
const vehicle ={
    make:"Audi",
    model:"A4",
    year:"2019"
}
document.getElementById("try").innerHTML="This is an" + " " + vehicle.make + " it is a " + vehicle.year + " " + vehicle.model;