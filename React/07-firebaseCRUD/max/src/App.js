import logo from './logo.svg';
import './App.css';
import {db} from './functions/firebase/config'
import{doc, setDoc} from 'firebase/firestore'

function App() {
  useEffect(()=>{
    const userRef = doc(db, 'users', 'me')
    setDoc(userRef,{name:'max', image:'https://pbs.twimg.com/media/Evr4CutWEAMY3yD.jpg'})

  },[])
  return (
    <div className="App">
      <header className="App-header">
        hi
      </header>
    </div>
  );
}

export default App;
