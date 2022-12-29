// synchronous programming vs asynchronous programming
// JavaScript is synchronous programming with single threaded 

// synchronous programming
// console.log("script starts");

// for(let i=0; i<10000; i++){
//     console.log("inside for loop");
// }

// console.log("script end");

// setTimeout() ----------------------------------------------------
// console.log("script starts");

// const id = setTimeout(()=>{
//     console.log("inside set timeout func")
// }, 0);

// for(let i=0; i<100; i++){
//     console.log("inside for loop");
// }

// console.log("settimeout id is ", id);
// console.log("clearning time out");
// // clearTimeout(id);
// console.log("script end");


// setInterval ------------------------------------------------------------------
// console.log("script starts");

// const id = setInterval(()=>{
//     console.log("inside set timeout func")
// }, 1000);

// console.log("setInterval id is ", id);
// // console.log("clearning time out");
// // // clearTimeout(id);
// console.log("script end");


// callback ---------------------------------------------------
function myFunc(callback){
    console.log("Task1");
    callback();
}

// function myFunc2(){
//     console.log("Task2");
// }
// myFunc(myFunc2);

myFunc(() => {
    console.log("Task2");
})