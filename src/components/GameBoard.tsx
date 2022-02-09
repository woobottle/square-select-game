import React from "react";
import styled from "styled-components";
import { MINUS_TIME, INITIAL_TIME } from "../common/constants";
import { getBlockColors, getPlusScore } from "../common/utils";
import { BoardBlock } from "./BoardBlock";

interface GameBoardProps {
  stage: number;
  timeRef: React.MutableRefObject<number>;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const GameBoard = ({
  timeRef,
  stage,
  setStage,
  setTime,
  setScore,
}: GameBoardProps) => {
  const size = Math.pow(Math.ceil(stage / 2) + 1, 2);
  const answer = ~~(Math.random() * size);
  const questions = Array.from({ length: size }, (_, i) => i);
  const { answerColor, baseColor } = getBlockColors(stage);

  const wrongClick = () => {
    setTime((time) => (time -= MINUS_TIME));
  };

  const goNextStage = () => {
    const plusScore = getPlusScore(stage, timeRef.current);
    setScore((score) => (score += plusScore));
    setStage((stage) => (stage += 1));
    setTime(INITIAL_TIME);
  };

  return (
    <GameBoardWrapper>
      {questions &&
        questions.map((question) => (
          <BoardBlock
            size={size}
            onClick={question === answer ? goNextStage : wrongClick}
            color={question === answer ? answerColor : baseColor}
          />
        ))}
    </GameBoardWrapper>
  );
};

export default React.memo(GameBoard);

const GameBoardWrapper = styled.div`
  width: 840px;
  height: 840px;
  display: flex;
  flex-flow: row wrap;
`;
