let x = {genre:'Strategy', timePlayed:50};

let videoGameList = [
    {genre:'Strategy', timePlayed:50},
    {genre:'Fighting', timePlayed:23},
    {genre:'Strategy', timePlayed:53},
    {genre:'Strategy', timePlayed:53},
    {genre:'Fighting', timePlayed:52}]


let total= [{strategy: 0, fighting: 0}]
for(let x=0; x< videoGameList.length; x++){
    if(videoGameList[x].genre=="Strategy")
    {
        total[0].strategy+=videoGameList[x].timePlayed;
    }
    else if(videoGameList[x].genre== "Fighting"){
        total[0].fighting+=videoGameList[x].timePlayed;
    }

}

function percentLike(x){
    let output="a"
    if(x<=30&& x>0)
    {
        output="20%";
    }
    else if(x<=60&& x>30)
    {
        output="40%";
    }
    else if(x<=90&& x>60)
    {
        output="60%";
    }
    else if(x<=120&& x>90)
    {
        output="80%";
    }
    else
    {
        output="100%";
    }
    return output;
}

console.log("strategy like % =", percentLike(total.strategy))
console.log("strategy like % =", percentLike(total.strategy))



