function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    let text = ev.target.elements.text.value;
    console.log('>', text);
    
    let chatbox = ev.target.elements.text.value;
    var chat = document.getElementById('chatbox');
    chat.innerText = chatbox;
}