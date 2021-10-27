// document.addEventListener('mouseenter',()=>document.body.style.background='green');
// document.addEventListener('mouseleave',()=>document.body.style.background='red');

// var x=document.getElementById('number').innerHTML;
// setInterval(()=>{
//     x++
// document.getElementById('number').innerHTML=x

// console.log(x)
// },1000);
// const root=document.getElementById('number');
// let counter = 1;
// console.log(root)
// setInterval(countHTML,100000)
// function countHTML(){
//     root.innerText=counter;
//     counter++;
// }
let textbox=document.getElementById('text')

let output=document.getElementById('output')
textbox.addEventListener('keyup',()=>{
    const input=document.getElementById('text').value;
    output.innerHTML=input
});
