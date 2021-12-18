import { STATUS_TIE, X_MARK } from "../../../utilities/tictactoe-constants"
import { GameLiterals } from "../../../utilities/literals"
import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"

import styles from "./Player.module.scss"

interface PlayerProps {
  user: string
  winner: string | null
  status: string | null
}

export function Player({ user, winner, status }: PlayerProps) {
  const iconUser = user === X_MARK ? <BoltSharp /> : <FavoriteBorderOutlinedIcon />

  return (
    <div className={`${styles.player_container} ${styles.no_select}`}>
      {status === STATUS_TIE ? (
        <div className={`${styles.playerLabel} ${styles.tie}`}>{GameLiterals.tie}</div>
      ) : (
        <div className={styles.playerLabel}>
          {winner ? GameLiterals.winner : GameLiterals.player}
          {<div className={styles.playerIcon}>{iconUser}</div>}
        </div>
      )}
    </div>
  )
}
