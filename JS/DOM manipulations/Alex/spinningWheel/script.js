function spinTheWheel(minRotate, maxRotate) {
    //return deg of spinning + rounds 
    const numberOfRotationsInDeg = minRotate * 360 + (maxRotate - minRotate) * (Math.random() * 360);

    const finalDiffernce = numberOfRotationsInDeg % 360;
    let number = (finalDiffernce / 60) + 1;
    if (number > 6) number = 1;
    console.log(Math.ceil(number))

    let finalReturn = [numberOfRotationsInDeg, number]

    return finalReturn;


}

const wheel = document.getElementById('wheel');
const rotation = spinTheWheel(40, 60)

setTimeout(() => {
    wheel.style.transform = `rotate(${-rotation[0]}deg)`;
}, 250);
setTimeout(() => {
    alert("You rolled a " + Math.ceil(rotation[1]))
}, 4250);



