import { PORT } from './config.js'
import { fileURLToPath } from 'url'
import { join, dirname } from 'path'
import express from 'express'
import { Server as SocketServer } from 'socket.io'

import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const io = new SocketServer(server, {
  cors: {
    origin: '*'
  }
})

const __dirname = dirname(fileURLToPath(import.meta.url))
app.use(express.static(join(__dirname, '../client/dist')))

io.on('connection', (socket) => {
  socket.on('joinRoom', (code) => {
    const rooms = io.sockets.adapter.rooms
    const room = rooms.get(code)

    if (room && room.size >= 2) {
      console.log(`Room ${code} is full`)
      socket.emit('roomFull')
      return
    }

    // create room if not exist
    if (room === undefined) {
      socket.join(code)
      socket.emit('roomJoined', { player: 'X' })
      io.to(code).emit('gameWaitingState', { waiting: true })

      console.log('room created for player X to room', code)
      return
    }

    // Join room if exist
    socket.join(code)
    socket.emit('roomJoined', { player: 'O' })
    console.log('room joined for player O to room', code)

    io.to(code).emit('gameWaitingState', { waiting: false })
  })

  socket.on('play', async ({ player, board, roomCode }) => {
    console.log(`player ${player} play at ${board} to ${roomCode}`)
    io.to(roomCode).emit('updateGame', { player, board })
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})
