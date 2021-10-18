function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev)

    const name = ev.target.elements.name.value;
    document.getElementById('h1').innerText = name;
    console.log(name)
    

    const date = ev.target.elements.date.value;
    document.getElementById('h2').innerText = date;
    console.log(date)


    const car = ev.target.elements.cars.value;
    console.log(car)

    const textBox = ev.target.elements.description.value;
    document.getElementById('h3').innerText = textBox;
    console.log(textBox)

    let backgroundColor = ev.target.elements.color.value;
    document.body.style.backgroundColor =backgroundColor;
    console.log(backgroundColor)

}
