console.log("This is the new log!");

// variable and datatypes

// var a;

// a = 10;
// a = 12.65;
// a = "c";
// a = "String";
// a = true;
// a = undefined;
// a = null;

// console.log(a);

// let , var , const

// let b = 10;

// console.log("Value of b is: ", b);

// b = 20;

// console.log("Value of b is: ", b ** 2);

// const c = 30;
// console.log("Value of c is: ", c);

// operators

// arithmetic operators  +, - ,*, /, %, **

// let h = 8;
// let g = 7;

// console.log("h + g = ", h + g);
// console.log("h - g = ", h - g);
// console.log("h * g = ", h * g);
// console.log("h / g = ", h / g);
// console.log("h % g = ", h % g);
// console.log("h ** g = ", h ** g);

// Assignment operators  =, +=, -=, *=, /=, %=, **=
// console.log("h++=", h++);
// console.log("h", ++h);
// console.log("h--=", h--);
// // console.log("++h=", ++h);
// console.log("--h=", --h);

//relational operators  >, <, >=, <=, ==, ===, !=, !==

//logical operators  &&, ||, !

// && 1 1 = true
// && 1 0 = false
// && 0 1 = false
// && 0 0 = false

// || 1 1 = true
// || 1 0 = true
// || 0 1 = true
// || 0 0 = false

// ! 1 = false
// ! 0 = true

// let age = 22;

// if (age >= 18 && age != 20) {
//   console.log("You can vote");

//   if (age === 22) {
//     console.log("Your age is 22");
//   }
// } else {
//   console.log("You cannot vote");
// }

// ternary operator
// age > 18 ? console.log("You can vote") : console.log("You cannot vote");

// Control Statement

// if , if else , if else if , switch case

// let num = 5;

// if (num > 0) {
//   console.log("Number is positive");
// } else if (num < 0) {
//   console.log("Number is negative");
// } else {
//   console.log("Number is zero");
// }

// switch case

// let day = 2;

// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid day");
//     break;
// }

// loops

// for  of , for in

let arr1 = [10, 20, 30, 40];
// console.log("Length of arr1 is ", arr1.length);

// for (let i = 0; i < arr1.length; i++) {
//   console.log("arr1[i]: ", arr1[i + 2]);
// }

// for (const element of arr1) {
//   console.log("element: ", element);
// }

// for (const element in arr1) {
//   console.log("element: ", element);
// }

// Q . Write a program to print the  table of from 1 to 20 using for loop.

// for (let i = 1; i <= 20; i++) {
//   for (let a = 1; a <= 10; a++) {
//     console.log(`${i} x ${a} = ${i * a}`);
//   }
//   console.log("---------");
// }

// for of loop

// for (element of arr1) {
//   console.log("Element: ", element);
// }

// for (element in arr1) {
//   console.log("Position :", element);
// }

//functions

function displayMessage() {
  console.log("This message fom the displayMessage function.");

  console.log(`${arr1}`);
}

//function params
const newFunction = (name) => {
  console.log(`Hello ${name}`);
};

const add = (num1, num2) => {
  console.log(`${num1} + ${num2} = ${num1 + num2}`);
};

console.clear();
displayMessage();

newFunction("Name");
add(12, 18);

const returnFunction = (num) => {
  let value = { num, square: num * num };
  return value;
};

const value = returnFunction(8);

console.log(`Square of ${value.num} is : ${value.square}`);

const fn_01 = () => {
  // local fn
  const newFn = () => {
    console.log("This is from new fn");
  };

  //global fn
  add(12, 90);

  newFn();
};

fn_01();

//arrays

const arr2 = [];

console.log(arr2);
