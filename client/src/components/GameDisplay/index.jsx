import { WinnerModal } from '../WinnerModal'
import { Board } from '../Board'
import { TurnPlayerDisplay } from '../TurnPlayerDisplay'
import './gameDisplay.css'

export function GameDisplay ({ turn, board, winner, updateTurn, resetGame }) {
  return (
    <section className='game-container'>
      <TurnPlayerDisplay turn={turn} />
      <Board board={board} updateTurn={updateTurn} />
      <WinnerModal winner={winner} resetGame={resetGame} />
    </section>
  )
}
