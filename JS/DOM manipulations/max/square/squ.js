const setBg = (element) => {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    element.style.backgroundColor = "#" + randomColor;
  }

let box0 = document.querySelector('#box0');
let box1 = document.querySelector('#box1');
let box2 = document.querySelector('#box2');
let box3 = document.querySelector('#box3');
let box4 = document.querySelector('#box4');
let box5 = document.querySelector('#box5');

let boxList = [box0, box1, box2, box3, box4, box5];

boxList.forEach(element =>{
    let ranNum = Math.random()*100
    element.style.top = `${ranNum}vh`;
    ranNum = Math.random()*100
    element.style.left = `${ranNum}vw`;
    setBg(element);
}

)

