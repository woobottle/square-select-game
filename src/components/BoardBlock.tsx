import React from "react";
import styled from "styled-components";

interface BoardBlockProps {
  color: string;
  size: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

type BoardBlockFragmentType = Omit<BoardBlockProps, "onClick">;

export const BoardBlock = ({ color, size, onClick }: BoardBlockProps) => {
  return <BoardBlockFragment color={color} size={size} onClick={onClick} />;
};

const BoardBlockFragment = styled.div<BoardBlockFragmentType>`
  width: calc(800px / ${(props) => Math.sqrt(props.size)});
  background-color: ${(props) => props.color};
  margin: 1px;
`;
