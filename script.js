const heading = document.getElementById("head");

const para = document.getElementById("para");

const btn = document.getElementById("btn");

const form = document.getElementById("form_01");

const email = document.getElementById("em");
const name = document.getElementById("nam");

heading.innerText = "New Heading.";

para.innerText = "new para.";

heading.innerHTML = `<button style="background-color:red; cursor:pointer;">Button</button>`;

heading.textContent = "New Text by text";

// H/W test all css property

heading.style.border = " 2px solid green";

heading.style.textDecoration = "underline";

const newElem = document.createElement("button");

newElem.innerText = "I am a button";

document.body.append(newElem);

document.body.append(newElem);

heading.append(newElem);

heading.remove(newElem);

const link = document.getElementById("url");

const attribute = link.getAttribute("href");

link.setAttribute("href", "https://github.com");

console.log(attribute);

// Events

btn.addEventListener("click", function () {
  //   alert("Button is clicked.");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  alert(`Name: ${e.target[0].value}\nEmail:${e.target[1].value}`);
});

form.addEventListener("reset", (e) => {
  e.preventDefault();
  alert(`Name: ${name.value}\nEmail: ${email.value}`);
});

//default params
const fn = (num = 15, name = "Sravesh") => {
  console.log("Num", num + "Name", name);
};

fn(67, "Golu");

let arr = [1, 2, 3];

let arr2 = [4, 5, 6];

let arr3 = [...arr, ...arr2, 7];

console.log("arr", arr3);

const obj1 = {
  name: "Sravesh",
  age: 20,
};

const obj2 = {
  name: "Golu",
};

const obj3 = { ...obj2, ...obj1 };

console.log(obj1);

const { name: n, age } = obj1; // destructing

console.log("Name", n);
console.log("Age", age);

const url = "https://official-joke-api.appspot.com/random_joke";

//through fetch

fetch(url)
  .then((data) => data.json())
  .then((res) => {
    const { setup, punchline } = res;
    const pTag = document.createElement("p");
    const punch = document.createElement("p");

    pTag.textContent = `${setup}`;
    punch.textContent = `${punchline}`;

    para.append(pTag);
    para.append(punch);
  })
  .catch((e) => {
    alert("error occurred", e.message);
  });
