const myDiv= document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.style.fontSize= "40px";
myDiv.style.color= "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);
const myImage= document.querySelector('#myImage')
myImage.src= 'mufasa.jpg'
myImage.style.maxWidth= '600px'
myImage.style.display ='block'
const myScream= new Audio('part1.mp3');
const mySigh= new Audio('falling.mp3');
function handleMouseEnter(ev){
 

  
    console.log("Long Live the King");
    myImage.style.display ='block'
    myImage.animate([
        {transform: 'translateY(0px'},
        {transform: 'translateY(600px'}
    ],{
        duration: 1000,
        iterations: 6
    });
    
    myScream.play();
}
function handleMouseLeave(ev){
    console.log("AAAAAAAAAAH!");
    mySigh.play();
}