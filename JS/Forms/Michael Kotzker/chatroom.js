function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    let text = ev.target.elements.text.value;
    console.log(text);

}