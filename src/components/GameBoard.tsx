import React from "react";
import styled from "styled-components";
import { BoardBlock } from "./BoardBlock";

interface GameBoardProps {
  stage: number;
  answerTileColor: string;
  wrongTileColor: string;
  answerIndex: number;
  onSelect: (input: number) => void;
}

const GameBoard = ({
  stage,
  answerTileColor,
  wrongTileColor,
  answerIndex,
  onSelect,
}: GameBoardProps) => {
  const size = Math.pow(Math.ceil(stage / 2) + 1, 2);
  const questions = Array.from({ length: size }, (_, i) => i);

  const blockClickHandler = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!(event.target instanceof HTMLDivElement)) {
      return;
    }
    const { question } = event.target.dataset;

    onSelect(Number(question));
  };

  return (
    <GameBoardWrapper onClick={blockClickHandler}>
      {questions &&
        questions.map((question) => (
          <BoardBlock
            size={size}
            question={question}
            color={question === answerIndex ? answerTileColor : wrongTileColor}
          />
        ))}
    </GameBoardWrapper>
  );
};

export default GameBoard;

const GameBoardWrapper = styled.div`
  width: 840px;
  height: 840px;
  display: flex;
  flex-flow: row wrap;
`;
