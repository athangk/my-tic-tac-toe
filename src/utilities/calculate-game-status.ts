import { O_MARK, WIN_COMBINATION, X_MARK } from "./constants"

/**
 * Detects win, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const winCells = (ticTacArray: (string | null)[]) =>
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
const gameTie = (ticTacArray: (string | null)[]): boolean => ticTacArray.every(el => el != null)

/**
 * Detects move to go for win, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */

const winMove = (ticTacArray: (string | null)[], user: string) => {
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
  return currentArray.filter(el => el != null).flat()
}

/**
 * Detects move for not loosing, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const undefeatedMove = (ticTacArray: (string | null)[], user: string) => {
  const currentArray = ticTacArray?.map((item, index) => {
    let result = null
    if (ticTacArray[index] == null) {
      ticTacArray[index] = user

      for (let i = 0; i < ticTacArray.length; i++) {
        if (ticTacArray[i] == null && i != index) {
          ticTacArray[i] = user === X_MARK ? O_MARK : X_MARK
          result = winCells(ticTacArray)
          if (result && result?.length >= 2) {
            console.log("result1", result)
            ticTacArray[i] = null
            return result
          }
        }
      }

      ticTacArray[index] = null
      console.log("result2", result)
      return result
    } else {
      return null
    }
  })

  const resultAvoidList = currentArray.filter(el => el != null).flat()

  return resultAvoidList ? resultAvoidList : []
}

export { winCells, gameTie, winMove, undefeatedMove }
