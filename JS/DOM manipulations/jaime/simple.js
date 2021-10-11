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

var clicks = 0, turns = 0;
function handleClickBox(ev) {
    clicks += 1;
    turns +=1;

    switch(clicks) {
        case 1:
            ev.target.innerText = "X";
            break;
        case 2:
            ev.target.innerText = "O";
            clicks = 0;
            break;
    }
}


var box1 = document.getElementById("1").src, box2 = document.getElementById("2").src, box3 = document.getElementById("3").src, box4 = document.getElementById("4").src, box5 = document.getElementById("5").src, box6 = document.getElementById("6").src, box7 = document.getElementById("7").src, box8 = document.getElementById("8").src, box9 = document.getElementById("9").src;

function checkWinner(ev){

    if (box1.innerText == box2.innerText && box3.innerText) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box4. == box5 && box6) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box7 == box8 && box9) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box1 == box4 && box7) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box2 == box5 && box8) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box3 == box6 && box9) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box1 == box5 && box9) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if (box3 == box5 && box7) {
        alert(`Player ${ev.target.innerText} won!`);
    }

    if(turns === 9) {
        console.log("no winner");
    }

}