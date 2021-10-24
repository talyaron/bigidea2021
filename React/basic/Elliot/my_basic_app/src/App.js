//import logo from './logo.svg';
import sandwichMan from './sandwichGuy.jpeg';
import './App.css';

const abc = 123;

function App() {
  return (
    <div className='main'>
      <div className="blogTitle">
        <header> Interview: What is my favorite game? </header>
      </div>

      <div className="author"> Written by: Elliot Kupchik </div>
      <div className="publisher"> Published under: Tal Studios </div>
      <div className="date"> Published on: Oct 18, 2021 </div>

      <div className="para1">
        <h2>I like peaceful games that allow you to explore landscapes!</h2>
      </div>

      <div className="photoFrame">
        <img src={sandwichMan} />
        <div className="photoDescription"> Figure 1: Man Holding A Sandwich </div>
      </div>

      <div className="para2">
        <h2>In particular, I enjoyplaying GeoGuesser, since it allows you to learn about the urban and natural landscapes of Earth!</h2>
      </div>

    </div>
  );
}

export default App;
