import { WIN_COMBINATION } from './Constants';




const gameWon = (ticTacArray: string[]): boolean => {
	return WIN_COMBINATION.some((combination) => {
		return combination.every(
			(el) =>
				ticTacArray[el - 1] === ticTacArray[combination[0] - 1] &&
				ticTacArray[el - 1] != null
		);
	});
};

const gameTie = (ticTacArray: string[]): boolean => {
	return ticTacArray.every((el) => {
		return el != null;
	});
};

export { gameWon, gameTie };
