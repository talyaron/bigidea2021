    let nmlst = []
    let x = 3
    let nm = undefined
    let lst = []



function setlist() {
    lst = [undefined]
    x = document.getElementById("teamsize").value;
    nmlst = document.getElementById("names").value.split(" ");
    document.getElementById("list").innerHTML = nmlst;
}


function rndmnm() {
    let rndmnbr = Math.floor(Math.random() * nmlst.length);
    let nm = nmlst[rndmnbr];
    nmlst.splice(rndmnbr, 1);
    document.getElementById("name").innerHTML = nm;
    document.getElementById("list").innerHTML = nmlst;
    return(nm);
}

function clic() {
    debugger

    for (let idx1 = 0; idx1 < nmlst.length; idx1++) {
        let tmplst = []
        for (let idx = 0; idx < x; idx++) {
            tmplst.push(rndmnm())
        }
        lst.push(tmplst)

    }
    document.getElementById("list").innerHTML = lst;

}
