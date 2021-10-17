let turnNotifier = "X"; 
let turnNumber = 1;
let gameOver = 0;
let gameResult = "The winner of this game is: ";
let box11, box12, box13, box21, box22, box23, box31, box32, box33;

function takeTurn(ev){
    if(gameOver == 0){
        markedSpot(ev, ev.srcElement.id);
        checkIfWon();
        checkIfTie();
    } 
    if(gameOver == 1){
        alert(gameResult);
        alert("Would you like to play again? If so, click reset!");
    }
    changeTurn();
}

function markedSpot(ev, selectedID){
    if(document.getElementById(selectedID).innerText == ""){
        switch(turnNotifier){
            case "O":
                ev.target.innerText = "O";
                break;
            case "X":
                ev.target.innerText = "X";
                break;
        } 
    } else {
        alert(`You cannot mark this box, try another...`);
        turnNumber--;
    }
}

function checkIfWon(){
    box11 = document.getElementById("11").innerText;
    box12 = document.getElementById("12").innerText;
    box13 = document.getElementById("13").innerText;
    box21 = document.getElementById("21").innerText;
    box22 = document.getElementById("22").innerText;
    box23 = document.getElementById("23").innerText;
    box31 = document.getElementById("31").innerText;
    box32 = document.getElementById("32").innerText;
    box33 = document.getElementById("33").innerText;


    //Checks top row, then middle row, then bottom row
    //Checks first column, then second column, then third column
    //Checks down slash, then up slash
    //Note that you cannot compare box11 == box12 == box13 directly...
    if((box11 == box12) && (box11 == box13) && (box12 == box13) && ((box11 == "X") || (box11 == "O"))){
        gameOver = 1;
    } else if((box21 == box22) && (box21 == box23) && (box22 == box23) && ((box21 == "X") || (box21 == "O"))){
        gameOver = 1;
    } else if((box31 == box32) && (box31 == box33) && (box32 == box33) && ((box31 == "X") || (box31 == "O"))){
        gameOver = 1;
    } else if((box11 == box21) && (box11 == box31) && (box21 == box31) && ((box11 == "X") || (box11 == "O"))){
        gameOver = 1;
    } else if((box12 == box22) && (box12 == box32) && (box22 == box32) && ((box12 == "X") || (box12 == "O"))){
        gameOver = 1;
    } else if((box13 == box23) && (box13 == box33) && (box23 == box33) && ((box13 == "X") || (box13 == "O"))){
        gameOver = 1;
    } else if((box11 == box22) && (box11 == box33) && (box22 == box33) && ((box22 == "X") || (box22 == "O"))){
        gameOver = 1;
    } else if((box13 == box22) && (box13 == box31) && (box22 == box31) && ((box22 == "X") || (box22 == "O"))){
        gameOver = 1;
    }

    if(gameOver == 1){
        gameResult = gameResult + turnNotifier;
    }
}

function checkIfTie(){
    if((turnNumber == 9) && (gameOver == 0)) {
        gameOver = 1;
        gameResult = "This game has resulted in a tie!";
    }
}

function changeTurn(){
    switch(turnNotifier){
        case "O":
            turnNotifier = "X";
            break;
        case "X":
            turnNotifier = "O";
            break;
    } 
    turnNumber++;
}