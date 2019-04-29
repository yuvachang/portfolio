import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { NavButtons, Menu } from './index'

class Nav extends Component {
  state = {
    menu: false,
    pathname: '/',
    showBackToTop: false,
    screenWidth: 0,
  }

  openMenu = e => {
    if (this.state.menu && e.target.id === 'headshot') return
    this.setState({
      menu: !this.state.menu,
    })
  }

  closeMenu = e => {
    if (
      this.state.menu &&
      e.target.id !== 'headshot' &&
      e.target.id !== 'menu-button'
    ) {
      this.setState({
        menu: false,
      })
    }
  }

  setPathname = content => {
    this.setState({
      pathname: content,
    })
  }

  scrollFunc = e => {
    if (window.scrollY > 500 && !this.state.showBackToTop) {
      this.setState({
        showBackToTop: true,
      })
    } else {
      if (window.scrollY < 700 && this.state.showBackToTop) {
        this.setState({
          showBackToTop: false,
        })
      }
    }
  }

  updateScreenWidth = e => {
    this.setState({
      screenWidth: window.innerWidth,
    })
  }

  componentDidMount() {
    this.updateScreenWidth()
    document.addEventListener('scroll', e => this.scrollFunc(e))
    window.addEventListener('resize', e => this.updateScreenWidth(e))

    if (window.location.pathname !== '/') {
      this.setState({
        pathname: window.location.pathname,
      })
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.location !== window.location) {
      if (this.state.pathname !== window.location.pathname) {
        this.updateScreenWidth()
        this.setState({
          pathname: window.location.pathname,
        })
      }
    }
  }

  componentWillUnmount() {
    document.removeEventListener('scroll', e => this.scrollFunc(e))
    window.removeEventListener('resize', e => this.updateScreenWidth(e))
  }

  render() {
    return (
      <div>
        {this.state.pathname !== '/' && (
          <img
            src='../images/hamburger.svg'
            id='menu-icon'
            className={this.state.menu ? 'closed' : ''}
            onClick={this.openMenu}
          />
        )}

        <div
          className={
            this.state.menu || this.state.pathname.length > 1
              ? window.location.pathname === '/about'
                ? 'headshot-div aboutme'
                : 'headshot-div open-menu'
              : 'headshot-div'
          }
          style={window.location.pathname === '/'?{flexDirection:'row'}:{}}
          >
          {/* HEADSHOT */}
          <img
            className={
              this.state.menu && window.location.pathname === '/'
                ? 'open-menu'
                : 'closed-menu'
            }
            id='headshot'
            src='favicon.ico'
            alt='image not found'
            onClick={this.openMenu}
          />

          {/* NAMETAG */}
          <div
            className={window.location.pathname === '/about' ? '' : 'hide'}
            id='nametag'>
            yuva chang
          </div>
          {/* CLICK */}
          <div
            className={window.location.pathname === '/'&&!this.state.menu ? '' : 'hide'}
            id='nametag'
            style={{
              fontSize: '1.5em',
              width: '0px',
              // textAlign: 'center',
              // paddingLeft: '1em',
              display: 'flex',
              alignItems: 'center'}}>
            &nbsp;&nbsp;{'<<CLICK'}
          </div>
        </div>
        <Menu
          visible={this.state.menu}
          closeMenu={this.closeMenu}
          setPathname={this.setPathname}
          pathname={this.state.pathname}
        />
        <div
          id='backtotop'
          className={this.state.showBackToTop ? '' : 'closed'}
          onClick={() => {
            window.scroll({ top: 0, left: 0, behavior: 'smooth' })
          }}>
          top
        </div>

        {/* LOWER RIGHT MENU BUTTON */}
        {this.state.screenWidth > 700 ? (
          <div
            id='menu-button'
            className={this.state.showBackToTop ? '' : 'closed'}
            onClick={this.openMenu}>
            menu
          </div>
        ) : (
          <img
            src='../images/hamburger.svg'
            id='menu-button'
            className={
              this.state.menu
                ? 'icon closed'
                : this.state.showBackToTop
                ? 'icon'
                : ''
            }
            onClick={this.openMenu}
          />
        )}
      </div>
    )
  }
}

// withRouter will trigger componentDidUpdate with props.location
export default withRouter(Nav)
// export default Nav
