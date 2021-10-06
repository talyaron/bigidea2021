let namelist = ['Alex', 'Becky', 'Elliot', 'Eytan', 'Jaime', 'Liam', 'Max', 'Michael', 'Robby', 'Szymon', 'Tal', 'Yoav', 'Zach'];
let numOnTeam = []

const getOccurrence =(numOnTeam, value) =>{  // checks how many people are on each team
        return numOnTeam.filter((v) => (v === value)).length;
    }

const scrambler = element =>{
    let NumberOfTeams = 4; 
    let ranNum = (Math.floor(Math.random()*NumberOfTeams))+1 //picks the team
    let MaxteamNum = namelist.length/NumberOfTeams; 
    if (numOnTeam.forEach(getOccurrence(ranNum)) >= MaxteamNum){
        //repick a difrent team
        numOnTeam.push(ranNum) // adds that a person was put on that team to the numOnTeam list 
    }
    console.log(element, 'is on team',ranNum); // prints out the name and what team they are on

}

namelist.forEach(scrambler);
