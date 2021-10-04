

function multiply(num1,num2){
    return num1*num2;
}

function sayHello(name){
    console.log("Hello " + name);
            //`Hello ${name}`  also works - must use "`" via tilda key
}

function factorial(num){
        var result = num;
    if (num === 0 || num === 1) 
        return 1; 
    while (num > 1) { 
        num--;
        result *= num;
    }
    return result;
}





console.log(factorial(5));
console.log(factorial(10));

console.log(multiply(2,5));
sayHello("Alex");





