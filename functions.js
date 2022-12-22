// function

// function sumTwoNumbers(number1, number2){
//     return number1 + number2;
// }

// function isEven(number){
//     return number % 2 === 0;
// }

// function findTarget(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//         return -1;
//     }
// }

// function expression

// const sumTwoNumbers =  function(number1, number2){
//     return number1 + number2;
// }

// const isEven = function(number){
//     return number % 2 === 0;
// }

// const findTarget = function(array, target){
//     for(let i=0; i<array.length; i++){
//         if(array[i] === target){
//             return i;
//         }
//         return -1;
//     }
// }

// arrow functions

const sumTwoNumbers = (number1, number2) => {
    return number1 + number2;
}

// const isEven = (number) => {
//     return number % 2 === 0;
// }

const isEven = number => number % 2 === 0; 

const findTarget = (array, target) => {
    for(let i=0; i<array.length; i++){
        if(array[i] === target){
            return i; 
        }
        return -1;
    }
}


const res = sumTwoNumbers(3, 8);
console.log(res);

const even = isEven(13);
console.log(even);

const target = findTarget([1,2,3,4], 3);
console.log(target);



// lexical scope

function myApp(){
    const myVar = "value1";

    function myFunc(){
        const myVar = "value2";
        console.log("inside myFunc", myVar);
    }

    console.log(myVar);
    myFunc();
}

myApp();

// default parameters

function power(num, pow=2){
    return num ** pow;
}

console.log(power(3));


// rest parameters

function addAll(...numbers){
    let sum = 0;
    for(let num of numbers){
        sum += num;
    }
    return sum;
}
let ans = addAll(1,2,3,4,5,6,7,84,23)
console.log(ans);

// param destructuring

function printDetails({country, gender}){
    console.log(country);
    console.log(gender);
}

printDetails(person)

// callback function

function greet(name){
    console.log(`Hello ${name}`)
}

function user(callback){
    let name = "Yansh";
    callback(name);
}

user(greet);

// function returning function

function func1(){
    function func2(){
        return "Hello world!";
    }
    return func2;
}

const op = func1();
console.log(op());


function about(hobby, gender){
    console.log(this.name, this.age, hobby, gender);
}

const userObj1 = {
    name : "harshit",
    age : 8
}
const userObj2 = {
    name : "Shivam",
    age : 10
}

// call method
about.call(userObj1, "playing", "male");
about.call(userObj2, "listening", "male");

// apply
about.apply(userObj1, ["playing", "male"]);
about.apply(userObj2, ["listening", "male"]);

// bind
const funct1 = about.bind(userObj1, ["playing", "male"]);
const funct2 = about.bind(userObj2, ["listening", "male"]);

funct1();
funct2();

// ----------------------------------------------
const userMethods = {
    about : function(){
        return `user name is ${this.firstName}`;
    },
    is18 : function(){
        return this.age >= 18;
    }
}

function createUser(firstName, lastName, age, gender, email){
    // const userByFunc = {};

// use of Object.create -> to create an empty object
    const userByFunc = Object.create(userMethods)
    
    userByFunc.firstName = firstName;
    userByFunc.lastName = lastName;
    userByFunc.age = age;
    userByFunc.gender = gender;
    userByFunc.email = email;

    // userByFunc.about = function(){
    //     return `user name is ${this.firstName}`;
    // };
    // userByFunc.is18 = function(){
    //     return this.age >= 18;
    // }

    // userByFunc.about = userMethods.about;
    // userByFunc.is18 = userMethods.is18;

    return userByFunc;
}

const firstUser = createUser("yansh", "bhardwaj", 12, "male", "yb@gmail.com");
const secondUser = createUser("yash", "bhardwaj", 21, "male", "yb@gmail.com");

// console.log(firstUser.is18());
console.log(firstUser.about());
console.log(secondUser.about());