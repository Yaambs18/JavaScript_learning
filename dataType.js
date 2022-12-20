// typeof operator

// data types - string, number, boolean, undefined, null, BigInt, Symbol

let age = 35;
let country = "India";
console.log(typeof age);
console.log(typeof country);


// number to string
// age = age + ""
age = String(age);
console.log(typeof age);


//string to number
// let str = +"23"
let str = Number("23");
console.log(typeof str);


//BigInt
let myNumber = BigInt(122222);
let number = 12n;
console.log(myNumber + number);


// booleans & comparison

let num1 = "2";
let num2 = 2;
// console.log(num1 <= num2);

// == vs ===
console.log(num1 == num2);   // checks value
console.log(num1 === num2); // checks value as well data type

// != vs !==
console.log(num1 != num2);   // checks value
console.log(num1 !== num2); // checks value as well data type