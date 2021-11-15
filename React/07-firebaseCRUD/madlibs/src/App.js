import logo from './logo.svg';
import './App.css';
import {db} from './functions/firebase/config'
import imageDisplay from './imageDisplay/imageDisplay';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <imageDisplay/>
      </header>
    </div>
  );
}

export default App;
