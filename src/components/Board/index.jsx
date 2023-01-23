import { Square } from '../Square'

export function Board ({ board, updateTurn }) {
  return (
    <section className='board'>
      {
        board.map((piece, i) => {
          return <Square key={i} index={i} onClick={updateTurn}>{piece}</Square>
        })
      }
    </section>
  )
}
