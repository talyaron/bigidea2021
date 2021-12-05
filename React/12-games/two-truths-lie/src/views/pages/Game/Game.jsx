import './Game.css';
import { db } from '../../../functions/firebase/config';
import { useEffect, useState } from 'react';
import { doc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, getDocs } from 'firebase/firestore';

//components
import Scoreboard from '../../components/Scoreboard/Scoreboard'
import Shuffle from '../../components/Shuffle/Shuffle'

let questionsArr = []
let q



function App({ user, setUser }) {
  const selectedQuestionRef = doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn');
  const [questionAuthor, setQuestionAuthor] = useState('');
  const [true1, setTrue1] = useState('');
  const [true2, setTrue2] = useState('');
  const [untrue, setUntrue] = useState('');
  
  useEffect(() => {
    onSnapshot(selectedQuestionRef, (question) => {
      const selectedQuestion = question.data().selectedQuestion
      setTrue1('true 1', selectedQuestion.true1)
      setTrue2('true 2', selectedQuestion.true2)
      setUntrue('untrue', selectedQuestion.untrue)
    })




    async function OnStartup() {
      //questionsRef = await collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions')
      q = query(collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions'));
      const querySnapshot = await getDocs(q);
      let i = 1;
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        let tempObj = {
          name: data.user.name,
          true1: data.true1,
          true2: data.true2,
          untrue: data.untrue,
          index: i
        }
        i++;
        questionsArr.push(tempObj)
        // console.log(questionsArr);
      })
    }
    OnStartup();

  }, []);

  function nextRound() {

    //radmoly get a question
    let indexChosen = Math.floor(Math.random() * questionsArr.length);
    let data = questionsArr[indexChosen];
    const selectedQuestionRef = doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn')

    updateDoc(selectedQuestionRef, {
      selectedQuestion: {
        true1: data.true1,
        true2: data.true2,
        untrue: data.untrue,
        user: { name: data.name }
      }
    })

  }
  let randomLiePosition;



  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3)
    console.log(randomNumber);
    return (randomNumber);
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);

  if (user.name.length > 0) {
    return (
      <div className="App">

        <button onClick={nextRound}>Set a new round</button>
        <div className='questionBox'></div>
        <Shuffle true1 = {true1} true2 = {true2} untrue={untrue}/>
        <Scoreboard />
      </div>

    );
  } else {
    return <h1>Please login</h1>
  }
}

export default App;
