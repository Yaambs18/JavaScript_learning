"use strict"; // to defined on top

// console.log is used to print on console

console.log("helo world!");

// working with variable

// use of var - fun scoped

console.log(firstName);  // undefined
var firstName = "Yansh";  // ican declare variable without var, but by using strict don't
console.log(firstName);
firstName = "Shivam"; // var name convention camelCase
console.log(firstName);


// use of let - block scoped

// console.log(lastName);  -> error not defined
let lastName = "Bhardwaj";
// let lastName = Upadhyay;  -> give error as let not allow again declaration of same variable
lastName = "Upadhyay";
console.log(lastName);

// use of const

const pi = 3.14;
// pi = 3.15;  -> error typeError
console.log(pi);