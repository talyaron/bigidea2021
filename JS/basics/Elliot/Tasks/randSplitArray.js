let nameArrayMain = ["Jim", "Bob", "Alex", "Jack", "Ryan", "Jesse", "Max", "Arnold", "William", "Evan"];
let nameArrayRandHalf = [];
let nameArrayOtherHalf = [];

let randHalfSelector = element => {
    let halfSize = (element.length / 2);
    let randSelector;
    let mainArrayIndex = 0;
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
        for(let index = mainArrayIndex; index < nameArrayMain.length; index++){
            nameArrayRandHalf.push(element[index]);
        }
    }
    else if (nameArrayOtherHalf.length < halfSize){
        for(let index = mainArrayIndex; index < nameArrayMain.length; index++){
            nameArrayOtherHalf.push(element[index]);

        }
    }

    nameArrayRandHalf.forEach((element) => {
        console.log(`Hello there ${element}`);
    })
    nameArrayOtherHalf.forEach((element) => {
        console.log(`Hi ${element}`);
    })
}

randHalfSelector(nameArrayMain);