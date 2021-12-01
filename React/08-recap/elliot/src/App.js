import './App.css';
import { useEffect, useState } from 'react'
import { db } from './functions/firebase/config';
import { doc, onSnapshot, addDoc, getDoc, getDocs, collection } from "firebase/firestore";


function App() {
  const [submitVisible, setSubmit] = useState('block');
  const [videoVisible, setVideo] = useState('none');
  const [videoSRC, setSRC] = useState('');
  const ourDatabase = collection(db, 'movies');
  let ourDBArray = [];
  
  useEffect(() => {

    getDocs(ourDatabase).then(dataDB => {
      dataDB.forEach(datum => {
        ourDBArray.push(datum.data())
      })
    })

    onSnapshot(ourDatabase, (snapshot) => {
      snapshot.forEach(doc => {
        if(ourDBArray.indexOf(doc.data()) === -1){
          ourDBArray.push(doc.data());
          console.log(ourDBArray);
        }
      })
    })
    
  },[])
  
  function addVideo(ev){
    let addedVideoLink = ev.target.elements.link.value;
    ev.preventDefault();
    console.log("activatedAddVideo");
    if(ev.target.elements.link.value == ''){
      alert("You must input a link into the text box. Please input a link and try again.");
    } else {
      addDoc(doc(db, "movies", "movie"),{url: addedVideoLink});
      setSubmit('none');
      changeVideo();
      setVideo('block');
    }
  }

  function changeVideo(){
    let randomVideo = ourDBArray[Math.floor(Math.random() * ourDBArray.length)];
    getDoc(randomVideo).then(docDB => {
      setSRC(docDB.src.value);
    })
  }

  return (
    <div className="App">
      <form className="submitPersonalVideo" display={submitVisible} onSubmit={addVideo}>
        <input type="text" name="link" placeholder="Please input the link of your video here:"></input>
        <input type="button" placeholder="Confirm"></input>
      </form>
      <form className="newVideoRequest" display = {videoVisible} onSubmit = {changeVideo}>
        <iframe width = "300" height = "300" max-width = "750" max-height = "750" src={videoSRC}> </iframe>
        <input type="button" placeholder="Generate New Video"></input>
      </form>
    </div>
  );
}

export default App;


//"https://www.youtube.com/embed/G1IbRujko-A"