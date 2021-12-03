import { Cell } from "./Cell"

interface BoardProps {
  ticTacArray: (string | null)[]
  winningCells: (number | null)[]
  aheadCells: (number | null)[]
  avoidCells: (number | null)[]
  handleClick: (num: number) => void
}

export const Board = ({ ticTacArray, winningCells, aheadCells, avoidCells, handleClick }: BoardProps) => {
  return (
    <>
      <div className="grid">
        {ticTacArray.map((_, i) => (
          <Cell
            key={i}
            num={i}
            handleClick={() => handleClick(i)}
            cellValue={ticTacArray[i]}
            winningCell={winningCells.includes(i) ? true : false}
            aheadCell={aheadCells.includes(i) ? true : false}
            avoidCell={avoidCells.includes(i) ? true : false}
          />
        ))}
      </div>
    </>
  )
}
