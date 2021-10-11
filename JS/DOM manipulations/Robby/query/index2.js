const myDiv= document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText= "Hello There";
myDiv.style.fontSize= "40px";
myDiv.style.color= "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);
const myImage= document.querySelector('#myImage')
myImage.src= 'mufasa.jpg'
myImage.style.maxWidth= '200px'
myImage.style.display ='block'
const myScream= new Audio('part1.mp3');
const mySigh= new Audio('sigh.mp3');
function handleMouseEnter(ev){
 

  
    console.log("Long Live the King");
    myImage.style.display ='block'
    myImage.animate([
        {transform: 'translateY(0px'},
        {transform: 'translateY(600px'}
    ])
    
    myScream.play();
}
function handleMouseLeave(ev){
    console.log("AAAAAAAAAAH!");
    myImage.style.display= 'none';
    myImage.style.top= '0vh';
    mySigh.play();
}