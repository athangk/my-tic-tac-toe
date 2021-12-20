import { STATUS_TIE } from "../../../utilities/tictactoe-constants"
import { GameLiterals } from "../../../utilities/literals"
import Mark from "../../../components/Mark"
import { Nullable } from "../../../models/models"

import styles from "./Player.module.scss"

interface PlayerProps {
  user: string
  winner: Nullable<string>
  status: Nullable<string>
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
