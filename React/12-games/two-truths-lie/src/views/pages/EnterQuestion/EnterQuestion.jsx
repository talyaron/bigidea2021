import './EnterQuestion.css';
import { useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { onSnapshot, doc, getDoc, addDoc, collection } from 'firebase/firestore';

function EnterQuestions({user}) {

    console.log(user)

    const [questionAnswered, setquestionAnswered] = useState(true);
    const [answers, setAnswers] = useState("");

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log(ev);
        let true1 = ev.target.elements.truthOne.value, true2 = ev.target.elements.truthTwo.value, untrue = ev.target.elements.lie.value;

        //addDoc to DB
        const questionsRef = collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions');
        addDoc(questionsRef, {true1, true2, untrue, user});

        setquestionAnswered(false);
        setAnswers(`Truth 1: ${true1}, Truth 2: ${true2}, Lie: ${untrue}`);
    }



    return (
        <div className='Container'>
            {questionAnswered? <form className = 'form' onSubmit={handleSubmit}>
                <label className = 'label1' htmlFor = 'truthOne'> Enter first truth</label>
                <input type='text'name='truth1' id = 'truthOne' placeholder='truth' />
                <label className = 'label2' htmlFor = 'truthTwo'> Enter second truth</label>
                <input type='text' name='truth2' id = 'truthTwo' placeholder='truth' />
                <label className = 'label3' htmlFor = 'lie'> Enter lie</label>
                <input type='text' name='lie' id = 'lie'placeholder='lie' />
                <input className = 'submit' type='submit' value='submit' />
            </form> : <p>{answers}</p>}
        </div>
    )

}
export default EnterQuestions;