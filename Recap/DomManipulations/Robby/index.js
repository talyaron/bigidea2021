document
    .addEventListener('mouseenter', () => {document.body.style.background= 'red'})
document  
    .addEventListener('mouseleave', () => {document.body.style.background= 'white'})

const root= document.getElementById('root')
console.log(root)

//timer
setInterval(() => {



}, 1000);

function handleSubmit(ev){
    ev.preventDefault();
    console.log(ev);

    const text= ev.target.elements.Text.value;
    let h1 = document.getElementsByTagName('h1')[0];
    if(h1.innerHTML === "Text"){
        h1.innerHTML = text + '<br>' ;
    }
    else{
        h1.innerHTML += text + '<br>';
    }
    
    
    
}

const box1 = document.getElementById('box1');
const box2 = document.getElementById('box2');
const c12= document.getElementById('c12')

let ranNum= Math.ceil(Math.random()*10);
if (ranNum%2==0){
    c12.innerText= "even";
}
else{
    c12.innerText= "odd";
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
    pos+= 100; 
    box1.style.position = `${pos}px`;
})

let posss= 0;
box2.addEventListener('mouseover', ()=> {
    posss+= 100; 
    box2.style.left= `${posss}px`;
})

