import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Routes from './Routes'
import ProfilePicture from './ProfilePicture/ProfilePicture'

class App extends Component {
  render() {
    return (
      <div className='app'>
        <Nav />
        <ProfilePicture />
        <div id='routes'>
          <Routes className={window.location.pathname === '/' ? 'home' : ''} />
        </div>
      </div>
    )
  }
}

export default App
