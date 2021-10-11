const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImage = document.querySelector('#myImage');
myImage.src = 'screamdog.jpg';
myImage.style.maxWidth = '200px';
//myImage.style.display = 'none';

const myScream = new Audio('scream.mp3');
const mySigh = new Audio('sigh.mp3');

function handleMouseEnter(ev){
    console.log("Mouse entered!!!!!!!!");
    myImage.style.top = '120vh';
    mySigh.play();

}

function handleMouseLeave(ev){
    console.log("Mouse leave!!!!");
    myImage.style.top = '0vh';
    myScream.play();
}
