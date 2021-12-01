import './EnterQuestion.css';
import { useState } from 'react';
import { db } from '../../../functions/firebase/config';
import { onSnapshot, doc, getDoc,  } from 'firebase/firestore';

function EnterQuestions() {

    const [questionAnswered, setquestionAnswered] = useState(true);
    const [answers, setAnswers] = useState("");

    function handleSubmit(ev) {
        ev.preventDefault();
        console.log(ev);
        let truth1 = ev.target.elements.truthOne.value, truth2 = ev.target.elements.truthTwo.value, lie = ev.target.elements.lie.value;

        let Answers = {truth1: truth1, truth2: truth2, lie: lie};
        console.log(Answers);
        setquestionAnswered(false);
        setAnswers(Answers);
    }



    return (
        <div className='Container'>
            {questionAnswered? <form className = 'form' onSubmit={handleSubmit}>
                <label className = 'label1' for = 'truthOne'> Enter first truth</label>
                <input type='text'name='truth1' id = 'truthOne' placeholder='truth' />
                <label className = 'label2' for = 'truthTwo'> Enter second truth</label>
                <input type='text' name='truth2' id = 'truthTwo' placeholder='truth' />
                <label className = 'label3' for = 'lie'> Enter lie</label>
                <input type='text' name='lie' id = 'lie'placeholder='lie' />
                <input className = 'submit' type='submit' value='submit' />
            </form> : <p>Truth 1:{answers.truth1}, Truth 2:{answers.truth2}, Lie:{answers.lie}</p>}
        </div>
    )

}
export default EnterQuestions;