const gameLogs = [
    { genre: 'strategy', timePlayed: 30 },
    { genre: 'strategy', timePlayed: 12 },
    { genre: 'fight', timePlayed: 45 }
]

function getGenresProbability(gameLogs) {



    //sum the different genres;

    //use an array of genres


    const genres = [
        //  { type: 'strategy', totalTimePlayed: 30 },
    ];



    gameLogs.forEach((game) => {

        //if new genre then add new genre to array;
        let index = genres.findIndex(genre => genre.type === game.genre);

        if (index !== -1) {
            genres[index].totalTimePlayed += game.timePlayed;
        } else {
            genres.push({ type: game.genre, totalTimePlayed: game.timePlayed })
        }


    })

    console.log(genres)

    //divide by total
    let totalTime = 0;
    genres.forEach(genre => {
        totalTime += genre.totalTimePlayed
    });
    debugger;

    genres.map((genre, i) => {
        genres[i].percentage = genre.totalTimePlayed/totalTime;
    })

    console.log(genres)



    // return all genres;
};

getGenresProbability(gameLogs)