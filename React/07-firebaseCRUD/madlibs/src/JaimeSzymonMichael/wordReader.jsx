import './wordReader.css';
import { useEffect, useState } from 'react';
import { db } from '../functions/firebase/config';
import { doc, onSnapshot, setDoc, updateDoc, deleteDoc, addDoc, collection } from 'firebase/firestore';

let tempWord = "";


function WordReader() {

    const [text, setText] = useState('');

    useEffect (() => {
        const wordsRef = collection(db, 'sentence');
        onSnapshot(doc(db, 'users', 'activeUser'), userDB => {
            console.log(userDB.data());
            //tempWord = wordsDB.data().word;
        })
        
    }, []);

    function handleSubmitWord (ev) {
        ev.preventDefault();

        // let randName = /* Random name */;
        // let submitName = /* name of person submitting word*/;

        // if(submitName === randName) {
        //     let word = ev.target.elements.wordBox.value;
        //     addDoc(doc(db, 'sentence', 'word'), {word: tempWord});
        // } else {
        //     return;
        // }
    }

    return(
        <div>
            <form onSubmit={handleSubmitWord}>
                <input type='text' placeholder="Name" name="nameBox"/>
                <input type='text' placeholder="Type your word here" name="wordBox"/>
                <input type='submit' value="Submit" />
            </form>
            <div name="textBox" />
        </div>
    )
}

export default WordReader;