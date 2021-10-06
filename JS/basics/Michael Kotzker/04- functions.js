//functions

//function is a segment of the code that do some calculations or sone "job";

//declare function

function multiply(a, b){
    return a * b;
}

console.log(multiply(2,5));

//declaration
function sayHello(name){
    console.log(`Hello ${name}`);
}

//invocation
sayHello("Samuel");
sayHello("Eitan");

//callback
let names = ['Michael', 'Simon', 'Elliot', 'Liam', 'Zach', 'Jaime']

const shuffled = names.sort((a, b) => 0.5 - Math.random());
let length=names.length-1;

for (let i=0; i<=length/2;i++){
    console.log(shuffled[i])
}