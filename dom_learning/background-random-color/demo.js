const mainbutton = document.querySelector("button");
const body = document.body;
const currentColor = body.querySelector("h1 span")
function randomColorGenerater(){
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    return `rgb(${red}, ${green}, ${blue})`;
}

mainbutton.addEventListener("click", (event)=>{
    const randomColor = randomColorGenerater();
    currentColor.textContent = randomColor;
    body.style.backgroundColor = randomColor;
})