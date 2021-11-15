import { useEffect, useState } from 'react';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

let firstFound = true;
let useFirstNum, useSecondNum = 0;
function App() {

  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [answerObj, setAnswerObj] = useState({ answer: 0, name: "" });
  const [pointsArray, setPointsArray] = useState([]);
  const [firstPerson, setFirstPerson] = useState('')
  let tempPointsArray = [];

  useEffect(() => {

    const answerRef = doc(db, 'answers', 'answer')
    onSnapshot(answerRef, answerDB => {
      //console.log(answerDB.data())
      tempPointsArray = [...pointsArray];
      if (answerDB.exists()) {
        const { answer, name } = answerDB.data();
        //checking if the answer is correct, and it is the first person who found it
        if (answerDB.data().answer === (useFirstNum * useSecondNum) && firstFound === true) {
          setFirstPerson(answerDB.data().name)
          let foundThisInstance = false;
          firstFound = false;
          //if there is such person
          for (let i = 0; i < tempPointsArray.length; i++) {
            if (tempPointsArray[i].name === answerDB.data().name) {
              tempPointsArray[i].points++;
              foundThisInstance = true;
            }
          }
          //if they dont have any points, so create new place for them
          if (foundThisInstance === false) {
            let tempObj = { name: name, points: 1 }
            tempPointsArray.push(tempObj)
          }
          
        }

        setPointsArray(tempPointsArray);
        console.log(tempPointsArray)

      }
    })
  }, [])

  function newQuestion(ev) {
    useFirstNum = (Math.floor(Math.random() * 21) + 1)
    useSecondNum = (Math.floor(Math.random() * 21) + 1)

    setFirstNum(useFirstNum);
    setSecondNum(useSecondNum);
    console.log(useFirstNum, useSecondNum)
    firstFound = true;
    ev.preventDefault();
    setFirstPerson("");

  }


  return (
    <div className="App">
      <header className="App-header">
        <form className='NewQuestion' onSubmit={newQuestion}>
          <input type='submit' value='New Question' />
        </form>
        <h1 className="displayQuestion">{firstNum}*{secondNum}</h1>

        <div className="Scoreboard">
          {pointsArray.map((points, i) => {
            return (<div key={i}>{points.name}:{points.points}</div>)
          })
          }
          <h1>First to answer: {firstPerson}</h1>
        </div>


      </header>
    </div>
  );
}

export default App;
