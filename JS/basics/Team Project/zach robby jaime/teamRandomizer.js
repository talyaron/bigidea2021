let namelist= ['Jaime','Robby','Elliot','Tal','Eytan','ALex','Max','Szymon','Yoav','Samuel','Michael','Becky'], numTeams; 

const shuffled = namelist.sort((a, b) => 0.5 - Math.random());
let length=namelist.length-1;

var arrultimate= [[], []];
for(let i=0; i<=namelist.length; i++){

}

for (let i=0; i<=length;i++){
    for (let k=0; k<=numTeams;k++){
    let arrultimate=[i][k]arrultimate[Math.random()*namelist.length][Math.random()*namelist.length];
    }
    }
    console.log(arrultimate);
