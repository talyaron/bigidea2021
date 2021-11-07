import logo from './logo.svg';
import './App.css';

import MatchingGame from './components/MatchingGame/MatchingGame';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <MatchingGame />
      </header>
    </div>
  );
}

export default App;
