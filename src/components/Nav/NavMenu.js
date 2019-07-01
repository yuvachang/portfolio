import React, { Component } from 'react'
import { connect, Link } from 'react-router-dom'

class NavMenu extends Component {
  state = {
    open: true,
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
    // e.stopPropagation()
    console.log(this.state.open)
    if (
      !e.target.contains(this.menu) &&
      !e.target.className.includes('hamburger') &&
      !!this.state.open
    ) {
      console.log('closingmenu', this.state.open)
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
    return (
      <div className='nav-menu'>
        <div
          className={`nav-links-container ${open ? '' : 'closed'}`}
          ref={node => (this.menu = node)}>
          <div className='nav-links'>
            <Link to='/projects' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  window.location.pathname === '/projects' ? 'selected' : ''
                }`}>
                Projects
              </div>
            </Link>
            <Link to='/photography' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  window.location.pathname === '/photography' ? 'selected' : ''
                }`}>
                Photography
              </div>
            </Link>
            <Link to='/contact' onClick={() => this.toggleMenu('close')}>
              <div
                className={`nav-link ${
                  window.location.pathname === '/contact' ? 'selected' : ''
                }`}>
                Contact
              </div>
            </Link>
          </div>
        </div>

        <img
          src={open ? '/images/close.svg' : '/images/hamburger.svg'}
          className='hamburger icon clickable'
          onClick={this.toggleMenu}
        />

        {/* <div className='bottom-marker-container'>
          <div className='nav-marker' />
        </div> */}
      </div>
    )
  }
}

export default NavMenu
