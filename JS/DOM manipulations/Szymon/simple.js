function handleclick(ev){
    //alert(`I was clicked by ${ev.target.id} and the class on this button are ${ev.target.className}`)
    console.log(ev)
    console.log(ev.target.outerText)
    const buttonText=ev.target.innerText
    if(buttonText === `Push Me`){
        ev.target.innerText="Pushed"
    }
    else{
        ev.target.innerText="Push Me"
    }
}

function handleTextChange(ev){
    console.log(ev.target.value)
 
 }