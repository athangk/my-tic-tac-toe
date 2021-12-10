interface BoardCellProps {
  num: number
  cellValue: string | null
  handleClick: (num: number) => void
}

export function BoardCell({ num, cellValue, handleClick }: BoardCellProps) {
  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue ? "mark-" + cellValue : "mark-none"}`}
        onClick={() => handleClick(num)}
      >
        {cellValue}
      </div>
    </div>
  )
}
