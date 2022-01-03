import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import manCityLogo from './logos/110.png';
import chelseaLogo from './logos/106.png';
import manUtdLogo from './logos/105.png';
import wolvesLogo from './logos/15.png';
import norwichLogo from './logos/16.png';
import westHamLogo from './logos/113.png';

//components

let variable =0

function App() {
  
  const [display, setDisplay] = useState();
  const [logo1, setLogo1] = useState(manCityLogo);
  const [logo2, setLogo2] = useState(chelseaLogo); 
  const [gameTime, setGameTime] = useState("04:30");
  const [option1, setOption1] = useState("Manchester City");
  const [option2, setOption2] = useState("Draw");
  const [option3, setOption3] = useState("Chelsea");
  const [rate1, setRate1] = React.useState(false);
  const [rate2, setRate2] = React.useState(false);
  const [rate3, setRate3] = React.useState(false);
  const [tempRate1, setTempRate1] = useState("");
  const [tempRate2, setTempRate2] = useState("");
  const [tempRate3, setTempRate3] = useState("");
  const [game1Display, setGame1Display] = useState();
  const [game2Display, setGame2Display] = useState();
  const [game3Display, setGame3Display] = useState();
  const [baseGameDisplay, setBaseGameDisplay] = useState(game1Display);
  const [team1,setTeam1]=useState("Man City");
  const [team2,setTeam2]=useState("Chelsea");
  

  //Array of Teams with Data
  let arrayTeams = [];
  let arrayGames = []
  
  
  let manCity = {
    name: "Manchester City",
    shortName: "Man City",
    id: 110,
    img: {manCityLogo},
    gameID: 1
  }
  let chelsea = {
    name: "Chelsea",
    id: 106,
    img: {chelseaLogo},
    gameID: 1
  }
  let manUtd = {
    name: "Manchester United",
    shortName: "Man United",
    id: 105,
    img: {manUtdLogo},
    gameID: 2
  }
  let wolves = {
    name: "Wolverhampton Wanderers",
    shortName: "Wolves",
    id: 15,
    img: {wolvesLogo},
    gameID: 2
  }
  let westHam = {
    name: "West Ham United",
    shortName: "West Ham",
    id: 113,
    img: {westHamLogo},
    gameID: 3
  }
  let norwich = {
    name: "Norwich City",
    shortName: "Norwich",
    id: 16,
    img: {norwichLogo},
    gameID: 3
  }
  arrayTeams.push(manCity, chelsea);
  console.log(arrayTeams);

  let game1 = {
    homeTeam: manCity,
    awayTeam: chelsea,
    gameTime: "04:30",
    totalVotes: "5,037",
    options: 
    {
      option1: {
        num: 1,
        name: "Manchester City", 
        rate: "-120",
        fanConsensus: "54%"
      },
      option2: {
        num: 2,
        name: "Draw",
        rate: "+195",
        fanConsensus: "11%"
      },
      option3: {
        num: 3,
        name: "Chelsea",
        rate: "+120",
        fanConsensus: "35%"
      }
    }

  }

  let game2 = {
    homeTeam: manUtd,
    awayTeam: wolves,
    gameTime: "09:30",

    options: 
    {
      option1: {
        num: 1,
        name: "Manchester United", 
        rate: "-150",
        fanConsensus: "54%"
      },
      option2: {
        num: 2,
        name: "Draw",
        rate: "+195",
        fanConsensus: "11%"
      },
      option3: {
        num: 3,
        name: "Wolves",
        rate: "+410",
        fanConsensus: "35%"
      }
    }

  }

  let game3 = {
    homeTeam: westHam,
    awayTeam: norwich,
    gameTime: "11:45",
    
    options: 
    {
      option1: {
        num: 1,
        name: "West Ham", 
        rate: "-100",
        fanConsensus: "54%"
      },
      option2: {
        num: 2,
        name: "Draw",
        rate: "+105",
        fanConsensus: "11%"
      },
      option3: {
        num: 3,
        name: "Norwich",
        rate: "+210",
        fanConsensus: "35%"
      }
    }
  }
  arrayGames.push(game1);



  function handleClickNext(){
    console.log("arrived");
    variable+=1
    if (variable%3==0){
      setTeam1("Man City");
      setTeam2("Chelsea");
      setLogo1(manCityLogo);
      setLogo2(chelseaLogo);
      setGameTime(game1.gameTime);
      setOption1(game1.options.option1.name);
      setOption2(game1.options.option2.name);
      setOption3(game1.options.option3.name);
      setTempRate1(game1.options.option1.rate);
      setTempRate2(game1.options.option2.rate);
      setTempRate3(game1.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    else if (variable%3==1){
      setTeam1("Man United")
      setTeam2("Wolves")
      setLogo1(manUtdLogo);
      setLogo2(wolvesLogo);
      setGameTime(game2.gameTime);
      setOption1(game2.options.option1.name);
      setOption2(game2.options.option2.name);
      setOption3(game2.options.option3.name);
      setTempRate1(game2.options.option1.rate);
      setTempRate2(game2.options.option2.rate);
      setTempRate3(game2.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    else{
      setTeam1("West Ham")
      setTeam2("Norwich")
      setLogo1(westHamLogo);
      setLogo2(norwichLogo);
      setGameTime(game3.gameTime);
      setOption1(game3.options.option1.name);
      setOption2(game3.options.option2.name);
      setOption3(game3.options.option3.name);
      setTempRate1(game3.options.option1.rate);
      setTempRate2(game3.options.option2.rate);
      setTempRate3(game3.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    
    
  }

  function handleClickPrevious(){
    console.log("arrived");
    variable-=1
    if (variable%3==0){
      setTeam1("Manchester City");
      setTeam2("Chelsea");
      setLogo1(manCityLogo);
      setLogo2(chelseaLogo);
      setGameTime(game1.gameTime);
      setOption1(game1.options.option1.name);
      setOption2(game1.options.option2.name);
      setOption3(game1.options.option3.name);
      setTempRate1(game1.options.option1.rate);
      setTempRate2(game1.options.option2.rate);
      setTempRate3(game1.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    else if (variable%3==1){
      setTeam1("Manchester United")
      setTeam2("Wolves")
      setLogo1(manUtdLogo);
      setLogo2(wolvesLogo);
      setGameTime(game2.gameTime);
      setOption1(game2.options.option1.name);
      setOption2(game2.options.option2.name);
      setOption3(game2.options.option3.name);
      setTempRate1(game2.options.option1.rate);
      setTempRate2(game2.options.option2.rate);
      setTempRate3(game2.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    else{
      setTeam1("West Ham")
      setTeam2("Norwich")
      setLogo1(westHamLogo);
      setLogo2(norwichLogo);
      setGameTime(game3.gameTime);
      setOption1(game3.options.option1.name);
      setOption2(game3.options.option2.name);
      setOption3(game3.options.option3.name);
      setTempRate1(game3.options.option1.rate);
      setTempRate2(game3.options.option2.rate);
      setTempRate3(game3.options.option3.rate);
      setRate1(false);
      setRate2(false);
      setRate3(false);
    }
    
    
  }

  function handleOptions(){
    console.log("working");
    setRate1(true);
    setRate2(true);
    setRate3(true);
    if (tempRate1 === "") {
      setRate1(game1.options.option1.rate);
      setRate2(game1.options.option2.rate);
      setRate3(game1.options.option3.rate);
    }
    else {
      setRate1(tempRate1);
      setRate2(tempRate2);
      setRate3(tempRate3);
    }
    
  }







  return (
    <div>
      <div className="box"> Premier League
        <div className="line"></div>

        <div className = "teamLeft">{team2}</div>
        <div className = "teamRight">{team1}</div>
        <img className="logoRight" src={logo2}></img>
        <img className="logoLeft" src={logo1}></img>
        <div className="time">{gameTime}</div>
        
        <div className="winner">Who Will Win?</div>

        <div className="option1" onClick = {handleOptions}>{option1}</div>
        <div className="option2" onClick = {handleOptions}>{option2}</div>
        <div className="option3" onClick = {handleOptions}>{option3}</div>
        
        
        <div className="rate1">{rate1}</div>
        <div className="rate2">{rate2}</div>
        <div className="rate3">{rate3}</div>
        <a href = "https://www.365scores.com" target = "_blank">Bet Now</a>
        
        

        <div className="next" onClick = {handleClickNext}>Next</div>
        <div className="previous" onClick = {handleClickPrevious}>Previous</div>    
        
        
        {/* <button onClick={() => setGame2Display((l) => !l)}>Next</button>

        <div style={{ display: game1Display ? "block" : "none" }}>
          <img className="logoRight" src={manCityLogo}></img>
          <img className="logoLeft" src={chelseaLogo}></img>
          <div className="time">{game1.gameTime}</div>
          <div className="option1" onClick = {handleOptions}>{game1.options.option1.name}</div>
          <div className="option2" onClick = {handleOptions}>{game1.options.option2.name}</div>
          <div className="option3" onClick = {handleOptions}>{game1.options.option3.name}</div>

          <button className = "button button2" onClick={handleBet}>Bet Now </button>
          
        </div>

        <div style={{ display: game2Display ? "block" : "none" }}>
          <img className="logoRight" src= {manUtdLogo}></img>
          <img className="logoLeft" src={wolvesLogo}></img>
          <div className="time">{game2.gameTime}</div>
          <div className="option1" onClick = {handleOptions}>{game2.options.option1.name}</div>
          <div className="option2" onClick = {handleOptions}>{game2.options.option2.name}</div>
          <div className="option3" onClick = {handleOptions}>{game2.options.option3.name}</div>

          <button className = "button button2" onClick={handleBet}>Bet Now </button>

        </div>

        <div style={{ display: game3Display ? "block" : "none" }}>
          <img className="logoRight" src= {westHamLogo}></img>
          <img className="logoLeft" src={norwichLogo}></img>
          <div className="time">{game3.gameTime}</div>
          <div className="option1" onClick = {handleOptions}>{game3.options.option1.name}</div>
          <div className="option2" onClick = {handleOptions}>{game3.options.option2.name}</div>
          <div className="option3" onClick = {handleOptions}>{game3.options.option3.name}</div>

          <button className = "button button2" onClick={handleBet}>Bet Now </button>

        </div>




        <div style={{ display: baseGameDisplay ? "block" : "none" }}>
          <img className="logoRight" src={manUtdLogo}></img>
          <img className="logoLeft" src={wolvesLogo}></img>
          <div className="time">{game2.gameTime}</div>
  </div> */}

      </div> 

    </div>

  );
}

export default App;
