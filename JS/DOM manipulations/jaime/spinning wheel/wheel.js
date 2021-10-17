function spinTheWheel(minRotate, maxRotate){
//return deg of spin + rounds
const numberOfRotationsInDeg = minRotate*360 + (maxRotate-minRotate)*(Math.random()*360);

const finalDifference = numberOfRotationsInDeg % 360;
let number = (finalDifference/60) + 1;
if(number>6) number =1;
console.log(Math.ceil(number));

return -1* numberOfRotationsInDeg;
return number;
}

function getSpinNum(number){
    alert(`You spun an ${number}`)
}


setTimeout(() => {
    const wheel = document.getElementById('wheel');
    const rotation = spinTheWheel(40,60);
    wheel.style.transform = `rotate(${-rotation}deg)`;
    wheel.onanimationend = getSpinNum(number);
}, 2000)