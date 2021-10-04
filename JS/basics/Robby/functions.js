//functions

//function is a segment of code that does some calculations or some "job"

//declare function

function multiply(a,b){
    return a*b;
}

console.log(multiply(2,5))


//declaration
function sayHello(name){
    console.log(`Hello ${name}`);
}

//invocation
sayHello("Samuel");
sayHello("Eitan");

function factorial(a){
    let final= 1;
    while(a>1){
   final = final*a;
   a--;
    }
    return(final);

    
}
console.log(factorial(5));

