// function multiply(a, b){
//     return a * b;


// }
// console.log(multiply(2,5));




// function sayHi(name){

//     console.log(`hello ${name}`);
// }

// sayHi("beki kisha")


// function factorial(n){
//     let final = 1;
//     while(n > 1){
//     final =  final * n;
//     n--;
       
//     }

// return(final)
// }

// console.log(factorial(5))




// // functions USE THIS 

// const add = (a, b) =>{
//     return a + b;
// }

// //call back 

// let arr = [1, 2, 3, 4, 5, 'poop'];
// arr.forEach((element)=>{
//     console.log(add(2, element))
// })

let arr = ['max', "becki", "dan"]

const cb = hello =>{
    console.log('hello', hello, 'how are you?')
}

arr.forEach(cb)