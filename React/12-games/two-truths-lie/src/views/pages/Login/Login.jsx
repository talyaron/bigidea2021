import { db } from '../../../functions/firebase/config';
import { doc, getDoc, setDoc, onSnapshot, collection } from 'firebase/firestore'
import { useState } from 'react';

import './Login.css';

function Login() {
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    const [user, setUser]= useState(
      {name: "", image: ""}
    )
     
    function handleSubmit(ev) {

        ev.preventDefault();
        const setName= ev.target.elements.userName.value;
        const setPic= ev.target.elements.userPicture.value;
        console.log(ev.target.elements.userName.value)
        console.log(ev.target.elements.userPicture.value)
          setDoc(doc(db, "true-lie", "qocj2PnYZcvmDXOf4mCn", "players", setName), {
          image: setPic,
          score: 0,
          name: setName

          })
          setUser({name: setName, image: setPic})
          setIsLoggedIn(true)
          
     


        
      
        
    }
    if(!isLoggedIn){
      return (
        <div>
          <form onSubmit={handleSubmit}>
              <input type="text" placeholder='Input Name Here' name="userName" />
              <input type="text" placeholder='Input Photo Here' name="userPicture" />
              <input type="submit" value="Submit" />
          </form>
  
          </div>
      );
    }
  else{
    return(
      <div> 
        <div id= "namebox">
        Your name is: {user.name}
        </div>
        <div id= "picture">
          Here's a fun picture
        <img src= {user.image}/>
        </div>
      </div>
      
    )
  }
}


export default Login;