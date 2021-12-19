import CardMark from "./CardMark"

import cx from "classnames"
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
          {cellValue && <CardMark mark={cellValue}></CardMark>}
        </div>
      </div>
    </div>
  )
}

export default CardFlip
