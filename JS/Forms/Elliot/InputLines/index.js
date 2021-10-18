//let newAddition, fullLineEntry; Version 1
let totalInputLine = "";
let totalInputToDiv, divMaker;
let dataInsertPoint;


function handleLineEnter(ev){
    /* Version 1
    newAddition = "";
    ev.preventDefault();
    newAddition = ev.target.elements.line.value;
    fullLineEntry = fullLineEntry + newAddition;
    //$('textarea').filter('line').val(''); Why didn't this work?
    document.getElementById('line')[0].innerHTML = "";*/

    ev.preventDefault();
    console.log(ev);
    totalInputLine = totalInputLine + ev.target.children[1].value;
    //console.log(totalInputLine);

    divMaker = document.createElement("div");
    totalInputToDiv = document.createTextNode(totalInputLine);
    //console.log(totalInputToDiv);
    dataInsertPoint = document.getElementById("linePlaceReference");
    
    divMaker.appendChild(totalInputToDiv);
    document.body.insertBefore(divMaker, dataInsertPoint);
}