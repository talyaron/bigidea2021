import {useState} from "react";
import './Hangman.css';

function Hangman(){

    let word= [], dashes= [], guessWord;
    const[color, setColor] = useState('white');
    const [width, setWidth] = useState(400);
    const [showResults, setShowResults] = useState('block');
    const [guessWordArray, setGuessWordArray] = useState([]);

    
    function handleCheckText(ev) {
        let value = ev.target.value, char = value.slice(-1);
        console.log(char);
        checkText(char);
    }
    function checkText(letter) {

        letter = letter.toLowerCase();
        var format = letter;
        

        if(guessWord.match(format)) {
            console.log(true);
          
            setColor('green');   
            setWidth(300);        
        } else {
            console.log(false);
            
            setColor('red');
            setWidth(500);
        }
    }
    function handleSubmit(ev){
        ev.preventDefault();
        guessWord= ev.target.elements.hidden.value;
        let wordarr =guessWord.split("");
        console.log(wordarr);
        ev.target.style.display = "none"
        for(let i=0; i<wordarr.length; i++){
            word.push(wordarr[i]);
            dashes[i]= "_"
        }


        /*for full hangman make for loop that goes through each letter and if its equal replace the dash in
         word2 arr to the real letter */
    }
    return( 
        <div className="hangman">
            <form onSubmit={handleSubmit}>
                <input type= "password" name= "hidden" placeholder="Type your word here" onChange={handleCheckText}/>
                <input type= "submit" value="Skadoosh" />
                <input type= "text" name= "guess" />
  
            </form>
       
            <div className="wrapper"></div>
            <p></p>
            {
            dashes.map((letter, index) => {
                return(<p key={index}>"{letter}"</p>)
            })
        }
        </div>

    )

}

export default Hangman;