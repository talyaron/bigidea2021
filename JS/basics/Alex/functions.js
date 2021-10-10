

function multiply(num1,num2){
    return num1*num2;
}

function sayHello(name){
    console.log("Hello " + name);
            //`Hello ${name}`  also works - must use "`" via tilda key
}

function factorial(num){
        var result = num;
    if (num === 0 || num === 1) 
        return 1; 
    while (num > 1) { 
        num--;
        result *= num;
    }
    return result;
}

const add = (a,b) => {
    return a+b;
}

let arr = [1,2,3,4,5,6,7,8,'b'];


const cb = element =>{
    console.log(add(2,element));
}
arr.forEach(cb)



console.log(factorial(5));
console.log(factorial(10));

console.log(multiply(2,5));
sayHello("Alex");

let names = ['Alex', 'Becky', 'Max', 'Yoav', 'Zach','Michael',"Robby","Liam","Billy","Charlie"]

const hello = element =>{
    console.log(add('Hello ',element))
}

names.forEach(hello);

let tempAns = [];
let ans =[];

names.sort(() => Math.random() - 0.5);
console.log(names);


function pickRandom(names,numNames){
   let iLength = names.length;
    for(i=0;i<iLength/numNames;i++){
    while(tempAns.length < numNames){
        strPick = Math.floor((Math.random() * names.length))
        console.log(strPick);
        tempAns.push(names[strPick]);
        names.splice(strPick,1);
    }
    ans.push(tempAns);
    tempAns = [];
}
}



pickRandom(names, 2);


console.log(ans);

