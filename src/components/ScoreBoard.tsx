/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { useInterval } from '../common/hooks/index';

interface HeaderProps {
  stage: number;
  time: number;
  score: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const Header = ({ stage, time, score, setTime, setStage, setScore}: HeaderProps ) => {
  const [isRunning, setIsRunning] = useState<boolean>(true)

  useEffect(() => {
    if (time <= 0) {
      setTime(0)
      setIsRunning(false)
    }
  }, [time])

  useEffect(() => {
    if (isRunning === false) {
      alert(score);
      setTime(15)
      setStage(1)
      setScore(0)
      setIsRunning(true);
    }
  }, [isRunning, score])

  useInterval(() => setTime((currTime) => currTime -= 1), isRunning ? 1000 : null);

  return (
    <div style={{display: "flex"}}>
      <div>스테이지: {stage}</div>
      <div>남은시간: {time}</div>
      <div>점수: {score}</div>
    </div>
  )
}

export default React.memo(Header);