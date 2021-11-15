import './App.css';
import { db } from './function/firebase/config';
import { useEffect, useState } from 'react';
import {
	doc,
	getDoc,
	onSnapshot,
	setDoc,
	addDoc,
	collection,
} from 'firebase/firestore';

function App() {
	const [currentMessage, setCurrentMessage] = useState('');
	const [messages, setMessages] = useState('');

	function handleSubmit(ev) {
		ev.preventDefault();
		let currentMessage = ev.target.elements.message.value;
		console.log(currentMessage);
		setCurrentMessage(currentMessage);
		addDoc(collection(db, 'messages'), {
			inputText: { currentMessage },
		});
	}

	return (
		<div className='App'>
			<header className='App-header'>
				<h1>type a message!</h1>
				<form onSubmit={handleSubmit}>
					<input type='text' placeholder='Type a message' name='message' />
					<input type='submit' value='print' />
				</form>
			</header>
		</div>
	);
}

export default App;
