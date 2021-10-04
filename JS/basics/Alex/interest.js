// i = initial
// t = time
// r = rate

function compoundInterest(initialAmount,timeInYears,intrestRate){
 return (initialAmount * (Math.pow((1 + intrestRate / 100), timeInYears)).toFixed(4));
}

console.log(compoundInterest(100,5,10));

console.log(compoundInterest(400000, 17, 6));

