import './SearchBar.css';
import { useState } from 'react';
import { getDatabase, ref, onValue, query, db } from "firebase/database";
import { collection, getDocs, where, getFirestore} from '@firebase/firestore';


const tags = ['newest','popular', 'recent'];




function SearchBar() {
   var searchOption;
   const db = getFirestore();
   const [articles, setArticles]= useState([])
   const [hidden, setHidden] = useState(true)
   

  async function getFilter(ev){
    ev.preventDefault();
    const arr= [];
    setHidden(false)
 
  }
  async function getTarget(ev) {
    let arr2= [];
    if (ev.key === 'Enter') {
    ev.preventDefault();
    searchOption= ev.target.value;
    console.log(searchOption);
    const q = query(collection(db, "events"), where("Title", ">=", searchOption));
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {  
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
      arr2.push(doc.data());
    });
    arr2.sort(function(a, b){return a-b});
    setArticles(arr2);
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
      {articles.map((article, i) => (
    <li className="travelcompany-input" key={i}>
        <span className="input-label"> {i+1}. {article.Title} Written on {article.Date} by {article.creator} and currently has {article.views} views</span> <img src= {article.Image}/> 
    </li>
))}
    </div>
  )
}

export default SearchBar;