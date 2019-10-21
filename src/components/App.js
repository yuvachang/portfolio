import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Nav from './Nav/Nav'
import Routes from './Routes'
import ProfilePicture from './ProfilePicture/ProfilePicture'
import axios from 'axios'

const COUNTER_ID = 'entry.1760996027'
const GOOGLE_FORM_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSfuKghlPk0EkEAbqLl-HJ14tgLNEyoMKzc1CWd7tp55-CjUhQ/formResponse'
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/'

class App extends Component {
  state = {
    showBackToTop: false,
    hidePicture: false,
  }

  backToTop = e => {
    let { showBackToTop, hidePicture } = this.state

    if (window.location.pathname === '/') return
    if (this.routes.scrollTop > 150 && !this.state.showBackToTop) {
      showBackToTop = true
    } else if (this.routes.scrollTop <= 150 && this.state.showBackToTop) {
      showBackToTop = false
    }
    this.setState({
      showBackToTop,
      hidePicture,
    })
  }

  scrollToTop = () => {
    this.routes.scrollTo(0, 0)
  }

  mouseWheel = e => {
    if (window.location.pathname !== '/') return
    const deltaY = e.deltaY
    let { hidePicture } = this.state

    if (hidePicture && deltaY < 0 && this.routes.scrollTop === 0) {
      hidePicture = false
    }
    if (!hidePicture && deltaY > 0 && this.routes.scrollTop >= 5) {
      hidePicture = true
    }

    this.setState({
      hidePicture,
    })
  }

  touchstartf = e => {
    this.touchstart = e.touches[0].clientY
  }

  touch = e => {
    if (!this.touchstart) return

    let { hidePicture } = this.state
    let thistouch = e.touches[0].clientY

    if (thistouch > this.touchstart && hidePicture && this.routes.scrollTop <= 5) {
      hidePicture = false
    } else if (thistouch < this.touchstart && !hidePicture) {
      hidePicture = true
    }

    this.setState({
      hidePicture,
    })
  }

  logVisit = () => {
    // Use Google Forms to log visit to site.
    const formData = new FormData()

    axios
      .get('https://freegeoip.app/json/')
      .then(response => {
        let { ip, city, region_name, zip_code, longitude, latitude } = response.data
        formData.append(
          COUNTER_ID,
          `visit from: \n ip: ${ip}, \n loc: ${city}, ${region_name}, ${zip_code} \n coor: ${latitude}, ${longitude}`
        )

        axios.post(CORS_PROXY + GOOGLE_FORM_URL, formData).catch(error => {
          // console.error(error)
        })
      })
      .catch(error => {
        console.error(error)
        formData.append(COUNTER_ID, `no ip data. error: ${error}`)

        axios.post(CORS_PROXY + GOOGLE_FORM_URL, formData).catch(error => {
          // console.error(error)
        })
      })
  }

  componentDidMount = () => {
    this.touchstart = false
    document.addEventListener('touchstart', e => this.touchstartf(e))
    document.addEventListener('touchmove', e => this.touch(e))

    window.addEventListener('wheel', e => this.mouseWheel(e))
    this.routes.addEventListener('scroll', e => this.backToTop(e))
    this.unlistenHistory = this.props.history.listen((loc, action) => {
      this.scrollToTop()
    })

    this.logVisit()
  }

  componentWillUnmount = () => {
    document.removeEventListener('touchstart', e => this.touchstartf(e))
    document.removeEventListener('touchmove', e => this.touch(e))

    window.removeEventListener('wheel', e => this.mouseWheel(e))
    this.routes.removeEventListener('scroll', e => this.backToTop(e))
    this.unlistenHistory()
  }

  render() {
    const { showBackToTop, hidePicture } = this.state
    return (
      <div className='app'>
        <Nav />
        <ProfilePicture hidePicture={hidePicture} />
        <div id='routes' ref={node => (this.routes = node)}>
          <Routes className={window.location.pathname === '/' ? 'home' : ''} />
        </div>
        <div className={`back-to-top ${showBackToTop ? '' : 'hidden'}`}>
          <div
            className='alink'
            onClick={() => {
              this.routes.scroll({ top: 0, left: 0, behavior: 'smooth' })
            }}>
            Back to top
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(App)
