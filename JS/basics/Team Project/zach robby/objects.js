let x = { genre: "strategy", timePlayed: 50 }
console.log(x.genre, x.timePlayed)
let videoGamesList = [
    { genre : "strategy", timePlayed: 10 },
    { genre : "fighting", timePlayed: 22 },
    { genre : "fighting", timePlayed: 64 },
    { genre : "strategy", timePlayed: 30 },
    { genre : "fighting", timePlayed: 12 }
]
console.log(videoGamesList[3].timePlayed)


let totals = [{ strategy: 0, fighting: 0 }]
for (let a = 0; a < videoGamesList.length; a++) {
    if (videoGamesList[a].genre == "strategy") {
        totals[0].strategy += videoGamesList[a].timePlayed
    }
    else if (videoGamesList[a].genre == "fighting") {
        totals[0].fighting += videoGamesList[a].timePlayed
    }
}
console.log(totals)
strategyTime=totals[0].strategy
fightingTime=totals[0].fighting
//strategy
function percentLike(Time){
    let output="a"
    if (Time<=30&&Time>=0){
        output="20% like"
    }
    else if (Time<=60&&Time>30){
        output="40% like"
    }
    else if (Time<=90&&Time>60){
        output="60% like"
    }
    else if (Time<=120&&Time>90){
        output="80% like"
    }
    else if (Time<=100000000&&Time>120){
        output="100% like"
    }
    return output
}


console.log("strategy like % =",percentLike(strategyTime))
console.log("fighting like % =",percentLike(fightingTime))

totalBoth=StrategyTime+fightingTime
