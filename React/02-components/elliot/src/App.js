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
        <Card name='Elliot' gender='Male'/>
        <Card name='Elon' gender='Male'/>
        <Card name='Jessica' gender='Female'/>
      </header>

      <header className='App-actorDisplay'>
        <ActorImage />
        <ActorLine />
        <ActorMovie />
      </header>
      
    </div>
  );
}

export default App;
