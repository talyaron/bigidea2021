document.addEventListener('mouseenter', () => document.body.style.background = 'red');
document.addEventListener('mouseleave', () => document.body.style.background = 'white');

let count=0;
const timer = document.getElementById('timer');
console.log(timer);

//timer
setInterval(function timer(ev){
    count += 1;
    document.getElementById('timer').innerText = count;
}, 0.001)

const inputBox = document.getElementById('inputBox');
inputBox.addEventListener('change', () => {
    const text = document.getElementById('inputBox').value;
    document.getElementById('output').innerText = text;
})