import { useEffect, useState } from 'react';
import { db } from './functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot, collection, updateDoc, addDoc } from "firebase/firestore";
import './App.css';

function App() {

  const [messages, setMessages] = useState([]);

  function handleUpdate (ev) {
    if(ev.keyCode === 13) {

      addDoc(collection(db, 'messages'), {
        messageValue: ev.target.value
      });

      ev.preventDefault();
    }
  }

  useEffect(() => {

    const messagesRef = collection(db, 'messages');
    var input = document.getElementById('messageInput');

    onSnapshot(messagesRef, messagesDB => {
      const messageArr = [];
      messagesDB.forEach(messagesDB => {
        messageArr.push(messagesDB.data());
      })

      setMessages(messageArr)
    })

},[])

  return (
    <div className="App">
      {messages.map((message, i) =>{
        return (<div key={i}>{message.messageValue}</div>)
        })
      }
      <input type='text' placeholder='Type your message here' id='messageInput' onKeyUp={handleUpdate}/>
    </div>
  );
}

export default App;
