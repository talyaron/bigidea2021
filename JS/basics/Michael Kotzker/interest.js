function compoundInterest(initialAmount, timeInYears, interestRate){
    return (initialAmount * (Math.pow((1 + interestRate / 100), timeInYears)).toFixed(4));
}

console.log(compoundInterest(450, 15, 25));