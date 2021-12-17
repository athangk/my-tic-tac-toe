import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { FunctionComponent } from "react"
import { X_MARK } from "../utilities/tictactoe-constants"

import styles from "./CardFlip.module.css"

interface CardProps {
  flip: boolean | null
  restart: boolean
  cellValue: string | null
  winningCell: boolean | null
}

function CardFlip({ flip, restart, cellValue, winningCell }: CardProps) {
  return (
    <div className={styles.scene}>
      <div
        className={`${styles.cardMark} ${flip && styles.cardflipped} ${restart && styles.cardStartflipped}`}
      >
        <div className={styles.cardMarkFaceFront}></div>
        <div
          className={`card_mark__face card_mark__face--back ${cellValue && "mark_" + cellValue} ${
            winningCell && "winCell"
          }`}
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
