import './App.css';

var year_born = prompt("Please enter your date of birth:", "Type here");
var d = new Date();
var n = d.getFullYear();
function getAge(birthYear){
	var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    age = currentYear - birthYear;
    return age;
}
calculatedAge = getAge(year_born);
alert("Hello, " + "you are " + calculatedAge + " years old!");

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
