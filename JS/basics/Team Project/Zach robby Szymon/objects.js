let x = { genre: "strategy", timePlayed: 50 }
console.log(x.genre, x.timePlayed)
let videoGamesList = [
    { genre : "strategy", timePlayed: 24 },
    { genre : "fighting", timePlayed: 76 },
    { genre : "fighting", timePlayed: 64 },
    { genre : "strategy", timePlayed: 130 },
    { genre : "fighting", timePlayed: 12 }
]
console.log(videoGamesList[3].timePlayed)

debugger;

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