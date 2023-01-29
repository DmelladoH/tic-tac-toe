const express = require('express')
const cors = require('cors')

const PORT = 3000
const app = express()

app.use(express.json())
app.use(cors())

const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

const io = require('socket.io')(server, {
  cors: {
    origin: '*'
  }
})

io.on('connection', (socket) => {
  socket.on('joinRoom', (code) => {
    console.log(`A user has join room ${code}`)
    socket.join(code)
  })

  socket.on('play', ({ coord, roomCode }) => {
    console.log(`play at ${coord} to ${roomCode}`)
    socket.broadcast.to(roomCode).emit('updateGame', coord)
  })

  socket.on('disconnect', () => {
    console.log('User Disconnected')
  })
})
