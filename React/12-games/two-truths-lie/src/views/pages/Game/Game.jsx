import "./Game.css";
import { db } from "../../../functions/firebase/config";
import { useEffect, useState } from "react";
import { doc, setDoc, updateDoc, where, deleteDoc, onSnapshot, collection, query, getDocs, getDoc } from "firebase/firestore";

//components
import Scoreboard from "../../components/Scoreboard/Scoreboard";
import { func } from "prop-types";

let questionsArr = [];
let q;
let roundIsClicked = false;
let chosenAnswer = '';
let numAnswers;


function App({ user, setUser }) {

  const gameReferncesRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "reference", "values");
  const selectedQuestionRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn");
  const playersRef = collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players");
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
  const [remainingQuestions, setRemainingQuestions] = useState(0)
  const [remainingNames, setRemainingNames] = useState("");
  const [questionResult, setQuestionResult] = useState('');
  const remainingNamestemp = []
  const valuesRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "reference", "values");

  useEffect(() => {



    //listen to the number of players
    const unsubscribePlayers = onSnapshot(playersRef, playerDB => {
      numAnswers = playerDB.size;
    })

    //listen to answerd
    const unsubscribeRefernces = onSnapshot(gameReferncesRef, referenceDB => {
      console.log(referenceDB.data())
      const answered = referenceDB.data().answered;
      console.log('......', answered)
      if (answered && typeof answered === 'number') {
        let totalAnswered = referenceDB.data().answered;
        setAnswered(`${totalAnswered}/${numAnswers}`);
      }
    })

    

    const unsubscribe = onSnapshot(selectedQuestionRef, (question) => {
      setAnswered(question.data().answered)
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
      console.log("Hi tal")
      let userNameTemp = selectedQuestion.user.name
      setQuestionName(userNameTemp)
      setShowQuestions(true)
      answers = shuffle(answers);
      setBox1(answers[0]);
      setBox2(answers[1]);
      setBox3(answers[2]);
    });

    async function OnStartup() {
      q = query(
        collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "questions")
      );
      const querySnapshot = await getDocs(q);
      let i = 1;
      const questionsArrTemp = [];
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
        questionsArrTemp.push(tempObj);
      });
      questionsArr = questionsArrTemp

      setRemainingQuestions(questionsArr.length)

      questionsArr.forEach((doc) => {
        let name = doc.name;
        remainingNamestemp.push(name + ", ")
      }

      )
      setRemainingNames(remainingNamestemp)
    }
    OnStartup();

    return () => {
      unsubscribe();
      unsubscribeRefernces();
    }
  }, []);

  async function nextRound() {
    //radmoly get a question
    setQuestionResult('');
    roundIsClicked = false;
    chosenAnswer = '';
    let indexChosen = Math.floor(Math.random() * questionsArr.length);
    let data = questionsArr[indexChosen];
    if (questionsArr.length >= 1) {
      questionsArr.splice(indexChosen, 1);
      updateDoc(selectedQuestionRef, {
        selectedQuestion: {
          true1: data.true1,
          true2: data.true2,
          untrue: data.untrue,
          user: { name: data.name },
        },
      });
      console.log(questionsArr);
      setRemainingQuestions(questionsArr.length)
      questionsArr.forEach((doc) => {
        let name = doc.name;
        remainingNamestemp.push(name + ", ")
      }

      )
      setRemainingNames(remainingNamestemp)
    } else {
      alert('Game Over!')
    }

    let gameDoc = await getDoc(gameReferncesRef);



    updateDoc(gameReferncesRef, { answered: 0 })
    setAnswered(`${0}/${numAnswers}`);
  }

  let randomLiePosition;

  function liePosition() {
    let randomNumber = Math.ceil(Math.random() * 3);
    // console.log(randomNumber);
    return randomNumber;
  }
  async function handleClick(ev) {
    chosenAnswer = ev.target.id;

    if ((chosenAnswer === "untrue") && (roundIsClicked === false)) {
      setQuestionResult('Correct');

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

    } else if (roundIsClicked === false) {
      setQuestionResult('Incorrect');

    }

    roundIsClicked = true;
    setShowQuestions(false);

    let gameDoc = await getDoc(gameReferncesRef);

    let addNum = gameDoc.data().answered + 1;
    updateDoc(gameReferncesRef, {
      answered: addNum
    })

    setAnswered(`${addNum}/${numAnswers}`);
  }
  async function handleClear() {// clears all questions 
    const q = query(collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions'));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((docDB) => {
      deleteDoc(doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'questions', docDB.id))
    });
    alert('questions successfully cleared')
  }

  async function resetGame() {// sets all players scores to 0 
    const scoresRef = collection(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players");
    getDocs(scoresRef).then(usersDB => {
      usersDB.forEach(user => {
        let userID = user.id;
        const userRef = doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players", userID);
        updateDoc(userRef, { score: 0 });
      })
    })
  };

  async function handleNameClear() { // clears all names 
 
    console.log('clearname') 
    const q = query(collection(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'players')); 
    const querySnapshot = await getDocs(q); 
    querySnapshot.forEach((docDB) => { 
        deleteDoc(doc(db, 'true-lie', 'qocj2PnYZcvmDXOf4mCn', 'players', docDB.id)) 
    }); 
  } 

  randomLiePosition = liePosition();
  // console.log(randomLiePosition);

  if (user.name.length > 0) {
    return (
      <div className="App page">
        <div className="answered">{answered} people have answered so far.</div>
        <button onClick={nextRound}>Set a new round</button>
        <button onClick={resetGame}>Reset Scores</button>
        <button onClick={handleClear}>Clear All Questions</button>
        <button onClick={handleNameClear}>Clear All Names</button>
        <div>Remaining Questions: {remainingQuestions}</div>
        <div>Questions remaining from: {remainingNames}</div>
        {showQuestions ?
          <div className="optionsWrapper">
            <h3>{questionName}</h3>

            <div id={box1.id} className="box1 hover" onClick={handleClick}>
              {box1.answer}
            </div>
            <div id={box2.id} className="box2 hover" onClick={handleClick}>
              {box2.answer}
            </div>
            <div id={box3.id} className="box3 hover" onClick={handleClick}>
              {box3.answer}
            </div>
            <h2>{questionResult}</h2>
          </div>
          : null}

        <Scoreboard />


      </div>
    );
  } else {
    return <div className='page'>
      <h1>Please login</h1>;
    </div>
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

