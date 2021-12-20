import Cell from "./Cell"

import styles from "./Board.module.scss"
import { TicTacToeData, MarkIndicatorData } from "../../../models/models"

interface BoardProps {
  ticTacArray: TicTacToeData
  winningCells: MarkIndicatorData
  aheadCells: MarkIndicatorData
  avoidCells: MarkIndicatorData
  status: string | null
  handleClick: (num: number) => void
}

function Board({ ticTacArray, winningCells, aheadCells, avoidCells, status, handleClick }: BoardProps) {
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

export default Board
