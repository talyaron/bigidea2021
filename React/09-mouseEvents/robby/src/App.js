import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';
import {doc, setDoc, getDoc, onSnapshot, collection} from 'firebase/firestore';
import {ref, getDatabase, onValue} from 'firebase/database';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import {db} from './functions/firebase/config'
import { FirebaseError } from '@firebase/util';
let highestScore = 0;
let highestPlayer = "";
const seaSound = new Audio(seaMP3);
const landSound = new Audio(landMP3);
let isPlaying = true;
let player= "";
let score= 0;
let scoreArr=[];

function App() {
	//await setDoc(doc(db, "players", "user"))
  
  const circle = useRef(null);
	const [circleLocation, setCircleLocation] = useState('Sea');
	const [landSea, setlandSea] = useState('Sea');
	const [color, setColor] = useState('green');
  const highScoreRef = doc(db, 'players', 'landOrSeaSetter');
  const docSnap = getDoc(highScoreRef);
 

  //Runs during the first round
  function handleNameSubmit(ev){

    ev.preventDefault();
    const name= ev.target.elements.name.value;
    player = name;

    if(name === ''){
      alert('Cannot display an empty name! Please fill the name and try again.')
    } else {

      ev.target.elements.name.style.display= "none";
      ev.target.elements.submit.style.display= "none";
      isPlaying =true;
   
      //eventually will need to change the id to a random generated ID instead of the name
      
      setDoc(doc(db, "players", `${name}`),{
        name: name,
        isPlaying: isPlaying,
        score: score
      });

      gameMec();
    }
  }

  function checkPlayers(){
    const db= getDatabase();
    const dbRef= ref(db, "landOrSea/players");
    var anyPlayersPlaying = false;
    onValue(dbRef, (snapshot)=>{
      snapshot.forEach(function(childNodes){
        if(childNodes.val().isPlaying === true){
          anyPlayersPlaying = true;
        }
      });
    });

    return anyPlayersPlaying;
  }

	function gameMec() {
    

    let tempLandSea;
		let i = Math.floor(Math.random() * 2); 
			if (i === 1) {
				tempLandSea = 'Sea';
				console.log('Sea');
        seaSound.play()
			} else {
				tempLandSea = 'Land'
				console.log('Land');
        landSound.play()
			} 
    setlandSea(tempLandSea)
	}
  function checkAnswer(id){
    if(id === landSea){
      console.log('true')
      score++;
      console.log("hi");
      console.log(score)

      return(true)
      
    }
    else{
      alert('dumb ass mf')
      isPlaying= false;
      return(false)
    }
  }


	function handleClick(ev) {
    ev.preventDefault();
		let location = ev.target.id;
		const x = ev.clientX;
		const y = ev.clientY;
		circle.current.style.top = `${y - 5}px`;
		circle.current.style.left = `${x - 5}px`;
    setCircleLocation(location);
		if (checkAnswer(location) === true){
      gameMec()
    }
    else if( checkPlayers() === true){
      //Kept in a still state where the scoreboard updates but the player cannot continue
    }
    else {
    //Player is out and there are no players left playing
    const playersRef = collection(db, 'players');
    onSnapshot(playersRef,playersDB=>{
      const playersList = [];
      playersDB.forEach(playerDB=>{
        let data = playerDB.data();
        scoreArr.push(data.score);
        if(data.score > highestScore){
          highestScore = score;
          highestPlayer = player;
        }
      })
      alert(`you all suck, but ${highestPlayer} sucks the least because they got ${highestScore} points. Be Better.`)
      console.log(`Your score is: ${player} = ${score}`)
    })
  }
      
    }


    return (
      <div>
        <form onSubmit={handleNameSubmit}>
          <input name= "name" type= "text"/>
          <input name="submit" type= "submit" value= "Confirm"/> 
        </form>

        <div id='Sea' className='box blue' onClick={handleClick}></div>
        <div id='Land' className='box brown' onClick={handleClick}></div>
        <div id='redC' ref={circle} className='circle'></div>
        <div className= 'Scoreboard'>
          {scoreArr.map((points, i) => {
            return(<div key={i}>{points.name}:{points.score} </div>)
          })
          }
        </div>
        <div className='landSea'>{landSea}</div>
        <div className='row' style={{ background: color }}></div>
      </div>
    );
    

	}



export default App;
/* 
      <div id='start' className='start' onClick={gameMec}>
				start game
			</div> 
*/