function multiply(a,b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello("Becky")

// function Factorial(n,final){
//     while(n>1){
//         final = final*n;
//         n--;
//     }
//     return(final)
// }

function Factorial(n){
    let final = 1;
    while(n>1){
        final = final*n;
        n--;
    }
    return(final)
}

console.log(Factorial(5))
