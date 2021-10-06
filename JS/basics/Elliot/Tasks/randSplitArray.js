//My method
let nameArrayMain = ["Jim", "Bob", "Alex", "Jack", "Ryan", "Jesse", "Max", "Arnold", "William", "Evan"];
let nameArrayRandHalf = [];
let nameArrayOtherHalf = [];

let randHalfSelector = element => {
    let halfSize = (element.length / 2);
    let randSelector;
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

    console.log(nameArrayRandHalf, nameArrayOtherHalf);


    if(nameArrayRandHalf.length < halfSize) {
        incompleteArray = nameArrayRandHalf;
    }
    for(let index = mainArrayIndex; index < nameArrayMain.length; index++){
        incompleteArray.push(element[index]);
    }

    console.log(nameArrayRandHalf, nameArrayOtherHalf);
}
randHalfSelector(nameArrayMain);
