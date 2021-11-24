import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';
import {doc, setDoc} from 'firebase/firestore';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';
import {db} from './functions/firebase/config'
import { FirebaseError } from '@firebase/util';


function App() {
	//await setDoc(doc(db, "players", "user"))
  const circle = useRef(null);
	const [circleLocation, setCircleLocation] = useState('Sea');
	const [landSea, setlandSea] = useState('Sea');
	const [color, setColor] = useState('green');
  const [playing, setPlaying ]= useState(false);
  const [score, setScore ]= useState(0);
  const [player, setPlayer]= useState("");
  const [highScore, setHighScore]= useState(0);
  const [highPlayer, setHighPlayer]= useState("");


  const seaSound = new Audio(seaMP3);
  const landSound = new Audio(landMP3);
  
  //Runs during the first round
  function handleNameSubmit(ev){

    ev.preventDefault();
    const name= ev.target.elements.name.value;
    setPlayer(name);

    if(name === ''){
      alert('Cannot display an empty name! Please fill the name and try again.')
    } else {

      ev.target.elements.name.style.display= "none";
      setPlaying(true);
      //eventually will need to change the id to a random generated ID instead of the name
      setDoc(doc(db, "players", `${name}`),{
        name: name,
        isPlaying: playing,
        score: score
      });

      gameMec();
    }
  }

  function checkPlayers(){
    var anyPlayersPlaying = false;
    FirebaseError.database().ref("landOrSea/players").on('value', function(snap){
      snap.forEach(function(childNodes){
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
      setScore(score+1);

      return(true)
      
    }
    else{
      alert('dumb ass mf')
      setPlaying(false);
      return(false)
    }
  }




	function handleClick(ev) {
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
      
    } else {
    FirebaseError.database().ref("landOrSea/players").on('value', function(snap){
        snap.forEach(function(childNodes){
          if(score>highScore){
            setHighScore(score);
            setHighPlayer(player);
          }
        });
      });
      }
      alert(`you all suck, but ${highPlayer} sucks the least because they got ${highScore} points. Be Better.`)
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