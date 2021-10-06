let namelist = ['Alex', 'Becky', 'Elliot', 'Eytan', 'Jaime', 'Liam', 'Max', 'Michael', 'Robby', 'Szymon', 'Tal', 'Yoav', 'Zach'];

const scrambler = element =>{
    let NumberOfTeams = 4;
    let ranNum = (Math.floor(Math.random()*NumberOfTeams))+1
    let MaxteamNum = namelist.length/NumberOfTeams;
    console.log(element, 'is on team',ranNum);
}

namelist.forEach(scrambler);