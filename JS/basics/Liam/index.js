const mydiv = document.querySelector('#mydiv');
console.dir(mydiv);
mydiv.innerText = "hello";
//mydiv.addEventListener('mouseenter', handlemouseenter);
//mydiv.addEventListener('mouseleave', handlemouseexit);
const myimage = document.querySelector('#myimg');
myimage.src = './img/funny.jpg';
myimage.style.display = 'block';
const scream = new Audio('scream.mp3');
const allah = new Audio('allah.mp3');
const fart = new Audio('fart.mp3');

function fall(ev){
    myimage.style.display = 'block';
    scream.play();
    allah.play();
    fart.play();
}


