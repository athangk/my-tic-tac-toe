import { FC } from 'react';

interface PlayerProps {
	user: string;
	winner: string | null;
	tie: boolean;
}

export const Player: FC<PlayerProps> = (props) => {
	return (
		<div className="status__message">
			{!props.winner && <span>Player:</span>}
			{props.winner && <span>Winner:</span>}
			<span> {props.user} </span>
			{props.tie && <div>Its a tie!</div>}
		</div>
	);
};
