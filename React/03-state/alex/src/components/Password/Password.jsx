import React, {useState} from 'react';
import "./Password.css";

function Password(){

    const[password, setPassword] = useState();


    function handleSubmit(ev){
        ev.preventDefault();

        setPassword(ev.target.elements.pass1.value);
        document.getElementById("container").style.display = 'none';
    }

    return(
        <div>
            <form onSubmit={handleSubmit} id='container'>
            <input type="password" name='pass1' placeholder="Enter Password"></input>
            <input type='submit'></input>
            </form>

        </div>
    )

}
export default Password;