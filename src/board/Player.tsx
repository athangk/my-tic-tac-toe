import { STATUS_TIE, X_MARK } from "../utilities/tictactoe-constants"
import { GameText } from "../utilities/locale"
import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

import styles from "./Player.module.css"

interface PlayerProps {
  user: string
  winner: string | null
  status: string | null
}

export function Player({ user, winner, status }: PlayerProps) {
  const iconUser = user === X_MARK ? <BoltSharp /> : <FavoriteBorderOutlinedIcon />

  return (
    <div>
      {status === STATUS_TIE ? (
        <div className={`${styles.playerLabel} ${styles.tie}`}>{GameText.tie}</div>
      ) : (
        <div className={styles.playerLabel}>
          {winner ? GameText.winner : GameText.player}
          {<div className={styles.playerIcon}>{iconUser}</div>}
        </div>
      )}
    </div>
  )
}
