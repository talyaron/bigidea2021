import { db } from '../../../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot, collection, updateDoc } from 'firebase/firestore'
import { useState } from 'react';
import LinkHeader from '../../components/LinkHeader/LinkHeader';

import './Login.css';
import { Link } from 'react-router-dom';


function Login({ user, setUser }) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log('login', user)

  async function handleSubmit(ev) {

    ev.preventDefault();
    const setName = ev.target.elements.userName.value;
    const setPic = ev.target.elements.userPicture.value;
    console.log(ev.target.elements.userName.value);
    console.log(ev.target.elements.userPicture.value);
    

    setDoc(doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players", setName), {
      image: setPic,
      score: 0,
      name: setName

    })
    setUser({ name: setName, image: setPic })
    setIsLoggedIn(true)







  }
  if (!isLoggedIn) {
    console.log('!isLoggedIn')
    return (
      <div className="box">
        <form onSubmit={handleSubmit} className="box">
          <input type="text" placeholder='Username' name="userName" className="txtinput" />
          <input type="text" placeholder='User Picture' name="userPicture" className="txtinput" />
          <input type="submit" value="Submit" className="submit"/>
        </form>

      </div>
    );
  }
  else {
    console.log('isLoggedIn')
    return (
      <div className="box">
        <div id="namebox">
          Username: {user.name}
        </div>
        <div id="picture">
          Here's a fun picture
          <img id="picture2" src={user.image} />
        </div>
      </div>

    )
  }
}


export default Login;