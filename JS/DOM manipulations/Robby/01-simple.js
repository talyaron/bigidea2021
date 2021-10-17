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

//rectangle
var clicks= 0;
function handleClick2(ev){
   
    clicks ++;
switch(clicks) {

    case 1:
    ev.target.innerText =  "X";
    break;
    case 2:
    ev.target.innerText =  "O";
    clicks= 0;
    break;
}
}


function handleClick4(ev)
{
    let backgroundColor= ev.target.value;
    document.body.style.backgroundColor= backgroundColor;



}
