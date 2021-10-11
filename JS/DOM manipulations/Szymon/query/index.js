const myDiv = document.querySelector('#myDiv')
console.dir(myDiv)
myDiv.innerText="Hello"
myDiv.style.fontSize="40px"
myDiv.style.color="royalblue"
myDiv.addEventListener(`mouseenter`,handlemouseenter)
myDiv.addEventListener(`mouseleave`,handlemouseleave)

const myImage=document.querySelector(`#myImage`)
myImage.src=`scream.jpg`
myImage.style.madWidth=`200px`
myImage.style.display=`none`

const myScream=new Audio(`scream.mp3`)
const mySigh=new Audio(`sigh.mp3`)

function handlemouseenter(ev){
    console.log("House Entered!!!!!!!!!!!!!!!!")
    myImage.style.display=`block`
    myScream.play()
}

function handlemouseleave(ev){
    console.log("Mouse Leave!!!!!!!!!!!!!!!!!")
    myImage.style.display=`none`
    mySigh.play()
}