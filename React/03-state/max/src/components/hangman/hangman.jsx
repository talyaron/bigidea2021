import './Hangman.css'
import {useState} from 'react';


function Hangman(){

    const [color, setColor] = useState('red')
    let word = 'red'
         
    
    function handleSubmit(ev){
        guess = ev.target.value
        for(let i=0; i<= word.length; i++)
            if (guess == word.substring(i, i+1)){
                console.log('!!!!!!!!!!! CORRECT LET')
                setColor('green')
            }
            else {
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

        

        
        
    

    }

    return (
        <div className='cont'>
            <input type="text" name="textinput" onKeyUp={handleSubmit} />
            <div className='box' style={{ background: color }} ></div>
        </div>



    )
}

export default Hangman;