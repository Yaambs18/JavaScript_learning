let fruits = ["apple", "banana", "mango"];
console.log(fruits);
fruits[0] = "grapes";
console.log(fruits[0]);

console.log(typeof fruits);
console.log(Array.isArray(fruits));

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


// array methods

// forEach
const numbers_array = [1,4,3,2,1200,200];

// function testFunc(number, index){
//     console.log(`index is ${index} and number ${number}`);
// }
// numbers_array.forEach(testFunc);

numbers_array.forEach((number) => console.log(number*2) );

// map
const square_array = numbers_array.map(number => number * number)  
console.log(square_array);


// filter method
const even_array = numbers_array.filter(number => number % 2 == 0)
console.log(even_array);


//reduce method
const sum = numbers_array.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum);

const userCart = [
    {productId : 1, price : 10000},
    {productId : 2, price : 30000},
    {productId : 3, price : 20000}
]

const totalBill = userCart.reduce(((totalAmount, currentProduct) => totalAmount + currentProduct.price), 0);
console.log(totalBill);


// sort method
console.log(numbers_array.sort());
console.log(numbers_array.sort((a, b) => a-b));
const sortedUserCart = userCart.sort((a, b) => a.price - b.price);
console.log(sortedUserCart);


// find method
const productPrice = userCart.find((product) => product.productId === 2);
console.log(productPrice);


// every method
const newArr = [2,4,6,8,10];
const allEven = newArr.every(number => number % 2 ===0 )  // callback func  ---> return boolean && also ever() -->  return boolean
// return true if all numbers are even else false
console.log(allEven);


// some method
const anyEven = newArr.some(number => number % 2 ===0 )  
// return true if any number is even else false
console.log(anyEven);

// fill method 
const array = new Array(10).fill(0);       // [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
console.log(array);

array.fill(1, 2, 7);
console.log(array);     // [0, 0, 1, 1, 1, 1, 1, 0, 0, 0]

// splice method

// delete
array.splice(2, 2);
console.log(array);

// insert
array.splice(2, 0, 36);
console.log(array);

// insert & delete
array.splice(2, 2, "first elem", "second elem");
console.log(array);

