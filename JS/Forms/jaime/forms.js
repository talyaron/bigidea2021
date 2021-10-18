function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const color = ev.target.elements.color.value;

    const title = ev.target.elements.title.value;
    const date = ev.target.elements.date.value;
    const description = ev.target.elements.description.value;

    document.getElementById('titleOut').innerText = title;
    document.getElementById('dateOut').innerText = date;
    document.getElementById('descriptionOut').innerText = description;
    document.getElementById('body').style.background = color;
}

//challenge: add text input that does a line break

function handleTextSubmit(ev){
    ev.preventDefault();
    const text = ev.target.elements.text.value;
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML += text + '<br>';
    ev.target.reset();
}