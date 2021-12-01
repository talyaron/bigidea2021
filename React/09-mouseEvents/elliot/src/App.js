import { useRef } from 'react';
import './App.css';
//import seaMP3 from './words/sea.mp3';
//import landMP3 from './words/land.mp3';
//import startMP3 from './words/startGame.mp3';
//import endMP3 from './words/endGame.mp3';

function App() {
  const circle = useRef(null);
  var score = 0;
  var roundSector = '';
  var chosenSector = null;
  var intervalTime = (0.5 + Math.random())*1000;
  var roundInProgress = false;
  var gameOver = false;
  
  //const sea = new Audio(seaMP3);
  //const land = new Audio(landMP3);
  //const gameStart = new Audio(startMP3);
  //const gameEnd = new Audio(endMP3);

  function startGame(){
    //gameStart.play();
    while(gameOver == false){
      playRound();
    }
    //gameEnd.play()
    alert(`GAME OVER! Your final score is: ${score} pts`);
  }

  function playRound(){
    generateRoundValues();
    const timeOut = setTimeout(() => {checkAnswer()}, intervalTime);
    while(roundInProgress){
      if(chosenSector !== null){
        clearTimeout(timeOut);
        checkAnswer();
      }
    }
  }

  function checkAnswer(){
    roundInProgress = false;

    if(chosenSector == roundSector){
      chosenSector = null;
      score++;
    } else {
      circle.current.style.top = `500px`;
      circle.current.style.left = `40px`;
      gameOver = true;
    }
  }

  function generateRoundValues(){
    circle.current.style.top = `90px`;
    circle.current.style.left = `40px`;

    intervalTime = (0.5 + Math.random())*1000;
    console.log(intervalTime);

    if(Math.random() <= 0.5){
      roundSector = 'land';
      //land.play();
    } else {
      roundSector = 'sea';
      //sea.play();
    }

    roundInProgress = true;
  }


  function handleClick(ev){
    if(roundInProgress){
      chosenSector = ev.target.id;

      const x = ev.clientX;
      const y = ev.clientY;

      circle.current.style.top = `${y - 5}px`;
      circle.current.style.left = `${x - 5}px`;
    }
  }
  
  return (
    <div>
      <div id='sea' className='box blue' onClick={handleClick}>

      </div>

      <div id='land' className='box brown' onClick={handleClick}>

      </div>

      <div ref={circle} className='circle'></div>

      <input type='button' placeholder='Start' onClick={startGame}></input>
    </div>
  );
}

export default App;
