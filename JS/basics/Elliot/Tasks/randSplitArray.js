let nameArrayMain = ["Jim", "Bob", "Alex", "Jack", "Ryan", "Jesse", "Max", "Arnold", "William", "Evan"];

//My Solution
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

//Another Solution, more efficient...
function pickRandomFromArray(numStrings, array) {
    let randomPick; 
    for (j = 0; j < numStrings; j++)                                //gets whatever number of names you select
    {
        randomPick = Math.floor((Math.random() * array.length));    //picks a random number between 0 and the length of array
        for (i = 0; i < array.length; i++) {                        //prints the string at that index and removes it from the array
            if (i == randomPick) {
                console.log(array[i]);
                array.splice(i, 1);
            } 
        }
    }
}
pickRandomFromArray(5, nameArrayMain);


//Second task given to us was to make a random team maker that allows the
//User to choose how many people are in a single team.

let nameArrayTesting = ["Jim", "Bob", "Alex", "Jack", "Ryan", "Jesse", "Max", "Arnold", "James", "Evan"];

//My Solution, doesnt fully work since large lists aren't put in there fully
function randTeamMakerTwo(origArray, peoplePerTeam){
    let distributedTeams = []; // [["Jim", "Bob", "Alex"],["Jack", "Ryan", "Jesse"],["Max", "Arnold", "James"],["Evan"]]
    let individualTeam = []; // ["Jim", "Bob", "Alex"]
    //let tempHolder;
    //let randIndexVal;
    
    let nameArray = origArray.sort((a, b) => 0.5 - Math.random());
    
    /*Another method to shuffle the array, called the input variable nameArray when this was made
    for (let currentIndex = nameArray.length - 1; currentIndex > 0; currentIndex--) { //Shuffles the list of names to make the list random
        randIndexVal = Math.floor(Math.random() * (currentIndex + 1));
        tempHolder = nameArray[currentIndex];
        nameArray[currentIndex] = nameArray[randIndexVal];
        nameArray[randIndexVal] = tempHolder;
    }*/
    
    nameArray.forEach(function(player){ //Adds the players to teams.
        if(individualTeam.length >= peoplePerTeam) { //Checks to see if an individual team is full
            distributedTeams.push(individualTeam);
            individualTeam = [];
        }
        individualTeam.push(player); //If not, add a player
    })
    distributedTeams.push(individualTeam);
    console.log(distributedTeams);
}

randTeamMakerTwo(nameArrayTesting, 3);
randTeamMakerTwo(nameArrayTesting, 2);
randTeamMakerTwo(nameArrayTesting, 4);
randTeamMakerTwo(nameArrayTesting, 1);