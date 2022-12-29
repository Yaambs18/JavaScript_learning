// asynchronous programming
// callbacks, callback hell, pyramid of doom

const head1 = document.querySelector(".heading1");
const head2 = document.querySelector(".heading2");
const head3 = document.querySelector(".heading3");
const head4 = document.querySelector(".heading4");
const head5 = document.querySelector(".heading5");
const head6 = document.querySelector(".heading6");
const head7 = document.querySelector(".heading7");


// callback hell
// setTimeout(()=>{
//     head1.textContent = "Heading 1";
//     head1.style.color = "violet";
//     setTimeout(()=>{
//         head2.textContent = "Heading 2";
//         head2.style.color = "purple";
//         setTimeout(()=>{
//             head3.textContent = "Heading 3";
//             head3.style.color = "red";
//             setTimeout(()=>{
//                 head4.textContent = "Heading 4";
//                 head4.style.color = "pink";
//                 setTimeout(()=>{
//                     head5.textContent = "Heading 5";
//                     head5.style.color = "green";
//                     setTimeout(()=>{
//                         head6.textContent = "Heading 6";
//                         head6.style.color = "blue";
//                         setTimeout(()=>{
//                             head7.textContent = "Heading 7";
//                             head7.style.color = "brown";
//                         }, 1000)
//                     }, 3000)
//                 }, 2000)
//             }, 1000)
//         }, 2000)
//     }, 2000)
// }, 1000);


// pyramid of doom

function changeText(element, text, color, time, onSuccess, onFailure){
    setInterval(()=>{
        if(element){
            element.textContent = text;
            element.style.color = color;
        }
        if(onSuccess){
            onSuccess();
        }else{
            if(onFailure){
                onFailure();
            }
        }
    }, time)
}

changeText(head1, "one", "violet", 1000, ()=>{
    changeText(head2, "two", "purple", 2000,()=>{
        changeText(head3, "three", "red", 2000,()=>{
            changeText(head4, "four", "pink", 1000,()=>{
                changeText(head5, "five", "green", 2000,()=>{
                    changeText(head6, "six", "blue", 3000,()=>{
                        changeText(head7, "seven", "brown", 1000,()=>{
    
                        },()=>{console.log("Heading7 doesn't exist");})
                    },()=>{console.log("Heading6 doesn't exist");})
                },()=>{console.log("Heading5 doesn't exist");})
            },()=>{console.log("Heading4 doesn't exist");})
        },()=>{console.log("Heading3 doesn't exist");})
    },()=>{console.log("Heading2 doesn't exist");})
},()=>{console.log("Heading1 doesn't exist");})

// changeText(head1, "one", "violet", 1000, ()=>{
//     changeText(head2, "two", "purple", 2000,()=>{
//         changeText(head3, "three", "red", 2000,()=>{
//             changeText(head4, "four", "pink", 1000,()=>{
//                 changeText(head5, "five", "green", 2000,()=>{
//                     changeText(head6, "six", "blue", 3000,()=>{
//                         changeText(head7, "seven", "brown", 1000,()=>{
//                         })
//                     })
//                 })
//             })
//         })
//     })
// })
