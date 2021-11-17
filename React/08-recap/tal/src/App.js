import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { collection, doc, getDocs, getDoc, onSnapshot, setDoc } from "firebase/firestore";

function App() {

  const [link, setLink] = useState('LYwaBpL6njk');



  useEffect(() => {
    console.log('useeffect')
    const moviesRef = doc(db, 'movies', 'movie');
    onSnapshot(moviesRef, movieDB => {
      const youtubeId = movieDB.data().url;
      setLink(youtubeId);
    })

  }, []);

  function handleURLSubmit(ev) {
    ev.preventDefault();
    let url = ev.target.elements.link.value;
    const moviesRef = doc(db, 'movies', 'movie');
    setDoc((moviesRef), { url: url });
  }

  return (
    <div className="App">
      <form onSubmit={handleURLSubmit} >
        <input type='text' placeholder='Enter your link here' name="link" />
        <input type='submit' value='Submit' />
      </form>
    
      <h1>{link}</h1>
      <iframe width="560" height="315" src={`https://www.youtube.com/embed/${link}`} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
    </div>
  );
}

export default App;
