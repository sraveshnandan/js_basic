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

// let arr1 = [10, 20, 30, 40];
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

// function displayMessage() {
//   console.log("This message fom the displayMessage function.");

//   console.log(`${arr1}`);
// }

// //function params
// const newFunction = (name) => {
//   console.log(`Hello ${name}`);
// };

// const add = (num1, num2) => {
//   console.log(`${num1} + ${num2} = ${num1 + num2}`);
// };

// console.clear();
// displayMessage();

// newFunction("Name");
// add(12, 18);

// const returnFunction = (num) => {
//   let value = { num, square: num * num };
//   return value;
// };

// const value = returnFunction(8);

// console.log(`Square of ${value.num} is : ${value.square}`);

// const fn_01 = () => {
//   // local fn
//   const newFn = () => {
//     console.log("This is from new fn");
//   };

//   //global fn
//   add(12, 90);

//   newFn();
// };

// fn_01();

//arrays

// console.clear();
// const arr2 = [1, 2, 3, 4, 5];
// //to get length of the array.
// const length = arr2.length;

// //modifying elements of an array.

// arr2[1] = 12;

// const index = arr2.findIndex((element) => element === 1);
// // console.log(arr2);

// // console.log(index);

// // Q .1 Suppose I want to change 4 of that array to 25 , and i don't know the position of 4 in that array , so how can i change it?

// const index_to_change = arr2.findIndex((element) => element === 4);
// arr2[index_to_change] = 25;
// console.log(arr2);

arr1 = [1, 2, 3, 4, 5, 6, 7, 8];
arr2 = [2, 34, 4, 56, 6, 6, 6, 8];
console.clear();
// Q 1. interchange their elements of position like all even positions ? like, and positions = are , 2,4,6,8
// Q 2. create a function which will take  this array as parameter and and element and returns elements position?
// Q3. Now create a function which will take and element as params and change its value to another number from params in arr2.

// Q4. a function which takes an element as params and checks if it is in arr1 or not .
// Q5. create a function which will take an array as params and returns the sum of all elements of that array.

// Ans of Q1

// for (let i = 2; i <= arr1.length; i += 2) {
//   let cop_of_arr1 = arr1;
//   arr1[i] = arr2[i];
//   arr2[i] = cop_of_arr1[i];
// }

// console.log(`Arr1 : ${arr1}\nArr2 :${arr2}`);

// // Ans Q2.

// const element_position = (arr, num) => {
//   const position = arr.findIndex((element) => element === num);
//   return position;
// };

// console.log(`Position : ${element_position(arr1, 4)}`);

// //  Ans of Q3:

// const change_value = (num) => {
//   const index = arr2.findIndex((element) => element === num);
//   console.log(index);
//   arr2[index] = 99;
// };

// change_value(56);

// console.log("new arr2", arr2);

// // Ans of q4

// const check_element = (num) => {
//   const index = arr1.findIndex((ele) => ele === num);
//   if (index === -1) {
//     console.log(`${num} is not in arr1`);
//   } else {
//     console.log(`${num} is in arr1 at position ${index}`);
//   }
// };

// check_element(6);

// // Q5. ans

// console.clear();
// const sum_of_arr = (arr) => {
//   let sum = 0;

//   for (let i = 0; i <= arr.length; i++) {
//     sum = sum + arr[i];
//     console.log(`${sum}+${arr[i]}`);
//   }
//   console.log("Sum", sum);
// };

// const arr3 = [2, 2, 3, 34, 4, 4, 4, 4, 4, 4, 4, 4];
// sum_of_arr(arr3);

//  methods of array

const arr4 = [1, 2, 3, 4, 5];

// syntax for push method

arr4.push(29); // it just push the element at the last position of the array.

arr4.pop(); // it simply remove the last element of the array.

arr4.unshift(23); // it adds the element at the first position of the array.

arr4.shift(); // remove the unsifted element of the array.

arr4.splice(3, 1); // it takes the index as params and the delete count and simply deletes the element at that position.

// arr4.forEach((element) => {
//   console.log(`Element: ${element}`);
// }); //returns each elements of the array.

// arr4.map((el, index) => console.log(`Elements by the map method : ${el}`));

const filteredArray = arr4.filter((ele) => ele != 1); // used to filter elements of the array.

const is_3_exists = arr4.find((el) => el === 3);

const is_some = arr4.some((el) => typeof el === "number");

const is_every = arr4.every((el) => typeof el === "number");

const is_true = arr4.includes(3);

const is_index_of = arr4.indexOf(2);

arr4.reverse(); // to reverse the array.

const sortedArray = arr4.sort((a, b) => a + b); // to sort the array in ascending order.

// console.log("New Array is :", arr4);

// console.log("Filtered Array: ", filteredArray);

// if (is_3_exists) {
//   console.log("3 exists in the array.");
// } else {
//   console.log("3 not exists in the array.");
// }

// console.log("the value of some", is_some);
// console.log("the value of every", is_every);

// console.log("Is includes", is_true);

// console.log("Index of 3 ", is_index_of);

// console.log("Sorted Array: ", sortedArray);

// object

const user = {
  name: "Sravesh Nandan",
  email: "sraveshnandan@gmail.com",
  age: 20,
  is_student: true,
  photo: {
    url: "https://image.png",
  },
  tag: ["dev", "student"],
};

// modifying object properties
user.age = 34;

user.email = "admin@email.com";
user.tag.pop();
user.tag.push("New Tag");

user.tag.forEach((e) => console.log("e", e));

console.clear();

// object methods

const keys = Object.keys(user); // returns the keys of the object

const value = Object.values(user); // returns the values of the object .

const entries = Object.entries(user); //returns the keys and their values as an entries

const is_trued = Object.hasOwn(user, "gender"); // checks key is available in the object or not.

console.clear();
console.log(is_trued);

//H/W read all the methods of objects.

let a, b;

a = prompt("Enter the value of a");
b = prompt("Enter the value of b");

alert(`${a} + ${b} = ${parseInt(a) + parseInt(b)}`);
console.log("The value of a", a);

// console.log(`Keys of the object: ${keys}`);

// console.log(
//   `Name : ${user.name}\nEmail: ${user.email}\nAge: ${user.age}\nTag: ${user.tag}`
// );

// const res = user.tag.find((el) => el === "student");
