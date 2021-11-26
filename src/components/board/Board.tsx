import { BoardCell } from "./BoardCell"

interface BoardProps {
  ticTacArray: string[] | null[]
  handleClick: (num: number) => void
}

export const Board = ({ ticTacArray, handleClick }: BoardProps) => {
  return (
    <>
      <div className="grid">
        {ticTacArray.map((_, i) => (
          <BoardCell key={i} num={i} handleClick={() => handleClick(i)} cellValue={ticTacArray[i]} />
        ))}
      </div>
    </>
  )
}
