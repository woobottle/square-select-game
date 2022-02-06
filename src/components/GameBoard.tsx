import React from "react";
import styled from "styled-components";
import { minusTime } from "../common/constants";
import { getBlockColors, getPlusScore } from "../common/utils";
import { BoardBlock } from "./BoardBlock";
import { initialTime } from "../common/constants/index";

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
  const questions = Array(size).fill(0);
  questions[answer] = 1;

  const { answerColor, baseColor } = getBlockColors(stage);
  const wrongClick = () => {
    setTime((el) => (el -= minusTime));
  };

  const nextStage = () => {
    const plusScore = getPlusScore(stage, timeRef.current);
    setScore((score) => (score += plusScore));
    setStage((el) => (el += 1));
    setTime(initialTime);
  };

  return (
    <GameBoardWrapper>
      {questions.map((question) => (
        <BoardBlock
          size={size}
          onClick={question === 0 ? wrongClick : nextStage}
          color={question === 0 ? baseColor : answerColor}
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

// answer: 0
// answerColor: "rgb(172, 111, 148)"
// baseColor: "rgb(94, 80, 88)" 60
// isPlaying: true
// onSelect: ƒ(t)
// score: 8
// stage: 2
// time: 15

// answer: 4
// answerColor: "rgb(163, 4, 26)"
// baseColor: "rgb(186, 27, 49)" 23
// isPlaying: true
// onSelect: ƒ(t)
// score: 2033
// stage: 6
// time: 14

// answer: 32
// answerColor: "rgb(136, 34, 145)"
// baseColor: "rgb(114, 12, 167)" 22
// isPlaying: true
// onSelect: ƒ(t)
// score: 18088
// stage: 9
// time: 14

// answer: 27
// answerColor: "rgb(192, 21, 160)"
// baseColor: "rgb(214, 43, 138)" 22
// isPlaying: true
// onSelect: ƒ(t)
// score: 28294
// stage: 10
// time: 14
