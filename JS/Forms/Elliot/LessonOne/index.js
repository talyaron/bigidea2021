function handleSubmit(ev){
    ev.preventDefault();
    //The command shown above prevents old style of data transfer from messing up the page
    console.log(ev);

    const date = ev.target.elements.date.value;
    const name = ev.target.elements.name.value;
    const cars = ev.target.elements.cars.value;
    const description = ev.target.elements.description.value;

    console.log("The date is: " + date);
    console.log(name);
    console.log("You chose option: " + cars);
    console.log(description);
}