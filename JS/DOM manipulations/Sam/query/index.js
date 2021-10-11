const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize = "40px";
myDiv.style.color = "purple";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);


const myImage = document.querySelector('#myImage');
myImage.src = 'scream.webp';
myImage.style.maxwidth = '200px';


//myImage.style.display = 'none';


const myScream = new Audio('scream.mp3');
const mySigh = new Audio('');


function handleMouseEnter(ev){
    console.log("Mouse enterd!!!!!")
    myImage.style.top = '100vh';

    myScream.play();

}

function handleMouseLeave(ev){
    console.log("Mouse leave!!!!!");
    myImage.style.top = '0vh';

    myImage.style.display = 'none';
}