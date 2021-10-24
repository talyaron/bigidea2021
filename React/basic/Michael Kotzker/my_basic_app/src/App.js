import logo from './logo.svg';
import D2 from './D2logo.jpg';
import './App.css';

const abc = 123;

function App() {
  return (
   <div className='gold'>
     <img className='image' src={D2}/>
     <h1>One of my Favorite Games: Destiny 2</h1>
    <div className='paragraph'>Destiny 2 is an amazing science fiction first-person shooter game with beautiful graphics, great gameplay, and lore so well-written and complex I'd be here all day just to explain the basic premise. As of writing this, I have almost 200 hours in the game. If you are a fan of sci-fi, shooters, great lore and story, or all of the above, I cannot recommend this game enough, and while the base game is free, the DLC expansions are more than worth their price.</div>
   </div>

  );
}

export default App;
