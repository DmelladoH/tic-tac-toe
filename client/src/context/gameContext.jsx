import { createContext, useState } from 'react'

export const GameContext = createContext()

export function GameProvider ({ children }) {
  const [gameMode, setGameMode] = useState(null)

  return (
    <GameContext.Provider value={{ gameMode, setGameMode }}>
      {children}
    </GameContext.Provider>
  )
}
