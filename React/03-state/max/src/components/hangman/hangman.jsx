import './hangman.css'
import {useState} from 'react';




function WordGuess(){
    const[guess, setword] = useState()
    let word = 'red'
    var pieces = word.split("");
    console.log(pieces)
   
    function handleSubmit(ev){
       let guess = ev.target.value
       for(let i=0; i<= pieces.length; i++)
            if (guess == pieces.substring(i)){
                console.log('!!!!!!!!!!! CORRECT LET')
            }
            else{
                console.log("no :(")
            }

    }

    return(
        <div className = 'cont'>
        <input type="text" name="textinput" onSubmit={handleSubmit}/>
        <input type="submit" name= 'submit' value='submit'></input>
        </div>

    )
}

export default WordGuess;