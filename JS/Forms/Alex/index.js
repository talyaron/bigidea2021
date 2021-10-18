function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const name = ev.target.elements.title.value;
    const date = ev.target.elements.date.value;
    const color = ev.target.elements.color.value;
    const description = ev.target.elements.description.value;
    console.log(name);
    console.log(date);
    console.log(color);
    console.log(description);

    document.getElementById('Title').innerHTML = name;
    document.getElementById('Date').innerHTML = date;
    document.getElementById('descriptionP').innerHTML = description;
    document.body.style.backgroundColor = color;
}