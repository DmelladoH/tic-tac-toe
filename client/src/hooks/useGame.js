import { useState, useEffect } from 'react'
import { player, winningStates } from '../constants'
import confetti from 'canvas-confetti'
import { addPieceToBoard, changeTurn, getWinner, isGameOver } from '../gameLogic'
import { saveGameState } from '../gameLogic/storage'

export function useGame () {
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(() => {
    const initBoard = window.localStorage.getItem('board')
    return initBoard ? JSON.parse(initBoard) : Array(9).fill(null)
  })
  const [turn, setTurn] = useState(() => {
    const initTurn = window.localStorage.getItem('turn')
    return initTurn ?? player.X
  })

  const updateTurn = (coord) => {
    const newBoard = addPieceToBoard(board, coord, turn)
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

  const resetGame = () => {
    setBoard(Array(9).fill(null))
    setTurn(player.X)
    setWinner(null)
  }

  useEffect(() => {
    saveGameState(board, turn)
  }, [board, turn])

  return { board, turn, winner, resetGame, updateTurn }
}
