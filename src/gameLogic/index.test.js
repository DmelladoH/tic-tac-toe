import { describe, expect, test } from 'vitest'
import { addPieceToBoard, changeTurn, getWinner, isGameOver } from '.'
import { player } from '../constants'

describe('game logic', () => {
  test('add piece to board', () => {
    const board = Array(9).fill(null)
    const index = 4
    const playerTurn = player.X

    const newBoard = addPieceToBoard(board, index, playerTurn)
    expect(newBoard[index]).toBe(playerTurn)
  })

  test('a piece can not be added when square not empty', () => {
    const board = Array(9).fill(player.X)
    const index = 4
    const playerTurn = player.O

    const newBoard = addPieceToBoard(board, index, playerTurn)
    expect(newBoard[index]).toBe(player.X)
  })
})

describe('change turn', () => {
  test('turn is changed correcly', () => {
    const playerTurn = player.X
    const newTurn = changeTurn(playerTurn)
    expect(newTurn).toBe(player.O)

    const finalTurn = changeTurn(newTurn)
    expect(finalTurn).toBe(player.X)
  })
})

describe('check winner', () => {
  test('check if a player won with 3 in any rows', () => {
    let board = Array(9).fill(null)
    board[0] = player.X
    board[1] = player.X
    board[2] = player.X
    expect(getWinner(board)).toBe(player.X)

    board = Array(9).fill(null)
    board[3] = player.X
    board[4] = player.X
    board[5] = player.X

    expect(getWinner(board)).toBe(player.X)

    board = Array(9).fill(null)
    board[6] = player.X
    board[7] = player.X
    board[8] = player.X

    expect(getWinner(board)).toBe(player.X)
  })

  test('check if a player won with 3 in any column', () => {
    let board = Array(9).fill(null)
    board[0] = player.X
    board[3] = player.X
    board[6] = player.X
    expect(getWinner(board)).toBe(player.X)

    board = Array(9).fill(null)
    board[1] = player.X
    board[4] = player.X
    board[7] = player.X

    expect(getWinner(board)).toBe(player.X)

    board = Array(9).fill(null)
    board[2] = player.X
    board[5] = player.X
    board[8] = player.X

    expect(getWinner(board)).toBe(player.X)
  })

  test('check if a player won with 3 in any diagonal', () => {
    let board = Array(9).fill(null)
    board[0] = player.X
    board[4] = player.X
    board[8] = player.X
    expect(getWinner(board)).toBe(player.X)

    board = Array(9).fill(null)
    board[2] = player.X
    board[4] = player.X
    board[6] = player.X

    expect(getWinner(board)).toBe(player.X)
  })

  test('check if there is not winner yet', () => {
    const board = Array(9).fill(null)
    expect(getWinner(board)).toBe(null)
  })
})

describe('game is over', () => {
  test('Check if the game is over when its over', () => {
    const board = Array(9).fill(player.X)

    expect(isGameOver(board)).toBe(true)
  })

  test('Check if the game is over when its not', () => {
    const board = Array(9).fill(null)

    expect(isGameOver(board)).toBe(false)
  })
})
