const OddEven = document.getElementById("OddEven");
const Clicker = document.getElementById("Clicker");

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