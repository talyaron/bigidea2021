//timer
function handleStartClick() {
    var startTime = Date.now();

    var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    }, 100);

    document.getElementById("box1").innerHTML = randNum1;
    document.getElementById("box2").innerHTML = randNum2;
}

function handleGetTime() {
    var finalTime = document.getElementById("timer").innerHTML;
    console.log(`${finalTime}s`);
    document.getElementById("finalTime").innerHTML = `Final Time: ${finalTime}s`;

    //stop timer somehow
}

//generating number
let randWord = Math.random(); //word at top
let randNum1 = Math.round(Math.random()*10); //box1
let randNum2 = Math.round(Math.random()*10); //box2

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