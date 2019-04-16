import React, { Component } from 'react'
import Nav from './Nav'
import Routes from './Routes'

class MenuIcons extends Component {
  render() {
    return (
      <div className='menu-icon'>
        <img
          src={'../images/hamburger.svg'}
          alt='image not found'
          id='hamburger'
          className={this.state.menu ? 'hidden' : ''}
          onClick={this.toggleMenu}
        />
        <img
          src={'../images/close.svg'}
          alt='image not found'
          id='close'
          className={this.state.menu ? '' : 'hidden'}
          onClick={this.toggleMenu}
        />
      </div>
    )
  }
}

export default MenuIcons
