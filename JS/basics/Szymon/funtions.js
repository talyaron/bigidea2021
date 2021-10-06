function multiply(a, b){
    return a*b;
}
console.log(multiply(2,5));

function sayHello(name){
    console.log(`Hello ${name}`)
}
sayHello("Samuel")

function factorial(n){
   let final=1
    while(n>1){
        final=final*n;
        n--
    }
    return(final)
}
console.log(factorial(5,1))

const add = (a, b) =>{
    return a+b
}

let arr= [1,2,3,4,5,6,7,8, `b`]

arr.forEach((element)=>{
    console.log(add(2, element))
})

const cb=((element)=>{
    console.log(add(2, element))
})

arr.forEach(cb)

let namelist=['Jonothan','John','George','Hugh','Tony']

const names=(element)=>{
    console.log(add(`Hello ${element}`))
}
namelist.forEach(names)