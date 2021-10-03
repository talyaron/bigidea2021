//array and object (arry are sub class of objects in js)

const a = [1, 'b', 1,"ddd",3.543456,0, 5];

a.forEach(function(element) {
    console.log(element)
})

let lessThan2 = a.filter(function(element) {return element<4})

console.log(lessThan2);

//position in an array
// a - [1,2,3,4,5]
// [0,1,2,3,4]

console.log(a[3]);
