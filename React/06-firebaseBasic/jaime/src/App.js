import { useEffect, useState } from 'react';
import { db } from './functions/firebase/config';
import { doc, query, orderBy, onSnapshot, collection, updateDoc, addDoc } from "firebase/firestore";
import './App.css';

function App() {

  

  function handleUpdate (ev) {
    if(ev.keyCode === 13) {

      addDoc(collection(db, 'messages'), {
        messageValue: ev.target.value,
        time:new Date().getTime()
      });

      ev.preventDefault();
    }
  }

  useEffect(() => {

    const messagesRef = collection(db, 'messages');
    const q = query(messagesRef, orderBy('time', 'asc'))
    var input = document.getElementById('messageInput');

    onSnapshot(q, messagesDB => {
      const messageArr = [];

      messagesDB.forEach(messagesDB => {
        messageArr.push(messagesDB.data());
        console.log(messagesDB.data().time)
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
