import { useEffect,useState } from 'react';
import './App.css';
import {db} from './functions/firebase/config';
import { doc, setDoc } from "firebase/firestore"

function App() {

  // useEffect(()=>{
  //   const userRef=doc(db,'users','me')
  //   setDoc(userRef,{name:"szymon",image:"https://i.ytimg.com/vi/BCr7y4SLhck/maxresdefault.jpg"})
  // },[])

  function handleSubmit(ev){
    ev.preventDefault();
    const setName= ev.target.elements.name.value;
    const hideName= ev.target.elements.name;
    const setAnswer=Number(ev.target.elements.answer.value);
    setDoc(doc(db,"answers","answer"),{answer:setAnswer,name:setName});
    hideName.style.display="none"
  }

return (
  <form onSubmit={handleSubmit}>
    <input type="text" name="name"></input>
    <input type="text" name="answer"></input>
    <input type="submit" value="Submit"></input>
  </form>
)

}

export default App;