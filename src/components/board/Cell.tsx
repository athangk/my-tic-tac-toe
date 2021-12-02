interface CellProps {
  num: number
  cellValue: string | null
  winningCell: boolean | null
  handleClick: (num: number) => void
}

export const Cell = ({ num, cellValue, winningCell, handleClick }: CellProps) => {
  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue && "mark-" + cellValue} ${winningCell && "winCell"}`}
        onClick={() => handleClick(num)}
      >
        {cellValue}
      </div>
    </div>
  )
}
