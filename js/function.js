// functions are blocke of code that can be reused multiple times
// functions are defined using the function keyword
// function name(p1,p2,p3) {
//     // code to be executed
// }
function myFunction(f) {
  return (5 / 9) * (f - 32);
}
// let value = myFunction(70);
// document.getElementById("demo").innerHTML = value;

let sum = myFunction(100);
document.getElementById("demo").innerHTML = sum;

// arrow function
// const myFunction = (f) => {
//     return (5/9) * (f-32);
// }
const myCalc = (y) => {
  return (5 / 9) * (y - 32);
};

let sum1 = myCalc(100);
document.getElementById("value").innerHTML = sum1;

let mySum = (a, b) => a * b;
let sum2 = mySum(5, 6);
document.getElementById("data").innerHTML = sum2;

// function as an event
// event are actions or occurences that occur in the browser, often initiated by the user
// eg, mouse click, key press, form submission, etc.
function displayDate() {
  document.getElementById("demo").innerHTML = Date();
}

// aynchronus flow
// this refers to how js handles tasks that take time to complete
// eg, loading data from a server or waiting for a user to respond or reading files
// js uses asynchronus which allows operations to run in the background and their results handled later
// asynchronus patterns
// events , callbacks, promises, async/await

// callback function
// a function that is passed as an argument to another function and is executed after the other function has completed
function myDisplayer(some) {
  document.getElementById("type").innerHTML = some;
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

// js promises
// a promise is an object that represents the eventual completion or failure of an asynchronous operation and its resulting value
//states of a promise
// pending: initial state, neither fulfilled nor rejected
// fulfilled: meaning that the operation was completed successfully
// rejected: meaning that the operation failed
// synatx
//const myPromise = new Promise(function(resolve, reject) {
// do an async task, such as fetch data from a server/API/file read
//  if(success){
// resolve(value);
// }else{
// reject(error);
// }
//
// });


// using then and catch
// myPromise
//   .then((result)=>{
//     console.log(result); //success
//   })
//   .catch((error)=>{
//     console.error(error);
//   })
  
  // eg : fetching data
  function fetchData(){
    return new Promise((resolve,reject)=>{
      setTimeout(()=>{
        const success = true;
        if(success){
          resolve({"name":"John","age":30});
        }else{
          reject(new Error("Error fetching data"));
        }
      }, 1000);
    })
  }
  fetchData()
  .then(response => console.log(response))
  .catch(error => console.error(error.message));

  // async/ await
  // async : declares the function as asynchronous
  // await : waits for a promise to resolve and returns the resolved value(fulfilled , rejected)
  // await can only be used inside an async function
  const processUserData= async ()=>{
     try {
      const response = await fetchData();
      console.log(response);
     } catch (error) {
      console.error(error.message);
     }
  } 
  processUserData();

