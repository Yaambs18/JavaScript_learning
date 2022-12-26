const allButtons = document.querySelectorAll(".my-buttons button");
console.log(allButtons);

// allButtons.forEach(button =>{
//     button.addEventListener("click", function(){
//     console.log(`You CLicked ${this.textContent}!!!`);
// })});


// event object
// const firstButton = document.querySelector("#one");
// firstButton.addEventListener("click", function(event){
//     console.log("clicked");
//     console.log(event);
// })

// for(let button of allButtons){
//     button.addEventListener("click", (event) => {
//         // console.log(`You CLicked ${event.target.textContent}!!!`);
//         console.log(`You CLicked ${event.currentTarget.textContent}!!!`);
//     })
// }


// practice with more click

for(let button of allButtons){
    button.addEventListener("click", (event) => {
        event.target.style.color = "grey";
        event.target.style.backgroundColor = "yellow";
        console.log(`You clicked ${event.target.textContent}`);
    })
}