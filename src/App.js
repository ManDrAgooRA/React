import Game from './components/Game/Game';
import './App.scss';
import { gameReducer, initialState } from './reducer';
import { GameProvider } from './context';

function App() {
  return (
    <GameProvider reducer={gameReducer} initialState={initialState}>
      <Game />
    </GameProvider>
  );
}

export default App;