//functions

// functions is a segment of thecode that di some calculations or some "job"

//declared function 

function multiply(a, b){
    return a * b
}

console.log(multiply(2, 5));


//declaration
function sayHello (name){
    console.log(`Hello ${name}`);
}


//invocation
sayHello("Samuel");

function Factorial (n){
    let final = 1;
    while(n>1){
        final = final*n;
        n--;
    }
    return(final)
}

console.log(Factorial(5))



