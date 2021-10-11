const myDiv = document.querySelector('#myDiv');

console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize= "40px";
myDiv.style.color="blue";

myDiv.addEventListener('mouseup', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImg = document.querySelector('#myImage');
myImg.style.maxWidth='200px';
myImg.src="shark.jpg";
myImg.style.display='block';

const myFallImg = document.querySelector('#myFallImage');
console.log(myFallImg);
myImg.style.maxWidth='200px';


const myScream = new Audio('scream.mp3');


function handleMouseEnter(ev){
    console.log('Mouse entered');
    myImg.style.top='60vh';
    myScream.play();

}

function handleMouseLeave(ev){
    console.log('Mouse left');
    myImg.style.top='0vh';
}