import './App.css';

import { doc, onSnapshot, collection, updateDoc, addDoc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import { db } from './functions/firebase/config';

const playersRef = collection(db, 'players');
const getAllPlayers = [];

  function App() {
	const circle = useRef(null);
	const [circleLocation, setCircleLocation] = useState('Sea'), [landSea, setlandSea] = useState(''), [color, setColor] = useState('green');
  const seaSound = new Audio(seaMP3), landSound = new Audio(landMP3);
  const [players, setPlayers] = useState([]);

  useEffect(()=>{

    onSnapshot(playersRef, playersDB => {
      //
     
      playersDB.forEach(playerDB=>{
        console.log(playerDB.data());
      })
    
    })
  
  },[])

	function gameStart() {
    let tempLandSea;
		let i = Math.floor(Math.random() * 2);
			if (i === 1) {
				tempLandSea = 'Sea';
				console.log('Sea');
        seaSound.play();
			} else {
				tempLandSea = 'Land';
				console.log('Land');
        landSound.play();
			} 
    setlandSea(tempLandSea);
	}

  //check answer
  function checkAnswer(id, name){
    if(id === landSea){
      console.log('true');

      if(getAllPlayers.contains(name)) {
        getAllPlayers[name] += 1;
      } else {
        // getAllPlayers.push([])
      }
      return(true);
    }
    else{
      alert('Game over.');
      //run game over function for indivdual player
      //hide all elements except scoreboard for individual player
      return(false);
    }
  }

	function handleClick(ev) {
		let location = ev.target.id;
		const x = ev.clientX;
		const y = ev.clientY;
		circle.current.style.top = `${y - 5}px`;
		circle.current.style.left = `${x - 5}px`;
    setCircleLocation(location);
    console.log(location);

    // let name = ev.target.elements.nameBox.value;
    let name;
		if (checkAnswer(location, name) === true){
      gameStart();
    }
    

	}

	return (
		<div>
      <input type="text" placeholder='Enter your name' name="nameBox"/>
			<div id='start' className='start' onClick={gameStart}>Start Game</div>
			<div id='Sea' className='box blue' onClick={handleClick} />
			<div id='Land' className='box brown' onClick={handleClick} />
			<div id='redC' ref={circle} className='circle' />
			<div className='landSea'>{landSea}</div>
	    <div className='row' style={{ background: color }}></div>

      <p>players</p>
		</div>
	);
}

export default App;
