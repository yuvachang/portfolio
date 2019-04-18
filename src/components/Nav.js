import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import Menu from './Menu'

class Nav extends Component {
  state = {
    menu: false,
    pathname: '/',
  }

  openMenu = e => {
    if (!this.state.menu) {
      this.setState({
        menu: true,
      })
    }
  }

  closeMenu = e => {
    e.stopPropagation()
    if (this.state.menu && e.target.id !== 'headshot') {
      this.setState({
        menu: false,
      })
    }
  }

  setPathname = content => {
    console.log(content)
    this.setState({
      pathname: content,
    })
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.setState({
        pathname: window.location.pathname.slice(1),
      })
    }
  }

  componentDidUpdate = prevProps => {
    if (prevProps.location !== this.props.location) {
      if (this.state.pathname !== this.props.location.pathname) {
        this.setState({
          pathname: this.props.location.pathname,
        })
      }
    }
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.menu || this.state.pathname.length > 1
              ? window.location.pathname === '/about'
                ? 'headshot-div aboutme'
                : 'headshot-div open-menu'
              : 'headshot-div'
          }>
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
          <img
            id={
              window.location.pathname === '/about'
                ? 'show-nametag'
                : 'hide-nametag'
            }
            src='../images/neon.gif'
          />
        </div>

        <Menu
          visible={this.state.menu}
          closeMenu={this.closeMenu}
          setPathname={this.setPathname}
          pathname={this.state.pathname}
        />
      </div>
    )
  }
}

export default withRouter(Nav)
// export default Nav
