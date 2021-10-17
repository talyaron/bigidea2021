function spinTheWheel(minRotate, maxRotate){
    const numOfRotations = minRotate*360 + (maxRotate-minRotate)*360*Math.random();
    //return degrees
    
    const finalDifference = numOfRotations % 360;
    let number = (finalDifference / 60) + 1;
    if (number > 6) number = 1;
    console.log(Math.ceil(number));

    return {
        rotate: -1 * numOfRotations,
        result: Math.ceil(number)
    }

}

/*
for(let i = 0; 1 < 500; i++){
    console.log((spinTheWheel(4,6) >= 1440) && (spinTheWheel(4,6) <= 2160)); //Between 1440 and 1960
}*/

const wheel = document.getElementById('wheel');
wheel.addEventListener('transitioned', ev => {
    alert(`The result is ${ev.target.dataset.result}`);
})
const rotation = spinTheWheel(4,6);
wheel.style.transform = `rotate(${rotation.rotate}deg)`;
wheel.dataset.result = rotation.result;