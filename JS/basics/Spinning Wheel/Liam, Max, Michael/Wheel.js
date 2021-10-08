
let namesList = ['Alex', 'Becky', 'Elliot', 'Eytan', 'Jaime', 'Liam', 'Max', 'Michael', 'Robby', 'Szymon', 'Tal', 'Yoav', 'Zach', 'Liam'];


function randomGroups(playersInGroup, arr) {
    let playerPosRandom;
    let finGroups = [];
    let templist = [];
    let Len = arr.length;
    
    for (numofGroups = 0; numofGroups < (Math.ceil(Len / playersInGroup)); numofGroups++){
        for (RealNumInGroup = 0; RealNumInGroup < playersInGroup; RealNumInGroup++){
            if (Len > 0) {
                playerPosRandom = Math.floor((Math.random() * arr.length));
                templist.push(arr[playerPosRandom]);
                arr.splice(playerPosRandom, 1);
            }    
        }
        finGroups.push(templist);
        templist = [];
    }
    return (finGroups);
}

console.log(randomGroups(4, namesList))
