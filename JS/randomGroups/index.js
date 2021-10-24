function randomGroups(groupSize, array) {
    let randomPick;
    let arrGroups = [];
    let tempArray = [];
    let length = array.length;
    
    for (groupNum = 0; groupNum < (Math.ceil(length / groupSize)); groupNum++) //how many gtoups will there be
    {
        for (j = 0; j < groupSize; j++)                                //loops through to select one group of a certain size
        {
            if (array.length > 0) {
                randomPick = Math.floor((Math.random() * array.length));    //picks a random number between 0 and the length of array
                tempArray.push(array[randomPick]);
                //console.log('Group Number ' + (groupNum + 1) + ': ' + array[randomPick]);
                array.splice(randomPick, 1);
            }    
        }
        arrGroups.push(tempArray);
        tempArray = [];
    }

    return (arrGroups);

    
}

const group = ["jaime", "robby", "elliot", "eitan", "zach", "szymon", "sam", "yoav", "becky", "max", "michael", "liam"];

console.log( randomGroups(2, group));