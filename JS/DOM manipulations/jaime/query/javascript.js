

const myImage = document.querySelector('#myImage');
myImage.addEventListener('mouseenter', handleMouseEnter);
myImage.addEventListener('mouseleave', handleMouseLeave);
myImage.src = './fallingwithstyle.jpg';
myImage.style.maxWidth = '200px';
myImage.style.display = 'none';

const fallingAudio = new Audio('falling.mp3');

function handleMouseEnter(ev){
    console.log("Mouse entered!!!!!!!!!!!!!!!!!!!!!!!")
    myImage.style.display = 'block';
    fallingAudio.play();
   
}

function handleMouseLeave(ev){
    console.log("Mouse left!!!!!!!!!!!!!!!!");
    myImage.style.display = 'none';
}
