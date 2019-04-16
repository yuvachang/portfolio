import React, { Component } from 'react'
import {Link} from 'react-router-dom'

class Menu extends Component {
  handleClickOutside = event => {
    if (this.node.contains(event.target)) return
    // if (!this.props.openItem) {
      this.props.closeMenu(event)
    // }
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
    console.log(this.props.openContent)
    return (
      <div
        className={this.props.visible ? (this.props.openContent ? 'menu fast' : 'menu') : 'menu hidden'}
        ref={node => {
          this.node = node
        }}>
        {/* <h4 id='close' onClick={this.props.closeMenu}>{'<<'}</h4> */}
        <img
          src={'../images/close.svg'}
          alt='image not found'
          id='close'
          onClick={this.props.closeMenu}
        />

        <ul>
          <li>
            {'{'}design:make{'}'}
          </li>
          <Link to='/pics' onClick={(e) => this.handleClickMenu(e, 'pics')} className='router-link'>
          <li>
            {'{'}photography{'}'}
          </li>
          </Link>
          <Link to='/resume' onClick={(e) => this.handleClickMenu(e, 'resume')} className='router-link' >
          <li>
            {'{'}resume{'}'}
          </li>
          </Link>
          <li>
            {'{'}about:me{'}'}
          </li>
          <li>
            {'{'}contact{'}'}
          </li>
        </ul>
      </div>
    )
  }
}

export default Menu
