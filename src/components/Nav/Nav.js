import React, { Component } from 'react'
import {
  Link,
  // withRouter
} from 'react-router-dom'
import NavMenu from './NavMenu'

class Nav extends Component {
  state = {
    menu: false,
    showBackToTop: false,
    screenWidth: 0,
  }

  updateScreenWidth = e => {
    this.setState({
      screenWidth: window.innerWidth,
    })
  }

  componentDidUpdate = prevProps => {
    // if (prevProps.location !== window.location) {
    //   if (this.state.pathname !== window.location.pathname) {
    //     this.updateScreenWidth()
    //     this.setState({
    //       pathname: window.location.pathname,
    //     })
    //   }
    // }
  }

  componentDidMount() {
    this.updateScreenWidth()
    window.addEventListener('resize', e => this.updateScreenWidth(e))
  }

  componentWillUnmount() {
    window.removeEventListener('resize', e => this.updateScreenWidth(e))
  }

  render() {
    return (
      <div id='nav'>
        <Link to='/'>
          <div className='title'>Yuva Chang</div>
        </Link>
        <NavMenu />
      </div>
    )
  }
}

// withRouter will trigger componentDidUpdate with props.location
// export default withRouter(Nav)
export default Nav
