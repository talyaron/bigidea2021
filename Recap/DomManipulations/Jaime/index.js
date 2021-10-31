//timer and click functions
var timeinterval;

function handleStartClick() {
    var startTime = Date.now();

    timeinterval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    }, 100);

    document.getElementById("word").innerHTML = randWord;
    document.getElementById("box1").innerHTML = randNum1;
    document.getElementById("box2").innerHTML = randNum2;
}
function checkIfRight(numToCheck){

    let evenOdd = evenOrOdd(numToCheck);

    if(randWord === evenOdd) {
        console.log("Correct");
        answer = "Correct";
    }
    if(randWord != evenOdd) {
        console.log("Wrong");
        answer = "Wrong";
    }
    return answer;
}

function handleGetTime(ev) {
    console.log(ev);
    var numToCheck = ev.target.innerText;

    checkIfRight(numToCheck);
    if(answer === "Correct") {
        document.getElementById("rightwrong").innerText = "Correct!";
    } else if(answer === "Wrong") {
        document.getElementById("rightwrong").innerText = "Wrong :(";
        return;
    }

    clearInterval(timeinterval);
    var finalTime = document.getElementById("timer").innerHTML;
    console.log(`${finalTime}s`);
    document.getElementById("finalTime").innerHTML = `Final Time: ${finalTime}s`;

    document.getElementById("timer").innerText = "Click to start", document.getElementById("box1").innerText = "", document.getElementById("box2").innerText = "";
}

//function for number determination
function evenOrOdd(num) {
    if (num % 2 == 0) {
      return "Even";
    } else {
      return "Odd";
    }
}

function generateBoxNums(value1, value2) {
    if(value1 === value2)  {
    
    let greater = Math.max(randNum1, randNum2);
    if(randNum1 === greater) {
        randNum1 -= 1;
    } else if (randNum2 === greater) {
        randNum2 -=1;
    }

    }
    return randNum1, randNum2;
}

//resets all values with reset button
function resetValues() {

    //resets all scores and text from last round
    document.getElementById("word").innerText = "Even/Odd";
    document.getElementById("finalTime").innerText = "";
    rightwrong.innerText = "";

    document.getElementById("box1").style.left = `${Math.random()*1200}px`;
    document.getElementById("box1").style.top = `${Math.random()*100}px`;
    document.getElementById("box2").style.left = `${Math.random()*1200}px`;
    document.getElementById("box2").style.top = `${Math.random()*100}px`;
    //generating numbers and word
    randWord = Math.random(); //word at top
    randNum1 = Math.ceil(Math.random()*10); //box1
    randNum2 = Math.ceil(Math.random()*10); //box2
    if(randWord >=0.5) {
        randWord = "Even";
        console.log("even");
    } else {
        randWord = "Odd";
        console.log("odd");
    }
    generateBoxNums(evenOrOdd(randNum1), evenOrOdd(randNum2));
    console.log(randNum1, randNum2);
}

let randWord, randNum1, randNum2;
//generating numbers
randWord = Math.random(); //word at top
randNum1 = Math.ceil(Math.random()*10); //box1
randNum2 = Math.ceil(Math.random()*10); //box2
if(randWord >=0.5) {
    randWord = "Even";
    console.log("even");
} else {
    randWord = "Odd";
    console.log("odd");
}
generateBoxNums(evenOrOdd(randNum1), evenOrOdd(randNum2));
console.log(randNum1, randNum2);
