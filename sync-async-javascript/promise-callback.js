const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");

function changeText(element, text, color, time){
    return new Promise((resolve, reject)=>{
        setInterval(()=>{
            if(element){
                element.textContent = text;
                element.style.color = color;
                resolve();
            }else{
                reject("element not found")
            }
        }, time)
    })
}

changeText(head1, "one", "violet", 1000)
.then(()=>changeText(head1, "one", "violet", 1000))
.then(()=>changeText(head2, "two", "violet", 1000))
.then(()=>changeText(head3, "three", "violet", 1000))
.then(()=>changeText(head4, "four", "violet", 1000))
.then(()=>changeText(head5, "five", "violet", 1000))
.then(()=>changeText(head6, "six", "violet", 1000))
.then(()=>changeText(head7, "seven", "violet", 1000))
.catch(error => alert(error));
