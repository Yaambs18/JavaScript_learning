class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    eat(){
        return `${this.name} is eating`
    }

    isSuperCute(){
        return this.age <=1;
    }
}

const animal1 = new Animal("meow", 0.2);
const animal2 = new Animal("bow", 2);

console.log(animal1);
console.log(animal2);
console.log(animal1.eat());
console.log(animal2.isSuperCute());