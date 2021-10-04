let x = 2;
let z = 2;

console.log(x == 2);

let y = "2";


console.log(x == y);//Old javascript recognized these as equal
console.log(x === y);//Better to use 3 based on Tal Reccomendation, since it can tell differences in var types

for(let i = 0; i < 10; i++){
    console.log(i)
}


let f = 0;
while (f < 10){
    console.log(f);
    i = i + 1;
}

let n = 10;
let final = 1;
while (n > 0){
    final = n * final;
    n = n - 1;
    console.log(final);
}
console.log(final);




function multiply(a, b){
    return a * b;
}

console.log(multiply(5, 2));


function sayHello(name){
    console.log(`Hello there ${name}`);
}

sayHello("Samuel");
sayHello("Jose");


function factorial(n){
    let m = 1;
    while(n > 1){
        m = m * n;
        n = n - 1;
    }
    console.log(m);
}


const abba = [1, 'b', 1, 5];

abba.forEach(
    function(element){
        console.log(element);
    }
)

let lessThan2 = abba.filter(function(element) {return element<4});

console.log(lessThan2);
console.log(a[3]);


let arrayFactorized = [5, 3, 6, 8, 1, 12];

arrayFactorized.forEach(function(element){
    factorial(element);
})