import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavButtons extends Component {

  handleClickMenu = (e, content) => {
    this.props.setPathname(content)
    this.props.closeMenu(e)
  }
  render() {
    return (
      <div
        className={
          this.props.visible
            ? this.props.pathname.length > 1
              ? 'nav-buttons fast'
              : 'nav-buttons'
            : 'nav-buttons hidden'
        }>

        <img
          src={'../images/close.svg'}
          alt='image not found'
          id='close'
          className='buttons'
          onClick={this.props.closeMenu}
        />



        <Link
          to='/projs'
          onClick={e => this.handleClickMenu(e, '/projs')}
          className='router-link'>
          {'{'}projects{'}'}
        </Link>
        <Link
          to='/pics'
          onClick={e => this.handleClickMenu(e, '/pics')}
          className='router-link'>
          {'{'}photography{'}'}
        </Link>
        <Link
          to='/about'
          onClick={e => this.handleClickMenu(e, '/about')}
          className='router-link'>
          {'{'}about:me{'}'}
        </Link>
        <Link
          to='/contact'
          onClick={e => this.handleClickMenu(e, '/contact')}
          className='router-link'>
          {'{'}contact{'}'}
        </Link>
      </div>
    )
  }
}

export default NavButtons
