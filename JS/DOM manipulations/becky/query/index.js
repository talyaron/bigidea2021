const myDiv = document.querySelector('#myDiv')
console.dir(myDiv);
myDiv.innerText = "Hello"; 
myDiv.style.fontSize = "40px";
myDiv.style.color = "purple";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImage = document.querySelector('#myImage');
myImage.src = 'Flower.jpg'
myImage.style.maxWidth = '200px';
myImage.style.display = 'none';

const Birds = new Audio ('birdSound.wav');

function handleMouseEnter(ev){
    console.log("mouse entered!!!!!")
    myImage.style.display = 'block'
    myImage.animate([
        
        {transform: 'translateY(0px)'},
        {transform: 'translateY(600px)'}
    ],{
        duration: 1000,
        iteratios: Infinity
    });
}
function handleMouseLeave(ev){
    console.log("mouse left")
    myImage.style.display = 'none'
}


