import './SearchBar.css';
import { useState } from 'react';

const tags = ['newest','popular', 'recent'];



function SearchBar() {
   var searchOption;
   const [articles, setArticles]= useState("")

  
  function getTarget(ev) {
    ev.preventDefault();
    searchOption= ev.target.value;
    console.log(searchOption);



  
  }
  return (
    <div>
      <input type="text" name= "searchBar" list="data" onChange={getTarget} />

      <datalist id="data">
        {tags.map((item, key) =>
          <option key={key} value={item} />
        )}
      </datalist>
          <div name= "articles">{}</div>

    </div>
  )
}

export default SearchBar;