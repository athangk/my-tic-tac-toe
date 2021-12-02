import { useState, useEffect } from "react"
import { Board } from "./board/Board"
import { Player } from "./Player"
import { winCells, gameTie } from "../utilities/calculate-game-status"
import { STATUS_START, STATUS_PLAYING, STATUS_TIE, X_MARK, O_MARK } from "../utilities/constants"
import { GameText } from "../utilities/locale"

export const TicTacToe = () => {
  const [user, setUser] = useState<string>("X")
  const [ticTacArray, setTicTacArray] = useState<string[]>(Array(9).fill(null))
  const [winner, setWinner] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(STATUS_START)
  const [winningCells, setWinningCells] = useState<number[]>(Array(3).fill(null))

  const updateArray = (num: number) => {
    setTicTacArray(prevState => prevState.map((item, index) => (index === num ? user : item)))
  }

  const handleClick = (num: number) => {
    if (ticTacArray[num] || winner) {
      return
    }
    updateArray(num)
  }

  const checkGameStatus = () => {
    const winningCellsList = winCells(ticTacArray)
    if (winningCellsList?.length === 3) {
      setWinningCells(winningCellsList)
      setWinner(user)
      return
    }

    const gameStatus = gameTie(ticTacArray) ? STATUS_TIE : STATUS_PLAYING
    if (gameStatus === STATUS_TIE) {
      setStatus(gameStatus)
      return
    }
    toggleCurrentUser()
  }

  const toggleCurrentUser = () => {
    const currentUser = user === X_MARK ? O_MARK : X_MARK
    setUser(currentUser)
  }

  const newGame = () => {
    setTicTacArray(Array(9).fill(null))
    setWinningCells(Array(3).fill(null))
    setUser("X")
    setWinner(null)
    setStatus(null)
  }

  useEffect(() => {
    if (!status || status === STATUS_START) {
      setStatus(STATUS_PLAYING)
      return
    }

    checkGameStatus()
  }, [ticTacArray])

  return (
    <div className="tic-tac-toe__container">
      <Player user={user} winner={winner} status={status} />
      <Board ticTacArray={ticTacArray} handleClick={e => handleClick(e)} winningCells={winningCells} />
      <button className="btn__new-game" onClick={newGame}>
        {GameText.new_game}
      </button>
    </div>
  )
}
