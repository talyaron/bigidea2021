import React from 'react'
function KeyUp (ev)  {
    console.log(ev.target.value)
    let uncut=ev.target.value;
    let char=uncut.slice(-1)
    char=char.toLowerCase();
    console.log(char);

}
const inputbox = () => {
    return (
        <div>
            <input type="text" onChange={KeyUp} maxLength="1"></input>
        </div>
    )
}

export default inputbox
