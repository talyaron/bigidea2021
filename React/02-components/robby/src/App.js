import logo from './logo.svg';
import './App.css';

//components
import Card from './components/card/Card';
import Movie from './components/movie/Movie';
import Quote from './components/quote/Quote';

function App() {
  return (
    <div className="App">
      <header className="App-header">


        <Card name= 'Robby' gender= 'male' image= 'https://www.jewishexponent.com/wp-content/uploads/2019/03/3-21-barrack-photo-1.jpg'>
        <p></p>
        
        <img src={logo} className="App-logo" alt="logo" />
        
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
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
