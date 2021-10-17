let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');

const arr = [b1, b2, b3, b4, b5, b6];

function randomizeLocation(ev){
    arr.forEach(element => {
        element.style.top = `${Math.random()*100}vh`;
        element.style.left = `${Math.random()*100}vw`;
    });
}

function spinTheWheel(minRotate, maxRotate){
    const numOfRotations = minRotate*360 + (maxRotate-minRotate)*360*Math.random();
    //return degrees
    return numOfRotations;

}

for(let i = 0; 1 < 500; i++){
    console.log((spinTheWheel(4,6) >= 1440) && (spinTheWheel(4,6) <= 2160)); //Between 1440 and 1960
}

const wheel = document.getElementById('wheel');
const rotation = spinTheWheel(4,6);
wheel.style.transform = `rotate(${rotation}deg)`;