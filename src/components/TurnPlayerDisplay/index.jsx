import { player } from '../../constants'

export function TurnPlayerDisplay ({ turn }) {
  const text = turn === player.X ? 'Player X turn' : 'Player O turn'

  return (
    <section>
      <h2>{text}</h2>
    </section>
  )
}
