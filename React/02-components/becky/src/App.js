import logo from './logo.svg';
import './App.css';
import layla from './components/card/layla.jpg'
import rachel from './components/card/rachel.jpg'
import emma from './components/card/emma.jpg'
import sadie from './components/card/sadie.jpg'


//components
import Card from './components/card/Card';
import Quote from './components/quote/Quote';
import Best from './components/best/Best';

function App() {
  return (
    <div className="App">
      <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
        <Card className = "card" name = "layla"  backgroundImage = {layla}  bio = "Layla’s an outgoing chill person. She loves working out, traveling, writing, and painting. She also loves going into the city and hanging out at the beach with friends" />
        <Card  className = "card" name = "rachel" backgroundImage = {rachel}  bio = "Rachel is a spunky queen who is curious and adventurous. She loves the Celtics, her dog, her fam/friends, and UMD (specifically her school mascot Testudo.) "/>
        <Card  className = "card" name = "emma" backgroundImage = {emma}  bio = " i am taking a spanish class and it’s not fun. i took a good nap yesterday and want to nap again now but i have class soon so i cannot. it is raining"/>
        <Card  className = "card" name = "sadie" backgroundImage = {sadie}  bio = " sadie is a silly, outgoing person. she loves cooking, reading, and going on adventures with her friends!!" />
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
