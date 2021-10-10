function handleClick(ev){
    console.log(ev);
    console.log(ev.target.outerText);
    const buttonText = ev.target.outerText;
    if(buttonText === 'Push Me'){

        //change to pushed
        ev.target.innerText = "Pushed";
    } else {
        ev.target.innerText = "Push Me";
    }
}

function handleTextKey(ev){
    console.log(ev.target.value);
}

var clicks = 0;
function handleClickBox(ev) {
    clicks += 1;

    debugger;
    switch(clicks) {
        case 1:
            ev.target.innerText = "X";
            break;
        case 2:
            ev.target.innerText = "O";
            break;
        default:
            ev.target.innerText = "";
            clicks = 0;
    }
}