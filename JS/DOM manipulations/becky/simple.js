function handleClick(ev){
    // alert(`i was clicked by  ${ev.target.id} and the classes on this button are ${ev.target.classList}`);
    console.log(ev)
    console.log(ev.target.outerText)
    const buttonText = ev.target.outerText
    if(buttonText === 'Push Me'){
        ev.target.innerText ="Pushed"
    } else{
        ev.target.innerText = "Push Me"
    }
}
let clickCounter = 0;
let numberOfMoves = 0;
function handleClick2(ev){
    const Text = ev.target.outerText
    switch (clickCounter){
        case 0:
            ev.target.innerText = "x"
            clickCounter=1
            numberOfMoves++
            break;
        case 1:
            ev.target.innerText = "o"
            clickCounter=0
            numberOfMoves++
            break;
        case 2:
            ev.target.innerText = ""
            clickCounter=0
            break;

    
    }
    tie();
    win();
}

function tie(){
    if(numberOfMoves> 8)
    alert ("Tie")
}
function win(){
    var a = document.getElementById("a").innerText;
    var b = document.getElementById("b").innerText;
    var c = document.getElementById("c").innerText;
    var d = document.getElementById("d").innerText;
    var e = document.getElementById("e").innerText;
    var f = document.getElementById("f").innerText;
    var g = document.getElementById("g").innerText;
    var h = document.getElementById("h").innerText;
    var j = document.getElementById("j").innerText;

    if ( (a === b && b ===c) && (a!= "") && (b != "")&& (c != "")){
        alert(`${a} wins`)
    } else if ((d ===e && e===f) && (d!= "") && (e != "")&& (f != "")){
            alert(`${d} wins`)
        } else if((g===h && h===j) && (g!= "") && (h != "") &&(j != "")){
            alert(`${g} wins`)
        } else if ((a === d && d ===g) && (a!= "") && (d != "") && (g != "")){
            alert(`${a} wins`)
        } else if ((b===e && e===h) && (b!= "") && (e != "") && (h != "")){
            alert(`${b} wins`)
        } 
        else if((c===f && f===j) && (c!= "") && (f != "") && (j != "")){
            alert(`${c} wins`)
        }
        else if ((a===e && e===j) && (a!= "") && (e != "") && (j != "")){
            alert(`${a} wins`)
        }
        else if ((c===e && e===g) && (c!= "") && (e!= "") && (g != "")){
            alert(`${c} wins`)
        }
        
    }
        

    


    
function handleTextChange(ev){
    console.log(ev.target.value)
   
}

