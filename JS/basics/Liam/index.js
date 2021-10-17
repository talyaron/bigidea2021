const mydiv = document.querySelector('#mydiv');
console.dir(mydiv);
mydiv.innerText = "hello";
//mydiv.addEventListener('mouseenter', handlemouseenter);
//mydiv.addEventListener('mouseleave', handlemouseexit);
const myimage = document.querySelector('#myimage');
myimage.src = './img/funny.jpg';
myimage.style.display = 'block';
const scream = new Audio('img/scream.mp3');
const allah = new Audio('img/allah.mp3');
const fart = new Audio('img/fart.mp3');

function fall(ev){
    myimage.style.display = 'block';
    scream.play();
    allah.play();
    fart.play();
}


