import { player, winningCombos } from '../constants'

export const addPieceToBoard = (board, index, turn) => {
  if (board[index] !== null) return board

  const newBoard = [...board]
  newBoard[index] = turn
  return newBoard
}

export const changeTurn = (currentTurn) => {
  return player.X === currentTurn ? player.O : player.X
}

export const getWinner = (board) => {
  for (const combo of winningCombos) {
    const [a, b, c] = combo

    if (board[a] &&
            board[a] === board[b] &&
            board[b] === board[c]
    ) {
      return board[a]
    }
  }

  return null
}

export const isGameOver = (board) => {
  return board.every((cell) => cell !== null)
}
