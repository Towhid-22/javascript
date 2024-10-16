// *==================== part 01 ====================
// *Traditional Function
/*
function myFunction(x, y) {
  return x + y;
}
let add = myFunction(500, 50);
let sub = add - 100;
let mul = sub * 5;
console.log(mul);
*/
// *Arrow Function
/*
let arrowFunction1 = (x, y) => x + y;
let arrowFunction2 = (x, y) => x + y;
let result1 = arrowFunction1(500, 500)
let result2 = result1 * 5;
console.log(result2);
*/
// *Method
/*
let person = {
  name: "Towhidul Islam",
  age: 26,
  cgpa: 3.0,
  add: (x, y) => x + y,
};
console.log(person.add(20, 30));
*/
// *JavaScript Built-in Method
/*
const num = 12.3456;
const name = "Towhid";
console.log(num.toString());
console.log(num.toPrecision(3));
console.log(num.toString());
console.log(Math.abs(-80));
console.log(Math.sqrt(64));
console.log(Math.max(50, 20));
console.log(Math.min(50, 20));
console.log(Math.floor(50.4));
console.log(Math.ceil(50.5));
console.log(Math.round(5.6));

console.log(Math.random(5*8));
const randomNumber = Math.floor(Math.random()*9) + 1;
console.log(randomNumber);


const date = new Date();
console.log(date.getMonth());
console.log(date.getTime());
console.log(date.getDay());
console.log(date.getDate());
console.log(date.getSeconds());
console.log(date.getMilliseconds());
console.log(date.getFullYear());
console.log(date.getUTCDay());
*/

// *Array Method

// *Module (export and import)
/*
import { adds, subs } from "./calculator.js";
import { persons } from "./person.js";

console.log(adds(50, 50));
console.log(subs(90, 50));
console.log(persons.moreInfo(10, 20));
*/

// *Spread Operator in array and object (...)
/*
let oldArray = [5, 6, 7, 8];
let newArray = [1, 2, 3, 4, ...oldArray];
console.log(newArray);

const oldPerson = {
  name: "Towhid",
  age: 26,
};
const newPerson = {
  ...oldPerson,
  subject: "Sociology",
  institute: "Dhaka College",
  cgpa: 3.0,
};
console.log(newPerson);
*/

// *Rest Parameter
/*
let addNumbers = (...numbers) => {
  let sum = 0;
  for (const number of numbers) {
    sum += number;
  }
  return sum;
};
console.log(addNumbers(30, 40));
console.log(addNumbers(30, 40, 50));
console.log(addNumbers(30, 40, 50,50,5326,6666,66822));

let subNumbers = (num1, ...numbers)=>{
  let sum = 0;

  }
*/

// *Destructuring
// !Object Destructuring
/*
const personInfo = {
  fullName: "Towhid",
  age: 26,
  languages: {
    native: "Bengali",
    second: "English",
    other: "Arabic",
  },
};
const {
  fullName: f_name,
  age,
  languages: { native, second, other },
} = personInfo; // that is object notation
console.log(f_name);
*/

// !Array Destructuring
/*
const colors = ["red", "green", "blue", "white"];
const [r, g, b, w] = colors; // that is array notation
console.log(r, g, b, w);
*/
// *Default Value
/*
const greet = (msg = "Good day to you") => {
  console.log(msg);
};
greet("Good Morning");
*/

// *==================== part 01 ====================
// *Higher Order Function
// *Callback Function
/*
console.log("\n \t callback function");
const total = (x,y,subTotal)=>{
  return subTotal(x,y);
};

let add = (x,y)=>{
  return x + y;
};
let sub = (x,y)=>{
  return x - y;
};
let multi = (x,y)=>{
  return x * y;
};
let exponent = (x,y)=>{
  return x ** y;
};
let decrement = (x,y)=>{
  return x - y;
};
let result = total(8,3,decrement);
console.log(result);
*/

// * forEach
/* 
console.log("\n \t callback function");
const person = ["Alex", "Bob", "Chris", "Tim", "Zim", "Warren"];
person.forEach((person, index, newArrays)=>{
  console.log(newArrays);
});
*/

/*
let numbers = [2,4,6,5,10];
let squareNumber = numbers.map((y)=>{
  return y*y
});
console.log(squareNumber);
*/

// * map
/*
let x = [2, 3, 4, 5];
let items = x.map((y) => {
  return y * y;
});
console.log(items);

let listItmes = ["Towhid", 3.0, "Dhaka College", 2024];
let mapitems = listItmes.map(function (value, index, narray) {
  return value + index;
});
console.log(mapitems);
*/

// *Filter
/*
const products = [
  { id: 1, name: "Apple iphone 16", price: 1600 },
  { id: 2, name: "Samsung galaxy", price: 1550 },
  { id: 3, name: "Motorola", price: 1500 },
];
let filtered = products.filter((product)=>{
  return product.price > 1500;
});
console.log(filtered);
*/

// * Filter and map combined
/*
const products = [
  { id: 1, name: "Apple iphone 16", price: 1600 },
  { id: 2, name: "Samsung galaxy", price: 1550 },
  { id: 3, name: "Motorola", price: 1500 },
];
const filteredProducts = products.filter((product)=> product.price >= 1300 && product.price <= 1700).map((product)=> product.price);
console.log(filteredProducts);
*/

// * Include method
/*
const products = [
  { id: 1, name: "Apple iphone 16", price: 1600 },
  { id: 2, name: "Samsung galaxy", price: 1550 },
  { id: 3, name: "Motorola", price: 1500 },
];
const x = products.filter((y)=>y.name.includes("Motorola"))
console.log(x);
*/