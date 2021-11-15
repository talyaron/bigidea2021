import './App.css';
import {db} from './functions/firebase/config';
import {useEffect, useState} from 'react';
import {doc, setDoc} from 'firebase/firestore';


function App() {

  //Use effect is meant to run only once when the code is activated, 
  //prevents an endless loop while the user is online

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function makeChanges(ev){
    setImage(ev.target.elements.imageBox.value);
    setName(ev.target.elements.nameBox.value);
  }

  function handleConfirmChanges(ev){
    makeChanges(ev);
    setDoc(doc(db, 'users', 'me'), {name: {name}, image: {image}})
  }

  return (
    <div className="App">
      <form onSubmit = {handleConfirmChanges}>
        <input type='text' name='nameBox' placeholder='Enter the name of the user here'></input>
        <input type='text' name='imageBox' placeholder='Enter the image url for the user here'></input>
        <input type='button' id='setButton'></input>
      </form>
      <h1>{name}</h1>
      
    </div>
  );
}

export default App;
