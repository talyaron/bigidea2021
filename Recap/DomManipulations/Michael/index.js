document.addEventListener('mouseenter', () => {document.body.style.background = 'red'});

document.addEventListener('mouseleave', () => {document.body.style.background = 'white'});

//timer
let i = 1
setInterval(() => {
    console.log(i), i++
}, 1000);