document
    .addEventListener('mouseenter', () => {document.body.style.background= 'red'})
document  
    .addEventListener('mouseleave', () => {document.body.style.background= 'white'})

const root= document.getElementById('root')
console.log(root)

//timer
setInterval(() => {



}, 1000);

function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const text= ev.target.elements.Text.value;
    let h1 = document.getElementsByTagName('h1')[0];
    if(h1.innerHTML === "Text"){
        h1.innerHTML = text + '<br>' ;
    }
    else{
        h1.innerHTML += text + '<br>';
    }
    
    
    
}
