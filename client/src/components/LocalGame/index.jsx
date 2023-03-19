import { GameDisplay } from '../GameDisplay'
import { useGame } from '../../hooks/useGame'

export function LocalGame () {
  const { board, turn, winner, updateTurn, resetGame } = useGame()
  return (
    <>
      <GameDisplay
        turn={turn}
        board={board}
        winner={winner}
        updateTurn={updateTurn}
        resetGame={resetGame}
      />
      <footer>
        <button onClick={resetGame}>Restart Game</button>
      </footer>
    </>

  )
}
