import { STATUS_TIE } from "../../../utilities/tictactoe-constants"
import { GameLiterals } from "../../../utilities/literals"

import styles from "./Player.module.scss"
import Mark from "../../../components/Mark"

interface PlayerProps {
  user: string
  winner: string | null
  status: string | null
}

function Player({ user, winner, status }: PlayerProps) {
  return (
    <div className={`${styles.player_container} ${styles.no_select}`}>
      {status === STATUS_TIE ? (
        <div className={`${styles.playerLabel} ${styles.tie}`}>{GameLiterals.tie}</div>
      ) : (
        <div className={styles.playerLabel}>
          {winner ? GameLiterals.winner : GameLiterals.player}
          {
            <div className={styles.playerIcon}>
              <Mark user={user} size={"medium"}></Mark>
            </div>
          }
        </div>
      )}
    </div>
  )
}

export default Player
