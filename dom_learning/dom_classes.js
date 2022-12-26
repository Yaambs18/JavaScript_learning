// classes

// const sectionTodo = document.querySelector(".todo-section");
// console.log(sectionTodo.classList);

// add class to element
// sectionTodo.classList.add("bg-dark");

// remeove class from element
// sectionTodo.classList.remove("container");
// console.log(sectionTodo.classList);

// console.log(sectionTodo.classList.contains("container"));
// sectionTodo.classList.toggle("bg-dark");


// ------------------------------------------------------
// add html element

// innerHTML to add html element     --- can use while updating new html element but not while adding
// const todoList = document.querySelector(".todo-list");
// console.log(todoList.innerHTML);
// todoList.innerHTML += "<li>Todo 2: Learn JS</li>";
// todoList.innerHTML += "<li>Todo 3: Learn HTML CSS</li>";

// document.createElement()
// append, prepend, remove

// const newTodoItem = document.createElement("li");
// const newTodoItemText = document.createTextNode("Learn JS");
// newTodoItem.textContent = "Learn JS"; 
// const todoList = document.querySelector(".todo-list");
// newTodoItem.append(newTodoItemText);
// todoList.append(newTodoItem);
// todoList.prepend(newTodoItem);
// const todo1 = document.querySelector('.todo-list li');
// todo1.remove();
// console.log(todo1);


// befor
// after
// const newTodoItem = document.createElement("li");
// newTodoItem.textContent = "Learn JS"; 
// const todoList = document.querySelector(".todo-list");
// todoList.before(newTodoItem);
// todoList.after(newTodoItem);


// elem.insertAdjacentHTML(where, HTML)
// beforebegin, afterbegin, beforeend, afterend
// const todoList = document.querySelector(".todo-list");
// todoList.insertAdjacentHTML("beforeend", "<li>Learn JS</li>");
// todoList.insertAdjacentHTML("afterend", "<li>Learn JS</li>");
// todoList.insertAdjacentHTML("beforebegin", "<li>Learn JS</li>");
// todoList.insertAdjacentHTML("afterbegin", "<li>Learn JS</li>");


// clone nodes
// const ul = document.querySelector(".todo-list");
// const li = document.createElement("li");
// li.textContent = "Learn JS";
// const li2 = li.cloneNode(true);
// ul.append(li);
// ul.prepend(li2);


// -----------------
// static list vs live list

const ul = document.querySelector(".todo-list");
// const listItems = document.querySelectorAll(".todo-list li");    // static list
const listItems = ul.getElementsByTagName("li");   // live list
const newItem = document.createElement("li");
newItem.textContent = "New Item";
ul.append(newItem);
console.log(listItems);

// ------------------
// get dimensions of element
const sectionTodo = document.querySelector(".todo-section");
const sectionInfo = sectionTodo.getBoundingClientRect();
console.log(sectionInfo); 