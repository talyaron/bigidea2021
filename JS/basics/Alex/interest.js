// i = initial
// t = time
// r = rate

function compInterest(i,t,r){
 return (i * (Math.pow((1 + r / 100), t)).toFixed(4));
}

console.log(compInterest(100,5,10));
