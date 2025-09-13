console.log("This is the new log!");

// variable and datatypes

var a;

a = 10;
a = 12.65;
a = "c";
a = "String";
a = true;
a = undefined;
a = null;

console.log(a);

// let , var , const

let b = 10;

console.log("Value of b is: ", b);

b = 20;

console.log("Value of b is: ", b ** 2);

// const c = 30;
// console.log("Value of c is: ", c);

// operators

// arithmetic operators  +, - ,*, /, %, **

let h = 8;
let g = 7;

console.log("h + g = ", h + g);
console.log("h - g = ", h - g);
console.log("h * g = ", h * g);
console.log("h / g = ", h / g);
console.log("h % g = ", h % g);
console.log("h ** g = ", h ** g);

// Assignment operators  =, +=, -=, *=, /=, %=, **=
console.log("h++=", h++);
console.log("h--=", h--);
console.log("++h=", ++h);
console.log("--h=", --h);

//relational operators  >, <, >=, <=, ==, ===, !=, !==

//logical operators  &&, ||, !

let age = 22;

if (age >= 18 && age != 20) {
  console.log("You can vote");

  if (age === 22) {
    console.log("Your age is 22");
  }
} else {
  console.log("You cannot vote");
}

// ternary operator
age > 18 ? console.log("You can vote") : console.log("You cannot vote");
