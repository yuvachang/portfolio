import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LinksAndFiles from './LinksAndFiles'

let unlistenHistory

class ProfilePicture extends Component {
  state = { pathname: '/' }

  urlListener = async () => {
    await this.setState({ pathname: window.location.pathname })
  }

  componentDidMount = async () => {
    unlistenHistory = this.props.history.listen(this.urlListener)
    await this.urlListener()
  }

  componentWillUnmount = () => {
    unlistenHistory()
  }

  render() {
    const { pathname } = this.state
    return (
      <div
        id='profile-pic-container'
        className={pathname !== '/' || this.props.hidePicture ? 'collapsed' : ''}>
        <div className='profile-picture' />
        <LinksAndFiles />
      </div>
    )
  }
}

export default withRouter(ProfilePicture)
