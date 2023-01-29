import { useState } from 'react'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { TurnPlayerDisplay } from './components/TurnPlayerDisplay'
import { useGame } from './hooks/useGame'
import { HeaderNav } from './components/HeaderNav'

function App () {
  const { board, turn, winner, updateTurn, resetGame } = useGame()

  return (
    <main className='App'>
      <HeaderNav />
      <h1>Tic Tac Toe</h1>

      <section>
        <TurnPlayerDisplay turn={turn} />
        <Board board={board} updateTurn={updateTurn} />
        <WinnerModal winner={winner} resetGame={resetGame} />
      </section>
      <footer>
        <button onClick={resetGame}>Restart Game</button>
      </footer>
    </main>
  )
}

export default App
