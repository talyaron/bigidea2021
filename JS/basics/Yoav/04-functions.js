//functions

//function is a segment of the code that do some calculations or some "job"

//declare function

function multiply(a, b){
    return (a*b);
}

console.log(multiply(2,5));

function sayHello(name){
    console.log(`Hello, ${name}`);
}

function factorial(n) {
    let final = 1; 
    for (i = n; i > 0; i--) {
        final = i*final;
    }
    return(final);
}

sayHello("Samuel");
sayHello("Eitan");

console.log(factorial(5));