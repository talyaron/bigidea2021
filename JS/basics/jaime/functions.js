function multiply(a, b) {
    return a * b;
}

console.log(multiply(2,5));

function sayHello(name){
console.log(`Hello ${name}`);
}

sayHello("Jaime");
sayHello("to my little friend");

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