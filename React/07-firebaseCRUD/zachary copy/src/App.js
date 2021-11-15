// import './App.css';
// import {useState,useEffect} from 'react';
// import {db} from './firebase-config'
// import {collection,getDocs,addDoc}from 'firebase/firestore'
function App() {
  const[users,setUsers]=useState([]);
  const usersCollectionRef=collection(db, "Users");

  const [newName,setNewName]=useState("");
  const [newAge,setNewAge]=useState(0);

  function createUser (){
    console.log('add')
    addDoc(usersCollectionRef,{name:newName,age:newAge});
  };
  useEffect(() =>{
    async function getUsers (){
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc)=> ({...doc.data(), id:doc.id})));
      // data.forEach(data=>{
      //   console.log(data.data())
      // })
    };

    getUsers()
  },[])
  return (
   
    <div className="App">
      <input placeholder="Name..." onChange={(event)=>
      {setNewName(event.target.value)}}/>

      <input type="number" placeholder="Age..."
      onChange={(event)=>
        {setNewAge(event.target.value)}}/>

      <button onClick={createUser}> Create user</button>

      {users.map((user)=>{
        return <div>
          {" "}
          <h1>Name: {user.name}</h1>
          <h1>Age: {user.age}</h1>
          </div>
      })}
    </div>
  );
}

export default App;
