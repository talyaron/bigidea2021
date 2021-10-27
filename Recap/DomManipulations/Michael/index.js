//document.addEventListener('mouseenter', () => {document.body.style.background = 'red'});

//document.addEventListener('mouseleave', () => {document.body.style.background = 'white'});

//timer
//const root = document.getElementById('root');
//console.log(root)
//setInterval(() => {
//    root.innerHTML++
//}, 1000);
const box = document.getElementById('box');
let left = 0;
//add event listener
box.addEventListener('mouseenter', ()=>{
    left += 100;
    box.style.left = `${left}px`;
})

function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const text= ev.target.elements.text.value;
    let newText = document.getElementsByTagName('div')[0];
    
    newText.innerHTML += text + '<br>';
}