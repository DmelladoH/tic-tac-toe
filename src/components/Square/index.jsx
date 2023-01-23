import './square.css'
import { player } from '../../constants'

export function Square ({ children, onClick, index }) {
  const textClassName = children === player.X ? 'text-x' : 'text-o'

  const handleClick = () => {
    onClick(index)
  }

  return (
    <button className={textClassName} onClick={handleClick}>{children}</button>
  )
}
