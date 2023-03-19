import { useLogGame } from '../../hooks/useLogGame'
import { useState } from 'react'

import './selectCodeModal.css'

export function SelectCodeModal () {
  const [input, setInput] = useState('')
  const [displayModal, setDisplayModal] = useState(true)
  const { logGame } = useLogGame()

  const handleSubmit = (event) => {
    event.preventDefault()
    logGame(input)
  }

  if (!displayModal) return null

  return (
    <section className='select-modal'>
      <form onSubmit={handleSubmit} className='select-modal__body'>
        <span>Game code</span>
        <input placeholder='game code' onChange={(event) => (setInput(event.target.value))} />
        <button>Join Game</button>
      </form>
      <section>
        <button onClick={() => setDisplayModal(!displayModal)}>Go Back</button>
      </section>
    </section>
  )
}
