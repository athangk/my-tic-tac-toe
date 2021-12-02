import { Cell } from "./Cell"

interface BoardProps {
  ticTacArray: string[] | null[]
  winningCells: number[]
  handleClick: (num: number) => void
}

export const Board = ({ ticTacArray, winningCells, handleClick }: BoardProps) => {
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
          />
        ))}
      </div>
    </>
  )
}
