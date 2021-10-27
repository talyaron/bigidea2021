import './App.css';
import IlanECard from './components/ilanECard/IlanECard';
import IlanKlimCard from './components/ilanKlimCard/IlanKlimCard';
import JimmyCard from './components/jimmyCard/JimmyCard';
import JonathanCard from './components/jonathanCard/JonathanCard';

//components
import NoahCard from './components/noahCard/NoahCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoahCard description="Noah is my best friend from high school. I've known him since we were 10 and he is here is Israel on a gap year in Tel Aviv. He loves video games and theater."/>
        <IlanECard description="Ilan is a friend of mine from camp; we've been great friends since 2015. Comes often to the states, but he really lives in Modiin, Israel."/>
        <JimmyCard description="Jimmy is friend from camp since 2014. He loves video games and is in Israel on a gap year in Jerusalem. He lives in Orlando, FL."/>
        <IlanKlimCard description="Ilan is a friend from camp since 2014. He's in Israel on a gap year. He was in my 4th grade class and with Elliot in high school."/>
        <JonathanCard description="Jonathan is a camp friend since 2014. He lives in Clearwater, FL. Used to be my tallest friend, but he just grew much earlier than me."/>
      </header>
    </div>
  );
}

export default App;
