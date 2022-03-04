import styled from "styled-components";

interface ScoreBoardProps {
  stage: number;
  remainSeconds: number;
  score: number;
}

const ScoreBoard = ({ stage, remainSeconds, score }: ScoreBoardProps) => {
  return (
    <ScoreBoardWrapper>
      <p>
        스테이지: {stage}, 남은시간: {remainSeconds}, 점수: {score}
      </p>
    </ScoreBoardWrapper>
  );
};

export default ScoreBoard;

const ScoreBoardWrapper = styled.div`
  width: 30%;
  justify-content: center;
  display: flex;
`;
