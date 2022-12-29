let userAge = 15;

if(userAge>=18){
    console.log("User can play this game.");
}
else{
    console.log("user can not play this game.");
}

// ternary operator
let drink = age >= 10 ? "Coffee" : "Milk";
console.log(drink);


// guessing number
let winningNumber = 20;
let guessedNumber = Number(prompt("Guess a number"));

if(guessedNumber===winningNumber){
    console.log("You are right !!!")
}
else{
    if(guessedNumber > winningNumber){
        console.log("too high !!!");
    }
    else{
        console.log("too low !!!");
    }
}