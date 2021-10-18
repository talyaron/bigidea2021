let newAddition, fullLineEntry;

function handleLineEnter(ev){
    newAddition = "";
    ev.preventDefault();
    newAddition = ev.target.elements.line.value;
    fullLineEntry = fullLineEntry + newAddition;
    //$('textarea').filter('line').val(''); Why didn't this work?
    document.getElementById('line')[0]
}

//Objective is that whenever