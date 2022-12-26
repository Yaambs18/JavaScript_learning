// intro to events
// click

const btn = document.querySelector(".btn-headline");
console.log(btn);
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
btn.addEventListener("click", function(){
    console.log("You Clicked Me !!!!");
    console.log("Value of this");
    console.log(this);
});
