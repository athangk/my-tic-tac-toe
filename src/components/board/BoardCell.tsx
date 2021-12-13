import React from "react"

interface BoardCellProps {
  num: number
  cellValue: string | null
  handleClick: (num: number) => void
}

function BoardCell({ num, cellValue, handleClick }: BoardCellProps) {
  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue ? "mark-" + cellValue : "no-mark"}`}
        onClick={() => {
          handleClick(num)
        }}
      >
        {cellValue}
      </div>
    </div>
  )
}

export default React.memo(BoardCell)
