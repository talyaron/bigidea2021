import './App.css';
import Tartarus from "./Tartarus.png"

//components
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Card />
        
        <p>
          Pictured: My two friends, Ella (top) and Hope (bottom). Both of them are people I have met on Discord.
        </p>
        <br></br>
        <p>
          ELLA: I met Ella in December 2018, on a Discord server about a book series we both liked at the time. We quickly became friends and have talked to each other and played games together often since then. Last Summer, we made plans to meet up with our families - my Dad lives in Florida, and so does Ella, so my Dad would take me to see her - , but due to scheduling differences we could not.
        </p>
        <br></br>
        <p>
          HOPE: I met Hope in October of last year. I was discussing a world I had created in a server I was on, and requested anyone interested in reading about it DM me. She did, and after reading it we found we had many things in common. We have been friends since then, and she has been kind enough to draw pictures of things I request - she is an excellent artist (an example of her art is provided below). Hope lives in Alabama, so visiting her is unfortunately unlikely.
        </p>
        <img src={Tartarus} alt="bla" />
      </header>
    </div>
  );
}

export default App;

