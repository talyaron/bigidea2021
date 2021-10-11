alternate = 0;

function handleClick(ev){
    const buttonText = ev.target.innerText;
    alternate += 1;
    switch(alternate) {
        case 1:
            ev.target.innerText = "X";
            break;
        case 2:
            ev.target.innerText = "O";
            alternate = 0;
            break;
    }
    checkWin();


}


function checkWin(){
    var b1, b1, b3, b4, b5, b6, b7, b8, b9;
    if(document.getElementById("b1").innerText != ""){
        b1 = document.getElementById("b1").innerText;
    }else{b1 = 'Null1'}
    if(document.getElementById("b2").innerText != ""){
        b2 = document.getElementById("b2").innerText;
    }else{b2 = 'Null2'}
    if(document.getElementById("b3").innerText != ""){
        b3 = document.getElementById("b3").innerText;
    }else{b3 = 'Null3'}
    if(document.getElementById("b4").innerText != ""){
        b4 = document.getElementById("b4").innerText;
    }else{b4 = 'Null4'}
    if(document.getElementById("b5").innerText != ""){
        b5 = document.getElementById("b5").innerText;
    }else{b5 = 'Null5'}
    if(document.getElementById("b6").innerText != ""){
        b6 = document.getElementById("b6").innerText;
    }else{b6 = 'Null6'}
    if(document.getElementById("b7").innerText != ""){
        b7 = document.getElementById("b7").innerText;
    }else{b7 = 'Null7'}
    if(document.getElementById("b8").innerText != ""){
        b8 = document.getElementById("b8").innerText;
    }else{b8 = 'Null8'}
    if(document.getElementById("b9").innerText != ""){
        b9 = document.getElementById("b9").innerText;
    }else{b9 = 'Null9'}

    if(b1==b2 && b2==b3){
        alert(b1 + " Wins!");
    } else if(b4==b5 && b5==b6){
        alert(b4 + " Wins!");
    } else if(b7==b8 && b8==b9){
        alert(b7 + " Wins!");
    }else if(b1==b5 && b5==b9){
        alert(b1 + " Wins!");
    }else if(b3==b5 && b5==b7){
        alert(b3 + " Wins!");
    }else if(b1==b4 && b4==b7){
        alert(b1 + " Wins!");
    }else if(b2==b5 && b5==b8){
        alert(b2 + " Wins!");
    }else if(b3==b6 && b6==b9){
        alert(b4 + " Wins!");
    }
    //123 456 789 159 357 147 258 369
}
