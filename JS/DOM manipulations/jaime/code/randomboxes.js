const box1 = document.querySelector('#1');
const box2 = document.querySelector('#2');
const box3 = document.querySelector('#3');
const box4 = document.querySelector('#4');
const box5 = document.querySelector('#5');
const box6 = document.querySelector('#6');

function randomizeBoxes(ev){

    var divPosX, divPosY, count=1;

    for(let i=0; i<=6; i++) {

        divPosX = Math.floor(Math.random()*1000);
        divPosY = Math.floor(Math.random()*1000);
        
        box+'count'.style.top = divPosY + 'px';
        myImage.style.left = divPosX + 'px';
        count++;
    }
    
}
randomizeBoxes();