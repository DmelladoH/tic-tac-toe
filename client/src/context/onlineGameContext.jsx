import { useState, createContext } from 'react'

export const OnlineGameContext = createContext()

export function OnlineGameProvider ({ children }) {
  const [gameCode, setGameCode] = useState(null)
  const [playerSymbol, setPlayerSymbol] = useState(null)

  return (
    <OnlineGameContext.Provider value={{ gameCode, setGameCode, playerSymbol, setPlayerSymbol }}>
      {children}
    </OnlineGameContext.Provider>
  )
}
