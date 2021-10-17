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