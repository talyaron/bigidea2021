const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize= "40px";
myDiv.style.color="blue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter(ev){
    console.log('Mouse entered');
}

function handleMouseLeave(ev){
    console.log('Mouse left');
}