
//functions
function gameLikelihood(gamesList) {
    let timeArray = [];
    let percentArray = [];
    let finalArray = [];
    let sumTime = 0;
    let genreTime = 0;
    let percentChance = 0; 


    
    //for loop collects total time 
    for (i = 0; i < gamesList.length; i++) {
        sumTime += gamesList[i].timePlayed;
    }

    

    // for loop creates array for the gamelist time played values
    for (i = 0; i < gamesList.length; i++) {
        genreTime = gamesList[i].timePlayed;
        timeArray.push(genreTime);
        genreTime = 0;
    }

    
    //for loop creates percent chance for each element 
    timeArray.forEach(function(element){
        percentArray.push(100 * (element / sumTime))
        
    })

    
    //Creates final array that combines the name of the genre with the percent chance of playing 
    for (i = 0; i < gamesList.length; i++) {
        finalArray.push(gamesList[i].genre + " " + percentArray[i] + "%");
    }

   

    return (finalArray);

}


//variables 
const videoGamesList = [
    {genre: 'strategy', timePlayed: 50},
    {genre: 'fighting', timePlayed: 25},
    {genre: 'multiplayer', timePlayed: 20},
    {genre: 'puzzle', timePlayed: 10},
    {genre: 'shooting', timePlayed: 25}
]



//run

console.log(gameLikelihood(videoGamesList));



