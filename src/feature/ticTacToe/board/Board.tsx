import Cell from "./Cell"
import { TicTacToeData, MarkIndicatorData, Nullable } from "../../../models/models"

import styles from "./Board.module.scss"

interface BoardProps {
  ticTacArray: TicTacToeData
  winningCells: MarkIndicatorData
  aheadCells: MarkIndicatorData
  avoidCells: MarkIndicatorData
  status: Nullable<string>
  handleClick: (num: number) => void
}

const Board = ({ ticTacArray, winningCells, aheadCells, avoidCells, status, handleClick }: BoardProps) => {
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
