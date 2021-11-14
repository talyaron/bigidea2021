import { useEffect, useState } from 'react'
import './App.css';
import { db } from './functions/firebase/config';
import { doc, onSnapshot } from "firebase/firestore";

function App() {
  const [userObj, setUserObj] = useState({ name: '', image: '' })
  const [answerObj, setAnswerObj] = useState({ name: '', answer: 0 })
  useEffect(() => {
    const userRef = doc(db, 'users', 'me')
    // setDoc(userRef,{name:'Tal', image:'https://dailygazette.com/wp-content/uploads/fly-images/126428/shutterstock_245726512-scaled-940x940.jpg'})
    onSnapshot(userRef, userDB => {
      if (userDB.exists()) {
        console.log(userDB.data())
        const { name, image } = userDB.data();
        if (!name) console.error('No user in DB');
        if (!image) console.error('No image in DB');

        if (typeof image === 'string' && typeof name === 'string') {
          setUserObj({ name, image })
        }
      }
    })

    const answersRef = doc(db, 'answers', 'answer')
    onSnapshot(answersRef, (answerDB) => {
      console.log(answerDB.data);
      // const
      // setAnswerObj()
    })
  }, []);


  return (
    <div className="App">
      <header className="App-header">
        <div className='userCard'>
          {/* <img src={userObj.image}></img>
          <h1>{userObj.name}</h1> */}
        </div>
      </header>
    </div>
  );
}

export default App;
