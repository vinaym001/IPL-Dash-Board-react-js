import './index.css'

const MatchCard = props => {
  const {matchCardDetails} = props
  const {
    id,
    competingTeam,
    competingTeamLogo,
    matchStatus,
    result,
  } = matchCardDetails
  const matchResultColor = matchStatus === 'Won' ? 'green' : 'red'
  return (
    <li className="match-card">
      <img
        src={competingTeamLogo}
        className="team-logo"
        alt={`competing team ${competingTeam}`}
      />
      <p>{competingTeam}</p>
      <p>{result}</p>
      <p className={matchResultColor}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
