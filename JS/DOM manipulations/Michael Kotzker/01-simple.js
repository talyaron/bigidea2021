function handleTextChange(ev){
    console.log(ev.target.value)
}
let userTurn = 'O'
function handleClick(ev){
    console.log(ev)
    console.log(ev.target.outerText);
    //const Text = ev.target.outerText
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
    
    //if(Text === 'X'){

    
        //ev.target.innerText ="O";
    //} else if(Text == 'O') {
       //ev.target.innerText ="";
    //} else {
        //ev.target.innerText ="X"
    //}
}