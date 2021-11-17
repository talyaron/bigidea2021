import logo from './logo.svg';
import './App.css';
import { db } from './functions/firebase/config';
import {useEffect} from 'react'
import {doc,setDoc, onSnapshot} from 'firebase/firestore'

function App() {
  const [user,setUser]= {name:'', Image:''}
  useEffect(()=>{
    const userRef=doc(db,'users', 'me')
    setDoc(userRef, {name:'Becky', image:'https://media.istockphoto.com/photos/cute-dachshund-dog-black-and-tan-dressed-in-a-yellow-rain-coat-stands-picture-id1206234208?k=20&m=1206234208&s=612x612&w=0&h=AtO3TrkPOG9DJ3KLqBYaNXX7NX04nAGXQ6JbMcgGnac='})
    onSnapshot(userRef, userDB=>{
      if(userDB.exists()){
      console.log(userDB.data())
      const{ user,Image}= userDB.data();
      if(!user) console.error('no user in db')
      if(!Image) console.error('no image in db')
      if(Image && user){
        setUserObj({user,Image})
      }
    }
    })
  },[]);
  return (
    <div className="App">
      <header className="App-header">
        <div className='userCard'>
          <img src={setUserObj.image}></img>
          <h1>{setUserObj.name}</h1>
        </div>
        
      {/* <form onSubmit="submitForm()">
        <input type="text" id="box"/>
        <input type="submit"/>
        </form> */}
      </header>
    </div>
  );
}

export default App;
