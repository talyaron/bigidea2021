import cat from './cat.jpg';
import hi from './hi.jpg';
import minecraft from './Minecraft.png'
import './App.css';

const game = 'World Of Warcraft III';

function App() {
  return (
    <div className="box">
      <div className="image" style={{backgroundImage: `url(${cat})`}} />
      <div className="image" style={{backgroundImage: `url(${hi})`}} />
      <div className="image"style={{backgroundImage: `url(${minecraft})`}} />

      <h1>Robby and Eytan create first news article</h1>

      <h1>Second news article created, scientists baffled.</h1>
      <h1>Another headline created, science is deemed complete worldwide</h1>
      <div>"we did it" says comp sci majors, confused to what they were being asked</div>
      <div>
        "they're just too advanced for us" Pentagon head scientist says
      </div>
      <div>"Now that's just crazy" Bill Nye exclaimed in jealousy.</div>
    </div>
  );
}

export default App;
