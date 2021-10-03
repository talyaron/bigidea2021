//function
function interestRate(p, r, t) {
    let finalRate = 0;
    finalRate = p * (1+r*t);
    return (finalRate);
}

console.log(interestRate(100, .05, 10));