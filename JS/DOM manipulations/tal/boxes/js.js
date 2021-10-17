//add elements to to the DOM
function addElements(numberOfElements){
    for(let i = 0; i<numberOfElements; i++){
        const element = document.createElement('div');
        element.classList.add('box');
        element.style.backgroundColor = getRandomColor();
        element.style.top = `${Math.random()*96}vh`;
        element.style.left = `${Math.random()*96}vw`;
        document.body.appendChild(element);

        
    }
}

addElements(970);

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }