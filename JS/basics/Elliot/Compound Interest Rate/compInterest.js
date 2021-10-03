

function compoundInterest(initial, rate, years, perYear){
    let final = initial;
    let variableMultiplier = 1 + (rate/perYear);
    let exponVal = perYear * years;
    final = final * (variableMultiplier ^ exponVal);
    return final;
}

console.log(`Your compound Interest Value is ${compoundInterest(100, 0.05, 2, 1)}`);