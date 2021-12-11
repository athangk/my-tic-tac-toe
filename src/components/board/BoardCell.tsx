interface BoardCellProps {
  num: number
  cellValue: string | null
  handleClick: () => void
}

export function BoardCell({ cellValue, handleClick }: BoardCellProps) {
  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue ? "mark-" + cellValue : "mark-none"}`}
        onClick={handleClick}
      >
        {cellValue}
      </div>
    </div>
  )
}
