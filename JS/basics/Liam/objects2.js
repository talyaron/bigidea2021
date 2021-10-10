function handleClick(ev){
    alert(`I was clicked by ${ev.target.id} and the class on this button is ${ev.target.className}`);
    console.log(ev)
    console.log(ev.target.outerText)
    if(buttonText === 'push me'){
        ev.target.innerText = 'pushed';
    }
        else{
            ev.target.innerText = 'push me'
    }

}
var c = 0;
function xo(ev){
    c++;
    switch (c) {
        case 1:
            ev.target.innerText = 'x';
            break;
    
        case 2:
            ev.target.innerText = 'o';
            break;
        case 3:
            ev.target.innerText = 'x';
            break;
        case 4:
            ev.target.innerText = 'o';
            break;
        case 5:
            ev.target.innerText = 'x';
            break;
        case 6:
            ev.target.innerText = 'o';
            break;
        case 7:
            ev.target.innerText = 'x';
            break;
        case 8:
            ev.target.innerText = 'o';
            break;
        case 9:
            ev.target.innerText = 'x';
            break;
        default:
            ev.target.innerText = '';
            break;
    }
}



function click(ev){
    console.log(ev.target.id)
}
function handleTextChange(ev){
    console.log(ev.target.value);
}
