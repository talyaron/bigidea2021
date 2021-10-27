const box = document.getElementById('box');

//add event listner
let left = 0;
box.addEventListener('mouseover', () => {
    left += 100;
    box.style.left = `${left}px`;

})

//grabs the input element
const inputBox = document.getElementById('textbox_id')

//looks for events on the input box, and do some function
inputBox.addEventListener('change', () => {

    //get the text input
    const text = document.getElementById('textbox_id').value;


    //assigning the value of the text to the output paragraph
    document.getElementById('output').innerText = text;
})





document.addEventListener('mouseenter', () => changeColor('green'));

document.addEventListener('mouseleave', () => changeColor('purple'));
document.addEventListener('dblclick', () => changeColor('red'))

const root = document.getElementById('root');
let counter = 1;
console.log(root)
//timer
setInterval(countHTML, 1000);

function changeColor(color) {
    console.log('changeColor')
    document.body.style.background = color
}

function countHTML() {

    root.innerHTML = counter;
    counter++;

}