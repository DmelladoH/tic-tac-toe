import { useState, useEffect, useContext } from 'react'
import { OnlineGameContext } from '../context/onlineGameContext'
import { addPieceToBoard, changeTurn, getWinner, isGameOver } from '../gameLogic'
import { player, winningStates } from '../constants'
import socket from '../services/socketService'
import confetti from 'canvas-confetti'
import { useGameMode } from './useGameMode'

const INITIAL_BOARD = Array(9).fill(null)

export function useMultiGame () {
  const context = useContext(OnlineGameContext)

  if (context === undefined) {
    throw new Error('useMultiGame must be used within a OnlineGameContext')
  }

  const { gameCode, playerSymbol, setGameCode } = context

  const { setGameMode } = useGameMode()
  const [winner, setWinner] = useState(null)
  const [board, setBoard] = useState(INITIAL_BOARD)
  const [turn, setTurn] = useState(() => {
    const initTurn = window.localStorage.getItem('turn')
    return initTurn ?? player.O
  })

  const makePlay = (coord) => {
    if (turn !== playerSymbol) return

    const newBoard = addPieceToBoard(board, coord, playerSymbol)

    if (newBoard === board) return

    setBoard(newBoard)

    socket.emit('play', { player: playerSymbol, board: newBoard, roomCode: gameCode })
  }

  const resetGame = () => {
    setGameCode(null)
    setGameMode(null)
  }

  useEffect(() => {
    socket.on('updateGame', ({ player, board }) => {
      setBoard(board)
      const newTurn = changeTurn(player)
      setTurn(newTurn)

      const winner = getWinner(board)

      if (winner) {
        setWinner(winner)
        confetti()
      } else if (isGameOver(board)) {
        setWinner(winningStates.DRAW)
      }
    })
  }, [])

  return { board, turn, winner, makePlay, resetGame }
}
