import React, { useState } from 'react';




function Shuffle({true1, true2, untrue}) {
  // const [true1, setTrue1] = useState("Testing true 1");
  // const [true2, setTrue2] = useState("Testing true 2");
  // const [untrue, setUntrue] = useState("Testing untrue");
  const [box1Id,setBox1Id]=useState("temp");
  const [box2Id,setBox2Id]=useState("temp");
  const [box3Id,setBox3Id]=useState("temp");
  let untruePosition;
  const [box1, setBox1] = useState("temp");
  const [box2, setBox2] = useState("temp");
  const [box3, setBox3] = useState("temp");

  function shufflePositions() {
    untruePosition = Math.ceil(Math.random() * 3)
    let randomNumber2 = Math.ceil(Math.random() * 2)
    if (randomNumber2 === 1) {
      if (untruePosition === 1) {
        setBox1(untrue);
        setBox2(true1);
        setBox3(true2);
        setBox1Id("untrue")
        setBox3Id("true")
        setBox2Id("true")
      }
      else if (untruePosition === 2) {
        setBox1(true1);
        setBox2(untrue);
        setBox3(true2);
        setBox1Id("true")
        setBox2Id("untrue")
        setBox3Id("true")
      }
      else if (untruePosition === 3) {
        setBox1(true1);
        setBox2(true2);
        setBox3(untrue);
        setBox1Id("true")
        setBox2Id("true")
        setBox3Id("untrue")
      }
    }
    if (randomNumber2 === 2) {
      if (untruePosition === 1) {
        setBox1(untrue);
        setBox2(true2);
        setBox3(true1);
        setBox1Id("untrue")
        setBox2Id("true")
        setBox3Id("true")
      }
      else if (untruePosition === 2) {
        setBox1(true2);
        setBox2(untrue);
        setBox3(true1);
        setBox1Id("true")
        setBox2Id("untrue")
        setBox3Id("true")
      }
      else if (untruePosition === 3) {
        setBox1(true2);
        setBox2(true1);
        setBox3(untrue);
        setBox1Id("true")
        setBox2Id("true")
        setBox3Id("untrue")
      }
    }

    
  }

  function handleClick(ev){
    ev.preventDefault();
    shufflePositions();
  }
  


  return (
    <div className="App">
      <div className = "container"> 
        <div className = {box1Id} onClick = {handleClick}>{box1}</div>
        <div className = {box2Id} onClick = {handleClick}>{box2}</div>
        <div className = {box3Id} onClick = {handleClick}>{box3}</div>

      </div>
    </div>
  );
}

export default Shuffle;