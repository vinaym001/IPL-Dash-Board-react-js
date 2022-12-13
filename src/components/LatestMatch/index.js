import './index.css'

const LatestMatch = props => {
  const {matchDetails} = props
  const {
    umpires,
    manOfTheMatch,
    date,
    venue,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    result,
  } = matchDetails
  return (
    <li className="latest-match-container">
      <div>
        <p>{competingTeam}</p>
        <p>{date}</p>
        <p>{venue}</p>
        <p>{result}</p>
      </div>
      <img
        src={competingTeamLogo}
        className="logo"
        alt={`latest match ${competingTeam}`}
      />
      <div className="match-details">
        <h1>First Innings</h1>
        <p>{firstInnings}</p>
        <h1>Second Innings</h1>
        <p>{secondInnings}</p>
        <h1>Man Of The Match</h1>
        <p>{manOfTheMatch}</p>
        <p>Umpires</p>
        <p>{umpires}</p>
      </div>
    </li>
  )
}

export default LatestMatch
