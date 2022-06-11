export const getResultText = (stage: number, score: number) =>
  `최종 stage는 ${stage} 점수는 ${score} 입니다!!`;

export const getPlusScore = (stage: number, remainSeconds: number) => {
  return stage * stage * remainSeconds;
};

export const getBlockColors = (stage: number) => {
  const red = Math.round(Math.random() * 255);
  const blue = Math.round(Math.random() * 255);
  const green = Math.round(Math.random() * 255);

  const _red = Math.round((red / 100) * (70 + stage * 2));
  const _blue = Math.round((blue / 100) * (70 + stage * 2));
  const _green = Math.round((green / 100) * (70 + stage * 2));

  return {
    answerTileColor: `rgb(${red}, ${blue}, ${green})`,
    wrongTileColor: `rgb(${_red}, ${_blue}, ${_green})`,
  };
};

export const getAnswerIndex = (stage: number) => {
  const size = Math.pow(Math.ceil(stage / 2) + 1, 2);
  const answer = ~~(Math.random() * size);

  return answer;
};
