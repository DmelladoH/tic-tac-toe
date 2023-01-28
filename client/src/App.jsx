import { useState, useEffect } from 'react'
import { addPieceToBoard, changeTurn, getWinner, isGameOver } from './gameLogic'
import { player, winningStates } from './constants'
import './App.css'
import { WinnerModal } from './components/WinnerModal'
import { Board } from './components/Board'
import { TurnPlayerDisplay } from './components/TurnPlayerDisplay'
import confetti from 'canvas-confetti'
import { saveGameState } from './gameLogic/storage'
import { HeaderNav } from './components/HeaderNav'

function App () {
  const [board, setBoard] = useState(() => {
    const initBoard = window.localStorage.getItem('board')
    return initBoard ? JSON.parse(initBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const initTurn = window.localStorage.getItem('turn')
    return initTurn ?? player.X
  })
  const [winner, setWinner] = useState(null)

  useEffect(() => {
    saveGameState(board, turn)
  }, [board, turn])

  const updateTurn = (i) => {
    const newBoard = addPieceToBoard(board, i, turn)
    if (newBoard === board) return

    setBoard(newBoard)
    const newTurn = changeTurn(turn)

    setTurn(newTurn)

    const winner = getWinner(newBoard)

    if (winner) {
      setWinner(winner)
      confetti()
    } else if (isGameOver(newBoard)) {
      setWinner(winningStates.DRAW)
    }
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(player.X)
    setWinner(null)
  }

  return (
    <main className='App'>
      <HeaderNav />
      <h1>Tic Tac Toe</h1>
      <section>
        <TurnPlayerDisplay turn={turn} />
        <Board board={board} updateTurn={updateTurn} />
        <WinnerModal winner={winner} resetGame={restartGame} />
      </section>
      <footer>
        <button onClick={restartGame}>Restart Game</button>
      </footer>
    </main>
  )
}

export default App
