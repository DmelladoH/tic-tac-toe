import { winningStates } from '../../constants'
import './winnerModal.css'

export function WinnerModal ({ winner, resetGame }) {
  if (winner === null) return null

  const text = (winner === winningStates.DRAW)
    ? 'Draw'
    : `${winner} is the winner`

  return (
    <section className='winner-modal'>
      <div className='winner-modal__body'>
        <h2>{text}</h2>
        <button onClick={resetGame}>reset game</button>
      </div>

    </section>
  )
}
