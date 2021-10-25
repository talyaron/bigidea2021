import logo from './logo.svg';
import './App.css';


import Card from './components/card/Card';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Card />
        
        <p>
          
        “I use xanax to focus, ambien to sleep, weed to calm me down, cocaine to cheer me up and morphine because it's great. But, of all these, my favorite drug, well, is money. 
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
