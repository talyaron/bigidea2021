function multiply(a,b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello("Becky")

<<<<<<< Updated upstream
// function Factorial(n,final){
//     while(n>1){
//         final = final*n;
//         n--;
//     }
//     return(final)
// }

function Factorial(n){
    let final = 1;
=======
function Factorial(n){
    let Final = 1;
>>>>>>> Stashed changes
    while(n>1){
        final = final*n;
        n--;
    }
<<<<<<< Updated upstream
    return(final)
=======
    return
>>>>>>> Stashed changes
}

console.log(Factorial(5))
