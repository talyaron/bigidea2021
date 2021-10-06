let namelist= ['Jaime','Robby','Elliot','Eytan','Alex','Max','Szymon','Yoav','Samuel','Michael','Becky'];
let numTeams; 

function getNumTeams(memPerTeam) {
    numTeams = Math.ceil(memPerTeam / namelist.length);
    return numTeams;
}

const shuffled = namelist.sort((a, b) => 0.5 - Math.random());

console.log(shuffled);

var arrultimate= [];

for(let h=0; h<=numTeams; h++) {
    for(let k=0; k<=memPerTeam; k++)
    {
        arrultimate[h].push(nameList[k]);
    }

}

for (let i=0; i<=length;i++){
    arrultimate[Math.random()*namelist.length/numTeams][numTeams]
    }
