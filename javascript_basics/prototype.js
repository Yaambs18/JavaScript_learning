// prototype is an object (free space) provided by the function  (inbuilt functionality)
// __proto__ is reference for the object (adds property to the object)

function createUser(firstName, lastName, age, gender, email){
    const userByFunc = Object.create(createUser.prototype);
    
    userByFunc.firstName = firstName;
    userByFunc.lastName = lastName;
    userByFunc.age = age;
    userByFunc.gender = gender;
    userByFunc.email = email;

    return userByFunc;
}

createUser.prototype.about = function(){
    return `user name is ${this.firstName}`;
}
createUser.prototype.is18 = function(){
    return this.age >= 18;
}

const firstUser = createUser("yansh", "bhardwaj", 12, "male", "yb@gmail.com");
const secondUser = createUser("yash", "bhardwaj", 21, "male", "yb@gmail.com");

console.log(firstUser.is18());
console.log(firstUser.about());
console.log(secondUser.about());
console.log(secondUser.is18());