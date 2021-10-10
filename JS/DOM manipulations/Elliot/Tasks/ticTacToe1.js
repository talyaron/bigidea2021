
let turnNotifier = 0; //0 is O's turn, 1 is X's turn

function markedSpot(ev){
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
}