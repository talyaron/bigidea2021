import { db } from '../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot } from 'firebase/firestore'
import { useState } from 'react';


function App() {
    const docRef = doc(db,'names','name');
    const [randName, setRandName] = useState('')
    

    

    function handleSubmit(ev) {
        ev.preventDefault();

          getDoc(docRef).then(docSnap=>{
            let tempArray = docSnap.data().name;
            let randName1= tempArray[Math.floor(Math.random()*tempArray.length)];
            setRandName(randName1);
            
          })
      


        


        
        
    }

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <input type="submit" value="Pick Random Name Doofus" />
        </form>
        <div>{randName}</div>
        </div>
    );
}

export default App;