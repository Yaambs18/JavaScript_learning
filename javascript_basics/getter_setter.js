class Person{
    constructor(firstNaem, lastName, age){
        this.firstNaem = firstNaem;
        this.lastName = lastName;
        this.age = age;
    }

    get fullName(){
        return `${this.firstNaem} ${this.lastName}`;
    }

    set fullName(fullName){
        const [firstNaem, lastName] = fullName.split(" ");
        this.firstNaem = firstNaem;
        this.lastName = lastName;
    }
}

const person1 = new Person("yansh", "bhardwaj", 12);
console.log(person1.fullName);
person1.fullName = "Harshit sharma";
console.log(person1);