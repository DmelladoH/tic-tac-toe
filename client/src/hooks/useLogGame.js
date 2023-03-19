import { useContext, useEffect, useState } from 'react'
import { OnlineGameContext } from '../context/onlineGameContext'
import socket from '../services/socketService'

export const useLogGame = () => {
  const [waiting, setWaiting] = useState(false)
  const context = useContext(OnlineGameContext)

  if (context === undefined) {
    throw new Error('useLogGame must be used within a OnlineGameContext')
  }

  const { gameCode, setGameCode, playerSymbol, setPlayerSymbol } = context

  useEffect(() => {
    socket.on('roomJoined', (data) => {
      setPlayerSymbol(data.player)
    })
  }, [])

  useEffect(() => {
    socket.on('gameWaitingState', (data) => {
      setWaiting(data.waiting)
      console.log(waiting)
    })
  }, [])

  const logGame = (gameCode) => {
    socket.emit('joinRoom', gameCode)
    setGameCode(gameCode)
  }

  return { logGame, playerSymbol, gameCode, setGameCode, waiting }
}
