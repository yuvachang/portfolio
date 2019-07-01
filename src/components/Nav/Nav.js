import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { NavButtons, Menu } from '../index'
import NavMenu from './NavMenu'

class Nav extends Component {
  state = {
    menu: false,
    // pathname: '/',
    showBackToTop: false,
    screenWidth: 0,
  }

  // openMenu = e => {
  //   if (this.state.menu && e.target.id === 'headshot') return
  //   this.setState({
  //     menu: !this.state.menu,
  //   })
  // }

  // closeMenu = e => {
  //   if (
  //     this.state.menu &&
  //     e.target.id !== 'headshot' &&
  //     e.target.id !== 'menu-button'
  //   ) {
  //     this.setState({
  //       menu: false,
  //     })
  //   }
  // }

  // setPathname = content => {
  //   this.setState({
  //     pathname: content,
  //   })
  // }

  // scrollFunc = e => {
  //   if (window.scrollY > 500 && !this.state.showBackToTop) {
  //     this.setState({
  //       showBackToTop: true,
  //     })
  //   } else {
  //     if (window.scrollY < 700 && this.state.showBackToTop) {
  //       this.setState({
  //         showBackToTop: false,
  //       })
  //     }
  //   }
  // }

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
    // document.addEventListener('scroll', e => this.scrollFunc(e))

    // if (window.location.pathname !== '/') {
    //   this.setState({
    //     pathname: window.location.pathname,
    //   })
    // }
  }

  componentWillUnmount() {
    window.removeEventListener('resize', e => this.updateScreenWidth(e))
    // document.removeEventListener('scroll', e => this.scrollFunc(e))
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
export default withRouter(Nav)
// export default Nav
