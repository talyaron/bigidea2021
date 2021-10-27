const OddEven = document.getElementById("OddEven");
const Clicker = document.getElementById("Clicker");
const box1 = document.getElementById("box1");
const box2 = document.getElementById ("box2");

console.dir(OddEven);
console.dir(Clicker);

Clicker.addEventListener("click", changeTexttoEvenorOdd);

function changeTexttoEvenorOdd(ev){
    //change text of header
    OddEven.innerText = getOddorEven();
}

function getOddorEven(){
    const number = Math.ceil(Math.random()*2);

    if(number == 1){
        return "Odd"
    } else{
        return "Even"
    }
}

//Checking
//let Odd = 0, Even = 0;
//for(let i = 0; i<100; i++){
//    let answer = getOddorEven();
//    if(answer == "Odd") Odd++;
//    else if (answer == "Even") even++
//}

//console.log(Odd, Even);

function getEvenNumbers(max){
    const number = Math.ceil(Math.random()*max/2)*2;
    return number
}

function getOddNumbers(max){
    const number = Math.ceil(Math.random()*max/2)*2;
    return number - 1
}

//Checking
//console.log(getEvenNumbers(20));
//console.log(getOddNumbers(20));