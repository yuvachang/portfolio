import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import LinksAndFiles from './LinksAndFiles'

let unlistenHistory

class ProfilePicture extends Component {
  state = {
    pathname: '/',
  }

  urlListener = () => {
    this.setState({
      pathname: window.location.pathname,
    })
  }

  componentDidMount = () => {
    unlistenHistory = this.props.history.listen(this.urlListener)
    this.urlListener()
  }

  componentWillUnmount = () => {
    unlistenHistory()
  }

  render() {
    const { pathname } = this.state
    return (
      <div
        id='profile-pic-container'
        className={pathname !== '/' ? 'collapsed' : ''}>
        <div className='profile-picture' />
        <LinksAndFiles />
      </div>
    )
  }
}

export default withRouter(ProfilePicture)
