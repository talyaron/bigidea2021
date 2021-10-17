function spinTheWheel (minRotate,maxRotate){
    const numberOfRotationsInDegrees = minRotate*360 + (maxRotate-minRotate)*Math.random()*360;
    
    const finalDifference =numberOfRotationsInDegrees%360;
    let number=(finalDifference/60)+1;
    if (number>6) number=1;
    console.log(Math.ceil(number));
    return numberOfRotationsInDegrees;
}
function alertNumber(){
    const finalDifference =numberOfRotationsInDegrees%360;
    let number=(finalDifference/60)+1;
    if (number>6) number=1;
    alert(number)
}
// for (let i=0;i<10;i++){
//     console.log(spinTheWheel(4,6)>=1440 && spinTheWheel(4,6)<=2160); //=144-2160
// }


    const wheel = document.getElementById('wheel');
    wheel.addEventListener("webkitAnimationEnd", alertNumber(spinTheWheel));
    let rotation=spinTheWheel(4,10);
    wheel.style.transform=`rotate(${-rotation}deg)`;
    

