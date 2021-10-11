const myDiv=document.querySelector('#MyDiv');
console.dir(myDiv);
const myImg=document.querySelector('#MyImage')
myDiv.innerText="hello";
myDiv.style.fontsize="45px";
myDiv.style.color="royalblue";
myDiv.addEventListener('mouseenter',handleMouseEnter);
myDiv.addEventListener('mouseleave',handleMouseLeave);
myImg.src='penguin.jpg';
myImg.style.maxWidth="200px";
myImg.style.display="none";
myImg.style.bottom = "400px"

const fall = document.querySelector('#falling');
fall.style.width="400px"

myImg.addEventListener('mouseenter',handleFall)
function handleMouseEnter(){
    console.log("arghhhhhhhhhh mouse enter")
    myImg.style.display="block"
};
function handleMouseLeave(){
    console.log("arghhhhhhhhhh mouse leave")
    myImg.style.display="none"
};

function handleFall(){
    
    myImg.style.top="100vh";
}