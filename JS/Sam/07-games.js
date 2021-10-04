let x = {genre:'strategy', timePlayed:50};
let videoGameList = [
    {genre:'strategy', timePlayed:50},
    {genre:'fighting', timePlayed:23},
    {genre:'strategy', timePlayed:53},
    {genre:'strategy', timePlayed:36},
    {genre:'fighting', timePlayed:201},
    {genre:'strategy', timePlayed:90},
    {genre:'strategy', timePlayed:200}

]
console.log(Math.max.apply(Math,videoGameList.map(function (o){return o.timePlayed;})));
