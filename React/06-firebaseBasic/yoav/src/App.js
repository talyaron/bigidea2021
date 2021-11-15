import { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import { collection, doc, setDoc, updateDoc, getDoc, onSnapshot } from "firebase/firestore";

function App() {

  const [cats, setCats] = useState([])
  const [messages, setMessages] = useState([])


  useEffect(() => {
    const catRef = doc(db, "cats", "nw03YaQ8CV4Zu6VS1sMy");

    //once
    getDoc(catRef).then(catDB => {
      console.log(catDB.data());

    })
    //listen
    onSnapshot(catRef, catDB => {
      console.log(catDB.data())
    })

    //add a cat
    // setDoc(doc(db, "cats", "secondCat"), {
    //   name: "Kitty",
    //   age: "0.5",
    // });

    //ref to collection of cats
    // const catsRef = collection(db, 'cats');
    // onSnapshot(catsRef, catsDB=> {
    //   const catsArr = [];

    //   catsDB.forEach(catDB=>{
    //     catsArr.push(catDB.data());
    //   })

    //   setCats(catsArr)
    // })

    const messagesRef = collection(db, 'messages');
    onSnapshot(messagesRef, messagesDB => {
      const messagesArr = [];

      messagesDB.forEach(messagesDB => {
        messagesArr.push(messagesDB.data())
      })

      setMessages(messagesArr);
    })
  }, [])


  function handleSetText(ev) {
    const chat = ev.target.value;
    const messages = doc(db, 'messages', 'test')
    updateDoc(messages, { chat });

  }

  
  return (
    <div className="App">
     
      <header className="App-header">
        {
          messages.map((message, i) => {
            return (<div key={i}>{message.name}</div>)
          })
        }

        <input
          type='text'
          placeholder='type here'
          onKeyUp={handleSetText}
        />

      </header>
    </div>
  );
}


export default App;
