//functions
function gameLikelihood(genre, gamesList) {
    let sumTime = 0; //total time of all genres played
    let genreTime = 0; //total time played of specified genre
    let percentChance = 0; //calculated percentage of genreTime vs. sumTime
    
    //traverses gamesList and adds all game time to sumTime
    for (i = 0; i < gamesList.length; i++) {
        sumTime += gamesList[i].timePlayed;
    }

    //traverses gamesList and checks for each instance of selected genre, and adds to genreTime
    for (i = 0; i < gamesList.length; i++) {
        if (gamesList[i].genre == genre)
            genreTime += gamesList[i].timePlayed;
    }

    //calculates the percentage of playtime of the selected genre compared to the total time played
    percentChance = 100 * (genreTime / sumTime);

    return (percentChance.toFixed(2));

}


//variables 
const videoGamesList = [
    {genre: 'strategy', timePlayed: 50},
    {genre: 'fighting', timePlayed: 25},
    {genre: 'multiplayer', timePlayed: 20},
    {genre: 'puzzle', timePlayed: 10},
    {genre: 'running', timePlayed: 25}
]



//run

console.log(gameLikelihood('fighting', videoGamesList) + "% chance of playing this genre");
