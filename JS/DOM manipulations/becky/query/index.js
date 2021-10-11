const myDiv = document.querySelector('#myDiv')
console.dir(myDiv);
myDiv.innerText = "Hello"; 
myDiv.style.fontSize = "40px";
myDiv.style.color = "purple";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter(ev){
    console.log("mouse entered!!!!!")
}
function handleMouseLeave(ev){
    console.log("mouse left")
}
