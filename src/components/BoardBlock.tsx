import React from 'react';

interface BoardBlockProps {
  color: string;
  size: number;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}

export const BoardBlock = ({ color, size, onClick } : BoardBlockProps) => {
  return (
    <div style={{ width: `calc(800px/${Math.sqrt(size)})`, backgroundColor: color, margin: '1px' }} onClick={onClick} />
  )
}