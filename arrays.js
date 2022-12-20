let fruits = ["apple", "banana", "mango"];
console.log(fruits);
fruits[0] = "grapes";
console.log(fruits[0]);

console.log(typeof fruits);

// array push pop
console.log(fruits);
// push
fruits.push("apple");
console.log(fruits);

// pop
poppedFruit = fruits.pop();
console.log(fruits, `popped fruit is ${poppedFruit}`);

// unshift
fruits.unshift(poppedFruit);
console.log(fruits);

// shift
fruits.shift();
console.log(fruits);

// reference type 
let arr1 = [1,2,3];
let arr2 = arr1;
arr1.push(4);
console.log(arr1, arr2)


// clone array

// let arr3 = arr1.slice(0);
// let arr3 = [].concat(arr1);
let arr3 = [...arr1];
arr1.pop()
console.log(`arr1 = ${arr1}, arr3 = ${arr3}`);

// for(let indx=0; indx<fruits.length; indx++){
//     console.log(fruits[indx]);
// }

// for of loop
for(let fruit of fruits){
    console.log(fruit.toUpperCase());
} 


// array destructuring
const myArr = [1,2,3,4]

let [myVar1, myVar2, ...myNewArr] = myArr;
// console.log("value of var1", myVar1);
// console.log("value of var2", myVar2);
// console.log("value of var3", myVar3);
// let [myVar1, , myVar2] = myArr;
console.log("value of var1", myVar1);
console.log("value of var2", myVar2);
console.log(myNewArr)