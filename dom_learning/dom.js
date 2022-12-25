// DOM

// select element using get element by id
const mainHeading = document.getElementById("main-heading");
console.log(mainHeading);


// select element using query selector
const mainHeadingQuerySelector = document.querySelector("#main-heading");
console.log(mainHeadingQuerySelector);
const header = document.querySelector(".header");
console.log(header);
const navItem = document.querySelector(".nav-item");
// const navItems = document.querySelectorAll(".nav-item");
console.log(navItem);
// console.log(navItems);


// change text
// textContent and innerText
// console.log(mainHeading.textContent)
// console.log(mainHeading.innerText);
// mainHeading.textContent = "Hi your main heading is changed";
// console.log(mainHeading.textContent);


// change styles of element
// mainHeading.style.color = "red";
// mainHeading.style.background = "green";


// get and set attributes
const link = document.querySelector("a");
console.log(link.getAttribute("href"));
link.setAttribute("href", "https://youtube.com");
console.log(link.getAttribute("href"));

const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));


// get multiple elements using getElements by class name
// get multiple elements using querySelectorAll
const navItems = document.getElementsByClassName(".nav-item");  // HTMLCollections
// const navItems = document.querySelectorAll(".nav-item");  // NodeList
console.log(navItems);