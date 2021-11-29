import './App.css';

var username = prompt("What is your name?");

function handleSet(ev) {
  ev.preventDefault();
  const setName = ev.target.elements.nameBox.value;
  const lowerName = setName.toLowerCase();
}


function App() {
  return (
    <div className="App">
      <form onSubmit={handleSet}>
        <input type='text' placeholder='Enter your Age' name='nameBox' />
        <input type="submit" placeholder="submit"></input>
      </form>
    </div>
  );
}

export default App;
