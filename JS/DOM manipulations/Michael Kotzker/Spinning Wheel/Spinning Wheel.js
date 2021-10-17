function SpintheWheel(minRotate, maxRotate){
    //return degree of spinning + rounds
    const numberofRotationsindeg = minRotate*360 + (maxRotate-minRotate)*(Math.random()*360);
    return numberofRotationsindeg;
}

for(let i = 0; i < 500; i++){
    console.log((SpintheWheel(4, 6) >=1440 && SpintheWheel(4,6)<=2160)); //= 1440 - 1960
}