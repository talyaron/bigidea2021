//document.addEventListener('mouseenter', () => {document.body.style.background  = 'red'});
//document.addEventListener('mouseleave', () => {document.body.style.background  = 'green'});

/*var root = document.getElementById('loopingNumber');
let totalLoops = 1;

setInterval(countHTML, 1000);

function countHTML() {
    root.innerHTML = totalLoops;
    totalLoops++;
};*/

/*
const inputBox = document.getElementById('input');
inputBox.addEventListener('change', ()=>{
    const textLog = document.getElementById('input').value;
    console.log(textLog);
    document.getElementById('input').innerText = textLog;
})*/

//For

const box = document.getElementById('box');
box.addEventListener('mouseover', ()=>{
    let leftUpdateValue = box.style.left;
    leftUpdateValue += 100;
    box.style.left += `${leftUpdateValue}px`;
})