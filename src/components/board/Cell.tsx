interface CellProps {
  num: number
  cellValue: string | null
  winningCell: boolean | null
  aheadCell: boolean | null
  avoidCell: boolean | null
  handleClick: (num: number) => void
}

export const Cell = ({ num, cellValue, winningCell, aheadCell, avoidCell, handleClick }: CellProps) => {
  const aheadable = aheadCell && !cellValue
  const avoidable = !aheadCell && avoidCell && !cellValue

  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue && "mark-" + cellValue} ${winningCell && "winCell"} 
        ${aheadable && "aheadMove"} ${avoidable && "avoidMove"}`}
        onClick={() => handleClick(num)}
      >
        {cellValue}
      </div>
    </div>
  )
}
