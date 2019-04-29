import React, { Component } from 'react'
// import { withRouter } from 'react-router-dom'
import Menu from './Menu'

export default PageComponent => {
  class NavButtons extends Component {
    state = {
      menu: false,
      pathname: '/',
      showBackToTop: false,
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

    // OLD NAV COMPONENT ^^^^^^^^^^^^^

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

    componentDidMount() {
      document.addEventListener('scroll', e => this.scrollFunc(e))
      if (window.location.pathname !== '/') {
        this.setState({
          pathname: window.location.pathname,
        })
      }
    }

    componentWillUnmount() {
      document.removeEventListener('scroll', e => this.scrollFunc(e))
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
            <div
              className={window.location.pathname === '/about' ? '' : 'hide'}
              id='nametag'>
              yuva chang
            </div>
            {/* <img
            className={window.location.pathname === '/about' ? '' : 'hide'}
            id='nametag'
            src='../images/neon.gif'
          /> */}
          </div>

          <Menu
            visible={this.state.menu}
            closeMenu={this.closeMenu}
            setPathname={this.setPathname}
            pathname={this.state.pathname}
          />

          {/* END OLD NAV COMPONENT */}

          <PageComponent {...this.props} />

          <div
            id='backtotop'
            className={this.state.showBackToTop ? '' : 'closed'}
            onClick={() => {
              window.scroll({ top: 0, left: 0, behavior: 'smooth' })
            }}>
            ^
          </div>

          <div
            id='menu-button'
            className={this.state.showBackToTop ? '' : 'closed'}
            onClick={this.openMenu}>
            menu
          </div>
        </div>
      )
    }
  }

  return NavButtons
}
