
import './App.css';

function App() {
  return (
    <div className="App" background-img="https://i.pinimg.com/originals/e9/90/4c/e9904cdb30314092a60f1ec18711bbbf.jpg">
      <header className="App-header">
        <box
          className="App-box"
        >
          <p>
            My favorite game is : Minecraft
          </p>
          <img src="https://cdn03.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_Minecraft.jpg" className="img"/>
          <p>Minecraft is a sandbox video game developed by the Swedish video game developer Mojang Studios. The game was created by Markus "Notch" Persson in the Java programming language. Following several early private testing versions, it was first made public in May 2009 before fully releasing in November 2011, with Jens Bergensten then taking over development. Minecraft has since been ported to several other platforms and is the best-selling video game of all time, with over 200 million copies sold and over 140 million monthly active users as of 2021.[18]</p>
        </box>
      </header>
    </div>
  );
}

export default App;
