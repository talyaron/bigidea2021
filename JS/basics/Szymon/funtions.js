function multiply(a, b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Samuel")

function factorial(n){
   let final=1
    while(n>1){
        final=final*n;
        n--
    }
    return(final)
}
console.log(factorial(5,1))