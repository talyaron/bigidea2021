function spinTheWheel(minRotate, maxRotate) {
    //return deg of spinning + rounds 
    const numberOfRotationsInDeg = minRotate * 360 + (maxRotate - minRotate) * (Math.random() * 360);

    const finalDiffernce = numberOfRotationsInDeg % 360;
    let number = (finalDiffernce / 60) + 1;
    if (number > 6) number = 1;
    console.log(Math.ceil(number))

    return -1* numberOfRotationsInDeg;

}

// for(let i = 0; i <50;i++){
//     console.log((spinTheWheel(4, 6)>=1440 && spinTheWheel(4,6)<=2160)); //=1440- 1960
// }

    const wheel = document.getElementById('wheel');
    const rotation = spinTheWheel(40, 60)
    wheel.style.transform = `rotate(${rotation}deg)`;

