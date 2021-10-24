const mydiv = document.querySelector('#mydiv');
console.dir(mydiv);
mydiv.innerText = "hello";
//mydiv.addEventListener('mouseenter', handlemouseenter);
//mydiv.addEventListener('mouseleave', handlemouseexit);
<<<<<<< Updated upstream
const myimage = document.querySelector('#myimage');
myimage.src = './img/funny.jpg';
myimage.style.display = 'block';
const scream = new Audio('img/scream.mp3');
const allah = new Audio('img/allah.mp3');
=======
const myimg = document.querySelector('#myimg');
myimg.src = './img/funny.jpg';
myimg.style.display = 'block';
const scream = new Audio('img/scream.mp3');
const bass = new Audio('img/bass.mp3');
>>>>>>> Stashed changes
const fart = new Audio('img/fart.mp3');

function fall(ev){
    myimg.style.display = 'block';
    myimg.style.top = 100vh;
    fart.play();
    scream.play();
    bass.play();
    
}


