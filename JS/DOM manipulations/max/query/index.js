const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "scary thing fish is afraid of ";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImage = document.querySelector('#myImage');
myImage.src = 'unnamed.png';
myImage.style.maxWidth = '200px';

const myScream = new Audio('scream.mp3');
const mySigh = new Audio('sigh.mp3');

function handleMouseEnter(ev){
    console.log("Mouse enter")
    myImage.style.top = '60vh';
    myImage.style.left = '60vw';
    myScream.play();
   
}

function handleMouseLeave(ev){
    console.log("Mouse left");
    myImage.style.top = '0vh';
    myImage.style.left = '0vw';
    mySigh.play();
} 