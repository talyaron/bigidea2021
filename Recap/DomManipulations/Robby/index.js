

//timer
function handleStartClick() {
    var startTime = Date.now;

    setInterval(function timer(ev){
        count += 1;
        document.getElementById('timer').innerText = count;
    }, 0.001)
}

document
    .addEventListener('mouseenter', () => {document.body.style.background= 'red'})
document  
    .addEventListener('mouseleave', () => {document.body.style.background= 'white'})

const root= document.getElementById('root')
console.log(root)



const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const evenOrOdd= document.getElementById('evenOrOdd')

let ranNum= Math.ceil(Math.random()*10);
if (ranNum%2==0){
    evenOrOdd.innerText= "even";
}
else{
    evenOrOdd.innerText= "odd";
}
//add event listner

let ranNum1= Math.ceil(Math.random()*1000);
if (ranNum1%2==0){
    box1.innerText= ranNum1+1;
}
else{
    box1.innerText= ranNum1;
}
let ranNum2= Math.ceil(Math.random()*1000);
if (ranNum2%2!=0){
    box2.innerText= ranNum2+1;
}
else{
    box2.innerText= ranNum2;
}



let pos= 0;
box1.addEventListener('mouseover', ()=> {
    if(evenOrOdd.innerText== 'odd'){
        pos= Math.random()*1000; 
        box1.style.left = `${pos}px`;
    }
})


let posss= 0;
box2.addEventListener('mouseover', ()=> {
    if(evenOrOdd.innerText== 'even'){
    posss= Math.random()*1000; 
    box2.style.left= `${posss}px`
    };
})
