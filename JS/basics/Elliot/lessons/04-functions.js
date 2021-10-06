//functions

//function is a segment of the code that do some 
//calculations or sone "job";

//declare function
//Can delare anywhere in the code and the function can still be used
//by lines ahead of it.
function multiply(a, b){
    return a * b;
}

console.log(multiply(2,5));

//decleration
function sayHello(name){
    console.log(`Hello ${name}`);
}

//invocation
sayHello("Samuel");
sayHello("Eitan");


//functions, using => has same basic use 
//as declaing a normal method. Main difference is that
// => requires the declaration of the function to be ahead in the code
//before it can be called.
const add = (a, b) => {
    return a + b;
}


let arr = [1,2,4,9,2,4,8,3,2,'b'];

arr.forEach((element)=>{
    console.log(add(2, element));
})
//Note that putting in 'b' resulted in the value 2b being returned


//Now testing callback
//When arr.forEach(cb) is called, with the function cb defined
//after the usage, it will return an error. 

/*arr.forEach(cb);

//Note, with one element, parentheses do not have to be included
let cb = element => {
    console.log(add(2, element));
}*/

let nameArray = ["Jim", "Bob", "Alex", "Jack", "Ryan"];

nameArray.forEach((element) => {
    console.log("Hello there, " + element);
})