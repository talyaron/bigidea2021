function handleClick(ev){
    //alert("I was clicked by " + ev.target.id + " and the classes on this button are " + ev.target.className);
    const buttonText = ev.target.innerText;

    switch(buttonText){
        case 'X':
            ev.target.innerText = 'O';
            break;
        case '':
            ev.target.innerText = 'X';
            break;
        default:
            ev.target.innerText='';
    }

}


function handleTextChange(ev){
    console.log(ev.target.value);
}