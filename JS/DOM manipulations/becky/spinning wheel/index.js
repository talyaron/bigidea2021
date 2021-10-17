function spinTheWheel(minRotate, maxRotate){
    //return deg of spinning + rounds
    const numberOfRotationsInDeg = minRotate * 360 + (maxRotate-minRotate)*(Math.random()*360);
    return numberOfRotationsInDeg

}
for(let i=0; i<20; i++){
    console.log((spinTheWheel(4,6)>= 1440 && spinTheWheel(4,6) <= 2160)); 
}
const wheel = document.getElementById('wheel');
const rotation = spinTheWheel(4,6);
wheel.style.transform = `rotate(${rotation}deg)`;