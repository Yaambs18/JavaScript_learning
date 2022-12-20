const person = {
    name : "Yansh",
    age : 22,
    country : "India"
}

console.log(person);
console.log(person.name);
console.log(person["age"]);

person.gender = "male";
console.log(person.gender);


// iterate object
// 1. for in loop
for(let key in person){
    console.log(person[key]);
}

// 2. Object.keys
for(let key of Object.keys(person)){
    console.log(person[key]);
}


// computed properties
const key1 = "objKey1";
const key2 = "objKey2";

const value1 = "objValue1";
const value2 = "objValue2";

const obj = {
    [key1] : value1,
    [key2] : value2
}
console.log(obj);


// spread operator  {...obj1}

const obj2 = {
    objKey1 : "yansh",
    objKey3 : "bhardwaj",
    objKey4 : "a",
    objKey5 : "b"
};

// const newObj = {...obj, ...obj2};
const newObj = { ..."abc"};  // {0 : "a", 1 : "b", 2 : "c"}
console.log(newObj);

// object destructuring
let {objKey1: varA, objKey3:varB, ...newObj2} = obj2;
console.log(varA);
console.log(newObj2)