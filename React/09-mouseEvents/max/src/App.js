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
let GameStart = false;
let enteredName = false;
let stop = true;
const gameDataRef = doc(db, 'SoL', 'game');
let playerIn = true;
let playerScoreCur = 0


function App() {
	const circle = useRef(null);
	const [playerName, setPlayerName] = useState('');
	const [playerColor, setPlayerColor] = useState('gray');
	const [landSea, setLandSea] = useState('Sea');
	const [playerList, setPlayerList] = useState([]);
	const seaSound = new Audio(seaMP3);
	const landSound = new Audio(landMP3);
	let playerListRef;

	useEffect(() => {
		const playersListRef = collection(db, 'SoL', 'players', 'playerList')
		onSnapshot(playersListRef, playersDB => {
			const playersArr = [];
			playersDB.forEach(playerDB => {
				playersArr.push(playerDB.data())
			})
			console.log(playersArr)
			setPlayerList(playersArr)
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

	}

	function handleStart() {
		if (enteredName == true) {

			const playerListRef = doc(
				db,
				'SoL',
				'players',
				'playerList',
				`${playerName}`
			);
			GameStart = true;
			updateDoc(playerListRef, {
				isStarter: true,
			}).then(
				updateDoc(gameDataRef, {
					gameStart: true,
				}).catch(err => {
					console.error(err)
				})
			).catch(err => {
				console.error(err)
			});
		}
		gameMec();

	}

	function gameMec() {
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
		try {
			if (id === landSea) {
				stop = false;
				playerScoreCur++
				return true;
			} else {
				stop = true;
				return false;
			}
		} catch (err) {
			console.error(err)
		}
	}

	function handleClick(ev) {
		try {
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
		} catch (err) {
			console.error(err)
		}
	}
	function youLose() {
		const playerRef = doc(db, 'SoL', 'players', 'playerList', playerName)
		if (stop === true) {

			updateDoc(playerRef, {
				isAlive: false,
			}).then(updateDoc(playerRef, {
				playerScore: playerScoreCur,
			}))
			alert('You lost :(');
			playerIn = false;
		}
		stop = true;
		playerIn = false;
	};

	if (playerIn !== true) {
		return (
			<div>
				<div>{playerList.map(({ playerName, userColor, isAlive, playerScore }) => (
					<div className='nameList'>
						<h3>{playerName} Playing as the color: {userColor}</h3>
						<br />
						Score:{playerScore}
						<br />
						is still playing: {isAlive}
					</div>
				))}
				</div>
			</div>
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
				<div className='landSea'>{landSea} {playerScoreCur}</div>


			</div>
		);
	}
}
export default App;
