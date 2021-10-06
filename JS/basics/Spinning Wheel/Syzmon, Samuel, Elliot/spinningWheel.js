let names = ['Alex', 'Becky', 'Max', 'Yoav', 'Zach','Michael',"Robby","Liam","Billy","Charlie", `Szymon`]

let tempAns = [];
let ans =[];


function pickRandom(names,numNames){
   let iLength = names.length;
    for(i=0;i<iLength/numNames;i++){
    while(tempAns.length < numNames){
        strPick = Math.floor((Math.random() * names.length))
        tempAns.push(names[strPick]);
        names.splice(strPick,1);
    }
    ans.push(tempAns);
    tempAns = [];
}
    console.log(ans);
}

pickRandom(names, 3);