import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import './index.css'

import MatchCard from '../MatchCard'

import LatestMatch from '../LatestMatch'

class TeamMatches extends Component {
  state = {
    BannerUrl: '',
    matchDetails: {},
    recentMatchDetails: [],
    isLoading: true,
  }

  componentDidMount() {
    this.getMatchDetails()
  }

  getMatchDetails = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    console.log(data)
    const latestMatchData = data.latest_match_details
    const teamBannerUrl = data.team_banner_url
    const latestMatchDetails = {
      umpires: latestMatchData.umpires,
      result: latestMatchData.result,
      manOfTheMatch: latestMatchData.man_of_the_match,
      id: latestMatchData.id,
      venue: latestMatchData.venue,
      date: latestMatchData.date,
      competingTeam: latestMatchData.competing_team,
      competingTeamLogo: latestMatchData.competing_team_logo,
      firstInnings: latestMatchData.first_innings,
      secondInnings: latestMatchData.second_innings,
      matchStatus: latestMatchData.match_status,
    }
    const recentMatches = data.recent_matches.map(eachItem => ({
      umpire: eachItem.umpire,
      manOfTheMatch: eachItem.man_of_the_match,
      result: eachItem.result,
      id: eachItem.id,
      date: eachItem.date,
      venue: eachItem.venue,
      competingTeam: eachItem.competing_team,
      competingTeamLogo: eachItem.competing_team_logo,
      firstInnings: eachItem.first_innings,
      secondInnings: eachItem.second_innings,
      matchStatus: eachItem.match_status,
    }))
    this.setState({
      BannerUrl: teamBannerUrl,
      matchDetails: latestMatchDetails,
      recentMatchDetails: recentMatches,
      isLoading: false,
    })
  }

  render() {
    const {BannerUrl, matchDetails, recentMatchDetails, isLoading} = this.state

    return (
      <div className="match-bg-container">
        <div>
          <img src={BannerUrl} className="banner" alt="team banner" />
        </div>
        <ul>
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" height={50} weight={50} />
            </div>
          ) : (
            <LatestMatch key={matchDetails.id} matchDetails={matchDetails} />
          )}
        </ul>
        <ul className="ul-container">
          {recentMatchDetails.map(eachItem => (
            <MatchCard key={eachItem.id} matchCardDetails={eachItem} />
          ))}
        </ul>
      </div>
    )
  }
}

export default TeamMatches
