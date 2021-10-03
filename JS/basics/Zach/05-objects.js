// array and objects (arrays are sub classes of objects)

const a = [1, 'b',3,57]
a.forEach(function(element){
    console.log(element)
})

let lessthan2=a.filter(function(element){
    return element<4
})

console.log(lessthan2);

console.log(a[3]);

const t=[23,11,8,9,17,22]

function factorial(d){
    let fact=1
    while(fact>1){
        d=d*fact
        fact--;
    }
        return(d)
}
let f=0
for (let i=t[f];f<=5;f++){
    console.log(factorial(i))
}
