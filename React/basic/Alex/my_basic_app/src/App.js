import logo from './logo.svg';
import scuba from './scuba_diver.jpg';
import './App.css';

const abc = 123;

function App() {
  return (
   <div className='gold'>
     <img className='image' src={scuba}/>
     <h1>My wifi wont let me download a new image, but I really like scuba diving :)</h1>
    <div className='paragraph'>I learned how to scuba dive after my sister got her certification and began scuba diving with our dad. it sounded like so much fun and there were so many interesting animals they were able to see I wanted to join them</div>
    <br></br>
    <div className='paragraph'>I love scuba diving for a lot of reasons, its a lot of fun to feel almost weightless and swim around with my friends, sometimes not knowing whats up and whats down</div>
    <br></br>
    <div className='paragraph'>It also feels like an entirely different world, swimming with schools of fish, huge groper fish, sea turtles, and even once sharks were some of the most unique experiences of my life</div>
   </div>

  );
}

export default App;
