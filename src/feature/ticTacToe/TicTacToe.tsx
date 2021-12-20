import { useState, useEffect } from "react"
import Button from "@mui/material/Button"
import Player from "./player/Player"
import Board from "./board/Board"
import { winCells, gameTie, winMove, undefeatedMove } from "../../utilities/calculate-game-status"
import {
  STATUS_START,
  STATUS_PLAYING,
  STATUS_TIE,
  STATUS_WON,
  X_MARK,
  O_MARK,
} from "../../utilities/tictactoe-constants"
import { GameLiterals } from "../../utilities/literals"
import { MarkIndicatorData, Nullable, TicTacToeData } from "../../models/models"

import styles from "./TicTacToe.module.scss"

function TicTacToe() {
  const [user, setUser] = useState<string>(X_MARK)
  const [ticTacArray, setTicTacArray] = useState<TicTacToeData>(Array(9).fill(null))
  const [winner, setWinner] = useState<Nullable<string>>(null)
  const [status, setStatus] = useState<Nullable<string>>(STATUS_START)
  const [winningCells, setWinningCells] = useState<MarkIndicatorData>(Array(3).fill(null))
  const [aheadCells, setAheadCells] = useState<MarkIndicatorData>(Array(3).fill(null))
  const [avoidCells, setAvoidCells] = useState<MarkIndicatorData>(Array(3).fill(null))

  /**
   * Handles cell clicks from cell component
   * @param num
   * @returns
   */
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
    const wonList = winCells(sliceTicTac) as number[]
    if (wonList?.length === 3) {
      setWinningCells(wonList)
      setWinner(user)
      setStatus(STATUS_WON)
      return
    }

    // check draw
    const isTie = gameTie(sliceTicTac)
    if (isTie) {
      setStatus(STATUS_TIE)
      return
    }

    //change user
    const currentUser = user === X_MARK ? O_MARK : X_MARK
    setUser(currentUser)

    // set hints for best move for win, best move to not loose
    hints(sliceTicTac, currentUser)
  }

  /**
   * Priority for best move to win and then not loose move
   * @param currentTicTacArray
   * @param currentUser
   */
  const hints = (currentTicTacArray: TicTacToeData, currentUser: string) => {
    const currentArray = [...currentTicTacArray]
    const aheadCellsList = winMove(currentArray, currentUser) as (number | null)[]
    setAheadCells(aheadCellsList)

    if (aheadCellsList.length === 0) {
      const aheadAvoidList = undefeatedMove(currentArray, currentUser) as (number | null)[]

      if (aheadAvoidList.length > 2) {
        setAvoidCells(aheadAvoidList)
      }
    }
  }
  /**
   * Resets for new game
   */
  const newGame = () => {
    setTicTacArray(Array(9).fill(null))
    setWinningCells(Array(3).fill(null))
    setAheadCells(Array(3).fill(null))
    setAvoidCells(Array(3).fill(null))
    setUser(X_MARK)
    setWinner(null)
    setStatus(STATUS_START)
  }

  /**
   * Use effect only for game status
   */
  useEffect(() => {
    if (!status || status === STATUS_START) {
      setStatus(STATUS_PLAYING)
      return
    }
  }, [status])

  return (
    <div>
      <Player user={user} winner={winner} status={status} />
      <Board
        ticTacArray={ticTacArray}
        handleClick={handleClick}
        winningCells={winningCells}
        aheadCells={aheadCells}
        avoidCells={avoidCells}
        status={status}
      />
      <div className={styles.btn_new_game}>
        <Button variant="outlined" onClick={newGame}>
          {GameLiterals.new_game}
        </Button>
      </div>
    </div>
  )
}

export default TicTacToe
