import {db} from './functions/firebase/config'
import{doc, setDoc} from 'firebase/firestore'
import './App.css';
import UserPhoto from './components/UserPhoto/UserPhoto'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserPhoto/>
      </header>
    </div>
  );
}

export default App;
