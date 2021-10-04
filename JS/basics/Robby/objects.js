//array and object (array are sub class of objects in js)

const a = [1, 'b',1,5];

a.forEach(function(element){
    console.log(element)
})

let lessThan2 = a.filter(function(element) {return element<2})

console.log(lessThan2);

//position in array
 // a - [1,2,3,4,5]
 // [0,1,2,3,4]

 console.log(a[3]);
 
 function factorial(c){
    let final= 1;
    while(c>1){
   final = final*c;
   c--;
    }
    console.log(final);

    
}

const b = [1,2,3,4,5,6];

b.forEach(function(element){ 
    return factorial(element);
})

//objects

let x = {genre:'Strategy', timePlayed:50};

let videoGameList = [
    {genre:'Strategy', timePlayed:50},
    {genre:'fighting', timePlayed:23},
    {genre:'Strategy', timePlayed:53}

]

console.log(videoGameList[2].timePlayed)