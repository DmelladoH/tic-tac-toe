import { GameDisplay } from '../GameDisplay'
import { useMultiGame } from '../../hooks/useMultiGame'
import { useLogGame } from '../../hooks/useLogGame'
import './multiGame.css'

export function MultiGame () {
  const { gameCode, playerSymbol, waiting } = useLogGame()

  const { board, turn, winner, makePlay, resetGame } = useMultiGame()

  console.log({ playerSymbol })
  if (waiting) {
    return (
      <section className='waiting-container'>
        <p>
          room code: {gameCode}
        </p>
        <p>
          Waiting for other player...
        </p>

        <button onClick={resetGame}>Go Back</button>
      </section>
    )
  }
  return (
    <>
      {gameCode && <GameDisplay
        turn={turn}
        board={board}
        winner={winner}
        updateTurn={makePlay}
        resetGame={resetGame}
                   />}
      <div>
        <p>Your piece: {playerSymbol}</p>
      </div>
    </>

  )
}
