let one = document.querySelector('#one');
let two = document.querySelector('#two');
let three = document.querySelector('#three');
let four = document.querySelector('#four');
let five = document.querySelector('#five');
let six = document.querySelector('#six');
let seven = document.querySelector('#seven');
let eight = document.querySelector('#eight');
let nine = document.querySelector('#nine');

const boxes = [one,two,three,four,five,six,seven,eight,nine];

function Scramble(){
    boxes.forEach(element =>{
        element.style.top = `${Math.random()*100}vh`;
        element.style.left = `${Math.random()*100}vw`;
    });
}
Scramble();