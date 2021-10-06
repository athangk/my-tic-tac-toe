import { FC } from 'react';
import  { BoardCell }  from './BoardCell';

interface ChildProps {
	ticTacArray: string[] | null[];
	handleClick: (num: number) => void;
}

export const Board: FC<ChildProps> = (props) => {
	return (
		<>
			<div className="grid">
				{props.ticTacArray.map((_, i) => (
					<BoardCell
						key={i}
						num={i}
						handleClick={() => props.handleClick(i)}
						cellValue={props.ticTacArray[i]}
					/>
				))}
			</div>
		</>
	);
};
