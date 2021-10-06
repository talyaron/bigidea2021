//functions

//function is a segment of the code that do some calculations or some "job"

//declare function

function multiply(a, b) {
    return (a * b);
}

function add(a, b) {
    return (a + b);
}

function factorial(n) {
    let final = 1;
    for (i = n; i > 0; i--) {
        final = i * final;
    }
    return (final);
}

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


//VARIABLES
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 'b'];

const cb = element => {
    console.log(add(2, element));
}

//callback
arr.forEach(cb);

let namesList = ['jaime', 'robby', 'elliot', 'eitan', 'zach', 'szymon', 'sam', 'yoav'];

/*const names = (element) => {
    console.log('Hello ' + element);
}


namesList.forEach(names);
*/

pickRandomFromArray(5, namesList);