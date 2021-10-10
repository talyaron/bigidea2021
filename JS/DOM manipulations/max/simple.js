let turn =  0;
function handleClick(ev){
    switch(turn){
        case 0:
            ev.target.innerText = 'X';
            turn = 1;
            break;

        case 1:
            ev.target.innerText = 'O';
            turn = 0;
            break;
    }
}

function reset(ev){
    
}
    