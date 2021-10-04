//create an interest calculator (5% yearly interest rate after ten years after being given $100)
function findInterestRate(startMoney, years, rate){
    let sum;
    sum= startMoney + startMoney*((rate*.01)*years);
    return sum;
}

console.log(findInterestRate(700,9,12))
