function handleClick(ev) {
    // alert(`I was clicked by ${ev.target.id} and the class on this button are ${ev.target.classList}`);
    console.log(ev)
    console.log(ev.target.innerText);
    const buttonText = ev.target.innerText;
  
    console.log('buttonText:',buttonText)
    switch (buttonText) {
        case "":
            ev.target.innerText = 'X';
            break;
        case 'X':
            ev.target.innerText = 'O';
            break;
        case 'O':
            ev.target.innerText = '';
            break;
        default:
            ev.target.innerText = '44';

    }
    
}

function handleTextChange(ev) {

    console.log(ev.target.value);
}