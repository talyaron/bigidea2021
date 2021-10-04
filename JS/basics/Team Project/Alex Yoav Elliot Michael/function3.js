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
    let totalGenreTime = 0;
    let totalTimeAllGames = 0;


    gameplayLogs.forEach(function(element){
        totalTimeAllGames = totalTimeAllGames + element[1];
    });

    gameplayLogs.forEach(function(element){
        if(element[0] == currentGenre){
            totalGenreTime = totalGenreTime + element[1];
        }
    });

    return ((totalGenreTime/totalTimeAllGames)*100);
};

