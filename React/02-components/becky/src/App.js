import logo from './logo.svg';
import './App.css';

//components
import Card from './components/card/Card';
import Quote from './components/quote/Quote';
import Best from './components/best/Best';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <Card/>
        <Best/>
        <Quote/>
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
