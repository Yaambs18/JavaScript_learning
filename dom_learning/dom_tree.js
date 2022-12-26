const rootNode = document.getRootNode();
console.log(rootNode);
const htmlElementNode = rootNode.childNodes[0];
// console.log(htmlElementNode.childNodes);   // NodeList(3) [head, text, body]
const headElementNode = htmlElementNode.childNodes[0];
const textNode1 = htmlElementNode.childNodes[1];
const bodyElementNode = htmlElementNode.childNodes[2];
console.log(headElementNode.nextSibling)
console.log(headElementNode.nextElementSibling);
console.log(headElementNode.childNodes);

const h1 = document.querySelector("h1");
// const div = h1.parentNode;
// const body = h1.parentNode.parentNode;
// const body = document.body;
// body.style.color = "#efefef";
// body.style.backgroundColor = "#333";

const head = document.querySelector("head");
console.log(head);

const title = head.querySelector("title");
console.log(title.childNodes);

const container = document.querySelector(".container");
console.log(container.childNodes);
console.log(container.children);