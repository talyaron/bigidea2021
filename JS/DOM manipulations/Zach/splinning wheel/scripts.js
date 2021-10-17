function spinTheWheel (minRotate,maxRotate){
    const numberOfRotationsInDegrees = minRotate*360 + (maxRotate-minRotate)*Math.random()*360;
    return numberOfRotationsInDegrees;
}
// for (let i=0;i<10;i++){
//     console.log(spinTheWheel(4,6)>=1440 && spinTheWheel(4,6)<=2160); //=144-2160
// }
const wheel = document.getElementById('wheel');
const rotation=spinTheWheel(1000,1050);
wheel.style.transform=`rotate(${rotation}deg)`;