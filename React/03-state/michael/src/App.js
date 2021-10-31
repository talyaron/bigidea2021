import logo from './logo.svg';
import './App.css';

//components
import Counter from './components/Counter/Counter'

//npx create-react-app <nameOfApp>

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <Counter />

      </header>
    </div>
  );
}

export default App;