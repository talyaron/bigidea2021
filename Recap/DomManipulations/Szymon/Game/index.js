// function getRandomInt(max){
//         return Math.floor(Math.random()*max);
// }
// console.log(getRandomInt(11));
const oddoreven=document.getElementById('oddoreven')
const clicker=document.getElementById('clicker')
box1=document.getElementById('box1')
box2=document.getElementById('box2')

console.log(oddoreven)
console.log(clicker)

clicker.addEventListener('click', changeTextToEvenOrOdd)

function changeTextToEvenOrOdd(ev){
    oddoreven.innerText=getoddoreven();
}

function getoddoreven(){
    const number=Math.ceil(Math.random()*2)
    if (number===1){
        return 'Odd'
    }
    else{
        return 'Even'
    }
}

function getEvenNumber(max){
    const number=Math.ceil(Math.random()*max/2)*2
    return number
}

function getOddNumber(max){
    const number=Math.ceil(Math.random()*max/2)*2
    return number -1
}


// checking
// let odd=0, even = 0
// for(let i=0; i<100; i++){
//     let answer = getoddoreven()
//     if (answer === 'Odd') odd++;
//     else if (answer === 'Even') even++;
// }

// console.log(odd,even)