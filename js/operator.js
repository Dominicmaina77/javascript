// operators
// arithmetic operator
// assignment operator
// comparison operator

// 1. arithmetic operators
// addition (+)
let x = 5;
let y = 6;
let z = x + y;
document.getElementById("demo").innerHTML = "The sum of " + x + " and " + y + " is " + z;

// subtraction (-)
let a = 5;
let b = 6;
let c = a - b;
document.getElementById("value").innerHTML = "The difference between " + a + " and " + b + " is " + c;

// multiplication (*)
let d = 5;
let e = 6;
let f = d * e;
document.getElementById("sum").innerHTML = "The product of " + d + " and " + e + " is " + f;

// division (/)
let g = 5;
let h = 6;
let i = g / h;
document.getElementById("operate").innerHTML = "The quotient of " + g + " and " + h + " is " + i;

// remainder (%)
let j = 5;
let k = 6;
let l = j % k;
document.getElementById("assign").innerHTML = "The remainder of " + j + " and " + k + " is " + l;

// increment (++)
let m = 5;
m++;
document.getElementById("demo1").innerHTML = "The incremented value of " + 5 + " is " + m;

// decrement (--)
let n = 5;
n--;
document.getElementById("demo2").innerHTML = "The decremented value of " + 5 + " is " + n;

// 2. assignment
// assignment oprators assign values to js variables

// 1. simple assignment (=)
let p = 5;
let q = 6;
let r = p + q;
document.getElementById("demo3").innerHTML = "The sum of " + p + " and " + q + " is " + r;

// 2. addition assignment (+=)
let s = 5;
s += 6;
document.getElementById("demo4").innerHTML = "The sum of " + s;

// 3. subtraction assignment (-=)
let t = 5;
t -= 6;
document.getElementById("demo5").innerHTML = "The difference between " + t;

// 4. multiplication assignment (*=)
let u = 5;
u *= 6;
document.getElementById("demo6").innerHTML = "The product of " + u;



// 3. comparison operators
// 1. equal to (==)
let v = 5;
let w = 6;
let _x  = v == w;
document.getElementById("demo7").innerHTML = "The sum of " + v + " and " + w + " is " + _x;

// 2. equal type and equal value (===)
let _y = 5;
let _z = "5";
let _a = _y === _z;
document.getElementById("demo8").innerHTML = "The sum of " + _y + " and " + _z + " is " + _a;

// 3.not equal (!=)
let _b = 5;
let _c = 6;
let _d = _b != _c;
document.getElementById("demo9").innerHTML = "The sum of " + _b + " and " + _c + " is " + _d;

// 4. not equal type or not equal value (!==)
let _e = 5;
let _f = 6;
let _g = _e !== _f;
document.getElementById("demo10").innerHTML = "The sum of " + _e + " and " + _f + " is " + _g;
