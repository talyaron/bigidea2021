import './App.css';
import {db} from './functions/firebase/config';
import {useEffect, useState} from 'react';
import {doc, setDoc, updateDoc} from 'firebase/firestore';


function App() {

  //Use effect is meant to run only once when the code is activated, 
  //prevents an endless loop while the user is online

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  useEffect(()=>{
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef, {name: 'Elliot', image: 'https://newfastuff.com/wp-content/uploads/2019/10/66-2LFAMKa.png'})
  },[]);


  function handleConfirmChanges(){
    updateDoc(doc(db, 'users', 'me'), {name: {name}, image: {image}})
  }

  function handleImageUpdate(ev){
    setImage(ev.target.value);
  }

  function handleNameUpdate(ev){
    setName(ev.target.value);
  }

  return (
    <div className="App">
      <input type='text' id='nameBox' placeholder='Enter the name of the user here' onChange={handleNameUpdate}></input>
      <input type='text' id='imageBox' placeholder='Enter the image url for the user here' onChange={handleImageUpdate}></input>
      <input type='button' id='setButton'></input>
    </div>
  );
}

export default App;
