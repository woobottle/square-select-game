import React, { useEffect, useMemo, useRef, useState } from "react";
import { ScoreBoard, GameBoard } from "./components";
import { useInterval } from "./common/hooks";
import { INITIAL_STAGE, INITIAL_TIME, INITIAL_SCORE } from "./common/constants";
import { getResultText } from "./common/utils";

function App() {
  const [stage, setStage] = useState<number>(INITIAL_STAGE);
  const [time, setTime] = useState<number>(INITIAL_TIME);
  const [score, setScore] = useState<number>(INITIAL_SCORE);
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
      setTime(INITIAL_TIME);
      setIsRunning(false);
    }
  }, [time]);

  useEffect(() => {
    if (isRunning === false) {
      alert(resultText);

      setStage(INITIAL_STAGE);
      setTime(INITIAL_TIME);
      setScore(INITIAL_SCORE);
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
