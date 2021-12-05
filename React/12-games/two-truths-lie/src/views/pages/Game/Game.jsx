import './Game.css';
import { db } from '../../../functions/firebase/config';
import { useEffect, useState } from 'react';
import { doc,getDoc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, getDocs } from 'firebase/firestore';

//components
import Scoreboard from '../../components/Scoreboard/Scoreboard'


let questionsArr = []
let q



function App({ user, setUser }) {
  const selectedQuestionRef = doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn');
  const [questionAuthor, setQuestionAuthor] = useState('');
  const [true1, setTrue1] = useState('');
  const [true2, setTrue2] = useState('');
  const [untrue, setUntrue] = useState('');
  const [box1, setBox1] = useState("temp");
  const [box2, setBox2] = useState("temp");
  const [box3, setBox3] = useState("temp");

  useEffect(() => {
    const unsubscribe = onSnapshot(selectedQuestionRef, (question) => {
      const selectedQuestion = question.data().selectedQuestion;
      let answers = [
        {
          answer: selectedQuestion.true1,
          id: 'true1'
        },
        {
          answer: selectedQuestion.true2,
          id: 'true2'
        },
        {
          answer: selectedQuestion.untrue,
          id: 'untrue'
        },
      ]
      answers = shuffle(answers)
      setBox1(answers[0]);
      setBox2(answers[1]);
      setBox3(answers[2]);

      return ()=>{
        unsubscribe();
      }
   
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
  function handleClick(ev) {
    if (ev.target.id === 'untrue') {
     
      const userId = user.name;
      //get user score

      const userRef = doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'players', userId);
      getDoc(userRef).then(userDB=>{
        const userScore = userDB.data().score;
        updateDoc(userRef, {score:userScore+1})
      })
    }
  }

  randomLiePosition = liePosition();
  console.log(randomLiePosition);

  if (user.name.length > 0) {
    return (
      <div className="App">

        <button onClick={nextRound}>Set a new round</button>
        <div className="container">
          <div id={box1.id} className="box1" onClick={handleClick}>{box1.answer}</div>
          <div id={box2.id} className="box2" onClick={handleClick}>{box2.answer}</div>
          <div id={box3.id} className="box3" onClick={handleClick}>{box3.answer}</div>

        </div>

        <Scoreboard />
      </div>

    );
  } else {
    return <h1>Please login</h1>
  }
}

export default App;


function shuffle(array) {
  let currentIndex = array.length, randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
  }

  return array;
}