function handleTextChange(ev){
    console.log(ev.target.value)
}
let userTurn = 'O'
function handleClick(ev){
    console.log(ev)
    console.log(ev.target.outerText);
    //const Text = ev.target.outerText
    switch (userTurn) {
        case "O":
            userTurn = 'X'
            ev.target.innerText = 'X';
            break;
        case 'X':
            ev.target.innerText = 'O';
            userTurn = 'O'
            break;
       
        default:
            ev.target.innerText = 'E';

    }
    Win();
    //if(Text === 'X'){

    
        //ev.target.innerText ="O";
    //} else if(Text == 'O') {
       //ev.target.innerText ="";
    //} else {
        //ev.target.innerText ="X"
    //}
}

function Win() {
    var B1, B2, B3, B4, B5, B6, B7, B8, B9;
    if(document.getElementById("B1").innerText != "") {
        B1 = document.getElementById("B1").innerText;
    }
    else {
        B1 = 'Null1'
    }
    if(document.getElementById("B2").innerText != "") {
        B2 = document.getElementById("B2").innerText;
    }
    else {
        B2 = 'Null2'
    }
    if(document.getElementById("B3").innerText != "") {
        B3 = document.getElementById("B3").innerText;
    }
    else {
        B3 = 'Null3'
    }
    if(document.getElementById("B4").innerText != "") {
        B4 = document.getElementById("B4").innerText;
    }
    else {
        B4 = 'Null4'
    }
    if(document.getElementById("B5").innerText != "") {
        B5 = document.getElementById("B5").innerText;
    }
    else {
        B5 = 'Null5'
    }
    if(document.getElementById("B6").innerText != "") {
        B6 = document.getElementById("B6").innerText;
    }
    else {
        B6 = 'Null6'
    }
    if(document.getElementById("B7").innerText != "") {
        B7 = document.getElementById("B7").innerText;
    }
    else {
        B7 = 'Null7'
    }
    if(document.getElementById("B8").innerText != "") {
        B8 = document.getElementById("B8").innerText;
    }
    else {
        B8 = 'Null8'
    }
    if(document.getElementById("B9").innerText != "") {
        B9 = document.getElementById("B9").innerText;
    }
    else {
        B9 = 'Null9'
    }

    
    if(B1==B2 && B2==B3) {
        alert(B1 + " wins");
    }
    else if(B4==B5 && B5==B6) {
        alert(B4 + " wins");
    }
    else if(B7==B8 && B8==B9) {
        alert(B7 + " wins");
    }
    else if(B1==B5 && B5==B9) {
        alert(B1 + " wins");
    }
    else if(B3==B5 && B5==B7){
        alert(B3 + " wins");
    }
    else if(B1==B4 && B4==B7) {
        alert(B1 + " wins");
    }
    else if(B2==B5 && B5==B8) {
        alert(B2 + " wins");
    }
    else if(B3==B6 && B6==B9) {
        alert(B3 + " wins");
    }
}