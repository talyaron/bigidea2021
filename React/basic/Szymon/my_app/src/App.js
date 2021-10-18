import logo from './logo.svg';
import './App.css';

import Szymon from './Game.jpg'
function Blog(){
  return(
    <div className="Blog">
      <header>
      Favorite Video Game of the Poor Sucker Writing This
      </header>
      <b>
        My favorite video game is Monster Hunter World. This is my favorite because I enjoy hunting massive beasts and showing them whose boss. I most enjoy obtaining their materials to make better gear and then hunt other mosnters.
      </b>
      <img src={Szymon}/>
    </div>
  )
}



function App() {
  return (
    <div className="App">
      <header className="App-header">
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
