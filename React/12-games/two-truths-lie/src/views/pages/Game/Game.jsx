import "./Game.css";
import { db } from "../../../functions/firebase/config";
import { useEffect, useState } from "react";
import { doc, setDoc, updateDoc, deleteDoc, onSnapshot, collection, query, getDocs, getDoc } from "firebase/firestore";

//components
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import { func } from "prop-types";

let questionsArr = [];
let q;


function App({ user, setUser }) {
  const selectedQuestionRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn");
  const [questionAuthor, setQuestionAuthor] = useState("");
  const [true1, setTrue1] = useState("");
  const [true2, setTrue2] = useState("");
  const [untrue, setUntrue] = useState("");
  const [box1, setBox1] = useState("temp");
  const [box2, setBox2] = useState("temp");
  const [box3, setBox3] = useState("temp");
  const [showQuestions, setShowQuestions] = useState(true);
  const [questionName, setQuestionName] = useState('name place holder');
  const [display, setDisplay] = useState("block");
  const [answered, setAnswered] = useState(0);

  useEffect(() => {
   const unsubscribe =  onSnapshot(selectedQuestionRef, (question) => {
      const selectedQuestion = question.data().selectedQuestion;
      let answers = [
        {
          answer: selectedQuestion.true1,
          id: "true1",
        },
        {
          answer: selectedQuestion.true2,
          id: "true2",
        },
        {
          answer: selectedQuestion.untrue,
          id: "untrue",
        },
      ];
      let userNameTemp = selectedQuestion.user.name
      setQuestionName(userNameTemp)
      setShowQuestions(true)
      answers = shuffle(answers);
      setBox1(answers[0]);
      setBox2(answers[1]);
      setBox3(answers[2]);
    });

    async function OnStartup() {
      //questionsRef = await collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions')
      q = query(
        collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "questions")
      );
      const querySnapshot = await getDocs(q);
      let i = 1;
      querySnapshot.forEach((doc) => {
        let data = doc.data();
        let tempObj = {
          name: data.user.name,
          true1: data.true1,
          true2: data.true2,
          untrue: data.untrue,
          index: i,
        };
        i++;
        questionsArr.push(tempObj);
        // console.log(questionsArr);
      });
<<<<<<< Updated upstream
=======
      questionsArr = questionsArrTemp

      setRemainingQuestions(questionsArr.length);
     
      questionsArr.forEach((doc)=>{
        let name=doc.name;
        remainingNamestemp.push(name+", ")
      }
      
      )
      setRemainingNames(remainingNamestemp);
>>>>>>> Stashed changes
    }
    OnStartup();

    return ()=>{
      unsubscribe()
    }
  }, []);

  async function nextRound() {
    //radmoly get a question
    let indexChosen = Math.floor(Math.random() * questionsArr.length);
    let data = questionsArr[indexChosen];
    if (questionsArr.length >= 1){
      questionsArr.splice(indexChosen,1);
      updateDoc(selectedQuestionRef, {
        selectedQuestion: {
          true1: data.true1,
          true2: data.true2,
          untrue: data.untrue,
          user: { name: data.name },
        },
      });
      console.log(questionsArr);
    } else{
        alert('Game Over!')
      }
      const gameRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn");
      let gameDoc = await getDoc(gameRef);
  
      updateDoc(gameRef, { answered: 0 })
      setAnswered(0);
    }
   
  let randomLiePosition;

  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3);
    // console.log(randomNumber);
    return randomNumber;
  }
  async function handleClick(ev) {
    if (ev.target.id === "untrue") {
      // alert("user", user.name, user.id, "got one point");
      const userID = user.name;
      // console.log(userID, "is name");
      const userRef = doc(
        db,
        "true-lie",
        "qocj2PnYZcvmDXOf4mCn",
        "players",
        userID
      );
      let userScoreRef = await getDoc(userRef);
      let userScore = userScoreRef.data().score;
      userScore = userScore + 1;
      updateDoc(userRef, {
        score: userScore,
      });
      
     
    }
    else {

      setDisplay("none")
      ev.target.style.display = display;
    }

    setShowQuestions(false);

    //get previous count before adding to it
    const gameRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn");
    let gameDoc = await getDoc(gameRef);

    let addNum = gameDoc.data().answered + 1;
    
    updateDoc(gameRef, {
      answered: addNum
    })
    setAnswered(addNum);
  }

  async function resetGame () {

    const scoresRef = collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players");
    getDocs(scoresRef).then(usersDB => {
      usersDB.forEach(user => {
        let userID = user.id;
        const userRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players", userID);
        updateDoc(userRef, {score: 0});
      })
    })
  }

  randomLiePosition = liePosition();
  // console.log(randomLiePosition);

  if (user.name.length > 0) {
    return (
      <div className="App">
        <div className="answered">{answered} people have answered so far.</div>
        <button onClick={nextRound}>Set a new round</button>
        <button onClick={resetGame}>Reset Scores</button>
        <div className="container">
          <h3>{questionName}</h3>
          {showQuestions?
          <div className='optionsWrapper'>
            <div id={box1.id} className="box1" onClick={handleClick}>
              {box1.answer}
            </div>
            <div id={box2.id} className="box2" onClick={handleClick}>
              {box2.answer}
            </div>
            <div id={box3.id} className="box3" onClick={handleClick}>
              {box3.answer}
            </div>
            
          </div>
          : null}
        </div>

        <Scoreboard />
      </div>
    );
  } else {
    return <h1>Please login</h1>;
  }
}

export default App;

function shuffle(array) {
  let currentIndex = array.length,
    randomIndex;

  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}

