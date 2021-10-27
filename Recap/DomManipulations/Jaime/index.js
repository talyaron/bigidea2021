let count=0;
const timer = document.getElementById('timer');
console.log(timer);

//timer
setInterval(function timer(ev){
    count += 1;
    document.getElementById('timer').innerText = count;
}, 0.001)


//generating number
let randWord = Math.random();
let randNum1 = Math.round(Math.random()*10);
let randNum2 = Math.round(Math.random()*10);

//function for number determination
function evenOrOdd(num) {
    if (num % 2 == 0) {
      return "even";
    } else {
      return "odd";
    }
}

function generateBoxNums(value1, value2) {
    if(value1 === value2) {
        randNum1 -= 1;   
    }

    return randNum1, randNum2;
}

if(randWord >=0.5) {
    console.log("even");
} else {
    console.log("odd");
}

generateBoxNums(evenOrOdd(randNum1), evenOrOdd(randNum2));
console.log(randNum1, randNum2);

/*
For odd number box:

-First generate rand num
-Round num
-Then check if even or odd
-If even, add one to num
-If odd, just continue
*/

/*
For even number box:

-First generate rand num
-Round num
-Then check if even or odd
-If odd, add one to num
-If even, just continue
*/