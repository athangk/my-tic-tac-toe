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
  console.log(num, restart, cellValue)
  const [flip, setFlip] = useState(false)

  useEffect(() => {
    if (restart) {
      setFlip(false)
      return
    }
  }, [restart, flip])

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
          cellValue === X_MARK ? styles.markX : styles.markO
        }  
        ${aheadable && styles.aheadMove} ${avoidable && styles.avoidMove} `}
        onClick={() => {
          handleCardClick(num)
        }}
      >
        <CardFlip flip={flip} restart={restart} cellValue={cellValue} winningCell={winningCell}></CardFlip>
      </div>
    </div>
  )
}
