import { useEffect, useState } from 'react';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

let firstFound = true;
let useFirstNum, useSecondNum = 0;
let correctResult = false;


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
       
        
        //checking if the answer is correct, and it is the first person who found it
        const firstCorrectResponder = isUserFirst(answerDB.data(), correctResult, firstFound)
        if (firstCorrectResponder) {
          setFirstPerson(answerDB.data().name)

          //add it to the list
          let index = tempPointsArray.findIndex(participent=>participent.name === firstCorrectResponder)

          //if found
          if(index !== -1){
            tempPointsArray[index].points++
          } else {
            tempPointsArray.push({name:firstCorrectResponder, points:1})
          }
         
          firstFound = false;
          

        }

        setPointsArray(tempPointsArray);
        console.log(tempPointsArray)

      }
    })
  }, []);

  function isUserFirst(data, correctResult, firstFound) {
    try {
      if (data.answer === correctResult && firstFound === true) return data.name;
      return false
    } catch (error) {

    }
  }

  function newQuestion(ev) {
    useFirstNum = (Math.floor(Math.random() * 21) + 1)
    useSecondNum = (Math.floor(Math.random() * 21) + 1)

    setFirstNum(useFirstNum);
    setSecondNum(useSecondNum);
    
    correctResult = useFirstNum*useSecondNum;
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
