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

const winMove = (ticTacArray: (string | null)[], user: string): (number | null)[] => {
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
  return currentArray.filter(el => el != null).flat() as (number | null)[]
}

/**
 * Detects move for not loosing, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const undefeatedMove = (ticTacArray: (string | null)[], user: string) => {
  const tempTicTacArray = [...ticTacArray]
  const currentArray = ticTacArray?.map((item, index) => {
    let result = null
    if (ticTacArray[index] == null) {
      ticTacArray[index] = user
      console.log("first run", index, item)
      for (let i = 0; i < tempTicTacArray.length; i++) {
        if (tempTicTacArray[i] == null && i != index) {
          console.log("second run", i, tempTicTacArray[i])
          tempTicTacArray[i] = user === X_MARK ? O_MARK : X_MARK
          result = winCells(tempTicTacArray)
          tempTicTacArray[i] = null
          console.log(" the wincell result ", result, tempTicTacArray)

          if (result && result?.length >= 2) {
            console.log("result1", result)

            return result
          }
        }
      }

      ticTacArray[index] = item
      console.log("result2", result)
      return item
    }
  })

  const resultAvoidList = currentArray.filter(el => el != null).flat()
  console.log("resultAvoidList", resultAvoidList)
  return resultAvoidList ? resultAvoidList : []
}

export { winCells, gameTie, winMove, undefeatedMove }
