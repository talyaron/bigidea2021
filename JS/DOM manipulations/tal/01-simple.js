function handleClick(ev){
    // alert(`I was clicked by ${ev.target.id} and the class on this button are ${ev.target.classList}`);
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
  
    console.log(ev.target.value);
}