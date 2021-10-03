function multiply(a,b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello("Becky")

function Factorial(n,final){
    while(n>1){
        final = final*n;
        n--;
    }
    console.log(final)
}

Factorial(5,1)
