import {useState} from 'react'
import Login from './views/pages/Login/Login'

import './App.css';
import EnterQuestions from './views/pages/EnterQuestion/EnterQuestion';


function App() {

  const [user, setUser]= useState(
    {name: "", image: ""}
  )

  return (
    <div className="App">
      <EnterQuestions user={user} />
      <Login user={user} setUser={setUser} />
    </div>
  );
}



export default App;
