import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Menu extends Component {
  handleClickOutside = event => {
    if (this.node.contains(event.target)) return
    this.props.closeMenu(event)
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside)
  }
  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside)
  }

  handleClickMenu = (e, content) => {
    this.props.setOpenContent(content)
    this.props.closeMenu(e)
  }

  render() {
    return (
      <div
        className={
          this.props.visible
            ? this.props.openContent
              ? 'menu fast'
              : 'menu'
            : 'menu hidden'
        }
        ref={node => {
          this.node = node
        }}>
        <img
          src={'../images/close.svg'}
          alt='image not found'
          id='close'
          onClick={this.props.closeMenu}
        />

        <ul>
          <Link
            to='/'
            onClick={e => this.handleClickMenu(e, null)}
            className='router-link'
            >
            <li style={{marginBottom: '15px'}}>
              {'{'}yuva chang{'}'}
            </li>
          </Link>
          <li>
            {'{'}projects{'}'}
          </li>
          <Link
            to='/pics'
            onClick={e => this.handleClickMenu(e, 'pics')}
            className='router-link'>
            <li>
              {'{'}photography{'}'}
            </li>
          </Link>
          {/* <Link
            to='/resume'
            onClick={e => this.handleClickMenu(e, 'resume')}
            className='router-link'>
            <li>
              {'{'}resume{'}'}
            </li>
          </Link> */}
          <Link
            to='/about'
            onClick={e => this.handleClickMenu(e, 'about')}
            className='router-link'>
          <li>
            {'{'}about:me{'}'}
          </li>
          </Link>
          <li>
            {'{'}contact{'}'}
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
