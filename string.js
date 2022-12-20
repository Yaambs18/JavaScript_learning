// Strings

let fullName = "Yansh Bhardwaj";

// indexing

console.log(fullName[0]);
let nameLength = fullName.length;
console.log(nameLength);
console.log(fullName[nameLength-1]);

// trim()

let first_Name = "  yansh     ";
console.log(first_Name);
console.log(first_Name.length);
console.log(first_Name.trim());
console.log(first_Name.length); // lenght will remain same it is not changing the string

// toUpperCase(), toLowerCase()

console.log(first_Name.toUpperCase());
console.log(fullName.toLowerCase());

//slicing - slice()

console.log(fullName.slice(0,5));


// concatenation

let str1 = "23";
let str2 = "20";

console.log(str1 + str2); // 2320
console.log(+str1 + +str2);  // 43


// template string 

let aboutMe = `My name is ${fullName} and my age is ${str1}`;
console.log(aboutMe);