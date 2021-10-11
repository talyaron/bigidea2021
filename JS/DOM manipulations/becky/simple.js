function handleClick(ev){
    // alert(`i was clicked by  ${ev.target.id} and the classes on this button are ${ev.target.classList}`);
    console.log(ev)
    console.log(ev.target.outerText)
    const buttonText = ev.target.outerText
    if(buttonText === 'Push Me'){
        ev.target.innerText ="Pushed"
    } else{
        ev.target.innerText = "Push Me"
    }
}
let clickCounter = 0;
function handleClick2(ev){
    const Text = ev.target.outerText
    switch (clickCounter){
        case 0:
            ev.target.innerText = "x"
            clickCounter=1
            break;
        case 1:
            ev.target.innerText = "o"
            clickCounter=0
            break;
        case 2:
            ev.target.innerText = ""
            clickCounter=0
            break;

    
    }
}
function handleTextChange(ev){
    console.log(ev.target.value)
   
}

