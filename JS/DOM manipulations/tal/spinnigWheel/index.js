function spinTheWheel(minRotate, maxRotate) {

    const numberOfRotationsInDeg = minRotate * 360 + (maxRotate - minRotate) * (Math.random() * 360);

    const finalDiffernce = numberOfRotationsInDeg % 360;
    let number = (finalDiffernce / 60) + 1;
    if (number > 6) number = 1;
    console.log(Math.ceil(number))

    return {
        rotate: -1 * numberOfRotationsInDeg,
        result: Math.ceil(number)
    }

}

// for(let i = 0; i <50;i++){
//     console.log((spinTheWheel(4, 6)>=1440 && spinTheWheel(4,6)<=2160)); //=1440- 1960
// }


const wheel = document.getElementById('wheel');
wheel.addEventListener('transitionend', ev => {
  
    alert(`The result is ${ev.target.dataset.result}`);
})
const rotation = spinTheWheel(4, 6);
wheel.style.transform = `rotate(${rotation.rotate}deg)`;
wheel.dataset.result = rotation.result;

