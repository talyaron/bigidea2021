// function intrist(base, rate, time){
        
//         let r = rate + 1;
//         let rt = r ** time;
//         let t = rt * base
//         let total = t.toFixed(2);

//         return total
// }

// console.log(intrist(100, .02, 50))


function Interest(base, rate, time){
    let total = 0;
    for( let t = 1; t<=time; t++){
        total = (total + base) * (1 + rate);


    }
    return total;
}
console.log(Interest(100, .02, 50))