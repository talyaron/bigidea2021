let userTurn = 'O'

function handleClick(ev) {
    // alert(`I was clicked by ${ev.target.id} and the class on this button are ${ev.target.classList}`);
    console.log(ev)
    console.log(ev.target.innerText);
    const buttonText = ev.target.innerText;
  
    console.log('buttonText:',buttonText)
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
    
}

function handleTextChange(ev) {

    console.log(ev.target.value);
}