//array and object (array are sub class of objects in js)

const a = [1,'b',1,2,3,5,0]

a.forEach(function(element){
    console.log(element);
})

let lessThan2 = a.filter(function(element){
    return element<4;
})

console.log(a[3]);

console.log(lessThan2);


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

const b = [1,2,3,4,5,6];

b.forEach(function(element){
    console.log(factorial(element));
})