function SpintheWheel(minRotate, maxRotate){
    //return degree of spinning + rounds
    const numberofRotationsindeg = minRotate*360 + (maxRotate - minRotate)*(Math.random()*360);
    const finalDiffernce = numberofRotationsindeg % 360;
    let number = (finalDiffernce / 60) + 1;
    if (number > 6) number = 1;
    console.log(Math.ceil(number))
    return -1*numberofRotationsindeg;
}

//for(let i = 0; i < 500; i++){
   
//    console.log((SpintheWheel(4, 6) >=1440 && SpintheWheel(4,6)<=2160)); //= 1440 - 1960
//}

setTimeout(() => {
    const wheel = document.getElementById('wheel');
    const rotation = SpintheWheel(4, 6);
    wheel.style.transform = `rotate(${rotation}deg)`;
}, 2000)