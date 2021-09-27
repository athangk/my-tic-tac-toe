import { FC, useState } from 'react';
import { gameWon, gameTie } from '../utilities/calculateWin';
import { Board } from './Board/Board';
import { Player } from './Player';

export const TicTacToe: FC = () => {
	const [user, setUser] = useState<string>('X');
	const [ticTacArray, setTicTacArray] = useState<string[]>(Array(9).fill(null));
	const [winner, setWinner] = useState<string | null>(null);
	const [tie, setTie] = useState<boolean>(false);

	const handleClick = (num: number) => {
		// cell has value, or a win is made
		if (ticTacArray[num] || winner) {
			return;
		}

		// update tictactoe array
		let sliceTicTac = ticTacArray.slice();
		sliceTicTac[num] = user;
		setTicTacArray(sliceTicTac);

		// check win
		let isWon = gameWon(sliceTicTac);
		if (isWon) {
			setWinner(user);
			return;
		}

		// check draw
		let isTie = gameTie(sliceTicTac);
		if (isTie) {
			setTie(isTie);
			return;
		}

		//change user
		let currentUser = user === 'X' ? 'O' : 'X';
		setUser(currentUser);
	};

	const newGame = () => {
		setTicTacArray(Array(9).fill(null));
		setUser('X');
		setWinner(null);
		setTie(false);
	};

	return (
		<>
			<Player user={user} winner={winner} tie={tie} />
			<Board ticTacArray={ticTacArray} handleClick={(e) => handleClick(e)} />
			<button className="newGameBtn" onClick={newGame}>
				New Game
			</button>
		</>
	);
};
