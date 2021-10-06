function multiply(a,b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`hello ${name}`)
}

sayHello("Becky")

// function Factorial(n,final){
//     while(n>1){
//         final = final*n;
//         n--;
//     }
//     return(final)
// }

// function Factorial(n){
//     let Final = 1;
//     while(n>1){
//         final = final*n;
//         n--;
//     }
//     return(final)
// }

// console.log(Factorial(5));

const add = (a, b) => {
return a+b;}

let arr = [1,2,3,4,5,6,7,8,'b'];
arr.forEach((element)=>{
    console.log(add(2,element));
})

let arr2 = ['Hannah', 'Nomi', 'Sivan', 'Alexa', 'Becky'];
const cb = element =>{
    console.log(add('Hello ', element));
}
arr2.forEach(cb);
