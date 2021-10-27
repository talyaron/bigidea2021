document
    .addEventListener('mouseenter', () => {document.body.style.background= 'red'})
document  
    .addEventListener('mouseleave', () => {document.body.style.background= 'white'})

const root= document.getElementById('root')
console.log(root)
//timer
setInterval(() => {
     root.innerHTML++;


}, 1000);
