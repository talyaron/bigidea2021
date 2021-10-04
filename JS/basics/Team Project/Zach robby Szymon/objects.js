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
function percentLike(x){
    let output="a"
    if (x<=30&&x>=0){
        output="20% like"
    }
    else if (x<=60&&x>30){
        output="40% like"
    }
    else if (x<=90&&x>60){
        output="60% like"
    }
    else if (x<=120&&x>90){
        output="80% like"
    }
    else if (x<=150&&x>120){
        output="100% like"
    }
    return output
}


console.log("strategy like % =",percentLike(strategyTime))
console.log("fighting like % =",percentLike(fightingTime))
