import { MarkIndicatorData, TicTacToeData } from "../models/models"
import { O_MARK, WIN_COMBINATION, X_MARK } from "./tictactoe-constants"

/**
 * Detects win, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const winCells = (ticTacArray: TicTacToeData) =>
  WIN_COMBINATION.find(combination =>
    combination.every(
      el => ticTacArray[el - 1] != null && ticTacArray[el - 1] === ticTacArray[combination[0] - 1]
    )
  )?.map(item => item - 1)

/**
 * Detects tie, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const gameTie = (ticTacArray: TicTacToeData): boolean => ticTacArray.every(el => el != null)

/**
 * Detects move to go for win, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const winMove = (ticTacArray: TicTacToeData, user: string): MarkIndicatorData => {
  const currentArray = ticTacArray?.map((item, index) => {
    if (ticTacArray[index] == null) {
      ticTacArray[index] = user
      const result = winCells(ticTacArray)
      ticTacArray[index] = null
      return result
    } else {
      return null
    }
  })
  return currentArray.filter(el => el != null).flat() as MarkIndicatorData
}

/**
 * Detects move for not loosing, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const undefeatedMove = (ticTacArray: TicTacToeData, user: string): MarkIndicatorData => {
  const tempTicTacArray = [...ticTacArray]
  const currentArray = ticTacArray?.map((item, index) => {
    let result = null
    if (ticTacArray[index] == null) {
      ticTacArray[index] = user
      for (let i = 0; i < tempTicTacArray.length; i++) {
        if (tempTicTacArray[i] == null && i != index) {
          tempTicTacArray[i] = user === X_MARK ? O_MARK : X_MARK
          result = winCells(tempTicTacArray)
          tempTicTacArray[i] = null
          if (result && result?.length >= 2) {
            return result
          }
        }
      }

      ticTacArray[index] = item
      return item
    }
  })

  const resultAvoidList: MarkIndicatorData = currentArray.filter(el => el != null).flat() as MarkIndicatorData
  return resultAvoidList ? resultAvoidList : []
}

export { winCells, gameTie, winMove, undefeatedMove }
