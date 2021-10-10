// function multiply(a, b){
//     return a * b;


// }
// console.log(multiply(2,5));




// function sayHi(name){

//     console.log(`hello ${name}`);
// }

// sayHi("beki kisha")


// function factorial(n){
//     let final = 1;
//     while(n > 1){
//     final =  final * n;
//     n--;
       
//     }

// return(final)
// }

// console.log(factorial(5))




// // functions USE THIS 

// const add = (a, b) =>{
//     return a + b;
// }

// //call back 

// let arr = [1, 2, 3, 4, 5, 'poop'];
// arr.forEach((element)=>{
//     console.log(add(2, element))
// })

// let arr = ['max', "becki", "dan"]

// const cb = hello =>{
//     console.log('hello', hello, 'how are you?')
// }

// arr.forEach(cb)

let nameListFull = ['becky','max','yoav', 'samuel', 'szymon','eytan', 'jamie','robby','elliot', 'alex', 'zach', 'micheal', 'liam'];
let Team0 = [];
let Team1 = [];
let Team2 = [];
let Team3 = [];
let TeamOverflow = [];

const scrambler = element =>{
    let NumberOfTeams = 4;
    let ranNum = Math.floor(Math.random()*NumberOfTeams)            //Needs to be scalable, maybe use objects assosiated with the number random, also need to fix the part where it just skips players and puts them in overflow 
    console.log(ranNum)
    if(ranNum == 0 && Team0.length <= nameListFull.length/NumberOfTeams){
        Team0.push(element);
        console.log(Team0);
    }
    else if(ranNum == 1 && Team1.length <= nameListFull.length/NumberOfTeams){
        Team1.push(element);
        console.log(Team1);
    }
    else if(ranNum == 2 && Team2.length <= nameListFull.length/NumberOfTeams){
        Team2.push(element);
        console.log(Team2);
    }
    else if(ranNum == 3 && Team3.length <= nameListFull.length/NumberOfTeams){
        Team3.push(element);
        console.log(Team3);
    }
    else{
        
    }

}

nameListFull.forEach(scrambler);
console.log('Team 0------>',Team0, 'Team 1------>',Team1,'Team 2------>',Team2,'Team 3------>',Team3, 'overflow------->',TeamOverflow);
