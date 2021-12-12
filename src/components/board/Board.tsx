import BoardCell from "./BoardCell"

interface BoardProps {
  ticTacArray: (string | null)[]
  handleClick: (num: number) => void
}

function Board({ ticTacArray, handleClick }: BoardProps) {
  return (
    <>
      <div className="grid">
        {ticTacArray.map((_, i) => (
          <BoardCell key={i} num={i} handleClick={handleClick} cellValue={ticTacArray[i]} />
        ))}
      </div>
    </>
  )
}

export default Board
