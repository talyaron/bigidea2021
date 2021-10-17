let turnNotifier = 0; 
//0 is O's turn, 1 is X's turn

let turnNumber = 0; 
//Acts as an end condition, essentially for when a game ends in a draw

let gameOver = 0;
//Will prevent false tie declarations

let gameResult = "The winner of this game is: ";
//For declaring the winner of the game

let box11 = document.getElementById('11').innerText;
let box12 = document.getElementById('12').innerText;
let box13 = document.getElementById('13').innerText;
let box21 = document.getElementById('21').innerText;
let box22 = document.getElementById('22').innerText;
let box23 = document.getElementById('23').innerText;
let box31 = document.getElementById('31').innerText;
let box32 = document.getElementById('32').innerText;
let box33 = document.getElementById('33').innerText;
let boxSelected;
//Initial conditions of boxes, to prevent clicking already selected box

function takeTurn(ev){
    boxSelected = ev.srcElement.id;
    turnNumber++; 
    //Starts game off at turn 1, last player input is turn 9, will process ties at turn 9
    //Will be kept at the same turn through edge cases in the other functions
    if(gameOver == 0){
    //If game still ongoing and turn hasn't been completed yet
    //Turn is still ongoing since spot is not marked yet
    //Prevents continued play after game is won
        markedSpot(boxSelected);
        //Registers change to an individual tic-tac-toe box
        checkIfWon();
        //Check if win condition is accomplished during turn
        //Will set gameOver status to 1 if game is won
        if((turnNumber == 9) && (gameOver == 0)) {
        //After the last turn has been played.
        //If the game has not been won after all boxes are full, declare a tie
            gameOver = 1;
            gameResult = "This game has resulted in a tie!";
        }
    } else {
    //Game is over in else condition, aka (gameOver == 1)
        alert(gameResult);
        //Will declare winner based on GameResult,
        //Which is automatically updated to include the winner.
        alert("Would you like to play again? If so, click reset!");
        //Will prompt players if they want to play again
    }
}

//Working as planned (100%)
//Properly marks in turns
//Properly avoids selecting an already filled box
//Properly keeps the game at the same turn if turn not properly taken
//Properly updates game grid status to 2D array "gameGrid"
function markedSpot(boxSelected){
    var previousElementState = window['box' + boxSelected];
    if(previousElementState == ""){
        switch(turnNotifier){
            case 0:
                ev.target.innerText = "O";
                turnNotifier = 1;
                window['box' + boxSelected] = "O";
                break;
            case 1:
                ev.target.innerText = "X";
                turnNotifier = 0;
                window['box' + boxSelected] = "X";
                break;
        } 
    } else {
        alert(`You cannot mark this box, try another...`);
        turnNumber--;
        //Sets the turn number back to keep the game going on the same turn
    }
}

function checkIfWon(){
    //if game is won through an y of the win conditions, 
    //set gameOver variable to 1.

    if(box11 == box12 == box13 != ""){
        gameOver = 1;
        gameResult = gameResult + box11;
    } else if(box21 == box22 == box23 != ""){
        gameOver = 1;
        gameResult = gameResult + box21;
    } else if(box31 == box32 == box33 != "") {
        gameOver = 1;
        gameResult = gameResult + box31;
    } else if(box11 == box21 == box31 != "") {
        gameOver = 1;
        gameResult = gameResult + box11;
    } else if(box12 == box22 == box32 != "") {
        gameOver = 1;
        gameResult = gameResult + box12;
    } else if(box13 == box23 == box33 != "") {
        gameOver = 1;
        gameResult = gameResult + box13;
    } else if(box11 == box22 == box33 != "") {
        gameOver = 1;
        gameResult = gameResult + box11;
    } else if(box13 == box22 == box31 != "") {
        gameOver = 1;
        gameResult = gameResult + box13;
    }
}
