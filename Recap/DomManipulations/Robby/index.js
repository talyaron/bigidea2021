

//timer
function handleStartClick() {
    var startTime = Date.now();

    var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1000).toFixed(3);
    }, 100);
}

document
    .addEventListener('mouseenter', () => {document.body.style.background= 'red'})
document  
    .addEventListener('mouseleave', () => {document.body.style.background= 'white'})





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



box1.addEventListener('mouseover', ()=> {
    if(evenOrOdd.innerText== 'odd'){
        box1.style.left = `${Math.random()*1000}px`;
    }
})


box2.addEventListener('mouseover', ()=> {
    if(evenOrOdd.innerText== 'even'){
    box2.style.left= `${Math.random()*1000}px`;
    };
})
