import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { X_MARK } from "../utilities/tictactoe-constants"

import styles from "./CardFlip.module.scss"

interface CardFlipProps {
  flip: boolean | null
  restart: boolean
  cellValue: string | null
  winningCell: boolean | null
}

function CardFlip({ flip, restart, cellValue, winningCell }: CardFlipProps) {
  return (
    <div className={styles.scene}>
      <div
        className={`${styles.tic_container} ${styles.tic} ${flip && styles.tic_flipped} ${
          restart && styles.card_start_flipped
        }`}
      >
        <div className={`${styles.tic_side} ${styles.tic_side_front}`}></div>
        <div
          className={`${styles.tic_side} ${styles.tic_side_back} ${
            cellValue && styles["mark_" + cellValue.toLowerCase()]
          } ${winningCell && styles.win_cell}`}
        >
          {cellValue && (
            <>
              {cellValue === X_MARK ? (
                <BoltSharp fontSize="large" />
              ) : (
                <FavoriteBorderOutlinedIcon fontSize="large" />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default CardFlip
