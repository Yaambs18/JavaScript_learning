const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");


// bubbling
// child.addEventListener("click", ()=>{
//     console.log("You clicked on child");
// });
// parent.addEventListener("click", ()=>{
//     console.log("You clicked on parent");
// });
// grandparent.addEventListener("click", ()=>{
//     console.log("You clicked on grandparent");
// });
// document.body.addEventListener("click", ()=>{
//     console.log("You clicked on body");
// });


// capturing events
// child.addEventListener("click", ()=>{
//     console.log("captured child");
// }, true);
// parent.addEventListener("click", ()=>{
//     console.log("captured parent");
// }, true);
// grandparent.addEventListener("click", ()=>{
//     console.log("captured grandparent");
// }, true);
// document.body.addEventListener("click", ()=>{
//     console.log("captured body");
// }, true);


// event delegation
grandparent.addEventListener("click", (event)=>{
    console.log(event.target);
});