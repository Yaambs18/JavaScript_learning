// sets
// no-index based access
// uniques
const setNumbers = new Set([1,2,3,4]);
setNumbers.add(4);
setNumbers.add(5);
console.log(setNumbers);

if(setNumbers.has(2)){
    console.log("present")
}

for(let num of setNumbers){
    console.log(num);
}