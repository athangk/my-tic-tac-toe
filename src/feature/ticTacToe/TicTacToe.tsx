import { useState, useEffect } from "react"
import Button from "@mui/material/Button"

import { Board } from "./board/Board"
import { Player } from "./player/Player"
import { winCells, gameTie, winMove, undefeatedMove } from "../../utilities/calculate-game-status"
import {
  STATUS_START,
  STATUS_PLAYING,
  STATUS_TIE,
  STATUS_WON,
  X_MARK,
  O_MARK,
} from "../../utilities/tictactoe-constants"
import { GameText } from "../../utilities/locale"

import styles from "./TicTacToe.module.scss"

export function TicTacToe() {
  const [user, setUser] = useState<string>("X")
  const [ticTacArray, setTicTacArray] = useState<(string | null)[]>(Array(9).fill(null))
  const [winner, setWinner] = useState<string | null>(null)
  const [status, setStatus] = useState<string | null>(STATUS_START)
  const [winningCells, setWinningCells] = useState<(number | null)[]>(Array(3).fill(null))
  const [aheadCells, setAheadCells] = useState<(number | null)[]>(Array(3).fill(null))
  const [avoidCells, setAvoidCells] = useState<(number | null)[]>(Array(3).fill(null))

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
      setStatus(STATUS_WON)
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
    hints(currentUser)
  }

  const hints = (currentUser: string) => {
    const currentArray = [...ticTacArray]
    const aheadCellsList = winMove(currentArray, currentUser) as (number | null)[]
    setAheadCells(aheadCellsList)

    if (aheadCellsList.length === 0) {
      const aheadAvoidList = undefeatedMove(currentArray, currentUser) as (number | null)[]

      if (aheadAvoidList.length > 2) {
        setAvoidCells(aheadAvoidList)
      }
    }
  }

  const newGame = () => {
    setTicTacArray(Array(9).fill(null))
    setWinningCells(Array(3).fill(null))
    setAheadCells(Array(3).fill(null))
    setAvoidCells(Array(3).fill(null))
    setUser("X")
    setWinner(null)
    setStatus(STATUS_START)
  }

  useEffect(() => {
    if (!status || status === STATUS_START) {
      setStatus(STATUS_PLAYING)
      return
    }

    checkGameStatus()
  }, [ticTacArray])

  return (
    <div>
      <Player user={user} winner={winner} status={status} />
      <Board
        ticTacArray={ticTacArray}
        handleClick={e => handleClick(e)}
        winningCells={winningCells}
        aheadCells={aheadCells}
        avoidCells={avoidCells}
        status={status}
      />
      <div className={styles.btnNewGame}>
        <Button variant="outlined" onClick={newGame}>
          {GameText.new_game}
        </Button>
      </div>
    </div>
  )
}
