import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { useRef, useState } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';

function App() {
	const circle = useRef(null);
	const [circleLocation, setCircleLocation] = useState('Sea');
	const [landSea, setlandSea] = useState('Sea');
	const [color, setColor] = useState('green');
  const seaSound = new Audio(seaMP3);
  const landSound = new Audio(landMP3);

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
      return(true)
      
    }
    else{
      alert('dumb ass mf')
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
    

	}

	return (
		<div>
			<div id='start' className='start' onClick={gameMec}>
				start game
			</div>
			<div id='Sea' className='box blue' onClick={handleClick}></div>
			<div id='Land' className='box brown' onClick={handleClick}></div>
			<div id='redC' ref={circle} className='circle'></div>
			<div className='landSea'>{landSea}</div>
			<div className='row' style={{ background: color }}></div>
		</div>
	);
}

export default App;