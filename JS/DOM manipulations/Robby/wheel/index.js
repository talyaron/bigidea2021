function spinTheWheel(minRotate, maxRotate){
    const numberOfRotationsInDeg = minRotate*360 + (maxRotate-minRotate)*(Math.random()*360);
    const finalDifference = numberOfRotationsInDeg%360;
    let number= (finalDifference/60)+1 ;
    if(number>6) number= 1;
    const finalNum= Math.ceil(number)
    console.log(finalNum);
    return {numberOfRotationsInDeg: -1*numberOfRotationsInDeg,
        number: number}
    
    
}

function getSpinNum(number){
    alert(`You got ${number}`)
}
// for(let i =0; i<20; i++){
//     console.log((spinTheWheel(4,6)>= 1440 && spinTheWheel(4,6) <=2160));
// }
setTimeout(() =>{
const wheel= document.getElementById('wheel');
const rotation= spinTheWheel(4,6);
wheel.style.transform= `rotate(${rotation.numberOfRotationsInDeg}deg)`;
wheel.onanimationend=getSpinNum(rotation.number);
}, 2000)
