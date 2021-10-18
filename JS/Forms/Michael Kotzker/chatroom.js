function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const text= ev.target.elements.text.value;
    let newText = document.getElementsByTagName('div')[0];
    
    newText.innerHTML += text + '<br>';
}