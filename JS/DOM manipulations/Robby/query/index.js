const myDiv= document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText= "Hello There";
myDiv.style.fontSize= "40px";
myDiv.style.color= "royalblue";
myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);
const myImage= document.querySelector('#myImage')
myImage.src= 'myImage.webp'
myImage.style.maxWidth= '200px'
myImage.style.display ='none'
const myScar= new Audio('scream.mp3');
const myMufasa= new Audio('sigh.mp3');
function handleMouseEnter(ev){
        console.log("Long Live the Kin")
        myImage.style.display = 'block'
        myScar.play();
        myImage.animate([
            
            {transform: 'translateY(0px)'},
            {transform: 'translateY(600px)'}
        ],{
            duration: 5,
            iterations: Infinity
        });
    }
    function handleMouseLeave(ev){
        console.log("AAAh")
        myMufasa.play();
        myImage.style.display = 'none'
    }