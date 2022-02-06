import React, { useState } from 'react';
import { ScoreBoard, GameBoard } from './components'
import './App.css';

function App() {
  const [stage, setStage] = useState<number>(1);
  const [time, setTime] = useState<number>(15);
  const [score, setScore] = useState<number>(0);

  return (
    <div className="App">
      <ScoreBoard stage={stage} time={time} score={score} setTime={setTime} setStage={setStage} setScore={setScore}/>
      <GameBoard time={time} stage={stage} setStage={setStage} setTime={setTime} setScore={setScore}/> 
    </div>
  );
}

export default App;
