import { MarkIndicatorData, TicTacToeData } from '../models/models';
import { O_MARK, WIN_COMBINATION, X_MARK } from './tictactoe-constants';

/**
 * Detects win, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const winCells = (ticTacArray: TicTacToeData) =>
  WIN_COMBINATION.find(combination =>
    combination.every(
      el =>
        ticTacArray[el - 1] != null &&
        ticTacArray[el - 1] === ticTacArray[combination[0] - 1]
    )
  )?.map(item => item - 1);

/**
 * Detects tie, and returns cells
 * @param ticTacArray
 * @returns e.x. [1,3,6]
 */
const gameTie = (ticTacArray: TicTacToeData): boolean =>
  ticTacArray.every(el => el != null);

/**
 * Detects move to go for win, and returns cells
 * @param ticTacArray
 * @param user
 * @returns e.x. [1,3,6]
 */
const winMove = (
  ticTacArray: TicTacToeData,
  user: string
): MarkIndicatorData => {
  const currentArray = ticTacArray?.map((_, index) => {
    if (ticTacArray[index] == null) {
      ticTacArray[index] = user;
      const result = winCells(ticTacArray);
      ticTacArray[index] = null;
      return result;
    } else {
      return null;
    }
  });
  return currentArray.filter(el => el != null).flat() as MarkIndicatorData;
};

/**
 * Detects move for not loosing, and returns cells
 * @param ticTacArray
 * @param user
 * @returns e.x. [1,3,6]
 */
const undefeatedMove = (
  tiTacArray: TicTacToeData,
  user: string
): MarkIndicatorData => {
  const sameUser = user === X_MARK ? O_MARK : X_MARK;
  return winMove(tiTacArray, sameUser);
};

export { winCells, gameTie, winMove, undefeatedMove };
