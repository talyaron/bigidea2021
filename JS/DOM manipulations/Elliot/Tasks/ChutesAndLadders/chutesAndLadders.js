//<input type = "color" name="" class="screenChanger" id = "colorBackground" onkeyup="colorChange()"></input>
//For html
function makingBoxes(button, numBoxes){
    console.log("step0");
    button.style.display = 'none';
    makeBoxes(numBoxes);
}

function makeBoxes(numBoxes){
    let boxWidth, boxHeight;
    let boxOpacity;
    let boxRedHex, boxBlueHex, boxGreenHex, boxRGB;
    let boxXAxis, boxYAxis;
    let newBoxProperties, randomBox;
    console.log("step1");
    for(let boxInstance = 0; boxInstance < numBoxes; boxInstance++){
        boxWidth = (Math.random() * 280 + 20).toFixed(0);
        boxHeight = (Math.random() * 280 + 20).toFixed(0);

        boxOpacity = (Math.random() * 100).toFixed(0);
        boxRedHex = (Math.random() * 255).toFixed(0);
        boxBlueHex = (Math.random() * 255).toFixed(0); 
        boxGreenHex = (Math.random() * 255).toFixed(0);
        boxRGB = "rgb(" + boxRedHex + "," + boxGreenHex + "," + boxBlueHex + "," + boxOpacity + ")";

        boxXAxis = (Math.random() * document.body.width).toFixed(0);
        boxYAxis = (Math.random() * document.body.height).toFixed(0);
        console.log("step2");
        newBoxProperties = {
            'width': boxWidth + 'px',
            'height': boxHeight + 'px',
            'background-color': boxRGB,
            'position': 'absolute',
            'left': boxXAxis + 'px',
            'top': boxYAxis + 'px',
            'display': 'block'
        }
        console.log("step3");
        randomBox = Object.create(newBoxProperties);
        (randomBox).appendTo( 'body' ); 
    }
}

/* Check out as a potential solution
let b1 = document.querySelector('#b1');
let b2 = document.querySelector('#b2');
let b3 = document.querySelector('#b3');
let b4 = document.querySelector('#b4');
let b5 = document.querySelector('#b5');
let b6 = document.querySelector('#b6');

const arr = [b1, b2, b3, b4, b5, b6];

function randomizeLocation(ev){
    arr.forEach(element => {
        element.style.top = `${Math.random()*100}vh`;
        element.style.left = `${Math.random()*100}vw`;
    });
}*/