import { FC } from 'react';

interface PlayerProps {
	user: string;
	winner: string | null;
	tie: boolean;
}

export const Player: FC<PlayerProps> = (props) => {
	return (
		<div className="player-message-container">
			{!props.winner && <span>Player:{props.user}</span>}
			{props.winner && <span className="winner__label">Winner: {props.user}</span>}
			
			{props.tie && <div>Its a tie!</div>}
		</div>
	);
};
