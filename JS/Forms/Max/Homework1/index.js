function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    let textMessage = ev.target.elements.text.value;
    console.log('User Message: ', textMessage);

    var x = document.createElement("HEADER");
    x.setAttribute("id", "myHeader");
    document.body.appendChild(x);

    var y = document.createElement("H3"); 
    var t = document.createTextNode(textMessage);
    y.appendChild(t);

    document.getElementById("myHeader").appendChild(y);


}
