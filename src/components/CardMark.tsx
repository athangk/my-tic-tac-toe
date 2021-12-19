import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { X_MARK } from "../utilities/tictactoe-constants"

interface CardMarkProps {
  mark: string | null
}

function CardMark({ mark }: CardMarkProps) {
  return (
    <>{mark === X_MARK ? <BoltSharp fontSize="large" /> : <FavoriteBorderOutlinedIcon fontSize="large" />}</>
  )
}

export default CardMark
