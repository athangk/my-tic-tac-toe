import { useState } from "react"

import FlashOffOutlinedIcon from "@mui/icons-material/FlashOffOutlined"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { X_MARK } from "../../utilities/constants"

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
  const [flipped, setFlipped] = useState(false)

  // return (
  //   <div className="cell">
  //     <div
  //       className={`cell__inner no-select ${cellValue && "mark-" + cellValue} ${winningCell && "winCell"}
  //       ${aheadable && "aheadMove"} ${avoidable && "avoidMove"}`}
  //       onClick={() => handleClick(num)}
  //     >
  //       {cellValue}
  //     </div>
  //   </div>
  // )

  const handleCardClick = (num: number) => {
    setFlipped(true)
    handleClick(num)
  }

  return (
    <div className="cell">
      <div
        className={`cell__inner no-select ${cellValue && "mark-" + cellValue}  
        ${aheadable && "aheadMove"} ${avoidable && "avoidMove"} `}
        onClick={() => {
          handleCardClick(num)
        }}
      >
        <div className="scene scene--card_mark">
          <div className={`card_mark ${flipped && "is-flipped"}`}>
            <div className="card_mark__face card_mark__face--front"></div>
            <div
              className={`card_mark__face card_mark__face--back ${cellValue && "mark-" + cellValue} ${
                winningCell && "winCell"
              }`}
            >
              {cellValue === X_MARK ? <FlashOffOutlinedIcon /> : <FavoriteBorderOutlinedIcon />}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
