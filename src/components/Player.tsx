import { STATUS_TIE } from "../utilities/constants"
import { GameText } from "../utilities/locale"

interface PlayerProps {
  user: string
  winner: string | null
  status: string | null
}

export function Player({ user, winner, status }: PlayerProps) {
  return (
    <div className="player-message-container">
      {!winner ? (
        <span className="player-label">
          {GameText.player}:{user}
        </span>
      ) : (
        <span className="player-label winner">
          {GameText.winner}:{user}
        </span>
      )}

      {status === STATUS_TIE && <div className="tie">{GameText.tie}</div>}
    </div>
  )
}
