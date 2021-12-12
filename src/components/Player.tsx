interface PlayerProps {
  user: string
  winner: string | null
  tie: boolean
}

function Player({ user, winner, tie }: PlayerProps) {
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

export default Player
