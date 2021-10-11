const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);
function handleMouseEnter(ev){
    console.log("Mouse enterd!!!!!!!!!!!!!!!!!!!!!!!")
}

function handleMouseLeave(ev){
    console.log("Mouse leaved!!!!!!!!!!!!!!!!");
}
