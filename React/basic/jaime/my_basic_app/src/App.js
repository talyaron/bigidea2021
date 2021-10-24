import logo from './logo.svg';
import jaime from './everyone.png'
import './App.css';

function App() {
  return (
    <div class="box">
    <h1>Jaime's Favorite Game</h1>
    <img class = "jaime" src={jaime}></img>
    <p>My favorite game of all time is Super Smash Bros Ultimate. It's all about beating up your friends and ruining friendships at the same time. Don't worry, your friends will only leave you for a couple seconds before saying "rematch right now!" at a high volume. This is a completely accurate summary of the entire game written by someone with too many hours of gameplay. I highly recommend this game to anyone who is new to the fighting game genre, because all the characters in this game are "completely balanced" just as all fighting games are (obviously). And if you are willing to pay a bit extra, you can unlock 11 new characters that make the game even more balanced. These include: Sephiroth from Final Fantasy VII, Joker from Person 5, Kazuya from Tekken, and the newest addition Sora from Kingdom Hearts.</p>
    </div>
  );
}

export default App;
