function EvenOdd(){
    x=Math.random()
    let y
    if (x<=0.5){
        y='Odd'
    }
    else {
        y='Even'
    };
    return y
}
const command=document.getElementById('evenOrOdd');
const box1=document.getElementById("odd");
const even=document.getElementById("even");
even.addEventListener('click',()=>command.innerHTML=EvenOdd());
odd.addEventListener('click',()=>command.innerHTML=EvenOdd());

function evenOrOdd (num,num2){
    if (num ===num2){
        num-=1
    }
}
