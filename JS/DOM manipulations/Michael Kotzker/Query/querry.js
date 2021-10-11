const myImage = document.querySelector('#myImage');
console.dir(myImage);
myImage.addEventListener('mouseenter', handleMouseEnter);
myImage.src = 'scream.webp';
myImage.style.display = 'block';

const myScream = new Audio('scream.mp3');

function handleMouseEnter(ev){
    myImage.style.display = 'block';
    myScream.play();
    console.log("Aaaaaah!!");
}