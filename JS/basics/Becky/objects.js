const a = [1,'b', 1, 5];

a.forEach(function(element){
    console.log(element);
})

let lessThan2 = a.filter(function(element){
    return element<2
})
console.log(lessThan2);

function Factorial(n){
    let Final = 1;
    while(n>1){
        final = final*n;
        n--;
    }
    return
}

const b =[1,2,3,4,5,6]
b.forEach(function(element){
    console.log(Factorial(element));
})