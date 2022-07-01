import BoltSharp from "@mui/icons-material/BoltSharp"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { Nullable } from "../models/models"
import { X_MARK } from "../utilities/tictactoe-constants"

enum sizeNum {
  large = "large",
  medium = "medium",
}

interface MarkProps {
  user: Nullable<string>
  size: string
}

const Mark = ({ user, size }: MarkProps) => {
  return (
    <>
      {user === X_MARK ? (
        <BoltSharp fontSize={size as sizeNum} />
      ) : (
        <FavoriteBorderOutlinedIcon fontSize={size as sizeNum} />
      )}
    </>
  )
}

export default Mark
