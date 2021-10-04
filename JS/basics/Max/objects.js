// const a = [1, 2 , 'b', 9, 1, 1 , -1];


// a.forEach(function(element){
//     console.log(element)

// })


// let lessThan2 = a.filter(function(element) {return element <2})

// console.log(lessThan2);


// console.log(a[3]);

const list = [1, 2, 3, 4, 5, 6];

function factorial(n){
    let final = 1;
    while(n > 1){
    final =  final * n;
    n--;
       
    }

return(final)
}

list.forEach(function(factorial){
    console.log(factorial(element));
})