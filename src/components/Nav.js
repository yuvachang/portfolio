import React, { Component } from 'react'
import Menu from './Menu'

class Nav extends Component {
  state = {
    menu: true,
    openContent: null,
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

  setOpenContent = content => {
    console.log(content)
    this.setState({
      openContent: content,
    })
  }

  componentDidMount() {
    if (window.location.pathname !== '/') {
      this.setState({
        openContent: window.location.pathname.slice(1),
      })
    }
  }

  render() {
    return (
      <div>
        <div
          className={
            this.state.menu || this.state.openContent
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
          setOpenContent={this.setOpenContent}
          openContent={this.state.openContent}
        />
      </div>
    )
  }
}

export default Nav
