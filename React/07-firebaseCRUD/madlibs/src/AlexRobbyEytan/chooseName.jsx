import { db } from '../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react';


function setUserInfo() {
    const docRef = doc(db,'names','name');
    

    

    function handleSubmit(ev) {
        ev.preventDefault();

          getDoc(docRef).then(docSnap=>{
            let tempArray = docSnap.name;
            let randName= tempArray[Math.Floor(Math.random()*tempArray.length)];
            console.log(randName);
          })
      


        
       // let randName= tempArray[Math.Floor(Math.random()*tempArray.length)];
       // console.log(randName);

        
        
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Pick Random Name Doofus" />
        </form>
    );
}

export default setUserInfo;