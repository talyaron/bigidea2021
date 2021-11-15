import './wordReader.css';
import { useEffect, useState } from 'react';
import { db } from './functions/firebase/config';
import { doc, onSnapshot, setDoc, updateDoc, deleteDoc } from 'firebase/firestore';


function wordReader() {

    const [text, setText] = useState('');

    useEffect (() => {
        const wordsRed = doc(db, 'sentence', 'newWord')
    })

    function handleSubmitWord (ev) {
        //
    }

    return(
        <div>
            <form onSubmit={handleSubmitWord}>
                <input type='text' placeholder="Type your word here" />
                <input type='submit' value="Submit" />
            </form>
            <div name="textBox" />
        </div>
    )
}

export default wordReader;