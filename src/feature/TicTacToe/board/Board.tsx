import { useState } from "react"
import { Cell } from "./Cell"

import styles from "./Board.module.scss"

interface BoardProps {
  ticTacArray: (string | null)[]
  winningCells: (number | null)[]
  aheadCells: (number | null)[]
  avoidCells: (number | null)[]
  status: string | null
  handleClick: (num: number) => void
}

export function Board({
  ticTacArray,
  winningCells,
  aheadCells,
  avoidCells,
  status,
  handleClick,
}: BoardProps) {
  return (
    <>
      <div className={styles.grid}>
        {ticTacArray.map((_, i) => (
          <Cell
            key={i}
            num={i}
            handleClick={handleClick}
            cellValue={ticTacArray[i]}
            winningCell={winningCells.includes(i) ? true : false}
            aheadCell={aheadCells.includes(i) ? true : false}
            avoidCell={avoidCells.includes(i) ? true : false}
            status={status}
          />
        ))}
      </div>
    </>
  )
}
