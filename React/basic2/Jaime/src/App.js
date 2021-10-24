import jaime from './everyone.png';
import './App.css';
import angstyteen from './teen-on-phone-bed-sleep-stock-large-169.jpg';
import nba from './nba.jpg';
import squid from './squid.jpg';

const game = 'Super Smash Bros Ultimate';

function App() {
  return (
    <div>
      
    {/* 
    <div class="box">
    <h1>Jaime's Favorite Game</h1>
    <img class = "jaime" src={jaime}></img>
    <p>My favorite game of all time is Super Smash Bros Ultimate. It's all about beating up your friends and ruining friendships at the same time. Don't worry, your friends will only leave you for a couple seconds before saying "rematch right now!" at a high volume. This is a completely accurate summary of the entire game written by someone with too many hours of gameplay. I highly recommend this game to anyone who is new to the fighting game genre, because all the characters in this game are "completely balanced" just as all fighting games are (obviously). And if you are willing to pay a bit extra, you can unlock 11 new characters that make the game even more balanced. These include: Sephiroth from Final Fantasy VII, Joker from Persona 5, Kazuya from Tekken, and the newest addition Sora from Kingdom Hearts.</p>
    <div class="">
      Hi {game}
    </div>
    </div>
    */}

    <div class="jaimeszymon">
      <div class="box2">
      <h3>Learn to let go of sleep battles with your teen</h3>
      <img src={angstyteen} class="img"></img>
      </div>
      <div class="box2">
      <h4>The NBA is caught once again between free speech and the lucrative Chinese market</h4>
      <img src={nba} class="img"></img>
      </div>
      <div class="box2">
      <h3>Why Americans are so obsessed with 'Squid Game'</h3>
      <img src={squid} class="img"></img>
      </div>
      
    </div>

    </div>
  );
}

export default App;
