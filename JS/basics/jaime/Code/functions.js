//unhoisted function
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2,5));

function sayHello(name){
console.log(`Hello ${name}`);
}

sayHello("Jaime");
sayHello("Eitan");

function factorialize(n) {
    let final= 1;
    while(n > 1) {
        final = final * n;
        n--;
    }
    console.log(final);
}

factorialize(5);
factorialize(9);
factorialize(17);

//hoisted function (cannot be initialized after callback)
const add = (a,b) => {
    return a + b;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 'b'];


const cb = element => {
    console.log(add(2, element));
}

//callback
arr.forEach(cb);

let namesList = ['jaime', 'robby', 'elliot', 'eitan', 'zach', 'szymon', 'sam', 'yoav', 'liam', 'alex', 'michael', 'becky', 'max', 'tal'];

const names = (element) => {
    console.log(`Hello ${element}`);
}

namesList.forEach(names);