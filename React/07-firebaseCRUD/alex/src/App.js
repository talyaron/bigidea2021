import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc,setDoc } from 'firebase/firestore';

function App() {
  let namePicked = "";
  let imgPicked = "";

  useEffect(()=>{
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef,{name:namePicked,image:imgPicked})
  },[])

  function handleUpdate(ev){
    namePicked=document.getElementById("nameInput").value;
    imgPicked=document.getElementById("imgInput").value;
    
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef,{name:namePicked,image:imgPicked})
  }

  return (
    <div className="App">
      <header className="App-header">
      <div className = 'inputContainer' >
                    <input type = 'text' id='nameInput' placeholder = 'name' />
                    <input type = 'text' id = 'imgInput' placeholder = 'imgURL'></input>
                    <input type="button" value = 'enter' onClick={handleUpdate}></input>
                </div>
      </header>
    </div>
  );
}

export default App;
