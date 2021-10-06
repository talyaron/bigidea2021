

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

const add = (a,b) => {
    return a+b;
}

let arr = [1,2,3,4,5,6,7,8,'b'];


const cb = element =>{
    console.log(add(2,element));
}
arr.forEach(cb)



console.log(factorial(5));
console.log(factorial(10));

console.log(multiply(2,5));
sayHello("Alex");

let names = ['Alex', 'Becky', 'Max', 'Yoav', 'Zach','Michael',"Robby","Liam","Billy","Charlie"]

const hello = element =>{
    console.log(add('Hello ',element))
}

names.forEach(hello);

let ans =[];

const randomHalf = element =>{
    if(ans.length == (names.length/2)){

    }else{
        rand = Math.random(0,1)
        if(rand <= .5){
            ans.push(element)
        }
    }
}



names.forEach(randomHalf);


console.log(ans);

