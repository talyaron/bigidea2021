import './App.css';

import dude from './theDude.jpg'
import bigL from './bigl.jpg'



function App() {
  return (
    <div className="cont">
      <card className = 'card'>
        
        <p>
          Blond Treehorn Thug : [holding up a bowling ball]  What the fuck is this? <br/><br/>

          The Dude : Obviously you're not a golfer. <br/><br/>

          [while dunking the Dude's head in the toilet]  <br/><br/>

          Blond Treehorn Thug : Where's the money, Lebowski? Where's the fucking money, shithead? <br/><br/>

          The Dude : It's uh... uh... it's down there somewhere, let me take another look. <br/><br/>

          The Dude : Nobody calls me Lebowski. You got the wrong guy. I'm the Dude, man. <br/><br/>

          Blond Treehorn Thug : Your name's Lebowski, Lebowski. Your wife is Bunny. <br/><br/>

          The Dude : My... my wi-, my wife, Bunny? Do you see a wedding ring on my finger? Does this place look like I'm fucking married? The toilet seat's up, man! <br/><br/>

          Blond Treehorn Thug : [holding a bowling ball]  What the fuck is this? <br/><br/>

          The Dude : Obviously, you're not a golfer.<br/>
        </p>


      </card>
      <card className = 'card'>
        <img src = {dude} alt ='' id = 'dude'/>
        <p>the actor whjo played "The Dude" is Jeff Bridges</p>

      </card>
      <card className = 'card'>
        <img src = {bigL} alt ='' id = 'poster'/> 
      </card>
    </div>
  );
}

export default App;
