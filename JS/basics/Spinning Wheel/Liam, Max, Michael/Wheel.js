
let namelist = ['Alex', 'Becky', 'Elliot', 'Eytan', 'Jaime', 'Liam', 'Max', 'Michael', 'Robby', 'Szymon', 'Tal', 'Yoav', 'Zach'];
let numPerGroup = 0


const srambleTheTeam = (numPerGroup, namelist) =>{
    let tempArray = [];
    let realGoups = [];
    let numTeams = Math.floor(namelist/numPerGroup);
    
    for (groupSize = 0; groupSize < numPerGroup; groupSize++ ){
        for(num = 0 ; num < numPerGroup; num++){
            if(namelist.length>0){
                let playerPosInlist = Math.floor(Math.random()*namelist.length)
                tempArray.push(namelist[playerPosInlist]);
                namelist.splice(playerPosInlist, 1);
            }
            realGoups.push(tempArray);
            tempArray = []
        }
        return realGoups;

    }
}
console.log(srambleTheTeam(2, namelist));
