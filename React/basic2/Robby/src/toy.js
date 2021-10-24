import cat from './hi.jpg';
import hi from './hi.jpg';
import minecraft from './Minecraft.png'
import './toy.css';

const game = 'World Of Warcraft III';

function App() {
  return (
    <div className="box">
      <div className="image" style={{backgroundImage: `url(${cat})`}} id= "1"/>
      <div className="image" style={{backgroundImage: `url(${hi})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />


    </div>
  );
}

export default App;
