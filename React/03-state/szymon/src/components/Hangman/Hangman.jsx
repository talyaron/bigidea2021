import {useState} from "react"
import "./Hangman.css"

let word=['a','b','c','d','e','f']

function Hangman() {

    const [password, setPassword] = useState();
    const [showDom, setShowDom] = useState('block');


    function handleSubmit(ev) {
        ev.preventDefault();

        setPassword(ev.target.elements.pass1.value);
        // document.getElementById("container").style.display = 'none';
        setShowDom('none');
    }

    return (
        <div>
            <form onSubmit={handleSubmit} id='container' style={{ display: showDom }}>
                <input type="password" name='pass1' placeholder="Enter Password"></input>
                <input type='submit'></input>
            </form>
            <div className="wrapper">
                {
                    word.map((letter,index)=>{
                        return (<div key={index}>{letter}</div>)
                    })
                }
            </div>
            <div className="head"></div>
            <div className="body"></div>
            <div className="arm1"></div>
            <div className="arm2"></div>
            <div className="leg1"></div>
            <div className="leg2"></div>
        </div>
    )

}
    export default Hangman