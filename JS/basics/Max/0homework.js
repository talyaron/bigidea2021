// function intrist(initialAmaount, IntrestRate, timeInYears){
        
//         let r = IntrestRate + 1;
//         let rt = r ** timeInYears;
//         let t = rt * initialAmaount
//         let total = t.toFixed(2);

//         return total
// }

// console.log(intrist(100, .02, 50))


function Interest(initialAmaount, IntrestRate, timeInYears){
    let total = 0;
    for( let t = 1; t<=timeInYears; t++){
        total = (total + initialAmaount) * (1 + IntrestRate);


    }
    return total;
}
console.log(Interest(100, .02, 50))