function pickRandomHalf(names,numNames){
    while(ans.length < numNames){
        strPick = Math.floor((Math.random() * names.length))
        console.log(strPick);
        ans.push(names[strPick]);
        names.splice(strPick,1);
    }
}

pickRandomHalf(names, 5);



let randHalfSelector = element => {
    let nameArrayRandHalf = [];
    let nameArrayOtherHalf = [];
    let halfSize = Math.ceil(element.length / 2);
    let randSelector = Math.random(); //Random number used to filter names between two lists
    let mainArrayIndex = 0;
    let incompleteArray = nameArrayOtherHalf;

    while((nameArrayRandHalf.length < halfSize) && (nameArrayOtherHalf.length < halfSize)){
        randSelector = Math.random();
        if (randSelector >= 0.5) {
            nameArrayRandHalf.push(element[mainArrayIndex]);
        }
        else{
            nameArrayOtherHalf.push(element[mainArrayIndex]);
        }
        mainArrayIndex++;
    }

    if(nameArrayRandHalf.length < halfSize) {
        incompleteArray = nameArrayRandHalf;
    }
    for(let index = mainArrayIndex; index < nameArrayMain.length; index++){
        incompleteArray.push(element[index]);
    }

    console.log(nameArrayRandHalf, nameArrayOtherHalf);
}
randHalfSelector(nameArrayMain);