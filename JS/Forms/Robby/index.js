function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const title= ev.target.elements.Title.value;
    let h1 = document.getElementsByTagName('h1')[0];
    h1.innerHTML = title;
    const date= ev.target.elements.date.value;
    let h2 = document.getElementsByTagName('h2')[0];
    h2.innerHTML = date;
    const description= ev.target.elements.description.value;
    let h3= document.getElementsByTagName('h3')[0];
    h3.innerHTML = description
    const colors= ev.target.elements.color.value;
    document.getElementById('body').style.background= colors;
}
