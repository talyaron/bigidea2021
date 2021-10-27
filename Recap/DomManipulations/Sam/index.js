/*document.addEventListener('mouseenter', () => {document.body.style.background = 'red'})
document.addEventListener('mouseleave', () => {document.body.style.background = 'white'})

const root = document.getElementById ('root');
console.log(root)
//timer
setInterval(() => {
 console.log(root)
 root.innerHTML++;
}, 1000)*/

// input text

//grabs the input element
const inputBox = document.getElementById('textbox_id')

//looks for events on the input box, and do some function
inputBox.addEventListener('change',()=>{

//get the text input
    const text = document.getElementById('textbox_id').value;
    console.log(text);

    //assigning the value of the text to the output paragraph
    document.getElementById('output').innerText = text;
})