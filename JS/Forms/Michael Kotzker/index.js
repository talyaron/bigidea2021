function handleSubmit(ev) {
    ev.preventDefault();
    console.log(ev)

    const name = ev.target.elements.name.value;

    console.log(name)
}