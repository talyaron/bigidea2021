let videoGameList = [
    {genre:'RPG', timePlayed:50},
    {genre:'fighting', timePlayed:23},
    {genre:'fighting', timePlayed:53},
    {genre:'adventure', timePlayed:36},
    {genre:'strategy', timePlayed:201},
    {genre:'adventure', timePlayed:90},
    {genre:'shooter', timePlayed:200}

]
let maxHours = Math.max.apply(Math,videoGameList.map(function (o){return o.timePlayed;}));

let i=0;
for (i=0; i<videoGameList.length; i++) {
    if(maxHours === videoGameList[i].timePlayed) {
        console.log("You should play a " + videoGameList[i].genre + " game.");
    }
}