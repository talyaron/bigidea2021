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
var b1="", b2="", b3="", b4="0", b5="", b6="", b7="", b8="", b9=""; 
function handleTextChange(ev)
{
console.log(ev.target.value);


}

function handleClick3(ev){
    
    if(b1==b2 && b1==b3 && b1!="") 
    {
        alert(b1+ ' is Victorious on the field of battle!');
    
        
    } else if(b1==b4 && b1==b7 && b1!="")
    {
        alert(b1+ ' is Victorious on the field of battle!');
    }
    else if (b1==b5 &&b1==b9 && b1!="") 
    {
        alert(b1+ ' is Victorious on the field of battle!');
    }
    else if (b4==b5 && b5==b6 && b4!="")
     {
        alert(b4+ ' is Victorious on the field of battle!');
        } 
    else if  (b3==b5 && b5==b7 && b5!="")
    {
        alert(b3+ ' is Victorious on the field of battle!');
    }
    else if(b2==b5 && b5==b8 && b2!="") 
    {
        alert(b5+ ' is Victorious on the field of battle!');
    }
    else if(b7==b8 && b8==b9 && b7!="") 
    {
        alert(b9+ ' is Victorious on the field of battle');
    }
    else if(b3==b6 && b6==b9 && b9!="")
    {
        alert(b9+ ' is Victorious on the field of battle');
    }
}

//rectangle


var clicks=0;
function handleClick2(ev) {
    clicks += 1;
    switch(clicks) {
        case 1:
            ev.target.innerText = "X";
            break;
        case 2:
            ev.target.innerText = "O";
            clicks = 0;
            break;
}
    b1 = document.getElementById("b1").innerText, b2 = document.getElementById("b2").innerText, b3 = document.getElementById("b3").innerText, b4 = document.getElementById("b4").innerText, b5 = document.getElementById("b5").innerText, b6 = document.getElementById("b6").innerText, b7 = document.getElementById("b7").innerText, b8 = document.getElementById("b8").innerText, b9 = document.getElementById("b9").innerText;
    

    
handleClick3();
}

