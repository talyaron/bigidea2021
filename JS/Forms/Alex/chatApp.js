function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const text= ev.target.elements.Text.value;
    let newText = document.getElementsByTagName('h1')[0];
    
    newText.innerHTML += text + '<br>';
}
