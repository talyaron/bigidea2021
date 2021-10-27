document.addEventListener('mouseenter', () => {document.body.style.background = 'red'});

document.addEventListener('mouseleave', () => {document.body.style.background = 'white'});

//timer
const root = document.getElementById('root');
console.log(root)
setInterval(() => {
    root.innerHTML++
}, 1000);