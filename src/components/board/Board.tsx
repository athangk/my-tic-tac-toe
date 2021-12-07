import { useState } from "react"
import { Cell } from "./Cell"

interface BoardProps {
  ticTacArray: (string | null)[]
  winningCells: (number | null)[]
  aheadCells: (number | null)[]
  avoidCells: (number | null)[]
  handleClick: (num: number) => void
}

export const Board = ({ ticTacArray, winningCells, aheadCells, avoidCells, handleClick }: BoardProps) => {
  const [perspectiveOn, setPerspectiveOn] = useState(false)

  const togglePerspective = () => {
    console.log("mouse is on")
    setPerspectiveOn(perspectiveOn => !perspectiveOn)
  }

  return (
    <>
      <div className={`grid ${perspectiveOn && "cell-is-spinning"}`} onMouseEnter={togglePerspective}>
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
