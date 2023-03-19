import { LocalGame } from './components/LocalGame'
import { GAME_MODES } from './constants/gameModes'
import './App.css'

// import { useGame } from './hooks/useGame'
import { HeaderNav } from './components/HeaderNav'
import { MultiGame } from './components/MultiGame'
import { OnlineGameProvider } from './context/onlineGameContext'
import { SlectGameModeDisplay } from './components/SelectGameModeDisplay'
import { useGameMode } from './hooks/useGameMode'

function App () {
  const { gameMode } = useGameMode()

  return (
    <main className='App'>
      <HeaderNav />
      <h1>Tic Tac Toe</h1>
      <OnlineGameProvider>
        <SlectGameModeDisplay />
        {gameMode === GAME_MODES.online && (
          <MultiGame />
        )}
      </OnlineGameProvider>

      {gameMode === GAME_MODES.local && <LocalGame />}
    </main>
  )
}

export default App
