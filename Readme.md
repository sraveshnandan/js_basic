# 📌 JavaScript Training Roadmap

Since everyone knows HTML & CSS, and Git/GitHub is completed, we’ll start **JavaScript from basics**.  
Each section below includes a **simple explanation** and **how to teach it**.

---

## 1. Introduction & Setup

**Simple Explanation:**  
JavaScript is the language that makes websites _interactive_. HTML builds structure, CSS adds style, and JS adds _life_ (like buttons that work, animations, forms that validate).

**How to Teach:**

- Show a plain HTML page → add a button → click it does nothing.
- Add a small JS script to show an alert when button is clicked.
- Run JS in **browser console** and in a separate `.js` file.

---

## 2. Fundamentals (Variables, Data Types, Operators)

**Simple Explanation:**

- Variables store data (`let name = "John"`).
- Data types are kinds of values: numbers, strings, booleans, arrays, objects.
- Operators let us calculate (`+ - * /`), compare (`==`, `===`), and combine logic (`&&`, `||`).

**How to Teach:**

- Open console and create variables live.
- Show difference between `let`, `const`, `var`.
- Do a **mini calculator exercise**: take two numbers, perform add, subtract, multiply, divide.

---

## 3. Control Flow (If, Else, Loops)

**Simple Explanation:**  
Control flow decides _what happens when_.

- `if/else`: makes decisions.
- `switch`: checks multiple cases.
- Loops repeat actions until a condition is met.

**How to Teach:**

- Example: "If marks > 40, print Pass, else Fail."
- Write a loop to print numbers 1–10.
- Small game: **Guess the Number** (generate random number, ask user to guess).

---

## 4. Functions

**Simple Explanation:**  
Functions are reusable blocks of code. Instead of writing same logic again, wrap it inside a function.

**How to Teach:**

- Show a normal function:
  ```js
  function greet(name) {
    return "Hello " + name;
  }
  ```
