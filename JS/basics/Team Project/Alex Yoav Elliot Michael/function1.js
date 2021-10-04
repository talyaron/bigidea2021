
//functions
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

    return (percentChance.toFixed(2));

}


//variables 
const videoGamesList = [
    {genre: 'strategy', timePlayed: 50},
    {genre: 'fighting', timePlayed: 25},
    {genre: 'multiplayer', timePlayed: 20},
    {genre: 'puzzle', timePlayed: 10},
    {genre: 'multiplayer', timePlayed: 25}
]



//run

console.log(gameLikelihood('fighting', videoGamesList) + "% chance of playing this genre");


