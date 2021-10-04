function Interest(base, rate, time){
    let total = 0;
    for( let t = 1; t<=time; t++){
        total = (total + base) * (1 + rate);


    }
    return total;
}
console.log(Interest(450, .15, 25))