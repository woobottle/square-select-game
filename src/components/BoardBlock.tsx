import React from 'react';

interface BoardBlockProps {
  type: string;
  size: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
  text: string;
}

export const BoardBlock = ({ type, size, onClick, text } : BoardBlockProps) => {
  return (
    <div style={{ width: `calc(800px/${Math.sqrt(size)})` }} onClick={onClick}>{text}</div>
  )
}