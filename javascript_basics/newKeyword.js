// new keyword
// 1. cretes this == {}
// 2. return {}
// 3. auto add prototype in {} proto

function CreateUser(firstName, lastName, age, gender, email){
    // const userByFunc = Object.create(createUser.prototype);
        
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
    this.email = email;
}

CreateUser.prototype.about = function(){
    return `user name is ${this.firstName}`;
}
CreateUser.prototype.is18 = function(){
    return this.age >= 18;
}

const firstUser = new CreateUser("yansh", "bhardwaj", 12, "male", "yb@gmail.com");
const secondUser = new CreateUser("yash", "bhardwaj", 21, "male", "yb@gmail.com");

console.log(firstUser.is18());
console.log(firstUser.about());
console.log(secondUser.about());
console.log(secondUser.is18());


//  hasOwnProperty()

for(let key in firstUser){
    // console.log(key) // prints all key with prototype keys
    if(firstUser.hasOwnProperty(key)){
        console.log(key);
    }
}