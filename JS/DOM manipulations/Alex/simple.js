function handleClick(ev){
    //alert("I was clicked by " + ev.target.id + " and the classes on this button are " + ev.target.className);
    console.log(ev);
    const buttonText = ev.target.innerText;
    if(buttonText === 'Push Me'){
        
        ev.target.innerText = 'Pushed';
    } else {
        ev.target.innerText = 'Push me';
    }
}


function handleTextChange(ev){
    console.log(ev.target.value);
}