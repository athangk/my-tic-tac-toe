import { FC } from 'react';

interface PlayerProps {
	user: string;
	winner: string | null;
	tie: boolean;
}

export const Player: FC<PlayerProps> = (props) => {
	return (
	
		<div className="player-message-container">
			{!props.winner && <span className="player-label">Player:{props.user}</span>}
			{props.winner && <span className="player-label winner">Winner: {props.user}</span>}
			
			{props.tie && <div className="tie">Its a tie!</div>}
		</div>
	);
};
