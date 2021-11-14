import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { db } from './functions/firebase/config';
import { doc, getDoc, onSnapshot, setDoc, addDoc, collection } from "firebase/firestore";

function App() {

  const [messages, setMessages] = useState([]);

  useEffect(()=>{
    const catRef = doc(db, "cats", "4lPlSGGKWS5ZdPxixRlE");

    // READ (only reads once, will not update live)
    getDoc(catRef).then(catDB=>{
      console.log(catDB.data());
    })

    // LISTEN (will update live)
    onSnapshot(catRef,catDB=>{
      console.log(catDB.data());
    })

    // UPDATE (sets data of a doc, if doc doesnt exist, creates a new one)
    setDoc(doc(db, "cats", "secondCat"), {
      name: "Lexi",
    });
     // UPDATE (adds a new doc, if no ID like shown, uses AutoID) WILL CONTINUE TO CREATE
   // addDoc(collection(db, "cats"), {
   //   name: "Brooke",
   // });

    const docDataExamples = {
      stringExample: "Hello world!",
      booleanExample: true,
      numberExample: 3.14159265,
      arrayExample: [5, true, "hello"],
      nullExample: null,
      objectExample: {
          a: 5,
          b: {
              nested: "foo"
          }
      }
  };
    setDoc(doc(db,'docDataExamples','docDataExamples'),docDataExamples)

    const messagesRef = collection(db, 'messages');

    //ref to collection of cats
    const unsub = onSnapshot(messagesRef, messagesDB => {
      const messagesArr = []
      messagesDB.forEach(messagesDB => {
        messagesArr.push(messagesDB.data())
      });
      setMessages(messagesArr);
    })


    
    

  },[])

    function handleUpdate(ev){
      if (ev.keyCode === 13) {
        addDoc(collection(db, "messages"), {
             messageValue: ev.target.value
           });

        ev.preventDefault();

      }
    }

  return (
    <div className="App">
      <header className="App-header">
        <input id='myInput' type='text' onKeyUp={handleUpdate}></input>
        {
          messages.map((message,i)=>{
            return <div key={i}>{message.messageValue}</div>
          })
        }
      </header>
    </div>
  );
}

export default App;
