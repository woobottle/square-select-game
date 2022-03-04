import { ScoreBoard, GameBoard } from "./components";
import { useGame } from "./hooks/useGame";

function App() {
  const { state, select } = useGame();

  return (
    <div className="App">
      <ScoreBoard {...state} />
      <GameBoard {...state} onSelect={select} />
    </div>
  );
}

export default App;
