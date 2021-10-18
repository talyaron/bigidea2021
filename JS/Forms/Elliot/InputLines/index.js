//let newAddition, fullLineEntry; Vrrsion 1
let totalInputLine;
let totalInputToDiv,totalInputDivMaker;
let dataHoldingRegion;


function handleLineEnter(ev){
    /* Version 1
    newAddition = "";
    ev.preventDefault();
    newAddition = ev.target.elements.line.value;
    fullLineEntry = fullLineEntry + newAddition;
    //$('textarea').filter('line').val(''); Why didn't this work?
    document.getElementById('line')[0].innerHTML = "";*/

    ev.preventDefault();
    totalInputLine = totalInputLine + document.getElementById('line').innerText;

    totalInputDivMaker = document.createElement("div");
    totalInputToDiv = document.createTextNode(totalInputLine);
    
    totalInputDivMaker.innerText = totalInputLine;
    document.body.appendChild(totalInputDivMaker);

}

//Objective is that whenever