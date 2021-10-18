function handleBlogPost(ev){
    ev.preventDefault();
    console.log(ev);
    let title = ev.target.elements.title.value;
    let date = ev.target.elements.date.value;
    let name = ev.target.elements.name.value;
    let description = ev.target.elements.description.value;
    let color = ev.target.elements.color.value;
    setOutputResults(title, date, name, description, color);
}

//Have a title, date, and description will all be displayed below the input form
//Also include color changer


/*
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
}*/

function setOutputResults(blogTitle, blogDate, blogName, blogDescription, backgroundColor){
    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('returnTitle').innerText = blogTitle;
    document.getElementById('returnDate').innerText = blogDate;
    document.getElementById('returnName').innerText = blogName;
    document.getElementById('returnDescription').innerText = blogDescription;
}