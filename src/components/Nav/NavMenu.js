import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class NavMenu extends Component {
  state = {
    open: false,
  }

  toggleMenu = action => {
    if (action === 'close') {
      this.setState({
        open: false,
      })
    } else {
      this.setState({
        open: !this.state.open,
      })
    }
  }

  handleResize = () => {
    const width = window.innerWidth
    if (width < 600) {
      this.setState({
        open: false,
      })
    }
  }

  clickListener = e => {
    if (
      !e.target.contains(this.menu) &&
      !e.target.className.includes('hamburger') &&
      !!this.state.open
    ) {
      this.toggleMenu('close')
    }
  }

  componentDidMount = () => {
    window.addEventListener('resize', this.handleResize)
    document.addEventListener('click', this.clickListener)
    this.handleResize()
  }

  componentWillUnmount = () => {
    window.removeEventListener('resize', this.handleResize)
    document.removeEventListener('click', this.clickListener)
  }

  render() {
    const { open } = this.state
    const {location} = this.props
    return (
      <div className='nav-menu'>
        <div
          className={`nav-links-container ${open ? '' : 'closed'}`}
          ref={node => (this.menu = node)}>
          <div className='nav-links'>
            <Link to='/projects' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  location.pathname === '/projects' ? 'selected' : ''
                }`}>
                Projects
              </div>
            </Link>
            <Link to='/photography' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  location.pathname === '/photography' ? 'selected' : ''
                }`}>
                Photography
              </div>
            </Link>
            <Link to='/contact' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  location.pathname === '/contact' ? 'selected' : ''
                }`}>
                Contact
              </div>
            </Link>
          </div>
        </div>

        <img
          src={open ? '/images/icons/close.svg' : '/images/icons/hamburger.svg'}
          alt='menu'
          className='hamburger icon clickable'
          onClick={this.toggleMenu}
        />
      </div>
    )
  }
}

// withRouter will trigger update/rerender with props.location
export default withRouter(NavMenu)
