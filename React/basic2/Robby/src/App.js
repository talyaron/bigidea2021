import cat from './cat.jpg';
import hi from './hi.jpg';
import minecraft from './Minecraft.png'
import './App.css';

const game = 'World Of Warcraft III';

function App() {
  return (
    <div className="box">
      <div className="image1"  />
      <div className="image2" style={{backgroundImage: `url(${hi})`}} />
      <div className="image3"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image4"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image5"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image6"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image7"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image8"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image9"style={{backgroundImage: `url(${minecraft})`}} />


    </div>
  );
}

export default App;
