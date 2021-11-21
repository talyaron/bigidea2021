import { useEffect, useState } from 'react';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot, setDoc, collection } from 'firebase/firestore';

function App() {
	const [userVideo1, setUserVideo] = useState('DEV372Kof0g');
	const movieRef = doc(db, 'us', 'movie')
	useEffect(() => {
		onSnapshot(movieRef, movieDB => {
			const viedoId = movieDB.data().url;
			if (typeof viedoId === 'string') {
				setUserVideo(viedoId)
			}
		})
	}, [])

	function handleSubmit(ev) {
		ev.preventDefault();
		const videoId = new RegExp('/^[A-Za-z0-9_-]{11}$/')
		let userVideo = ev.target.elements.videoURL.value;
		let userName = ev.target.elements.name.value;
		if (typeof userVideo === 'string') {
			setUserVideo(userVideo);
			console.log(userVideo, userName);
			setDoc(movieRef, {
				videoURL: userVideo,
				userName
			});
		} else {
			alert('This is not a valid youtube Id')
		}
	}

	return (
		<div>
			<form onSubmit={handleSubmit}>
				<input type='text' name='name' placeholder='Name'></input>
				<input type='text' name='videoURL' placeholder='Youtube video ID'></input>
				<input type='submit' />
			</form>
			<iframe width="560" height="315" src={`https://www.youtube.com/embed/${userVideo1}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
	);
};

export default App;
