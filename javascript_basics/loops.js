// while loop

let n = 10;
let sum = 0;
let i = 1;
while(i<=n){
    sum += i;
    i++;
}
console.log(sum);

let total = (n*(n+1))/2
console.log(total);


// for loop

let for_sum = 0;
for(let j; j<=n; j++){
    for_sum += j;
}
console.log(for_sum);


// do while loop

let k = 10;
do{
    console.log(k);
    k++;
}while(k<=9)