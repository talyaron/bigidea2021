//functions

//function is a segment of the code that do some calculations or sone "job";

//declare function

function multiply(a, b) {
    return a * b;
}

console.log(multiply(2, 5));

//decleration
function sayHello(name) {
    console.log(`Hello ${name}`);
}

//invocation
sayHello("Samuel");
sayHello("Eitan");

// functions
const add = (a, b) => {
    return a + b;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 'b'];


const cb = element => {
    console.log(add(2, element));
}

//callback
arr.forEach(cb)


