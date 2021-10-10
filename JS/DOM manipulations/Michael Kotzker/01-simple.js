function handleClick(ev){
    alert(`I was clicked by ${ev.target.id} and the class on this button is ${ev.target.className}`);
    console.log(ev)
}