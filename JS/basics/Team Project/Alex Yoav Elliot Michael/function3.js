let gameplayLogs = [
    {genre:`Strategy`, timePlayed:45},
    {genre:`Fighting`, timePlayed:21},
    {genre:`Space`, timePlayed:45},
    {genre:`Strategy`, timePlayed:123},
    {genre:`Space`, timePlayed:12},
    {genre:`Space`, timePlayed:7},
    {genre:`Simulation`, timePlayed:32},
    {genre:`Adventure`, timePlayed:12}
]

function findStatsForGenre(currentGenre){
   

    let totalGenreTime = 0, totalTimeAllGames = 0;


    gameplayLogs.forEach(function(element){
        totalTimeAllGames += element.timePlayed;

        if(element.genre == currentGenre){
            totalGenreTime += element.timePlayed;
        }
    });


    return ((totalGenreTime/totalTimeAllGames)*100);
};

console.log(findStatsForGenre('Space'));