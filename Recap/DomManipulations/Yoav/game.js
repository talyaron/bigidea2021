const clicker = document.getElementById('clicker');
const oddEven = document.getElementById('oddEven');
const odd = document.getElementById('odd');
const even = document.getElementById('even');

let oddList = [1, 3, 5, 7, 9]; 
let evenList = [2, 4, 6, 8, 10];


//Function to decide if even or odd is stated on top
clicker.addEventListener('click',()=>{
    const random = Math.ceil(Math.random()*2);
    console.log(random);
    if (random == 1) {
        oddEven.innerHTML = "odd";
    }
    else{
        oddEven.innerHTML = "even";
    }

    even.innerHTML = evenList[Math.floor(Math.random() * evenList.length)];
    odd.innerHTML = oddList[Math.floor(Math.random() * oddList.length)];
}) 



//Checks if the one you clicked for odd is right
odd.addEventListener('click',()=>{
    if (oddEven.innerHTML == "odd") {
        console.log("correct");
    }

    else {
        console.log("wrong");
    }
})


//Checks if the one you clicked for even is right 
even.addEventListener('click',()=>{
    if (oddEven.innerHTML == "even") {
        console.log("correct");
    }

    else {
        console.log("wrong");
    }
})
