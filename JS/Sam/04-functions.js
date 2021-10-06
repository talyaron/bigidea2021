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

// function
/*const add = (a, b) => {
    return a + b;
}

let arr =[1, 2, 3, 4, 5, 6, 7, 8, 'b'];

arr.forEach((element)=>{
    console.log(add(2, element));
})
*/

/*arr.forEach(cb);

let namesList =['sam', 'max', 'elliot', 'simon',]


const names = (element) => {
    console.log(`Hello ${element}`);
}

namesList.forEach(names);
*/

const namesList = ["sam", "yoav", "Tal", "Max", "Becky", "Elliot", "Robby", "Zach", "liam",];
const randomnamesList = namesList[Math.floor(Math.random() * namesList.length)];

console.log(randomnamesList);