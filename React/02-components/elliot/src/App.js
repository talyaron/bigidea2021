import logo from './logo.svg';
import './App.css';

import Card from './components/card/Card';
import ActorLine from './components/actor/line/actorLine';
import ActorMovie from './components/actor/movie/actorMovie';
import ActorImage from './components/actor/image/actorImage';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        
        <header className='App-actorDisplay'>
          <ActorImage />
          <ActorLine />
          <ActorMovie />
        </header>

        <header className="App-header">
          <Card />
          <Card />
          <Card />
        </header>

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
