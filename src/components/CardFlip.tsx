import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { FunctionComponent } from "react"
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
        className={`${styles.card_container} ${styles.card_mark} ${flip && styles.card_flipped} ${
          restart && styles.card_start_flipped
        }`}
      >
        <div className={`${styles.card_mark_face} ${styles.card_mark_face_front}`}></div>
        <div
          className={`${styles.card_mark_face} ${styles.card_mark_face_back} ${
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
