import React from 'react'
import styled from 'styled-components';
import { BoardBlock } from './BoardBlock';

interface GameBoardProps {
  time: number;
  stage: number;
  setStage: React.Dispatch<React.SetStateAction<number>>;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  setScore: React.Dispatch<React.SetStateAction<number>>;
}

const GameBoard = ({ time, stage, setStage, setTime, setScore }: GameBoardProps) => {
  const size = Math.pow(Math.ceil(stage/2) + 1, 2)
  const answer = ~~(Math.random() * size)
  const questions = Array(size).fill(0)
  questions[answer] = 1
  
  const wrongClick = () => {
    setTime((el) => el -= 3)
  }

  const nextStage = () => {
    setScore((score) => {
      const addedScore = stage * stage * time;
      console.log(addedScore, time)
      return score += addedScore
    })
    setStage((el) => el += 1)
    setTime(15)
  }

  return (
    <GameBoardWrapper>
      {questions.map((question) => {
        if(question === 0) {
          return <BoardBlock type="" size={size} onClick={wrongClick} text="000000"/>
        }
        return <BoardBlock type="" size={size} onClick={nextStage} text="111111" />
      })}
    </GameBoardWrapper>
  )
}

export default React.memo(GameBoard);

const GameBoardWrapper = styled.div`
  width: 800px;
  height: 800px;
  display: flex;
  flex-flow: row wrap;
`

const Rectangle = styled.div`
  
`

// answer: 0
// answerColor: "rgb(172, 111, 148)"
// baseColor: "rgb(196, 135, 172)"
// isPlaying: true
// onSelect: ƒ(t)
// score: 8
// stage: 2
// time: 15

// answer: 4
// answerColor: "rgb(163, 4, 26)"
// baseColor: "rgb(186, 27, 49)"
// isPlaying: true
// onSelect: ƒ(t)
// score: 2033
// stage: 6
// time: 14

// answer: 32
// answerColor: "rgb(136, 34, 145)"
// baseColor: "rgb(114, 12, 167)"
// isPlaying: true
// onSelect: ƒ(t)
// score: 18088
// stage: 9
// time: 14

// answer: 27
// answerColor: "rgb(192, 21, 160)"
// baseColor: "rgb(214, 43, 138)"
// isPlaying: true
// onSelect: ƒ(t)
// score: 28294
// stage: 10
// time: 14