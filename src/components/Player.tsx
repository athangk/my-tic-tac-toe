interface PlayerProps {
  user: string
  winner: string | null
  tie: boolean
}

export function Player({ user, winner, tie }: PlayerProps) {
  return (
    <div className="player-message-container">
      {!winner ? (
        <span className="player-label">Player:{user}</span>
      ) : (
        <span className="player-label winner">Winner: {user}</span>
      )}

      {tie && <div className="tie">Its a tie!</div>}
    </div>
  )
}
