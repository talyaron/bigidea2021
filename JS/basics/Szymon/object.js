const a=[1,`b`,1,5];

a.forEach(function(element){
    console.log(element)
})

let lessThan2 = a.filter(function(element) {return(element<4)})

console.log(lessThan2)

console.log(a[7])

function factorial(n){
    let final=1
     while(n>1){
         final=final*n;
         n--
     }
     return(final)
 }

const b=[5,2,3,6,1,4];


let x={genre:`strategy`,timePlayed:50}
let videoGameList=[
    {genre:`strategy`,timePlayed:50},
    {genre:`fighting`,timePlayed:23},
    {genre:`strategy`,timePlayed:53}
]
console.log(videoGameList[2].timePlayed)