const div = document.querySelector('#myDiv');
console.dir(myDiv);
myDiv.innerText = "Hello";
myDiv.style.fontSize = "40px";
myDiv.style.color = "royalblue";

const myImage = document.querySelector('myImage');
myImage.src = './scream.jpg'
myImage.style.maxWidth = '200px';
myImage.style.display = 'none';

myDiv.addEventListener('mouseenter', handleMouseEnter);
myDiv.addEventListener('mouseleave', handleMouseLeave);

function handleMouseEnter(ev) {
    console.log("Mouse entered!!!!!!!!!!!!");
    myImage.style.display = 'block';
}
function handleMouseLeave(ev) {
    console.log("Mouse left!!!!!!!!!!!!");
    myImage.style.display = 'none';
}