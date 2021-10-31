import './hangman.css'
import {useState} from 'react';




function WordGuess(){
    const[guess, setword] = useState()
    let word = 'red'
    let pieces = word.split("");
    console.log(pieces)
    
   
    function handleSubmit(ev){
        let [color, setColor] = useState('red')
       let guess = ev.target.value
       for(let i=0; i<= pieces.length; i++)
            if (guess == pieces[i]){
                console.log('!!!!!!!!!!! CORRECT LET')
                let [color, setColor] = useState('green')
            }
            else{
                console.log("no :(")
            }

    }

    return(
        <div className = 'cont'>
        <input type="text" name="textinput" onKeyUp={handleSubmit}/>
        <div className= 'box' style= {{background: color}} ></div>
        </div>



    )
}

export default WordGuess;