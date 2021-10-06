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
divisionChange=(strategyTime+fightingTime)/5
//strategy
function percentLike(x){
    let output="a"
    if (x<=divisionChange&&x>=0){
        output="20% like"
    }
    else if (x<=2*divisionChange&&x>divisionChange){
        output="40% like"
    }
    else if (x<=3*divisionChange&&x>2*divisionChange){
        output="60% like"
    }
    else if (x<=4*divisionChange&&x>3*divisionChange){
        output="80% like"
    }
    else if (x<=5*divisionChange&&x>4*divisionChange){
        output="100% like"
    }
    return output
}


console.log("strategy like % =",percentLike(strategyTime))
console.log("fighting like % =",percentLike(fightingTime))
