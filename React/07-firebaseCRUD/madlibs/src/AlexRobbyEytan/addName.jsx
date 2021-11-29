import { db } from '../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react';


function setUserInfo() {
    let tempArray = [];

    function handleSubmit(ev) {

        console.log('Ping')
        const setName= ev.target.elements.userName.value;
        tempArray.push(setName)
        console.log(tempArray);

        ev.preventDefault();
        const docRef = doc(db,'names','name');
        

        setDoc(doc(db, 'names', 'name'), {name: tempArray});
       

        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder='Input Name Here' name="userName" />
            <input type="submit" value="Submit" />
        </form>
    );
}

export default setUserInfo;