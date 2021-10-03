let x = 2;
let z = 2;

console.log(x == 2);

let y = "2";


console.log(x == y);//Old javascript recognized these as equal
console.log(x === y);//Better to use 3 based on Tal Reccomendation, since it can tell differences in var types
