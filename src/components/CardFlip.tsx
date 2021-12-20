import Mark from "./Mark"

import cx from "classnames"
import styles from "./CardFlip.module.scss"
import { Nullable } from "../models/models"

interface CardFlipProps {
  flip: Nullable<boolean>
  restart: boolean
  cellValue: Nullable<string>
  winningCell: Nullable<boolean>
}

function CardFlip({ flip, restart, cellValue, winningCell }: CardFlipProps) {
  return (
    <div className={styles.scene}>
      <div
        className={cx(
          styles.tic_container,
          styles.tic,
          { [styles.tic_flipped]: flip },
          { [styles.card_start_flipped]: restart }
        )}
      >
        <div className={cx(styles.tic_side, styles.tic_side_front)}></div>
        <div
          className={cx(
            styles.tic_side,
            styles.tic_side_back,
            { [styles.win_cell]: winningCell },
            { [styles["mark_" + cellValue?.toLowerCase()]]: cellValue }
          )}
        >
          {cellValue && <Mark user={cellValue} size={"large"}></Mark>}
        </div>
      </div>
    </div>
  )
}

export default CardFlip
