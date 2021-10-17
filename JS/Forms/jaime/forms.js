function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const color = ev.target.elements.color.value;

    const title = ev.target.elements.title.value;
    const date = ev.target.elements.date.value;
    const description = ev.target.elements.cars.value;

    document.getElementsByClassName('title').style.innerText = title;
    document.getElementsByClassName('date').style.innerText = date;
    document.getElementsByClassName('description').style.innerText = description;
    document.getElementsByClassName('body').style.background = color;
}