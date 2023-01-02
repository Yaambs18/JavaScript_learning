// promise
// console.log("script starts");

// const bucket = ['coffee', 'chips', 'salt', 'vegetables', 'rice'];

// // produce

// const friedRicePromise = new Promise((resolve, reject)=>{
//     if(bucket.includes("vegetables") && bucket.includes("rice")&& bucket.includes("salt")){
//         resolve("Fried Rice");
//     }else{
//         reject("Couldn't do it");
//     }
// })

// // consume
// // browser takes responsibility for this and after completing add it to ------ microtask queue
// friedRicePromise.then(
//     (myPromise)=>{
//         console.log("You can eat ", myPromise);
//     }
//     ).catch(
//     (error)=>{
//         console.log(error);
// })
// //  ------------------------- priority -> microtask > callback

// // browser takes responsibility for this and after completing add it to ------ callback queue

// setTimeout(()=>{
//     console.log("set timeout")
// }, 0);

// for(let i=0; i<100; i++){
//     console.log(i);
// }
// console.log("script end");


// promise && setTimeout

// I want resolve/reject promise after 2 seconds
// function myPromise(){
//     return new Promise((resolve, reject)=>{
//         const value = true;
//         setTimeout(()=>{
//             if(value){
//                 resolve();
//             }else{
//                 reject();
//             }
//         }, 2000)
//     })
// }

// myPromise()
//     .then(()=>{console.log("resolved")})
//     .catch(()=>{console.log("rejected")})



// promise.resolve(), promise chaining

// const myPromise = Promise.resolve(5);
// myPromise.then(value=>{
//     console.log(value);
// })


function myPromise(){
    return new Promise((resolve, reject)=>{
        return resolve("foo");
    })
}

// then() return promise
myPromise().then(value=>{
    console.log(value);
    value+= "bar";
    return value;
}).then(value=>{
    console.log(value);
})