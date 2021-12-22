import './SearchBar.css';
import { useState } from 'react';
import { getDatabase, ref, onValue, query, db } from "firebase/database";
import { collection, getDocs, where, getFirestore} from '@firebase/firestore';


const tags = ['newest','popular', 'recent'];




function SearchBar() {
   var searchOption;
   const db = getFirestore();
   const [articles, setArticles]= useState("")
   const [hidden, setHidden] = useState(true)
   

  async function getFilter(ev){
    ev.preventDefault();
    const arr= [];
    setHidden(false)
    console.log("hi")
  }
  async function getTarget(ev) {
    const arr2=[];
    if (ev.key === 'Enter') {
    ev.preventDefault();
    searchOption= ev.target.value;
    console.log(searchOption);
    const q = query(collection(db, "events"), where("Title", "==", searchOption));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {  
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      arr2.push(doc.id);
    });
    
    console.log(arr2)

    }

    //insert filters
    //find articles with word in it, sort by which article has the word appear the most
    //for each article 
    // if newest --> check by date
    // if recent --> check by creation date
    // if popular --> check by most views



  
  }
  return (
    <div>
      
      <input type="text" name= "filterData" list="data" onClick={getFilter} />
        <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>
      <input type="text" name= "searchBar" hidden= {hidden} onKeyPress={getTarget} />
    </div>
  )
}

export default SearchBar;