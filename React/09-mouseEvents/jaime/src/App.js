import './App.css';

import { setDoc, doc, onSnapshot, collection, updateDoc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useRef, useState } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import { db } from './functions/firebase/config';

const playersRef = collection(db, 'players');
let playerNameGlobal;

function App() {
  const circle = useRef(null);
  const [circleLocation, setCircleLocation] = useState('Sea'), [landSea, setlandSea] = useState(''), [color, setColor] = useState('green');
  const seaSound = new Audio(seaMP3), landSound = new Audio(landMP3);
  const [players, setPlayers] = useState([]);
  const [ContinueGame, setContinueGame] = useState(true);
  const [playersArr, setPlayersArr] = useState([]);
  const gameStartRef = doc(db, 'gameStart', 'start');

  useEffect(() => {

    const unsubscribe = onSnapshot(playersRef, playersDB => {

      playersDB.forEach(playerDB => {
        console.log(playerDB.data());
      });
      
      return () => { unsubscribe() }
    })

    // const checkgamestart = onSnapshot(gameStartRef, gameStartDB => {
      
    //   gameStartDB.forEach(startDB => {
    //     console.log(startDB.data());
    //     if(gameStart.data().gameStart === true) {
    //       gameStart();
    //     } else {
    //       console.log("Awaiting Start");
    //     }
    //   });

    // })

  }, [])

  function setScoreboard() {
    const tempPlayersArr = [];
    const playersRef = collection(db,'players');
    getDocs(playersRef).then(playersDB => {
      
      playersDB.forEach(playerDB => {
        let data = playerDB.data();
        tempPlayersArr.push({name:data.name, score:data.score});
        
        
      });
      setPlayersArr(tempPlayersArr);
    })
  }

  function checkGameStart (){

    updateDoc(gameStartRef, {

      gameStart: true
    })

  }

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
    
    //set DB to startGame
  }

  //check answer
  function checkAnswer(id, name) {
    if (id === landSea) {
      console.log('true');

      let playerNameRef = doc(db, 'players', name);
      getDoc(playerNameRef).then(docDB => {

        let currentScore = docDB.data().score;
        currentScore += 1;
        const playerNameRef = doc(db, 'players', name);
        updateDoc(playerNameRef, {
        score: currentScore
      })

        setScoreboard();
      })

      return (true);
    }
    else {
      alert('Game over.');
      const playerNameRef = doc(db, 'players', name);
      updateDoc(playerNameRef, {
        isAlive: false
      })
      setContinueGame(false);
      return (false);
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

    if (checkAnswer(location, playerNameGlobal) === true) {


      console.log(playersArr);
      //check here if players are left
      gameStart();
    }
  }

  function handleSubmit(ev) {
    ev.preventDefault();
    const playerName = ev.target.elements.nameBox.value;
    playerNameGlobal = playerName;

    const playerRef = doc(db, "players", playerName);
    setDoc(playerRef, {
      score: 0,
      isAlive: true,
      name: playerName
    });
  }

  return (
    <div>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" placeholder='Enter your name' name="nameBox" />
        <input type="submit" value='Submit' />
      </form>

      <div className="game">
      {ContinueGame? <button onClick ={checkGameStart} className="start">Start Game</button>: null}
      {ContinueGame? <div id='Sea' className='box blue' onClick={handleClick} /> : <p>You're out</p>}
      {ContinueGame? <div id='Land' className='box brown' onClick={handleClick} />: null}
      {ContinueGame? <div id='redC' ref={circle} className='circle' />: null}
      {ContinueGame? <div className='landSea'>{landSea}</div>: null}
      {ContinueGame? <div className='row' style={{ background: color }}></div>: null}

      <div className="scoreboard">
        <p>Scoreboard</p>
        <div>
        {playersArr.map((player, i) => {
                    return (<div key={i}>{player.name}:{player.score}</div>)
                }
                )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
