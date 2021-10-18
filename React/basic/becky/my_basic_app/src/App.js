import logo from './logo.svg';
import './App.css';
import me from './me.jpeg';
import cards from './cards.jpeg'

const abc = 123

function App(){
  return(
    <div className="box">
      <h1 className="h1">Becky's Favorite Game as a Child</h1>
      <img className ="img" src ={me}/> 
      <div className="text1"> My favorite game as a child was probably Russian Poker. My Grandfather started teaching me at the age of 6 and now we play every time we see each other 
      <br></br>
      <br></br>
      I also used to play Dominoes with my Grandma :)
      <br></br>
      <br></br>
      I cant really think of anything else besides playing sports with my brothers in our backyard
      </div>
      <img className="img" src={cards}/>
    </div>
  );
}

export default App;
