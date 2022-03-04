import { useInterval } from "./useInterval";
import { useCallback, useEffect, useReducer } from "react";
import {
  getAnswerIndex,
  getBlockColors,
  getPlusScore,
  getResultText,
} from "src/utils";

type GameState = {
  stage: number;
  remainSeconds: number;
  score: number;
  answerIndex: number;
  isRunning: boolean;
  answerTileColor: string;
  wrongTileColor: string;
};

const { answerTileColor, wrongTileColor } = getBlockColors(0);

const getInitialState = (): GameState => ({
  stage: 1,
  remainSeconds: 15,
  score: 0,
  answerIndex: getAnswerIndex(1),
  isRunning: true,
  answerTileColor,
  wrongTileColor,
});

type GameActionType = "INIT" | "SELECT_ANSWER" | "SELECT_WRONG" | "TICK";
type GameAction = { type: GameActionType };

const reducer = (prev: GameState, action: GameAction) => {
  const { answerTileColor, wrongTileColor } = getBlockColors(prev.stage);

  switch (action.type) {
    case "INIT":
      return getInitialState();
    case "SELECT_ANSWER":
      return {
        ...prev,
        stage: prev.stage + 1,
        answerIndex: getAnswerIndex(prev.stage),
        remainSeconds: 15,
        score: getPlusScore(prev.stage, prev.remainSeconds),
        answerTileColor,
        wrongTileColor,
      };
    case "SELECT_WRONG":
      return {
        ...prev,
        remainSeconds: prev.remainSeconds - 3 > 0 ? prev.remainSeconds - 3 : 0,
      };
    case "TICK":
      if (!prev.isRunning) {
        return prev;
      }

      if (prev.remainSeconds <= 0) {
        return {
          ...prev,
          isRunning: false,
        };
      } else {
        return {
          ...prev,
          remainSeconds: prev.remainSeconds - 1,
        };
      }
    default:
      return prev;
  }
};

export const useGame = () => {
  const [state, dispatch] = useReducer(reducer, getInitialState());

  useInterval(() => {
    dispatch({ type: "TICK" });
  }, 1000);

  useEffect(() => {
    if (!state.isRunning) {
      alert(getResultText(state.stage, state.score));
      dispatch({ type: "INIT" });
    }
  }, [state.isRunning]);

  const select = useCallback(
    (questionIndex: number) => {
      if (questionIndex === state.answerIndex) {
        dispatch({ type: "SELECT_ANSWER" });
      } else {
        dispatch({ type: "SELECT_WRONG" });
      }
    },
    [state.answerIndex]
  );

  return {
    state,
    select,
  };
};
