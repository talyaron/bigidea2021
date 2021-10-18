//array and object (array are sub class of objects in js)

/*const a = [1, 'b', 1, "ddd", 3.678, 0, 5];

a.forEach(function(element){
    console.log(element)
})

let lessThan2 = a.filter(function(element) {return element <4})

console.log(lessThan2);

//position in an array
// a - [1,2,3,4,5]
// [0,1,2,3,4,5]

console.log(a[3]);*/

function factorial (n){
    let final = 1;
    while(n>1){
        final = final*n;
        n--;
    }
    return(final)
}

const a = [1, 'b', 1, "ddd", 3.678, 0, 5];

a.forEach(function(element) {
    console.log(factorial(element));
})

//Objects

let x = {genre:'strategy', timePlayed:50};
let videoGameList = [
    {genre:'strategy', timePlayed:50},
    {genre:'fighting', timePlayed:23},
    {genre:'strategy', timePlayed:53}

]
console.log(videoGameList[2].timeplayed)