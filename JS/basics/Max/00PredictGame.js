let videoGameList = [
    {Genre:'stratagy', TimePlayed:'94'},
    {Genre:'fighting', TimePlayed:'384'},
    {Genre:'stratagy', TimePlayed:'27'},
    {Genre:'fighting', TimePlayed:'25'},
    {Genre:'stratagy', TimePlayed:'600'}

];

let strategyPoints = 0;
let fightingPoints = 0;


function GamePredict (videoGameList){
    for (let x=0; x>videoGameList.length; x++){
        if (TimePlayed <= 50 && videoGameList[x].Genre === 'strategy' || TimePlayed >= 50 && videoGameList[x].Genre === 'fighting'){
        fightingPoints++;
        }
        else {strategyPoints++};
        if (strategyPoints > fightingPoints){
            return "Strategy Game Preffered";
        }
        else{ 
            if( fightingPoints > strategyPoints){
            return "Fighting Game Preffered";
            }
            else{
                return "Tie";
            }

        }

    }
}

console.log(GamePredict(videoGameList))


