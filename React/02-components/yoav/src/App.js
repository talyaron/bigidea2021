import logo from './logo.svg';
import './App.css';


//components
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
       
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
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
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
}

export default App;
