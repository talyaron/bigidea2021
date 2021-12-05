import '.game.css';
import { db } from './firebase/config.js';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc, onSnapshot, collection,query,getDocs } from 'firebase/firestore';

let questionsRef
let questionsArr = []
let q
function App() {
  

  useEffect(() => {
    
    async function OnStartup() {
      //questionsRef = await collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions')
      q = query(collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions'));
      const querySnapshot = await getDocs(q);
      let i=1;
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        let tempObj = {
          name: data.user.name,
          true1: data.true1,
          true2: data.true2,
          untrue: data.untrue,
          index:i
        }
       i++;
        questionsArr.push(tempObj)
        console.log(questionsArr);
      })
    }
    OnStartup();
   
  }, []);

  function nextRound(){
    let indexChosen=Math.floor(Math.random()*questionsArr.length);
    let data=questionsArr[indexChosen]
    const useRef=doc(db,'true-lie','qocj2PnYZcvmDXOf4mCn')
    updateDoc(useRef,{selectedQuestion:{
      true1:data.true1,
      true2:data.true2,
      untrue:data.untrue,
      user:{name:data.name}
    }})
  }
  let randomLiePosition;



  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3)
    console.log(randomNumber);
    return (randomNumber);
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);


  return (
    <div className="App">
      <button onClick={nextRound}>My Name Jeff</button>
    </div>
    
  );
}

export default App;
