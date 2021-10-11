const mydiv = document.querySelector('#mydiv');
console.dir(mydiv);
mydiv.innerText = "hello";
mydiv.addEventListener('mouseenter', handlemouseenter);
mydiv.addEventListener('mouseleave', handlemouseexit);
const myimage = document.querySelector('#myimg');
myimage.src = './img/funny.jpg';
myimage.style.maxwidth = '200px';
myimage.style.display = 'none';
const scream = new Audio('scream.mp3');
const allah = new Audio('allah.mp3');

function handlemouseenter(ev){
    console.log("MOUSE ENTERED");
    myimage.style.display = 'block';
    scream.play();


}
function handlemouseexit(ev){
    console.log("MOUSE Exited");
    myimage.style.display = 'none';
    allah.play();
    
}

