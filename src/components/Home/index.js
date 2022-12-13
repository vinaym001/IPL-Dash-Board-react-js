import {Component} from 'react'

import Loader from 'react-loader-spinner'

import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardList: [], isLoading: true}

  componentDidMount() {
    this.getTeamCards()
  }

  getTeamCards = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const teamCardDetails = data.teams.map(Item => ({
      id: Item.id,
      name: Item.name,
      teamImageUrl: Item.team_image_url,
    }))
    this.setState({teamCardList: teamCardDetails, isLoading: false})
  }

  render() {
    const {isLoading} = this.state
    const {teamCardList} = this.state
    return (
      <div className="bg-container">
        <div className="ipl-heading-with-logo">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="ipl-logo"
          />
          <h1 className="heading">IPL Dashboard</h1>
        </div>
        <ul className="ul-container">
          {isLoading ? (
            <div testid="loader">
              <Loader type="Oval" color="#ffffff" height={50} weight={50} />
            </div>
          ) : (
            teamCardList.map(eachItem => (
              <TeamCard cardDetails={eachItem} key={eachItem.id} />
            ))
          )}
        </ul>
      </div>
    )
  }
}

export default Home
