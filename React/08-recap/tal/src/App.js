import { useEffect, useState } from 'react';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';

function App() {
	const [userVideo1, setUserVideo] = useState('');
	function handleSubmit(ev) {
		ev.preventDefault();

		let userVideo = ev.target.elements.videoURL.value;
		let userName = ev.target.elements.name.value;
		setUserVideo(userVideo);
		console.log(userVideo, userName);
		setDoc(doc(db, 'us', userName), {
			videoURL: userVideo,
		});
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Name'></input>
				<input type='text' name='videoURL' placeholder='Video URl'></input>
				<input type='submit' />
			</form>
      <iframe width="560" height="315" src={userVideo1} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
		</div>
	);
}

export default App;
