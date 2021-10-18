function handleSubmit(ev){
    ev.preventDefault();
    
    document.getElementsByTagName('h1')[0].innerHTML += ev.target.elements.Text.value + '<br>';
}