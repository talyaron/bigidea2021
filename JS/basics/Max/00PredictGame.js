let videoGameList = [
    { Genre: 'strategy', TimePlayed: '6' },
    { Genre: 'fighting', TimePlayed: '90' },
    { Genre: 'strategy', TimePlayed: '100' },
    { Genre: 'fighting', TimePlayed: '60' },
    { Genre: 'fighting', TimePlayed: '0' },
    { Genre: 'strategy', TimePlayed: '100' }

];

let strategyPoints = 0;
let fightingPoints = 0;


function GamePredict(videoGameList) {
   
    videoGameList.forEach(function (game) {

        if (game.TimePlayed >= 50 && game.Genre == 'strategy') {
            strategyPoints++;
            console.log('strat');
        }
        else if (game.TimePlayed >= 50 && game.Genre == 'fighting') {
            fightingPoints++;
            console.log('fight');
        }


    })


    if (strategyPoints > fightingPoints) {
        return "Strategy Game Preffered";
    }
    else if (fightingPoints > strategyPoints) {
        return "Fighting Game Preffered";
    }
    else if (fightingPoints === strategyPoints) {
        return "Tie";
    }

}




console.log(GamePredict(videoGameList))


