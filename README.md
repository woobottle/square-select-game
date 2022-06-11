## Numble Challenge

- [x] Math.pow(Math.floor((stage/2) + 1), 2)개의 사각형이 표시되며, 그 중 하나만 색깔이 다릅니다.   
- [x] 한 stage의 제한 시간은 15초입니다.   
- [x] 색이 다른 사각형(정답)을 클릭한 경우 아래 변경사항이 적용됩니다.   
  - [x] 다음 스테이지로 넘어갑니다.    
  - [x] stage * stage * 남은시간 만큼의 score가 누적됩니다.   
- [x] 오답을 클릭한 경우 아래 변경사항이 적용됩니다.    
  - [x] 현재 stage의 남은 시간이 3초 줄어듭니다.    
- [x] 남은 시간이 0초 이하가 되면 게임이 종료됩니다. 최종 stage와 누적 score를 출력하고, 새로운 게임을 시작할 수 있습니다.    
- [x] stage가 올라갈수록 정답과 오답의 색상 차이가 줄어듭니다.    

<hr>

다음의 조건에 맞게 진행해주세요
1. React Framework를 사용할 것
2. Function Component를 활용할 것
3. Javascript보다는 Typescript를 활용할 것
4. 서버에 배포할 것 (Vercel과 같은 서비스를 이용해보세요)
5. **Context, Redux, Mobx, Recoil** 등 상태관리 도구를 사용하지 않을 것

<hr>

* 점수 확인 후 게임 새로 시작

![square](https://user-images.githubusercontent.com/50283326/153191131-e9e4e7ab-8a7b-4a98-86ae-cbb85a73534e.gif)



header => stage, time, score => values
body => stage, normalColor, answerColor => values, 
        setStage, setTime, setScore => action
        전체 칸수 => stage로 알 수 있음

렌더링을 변화시키는 것을 state로 관리하여야 한다.

1. 게임을 시작하면 
  - 스테이지가 1이 된다.
  - 점수가 0이 된다.
  - "게임중" 상태가 된다
  - 남은시간이 15가 된다.
2. 정답을 고르면
  - 남은시간이 15가 된다.
  - 스테이지가 1증가한다.
  - 점수가 늘어난다
3. 오답을 고르면
  - 남은시간이 3줄어든다. 시간은 0미만이 되지 않는다.
4. "게임중" 이면 1초마다
  - 남은시간이 1줄어든다. 시간은 0미만이 되지 않는다.
5. 게임이 종료되면
  - "게임종료" 상태가 된다.

=> 스테이지, 점수, 남은시간, "게임중"/"게임종료", 정답의 index
stage, score, remainSecond, isPlaying, answerIndex

1. 이번 스테이지에서 노출되는 사각형의 개수
2. 이번 스테이지에서 정답인 사각형의 색상
3. 이번 스테이지에서 오답인 사각형의 색상
4. 이번 스테이지에서 노출되는 사각형의 너비/높이
tileCount, answerTileColor, wrongTileColor, tileWidth

tileCount, tileWidth는 stage만으로 알수 있으므로 state로 정의 x

