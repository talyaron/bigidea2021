function spinTheWheel(minRotate, maxRotate){

const numberOfRotationsInDeg = minRotate*360 + (maxRotate-minRotate)*(Math.random()*360);
const finalDifference = numberOfRotationsInDeg % 360;
let number = (finalDifference/60) + 1;

if(number>6) {
    number =1;
}

console.log(Math.ceil(number));

return {
    numberOfRotationsInDeg: -1* numberOfRotationsInDeg,
    number: number
}}

const wheel = document.getElementById('wheel');
wheel.addEventListener('transitionend', ev => {
    alert(`You spun an ${ev.target.dataset.result}.`);
})

const rotation = spinTheWheel(40,60);
wheel.style.transform = `rotate(${rotation.numberOfRotationsInDeg}deg)`;
wheel.dataset.result = rotation.result;