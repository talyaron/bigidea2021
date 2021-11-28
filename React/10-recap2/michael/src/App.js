import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">My Time in Israel</header>
      <div className="Body">
        So far in Israel, I have had a very positive experience. While there have been issues, overall I have enjoyed my time here.
        The land is very interesting, and it is fun to see all the history scattered around the country.
        In Jerusalem, particularly the Old City, I feel like there is a spiritual uniqueness about the place.
        The Western Wall specifically is a very spiritual experience to be near for me.
        Aside from sprituality, Jerusalem overall has a very unique aesthetic and atmosphere when compared to other cities,
        and it is cool to experience it firsthand and see what the place has to offer.
      </div>
      <br></br>
      <form onSubmit= {handleSubmit}>
        <label htmlFor="date">When were you born?</label>
        <br></br>
        <input type="date" name="date" id="date" />
        <input type="submit" id="submit" />
      </form>
    </div>
  );
}
function handleSubmit(ev){
  ev.preventDefault();
  console.log(ev);

  const text= ev.target.elements.date.value;
  let newText = document.getElementsByTagName('div')[0];
  
  newText.innerHTML += 'Your birthday is ' + text + '<br>';
}
export default App;
