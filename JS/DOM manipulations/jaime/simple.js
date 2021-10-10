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

var clicks = 0, turns = 0, box1, box2, box3, box4, box5, box6, box7, box8, box9;
function handleClickBox(ev) {
    clicks += 1;
    turns +=1;

    box1 = document.getElementById("1").innerText, box2 = document.getElementById("2").innerText, box3 = document.getElementById("3").innerText, box4 = document.getElementById("4").innerText, box5 = document.getElementById("5").innerText, box6 = document.getElementById("6").innerText, box7 = document.getElementById("7").innerText, box8 = document.getElementById("8").innerText, box9 = document.getElementById("9").innerText;
    

    switch(clicks) {
        case 1:
            ev.target.innerText = "X";
            break;
        case 2:
            ev.target.innerText = "O";
            clicks = 0;
            break;
            
    }
    checkWinner();
}


function checkWinner(ev){

    if(turns < 9) {
        if (box1 == box2 && box2 == box3 && box1 != "") {
            alert("Player " + box1 + " Wins");
        } else if (box4 == box5 && box5 == box6 && box4 != "") {
            alert("Player " + box4 + " Wins");
        } else if (box7 == box8 && box8 == box9 && box7 != "") {
            alert("Player " + box7 + " Wins");
        } else if (box1 == box4 && box4 == box7 && box1 != "") {
            alert("Player " + box1 + " Wins");
        } else if (box2 == box5 && box5 == box8 && box2 != "") {
            alert("Player " + box2 + " Wins");
        } else if (box3 == box6 && box6 == box9 && box3 != "") {
            alert("Player " + box3 + " Wins");
        } else if (box1 == box5 && box5 == box9 && box1 != "") {
            alert("Player " + box1 + " Wins");
        } else if (box3 == box5 && box5 == box7 && box3 != "") {
            alert("Player " + box3 + " Wins");
        }
    } else {
        alert("Tie.");
    }
}