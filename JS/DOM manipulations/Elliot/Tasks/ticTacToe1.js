
let turnNotifier = 0; 
//0 is O's turn, 1 is X's turn

let turnNumber = 0; 
//Acts as an end condition, essentially for when a game ends in a draw

let gameOver = 0;
//Will prevent false tie declarations

let buttonToGridRow;
let buttonToGridColumn;
//For updating the model grid to the actual Tic-Tac-Toe grid's status*/

let gameResult = "The winner of this game is: ";
//For declaring the winner of the game

function takeTurn(ev){
    turnNumber++; 
    //Starts game off at turn 1, last player input is turn 9, will process ties at turn 9
    //Will be kept at the same turn through edge cases in the other functions
    if(gameOver == 0){
    //If game still ongoing and turn hasn't been completed yet
    //Turn is still ongoing since spot is not marked yet
    //Prevents continued play after game is won
        markedSpot(ev);
        //Registers change to an individual tic-tac-toe box
        checkIfWon(ev);
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
function markedSpot(ev){
    if(ev.target.innerText == ""){
        //plotGrid(ev);
        //Finds 2D array grid coordinates to track status of grid
        switch(turnNotifier){
            case 0:
                ev.target.innerText = "O";
                turnNotifier = 1;
                break;
            case 1:
                ev.target.innerText = "X";
                turnNotifier = 0;
                break;
        } 
    } else {
        alert(`You cannot mark this box, try another...`);
        turnNumber--;
        //Sets the turn number back to keep the game going on the same turn
    }
}

function checkIfWon(ev){
    //if game is won through an y of the win conditions, 
    //set gameOver variable to 1.
    if(document.getElementById('1') == document.getElementById('2') == document.getElementById('3') != ""){
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('4') == document.getElementById('5') == document.getElementById('6') != ""){
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('7') == document.getElementById('8') == document.getElementById('9') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('1') == document.getElementById('4') == document.getElementById('7') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('2') == document.getElementById('5') == document.getElementById('8') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('3') == document.getElementById('6') == document.getElementById('9') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('1') == document.getElementById('5') == document.getElementById('9') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    } else if(document.getElementById('7') == document.getElementById('5') == document.getElementById('3') != "") {
        gameOver = 1;
        gameResult =+ ev.target.innerText;
    }
}
