//let x = {genre:`Strategy`, timePlayed:50};
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

let numLogs = gameplayLogs.length;
let totalTimeAllGames = 0;


gameplayLogs.forEach(function(element){
    totalTimeAllGames = totalTimeAllGames + element[1];
});

gameplayLogs.forEach(function(element){
    //if element[0] exists in totalGameplayStats[0], then access the instance and add element[1] to totalGameplaystats[x][1]
    //  Also, add +1 to the numLogs
    //if not
});

let totalGameplayStats = [
    {genre:`Space`, totalTime:64, numLogs:3, proportionPlayed: 1},
]

let currentGenre;
let totalGenreTime;
