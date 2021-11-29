import './App.css';
import { db } from './functions/firebase/config';
import {
	doc,
	setDoc,
	addDoc,
	collection,
	updateDoc,
	onSnapshot,
	query,
	getDoc,
} from 'firebase/firestore';
import { useRef, useState, useEffect } from 'react';
import seaMP3 from './words/sea.mp3';
import landMP3 from './words/land.mp3';

function App() {
	const circle = useRef(null);
	const [playerName, setPlayerName] = useState('');
	const [playerColor, setPlayerColor] = useState('gray');
	const [landSea, setLandSea] = useState('Sea');
	const [playerList, setPlayerList] = useState([]);
	const seaSound = new Audio(seaMP3);
	const landSound = new Audio(landMP3);
	let GameStart = false;
	let enteredName = false;
	let stop = true;
	let playerListRef;
	let gameDataRef = doc(db, 'SoL', 'game');
	let playerIn = true; // onSnapshot the players isAlive value

	useEffect(() => {
		// attempting to snapshot game start and round time
		const playersListRef = collection(db, 'SoL', 'players', 'playerList')
		onSnapshot(playersListRef, playersDB => {
			const playersArr = [];
			playersDB.forEach(playerDB => {
				playersArr.push(playerDB.data())
			})
			console.log(playersArr)
		})
	}, []);

	function handleSubmit(ev) {
		ev.preventDefault();
		let playerColorTemp = ev.target.elements.playerColor.value;
		setPlayerColor(playerColorTemp);
		let playerNameTemp = ev.target.elements.playerName.value;
		setPlayerName(playerNameTemp);
		playerListRef = doc(
			db,
			'SoL',
			'players',
			'playerList',
			`${playerNameTemp}`
		);
		setDoc(playerListRef, {
			playerName: `${playerNameTemp}`,
			userColor: `${playerColorTemp}`,
			playerScore: 0,
			isAlive: true,
			isStarter: false,
		});
		enteredName = true;

		console.log('HSub ping', 'enters name ', enteredName);
	}

	function handleStart() {
		if (enteredName == true) {
			GameStart = true;
			console.log(GameStart, 'game start')
			updateDoc(playerListRef, {
				isStarter: true,
			}).then(
				updateDoc(gameDataRef, {
					gameStart: true,
				})
			);
		}
		console.log('Hstart ping');
		gameMec();
	}

	function gameMec() {
		console.log('ping');
		setTimeout(youLose, 2000); // make the time connected to the server
		let tempLandSea;
		let i = Math.floor(Math.random() * 2);

		if (i === 1) {
			tempLandSea = 'Sea';
			seaSound.play();
		} else {
			tempLandSea = 'Land';
			landSound.play();
		}
		setLandSea(tempLandSea);
	}
	function checkAnswer(id) {
		if (id === landSea) {
			stop = false;
			updateDoc(playerListRef, {
				playerScore: +1, // make this work properly
			});
			return true;
		} else {
			stop = true;
			return false;
		}
	}

	function handleClick(ev) {
		console.log('click', GameStart, 'game start = ')
		if (GameStart !== false) {
			let location = ev.target.id;
			const x = ev.clientX;
			const y = ev.clientY;
			circle.current.style.top = `${y - 5}px`;
			circle.current.style.left = `${x - 5}px`; // is i want make all the players show up and locations updated on server
			if (checkAnswer(location) === true) {
				gameMec();
			}
		}
	}
	function youLose() {
		if (stop === true) {
			debugger
			updateDoc(playerListRef, {
				isAlive: false,
			});
			alert('You lost :(');
		}
		stop = true;
	}
	if (playerIn != true) {
		// conditional render so once you lose all you see is score board
		return (
			<div>You are out, your score was #scoreHere#</div>

			//.map all the players
		);
	} else {
		return (
			<div>
				<form onSubmit={handleSubmit}>
					<input type='text' name='playerName' placeholder='Enter your name' />
					<input type='text' name='playerColor' placeholder='Pick a color' />
					<input type='submit' />
				</form>

				<div id='start' className='start' onClick={handleStart}>
					start game
				</div>
				<div id='Sea' className='box blue' onClick={handleClick}></div>
				<div id='Land' className='box brown' onClick={handleClick}></div>
				<div
					id='redC'
					ref={circle}
					className='circle'
					style={{ background: playerColor }}>
					{playerName}
				</div>
				<div className='landSea'>{landSea}</div>

				{playerList.map(({ playerName, userColor, isAlive, playerScore }) => (
					<div className='nameList'>
						{playerName} Playing as the color:{userColor}
						<br />
						Score:{playerScore}
						<br />
						is still playing: {isAlive}
					</div>
				))}
			</div>
		);
	}
}
export default App;
