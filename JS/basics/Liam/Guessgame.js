let x = { genre: 'strategy', timeplayed: 50 }
let videogameli = [
    { genre: 'strategy', timeplayed: 50 },
    { genre: 'fighting', timeplayed: 23 },
    { genre: 'fighting', timeplayed: 54 },
    { genre: 'strategy', timeplayed: 43 },
    { genre: 'fighting', timeplayed: 70 },
    { genre: 'strategy', timeplayed: 65 }
]
let fight = 0
let strat = 0
console.log(videogameli[2].timeplayed)
if (videogameli[0].timeplayed > videogameli[1].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[0].timeplayed > videogameli[2].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[0].timeplayed > videogameli[4].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[3].timeplayed > videogameli[1].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[3].timeplayed > videogameli[2].timeplayed) {
    strat++;

}
else {
    fight++;
}
if (videogameli[3].timeplayed > videogameli[4].timeplayed) {
    strat++;

}
else {
    fight++;
}
if (videogameli[5].timeplayed > videogameli[1].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[5].timeplayed > videogameli[2].timeplayed) {
    strat++;

}
else {
    fight++
}
if (videogameli[5].timeplayed > videogameli[4].timeplayed) {
    strat++;

}
else {
    fight++
}
if (strat > fight) {
    console.log("Player likes stratagy games");
    console.log(strat, ">", fight);
}
else {
    console.log("Player likes fighting games");
    console.log(fight, ">", strat);
}