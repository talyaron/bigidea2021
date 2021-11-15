import { useEffect,useState } from 'react';
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot } from 'firebase/firestore';

let firstFound = true;
let useFirstNum,useSecondNum = 0;
function App() {
  
  const [firstNum, setFirstNum] = useState(0);
  const [secondNum, setSecondNum] = useState(0);
  const [answerObj, setAnswerObj] = useState({answer:0,name:""});
  const [pointsArray, setPointsArray] = useState([]);
  let tempPointsArray = [];

  useEffect(()=>{

    const answerRef=doc(db,'answers','answer')
    onSnapshot(answerRef, answerDB =>{
      //console.log(answerDB.data())
      tempPointsArray = pointsArray;
      if (answerDB.exists()){
        const{ answer, name } = answerDB.data();
        if(answerDB.data().answer===(useFirstNum+useSecondNum)&&firstFound === true){
          let foundThisInstance = false;
          firstFound = false;
          for(let i = 0; i<tempPointsArray.length;i++){
            if(tempPointsArray[i].name === answerDB.data().name){
              tempPointsArray[i].points ++;
              foundThisInstance = true;
            }
          }
          if(foundThisInstance === false){
            let tempObj = {name:name,points:1}
            tempPointsArray.push(tempObj)
          }
          console.log(tempPointsArray);
      }
      
        setPointsArray(tempPointsArray);
        console.log(pointsArray)
        
      }
    })
  },[])

  function newQuestion(ev){
    useFirstNum = (Math.floor(Math.random() * 10) + 1)
    useSecondNum = (Math.floor(Math.random() * 10) + 1)

    setFirstNum(useFirstNum);
    setSecondNum(useSecondNum);
    console.log(useFirstNum,useSecondNum)
    firstFound = true;
    ev.preventDefault();

  }
  

  return (
    <div className="App">
      <header className="App-header">
        <form className='NewQuestion' onSubmit={newQuestion}>
        <input type='submit' value='New Question'/>
        </form>
        <div className="displayQuestion">{firstNum}+{secondNum}</div>

        <div className="Scoreboard">
          {pointsArray.map((points, i)=>{
            return(<div key = {i}>{points.name}:{points.points}</div>)
          })
        }
        </div>

      
      </header>
    </div>
  );
}

export default App;
