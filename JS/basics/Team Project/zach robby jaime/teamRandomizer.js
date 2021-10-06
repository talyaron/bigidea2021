let namelist= ['Jaime','Robby','Elliot','Tal','Eytan','ALex','Max','Szymon','Yoav','Samuel','Michael','Becky'];
let numTeams; 

function getNumTeams(memPerTeam) {
    numTeams = Math.ceil(memPerTeam / namelist.length);
    return numTeams;
}

const shuffled = namelist.sort((a, b) => 0.5 - Math.random());
let length=namelist.length-1;

var arrultimate= [];
debugger;

for(i=0; i<=numTeams; i+memPerTeam) {
    for(let k=0; k<=memPerTeam; k++)
    {
        arrultimate[i].push(k);
    }

}


getNumTeams(3);
console.log(arrultimate);
