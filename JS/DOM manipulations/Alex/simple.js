function handleClick(ev){
    //alert("I was clicked by " + ev.target.id + " and the classes on this button are " + ev.target.className);
    console.log(ev);
    const buttonText = ev.target.innerText;
    if(buttonText === ''){
        
        ev.target.innerText = 'X';
        
    } else if(buttonText === 'X') {

        ev.target.innerText = 'O';

    } else{ev.target.innerText=''}
}


function handleTextChange(ev){
    console.log(ev.target.value);
}