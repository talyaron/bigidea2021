import logo from './logo.svg';
import './App.css';

//components
import Card from './components/card/Card';

function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
      <header className="App-header">
       
        <Card name='tal' gender='male' image='https://www.google.com/search?q=tal+yaron&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiuzYOrt-XzAhVL_rsIHV76AZIQ_AUoAXoECAEQAw&biw=1152&bih=753&dpr=1#imgrc=m_lRqzeT_YUBRM'/>
        <Card name='robbert' gender='male' image='file:///Users/robert/Desktop/pictures/5d71018a-8a92-4d86-917e-00e5657ce208.jpg'/>
        <Card name='becky' gender='female' image='https://farm66.static.flickr.com/65535/51266845914_37d6047f37.jpg' />
       

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
