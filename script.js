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

// *Higher Order Function
// *Callback Function
/*
console.log("\n \t callback function");
const total = (x, y, subTotal) => subTotal(x, y);
let add = (x, y) => x + y;
let sub = (x, y) => x - y;
let multi = (x, y) => x * y;
let exponent = (x, y) => x ** y;
let decrement = (x, y) => x - y;
let result = total(8, 3, decrement);
console.log(result);
*/

// Todo-- forEach
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

let number = 50;
// let number = parseInt(prompt("Enter a number"));
switch (true) {
  case number >= 100 || number < 0:
    console.log("Enter a number from 1 to 100");
    break;
  case number >= 80:
    console.log("A+");
    break;
  case number >= 70:
    console.log("A");
    break;
  case number >= 60:
    console.log("A-");
    break;
  case number >= 50:
    console.log("B");
    break;
  case number >= 40:
    console.log("C");
    break;
  case number >= 33:
    console.log("D");
    break;
  case number < 33:
    console.log("F");
    break;
  default:
    console.log("Invalid Number");
}

// let info = {
//   fullName: "Towhidul Islam",
//   cgpa: 3.0,
//   institute: "Dhaka College",
//   session: "2018-19",
// };
// for (const items in info) {
//   console.log(info[items]);
// }

// console.log(selectCourse);

// for (const i in courses) {
//   console.log(courses[i]);
// }

// * Assignment
// let course = prompt("Write FDR or MERN");
// let course = "mern";
// let y = course.toUpperCase();
// if (y == "MERN") {
//   console.log("1 Year");
// } else if (y == "FDR") {
//   console.log("8 Months");
// } else {
//   console.log("Invalid Value");
// }

// function makeUser(name, age) {
//   return {
//     name: name,
//     age: age,
//     // ...other properties
//   };
// }

// let user = makeUser("John", 30);
// console.log(user.name);

// let person = {
//   name: "Alice",
//   age: 30,
//   profession: "Engineer"
// };

// for (let key in person) {
//   if (typeof person[key] === "string") {
//       console.log(key + ": " + person[key]);
//   }
// }

let courseinfo = {
  nameOne: "MERN",
  nameTwo: "FDR",
};
let select = "MERN";
for (const course in courseinfo) {
  if (select === course) {
    console.log(courseinfo[course]);
  }
}

let courses = ["MERN", "FDR"];
let courseList = courses[2];
if (courseList === "MERN") {
  console.log("The Course Duration is 1 Year");
} else if (courseList === "FDR") {
  console.log("The Course Duration is 8 Months");
} else {
  console.log("Select the course");
}

// const products = [
//   { id: 1, name: "Apple iphone 16", price: 1600 },
//   { id: 2, name: "Samsung galaxy", price: 1400 },
//   { id: 3, name: "Motorola", price: 1500 },
// ];
// products.map((product, index) => {
//   console.log("\n \n \n");
//   console.log("Product index : ", index+1);
//   console.log("Product ID : ", product.id);
//   console.log("Product name : ", product.name);
//   console.log("Product price : ", product.price);
// });

// *Filter
const products = [
  { id: 1, name: "Apple iphone 16", price: 1600 },
  { id: 2, name: "Samsung galaxy note 8", price: 1550 },
  { id: 3, name: "Motorola", price: 1500 },
];
let filtered = products.filter((product)=>{
  return product.price > 1500;
});
console.log(filtered);

const filteredProducts = products.filter((product)=> product.price >= 1300 && product.price <= 1700).map((product)=> product.price);
console.log(filteredProducts);

const x = products.filter((y)=>y.name.includes("Motorola"))
console.log(x);

const a = (convertion) => {
  return products.filter((b)=>b.name.toLowerCase().includes(convertion.toLowerCase()));
}
console.log(a('Apple'));
console.log(a('samsung'));
console.log(a('motorola'));