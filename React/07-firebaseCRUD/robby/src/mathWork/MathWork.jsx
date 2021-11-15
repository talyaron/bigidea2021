import { db } from '../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react';


function setUserInfo() {

    function handleSubmit(ev) {

        ev.preventDefault();
        const setName= ev.target.elements.userName.value;
        const hideName= ev.target.elements.userName;
        const setSolution= Number(ev.target.elements.solution.value);
        console.log(ev)
        console.log(ev.target.elements.userName.value)
        console.log(ev.target.elements.solution.value)
        setDoc(doc(db, 'answers', 'answer'), {answer: setSolution, name: setName});
        hideName.style.display = 'none';

        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name Here' name="userName" />
            <input type="number" placeholder='Input solution Here' name="solution" />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default setUserInfo;