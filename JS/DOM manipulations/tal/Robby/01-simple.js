function handleClick(ev){
    //alert(`I was clicked by ${ev.target.id} dawg and the class on this button is ${ev.target.className} broski`);
    console.log(ev)
    console.log(ev.target.outerText)
    const buttonText=ev.target.outerText
    if(buttonText === 'Push Me'){
        ev.target.innerText = "Pushed";
    }
    else{
        ev.target.innerText =  "Push Me";
    }
}

function handleTextChange(ev)
{
console.log(ev.target.value);


}

function handleClick3(ev){

    
    var b1, b2, b3, b4, b5, b6, b7, b8, b9;
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
    
    if((b1==b2 && b1==b3) || (b1==b4 && b1==b7) || (b1==b5 &&b1==b9)  &&( (b1== "X") || (b1== "O"))){
     alert(b1+ 'is Victorious on the field of battle!')
        }
    else if((b4==b5 && b5==b6) ||
    (b3==b5 && b5==b7) || (b2==b5 && b5==b8) && ((b5== "X") || (b1== "O"))){
        alert(b5+ 'is Victorious on the field of battle!')
    }
    else if((b7==b8 && b8==b9) || (b3==b6 && b6==b9) && ((b9== "X") ||(b9==O))){
        alert(b9+ 'is Victorious on the field of battle')
    }}

//rectangle



function handleClick2(ev){
    var clicks= 0;
    clicks ++;
switch(clicks) {

    case 1:
    ev.target.innerText =  "X";
    handleClick3();
    break;
    case 2:
    ev.target.innerText =  "O";
    handleClick3();
    clicks= 0;
    break;
}
}
