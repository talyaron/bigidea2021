import './SearchBar.css';
import { useState } from 'react';
import { getDatabase, ref, onValue, collection, query, where, getDocs } from "firebase/database";


const tags = ['newest','popular', 'recent'];




function SearchBar() {
   var searchOption;
   const [articles, setArticles]= useState("")
   var arr=[];

  
  async function getTarget(ev) {
    if (ev.key === 'Enter') {
    ev.preventDefault();
    searchOption= ev.target.value;
    console.log(searchOption);
    const q = query(collection(db, "cities"), where("capital", "==", true));

    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    console.log(arr)

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
      <input type="text" name= "filterData" list="data" onKeyPress={getTarget} />

      {/* <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>
          <div name= "articles"></div> */}

    </div>
  )
}

export default SearchBar;