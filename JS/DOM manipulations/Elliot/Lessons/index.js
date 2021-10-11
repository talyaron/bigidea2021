const myDiv = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hi, how are ya?";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";

myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

const myImage = document.querySelector('#myImage');
myImage.src = 'kanyeStare.jpeg';
myImage.style.maxWidth = '600px';
myImage.style.maxHeight = '600px';
myImage.style.display = 'block';

const myHello = new Audio('Bruh.mp3');
const myBoom = new Audio('Boom.mp3');

function handleMouseEnter(ev){
    console.log('Yeezy has Entered!!!!!!!!');
    myImage.classList(kanyePhotoEnter);
    myImage.style.display = 'block';
    myHello.play();
    //myImage.style.top = '20vh';
}

function handleMouseLeave(ev){
    console.log('Yeezy has Left!!!!!!!!');
    myImage.classList(kanyePhotoExit);
    myImage.style.display = 'none';
    myBoom.play();
    //myImage.style.top = '120vh';
}