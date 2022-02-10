import styled from "styled-components";

interface BoardBlockProps {
  question: number;
  color: string;
  size: number;
}

type BoardBlockFragmentType = Omit<BoardBlockProps, "question">;

export const BoardBlock = ({ question, color, size }: BoardBlockProps) => {
  return (
    <BoardBlockFragment color={color} size={size} data-question={question} />
  );
};

const BoardBlockFragment = styled.div<BoardBlockFragmentType>`
  width: calc(800px / ${(props) => Math.sqrt(props.size)});
  background-color: ${(props) => props.color};
  margin: 1px;
`;
