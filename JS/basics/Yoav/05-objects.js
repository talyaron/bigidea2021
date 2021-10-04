//array and object (array are sub class of objects in js)

//functions:
function factorial(n) {
    let final = 1; 
    for (i = n; i > 0; i--) {
        final = i*final;
    }
    return(final);
}


function gameLikelihood(genre, gamesList) {
    let sumTime = 0;
    let genreTime = 0;
    let percentChance = 0; 
    for (i = 0; i < gamesList.length; i++) {
        sumTime += gamesList[i].timePlayed;
    }

    //console.log(sumTime);

    for (i = 0; i < gamesList.length; i++) {
        if (gamesList[i].genre == genre)
            genreTime += gamesList[i].timePlayed;
    }

    //console.log(genreTime);

    percentChance = 100 * (genreTime / sumTime);

    return (percentChance)

}


//array
const a = [1, 2, 3, 4, 5, 6];


//code
a.forEach(function(element) {
    console.log(factorial(element));
})


//Objects



const videoGamesList = [
    {genre: 'strategy', timePlayed: 50},
    {genre: 'fighting', timePlayed: 25},
    {genre: 'multiplayer', timePlayed: 20},
    {genre: 'puzzle', timePlayed: 10},
    {genre: 'multiplayer', timePlayed: 25}
]


console.log(gameLikelihood('strategy', videoGamesList) + "% chance of playing this genre");







