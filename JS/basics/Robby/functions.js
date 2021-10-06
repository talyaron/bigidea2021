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



// functions

const add = (a,b) => {
 return a+b;
}

let arr= [1,2,3,4,5,6,7,8,'b'];

arr.forEach((element)=>{
    console.log(add(2, element));
})

let cb = (element) =>{
    console.log(add(2, element));
}


//callback
arr.forEach(cb);


let arr2= ["Robby", "Elliot", "Jaime", "Alex", "Zach", "Eytan", "Szymon", "Liam", "Michael", "Becky", "Max", "Sam", "Yoav"];

const de= (element) =>{
    console.log(`Hello ${element}`)
}

arr2.forEach(de);

let arr3= [];
let counter=0;
const ef = (element) => {
    if(Math.random()<=.5 && counter<7){
        arr3.push(element)
        counter++;
        
    }

    
}

arr2.forEach(ef);
console.log(arr3)