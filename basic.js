// *Switch
/*
const digit = parseInt(prompt("Enter a digit"));

switch (digit) {
  case 1:
  case 2:
  case 3:
  case 4:
  case 5:
    console.log('Weekday');
    break;
  case 6:
  case 7:
    console.log('Weekend');
    break;
  default:
    console.log('Invalid Value');
};
*/
/*
if (digit === 1) {
  console.log("Weekday");
} else if (digit === 2) {
  console.log("Weekday");
} else if (digit === 3) {
  console.log("Weekday");
} else if (digit === 4) {
  console.log("Weekday");
} else if (digit === 5) {
  console.log("Weekday");
} else if (digit === 6) {
  console.log("Offday");
} else if (digit === 7) {
  console.log("Offday");
} else {
  console.log("Invalid input");
}
*/
/*
const letter = prompt("Enter a letter: ");
let lowerCase = letter.toLowerCase();
switch (lowerCase) {
  case "a":
  case "e":
  case "i":
  case "o":
  case "u":
    console.log("Vowel");
    break;
  default:
    console.log("Consonant");
}
*/

// *Loop = for, while, do while loop
// !for loop
/*
for (let i = 1; i <= 10; i = i + 1) {
  console.log(i);
}
console.log("\n \t while loop");
*/
// !while loop
/*
let x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}
console.log("\n \t do while loop");
*/
// !do while loop
/*
let y = 11;
do{
  console.log(y);
  y++;
}while(y<=10);
*/

// !break and continue
/*
let number = 5;
while (true) {
  if (number > 10) {
    break;
  }
  console.log(number);
  number++;
}

console.log("\n \t while loop");
let b = 10;
while (true) {
  if (b === 500) {
    break;
  }
  b++;
  if (b % 100 != 0) {
    continue;
  }
  console.log(b);
}
*/

// *for of and for in
// !for of
/*
const countries = ["Bangladesh", "Pakistan", "Afganistan", "Qatar", "Egypt"];
for(let country of countries){
  console.log(country);
};

const info = {
  fullName: 'Towhidul Islam',
  age: 26,
  cgpa: 3.00,
  institute: (x, y)=>{
    return x + y;
  }
}
console.log(info.institute(10, 20));
for(let item in info){
  console.log(info[item]);
}
*/



