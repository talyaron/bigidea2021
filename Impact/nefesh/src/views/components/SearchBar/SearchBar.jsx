import './SearchBar.css';
import { useState, useEffect} from 'react';
import { db } from '../../../functions/firebase/config';
import { collection, query, where, orderBy, onSnapshot} from 'firebase/firestore';

const tags = ['newest','popular', 'recent'];
const tempArticles= ["NEWEST", "POPULAR", 'RECENT'];


function SearchBar() {
   var searchOption;
   const [articles, setArticles]= useState("")

  
  function getTarget(ev) {
    ev.preventDefault();
    searchOption= ev.target.value;
    console.log(searchOption);
    if(searchOption=== 'newest'){
     setArticles(tempArticles[0]);
      

    }
    else if(searchOption=== 'popular'){
      setArticles(tempArticles[1])
      
    }
    else if(searchOption=== 'recent'){
      setArticles(tempArticles[2])

    }

  
  }
  return (
    <div>
      <input type="text" id= "searchBar" name= "searchBar" list="data" onChange={getTarget} />

      <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>
          <div name= "articles">{articles}</div>

    </div>
  )
}

export default SearchBar;