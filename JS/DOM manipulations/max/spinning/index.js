function spinTheWheel(minRotate, maxRotate) { 
    const numberOfRotationsInDeg = minRotate * 360 + (maxRotate - minRotate) * (Math.random() * 360);

    const finalDiffernce = numberOfRotationsInDeg % 360;
    let number = (finalDiffernce / 60) + 1;
    if(number>6) number =1;
    console.log(Math.ceil(number))

    return numberOfRotationsInDeg;
    alert(`Your Number is ${number}`)

}
const wheel = document.getElementById('wheel');
const rotation = spinTheWheel(4, 6)
wheel.style.transform = `rotate(${-rotation}deg)`;

