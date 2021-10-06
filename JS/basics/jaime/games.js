let videoGameList = [
    {genre:'strategy', timePlayed:50},
    {genre:'fighting', timePlayed:23},
    {genre:'fighting', timePlayed:53},
    {genre: 'strategy', timePlayed:36},
    {genre:'strategy', timePlayed:201},
    {genre:'fighting', timePlayed:90},
    {genre:'strategy', timePlayed:200}

]

let totalHoursFighting = 0, totalHoursStrategy = 0, totalHoursAll = 0, maxGame;

let maxHours = Math.max.apply(Math,videoGameList.map(function (o){return o.timePlayed;}));

let i=0;
for (i=0; i<videoGameList.length; i++) {
    if(maxHours === videoGameList[i].timePlayed) {
        console.log("You should play a " + videoGameList[i].genre + " game.");
        maxGame = videoGameList[i].genre;
    }
}

for (i=0; i<videoGameList.length; i++) {
    if(videoGameList[i].genre === 'strategy') {
            totalHoursStrategy += videoGameList[i].timePlayed;
    }
    if(videoGameList[i].genre === 'fighting') {
        totalHoursFighting += videoGameList[i].timePlayed;
    }
        totalHoursAll += videoGameList[i].timePlayed;
    }

let fightingPercent = (totalHoursFighting/totalHoursAll) * 100, strategyPercent = (totalHoursStrategy/totalHoursAll) * 100;

if(maxGame == "strategy") {
    strategyPercent += 8;
    fightingPercent -= 8;
}
    
if(maxGame == "fighting") {
    strategyPercent -= 8;
    fightingPercent += 8;
}

console.log("You are " + strategyPercent.toFixed(1) + "%" + " likely to play a strategy game and " + fightingPercent.toFixed(1) + "% likely to play a fighting game.");