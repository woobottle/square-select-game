import React, { useEffect, useMemo, useRef, useState } from "react";
import { ScoreBoard, GameBoard } from "./components";
import { useInterval } from "./common/hooks";
import {
  initialStage,
  initialTime,
  initialScore,
} from "./common/constants/index";
import { getResultText } from "./common/utils";

function App() {
  const [stage, setStage] = useState<number>(initialStage);
  const [time, setTime] = useState<number>(initialTime);
  const [score, setScore] = useState<number>(initialScore);
  const [isRunning, setIsRunning] = useState<boolean>(true);
  const resultText = useMemo(() => getResultText(stage, score), [stage, score]);
  const timeRef = useRef<number>(time);

  useInterval(
    () => setTime((currTime) => (currTime -= 1)),
    isRunning ? 1000 : null
  );

  useEffect(() => {
    timeRef.current = time;
    if (time <= 0) {
      setTime(initialTime);
      setIsRunning(false);
    }
  }, [time]);

  useEffect(() => {
    if (isRunning === false) {
      alert(resultText);

      setStage(initialStage);
      setTime(initialTime);
      setScore(initialScore);
      setIsRunning(true);
    }
  }, [isRunning, resultText]);

  return (
    <div className="App">
      <ScoreBoard stage={stage} time={time} score={score} />
      <GameBoard
        timeRef={timeRef}
        stage={stage}
        setStage={setStage}
        setTime={setTime}
        setScore={setScore}
      />
    </div>
  );
}

export default App;
