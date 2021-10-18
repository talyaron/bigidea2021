function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    let name = ev.target.elements.name.value;
    console.log('name->', name);
    let date = ev.target.elements.date.value;
    console.log('date->', date);
    let car = ev.target.elements.cars.value;
    console.log('car->', car);
    let description = ev.target.elements.description.value;
    console.log('description->', description);

}


function handleSubmit1(ev){
    ev.preventDefault();
    console.log(ev)
    let title = ev.target.elements.title.value;
    let date1 = ev.target.elements.date1.value;
    let BGcolor = ev.target.elements.color.value;
    let content = ev.target.elements.content.value;
    console.log(title, date1, content, BGcolor)

    var head1 = document.getElementById('head1');
    head1.innerText = title;

    var head2 = document.getElementById('head2');
    head2.innerText = date1;
    
    var head3 = document.getElementById('head3');
    head3.innerText = content;
    
    document.body.style.backgroundColor = BGcolor;
    
}