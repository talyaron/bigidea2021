//array and object (array is a subclass of ojects in js)

/*
const a = [1, 'b', 2, 15 , 5, 11];

a.forEach(function(element){
    console.log(element);
})

let lessThan2 = a.filter(function(element) {return element<6})
console.log(lessThan2);

//position in an array
console.log(a[3]);
*/

function factorialize(n) {
    let final= 1;
    while(n > 1) {
        final = final * n;
        n--;
    }
    console.log(final);
}

const b = [5, 3, 8, 9, 7];
b.forEach(function(element) {
    return factorialize(element);
})

let x = {genre:'strategy', timePlayed:50};
let videoGamesList = [
    {genre:'strategy', timePlayed:50},
    {genre:'fighting', timePlayed:18},
    {genre:'strategy', timePlayed:22},
    {genre:'strategy', timePlayed:44},
    {genre:'fighting', timePlayed:36}]
];

console.log(videoGamesList[2].timePlayed);