function compoundInterest(initialAmount,timeInYears,intrestRate){
    return (initialAmount * (Math.pow((1 + intrestRate / 100), timeInYears)).toFixed(4));
   }
   
console.log(compoundInterest(100, 50, 5));