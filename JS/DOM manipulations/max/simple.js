let turn =  0;
let TakenTurns = 0;

function handleClick(ev){
    //Takes care of switching turns, and Displaying the X and O
    switch(turn){
        case 0:
            ev.target.innerText = 'X';
            turn = 1;
            // adds to the # of moves made in the game, -- Check if tie 
            TakenTurns++; 
            break;
        case 1:
            ev.target.innerText = 'O';
            turn = 0;
            TakenTurns++;
            break;
    }
    checkIfTie();
    WinnerWinner();
}

// check and ends game if there is a tie 
function checkIfTie(){
    if (TakenTurns > 8) {
      alert('game over a tie')
    }
  }
  
 
function WinnerWinner(){ 
    // gave each square its own element that updates every time a move is made
    let b0 = document.getElementById('b0').innerText
    let b1 = document.getElementById('b1').innerText
    let b2 = document.getElementById('b2').innerText
    let b3 = document.getElementById('b3').innerText
    let b4 = document.getElementById('b4').innerText
    let b5 = document.getElementById('b5').innerText
    let b6 = document.getElementById('b6').innerText
    let b7 = document.getElementById('b7').innerText
    let b8 = document.getElementById('b8').innerText
    // console.log(b0, b1, b2, b3, b4, b5, b6 ,b7 ,b8)

    // hardcoded all the winning situations below 
    // and made sure to only give a valid winning situation if the boxes arnt blank
    if(b0 === b1 && b1 === b2 && b2 != ''){
        alert(`Game over ${b0} Wins!`)
    }
    else if(b3 === b4 && b4=== b5 && b5 != ''){
        alert(`Game over ${b3} Wins!`)
    }
    else if(b6=== b7 && b7 === b8  && b8 != ''){ 
        alert(`Game over ${b6} Wins! `)
    }
    else if(b0=== b3 && b3 === b6 && b6 != ''){
        alert(`Game over ${b0} Wins! `)
    }
    else if(b1=== b4 && b4 === b7 && b7 != ''){
        alert(`Game over ${b1} Wins! `)
    }
    else if(b2=== b5 && b5 === b8  && b8 != ''){
        alert(`Game over ${b2} Wins! `)
    }
    else if(b6=== b7 && b7 === b8 && b8 != ''){
        alert(`Game over ${b6} Wins! `)
    }
    else if(b0=== b4 && b4 === b8 && b8 != ''){
        alert(`Game over ${b0} Wins! `)
    }
    else if(b2=== b4 && b4 === b6 && b6 != ''){
        alert(`Game over ${b6} Wins! `)
        }
    }
