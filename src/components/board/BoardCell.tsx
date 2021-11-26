interface BoardCellProps {
  num: number
  cellValue: string | null
  handleClick: (num: number) => void
}

export const BoardCell = ({ num, cellValue, handleClick }: BoardCellProps) => {
  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue && "mark-" + cellValue}`}
        onClick={() => handleClick(num)}
      >
        {cellValue}
      </div>
    </div>
  )
}
