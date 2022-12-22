// Map

const mapExample = new Map()

mapExample.set("firstname", "yansh");
mapExample.set("age", 22);
mapExample.set(1, "one");

console.log(mapExample);
console.log(mapExample.get("firstname"));
console.log(mapExample.keys());

for(let key of mapExample.keys()){
    console.log(key, typeof key);
}

for(let [key, value] of mapExample){
    console.log(key, value)
}

const person1 = {
    id : 1,
    firstName : "Harshit"
}

const person2 = {
    id : 2,
    firstName : "Priya"
}

const extraInfo = new Map();
extraInfo.set(person1, {age : 10, gender : "male"});
extraInfo.set(person2, {age : 11, gender : "female"});

console.log(extraInfo.get(person1).gender);
console.log(extraInfo.get(person2).gender);
