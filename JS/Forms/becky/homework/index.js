function displayText(ev){
    ev.preventDefault();
    let text = ev.target.elements.text.value;
    document.getElementById('h1').innerText = text + " " + document.getElementById('h1').innerText
    console.log(text)
}