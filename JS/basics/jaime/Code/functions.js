//unhoisted function
function multiply(a, b) {
    return a * b;
}

console.log(multiply(2,5));

function sayHello(name){
console.log(`Hello ${name}`);
}

sayHello("Jaime");
sayHello("Eitan");

function factorialize(n) {
    let final= 1;
    while(n > 1) {
        final = final * n;
        n--;
    }
    console.log(final);
}

factorialize(5);
factorialize(9);
factorialize(17);

//hoisted function (cannot be initialized after callback)
const add = (a,b) => {
    return a + b;
}

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 'b'];


const cb = element => {
    console.log(add(2, element));
}

//callback
arr.forEach(cb);

let namesList = ['jaime', 'robby', 'elliot', 'eitan', 'zach', 'szymon', 'sam', 'yoav', 'liam', 'alex', 'michael', 'becky', 'max', 'tal'];

const names = (element) => {
    console.log(`Hello ${element}`);
}

namesList.forEach(names);
console.log("");
console.log("");





let newNames = ['jaime', 'robby', 'elliot', 'eitan', 'zach', 'szymon', 'sam', 'yoav', 'liam', 'alex', 'michael', 'becky', 'max', 'tal'];
let randNames = [];

function shuffle(array) {
    let arrayLength = array.length, randomIndex;
  
    // While there remain elements to shuffle...
    while (arrayLength != 0) {
  
      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * arrayLength);
      arrayLength--;
  
      // And swap it with the current element.
      [array[arrayLength], array[randomIndex]] = [
        array[randomIndex], array[arrayLength]];
    }
  
    return array;
  }
  
  // Used like so
  shuffle(newNames);

  for(let i=0; i < (newNames.length/2); i++) {
      randNames.push(newNames[i]);
  }
  console.log(randNames);