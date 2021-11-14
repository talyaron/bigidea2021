import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc } from 'firebase/firestore';

function App() {

  const [name, setName] = useState('');
  const [image, setImage] = useState('');

  function handleSet(ev) {
    setName(ev.target.elements.nameBox.value);
    setImage(ev.target.elements.imgBox.value);
    updateDoc(doc(db, 'users', 'me'), {name: {name}, image: {image}})
  }

  useEffect(() => {
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef, {name:'Jaime', image:'https://spoilerguy.com/wp-content/uploads/2020/12/one-piece-cover-stories-1.jpg'})
  },[]);

  return (
    <div className="App">
      <form onSubmit={handleSet}>
      <input type='text' placeholder='Enter your name' name='nameBox'/>
      <input type='text' placeholder='Enter your image url' name='imgBox'/>
      <input type='submit' id='setButton' value='OK'></input>
      </form>
    </div>
  );
}

export default App;
