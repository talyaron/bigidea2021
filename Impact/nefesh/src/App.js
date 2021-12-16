import React, { useState } from 'react';
import ArticleCreation from './articleCreation/ArticleCreation';
 
function App() {
  const [isOpen, setIsOpen] = useState(false);
 
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
 
  return <div>
    <input
      type="button"
      value="Click to Create Article"
      onClick={togglePopup}
    />
    
    {isOpen && <ArticleCreation
      content={<>
        <b>Input information here</b>
        <br/>
        <input type= "text" placeholder= "Enter article title here"/>
        <br/>
        <input type= "text" placeholder= "Enter name here"/>
        <br/>
        <input type= "text" placeholder= "Enter text here"/>
        <br/>
        <input type= "image" placeholder= "Enter cover image here"/>
        <br/>
        <input type= "text" placeholder= "Enter date here"/>
        <br/>
        <button>Create Article</button>
      </>}
      handleClose={togglePopup}
    />}
  </div>
}
 
export default App;