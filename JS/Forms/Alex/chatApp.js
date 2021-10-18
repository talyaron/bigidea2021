function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);
    
    document.getElementsByTagName('h1')[0].innerHTML += ev.target.elements.Text.value + '<br>';
}
