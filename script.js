const heading = document.getElementById("head");

const para = document.getElementById("para");

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
