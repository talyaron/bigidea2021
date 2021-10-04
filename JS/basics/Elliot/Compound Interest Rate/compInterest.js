

function compoundInterest(initial, rate, years, perYear){
    let final = initial;
    let variableMultiplier = 1 + (rate/perYear);
    let exponVal = perYear * years;
    final = final * (variableMultiplier ^ exponVal);
    return final;
}
console.log(`Your compound Interest Value is ${compoundInterest(100, 0.05, 2, 1)}`);

function compound(initial,Interest,frequency,tim){
    let timeVar=d;
    while(c*timevar>0){
        initial=initial*Interest*(frequency/tim);
        timeVar--;
    }
    return initial;
}
console.log(compound(a,b,c,d));