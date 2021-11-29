import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <form onSubmit={handleSet}>
        <input type='text' placeholder='Enter your name' name='nameBox' />
        <input type="submit" placeholder="submit"></input>
      </form>
    </div>
  );
}

export default App;
