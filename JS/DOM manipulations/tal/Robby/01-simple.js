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