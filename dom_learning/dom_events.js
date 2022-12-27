// intro to events
// click

// const btn = document.querySelector(".btn-headline");
// console.log(btn);
// btn.onclick = function(){
//     console.log("You clicked me !!!!!");
// }

// function clickMe(){
//     console.log("You Clicked me !!!!");
// }
// btn.addEventListener("click", clickMe);

// btn.addEventListener("click", ()=> console.log("You Clicked Me !!!!"));


// ------------
// this keyword
// btn.addEventListener("click", function(){
//     console.log("You Clicked Me !!!!");
//     console.log("Value of this");
//     console.log(this);
// });


// ----------------------------------

// keypress event
// const body = document.body;
// body.addEventListener("keypress", (event) => {
//     console.log(event.key);
// });

// mouseover event
const mainButton = document.querySelector(".btn-headline");
mainButton.addEventListener("mouseover", () => {
    console.log("mouseover event occured !!!");
});

mainButton.addEventListener("mouseleave", () => {
    console.log("mouseleave event occured !!!");
});