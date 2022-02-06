import React from 'react';
import styled from 'styled-components';

interface ScoreBoardProps {
  stage: number;
  time: number;
  score: number;
}

const ScoreBoard = ({ stage, time, score }: ScoreBoardProps ) => { 
  return (
    <ScoreBoardWrapper>
      <p>스테이지: {stage}, 남은시간: {time}, 점수: {score}</p>
    </ScoreBoardWrapper>
  )
}

export default React.memo(ScoreBoard);

const ScoreBoardWrapper = styled.div`
  width: 30%;
  justify-content: center;
  display: flex;
`;