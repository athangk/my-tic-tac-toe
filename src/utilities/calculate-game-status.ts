import { WIN_COMBINATION } from "./constants"

const winCells = (ticTacArray: string[]) =>
  WIN_COMBINATION.find(combination =>
    combination.every(
      el => ticTacArray[el - 1] != null && ticTacArray[el - 1] === ticTacArray[combination[0] - 1]
    )
  )?.map(item => item - 1)

const gameTie = (ticTacArray: string[]): boolean => ticTacArray.every(el => el != null)

export { winCells, gameTie }
