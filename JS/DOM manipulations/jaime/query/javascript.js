console.log('start')

const myImage = document.querySelector('#myImage');
myImage.addEventListener('mouseenter', handleMouseEnter);
myImage.addEventListener('mouseleave', handleMouseLeave);
myImage.src = './fallingwithstyle.jpg';
myImage.style.maxWidth = '200px';
myImage.style.display = 'block';
myImage.style.position = 'absolute';
myImage.style.transition = 'all 2s'
console.log(myImage);

const fallingAudio = new Audio('falling.mp3');

function handleMouseEnter(ev){
    console.log("Mouse entered!!!!!!!!!!!!!!!!!!!!!!!")
    myImage.style.top = '0vh';
    fallingAudio.play();
   
}

function handleMouseLeave(ev){
    console.log("Mouse left!!!!!!!!!!!!!!!!");
    myImage.style.top = '100vh';
}
