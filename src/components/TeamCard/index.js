import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {cardDetails} = props
  const {id, name, teamImageUrl} = cardDetails
  return (
    <Link to={`/team-matches/${id}`} className="link-item">
      <li className="li-container">
        <img src={teamImageUrl} alt={name} className="team-logo" />
        <p className="name">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
