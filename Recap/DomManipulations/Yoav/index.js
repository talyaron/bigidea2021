document.addEventListener('mouseenter',() => {document.body.style.background = 'red'});

document.addEventListener('mouseleave',() => {document.body.style.background = 'white'});

//timer
const root = document.getElementById('root');
setInterval(() => {
    console.log(root);
    root.innerHTML++;
},1000)

//input text

//grabs the input element
const inputBox = document.getElementById('textbox_id')

//looks for events on the input box, and do some function
inputBox.addEventListener('change',()=>{

    //get the text input
    const text = document.getElementById('textbox_id').value
    console.log(text);

    //assigns the value of the input to the innertext of the html 
    document.getElementById('output').innerText = text;
})


//Moving box
const box = document.getElementById('box');
let left = 0;

//add event listener 
box.addEventListener('mouseover',()=>{
    left += 100
    box.style.left = `${left}px`;
    
})