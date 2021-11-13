import {useState} from 'react';
import './MessageApp.css'

function MessageApp(){
    let userIndex = 0;
    const [textBoxSide, setSide] = useState('start'); //start at left side of the grid
    const [textMessageValue, setTextValue] = useState('');

    function setMessageSide(ev){
        if(userIndex == 0){
            setSide('start');
        } else {
            setSide('end');
        }
    }

    function handleTextBoxUpdate(ev){
        setTextValue(ev.target.value);
    }

    function handleMessageSubmit(){
        //Create a new text box below the most recent text box.
        //Push all the previous text boxes up a level,
        //  or allow the user to scroll down to the new text box.
        //After making the new text box with the textMessageValue,
        //  set the text value to empty with setTextValue(''); and
        //  clear the text box.
    }
/*
    return(
        <div className = 'container'>     
            //Will switch sides for text boxes, registers as a change in user
            <input
                className = 'switchUserButton'
                type='button'
                value='Choose user side'
                id = 'userSideChooser'
                onClick={setMessageSide}>
            </input>

            <div className = 'textInputForm'>
                //For inputting text as a user
                <input 
                    className = 'textInput'
                    type='text'
                    placeholder='Input Your Message Here:'
                    onChange={handleTextBoxUpdate}>
                </input>

                <input
                    className = 'textSubmitButton'
                    type='button'
                    value='Confirm Text Box'
                    onClick={handleMessageSubmit}>
                </input>
            </div>
            
        </div>
    )
*/
}

export default MessageApp;