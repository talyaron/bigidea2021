const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImage = document.querySelector('#myImage');
myImage.src = 'scream.webp';
myImage.style.maxWidth = '200px';
// myImage.style.display = 'none';

const myScream = new Audio('scream.mp3');
const mySigh = new Audio('sigh.mp3');

function handleMouseEnter(ev){
    console.log("Mouse enterd!!!!!!!!!!!!!!!!!!!!!!!")
    myImage.style.top = '100vh';
    myScream.play();
   
}

function handleMouseLeave(ev){
    console.log("Mouse leaved!!!!!!!!!!!!!!!!");
    myImage.style.top = '0vh';
    mySigh.play();
}
