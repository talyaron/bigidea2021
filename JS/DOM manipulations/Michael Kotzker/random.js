let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9];

function randomizeBoxes(ev){
    boxes.forEach(element =>{
        element.style.top = `${Math.random()*100}vh`;
        element.style.left = `${Math.random()*100}vw`;
    });
}
randomizeBoxes();