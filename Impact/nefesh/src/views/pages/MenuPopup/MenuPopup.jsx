import "./MenuPopup.css";
import React from "react";




  function MenuPopup (){ 

    function handleClick(){
        console.log('hi')
    }

return (
<div className="container">

    <div className="Menu">
        <p>Menu</p>
    </div>

    <div className="Logout">
        <button onClick={handleClick}>
        Logout
        </button>
    </div>

    <div className="Profile">
        <button onClick={handleClick}>
            Profile
        </button>
    </div>

    <div className="Admin Page">
        <button onClick={handleClick}>
            Admin Page
        </button>
    </div>
    
</div>
)
}

export default MenuPopup;