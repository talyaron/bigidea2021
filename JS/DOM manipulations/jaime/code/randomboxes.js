let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');
let box6 = document.querySelector('#box6');
let box7 = document.querySelector('#box7');
let box8 = document.querySelector('#box8');
let box9 = document.querySelector('#box9');
let box10 = document.querySelector('#box10');

let box11 = document.querySelector('#box11');
let box12 = document.querySelector('#box12');
let box13 = document.querySelector('#box13');
let box14 = document.querySelector('#box14');
let box15 = document.querySelector('#box15');
let box16 = document.querySelector('#box16');
let box17 = document.querySelector('#box17');
let box18 = document.querySelector('#box18');
let box19 = document.querySelector('#box19');
let box20 = document.querySelector('#box20');

let box21 = document.querySelector('#box21');
let box22 = document.querySelector('#box22');
let box23 = document.querySelector('#box23');
let box24 = document.querySelector('#box24');
let box25 = document.querySelector('#box25');
let box26 = document.querySelector('#box26');
let box27 = document.querySelector('#box27');
let box28 = document.querySelector('#box28');
let box29 = document.querySelector('#box29');
let box30 = document.querySelector('#box30');

let box31 = document.querySelector('#box31');
let box32 = document.querySelector('#box32');
let box33 = document.querySelector('#box33');
let box34 = document.querySelector('#box34');
let box35 = document.querySelector('#box35');
let box36 = document.querySelector('#box36');
let box37 = document.querySelector('#box37');
let box38 = document.querySelector('#box38');
let box39 = document.querySelector('#box39');
let box40 = document.querySelector('#box40');

let box41 = document.querySelector('#box41');
let box42 = document.querySelector('#box42');
let box43 = document.querySelector('#box43');
let box44 = document.querySelector('#box44');
let box45 = document.querySelector('#box45');
let box46 = document.querySelector('#box46');
let box47 = document.querySelector('#box47');
let box48 = document.querySelector('#box48');
let box49 = document.querySelector('#box49');
let box50 = document.querySelector('#box50');

const boxes = [box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,box21,box22,box23,box24,box25,box26,box27,box28,box29,box30,box31,box32,box33,box34,box35,box36,box37,box38,box39,box40,box41,box42,box43,box44,box45,box46,box47,box48,box49,box50];

function randomizeBoxes(ev){
    boxes.forEach(element =>{
        element.style.top = `${Math.random()*100}vh`;
        element.style.left = `${Math.random()*100}vw`;
    });
}
randomizeBoxes();