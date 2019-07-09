import React, { Component } from 'react'
import Nav from './Nav/Nav'
import Routes from './Routes'
import ProfilePicture from './ProfilePicture/ProfilePicture'

class App extends Component {
  state = {
    showBackToTop: false,
  }

  scrollFunc = e => { 
    if (window.location.pathname === '/') return
    if (this.photosPage.scrollTop > 150 && !this.state.showBackToTop) {
      this.setState({
        showBackToTop: true,
      })
    } else if (this.photosPage.scrollTop <= 150 && this.state.showBackToTop) {
      this.setState({
        showBackToTop: false,
      })
    }
  }

  componentDidMount = () => {
    this.photosPage.addEventListener('scroll', e => this.scrollFunc(e))
  }

  componentWillUnmount = () => {
    this.photosPage.removeEventListener('scroll', e => this.scrollFunc(e))
  }

  render() {
    const { showBackToTop } = this.state
    return (
      <div className='app'>
        <Nav />
        <ProfilePicture />
        <div id='routes' ref={node => (this.photosPage = node)}>
          <Routes className={window.location.pathname === '/' ? 'home' : ''} />
        </div>
        <div className={`back-to-top ${showBackToTop ? '' : 'hidden'}`}>
          <div
            className='alink'
            onClick={() => {
              this.photosPage.scroll({ top: 0, left: 0, behavior: 'smooth' })
            }}>
            Back to top
          </div>
        </div>
      </div>
    )
  }
}

export default App
