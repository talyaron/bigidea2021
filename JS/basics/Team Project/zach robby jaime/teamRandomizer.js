let nameList= ['Jaime','Robby','Elliot','Eytan','Alex','Max','Szymon','Yoav','Samuel','Michael','Becky'];
let numTeams; 

const shuffled = nameList.sort((a, b) => 0.5 - Math.random());

function splitTeam(array, memPerTeam){

    let teamArray = [], arrultimate= [];

    array.forEach(function(member){
        if(teamArray.length >= memPerTeam) {
            arrultimate.push(teamArray);
            teamArray = [];
        }
        teamArray.push(member);
    })
    arrultimate.push(teamArray);
    console.log(arrultimate);
}

splitTeam(shuffled, 3);
splitTeam(shuffled, 2);
splitTeam(shuffled, 4);