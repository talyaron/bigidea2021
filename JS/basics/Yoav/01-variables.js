


let num = 15;
let count = 0;
let win = false;
let fail = false;
var guess = prompt("Guess my number! It's between 1-100");

while (win == false || fail == false) {
    if (guess == -1)
        fail = true
    
    if (guess > num) {
        console.log("Too high, guess again");
        guess = prompt("Too high, guess again");
        count++;
        
    }
        
    else if (guess < num) {
        console.log("Too low, guess again");
        guess = prompt("Too low, guess again");
        count++;
    }

    else if (guess == num)
        win = true;

    
}

    
if (win == true) {
    console.log("You win! It took you " + count + " guesses!");
    guess = prompt("You win! It took you " + count + " guesses!")
}
    

else {
    console.log("Good game.");
    guess = prompt("Good game");
}
    
    

