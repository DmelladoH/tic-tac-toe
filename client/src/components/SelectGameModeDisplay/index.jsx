import { GAME_MODES } from '../../constants/gameModes'
import { SelectCodeModal } from '../SelectCodeModal'

import './selectGameModeDisplay.css'
import { useLogGame } from '../../hooks/useLogGame'
import { useGameMode } from '../../hooks/useGameMode'
export function SlectGameModeDisplay () {
  const { gameMode, setGameMode } = useGameMode()
  const { gameCode } = useLogGame()

  return (
    <>
      <section className='select-game__container'>
        <button onClick={() => { setGameMode(GAME_MODES.local) }}>Start Local Game</button>
        <button onClick={() => { setGameMode(GAME_MODES.online) }}>Start Online Game</button>
      </section>

      {gameMode === GAME_MODES.online && !gameCode && <SelectCodeModal />}
    </>
  )
}
