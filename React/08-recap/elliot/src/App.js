import './App.css';
import { useEffect} from 'react'
import { db } from './functions/firebase/config';
import { doc, onSnapshot, getDoc, getDocs, collection, setState} from "firebase/firestore";


function App() {
  const [submitVisible, setSubmit] = setState('block');
  const [videoVisible, setVideo] = setState('none');
  const [videoSRC, setSRC] = setState('none');
  
  useEffect(() => {
    /*let ourDBArray = [];

    getDocs(ourDatabase).then(dataDB => {
      dataDB.forEach(datum => {
        ourDBArray.push(datum.data())
        console.log(datum.id)
        console.log(datum.data())
      })
      console.log(ourDBArray)
      console.log("stage 1")
    })
    
    getDoc(ourElement).then(docDB => {
      console.log(docDB.data())
      console.log("stage 2")
    })
    
    const unsubscribe = onSnapshot(ourElement, (doc) => {
      console.log('Current Data: ' + doc.data());
      console.log("stage 3")
    })*/
  },[])
  
  function addVideo(ev){
    ev.preventDefault();
    if(ev.target.elements.link.value == ''){
      alert("You must input a link into the text box. Please input a link and try again.");
    } else {

    }
  }

  return (
    <div className="App">
      <form className="submitPersonalVideo" display={submitVisible} onSubmit = {addVideo}>
        <input type="text" name="link" placeholder="Please input the link of your video here:"></input>
        <input type="button" placeholder="Confirm"></input>
      </form>
      <form className="newVideoRequest" display = {videoVisible} onSubmit = {changeVideo}>
        <iframe width = "300" height = "300" max-width = "750" max-height = "750" src={videoSRC} frameborder="2" autoplay> </iframe>
        <input type="button" placeholder="Generate New Video"></input>
      </form>
    </div>
  );
}

export default App;


//"https://www.youtube.com/embed/G1IbRujko-A"