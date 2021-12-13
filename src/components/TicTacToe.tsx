import { useState } from "react"
import Board from "./board/Board"
import Player from "./Player"
import { gameWon, gameTie } from "../utilities/calculate-game-status"
import { O_MARK, X_MARK } from "../utilities/constants"

function TicTacToe() {
  const [user, setUser] = useState<string>("X")
  const [ticTacArray, setTicTacArray] = useState<string[]>(Array(9).fill(null))
  const [winner, setWinner] = useState<string | null>(null)
  const [tie, setTie] = useState<boolean>(false)

  const handleClick = (num: number) => {
    // cell has value, or a win is made
    if (ticTacArray[num] || winner) {
      return
    }

    // update ticktacktoe array
    const sliceTicTac = ticTacArray.slice()
    sliceTicTac[num] = user
    setTicTacArray(sliceTicTac)

    // check win
    const isWon = gameWon(sliceTicTac)
    if (isWon) {
      setWinner(user)
      return
    }

    // check draw
    const isTie = gameTie(sliceTicTac)
    if (isTie) {
      setTie(isTie)
      return
    }

    //change user
    const currentUser = user === X_MARK ? O_MARK : X_MARK
    setUser(currentUser)
  }

  const newGame = () => {
    setTicTacArray(Array(9).fill(null))
    setUser(X_MARK)
    setWinner(null)
    setTie(false)
  }

  return (
    <div className="tic-tac-toe__container">
      <Player user={user} winner={winner} tie={tie} />
      <Board ticTacArray={ticTacArray} handleClick={handleClick} />
      <button className="btn__new-game" onClick={newGame}>
        New Game
      </button>
    </div>
  )
}

export default TicTacToe
