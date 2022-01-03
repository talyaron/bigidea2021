import './App.css';
import React, { useEffect, useRef, useState } from 'react';
import manCityLogo from './logos/110.png';
import chelseaLogo from './logos/106.png';
import manUtdLogo from './logos/105.png';
import wolvesLogo from './logos/15.png';
import norwichLogo from './logos/16.png';
import westHamLogo from './logos/113.png';

//components


function App() {

  const [display, setDisplay] = useState();
  const [logo, setLogo] = useState();
  const [game1Display, setGame1Display] = useState();
  const [game2Display, setGame2Display] = useState();
  const [game3Display, setGame3Display] = useState();
  const [baseGameDisplay, setBaseGameDisplay] = useState(game1Display);

  //Array of Teams with Data
  let arrayTeams = [];
  let arrayGames = []
  
  
  let manCity = {
    name: "Manchester City",
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
    id: 105,
    img: {manUtdLogo},
    gameID: 2
  }
  let wolves = {
    name: "Wolverhampton Wanderers",
    id: 15,
    img: {wolvesLogo},
    gameID: 2
  }
  let westHam = {
    name: "West Ham United",
    id: 113,
    img: {westHamLogo},
    gameID: 3
  }
  let norwich = {
    name: "Norwich City",
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
        name: "Wolves",
        rate: "+120",
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
        name: "Norwich",
        rate: "+120",
        fanConsensus: "35%"
      }
    }
  }
  arrayGames.push(game1);



  function handleClick(){
    console.log("arrived");
    setBaseGameDisplay(game1Display);
    
  }

  function handleOptions(){
    console.log("working");
    
  }

  function handleBet(){
    console.log("Bet");
  }







  return (
    <div>
      <div className="box"> Premier League
        <div className="line"></div>
        
        
        <div className="winner">Who Will Win?</div>
        <div className="next" onClick = {handleClick}>Next</div>
        <div className="previous">Previous</div>    

        <button onClick={() => setGame2Display((l) => !l)}>Next</button>

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
        </div>

      </div>

    </div>

  );
}

export default App;
