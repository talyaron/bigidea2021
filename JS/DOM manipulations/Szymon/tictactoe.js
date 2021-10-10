var clicks=0
function handleclick(ev){
   clicks +=1

   
    switch(clicks){
        case 1: 
        ev.target.innerText= ``
            break
        case 2:
            ev.target.innerText=`X`
            break
        default:
            ev.target.innerText= `O`
            break
    }
}