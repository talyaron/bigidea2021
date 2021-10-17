b1= document.querySelector('#b1');
b2= document.querySelector('#b2');
b3= document.querySelector('#b3');
b4= document.querySelector('#b4');
b5= document.querySelector('#b5');
b6= document.querySelector('#b6');

const arr= [b1, b2, b3, b4, b5, b6];

function randomizeLocation(ev){
    arr.forEach(element => {
        element.style.top=`${Math.random()*100}vh`;
        element.style.left=`${Math.random()*100}vw`;
    });
}



randomizeLocation();
