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

class Dog extends Animal{
    constructor(name,age, speed){
        super(name,age);
        this.speed = speed;
    }

    run(){
        return `${this.name} is running at ${this.speed}kmph`
    }
}

const animal1 = new Animal("meow", 0.2);
const animal2 = new Animal("bow", 2);

console.log(animal1);
console.log(animal2);
console.log(animal1.eat());
console.log(animal2.isSuperCute());

const tommy = new Dog("tommy", 12, 25);

console.log(tommy);
console.log(tommy.run());