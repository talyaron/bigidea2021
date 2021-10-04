let x={genre:`strategy`,timePlayed:50}
let videoGameList=[
    {genre:`strategy`,timePlayed:50},
    {genre:`fighting`,timePlayed:23},
    {genre:`strategy`,timePlayed:53},
    {genre:`strategy`,timePlayed:53},
    {genre:`strategy`,timePlayed:53}]

let total=[{strategy:0, fighting:0}]
for(let x; x<=videoGameList.length; x++){
{
    if(videoGameList[x].genre==`strategy`)
    {
        total[0].strategy+=videoGameList[x].timePlayed;
    }
    else{
        total[1].fighting+=videoGameList[x].timePlayed;
    }
}

}
console.log(total)

for(let x; x<=videoGameList.length; x++){
    if(videoGameList.strategy<=[0]){
        
    }
}