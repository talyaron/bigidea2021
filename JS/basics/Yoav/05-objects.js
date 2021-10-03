//array and object (array are sub class of objects in js)

//functions:
function factorial(n) {
    let final = 1; 
    for (i = n; i > 0; i--) {
        final = i*final;
    }
    return(final);
}



//array
const a = [1, 6, 4, 3.45556, 0, 5];


//code
a.forEach(function(element) {
    console.log(factorial(element));
})
