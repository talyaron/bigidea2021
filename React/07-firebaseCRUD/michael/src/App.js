import logo from './logo.svg';
import './App.css';
import {db} from "./functions/firebase/config";
import { doc, setDoc} from "firebase/firestore"

function App() {

  useEffect(()=>{
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef,{name:"Michael", image: "https://cdn.vox-cdn.com/thumbor/Q8jaoy_BCjTa3iUBuA0WrKSGLGc=/1400x1050/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/22443557/revan_galaxy_of_heroes_tall.jpeg"})
  },[]);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
