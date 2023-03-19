import { useContext } from 'react'
import { GameContext } from '../context/gameContext'

export function useGameMode () {
  const context = useContext(GameContext)

  if (context === undefined) {
    throw new Error('useGameMode must be used within a GameModeContext')
  }

  return context
}
