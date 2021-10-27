const inputBox = document.getElementById('textbox_id')
inputBox.addEventListener('change',()=>{
    const text = document.getElementById('textbox_id').value;
    document.getElementById('output').innerText = text;
})
/*document
    .addEventListener('mouseenter', () => (document.body.style.background ='red'))
document
    .addEventListener('mouseleave', () => (document.body.style.background = 'white'))
const root=document.getElementById('root')
console.log(root)

    //timer
setInterval(()=>{
    root.innerHTML ++;
}, 1000)*/