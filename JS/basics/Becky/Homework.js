function Interest(money, rate, t){
    let total = 0;
    for( let x = 1; x<=t; x++){
        total = (total + money) * (1 + rate);


    }
    return total;
}
console.log(Interest(50, .03, 10))