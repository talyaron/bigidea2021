import logo from './logo.svg';
import './App.css';
import { useRef, useState } from 'react';
import Land from './words/land.mp3'
import Sea from './words/sea.mp3'
import { db } from './functions/firebase/config';
import { doc, collection, setDoc, addDoc , query, where} from 'firebase/firestore'


function App() {
  const circle = useRef(null);
  const [display, setDisplay] = useState('inline')
  console.dir(circle);
  const seaSound = new Audio(Sea);
  const landSound = new Audio(Land);
  let instruction;
  let seaOrLandRef = doc(db, 'YB', 'seaOrLand');
  let playerName;
  let userChoice = true;

  function numPlayersleft(){
    const q = query(collection(db,'YB', 'Players', 'playerList', playerName));
    const querySnapshot = await getDocs(q);

    let onePlayerLeft = false;
    let playersLeft = 0;

    querySnapshot.forEach((doc)=>{

    })
  }

  function seaOrLand() {

    if ((Math.floor(Math.random() * 2) + 1) == 1) {
      seaSound.play()
      instruction = 'sea';
      setDoc(seaOrLandRef, {Answer: instruction})
    }
    else {
      landSound.play()
      instruction = 'land';
      setDoc(seaOrLandRef, {Answer: instruction})

    }
  }

  function checkAnswer(id) {
    let userAnswerRef = doc(db, 'YB', 'Players' , 'playerList', playerName);
    if (id == instruction) {
      console.log('true')
      setDoc(userAnswerRef, {userAnswer: id, userChoice: true});
      return (true)
    }
    else {
      setDoc(userAnswerRef, {userAnswer: id, userChoice: false});
      setDisplay('none');
      alert('You lost');
      return (false)
    }
  }




  function handleClick(ev) {
    console.log(ev)
    console.log(ev.target.id)
    const x = ev.clientX;
    const y = ev.clientY;
    circle.current.style.top = `${y - 50}px`;
    circle.current.style.left = `${x - 50}px`;
    if (checkAnswer(ev.target.id) == true) {
      setTimeout(function () { seaOrLand() }, 1000)
    }
  }
  function handleStart() {
      setTimeout(function () { seaOrLand() }, 1000)
  }

  function handleName(event) {
    event.preventDefault();

    playerName = event.target.elements.nameBox.value;
    console.log(playerName)
    const nameRef = doc(db, 'YB','Players', 'playerList', playerName);
    if (playerName.length > 0) {
      setDoc(nameRef, {name:playerName , userChoice:true});
    }
  }


  return (
    <div className="App">
      <div className='container' style = {{display: display}}>
      <div id="sea" className='boxblue' onClick={handleClick}></div>
      <div id="land" className='boxgreen' onClick={handleClick}></div>
      <div ref={circle} className='circle'></div>
      <form onSubmit={handleName}>
        <input type='text' placeholder='name' name='nameBox' />
        <input type='submit' value='submit' />
      </form>
        <input type= 'button' value ='start' onClick={handleStart}/>
        </div>
    </div>
  );
}

export default App;
