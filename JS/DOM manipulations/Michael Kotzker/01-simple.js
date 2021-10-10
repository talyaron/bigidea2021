function handleClick(ev){
    // alert(`I was clicked by ${ev.target.id} and the class on this button is ${ev.target.className}`);
    console.log(ev)
    console.log(ev.target.outerText);
    const buttonText = ev.target.outerText
    if(buttonText === 'Push Me'){

        //change to Pushed
        ev.target.innerText ="Pushed";
    } else {
        ev.target.innerText ="Push Me";
    }
}
function handleTextChange(ev){
    console.log(ev.target.value)
}
function handleClick2(ev){
    console.log(ev)
    console.log(ev.target.outerText);
    const Text = ev.target.outerText
    if(Text === 'X'){

        //change to Pushed
        ev.target.innerText ="O";
    } else if(Text == 'O') {
        ev.target.innerText ="";
    } else {
        ev.target.innerText ="X"
    }
}