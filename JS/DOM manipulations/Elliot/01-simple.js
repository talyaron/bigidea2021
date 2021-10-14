function handleClick(ev){ //ev is convention for the event
    /*alert(`Somebody has clicked me just now... It was ${ev.target.id}`);
    alert(`I am of the class ${ev.target.className}`);
    //Can also use ev.target.classList for getting the name of the class
    console.log(ev);*/

    console.log(ev);
    console.log(ev.target.innerText);
    let buttonText = ev.target.innerText;
    if(buttonText === 'Push Me?') {
        ev.target.innerText = "Pushed.";
    } else {
        ev.target.innerText = "Push Me?";
    }
}

function handleTextChange(ev){
    console.log(ev);
    alert(`You have just typed the phrase ${ev.target.value}`);
}

function countUp(ev){
    let counter = ev.target.innerText;
    
    switch(counter){
        case "0":
            ev.target.innerText = 1;
            break;
        case "1":
            ev.target.innerText = 2;
            break;
        case "2":
            ev.target.innerText = 3;
            break;
        default:
            ev.target.innerText = 0;
    }
}