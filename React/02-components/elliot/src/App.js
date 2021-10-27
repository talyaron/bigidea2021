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
        <Card name='Chris' gender='Male' image='https://upload.wikimedia.org/wikipedia/commons/thumb/e/e8/Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg/440px-Chris_Hemsworth_by_Gage_Skidmore_2_%28cropped%29.jpg'/>
        <Card name='Elon' gender='Male' image='https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg/440px-Elon_Musk_Royal_Society_%28crop1%29.jpg'/>
        <Card name='Harry' gender='Male' image='https://upload.wikimedia.org/wikipedia/en/d/d7/Harry_Potter_character_poster.jpg'/>
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
