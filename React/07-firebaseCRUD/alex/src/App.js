import { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, setDoc } from 'firebase/firestore';

function App() {
  let namePicked = "";
  let imgPicked = "";



  function handleUpdate(ev) {
    ev.preventDefault();

    namePicked = ev.target.elements.nameInput.value;
    imgPicked = ev.target.elements.imgInput.value;

    const userRef = doc(db, 'users', 'me')
    setDoc(userRef, { name: namePicked, image: imgPicked })
  }

  return (
    <div className="App">
      <header className="App-header">
        <form className='inputContainer' onSubmit={handleUpdate}>
          <input type='text' name='nameInput' placeholder='name' />
          <input type='text' name='imgInput' placeholder='imgURL'></input>
          <input type="submit" value='Enter'></input>
        </form>
      </header>
    </div>
  );
}

export default App;
