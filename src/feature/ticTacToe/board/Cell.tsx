import { useState, useEffect } from "react"

import CardFlip from "../../../components/CardFlip"
import { STATUS_START, STATUS_WON, X_MARK } from "../../../utilities/tictactoe-constants"

import styles from "./Cell.module.scss"

interface CellProps {
  num: number
  cellValue: string | null
  winningCell: boolean | null
  aheadCell: boolean | null
  avoidCell: boolean | null
  status: string | null
  handleClick: (num: number) => void
}

export function Cell({ num, cellValue, winningCell, aheadCell, avoidCell, status, handleClick }: CellProps) {
  const aheadable = aheadCell && !cellValue
  const avoidable = !aheadCell && avoidCell && !cellValue
  const restart = status === STATUS_START
  const [flip, setFlip] = useState(false)

  /**
   * check if game starts/restarts and set state
   * for repositioning the cards
   */
  useEffect(() => {
    if (restart) {
      setFlip(false)
      return
    }
  }, [restart, flip])

  /**
   * Pass event to parent components and flips the card
   * @param num
   * @returns
   */
  const handleCardClick = (num: number) => {
    if (status === STATUS_WON) {
      return
    }
    handleClick(num)
    setFlip(true)
  }

  return (
    <div className={styles.cell}>
      <div
        className={`${styles.cell_inner} ${styles.no_select} ${
          cellValue === X_MARK ? styles.mark_x : styles.mark_o
        }  
        ${aheadable && styles.ahead_move} ${avoidable && styles.avoid_move} `}
        onClick={() => {
          handleCardClick(num)
        }}
      >
        <CardFlip flip={flip} restart={restart} cellValue={cellValue} winningCell={winningCell}></CardFlip>
      </div>
    </div>
  )
}
